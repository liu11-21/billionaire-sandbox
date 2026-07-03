import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

function githubFile(path) {
  const cached = resolve(root, "data", "source", "forbes-2026.csv");
  if (existsSync(cached)) return readFileSync(cached, "utf8").replace(/^\uFEFF/, "");
  return execFileSync(
    "gh",
    [
      "api",
      `repos/open-numbers/ddf--gapminder--billionaires/contents/${path}`,
      "-H",
      "Accept: application/vnd.github.raw+json",
    ],
    { encoding: "utf8", maxBuffer: 30 * 1024 * 1024 },
  );
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;

  for (let i = 0; i < text.length; i += 1) {
    const ch = text[i];
    if (quoted) {
      if (ch === '"' && text[i + 1] === '"') {
        cell += '"';
        i += 1;
      } else if (ch === '"') {
        quoted = false;
      } else {
        cell += ch;
      }
    } else if (ch === '"') {
      quoted = true;
    } else if (ch === ",") {
      row.push(cell);
      cell = "";
    } else if (ch === "\n") {
      row.push(cell.replace(/\r$/, ""));
      rows.push(row);
      row = [];
      cell = "";
    } else {
      cell += ch;
    }
  }
  if (cell || row.length) {
    row.push(cell);
    rows.push(row);
  }

  const headers = rows.shift();
  return rows
    .filter((values) => values.some(Boolean))
    .map((values) => Object.fromEntries(headers.map((header, index) => [header, values[index] ?? ""])));
}

const people = parseCsv(githubFile("etl/source/forbes/2026.csv"));
const roster = people
  .filter((person) => person.rank && person.worth)
  .map((person) => ({
    id: person.uri,
    name: person.name,
    country: person.country || "Unknown",
    industry: person.industry || "Diversified",
    company: person.source || "Private holdings",
    worth: Number(person.worth) / 1000,
    rank: Number(person.rank),
  }))
  .sort((a, b) => a.rank - b.rank);

if (roster.length !== 3428) {
  throw new Error(`Expected 3428 people in the 2026 roster, received ${roster.length}.`);
}

mkdirSync(resolve(root, "data"), { recursive: true });
writeFileSync(
  resolve(root, "data", "roster.js"),
  `window.BILLIONAIRES=${JSON.stringify(roster)};\n`,
  "utf8",
);
console.log(`Generated ${roster.length} playable billionaires.`);

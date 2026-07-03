const roster = window.BILLIONAIRES || [];

const shopItems = [
  { id: "coffee", icon: "☕", category: "日常", name: "精品咖啡", price: 8, copy: "即使擁有一切，早晨還是需要咖啡。" },
  { id: "sneakers", icon: "👟", category: "日常", name: "限量球鞋", price: 2400, copy: "全球僅發售 100 雙的收藏款。" },
  { id: "supercar", icon: "🏎️", category: "交通", name: "限量超跑", price: 3500000, copy: "碳纖維車體、手工引擎，以及沒有意義的極速。" },
  { id: "jet", icon: "✈️", category: "交通", name: "長程私人飛機", price: 78000000, copy: "臥室、會議室與 14,000 公里航程。" },
  { id: "yacht", icon: "🛥️", category: "交通", name: "百米超級遊艇", price: 420000000, copy: "含兩座直升機坪與一艘迷你潛艇。" },
  { id: "island", icon: "🏝️", category: "地產", name: "私人島嶼", price: 85000000, copy: "一整片海岸線，不需要共享定位。" },
  { id: "tower", icon: "🏙️", category: "地產", name: "曼哈頓摩天樓", price: 2400000000, copy: "73 層辦公、住宅與空中花園。" },
  { id: "moon", icon: "🌕", category: "地產", name: "月球研究基地", price: 18000000000, copy: "尚未完工，但地址已經足夠有說服力。" },
  { id: "masterpiece", icon: "🖼️", category: "收藏", name: "博物館級名畫", price: 195000000, copy: "藝術史的一頁，現在掛在你的牆上。" },
  { id: "dinosaur", icon: "🦖", category: "收藏", name: "暴龍化石", price: 32000000, copy: "一具保存完整、可以鎮住董事會的暴龍。" },
  { id: "team", icon: "🏀", category: "企業", name: "職業籃球隊", price: 4200000000, copy: "從球員交易到冠軍戒指，全由你決定。" },
  { id: "studio", icon: "🎬", category: "企業", name: "電影製片廠", price: 7800000000, copy: "片庫、攝影棚與下一個票房宇宙。" },
  { id: "airline", icon: "🛫", category: "企業", name: "國際航空公司", price: 14500000000, copy: "航線遍及六大洲，附帶大量營運問題。" },
  { id: "space", icon: "🚀", category: "體驗", name: "繞月旅行", price: 150000000, copy: "七天、兩位賓客，以及真正的地球全景。" },
  { id: "concert", icon: "🎤", category: "體驗", name: "私人世界巡演", price: 28000000, copy: "把最喜歡的歌手和舞台搬到你的後院。" },
  { id: "meal", icon: "🍽️", category: "體驗", name: "米其林主廚晚宴", price: 180000, copy: "十二道菜，只招待你指定的十二個人。" },
];

const investments = [
  { id: "global", icon: "◎", name: "全球指數基金", risk: "低風險", mean: .075, volatility: .11, yield: .018, range: "−4% — +19%", copy: "分散持有全球大型企業，波動相對溫和。" },
  { id: "bonds", icon: "▤", name: "主權債券", risk: "低風險", mean: .04, volatility: .035, yield: .035, range: "0% — +8%", copy: "政府債務組合，以穩定現金流為主。" },
  { id: "estate", icon: "⌂", name: "核心城市地產", risk: "中風險", mean: .085, volatility: .13, yield: .035, range: "−5% — +22%", copy: "商辦、物流中心、住宅與資料中心。" },
  { id: "tech", icon: "⌘", name: "前沿科技基金", risk: "高風險", mean: .16, volatility: .32, yield: .004, range: "−28% — +48%", copy: "AI、機器人、半導體與太空科技。" },
  { id: "venture", icon: "△", name: "新創創投組合", risk: "極高風險", mean: .22, volatility: .5, yield: 0, range: "−50% — +72%", copy: "數十家早期公司；少數贏家承擔全部希望。" },
  { id: "crypto", icon: "₿", name: "加密資產", risk: "極高風險", mean: .2, volatility: .65, yield: .01, range: "−65% — +85%", copy: "高流動、高波動，市場全年無休。" },
];

const $ = (selector) => document.querySelector(selector);
const money = (value) => {
  const abs = Math.abs(value);
  const sign = value < 0 ? "−" : "";
  if (abs >= 1e12) return `${sign}$${(abs / 1e12).toFixed(abs >= 1e13 ? 1 : 2)}T`;
  if (abs >= 1e9) return `${sign}$${(abs / 1e9).toFixed(abs >= 1e11 ? 0 : 1)}B`;
  if (abs >= 1e6) return `${sign}$${(abs / 1e6).toFixed(1)}M`;
  if (abs >= 1e3) return `${sign}$${(abs / 1e3).toFixed(1)}K`;
  return `${sign}$${Math.round(abs).toLocaleString("en-US")}`;
};

let currentShopCategory = "全部";
let state = null;
let toastTimer;

function initials(name) {
  return name.split(/\s+/).slice(0, 2).map((part) => part[0]).join("").toUpperCase();
}

function defaultState(person) {
  const total = person.worth * 1e9;
  return {
    personId: person.id,
    year: 2026,
    initialWorth: total,
    cash: total * .08,
    empire: total * .92,
    holdings: {},
    inventory: [],
    events: [{ year: 2026, text: `以 Forbes #${person.rank} 的身分開始遊戲。` }],
    lastChange: 0,
  };
}

function storageKey(id) { return `billionaire-sandbox-v1:${id}`; }
function save() { if (state) localStorage.setItem(storageKey(state.personId), JSON.stringify(state)); }

function selectedPerson() {
  return roster.find((person) => person.id === state?.personId);
}

function holdingValue() {
  return Object.values(state?.holdings || {}).reduce((sum, holding) => sum + holding.value, 0);
}

function netWorth() {
  return state ? state.cash + state.empire + holdingValue() : 0;
}

function passiveIncome() {
  if (!state) return 0;
  return Object.entries(state.holdings).reduce((sum, [id, holding]) => {
    const asset = investments.find((item) => item.id === id);
    return sum + holding.value * (asset?.yield || 0);
  }, state.empire * .008);
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
}

function choosePerson(id) {
  const person = roster.find((item) => item.id === id);
  if (!person) return;
  const saved = localStorage.getItem(storageKey(id));
  state = saved ? JSON.parse(saved) : defaultState(person);
  localStorage.setItem("billionaire-sandbox:last-person", id);
  $("#character-dialog").close();
  renderAll();
  showToast(`現在，你是 ${person.name}`);
}

function renderHeader() {
  if (!state) return;
  const person = selectedPerson();
  const total = netWorth();
  const holdings = holdingValue();
  const denominator = total || 1;
  $("#game-year").textContent = state.year;
  $("#rank-kicker").textContent = `FORBES 2026 · #${person.rank}`;
  $("#avatar").textContent = initials(person.name);
  $("#player-name").textContent = person.name;
  $("#player-detail").textContent = `${person.industry} · ${person.company || person.country}`;
  $("#net-worth").textContent = money(total);
  $("#cash").textContent = money(state.cash);
  $("#income").textContent = money(passiveIncome());
  $("#wealth-change").textContent = state.lastChange
    ? `上一年度 ${state.lastChange >= 0 ? "▲" : "▼"} ${money(Math.abs(state.lastChange))}`
    : `初始資產 ${money(state.initialWorth)}`;
  $("#wealth-change").style.color = state.lastChange >= 0 ? "var(--mint)" : "var(--orange)";
  $("#bar-empire").style.width = `${Math.max(0, state.empire / denominator * 100)}%`;
  $("#bar-investments").style.width = `${Math.max(0, holdings / denominator * 100)}%`;
  $("#bar-cash").style.width = `${Math.max(0, state.cash / denominator * 100)}%`;
}

function renderShopFilters() {
  const categories = ["全部", ...new Set(shopItems.map((item) => item.category))];
  $("#shop-filters").innerHTML = categories.map((category) =>
    `<button class="filter-chip ${category === currentShopCategory ? "active" : ""}" data-category="${category}">${category}</button>`
  ).join("");
}

function renderShop() {
  renderShopFilters();
  const visible = currentShopCategory === "全部" ? shopItems : shopItems.filter((item) => item.category === currentShopCategory);
  $("#shop-grid").innerHTML = visible.map((item) => `
    <article class="shop-card" data-icon="${item.icon}">
      <div><span class="card-category">${item.category}</span><h3>${item.name}</h3><p class="card-copy">${item.copy}</p></div>
      <div class="card-bottom"><span class="price">${money(item.price)}</span><button class="buy-button" data-buy="${item.id}" ${state && state.cash < item.price ? "disabled" : ""}>買下</button></div>
    </article>
  `).join("");
}

function renderInvestments() {
  $("#investment-grid").innerHTML = investments.map((item) => `
    <article class="investment-card">
      <div>
        <span class="risk-badge">${item.risk}</span>
        <h3>${item.icon} ${item.name}</h3>
        <p class="card-copy">${item.copy}</p>
        <div class="return-range"><strong>${Math.round(item.mean * 100)}%</strong><span>長期期望年報酬 · 模擬值</span></div>
        <p class="card-copy">典型年度區間 ${item.range}</p>
      </div>
      <div class="invest-controls">
        <input type="number" min="1" step="1000000" value="1000000000" aria-label="${item.name}投資金額" data-invest-input="${item.id}">
        <button data-invest="${item.id}">投入</button>
      </div>
    </article>
  `).join("");
}

function renderPortfolio() {
  if (!state) return;
  const spent = state.inventory.reduce((sum, item) => sum + item.price, 0);
  $("#portfolio-summary").innerHTML = [
    ["核心事業", money(state.empire)],
    ["投資組合", money(holdingValue())],
    ["收藏數量", `${state.inventory.length} 件`],
    ["累計消費", money(spent)],
  ].map(([label, value]) => `<div class="summary-tile"><span>${label}</span><strong>${value}</strong></div>`).join("");

  const holdings = Object.entries(state.holdings);
  $("#holdings-list").innerHTML = holdings.length ? holdings.map(([id, holding]) => {
    const asset = investments.find((item) => item.id === id);
    const gain = holding.value - holding.cost;
    return `<div class="list-row"><span>${asset.name}<br>${gain >= 0 ? "獲利" : "虧損"} ${money(gain)}</span><strong>${money(holding.value)}</strong></div>`;
  }).join("") : `<p class="empty">還沒有投資。前往投資市場配置你的第一筆資金。</p>`;

  $("#inventory-list").innerHTML = state.inventory.length ? [...state.inventory].reverse().slice(0, 30).map((item) =>
    `<div class="list-row"><span>${item.name}<br>${item.year} 年購入</span><strong>${money(item.price)}</strong></div>`
  ).join("") : `<p class="empty">金庫目前是空的。全球商城正在等你。</p>`;

  $("#event-list").innerHTML = [...state.events].reverse().slice(0, 20).map((event) =>
    `<div class="list-row"><span>${event.year}</span><strong>${event.text}</strong></div>`
  ).join("");
}

function renderRankings() {
  if (!state) return;
  const total = netWorth();
  const rank = roster.filter((person) => person.worth * 1e9 > total).length + 1;
  const before = roster[Math.max(0, rank - 2)];
  const after = roster[Math.min(roster.length - 1, rank)];
  $("#ranking-card").innerHTML = `
    <div class="rank-hero">
      <div class="rank-number">#${rank.toLocaleString()}</div>
      <div><h3>${selectedPerson().name}</h3><p>${rank < selectedPerson().rank ? `上升 ${selectedPerson().rank - rank} 名` : rank > selectedPerson().rank ? `下降 ${rank - selectedPerson().rank} 名` : "維持原始名次"}</p></div>
      <div class="rank-net">${money(total)}</div>
    </div>
    <div class="rank-neighbors">
      ${before ? `<div class="list-row"><span>#${Math.max(1, rank - 1)} ${before.name}</span><strong>${money(before.worth * 1e9)}</strong></div>` : ""}
      <div class="list-row"><span>#${rank} 你</span><strong>${money(total)}</strong></div>
      ${after ? `<div class="list-row"><span>#${Math.min(roster.length, rank + 1)} ${after.name}</span><strong>${money(after.worth * 1e9)}</strong></div>` : ""}
    </div>`;
}

function renderAll() {
  renderHeader();
  renderShop();
  renderInvestments();
  renderPortfolio();
  renderRankings();
  save();
}

function purchase(name, price, id = "custom") {
  if (!state || !Number.isFinite(price) || price <= 0) return;
  if (state.cash < price) {
    showToast(`現金不足，還差 ${money(price - state.cash)}`);
    return;
  }
  state.cash -= price;
  state.inventory.push({ id, name, price, year: state.year });
  state.events.push({ year: state.year, text: `買下「${name}」，花費 ${money(price)}。` });
  renderAll();
  showToast(`交易完成：${name}`);
}

function invest(id, amount) {
  if (!state || !Number.isFinite(amount) || amount <= 0) return showToast("請輸入有效投資金額");
  if (state.cash < amount) return showToast(`現金不足，還差 ${money(amount - state.cash)}`);
  const asset = investments.find((item) => item.id === id);
  const existing = state.holdings[id] || { value: 0, cost: 0 };
  existing.value += amount;
  existing.cost += amount;
  state.holdings[id] = existing;
  state.cash -= amount;
  state.events.push({ year: state.year, text: `投入 ${money(amount)} 至${asset.name}。` });
  renderAll();
  showToast(`${asset.name}已加入投資組合`);
}

function gaussian() {
  const u = Math.max(Math.random(), 1e-9);
  const v = Math.random();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

function advanceYear() {
  if (!state) return;
  const before = netWorth();
  let investmentResult = 0;
  let distributions = 0;

  Object.entries(state.holdings).forEach(([id, holding]) => {
    const asset = investments.find((item) => item.id === id);
    const rate = Math.max(-.85, Math.min(1.4, asset.mean + gaussian() * asset.volatility));
    const change = holding.value * rate;
    holding.value = Math.max(0, holding.value + change);
    const income = holding.value * asset.yield;
    distributions += income;
    investmentResult += change;
  });

  const empireRate = Math.max(-.3, Math.min(.45, .065 + gaussian() * .14));
  const empireChange = state.empire * empireRate;
  state.empire = Math.max(0, state.empire + empireChange);
  const empireIncome = state.empire * .008;
  state.cash += distributions + empireIncome;
  state.year += 1;
  state.lastChange = netWorth() - before;

  const headline = state.lastChange >= 0
    ? `資產增加 ${money(state.lastChange)}。`
    : `資產縮水 ${money(Math.abs(state.lastChange))}。`;
  state.events.push({
    year: state.year,
    text: `${headline} 核心事業 ${empireRate >= 0 ? "+" : ""}${(empireRate * 100).toFixed(1)}%，投資損益 ${money(investmentResult)}。`,
  });
  renderAll();
  showToast(`${state.year} 年結算完成 · ${headline}`);
}

function renderCharacterList(query = "") {
  const normalized = query.trim().toLowerCase();
  const matches = roster.filter((person) =>
    [person.name, person.country, person.industry, person.company].some((value) => String(value).toLowerCase().includes(normalized))
  );
  $("#search-count").textContent = `${matches.length.toLocaleString()} 位`;
  const visible = matches.slice(0, 120);
  $("#character-list").innerHTML = visible.map((person) => `
    <button class="character-row" data-person="${person.id}">
      <span class="character-rank">#${person.rank}</span>
      <span><span class="character-name">${person.name}</span><br><span class="character-meta">${person.company || person.industry}</span></span>
      <span class="character-meta">${person.country} · ${person.industry}</span>
      <span class="character-worth">${money(person.worth * 1e9)}</span>
    </button>
  `).join("") + (matches.length > visible.length ? `<p class="dialog-foot">再輸入關鍵字以縮小其餘 ${(matches.length - visible.length).toLocaleString()} 筆結果</p>` : "");
}

function openCharacterDialog(force = false) {
  renderCharacterList($("#character-search").value);
  $("#close-dialog").hidden = force && !state;
  $("#character-dialog").showModal();
  setTimeout(() => $("#character-search").focus(), 80);
}

document.addEventListener("click", (event) => {
  const tab = event.target.closest("[data-tab]");
  if (tab) {
    document.querySelectorAll(".tab").forEach((item) => item.classList.toggle("active", item === tab));
    document.querySelectorAll(".view").forEach((view) => view.classList.toggle("active", view.id === `${tab.dataset.tab}-view`));
    if (tab.dataset.tab === "portfolio") renderPortfolio();
    if (tab.dataset.tab === "rankings") renderRankings();
  }
  const filter = event.target.closest("[data-category]");
  if (filter) { currentShopCategory = filter.dataset.category; renderShop(); }
  const buy = event.target.closest("[data-buy]");
  if (buy) {
    const item = shopItems.find((candidate) => candidate.id === buy.dataset.buy);
    purchase(item.name, item.price, item.id);
  }
  const investment = event.target.closest("[data-invest]");
  if (investment) {
    const input = document.querySelector(`[data-invest-input="${investment.dataset.invest}"]`);
    invest(investment.dataset.invest, Number(input.value));
  }
  const person = event.target.closest("[data-person]");
  if (person) choosePerson(person.dataset.person);
});

$("#character-search").addEventListener("input", (event) => renderCharacterList(event.target.value));
$("#change-character").addEventListener("click", () => openCharacterDialog());
$("#close-dialog").addEventListener("click", () => $("#character-dialog").close());
$("#next-year").addEventListener("click", advanceYear);
$("#custom-purchase").addEventListener("submit", (event) => {
  event.preventDefault();
  purchase($("#custom-name").value.trim(), Number($("#custom-price").value));
  event.target.reset();
});
$("#reset-game").addEventListener("click", () => {
  if (!state || !confirm(`確定要重設 ${selectedPerson().name} 的所有遊戲進度？`)) return;
  state = defaultState(selectedPerson());
  renderAll();
  showToast("角色進度已重設");
});

if (!roster.length) {
  document.body.innerHTML = "<main><h1>角色資料尚未建立</h1><p>請先執行 npm run data。</p></main>";
} else {
  const lastId = localStorage.getItem("billionaire-sandbox:last-person");
  if (lastId && roster.some((person) => person.id === lastId)) choosePerson(lastId);
  else {
    renderShop();
    renderInvestments();
    openCharacterDialog(true);
  }
}

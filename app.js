const roster = window.BILLIONAIRES || [];
const zhTwNames = window.ZH_TW_NAMES || {};

const shopItems = [
  { id: "apple-iphone-17-pro-max", icon: "📱", category: "科技", subcategory: "手機", brand: "Apple", model: "iPhone 17 Pro Max", price: 1199, copy: "Apple 旗艦智慧型手機，遊戲採入門容量估價。" },
  { id: "apple-iphone-air", icon: "📱", category: "科技", subcategory: "手機", brand: "Apple", model: "iPhone Air", price: 999, copy: "主打輕薄機身的 iPhone 系列。" },
  { id: "samsung-galaxy-s26-ultra", icon: "📱", category: "科技", subcategory: "手機", brand: "Samsung", model: "Galaxy S26 Ultra", price: 1299, copy: "Galaxy S 系列旗艦大螢幕機型。" },
  { id: "apple-macbook-pro", icon: "💻", category: "科技", subcategory: "電腦", brand: "Apple", model: "MacBook Pro 16 M4 Max", price: 3999, copy: "高階晶片與 16 吋顯示器配置。" },
  { id: "apple-vision-pro", icon: "🥽", category: "科技", subcategory: "穿戴", brand: "Apple", model: "Vision Pro", price: 3499, copy: "空間運算頭戴裝置。" },

  { id: "ferrari-12cilindri", icon: "🏎️", category: "汽車", subcategory: "超跑", brand: "Ferrari", model: "12Cilindri", price: 470000, copy: "Ferrari 前置 V12 雙座旗艦跑車。" },
  { id: "ferrari-sf90-xx", icon: "🏎️", category: "汽車", subcategory: "超跑", brand: "Ferrari", model: "SF90 XX Stradale", price: 890000, copy: "道路版 XX 特別車型，限量生產。" },
  { id: "ferrari-purosangue", icon: "🚙", category: "汽車", subcategory: "豪華休旅", brand: "Ferrari", model: "Purosangue", price: 430000, copy: "Ferrari 四門四座 V12 車型。" },
  { id: "lamborghini-revuelto", icon: "🏎️", category: "汽車", subcategory: "超跑", brand: "Lamborghini", model: "Revuelto", price: 608000, copy: "V12 插電式混合動力旗艦超跑。" },
  { id: "lamborghini-temerario", icon: "🏎️", category: "汽車", subcategory: "超跑", brand: "Lamborghini", model: "Temerario", price: 390000, copy: "V8 雙渦輪插電式混合動力超跑。" },
  { id: "lamborghini-urus-se", icon: "🚙", category: "汽車", subcategory: "豪華休旅", brand: "Lamborghini", model: "Urus SE", price: 275000, copy: "高性能插電式混合動力休旅車。" },
  { id: "rolls-royce-phantom-extended", icon: "🚘", category: "汽車", subcategory: "豪華轎車", brand: "Rolls-Royce", model: "Phantom Extended", price: 600000, copy: "長軸旗艦豪華轎車，實際價格高度取決於客製內容。" },
  { id: "rolls-royce-spectre-ii", icon: "🚘", category: "汽車", subcategory: "豪華轎車", brand: "Rolls-Royce", model: "Spectre Series II", price: 480000, copy: "Rolls-Royce 純電雙門車系。" },
  { id: "rolls-royce-cullinan-ii", icon: "🚙", category: "汽車", subcategory: "豪華休旅", brand: "Rolls-Royce", model: "Cullinan Series II", price: 470000, copy: "品牌旗艦豪華休旅車。" },
  { id: "porsche-911-gt3-rs", icon: "🏁", category: "汽車", subcategory: "跑車", brand: "Porsche", model: "911 GT3 RS", price: 250000, copy: "賽道取向的 911 自然進氣車型。" },
  { id: "porsche-taycan-turbo-gt", icon: "⚡", category: "汽車", subcategory: "電動跑車", brand: "Porsche", model: "Taycan Turbo GT", price: 230000, copy: "高性能純電四門跑車。" },
  { id: "bugatti-tourbillon", icon: "🏎️", category: "汽車", subcategory: "終極超跑", brand: "Bugatti", model: "Tourbillon", price: 4100000, copy: "Bugatti V16 混合動力旗艦車型。" },
  { id: "rimac-nevera-r", icon: "⚡", category: "汽車", subcategory: "終極超跑", brand: "Rimac", model: "Nevera R", price: 2500000, copy: "限量高性能純電超跑。" },

  { id: "gulfstream-g800", icon: "✈️", category: "航空", subcategory: "超長程商務機", brand: "Gulfstream", model: "G800", price: 72500000, copy: "官方公布最大航程 8,200 海里。" },
  { id: "gulfstream-g700", icon: "✈️", category: "航空", subcategory: "超長程商務機", brand: "Gulfstream", model: "G700", price: 81000000, copy: "最多五個客艙生活區的 Gulfstream 旗艦。" },
  { id: "gulfstream-g600", icon: "✈️", category: "航空", subcategory: "大型商務機", brand: "Gulfstream", model: "G600", price: 58000000, copy: "大型客艙與跨洲航程商務機。" },
  { id: "bombardier-global-8000", icon: "✈️", category: "航空", subcategory: "超長程商務機", brand: "Bombardier", model: "Global 8000", price: 83000000, copy: "Bombardier 超長程旗艦商務機。" },
  { id: "bombardier-global-7500", icon: "✈️", category: "航空", subcategory: "超長程商務機", brand: "Bombardier", model: "Global 7500", price: 78000000, copy: "四個客艙生活區的大型商務機。" },
  { id: "bombardier-challenger-3500", icon: "🛩️", category: "航空", subcategory: "中型商務機", brand: "Bombardier", model: "Challenger 3500", price: 27000000, copy: "超中型商務機，適合區域與跨洲航線。" },
  { id: "dassault-falcon-10x", icon: "✈️", category: "航空", subcategory: "超長程商務機", brand: "Dassault", model: "Falcon 10X", price: 75000000, copy: "Dassault 新世代超長程旗艦商務機。" },
  { id: "dassault-falcon-8x", icon: "✈️", category: "航空", subcategory: "大型商務機", brand: "Dassault", model: "Falcon 8X", price: 62000000, copy: "三發動機長程商務機。" },
  { id: "airbus-ach160", icon: "🚁", category: "航空", subcategory: "直升機", brand: "Airbus", model: "ACH160", price: 17000000, copy: "Airbus Corporate Helicopters 豪華配置版本。" },
  { id: "bell-525", icon: "🚁", category: "航空", subcategory: "直升機", brand: "Bell", model: "525 Relentless", price: 15000000, copy: "大型雙發動機民用直升機。" },

  { id: "feadship-pi", icon: "🛥️", category: "船艇", subcategory: "超級遊艇", brand: "Feadship", model: "Pi 100m", price: 300000000, copy: "2025 年交付的 100 米純客製超級遊艇。" },
  { id: "feadship-moonrise", icon: "🛥️", category: "船艇", subcategory: "超級遊艇", brand: "Feadship", model: "Moonrise 99.95m", price: 220000000, copy: "近百米級 Feadship 客製遊艇。" },
  { id: "feadship-savannah", icon: "🛥️", category: "船艇", subcategory: "超級遊艇", brand: "Feadship", model: "Savannah 83.5m", price: 140000000, copy: "全球首批混合動力超級遊艇代表作。" },
  { id: "lurssen-kismet", icon: "🛥️", category: "船艇", subcategory: "巨型遊艇", brand: "Lürssen", model: "Kismet 122m", price: 360000000, copy: "122 米級巨型遊艇遊戲估價。" },
  { id: "lurssen-ahpo", icon: "🛥️", category: "船艇", subcategory: "巨型遊艇", brand: "Lürssen", model: "Ahpo 115m", price: 330000000, copy: "115 米級巨型遊艇遊戲估價。" },
  { id: "sunseeker-100-yacht", icon: "🛥️", category: "船艇", subcategory: "量產遊艇", brand: "Sunseeker", model: "100 Yacht", price: 15000000, copy: "英國製大型動力遊艇。" },
  { id: "azimut-grande-36m", icon: "🛥️", category: "船艇", subcategory: "量產遊艇", brand: "Azimut", model: "Grande 36M", price: 18000000, copy: "義大利大型動力遊艇。" },

  { id: "rolex-daytona", icon: "⌚", category: "腕錶", subcategory: "運動錶", brand: "Rolex", model: "Cosmograph Daytona 126500LN", price: 15500, copy: "Rolex 經典計時腕錶，採官方定價級距遊戲估價。" },
  { id: "rolex-submariner", icon: "⌚", category: "腕錶", subcategory: "潛水錶", brand: "Rolex", model: "Submariner Date 126610LN", price: 10500, copy: "Rolex 經典潛水腕錶。" },
  { id: "rolex-gmt-master", icon: "⌚", category: "腕錶", subcategory: "兩地時間", brand: "Rolex", model: "GMT-Master II 126710BLNR", price: 11200, copy: "藍黑雙色錶圈兩地時間腕錶。" },
  { id: "patek-nautilus", icon: "⌚", category: "腕錶", subcategory: "運動錶", brand: "Patek Philippe", model: "Nautilus 5811/1G", price: 70000, copy: "白金材質 Nautilus 自動上鍊腕錶。" },
  { id: "patek-grandmaster", icon: "⌚", category: "腕錶", subcategory: "複雜功能", brand: "Patek Philippe", model: "Grandmaster Chime 6300GR", price: 4000000, copy: "超複雜功能雙面腕錶遊戲估價。" },
  { id: "ap-royal-oak", icon: "⌚", category: "腕錶", subcategory: "運動錶", brand: "Audemars Piguet", model: "Royal Oak Jumbo 16202ST", price: 40000, copy: "超薄自動上鍊 Royal Oak 經典型號。" },
  { id: "richard-mille-rm65", icon: "⌚", category: "腕錶", subcategory: "複雜功能", brand: "Richard Mille", model: "RM 65-01", price: 350000, copy: "自動上鍊雙秒追針計時腕錶。" },

  { id: "hermes-birkin-30", icon: "👜", category: "時尚", subcategory: "手袋", brand: "Hermès", model: "Birkin 30 Togo", price: 12500, copy: "經典皮革手袋，實際價格依皮革與配貨市場而異。" },
  { id: "chanel-classic-11-12", icon: "👜", category: "時尚", subcategory: "手袋", brand: "Chanel", model: "Classic 11.12", price: 11800, copy: "Chanel 經典翻蓋手袋。" },
  { id: "lv-speedy-p9", icon: "👜", category: "時尚", subcategory: "手袋", brand: "Louis Vuitton", model: "Speedy P9 Bandoulière 40", price: 11000, copy: "Speedy P9 系列皮革旅行袋。" },
  { id: "nike-air-jordan-1", icon: "👟", category: "時尚", subcategory: "球鞋", brand: "Nike", model: "Air Jordan 1 High OG", price: 180, copy: "Air Jordan 經典高筒鞋型。" },
  { id: "loro-piana-open-walk", icon: "👞", category: "時尚", subcategory: "鞋履", brand: "Loro Piana", model: "Open Walk", price: 1100, copy: "Loro Piana 經典麂皮休閒鞋。" },

  { id: "starbucks-latte", icon: "☕", category: "日常", subcategory: "餐飲", brand: "Starbucks", model: "Grande Caffè Latte", price: 6, copy: "一杯大杯拿鐵的遊戲估價。" },
  { id: "mcdonalds-big-mac", icon: "🍔", category: "日常", subcategory: "餐飲", brand: "McDonald's", model: "Big Mac", price: 6, copy: "經典雙層漢堡的遊戲估價。" },
  { id: "dom-perignon-2015", icon: "🍾", category: "日常", subcategory: "酒款", brand: "Dom Pérignon", model: "Vintage 2015", price: 300, copy: "年份香檳單瓶遊戲估價。" },
  { id: "sony-ps5-pro", icon: "🎮", category: "日常", subcategory: "娛樂", brand: "Sony", model: "PlayStation 5 Pro", price: 749, copy: "Sony 高階遊戲主機。" },
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
let currentShopSubcategory = "全部";
let currentShopBrand = "全部";
let shopSearch = "";
let state = null;
let toastTimer;

function initials(name) {
  return name.split(/\s+/).slice(0, 2).map((part) => part[0]).join("").toUpperCase();
}

function localizedName(person) {
  return zhTwNames[person.name] || person.name;
}

function bilingualName(person) {
  const chinese = zhTwNames[person.name];
  return chinese ? `${chinese}（${person.name}）` : person.name;
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
    events: [{ year: 2026, text: `以 ${localizedName(person)}、Forbes #${person.rank} 的身分開始遊戲。` }],
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
  showToast(`現在，你是 ${localizedName(person)}`);
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
  $("#player-name").textContent = localizedName(person);
  $("#player-detail").textContent = `${zhTwNames[person.name] ? `${person.name} · ` : ""}${person.industry} · ${person.company || person.country}`;
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
  const categoryItems = currentShopCategory === "全部" ? shopItems : shopItems.filter((item) => item.category === currentShopCategory);
  const subcategories = ["全部", ...new Set(categoryItems.map((item) => item.subcategory))];
  const subcategoryItems = currentShopSubcategory === "全部" ? categoryItems : categoryItems.filter((item) => item.subcategory === currentShopSubcategory);
  const brands = ["全部", ...new Set(subcategoryItems.map((item) => item.brand))];
  $("#shop-filters").innerHTML = `
    <div class="filter-row"><span class="filter-label">品類</span>${categories.map((category) =>
      `<button class="filter-chip ${category === currentShopCategory ? "active" : ""}" data-category="${category}">${category}</button>`
    ).join("")}</div>
    <div class="filter-row subcategory-row"><span class="filter-label">類型</span>${subcategories.map((subcategory) =>
      `<button class="filter-chip secondary ${subcategory === currentShopSubcategory ? "active" : ""}" data-subcategory="${subcategory}">${subcategory}</button>`
    ).join("")}</div>
    <div class="filter-row brand-row"><span class="filter-label">品牌</span>${brands.map((brand) =>
      `<button class="filter-chip brand ${brand === currentShopBrand ? "active" : ""}" data-brand="${brand}">${brand}</button>`
    ).join("")}</div>`;
}

function renderShop() {
  renderShopFilters();
  const query = shopSearch.trim().toLowerCase();
  const visible = shopItems.filter((item) =>
    (currentShopCategory === "全部" || item.category === currentShopCategory) &&
    (currentShopSubcategory === "全部" || item.subcategory === currentShopSubcategory) &&
    (currentShopBrand === "全部" || item.brand === currentShopBrand) &&
    (!query || [item.brand, item.model, item.category, item.subcategory].some((value) => value.toLowerCase().includes(query)))
  );
  $("#shop-result-count").textContent = `${visible.length} 個型號`;
  $("#shop-grid").innerHTML = visible.map((item) => `
    <article class="shop-card" data-icon="${item.icon}">
      <div><span class="card-category">${item.category} · ${item.subcategory}</span><span class="brand-name">${item.brand}</span><h3>${item.model}</h3><p class="card-copy">${item.copy}</p></div>
      <div class="purchase-panel">
        <div class="unit-price"><span>單價</span><strong>${money(item.price)}</strong></div>
        <div class="quantity-control" aria-label="${item.brand} ${item.model}購買數量">
          <button data-qty-minus="${item.id}" aria-label="減少${item.brand} ${item.model}數量">−</button>
          <input type="number" min="1" max="9999" value="1" inputmode="numeric" data-quantity="${item.id}" aria-label="${item.brand} ${item.model}數量">
          <button data-qty-plus="${item.id}" aria-label="增加${item.brand} ${item.model}數量">＋</button>
        </div>
        <div class="card-bottom">
          <span class="purchase-total"><small>總價</small><strong data-purchase-total="${item.id}">${money(item.price)}</strong></span>
          <button class="buy-button" data-buy="${item.id}" ${state && state.cash < item.price ? "disabled" : ""}>買 1 個</button>
        </div>
      </div>
    </article>
  `).join("");
  if (!visible.length) $("#shop-grid").innerHTML = `<p class="shop-empty">找不到符合條件的品牌或型號，請調整篩選條件。</p>`;
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
  const itemCount = state.inventory.reduce((sum, item) => sum + (item.quantity || 1), 0);
  $("#portfolio-summary").innerHTML = [
    ["核心事業", money(state.empire)],
    ["投資組合", money(holdingValue())],
    ["收藏數量", `${itemCount.toLocaleString()} 件`],
    ["累計消費", money(spent)],
  ].map(([label, value]) => `<div class="summary-tile"><span>${label}</span><strong>${value}</strong></div>`).join("");

  const holdings = Object.entries(state.holdings);
  $("#holdings-list").innerHTML = holdings.length ? holdings.map(([id, holding]) => {
    const asset = investments.find((item) => item.id === id);
    const gain = holding.value - holding.cost;
    return `<div class="list-row"><span>${asset.name}<br>${gain >= 0 ? "獲利" : "虧損"} ${money(gain)}</span><strong>${money(holding.value)}</strong></div>`;
  }).join("") : `<p class="empty">還沒有投資。前往投資市場配置你的第一筆資金。</p>`;

  $("#inventory-list").innerHTML = state.inventory.length ? [...state.inventory].reverse().slice(0, 30).map((item) =>
    `<div class="list-row"><span>${item.name} × ${(item.quantity || 1).toLocaleString()}<br>${item.year} 年購入 · 單價 ${money(item.unitPrice || item.price)}</span><strong>${money(item.price)}</strong></div>`
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
      <div><h3>${bilingualName(selectedPerson())}</h3><p>${rank < selectedPerson().rank ? `上升 ${selectedPerson().rank - rank} 名` : rank > selectedPerson().rank ? `下降 ${rank - selectedPerson().rank} 名` : "維持原始名次"}</p></div>
      <div class="rank-net">${money(total)}</div>
    </div>
    <div class="rank-neighbors">
      ${before ? `<div class="list-row"><span>#${Math.max(1, rank - 1)} ${bilingualName(before)}</span><strong>${money(before.worth * 1e9)}</strong></div>` : ""}
      <div class="list-row"><span>#${rank} 你</span><strong>${money(total)}</strong></div>
      ${after ? `<div class="list-row"><span>#${Math.min(roster.length, rank + 1)} ${bilingualName(after)}</span><strong>${money(after.worth * 1e9)}</strong></div>` : ""}
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

function purchase(name, unitPrice, id = "custom", quantity = 1) {
  quantity = Math.max(1, Math.min(9999, Math.floor(Number(quantity))));
  const totalPrice = unitPrice * quantity;
  if (!state || !Number.isFinite(unitPrice) || unitPrice <= 0 || !Number.isFinite(totalPrice)) return;
  if (state.cash < totalPrice) {
    showToast(`現金不足，還差 ${money(totalPrice - state.cash)}`);
    return;
  }
  state.cash -= totalPrice;
  const existing = state.inventory.find((item) =>
    item.id === id && item.name === name && (item.unitPrice || item.price) === unitPrice
  );
  if (existing) {
    existing.quantity = (existing.quantity || 1) + quantity;
    existing.price += totalPrice;
    existing.year = state.year;
  } else {
    state.inventory.push({ id, name, unitPrice, quantity, price: totalPrice, year: state.year });
  }
  state.events.push({ year: state.year, text: `買下「${name}」× ${quantity.toLocaleString()}，花費 ${money(totalPrice)}。` });
  renderAll();
  showToast(`交易完成：${name} × ${quantity.toLocaleString()}`);
}

function updateShopQuantity(id, rawQuantity) {
  const item = shopItems.find((candidate) => candidate.id === id);
  if (!item) return;
  const quantity = Math.max(1, Math.min(9999, Math.floor(Number(rawQuantity) || 1)));
  const input = document.querySelector(`[data-quantity="${id}"]`);
  const total = item.price * quantity;
  if (input) input.value = quantity;
  const totalLabel = document.querySelector(`[data-purchase-total="${id}"]`);
  if (totalLabel) totalLabel.textContent = money(total);
  const buyButton = document.querySelector(`[data-buy="${id}"]`);
  if (buyButton) {
    buyButton.textContent = `買 ${quantity.toLocaleString()} 個`;
    buyButton.disabled = Boolean(state && state.cash < total);
  }
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
    [person.name, zhTwNames[person.name], person.country, person.industry, person.company].some((value) => String(value || "").toLowerCase().includes(normalized))
  );
  $("#search-count").textContent = `${matches.length.toLocaleString()} 位`;
  const visible = matches.slice(0, 120);
  $("#character-list").innerHTML = visible.map((person) => `
    <button class="character-row" data-person="${person.id}">
      <span class="character-rank">#${person.rank}</span>
      <span><span class="character-name">${localizedName(person)}</span>${zhTwNames[person.name] ? `<br><span class="english-name">${person.name}</span>` : ""}<br><span class="character-meta">${person.company || person.industry}</span></span>
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
  if (filter) {
    currentShopCategory = filter.dataset.category;
    currentShopSubcategory = "全部";
    currentShopBrand = "全部";
    renderShop();
  }
  const subfilter = event.target.closest("[data-subcategory]");
  if (subfilter) {
    currentShopSubcategory = subfilter.dataset.subcategory;
    currentShopBrand = "全部";
    renderShop();
  }
  const brandFilter = event.target.closest("[data-brand]");
  if (brandFilter) { currentShopBrand = brandFilter.dataset.brand; renderShop(); }
  const minus = event.target.closest("[data-qty-minus]");
  if (minus) {
    const id = minus.dataset.qtyMinus;
    updateShopQuantity(id, Number(document.querySelector(`[data-quantity="${id}"]`).value) - 1);
  }
  const plus = event.target.closest("[data-qty-plus]");
  if (plus) {
    const id = plus.dataset.qtyPlus;
    updateShopQuantity(id, Number(document.querySelector(`[data-quantity="${id}"]`).value) + 1);
  }
  const buy = event.target.closest("[data-buy]");
  if (buy) {
    const item = shopItems.find((candidate) => candidate.id === buy.dataset.buy);
    const quantity = Number(document.querySelector(`[data-quantity="${item.id}"]`).value);
    purchase(`${item.brand} ${item.model}`, item.price, item.id, quantity);
  }
  const investment = event.target.closest("[data-invest]");
  if (investment) {
    const input = document.querySelector(`[data-invest-input="${investment.dataset.invest}"]`);
    invest(investment.dataset.invest, Number(input.value));
  }
  const person = event.target.closest("[data-person]");
  if (person) choosePerson(person.dataset.person);
});

document.addEventListener("input", (event) => {
  if (event.target.matches("[data-quantity]")) updateShopQuantity(event.target.dataset.quantity, event.target.value);
});

$("#shop-search").addEventListener("input", (event) => {
  shopSearch = event.target.value;
  renderShop();
});

$("#character-search").addEventListener("input", (event) => renderCharacterList(event.target.value));
$("#change-character").addEventListener("click", () => openCharacterDialog());
$("#close-dialog").addEventListener("click", () => $("#character-dialog").close());
$("#next-year").addEventListener("click", advanceYear);
$("#reset-game").addEventListener("click", () => {
  if (!state || !confirm(`確定要重設 ${localizedName(selectedPerson())} 的所有遊戲進度？`)) return;
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

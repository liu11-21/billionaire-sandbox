const roster = window.BILLIONAIRES || [];
const zhTwNames = window.ZH_TW_NAMES || {};

const baseShopItems = [
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
  { id: "google-pixel-10-pro-xl", icon: "📱", category: "科技", subcategory: "手機", brand: "Google", model: "Pixel 10 Pro XL", price: 1199, copy: "Google 旗艦大螢幕智慧型手機。" },
  { id: "microsoft-surface-laptop", icon: "💻", category: "科技", subcategory: "電腦", brand: "Microsoft", model: "Surface Laptop 15", price: 1499, copy: "微軟 Surface Copilot+ PC 筆記型電腦。" },
  { id: "samsung-galaxy-book-ultra", icon: "💻", category: "科技", subcategory: "電腦", brand: "Samsung", model: "Galaxy Book Ultra", price: 2999, copy: "三星高階 Galaxy Book 筆記型電腦。" },
  { id: "sony-bravia-9", icon: "📺", category: "科技", subcategory: "家庭影音", brand: "Sony", model: "BRAVIA 9 Mini LED", price: 4999, copy: "Sony 高階 Mini LED 電視。" },
  { id: "lg-oled-g5", icon: "📺", category: "科技", subcategory: "家庭影音", brand: "LG", model: "OLED evo G5", price: 4499, copy: "LG 旗艦 OLED 電視系列。" },

  { id: "mercedes-maybach-s680", icon: "🚘", category: "汽車", subcategory: "豪華轎車", brand: "Mercedes-Maybach", model: "S 680 4MATIC", price: 260000, copy: "Mercedes-Maybach V12 長軸旗艦轎車。" },
  { id: "mercedes-amg-gt63", icon: "🏎️", category: "汽車", subcategory: "跑車", brand: "Mercedes-AMG", model: "GT 63 4MATIC+", price: 190000, copy: "AMG 雙門高性能跑車。" },
  { id: "mercedes-amg-g63", icon: "🚙", category: "汽車", subcategory: "豪華休旅", brand: "Mercedes-AMG", model: "G 63", price: 195000, copy: "AMG 高性能 G-Class 越野車。" },
  { id: "bentley-continental-gt-speed", icon: "🚘", category: "汽車", subcategory: "豪華轎車", brand: "Bentley", model: "Continental GT Speed", price: 310000, copy: "賓利高性能豪華雙門 GT。" },
  { id: "bentley-flying-spur-speed", icon: "🚘", category: "汽車", subcategory: "豪華轎車", brand: "Bentley", model: "Flying Spur Speed", price: 280000, copy: "賓利四門高性能豪華房車。" },
  { id: "mclaren-w1", icon: "🏎️", category: "汽車", subcategory: "終極超跑", brand: "McLaren", model: "W1", price: 2600000, copy: "麥拉倫限量混合動力旗艦超跑。" },
  { id: "mclaren-750s", icon: "🏎️", category: "汽車", subcategory: "超跑", brand: "McLaren", model: "750S", price: 340000, copy: "麥拉倫 V8 雙渦輪超跑。" },
  { id: "aston-martin-vanquish", icon: "🏎️", category: "汽車", subcategory: "跑車", brand: "Aston Martin", model: "Vanquish", price: 430000, copy: "Aston Martin V12 旗艦 GT 跑車。" },
  { id: "aston-martin-dbx707", icon: "🚙", category: "汽車", subcategory: "豪華休旅", brand: "Aston Martin", model: "DBX707", price: 250000, copy: "Aston Martin 高性能豪華休旅車。" },
  { id: "maserati-mc20", icon: "🏎️", category: "汽車", subcategory: "超跑", brand: "Maserati", model: "MC20", price: 245000, copy: "瑪莎拉蒂中置引擎超跑。" },
  { id: "lexus-lc500", icon: "🚘", category: "汽車", subcategory: "跑車", brand: "Lexus", model: "LC 500", price: 105000, copy: "Lexus 自然進氣 V8 豪華雙門跑車。" },
  { id: "range-rover-sv", icon: "🚙", category: "汽車", subcategory: "豪華休旅", brand: "Range Rover", model: "Range Rover SV", price: 235000, copy: "Range Rover 旗艦客製化休旅車。" },

  { id: "ducati-panigale-v4-r", icon: "🏍️", category: "重機", subcategory: "仿賽", brand: "Ducati", model: "Panigale V4 R", price: 45000, copy: "杜卡迪賽道取向旗艦仿賽重機。" },
  { id: "ducati-diavel-v4", icon: "🏍️", category: "重機", subcategory: "巡航", brand: "Ducati", model: "Diavel V4", price: 27000, copy: "杜卡迪 V4 動力巡航重機。" },
  { id: "harley-cvo-road-glide", icon: "🏍️", category: "重機", subcategory: "巡航", brand: "Harley-Davidson", model: "CVO Road Glide", price: 46000, copy: "哈雷 CVO 豪華長途巡航車款。" },
  { id: "bmw-m1000rr", icon: "🏍️", category: "重機", subcategory: "仿賽", brand: "BMW Motorrad", model: "M 1000 RR", price: 39000, copy: "BMW M 部門高性能仿賽重機。" },
  { id: "honda-gold-wing", icon: "🏍️", category: "重機", subcategory: "旅行", brand: "Honda", model: "Gold Wing Tour", price: 29000, copy: "本田旗艦豪華旅行重機。" },
  { id: "yamaha-r1m", icon: "🏍️", category: "重機", subcategory: "仿賽", brand: "Yamaha", model: "YZF-R1M", price: 28000, copy: "山葉碳纖維電控旗艦仿賽重機。" },
  { id: "kawasaki-ninja-h2r", icon: "🏍️", category: "重機", subcategory: "賽道", brand: "Kawasaki", model: "Ninja H2R", price: 59000, copy: "川崎機械增壓封閉賽道專用車。" },
  { id: "triumph-rocket-3", icon: "🏍️", category: "重機", subcategory: "巡航", brand: "Triumph", model: "Rocket 3 Storm", price: 25000, copy: "Triumph 大排氣量肌肉巡航重機。" },

  { id: "embraer-praetor-600", icon: "🛩️", category: "航空", subcategory: "中型商務機", brand: "Embraer", model: "Praetor 600", price: 26000000, copy: "Embraer 超中型商務機。" },
  { id: "embraer-phenom-300e", icon: "🛩️", category: "航空", subcategory: "輕型商務機", brand: "Embraer", model: "Phenom 300E", price: 12500000, copy: "Embraer 高性能輕型商務機。" },
  { id: "cessna-citation-longitude", icon: "🛩️", category: "航空", subcategory: "中型商務機", brand: "Cessna", model: "Citation Longitude", price: 30000000, copy: "Cessna 超中型 Citation 商務機。" },
  { id: "pilatus-pc24", icon: "🛩️", category: "航空", subcategory: "輕型商務機", brand: "Pilatus", model: "PC-24", price: 12000000, copy: "可於短跑道起降的瑞士輕型商務機。" },
  { id: "hondajet-echelon", icon: "🛩️", category: "航空", subcategory: "輕型商務機", brand: "HondaJet", model: "Echelon", price: 15000000, copy: "HondaJet 新世代輕型商務機。" },

  { id: "riva-130-bellissima", icon: "🛥️", category: "船艇", subcategory: "量產遊艇", brand: "Riva", model: "130' Bellissima", price: 24000000, copy: "Riva 130 呎旗艦飛橋遊艇。" },
  { id: "princess-x95", icon: "🛥️", category: "船艇", subcategory: "量產遊艇", brand: "Princess", model: "X95", price: 14000000, copy: "Princess X Class 旗艦動力遊艇。" },
  { id: "ferretti-1000", icon: "🛥️", category: "船艇", subcategory: "量產遊艇", brand: "Ferretti", model: "Ferretti Yachts 1000", price: 13000000, copy: "Ferretti 千呎級系列旗艦動力遊艇。" },
  { id: "benetti-oasis-40m", icon: "🛥️", category: "船艇", subcategory: "超級遊艇", brand: "Benetti", model: "Oasis 40M", price: 30000000, copy: "Benetti 40 米級 Oasis Deck 超級遊艇。" },

  { id: "omega-speedmaster-moonwatch", icon: "⌚", category: "腕錶", subcategory: "計時碼錶", brand: "Omega", model: "Speedmaster Moonwatch Professional", price: 8000, copy: "歐米茄超霸登月錶專業版。" },
  { id: "omega-seamaster-diver-300m", icon: "⌚", category: "腕錶", subcategory: "潛水錶", brand: "Omega", model: "Seamaster Diver 300M", price: 6500, copy: "歐米茄海馬潛水 300 米腕錶。" },
  { id: "vacheron-overseas", icon: "⌚", category: "腕錶", subcategory: "運動錶", brand: "Vacheron Constantin", model: "Overseas 4520V", price: 28000, copy: "江詩丹頓縱橫四海自動上鍊腕錶。" },
  { id: "lange-1", icon: "⌚", category: "腕錶", subcategory: "正裝錶", brand: "A. Lange & Söhne", model: "Lange 1", price: 48000, copy: "朗格經典偏心面盤正裝腕錶。" },
  { id: "iwc-portugieser", icon: "⌚", category: "腕錶", subcategory: "正裝錶", brand: "IWC", model: "Portugieser Perpetual Calendar 44", price: 45000, copy: "IWC 葡萄牙系列萬年曆腕錶。" },
  { id: "tudor-black-bay-58", icon: "⌚", category: "腕錶", subcategory: "潛水錶", brand: "Tudor", model: "Black Bay 58", price: 4500, copy: "帝舵碧灣 1958 潛水腕錶。" },
  { id: "cartier-santos", icon: "⌚", category: "腕錶", subcategory: "經典腕錶", brand: "Cartier", model: "Santos de Cartier", price: 8500, copy: "卡地亞 Santos 經典方形腕錶。" },
  { id: "grand-seiko-white-birch", icon: "⌚", category: "腕錶", subcategory: "正裝錶", brand: "Grand Seiko", model: "SLGH005 White Birch", price: 9500, copy: "Grand Seiko 白樺面盤 Hi-Beat 腕錶。" },
  { id: "panerai-luminor-marina", icon: "⌚", category: "腕錶", subcategory: "運動錶", brand: "Panerai", model: "Luminor Marina", price: 9000, copy: "沛納海 Luminor Marina 經典護橋腕錶。" },

  { id: "dior-lady-dior", icon: "👜", category: "時尚", subcategory: "手袋", brand: "Dior", model: "Lady Dior Medium", price: 6500, copy: "迪奧經典 Cannage 藤格紋手袋。" },
  { id: "gucci-jackie-1961", icon: "👜", category: "時尚", subcategory: "手袋", brand: "Gucci", model: "Jackie 1961 Medium", price: 3800, copy: "Gucci Jackie 1961 經典肩背包。" },
  { id: "prada-galleria", icon: "👜", category: "時尚", subcategory: "手袋", brand: "Prada", model: "Galleria Medium", price: 4600, copy: "Prada Saffiano 皮革 Galleria 手袋。" },

  { id: "macallan-18", icon: "🥃", category: "日常", subcategory: "威士忌", brand: "The Macallan", model: "Sherry Oak 18 Years", price: 450, copy: "麥卡倫雪莉桶 18 年單一麥芽威士忌。" },
  { id: "yamazaki-18", icon: "🥃", category: "日常", subcategory: "威士忌", brand: "Yamazaki", model: "18 Years", price: 1200, copy: "山崎 18 年日本單一麥芽威士忌遊戲估價。" },
  { id: "hennessy-xo", icon: "🥃", category: "日常", subcategory: "干邑", brand: "Hennessy", model: "X.O", price: 250, copy: "軒尼詩 X.O 干邑白蘭地。" },
  { id: "louis-xiii", icon: "🥃", category: "日常", subcategory: "干邑", brand: "Louis XIII", model: "The Classic Decanter", price: 4500, copy: "路易十三經典水晶瓶干邑。" },
];

const BRAND_ZH_TW = {
  Apple: "Apple 蘋果", Samsung: "Samsung 三星", Microsoft: "Microsoft 微軟", Google: "Google",
  Ferrari: "Ferrari 法拉利", Lamborghini: "Lamborghini 藍寶堅尼", "Rolls-Royce": "Rolls-Royce 勞斯萊斯",
  Porsche: "Porsche 保時捷", Bugatti: "Bugatti 布加迪", "Mercedes-Maybach": "Mercedes-Maybach 賓士邁巴赫",
  "Mercedes-AMG": "Mercedes-AMG 賓士性能車", Bentley: "Bentley 賓利", McLaren: "McLaren 麥拉倫",
  "Aston Martin": "Aston Martin 奧斯頓馬丁", Maserati: "Maserati 瑪莎拉蒂", Lexus: "Lexus 凌志",
  "Range Rover": "Range Rover", Gulfstream: "Gulfstream 灣流", Bombardier: "Bombardier 龐巴迪",
  Dassault: "Dassault 達梭", Airbus: "Airbus 空中巴士", Bell: "Bell 貝爾", Embraer: "Embraer 巴西航空工業",
  Cessna: "Cessna 賽斯納", Pilatus: "Pilatus 皮拉圖斯", Feadship: "Feadship 斐帝星", Sunseeker: "Sunseeker",
  Azimut: "Azimut 阿茲慕", Benetti: "Benetti 貝尼蒂", Rolex: "Rolex 勞力士",
  "Patek Philippe": "Patek Philippe 百達翡麗", "Audemars Piguet": "Audemars Piguet 愛彼",
  "Richard Mille": "Richard Mille 理查米爾", Omega: "Omega 歐米茄", "Vacheron Constantin": "Vacheron Constantin 江詩丹頓",
  "A. Lange & Söhne": "A. Lange & Söhne 朗格", IWC: "IWC 萬國錶", Tudor: "Tudor 帝舵",
  Cartier: "Cartier 卡地亞", "Grand Seiko": "Grand Seiko 冠藍獅", Panerai: "Panerai 沛納海",
  "Hermès": "Hermès 愛馬仕", Chanel: "Chanel 香奈兒", "Louis Vuitton": "Louis Vuitton 路易威登",
  Dior: "Dior 迪奧", Starbucks: "Starbucks 星巴克", "McDonald's": "McDonald's 麥當勞",
  "Dom Pérignon": "Dom Pérignon 唐培里儂", "The Macallan": "The Macallan 麥卡倫", Yamazaki: "Yamazaki 山崎",
  Hennessy: "Hennessy 軒尼詩", "Louis XIII": "Louis XIII 路易十三", Ducati: "Ducati 杜卡迪",
  "Harley-Davidson": "Harley-Davidson 哈雷", Honda: "Honda 本田", Yamaha: "Yamaha 山葉", Kawasaki: "Kawasaki 川崎"
};

const MODEL_ZH_TW = {
  "ferrari-12cilindri": "12 Cilindri 十二汽缸", "ferrari-purosangue": "Purosangue 純種馬",
  "rolls-royce-phantom-extended": "Phantom 幻影長軸版", "rolls-royce-spectre-ii": "Spectre 閃靈 Series II",
  "rolls-royce-cullinan-ii": "Cullinan 庫里南 Series II", "rolex-daytona": "Cosmograph Daytona 宇宙計型迪通拿",
  "rolex-submariner": "Submariner Date 潛航者型日曆款", "rolex-gmt-master": "GMT-Master II 格林威治型 II",
  "ap-royal-oak": "Royal Oak 皇家橡樹 Jumbo", "omega-speedmaster-moonwatch": "Speedmaster 超霸登月錶",
  "omega-seamaster-diver-300m": "Seamaster 海馬潛水 300 米", "vacheron-overseas": "Overseas 縱橫四海",
  "iwc-portugieser": "Portugieser 葡萄牙系列萬年曆", "tudor-black-bay-58": "Black Bay 碧灣 1958",
  "cartier-santos": "Santos de Cartier 山度士", "panerai-luminor-marina": "Luminor Marina 廬米諾系列",
  "hermes-birkin-30": "Birkin 柏金包 30", "dior-lady-dior": "Lady Dior 黛妃包",
  "macallan-18": "雪莉桶 18 年", "yamazaki-18": "山崎 18 年"
};

const PRODUCT_VARIANTS = {
  "apple-iphone-17-pro-max": [
    { name: "256GB", zh: "256GB・銀色", price: 1499 }, { name: "512GB", zh: "512GB・藏藍色", price: 1699 },
    { name: "1TB", zh: "1TB・宇宙橙色", price: 1899 }, { name: "2TB", zh: "2TB・銀色", price: 2299 }
  ],
  "apple-iphone-air": [
    { name: "256GB", zh: "256GB・天藍色", price: 999 }, { name: "512GB", zh: "512GB・太空黑色", price: 1199 },
    { name: "1TB", zh: "1TB・淺金色", price: 1399 }
  ],
  "samsung-galaxy-s26-ultra": [
    { name: "256GB", zh: "256GB", price: 1299 }, { name: "512GB", zh: "512GB", price: 1419 }, { name: "1TB", zh: "1TB", price: 1659 }
  ],
  "apple-macbook-pro": [
    { name: "36GB / 1TB", zh: "36GB 記憶體・1TB", price: 3999 }, { name: "48GB / 2TB", zh: "48GB 記憶體・2TB", price: 4799 }
  ],
  "ferrari-12cilindri": [
    { name: "Coupé", zh: "雙門硬頂", price: 470000 }, { name: "Spider", zh: "敞篷版", price: 520000 }
  ],
  "ferrari-sf90-xx": [
    { name: "Stradale", zh: "硬頂版", price: 890000 }, { name: "Spider", zh: "敞篷版", price: 995000 }
  ],
  "lamborghini-temerario": [
    { name: "Standard", zh: "標準版", price: 390000 }, { name: "Alleggerita", zh: "輕量化套件", price: 430000 }
  ],
  "mclaren-750s": [
    { name: "Coupé", zh: "雙門硬頂", price: 340000 }, { name: "Spider", zh: "敞篷版", price: 365000 }
  ],
  "maserati-mc20": [
    { name: "Coupé", zh: "硬頂版", price: 245000 }, { name: "Cielo", zh: "敞篷版", price: 280000 }
  ],
  "gulfstream-g800": [
    { name: "3 Living Areas + Crew", zh: "三生活區・獨立機組員艙", price: 72500000 },
    { name: "4 Living Areas", zh: "四生活區", price: 78000000 }
  ],
  "gulfstream-g700": [
    { name: "Grand Suite", zh: "豪華套房配置", price: 81000000 }, { name: "Ultragalley", zh: "大型廚房配置", price: 85000000 }
  ],
  "rolex-submariner": [
    { name: "Oystersteel", zh: "蠔式鋼・黑色", price: 10500 }, { name: "Yellow Rolesor", zh: "黃金鋼・藍色", price: 17000 },
    { name: "18 ct yellow gold", zh: "18K 黃金・藍色", price: 43000 }
  ],
  "rolex-daytona": [
    { name: "Oystersteel", zh: "蠔式鋼・白面", price: 15500 }, { name: "Yellow Rolesor", zh: "黃金鋼", price: 22000 },
    { name: "Everose gold", zh: "永恆玫瑰金", price: 51000 }
  ],
  "rolex-gmt-master": [
    { name: "Oyster bracelet", zh: "蠔式鋼帶", price: 11200 }, { name: "Jubilee bracelet", zh: "紀念型錶帶", price: 11500 }
  ],
  "tudor-black-bay-58": [
    { name: "Steel bracelet", zh: "鋼帶", price: 4500 }, { name: "Rubber strap", zh: "橡膠錶帶", price: 4200 }
  ],
  "hermes-birkin-30": [
    { name: "Togo leather", zh: "Togo 小牛皮", price: 12500 }, { name: "Epsom leather", zh: "Epsom 小牛皮", price: 13500 }
  ],
  "nike-air-jordan-1": [
    { name: "Chicago", zh: "芝加哥配色", price: 180 }, { name: "Royal Blue", zh: "皇家藍配色", price: 180 }
  ],
  "sony-bravia-9": [
    { name: "75-inch", zh: "75 吋", price: 4999 }, { name: "85-inch", zh: "85 吋", price: 6499 }
  ],
  "lg-oled-g5": [
    { name: "77-inch", zh: "77 吋", price: 4499 }, { name: "83-inch", zh: "83 吋", price: 6499 }
  ],
  "macallan-18": [
    { name: "700ml", zh: "700ml 單瓶", price: 450 }, { name: "6-bottle case", zh: "六瓶原箱", price: 2700 }
  ]
};

const shopItems = baseShopItems.flatMap((item) => {
  const variants = PRODUCT_VARIANTS[item.id] || [{ name: "Standard", zh: "標準款", price: item.price }];
  return variants.map((variant, index) => ({
    ...item,
    id: variants.length === 1 ? item.id : `${item.id}-v${index + 1}`,
    baseId: item.id,
    brandZh: BRAND_ZH_TW[item.brand] || item.brand,
    modelZh: MODEL_ZH_TW[item.id] || item.model,
    variant: variant.name,
    variantZh: variant.zh,
    price: variant.price
  }));
});

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
let currentShopVariant = "全部";
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
  const brandItems = currentShopBrand === "全部" ? [] : subcategoryItems.filter((item) => item.brand === currentShopBrand);
  const variants = ["全部", ...new Set(brandItems.map((item) => item.variantZh))];
  $("#shop-filters").innerHTML = `
    <div class="filter-row"><span class="filter-label">品類</span>${categories.map((category) =>
      `<button class="filter-chip ${category === currentShopCategory ? "active" : ""}" data-category="${category}">${category}</button>`
    ).join("")}</div>
    <div class="filter-row subcategory-row"><span class="filter-label">類型</span>${subcategories.map((subcategory) =>
      `<button class="filter-chip secondary ${subcategory === currentShopSubcategory ? "active" : ""}" data-subcategory="${subcategory}">${subcategory}</button>`
    ).join("")}</div>
    <div class="filter-row brand-row"><span class="filter-label">品牌</span>${brands.map((brand) =>
      `<button class="filter-chip brand ${brand === currentShopBrand ? "active" : ""}" data-brand="${brand}">${brand === "全部" ? brand : (BRAND_ZH_TW[brand] || brand)}</button>`
    ).join("")}</div>
    ${currentShopBrand === "全部" ? "" : `<div class="filter-row variant-row"><span class="filter-label">版本／規格</span>${variants.map((variant) =>
      `<button class="filter-chip variant ${variant === currentShopVariant ? "active" : ""}" data-variant="${variant}">${variant}</button>`
    ).join("")}</div>`}`;
}

function renderShop() {
  renderShopFilters();
  const query = shopSearch.trim().toLowerCase();
  const visible = shopItems.filter((item) =>
    (currentShopCategory === "全部" || item.category === currentShopCategory) &&
    (currentShopSubcategory === "全部" || item.subcategory === currentShopSubcategory) &&
    (currentShopBrand === "全部" || item.brand === currentShopBrand) &&
    (currentShopVariant === "全部" || item.variantZh === currentShopVariant) &&
    (!query || [item.brand, item.brandZh, item.model, item.modelZh, item.variant, item.variantZh, item.category, item.subcategory]
      .some((value) => value.toLowerCase().includes(query)))
  );
  $("#shop-result-count").textContent = `${visible.length} 個品項`;
  $("#shop-grid").innerHTML = visible.map((item) => `
    <article class="shop-card" data-icon="${item.icon}">
      <div>
        <span class="card-category">${item.category} · ${item.subcategory}</span>
        <span class="brand-name">${item.brandZh}</span>
        <h3>${item.modelZh}</h3>
        ${item.modelZh !== item.model ? `<span class="model-original">${item.model}</span>` : ""}
        <span class="variant-name">${item.variantZh}<small>${item.variant}</small></span>
        <p class="card-copy">${item.copy}</p>
      </div>
      <div class="purchase-panel">
        <div class="unit-price"><span>單價</span><strong>${money(item.price)}</strong></div>
        <div class="quantity-control" aria-label="${item.brandZh} ${item.modelZh} ${item.variantZh}購買數量">
          <button data-qty-minus="${item.id}" aria-label="減少${item.modelZh}數量">−</button>
          <input type="number" min="1" max="9999" value="1" inputmode="numeric" data-quantity="${item.id}" aria-label="${item.modelZh} ${item.variantZh}數量">
          <button data-qty-plus="${item.id}" aria-label="增加${item.modelZh}數量">＋</button>
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
    currentShopVariant = "全部";
    renderShop();
  }
  const subfilter = event.target.closest("[data-subcategory]");
  if (subfilter) {
    currentShopSubcategory = subfilter.dataset.subcategory;
    currentShopBrand = "全部";
    currentShopVariant = "全部";
    renderShop();
  }
  const brandFilter = event.target.closest("[data-brand]");
  if (brandFilter) {
    currentShopBrand = brandFilter.dataset.brand;
    currentShopVariant = "全部";
    renderShop();
  }
  const variantFilter = event.target.closest("[data-variant]");
  if (variantFilter) { currentShopVariant = variantFilter.dataset.variant; renderShop(); }
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
    purchase(`${item.brandZh} ${item.modelZh}・${item.variantZh}`, item.price, item.id, quantity);
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

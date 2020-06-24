const Shop = {
    name: '清新福全 金門店',
    address: '金門縣金城鎮民生路37-3號',
    tel: '08 237 5113',
    items: {'紅茶': 20, '綠茶': 20, '珍珠奶茶': 35 },
    addons: {'正常': 0, '加鮮奶': 10,'加椰果': 10,'加珍珠': 10},
    iceorhot:{'去冰':0,'微冰': 0, '少冰': 0, '正常': 0, '熱的': 0 },
    suger:{'全糖': 0,'七分': 0, '五分': 0, '三分': 0, '無糖': 0 },
    orderCount: 0,
  }
  
  Shop.html = 
  `
  <div>
  
    <button class="big" onclick="Pos.start()">新增訂單</button><br/><br/>
    <button class="big" onclick="Report.start()">店鋪報表</button><br/><br/>
    <button class="big" onclick="Setting.start()">商店設定</button><br/><br/>
  </div>
  `
  
  Shop.start = function () 
  {
    Shop.init()
    Shop.name = localStorage.getItem('Shop.name') || Shop.name 
    Shop.address = localStorage.getItem('Shop.address') || Shop.address
    Shop.tel = localStorage.getItem('Shop.tel') || Shop.tel
    Ui.id('menuShopName').innerHTML = Shop.name
    const itemsJson = localStorage.getItem('Shop.items')
    const addonsJson = localStorage.getItem('Shop.addons')
    const iceorhotJson = localStorage.getItem('Shop.iceorhot')
    const sugerJson = localStorage.getItem('Shop.suger')
    if (itemsJson != null) Shop.items = JSON.parse(itemsJson)
    if (addonsJson != null) Shop.addons = JSON.parse(addonsJson)
    if (iceorhotJson != null) Shop.iceorhot = JSON.parse(iceorhotJson)
    if (sugerJson != null) Shop.suger = JSON.parse(sugerJson)
    Ui.show(Shop.html)
  }
  
  Shop.init = function () {
    Shop.orderCount = localStorage.getItem('Pos.Order.count')
    if (Shop.orderCount == null) {
      Shop.orderCount = 0
      localStorage.setItem('Pos.Order.count', Shop.orderCount)
    }
  }
  
  Shop.incCount = function () {
    // let orderCount = parseInt(localStorage.getItem('Pos.Order.count')) + 1
    localStorage.setItem('Pos.Order.count', ++ Shop.orderCount)
  }
  
  Shop.saveOrder = function (Order) {
    localStorage.setItem('Pos.Order.' + Shop.orderCount, JSON.stringify(Order))
  }
  
  Shop.getOrder = function (i) {
    let orderJson = localStorage.getItem('Pos.Order.'+i)
    if (orderJson == null) return null
    return JSON.parse(orderJson)
  }
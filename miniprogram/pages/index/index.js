Page({
  data: {
    shop: [],
    searchText: "",
    newProduct: [],
    activeBC: "red",
    goodBC: "none",
    category_list:[
      {id:0,title:"空调"},
      {id:1,title:"洗衣机"},
      {id:2,title:"电饭煲"},
      {id:3,title:"电磁炉"},
      {id:4,title:"微波炉"},
      {id:5,title:"冰箱"},
      {id:6,title:"热水器"},
      {id:7,title:"吸尘器"},
      {id:8,title:"饮水机"},
    ]
  },

  showSearchHandle: function () {
    this.setData({
      showSearch: true
    })
  },
  showView: function () {
    var goodbgColor = this.data.goodBC = "red";
    var activebgColor=this.data.activeBC="none";
    this.setData({
      show: true,
      goodBC: goodbgColor,
      activeBC:activebgColor   
    })
  },
  hideView: function () {
    var activebgColor = this.data.activeBC = 'red'
    var goodbgColor=this.data.goodBC="none"
    this.setData({
      show: false,
      activeBC: activebgColor,
      goodBC:goodbgColor
    });
  },
  searchHandle: function () {
    wx.navigateTo({
      url: '/pages/search/search'
    })
    this.setData({
      searchText: "",
      showSearch: false
    })
  },
  onLoad: function (e) {

  },
  blurInput:function(e){
    this.setData({
      showSearch:false,
      searchText:""
    })
  }

})
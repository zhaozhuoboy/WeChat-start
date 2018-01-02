//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    pageInfo:"这是首页",
    location:null
  },
  onLoad:function () {
    var _this = this;
    wx.getLocation({
      success:function(res){
        console.log(res)
        _this.setData({
          location:res
        })
      }
    })
  },
  onShow: function () {
    console.log('show')
  },
  onHide: function () {
    console.log("hide")
  }
})

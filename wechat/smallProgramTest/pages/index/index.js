//index.js
//获取应用实例
const app = getApp()
var common = require('../../utils/util.js')
Page({
  data: {
    motto: getApp().globalData.testText,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    text: 'template测试'
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    console.log(this.data)
    console.log('Do some initialize when page load.');
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  onReady: function () {
    console.log('Do something when page ready.');
    console.log(getCurrentPages()[0].route);
    console.log(common.testFun());
  },
  onShow: function () {
    console.log('Do something when page show.')
  },
  onHide: function () {
    console.log('Do something when page hide.') 
  },
  onUnload: function () {
    console.log('Do something when page close.');
  },
  onPullDownRefresh: function () {
    console.log('Do something when pull down.')
  },
  onReachBottom: function () {
    console.log('Do something when page reach bottom.')
  },
  onShareAppMessage: function () {
    console.log('return custom share data when user share.')
  },
  onPageScroll: function () {
    console.log('Do something when page scroll')
  },
})

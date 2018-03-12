//index.js
//获取应用实例
const app = getApp()
let utils = require('../../utils/util.js')
Page({
  data: {
    banners: [
      {
        image: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        id: 1,
        title: '第一弹'
      },
      {
        image: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        id: 2,
        title: '第二弹'
      },
      {
        image: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        id: 3,
        title: '第三弹'
      }
    ],
    list: [
      {
        title: '低俗发大水回家啊黑色的发和爱是对河南啊收到回复U树大富豪就是丢合肥圣诞节繁华街道上 激发us的护肤发',
        id: 1,
        header: '日报一',
        images: [
          'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
        ]
      },
      {
        title: '发生的房间还是大发际红啊素颜大概好发于很多事发大水韩剧国语啊多少积分个还是打个防御阿斯顿规划法规的声誉和回复个合适的发际红换个',
        id: 2,
        header: '日报二',
        images: [
          'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
        ]
      },
      {
        title: '发啊说的话发的啥不就行大商股份udasfgdas发给几乎都是发神经对方噶实践活动富家大室发生ufua刚放假啊时代发生固话发噶啥发手机号更富有发',
        id: 3,
        header: '日报三',
        images: [
          'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
        ]
      }
    ],
    duration: 2000,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    loading: false,
    plain: false,
    indicatorColor: "white",
    indicatorActiveColor: "#00a2ea"
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../detail/detail?id=' + e.target.dataset.id
    })
  },
  loadMore: function (e) {
    if (this.data.list.length === 0) return
    let date = this.getNextDate()
    let that = this
    that.setData({ loading: true })
    wx.request({
      url: 'http://news.at.zhihu.com/api/4/news/before/' + (Number(utils.formatDate(date)) + 1),
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        that.setData({
          loading: false,
          list: that.data.list.concat([{ header: utils.formatDate(date, '-') }]).concat(res.data.stories)
        })
      }
    })
  },
  getNextDate: function () {
    let now = new Date()
    now.setDate(now.getDate() - this.index++)
    return now
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
    this.index = 1
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})

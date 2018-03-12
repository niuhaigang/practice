// pages/detail/detail.js
Page({
  data: {
    art: {
      image: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      title: '详情',
      image_source:'dasdfasdfasdfdasfdasfdasfasdfasdfasdfI阿海珐加快速度福建师大就开始打飞机打数据库士大夫就开始打疯狂是假的数据恢复'
    }
  },
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '详情页面'
    })
  },
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'http://news-at.zhihu.com/api/4/news/' + options.id,
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        that.setData({
          art: res.data
        })
        console.log(res.data)
      }
    })
  }
})
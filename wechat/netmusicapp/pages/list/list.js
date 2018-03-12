// pages/list/list.js
Page({
  data: {
    list: [
      {
        title: '低俗发大水回家啊黑色的发和爱是对河南啊收到回复U树大富豪就是丢合肥圣诞节繁华街道上 激发us的护肤发',
        id: 1,
        header: '日报一',
        images: [
          'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
        ]
      }
    ]
  },
  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.title
    })
  },
  onLoad: function (options) {
    var that = this
    this.title = options.title
    wx.request({
      url: 'http://news-at.zhihu.com/api/4/theme/' + options.id,
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        that.setData({
          list: res.data.stories
        })
        console.log(res.data)
      }
    })
  }
})
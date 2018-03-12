// pages/theme/theme.js
Page({
  data: {
    list: [
      {
        description: '低俗发大水回家啊黑色的发和爱是对河南啊收到回复U树大富豪就是丢合肥圣诞节繁华街道上 激发us的护肤发',
        id: 1,
        name: '日报一',
        thumbnail: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
      },
      {
        description: '发生的房间还是大发际红啊素颜大概好发于很多事发大水韩剧国语啊多少积分个还是打个防御阿斯顿规划法规的声誉和回复个合适的发际红换个',
        id: 2,
        name: '日报二',
        thumbnail: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
      },
      {
        description: '发啊说的话发的啥不就行大商股份udasfgdas发给几乎都是发神经对方噶实践活动富家大室发生ufua刚放假啊时代发生固话发噶啥发手机号更富有发',
        id: 3,
        name: '日报三',
        thumbnail: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
      }
    ]
  },
  onLoad: function () {
    let that = this
    wx.request({
      url: 'http://news-at.zhihu.com/api/4/themes',
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        that.setData({
          list: res.data.others
        })
      }
    })
  }
})
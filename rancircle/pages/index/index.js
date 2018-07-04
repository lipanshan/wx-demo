//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls: [
      '../../image/slider1.jpg',
      '../../image/slider2.jpg',
      '../../image/slider3.jpg',
      '../../image/slider4.jpg',
      '../../image/slider5.jpg'
    ],
    scrollViews: [
      {
        'text': '推荐',
        'icon': 'icon-medal',
        'color': '#f63d5d'
      },
      {
        'text': '赛事资讯',
        'icon': 'icon-plain',
        'color': '#ff8903'
      },
      {
        'text': '跑步装备',
        'icon': 'icon-run',
        'color': '#70debb'
      },
      {
        'text': '提高训练',
        'icon': 'icon-o2-run',
        'color': '#7ed320'
      }
    ],
    topicList: [
      '夏季装备晒一晒',
      '讲讲你的瘦身计划',
      '尬聊世界杯',
      '我的第一双跑鞋',
      '我的第一次活动'
    ]

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
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  swiperChange (e) {
    console.log(e)
  },
  scrollView (e) {
    console.log(e)
  }
})

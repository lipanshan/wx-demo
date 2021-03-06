// pages/menu/menu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menus: [
      '推荐',
      '赛事资讯',
      '跑步装备',
      '提高训练',
      '跑团地带',
      '跑步故事',
      '跑步文化5'
    ],
    moveLine: 0,
    currentMenuItem: 0,
    content: [
      [{
          avatar: '../../image/avatar.jpg',
          title: '推荐推荐推荐推荐推荐1',
          subtitle: '不容忽视的骨骼综合征以及治疗方法。不容忽视的骨骼综合征以及治疗方法。',
          button: '提高训练'
        },
        {
          avatar: '../../image/avatar.jpg',
          title: '推荐推荐推荐推荐推荐2',
          subtitle: '不容忽视的骨骼综合征以及治疗方法。不容忽视的骨骼综合征以及治疗方法。',
          button: '提高训练'
        },
        {
          avatar: '../../image/avatar.jpg',
          title: '推荐推荐推荐推荐推荐3',
          subtitle: '不容忽视的骨骼综合征以及治疗方法。不容忽视的骨骼综合征以及治疗方法。',
          button: '提高训练'
        },
        {
          avatar: '../../image/avatar.jpg',
          title: '推荐推荐推荐推荐推荐4',
          subtitle: '不容忽视的骨骼综合征以及治疗方法。不容忽视的骨骼综合征以及治疗方法。',
          button: '提高训练'
        },
        {
          avatar: '../../image/avatar.jpg',
          title: '推荐推荐推荐推荐推荐5',
          subtitle: '不容忽视的骨骼综合征以及治疗方法。不容忽视的骨骼综合征以及治疗方法。',
          button: '提高训练'
        },
        {
          avatar: '../../image/avatar.jpg',
          title: '推荐推荐推荐推荐推荐6',
          subtitle: '不容忽视的骨骼综合征以及治疗方法。不容忽视的骨骼综合征以及治疗方法。',
          button: '提高训练'
        },
        {
          avatar: '../../image/avatar.jpg',
          title: '推荐推荐推荐推荐推荐7',
          subtitle: '不容忽视的骨骼综合征以及治疗方法。不容忽视的骨骼综合征以及治疗方法。',
          button: '提高训练'
        },
        {
          avatar: '../../image/avatar.jpg',
          title: '推荐推荐推荐推荐推荐8',
          subtitle: '不容忽视的骨骼综合征以及治疗方法。不容忽视的骨骼综合征以及治疗方法。',
          button: '提高训练'
        }
      ],
      [{
          avatar: '../../image/avatar.jpg',
          title: '赛事资讯赛事资讯赛事资讯',
          subtitle: '不容忽视的骨骼综合征以及治疗方法。不容忽视的骨骼综合征以及治疗方法。',
          button: '提高训练'
        },
        {
          avatar: '../../image/avatar.jpg',
          title: '赛事资讯赛事资讯2',
          subtitle: '不容忽视的骨骼综合征以及治疗方法。不容忽视的骨骼综合征以及治疗方法。',
          button: '提高训练'
        },
        {
          avatar: '../../image/avatar.jpg',
          title: '赛事资讯赛事资讯3',
          subtitle: '不容忽视的骨骼综合征以及治疗方法。不容忽视的骨骼综合征以及治疗方法。',
          button: '提高训练'
        },
        {
          avatar: '../../image/avatar.jpg',
          title: '赛事资讯赛事资讯4',
          subtitle: '不容忽视的骨骼综合征以及治疗方法。不容忽视的骨骼综合征以及治疗方法。',
          button: '提高训练'
        },
        {
          avatar: '../../image/avatar.jpg',
          title: '赛事资讯赛事资讯5',
          subtitle: '不容忽视的骨骼综合征以及治疗方法。不容忽视的骨骼综合征以及治疗方法。',
          button: '提高训练'
        },
        {
          avatar: '../../image/avatar.jpg',
          title: '赛事资讯赛事资讯6',
          subtitle: '不容忽视的骨骼综合征以及治疗方法。不容忽视的骨骼综合征以及治疗方法。',
          button: '提高训练'
        },
        {
          avatar: '../../image/avatar.jpg',
          title: '赛事资讯赛事资讯7',
          subtitle: '不容忽视的骨骼综合征以及治疗方法。不容忽视的骨骼综合征以及治疗方法。',
          button: '提高训练'
        },
        {
          avatar: '../../image/avatar.jpg',
          title: '赛事资讯赛事资讯8',
          subtitle: '不容忽视的骨骼综合征以及治疗方法。不容忽视的骨骼综合征以及治疗方法。',
          button: '提高训练'
        }
      ],
      [{
          avatar: '../../image/avatar.jpg',
          title: '跑步装备跑步装备跑步装备',
          subtitle: '不容忽视的骨骼综合征以及治疗方法。不容忽视的骨骼综合征以及治疗方法。',
          button: '提高训练'
        },
        {
          avatar: '../../image/avatar.jpg',
          title: '跑步装备跑步装备2',
          subtitle: '不容忽视的骨骼综合征以及治疗方法。不容忽视的骨骼综合征以及治疗方法。',
          button: '提高训练'
        },
        {
          avatar: '../../image/avatar.jpg',
          title: '跑步装备跑步装备3',
          subtitle: '不容忽视的骨骼综合征以及治疗方法。不容忽视的骨骼综合征以及治疗方法。',
          button: '提高训练'
        },
        {
          avatar: '../../image/avatar.jpg',
          title: '跑步装备跑步装备4',
          subtitle: '不容忽视的骨骼综合征以及治疗方法。不容忽视的骨骼综合征以及治疗方法。',
          button: '提高训练'
        },
        {
          avatar: '../../image/avatar.jpg',
          title: '跑步装备跑步装备5',
          subtitle: '不容忽视的骨骼综合征以及治疗方法。不容忽视的骨骼综合征以及治疗方法。',
          button: '提高训练'
        },
        {
          avatar: '../../image/avatar.jpg',
          title: '跑步装备跑步装备6',
          subtitle: '不容忽视的骨骼综合征以及治疗方法。不容忽视的骨骼综合征以及治疗方法。',
          button: '提高训练'
        },
        {
          avatar: '../../image/avatar.jpg',
          title: '跑步装备跑步装备7',
          subtitle: '不容忽视的骨骼综合征以及治疗方法。不容忽视的骨骼综合征以及治疗方法。',
          button: '提高训练'
        },
        {
          avatar: '../../image/avatar.jpg',
          title: '跑步装备跑步装备8',
          subtitle: '不容忽视的骨骼综合征以及治疗方法。不容忽视的骨骼综合征以及治疗方法。',
          button: '提高训练'
        }
      ],
      [{
          avatar: '../../image/avatar.jpg',
          title: '提高训练提高训练',
          subtitle: '不容忽视的骨骼综合征以及治疗方法。不容忽视的骨骼综合征以及治疗方法。',
          button: '提高训练'
        },
        {
          avatar: '../../image/avatar.jpg',
          title: '提高训练提高训练2',
          subtitle: '不容忽视的骨骼综合征以及治疗方法。不容忽视的骨骼综合征以及治疗方法。',
          button: '提高训练'
        },
        {
          avatar: '../../image/avatar.jpg',
          title: '提高训练提高训练3',
          subtitle: '不容忽视的骨骼综合征以及治疗方法。不容忽视的骨骼综合征以及治疗方法。',
          button: '提高训练'
        },
        {
          avatar: '../../image/avatar.jpg',
          title: '提高训练提高训练4',
          subtitle: '不容忽视的骨骼综合征以及治疗方法。不容忽视的骨骼综合征以及治疗方法。',
          button: '提高训练'
        },
        {
          avatar: '../../image/avatar.jpg',
          title: '提高训练提高训练5',
          subtitle: '不容忽视的骨骼综合征以及治疗方法。不容忽视的骨骼综合征以及治疗方法。',
          button: '提高训练'
        },
        {
          avatar: '../../image/avatar.jpg',
          title: '提高训练提高训练6',
          subtitle: '不容忽视的骨骼综合征以及治疗方法。不容忽视的骨骼综合征以及治疗方法。',
          button: '提高训练'
        },
        {
          avatar: '../../image/avatar.jpg',
          title: '提高训练提高训练7',
          subtitle: '不容忽视的骨骼综合征以及治疗方法。不容忽视的骨骼综合征以及治疗方法。',
          button: '提高训练'
        },
        {
          avatar: '../../image/avatar.jpg',
          title: '提高训练提高训练8',
          subtitle: '不容忽视的骨骼综合征以及治疗方法。不容忽视的骨骼综合征以及治疗方法。',
          button: '提高训练'
        }
      ],
      [{
          avatar: '../../image/avatar.jpg',
          title: '跑团地带跑团地带',
          subtitle: '不容忽视的骨骼综合征以及治疗方法。不容忽视的骨骼综合征以及治疗方法。',
          button: '提高训练'
        },
        {
          avatar: '../../image/avatar.jpg',
          title: '跑团地带跑团地带2',
          subtitle: '不容忽视的骨骼综合征以及治疗方法。不容忽视的骨骼综合征以及治疗方法。',
          button: '提高训练'
        },
        {
          avatar: '../../image/avatar.jpg',
          title: '跑团地带跑团地带3',
          subtitle: '不容忽视的骨骼综合征以及治疗方法。不容忽视的骨骼综合征以及治疗方法。',
          button: '提高训练'
        },
        {
          avatar: '../../image/avatar.jpg',
          title: '跑团地带跑团地带4',
          subtitle: '不容忽视的骨骼综合征以及治疗方法。不容忽视的骨骼综合征以及治疗方法。',
          button: '提高训练'
        },
        {
          avatar: '../../image/avatar.jpg',
          title: '跑团地带跑团地带5',
          subtitle: '不容忽视的骨骼综合征以及治疗方法。不容忽视的骨骼综合征以及治疗方法。',
          button: '提高训练'
        },
        {
          avatar: '../../image/avatar.jpg',
          title: '跑团地带跑团地带6',
          subtitle: '不容忽视的骨骼综合征以及治疗方法。不容忽视的骨骼综合征以及治疗方法。',
          button: '提高训练'
        },
        {
          avatar: '../../image/avatar.jpg',
          title: '跑团地带跑团地带7',
          subtitle: '不容忽视的骨骼综合征以及治疗方法。不容忽视的骨骼综合征以及治疗方法。',
          button: '提高训练'
        },
        {
          avatar: '../../image/avatar.jpg',
          title: '跑团地带跑团地带8',
          subtitle: '不容忽视的骨骼综合征以及治疗方法。不容忽视的骨骼综合征以及治疗方法。',
          button: '提高训练'
        }
      ],
      [{
          avatar: '../../image/avatar.jpg',
          title: '跑步故事跑步故事',
          subtitle: '不容忽视的骨骼综合征以及治疗方法。不容忽视的骨骼综合征以及治疗方法。',
          button: '提高训练'
        },
        {
          avatar: '../../image/avatar.jpg',
          title: '跑步故事跑步故事2',
          subtitle: '不容忽视的骨骼综合征以及治疗方法。不容忽视的骨骼综合征以及治疗方法。',
          button: '提高训练'
        },
        {
          avatar: '../../image/avatar.jpg',
          title: '跑步故事跑步故事3',
          subtitle: '不容忽视的骨骼综合征以及治疗方法。不容忽视的骨骼综合征以及治疗方法。',
          button: '提高训练'
        },
        {
          avatar: '../../image/avatar.jpg',
          title: '跑步故事跑步故事4',
          subtitle: '不容忽视的骨骼综合征以及治疗方法。不容忽视的骨骼综合征以及治疗方法。',
          button: '提高训练'
        },
        {
          avatar: '../../image/avatar.jpg',
          title: '跑步故事跑步故事5',
          subtitle: '不容忽视的骨骼综合征以及治疗方法。不容忽视的骨骼综合征以及治疗方法。',
          button: '提高训练'
        },
        {
          avatar: '../../image/avatar.jpg',
          title: '跑步故事跑步故事6',
          subtitle: '不容忽视的骨骼综合征以及治疗方法。不容忽视的骨骼综合征以及治疗方法。',
          button: '提高训练'
        },
        {
          avatar: '../../image/avatar.jpg',
          title: '跑步故事跑步故事7',
          subtitle: '不容忽视的骨骼综合征以及治疗方法。不容忽视的骨骼综合征以及治疗方法。',
          button: '提高训练'
        },
        {
          avatar: '../../image/avatar.jpg',
          title: '跑步故事跑步故事8',
          subtitle: '不容忽视的骨骼综合征以及治疗方法。不容忽视的骨骼综合征以及治疗方法。',
          button: '提高训练'
        }
      ],
      [{
          avatar: '../../image/avatar.jpg',
          title: '跑步文化跑步文化跑步文化',
          subtitle: '不容忽视的骨骼综合征以及治疗方法。不容忽视的骨骼综合征以及治疗方法。',
          button: '提高训练'
        },
        {
          avatar: '../../image/avatar.jpg',
          title: '跑步文化跑步文化2',
          subtitle: '不容忽视的骨骼综合征以及治疗方法。不容忽视的骨骼综合征以及治疗方法。',
          button: '提高训练'
        },
        {
          avatar: '../../image/avatar.jpg',
          title: '跑步文化跑步文化3',
          subtitle: '不容忽视的骨骼综合征以及治疗方法。不容忽视的骨骼综合征以及治疗方法。',
          button: '提高训练'
        },
        {
          avatar: '../../image/avatar.jpg',
          title: '跑步文化跑步文化4',
          subtitle: '不容忽视的骨骼综合征以及治疗方法。不容忽视的骨骼综合征以及治疗方法。',
          button: '提高训练'
        },
        {
          avatar: '../../image/avatar.jpg',
          title: '跑步文化跑步文化5',
          subtitle: '不容忽视的骨骼综合征以及治疗方法。不容忽视的骨骼综合征以及治疗方法。',
          button: '提高训练'
        },
        {
          avatar: '../../image/avatar.jpg',
          title: '跑步文化跑步文化6',
          subtitle: '不容忽视的骨骼综合征以及治疗方法。不容忽视的骨骼综合征以及治疗方法。',
          button: '提高训练'
        },
        {
          avatar: '../../image/avatar.jpg',
          title: '跑步文化跑步文化7',
          subtitle: '不容忽视的骨骼综合征以及治疗方法。不容忽视的骨骼综合征以及治疗方法。',
          button: '提高训练'
        },
        {
          avatar: '../../image/avatar.jpg',
          title: '跑步文化跑步文化8',
          subtitle: '不容忽视的骨骼综合征以及治疗方法。不容忽视的骨骼综合征以及治疗方法。',
          button: '提高训练'
        }
      ]
    ],
    scrollLeft: 0,
    duration: 300
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this._moveItem(options.id);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  tagTap(e) {
    this._moveItem(e.currentTarget.dataset.index);
  },
  _moveItem(index) {
    const windowW = wx.getSystemInfoSync().windowWidth;
    wx.createSelectorQuery().selectAll('.tag-item').boundingClientRect((res) => {
      const len = res.slice(0, index).reduce((sum, item) => {
        return sum + item.width
      }, 0)
      this.setData({
        activeLineWidth: res[index].width,
        currentMenuItem: index,
        moveLine: len,
        scrollLeft: len - windowW / 2 + res[index].width/2
      })
    }).exec();
    this.setData({
      currentMenuItem: index
    })
  },
  changeContent (e) {
    this._moveItem(e.detail.current);
  }
})
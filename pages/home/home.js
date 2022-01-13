Page({
  news(){
    wx.navigateTo({
      url: '重要通知',
    })
  }, 
  
  manual(){
    wx.navigateTo({
      url: '新生手册',
    })
  },

  renting(){
    wx.navigateToMiniProgram({
      appId: 'wxdfc5ddf39f121903',
    })
  },

  cssa(){
    wx.navigateTo({
      url: 'CSSA构成/CSSA构成',
    })
  },

  data: {
    slider: [
      {'img':'images/新闻1.jpeg'},
      {'img':'images/新闻2.jpeg'},
      {'img':'images/新闻3.png'},
      {'img':'images/新闻4.jpeg'},
      {'img':'images/新闻5.jpeg'}
    ],
    swiperCurrent: 0,
  },
  swiperChange: function(e){
    this.setData({
      swiperCurrent: e.detail.current
    })
  },

  data: {
    type: 'policy',
  },

  onLoad: function(options) {},

  handleType(event) {
    const type = event.currentTarget.dataset.type;
    this.setData({
      type: type,
    });
  },
})




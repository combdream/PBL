wx-Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList:["1.jpg","2.jpg","3.jpg","4.jpg"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
//页面开始加载 就会触发
  onLoad: function (options) {
  //1 发生异步请求获取轮播图数据
      wx.request({
        url: 'url',
        success: (result) => {
          console.log(result);

    },
   })
  } 
})
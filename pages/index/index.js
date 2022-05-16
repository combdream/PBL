wx-Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList:["1.jpg","2.jpg","3.jpg","4.jpg"],
    select:false,
    grade_name:'--请选择--',
    grades: [        '成都',        '绵阳',        '重庆',],
    checkInDate:2022+'-'+5+'-'+9,
    checkOutDate:2022+'-'+5+'-'+10,
    day:'1',
    show:false,
    money_name:'--请选择--',
    money:[   '0-100',   '100-200',   '200-400',   '400-600',]
    },

  /**
   * 生命周期函数--监听页面加载
   */
//页面开始加载 就会触发
  onShow: function () {
    var backbata=wx.getStorageSync('ROOM_SOURCE_DATE')
    this.setData({
      checkInDate:backbata.checkInDate,
      checkOutDate:backbata.checkOutDate,
    })
    wx.clearStorageSync('ROOM_SOURCE_DATE');
  },
  onLoad: function (options) {
  //1 发生异步请求获取轮播图数据
      wx.request({
        url: 'url',
        success: (result) => {
          console.log(result);

    },
   })
  } ,
  /**
*  点击下拉框 */
 bindShowMsg() {    this.setData({
  select: !this.data.select
})
},/**
* 已选下拉框 */
mySelect(e) {
  console.log(e)   
  var name = e.currentTarget.dataset.name
    this.setData({
      grade_name: name,
      select: false
    })
},
mbindShowMsg() {    this.setData({
  show: !this.data.show
})
},
mmySelect(e) {
  console.log(e)   
  var name = e.currentTarget.dataset.name
    this.setData({
      money_name: name,
      show: false
    })
},
})
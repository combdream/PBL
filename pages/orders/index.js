// pages/orders/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabs:[
            {
                id:0,
                value:"全部订单",
                isActive:true
            },
            {
                id:1,
                value:"已预订",
                isActive:false
            },
            {
                id:2,
                value:"已完成",
                isActive:false
            }
        ]

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },
    //标题点击事件，从子组件中传递过来
    handleTabsItemChange(e){
        //console.log(e);
        const {index}=e.detail;
        let {tabs}=this.data;
        tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
        this.setData({
            tabs
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
    
})
const types = ['default', 'primary', 'warn']
const pageObject = {
  data: {
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false
  },

  onShareAppMessage() {
    return {
      title: 'button',
      path: 'page/component/pages/button/button'
    }
  },

  setDisabled() {
    this.setData({
      disabled: !this.data.disabled
    })
  },

  setPlain() {
    this.setData({
      plain: !this.data.plain
    })
  },

  setLoading() {
    this.setData({
      loading: !this.data.loading
    })
  },
  
  handleContact(e) {
    console.log(e.detail)
  },

  handleGetPhoneNumber(e) {
    console.log(e.detail)
  },

  handleGetUserInfo(e) {
    console.log(e.detail)
  },

  handleOpenSetting(e) {
    console.log(e.detail.authSetting)
  },

  handleGetUserInfo(e) {
    console.log(e.detail.userInfo)
  }
}

for (let i = 0; i < types.length; ++i) {
  (function (type) {
    pageObject[type] = function () {
      const key = type + 'Size'
      const changedData = {}
      changedData[key] =
        this.data[key] === 'default' ? 'mini' : 'default'
      this.setData(changedData)
    }
  }(types[i]))
}

Page(pageObject)

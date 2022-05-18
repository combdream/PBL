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
        ],
        dataList:[
            {id:"订单一",pricre:"￥255",more:"详情",say:"评价"},
            {id:"订单二",pricre:"￥200",more:"去支付"},
            {id:"订单三",pricre:"￥150",more:"修改评价"}

        ]

    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad:function(options) {
        wx.request({
          url: 'https://api.it120.cc/doc.html#/%E5%89%8D%E7%AB%AFapi%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/%E8%AE%A2%E5%8D%95%E7%AE%A1%E7%90%86/createUsingPOST',
          data:{},
          success:res=>{
              console.log(res)
          }
        })

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
    // urlSwitch:function(e){
    //     if(dataList.more =="详情"){
            
    //     }

    // },
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
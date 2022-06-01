var app = getApp()
Page({
    data:{ 
        open: true,//默认显示数据
        focus:false,
        isDisabled:true,
        text:"编辑",
        inputP:'',
        inputID:'',
        inputE:'',
        hasUserInfo:false, 
        userInfo:{} 
      }, 
      getUserProfile:function(){ 
        wx.getUserProfile({ 
          desc: '获取用户信息', 
          success:(res) => { 
            console.log(res.userInfo); 
            this.setData({ 
              hasUserInfo:true, 
              userInfo:res.userInfo 
            }) 
          } 
        }) 
    },
     // 退出登录
  loginOut() {
    wx.showModal({
        title: '提示',
        content: '您确定要退出登录吗',
        success: function (res) {
          if (res.confirm) {//这里是点击了确定以后
            console.log('用户点击确定')
            wx.setStorageSync('res', '');//将token置空
            wx.redirectTo({
              url: '/pages/login/index',//跳去登录页
            })
          } else {//这里是点击了取消以后
            console.log('用户点击取消')
          }
        }
      })
  },
  onLaunch:function(){
      wx.login({
        success:function(res){
            if(res.code){
                console.log(res.code)
            }else{
                console.log('获取用户登录状态失败'+res.errMsg)
            }
        }
      })
  },
  userPhoneNumber:function(e){
        this.setData({
            
            inputP:e.detail.value
        })
  },
  userIDinput:function(e){
      this.setData({
        inputID:e.detail.value
      })
  },
  userEmileInput:function(e){
      this.setData({
        inputE:e.detail.value
      })
  },
exchangeUser:function(e){
    if(!this.data.isDisabled){
        this.setData({
            isDisabled:true,
            text:"编辑",
            open:false
        })
    }else{
        this.setData({
            isDisabled:false,
            text:"保存",
            open:true
        })
    }
        
},
switch(){
    this.setData({
        open:!this.data.open
    })
},
focus(){
    this.setData({
        focus:true
    })
},
blur(){
    this.setData({
        focus:false
    })
},

//   screat:function (e) {
//     this.setData({
//       inputID: e.data.inputID.substr(0, 4) + "*".repeat(e.data.inputID.length - 8) + e.data.inputID.substr(-4)
//     })
//     console.log(e.data.inputID);
//   },




})
  
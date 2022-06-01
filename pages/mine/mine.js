var app = getApp()
Page({
    data:{ 
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
<<<<<<< HEAD
=======
            
>>>>>>> 478bdfdd9752018a80c3ba18b4f2638f27513ebd
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
            text:"编辑"
        })
    }else{
        this.setData({
            isDisabled:false,
            text:"保存"
        })
    }
        
}
})
  
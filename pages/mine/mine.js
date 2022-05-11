
Page({
    data:{ 
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
getPhoneNumber:function(e){
    console.log(e.detail.errMsg)
    console.log(e.detail.iv)
    console.log(e.detail.encryptedData)
    if(e.detail.errMsg == 'getPhoneNumber:fail user deny'){
        wx.showModal({
            title:'提示',
            showCancel:false,
            content:'未授权',
            success:function(res){}
        })
    }else{
        wx.showModal({
            title:'提示',
            showCancel:false,
            content:'同意授权',
            success:function(res){}
        })
    }
},
exchangeUser:function(e){
    
}
  })
  
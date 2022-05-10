
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
    this.setData({
      userInfo: ''
    }),
    // 把user缓存存储为空
    wx.setStorageSync('user', '')
  }
  })
  
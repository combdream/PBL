
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
    }
  })
  

Page({
    data:{ 
       focus:false,
       inputPhoneNumber:'',
       inputUserID:'',
       inputEmile:'',
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
  bindKeyInput: function (e) {
    this.setData({
    inputPhoneNumber: e.detail.value,
    inputUserID: e.detail.value,
    inputEmile:e.detail.value
    })
  },
  bindReplaceInput: function (e) {
    var value = e.detail.value
    var pos = e.detail.cursor
    var left
    if (pos !== -1) {
      // 光标在中间
      left = e.detail.value.slice(0, pos)
      // 计算光标的位置
      pos = left.replace(/11/g, '2').length
    }

    // 直接返回对象，可以对输入进行过滤处理，同时可以控制光标的位置
    return {
      value: value.replace(/11/g, '2'),
      cursor: pos
    }

    // 或者直接返回字符串,光标在最后边
    // return value.replace(/11/g,'2'),
  },
  bindHideKeyboard: function (e) {
    if (e.detail.value === '123') {
      // 收起键盘
      wx.hideKeyboard()
    }
  },
exchangeUser:function(e){
    if( hasUserInfo =='ture'){
        this.setData(
            
        )
    }
}
  })
  
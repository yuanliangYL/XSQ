//app.js
App({

  onLaunch: function () {
  

   var that = this

   //用户登陆
    wx.login({
      success: function (res) {
        if (res.code) {

          //发起网络请求尝试登陆本地服务器
          // wx.request({
          //   url: 'https://test.com/onLogin',
          //   data: {
          //     code: res.code
          //   }
          // })

          that.globalData.userInfo.code = res.code
          console.log(res.code)

        } else {

          console.log('获取用户登录态失败！' + res.errMsg)

        }
      }
    });
  },

  globalData:{
  
    //用户基本信息
    userInfo:{
      code:null,   //用户code码
      isRegister: false,   //是否为拥有项目展示资格的用户
      isTeamMenber:false    //是否为团队成员

    }
  }
})
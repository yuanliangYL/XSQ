// pages/home/home.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [
      { obj: '快摇名片', image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495454628383&di=67feb904a20415d8ea7d15cf617e9261&imgtype=0&src=http%3A%2F%2Fwww.people.com.cn%2Fmediafile%2Fpic%2F20170116%2F46%2F8627193497497891690.jpg' },
      { obj: '要钱妹', image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495454715026&di=93815b1af4b5c1696702c204ebdd2d68&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201512%2F21%2F20151221211453_N3LaY.jpeg' },
      { obj: '执笔航', image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496049489&di=43630ea957b55f15344c46242c15db8d&imgtype=jpg&er=1&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fzhidao%2Fwh%253D600%252C800%2Fsign%3De6a3bbabb0b7d0a27b9c0c9bfbdf5a31%2F63d0f703918fa0ec436db314249759ee3d6ddb05.jpg' },
      { obj: '千里教', image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495454797102&di=2b18f4d4ac93f40482516bdad7e47774&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201311%2F06%2F20131106232908_EucSN.jpeg' },
      { obj: '大愿科技', image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1583924887,2463069459&fm=15&gp=0.jpg' },
      { obj: '善其信', image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496049717&di=2691604b197b99af4a0efc802be8ed23&imgtype=jpg&er=1&src=http%3A%2F%2Ffc.topitme.com%2Fc%2Ffa%2Ff5%2F1115008726c39f5facl.jpg' },
      { obj: '小程序', image: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3584642478,1627779799&fm=15&gp=0.jpg' },
      { obj: 'swift原生', image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495455044417&di=a2cc3e43ec121eeaed477c60b4c78ea7&imgtype=0&src=http%3A%2F%2Fif.topit.me%2Ff%2F77%2F64%2F1112414609d956477fo.jpg' }],
    hidden:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    if (app.globalData.userInfo.isRegister === false) {

      // wx.redirectTo({
      //   url: '../register/register',
      // })

    } else {

    }

    this.setData({
      hidden: true
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
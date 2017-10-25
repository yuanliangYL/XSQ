// companychange.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    company_category: ["保险业", "采矿", "能源", "餐饮", "宾馆", "电讯业", "房地产", "服务", "服装业"],
    company_choose:"行业选择",
    company_scale: ["0-20人", "20-50人", "50-100人", "100-500人", "500-1000人"],
    company_scale_choose:"企业规模",
    company_category_show: false,
    company_scale_show: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },

  //图片选择
  chooseImages: function () {
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
      }
    })
  },


//显示隐藏视图
  hidingViewToshow: function(e) {

    let type = e.currentTarget.dataset.type

    if (type === "companytype"){
      //行业选择
      if (this.data.company_category_show === false) {

        this.setData({
          company_category_show: true
        })

      } else {

        this.setData({
          company_category_show: false
        })

      }
    }else{

      //企业规模选择
      if (this.data.company_scale_show === false) {

        this.setData({
          company_scale_show: true
        })

      } else {

        this.setData({
          company_scale_show: false
        })

      }
    }
  },


//选择的企业类型或者规模，赋值变量
  chooseItem: function(e){

    let type = e.currentTarget.dataset.type
    let index = e.currentTarget.dataset.index

    if (type === "companytype") {
      // 企业类型
      this.setData({
        company_category_show: false,

        company_choose: this.data.company_category[index]
      })

    }else{
      // 规模
      this.setData({
        company_scale_show: false,
        company_scale_choose: this.data.company_scale[index]
      })

    }
  },


})
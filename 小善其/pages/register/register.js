// projects.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    //成员资格判定
    ismenber: null,
    //个人注册
    isPrivate: true,
    jion_team: "加入团队",
    allteams: ["大愿队", "飓风队", "神盾局"],
    jion_team_show: false,



    //企业注册
    iscompany: false,
    company_category: ["保险业", "采矿", "能源", "餐饮", "宾馆", "电讯业", "房地产", "服务", "服装业"],
    company_choose: "行业选择",
    company_scale: ["0-20人", "20-50人", "50-100人", "100-500人", "500-1000人"],
    company_scale_choose: "企业规模",
    company_category_show: false,
    company_scale_show: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.getTeamInfo();




  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

    console.log(this.data.array[0].projects.length);

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


  //注册类型选择
  registerType: function (e) {

    let type = e.currentTarget.dataset.rtype;
    if (type === "private") {
      //个人
      this.setData({
        isPrivate: true,
        iscompany: false
      })
    } else {

      // 企业
      this.setData({
        isPrivate: false,
        iscompany: true
      })
    }
  },


  //显示加入团队选择
  hidingViewToshowForTeam: function () {
    if (this.data.jion_team_show === true) {

      this.setData({
        jion_team_show: false
      })
    } else {
      this.setData({
        jion_team_show: true
      })
    }
  },

  //确定选择加入的团队
  chooseItemtoteam: function (e) {

    console.log(e)

    let index = e.currentTarget.dataset.index

    this.setData({
      jion_team_show: false,

      jion_team: this.data.allteams[index]
    })
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
  hidingViewToshow: function (e) {

    let type = e.currentTarget.dataset.type

    if (type === "companytype") {
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
    } else {

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
  chooseItem: function (e) {

    let type = e.currentTarget.dataset.type
    let index = e.currentTarget.dataset.index

    if (type === "companytype") {
      // 企业类型
      this.setData({
        company_category_show: false,

        company_choose: this.data.company_category[index]
      })

    } else {
      // 规模
      this.setData({
        company_scale_show: false,
        company_scale_choose: this.data.company_scale[index]
      })

    }
  },

  // 跳转支付页面
  gotoPayPage: function (e) {


    wx.navigateTo({
      url: '../register/payPage'
    })
  },

  // 个人用户注册页面获取团队信息
  getTeamInfo: function () {

    wx.request({
      url: 'https://xsq.ahcanxiang.com/index.php?g=api&m=api&a=getTeamInfo',
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      success: function (res) {
      
      console.log(res)
      }
    })

  }

})
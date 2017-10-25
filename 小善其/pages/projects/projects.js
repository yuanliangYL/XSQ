// projects.js

var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: ["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495513920268&di=617649d7536e8ad3312900b6c0a430fb&imgtype=0&src=http%3A%2F%2Fwww.ruizhi001.com%2Fimages%2Fimg2%2F20170313%2Fyuojijpybhe.jpg",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495513920263&di=658fe1d20c90943384e4386ee1ddfab1&imgtype=0&src=http%3A%2F%2Fpic.sucaibar.com%2Fpic%2F201311%2F03%2Ffbd9162fea.jpg",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495513920260&di=879443019aa00d4a07a118e029d83fbb&imgtype=0&src=http%3A%2F%2Ftupian.enterdesk.com%2F2014%2Fxll%2F01%2F26%2F4%2Ffengguang1.jpg"],

    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    array: [
      {
        image: '../../images/hot.png', title: ' 热门项目', projects: [{ pimg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496279930&di=5b87979ac04a524126faaa7ccebd2477&imgtype=jpg&er=1&src=http%3A%2F%2Fn.sinaimg.cn%2Fcollect%2Fcrawl%2F20160314%2Fq22A-fxqhwtu7729974.jpg", ptitle: "快摇名片", },
        { pimg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495685212103&di=8e26d902420017828ba2eeeae5b1ac2c&imgtype=0&src=http%3A%2F%2Fimage.peoplearts.cn%2FAdmin%2FUpload%2FImage%2F20160314%2Fv_18404296575.jpg", ptitle: "摇钱树", },
        { pimg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495685432530&di=d870fd204fb366675763bc0fa34a6b5b&imgtype=0&src=http%3A%2F%2Fimg0.114pifa.com%2Fg%2Fimg%2Fibank%2F2014%2F014%2F235%2F1694532410_1170055271.jpg%3F__r__%3D1411010546481", ptitle: "智利包" },
        { pimg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495685212100&di=5eb7382e66b436fa48bd7cf4ecc06163&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fcollect%2Fcrawl%2F20160314%2FEAFa-fxqhmvc2437808.jpg", ptitle: "原生开发" },
        { pimg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495685212095&di=e39c1404f0d883a0e43010143a0ef3b5&imgtype=0&src=http%3A%2F%2Fimg.juimg.com%2Ftuku%2Fyulantu%2F131005%2F328989-13100511222964.jpg", ptitle: "跨平台" },
        { pimg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495685212093&di=2536c1fbc7c06e0e49e631bdf242a6e1&imgtype=0&src=http%3A%2F%2Ffarm3.staticflickr.com%2F2894%2F13506845065_4fa75530b2_b.jpg", ptitle: "macOS" },
        { pimg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495685212079&di=a7a7171f58481de4003c7203e78a8660&imgtype=0&src=http%3A%2F%2Fpic35.photophoto.cn%2F20150401%2F0017031031675987_b.jpg", ptitle: "大愿科技" }]
      },
      {
        image: '../../images/nwe.png', title: '最新项目', projects: [{ pimg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495685303624&di=cd9f0946dd69fb02fd60580b77d8edc6&imgtype=0&src=http%3A%2F%2Fimg.taopic.com%2Fuploads%2Fallimg%2F121226%2F234737-12122615330196.jpg", ptitle: "快摇名片" },
        { pimg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495685303623&di=3ba4ac9d7b68c1c1dd7ad6f6ae381e94&imgtype=0&src=http%3A%2F%2Fpic32.photophoto.cn%2F20140913%2F0017030048897005_b.jpg", ptitle: "摇钱树" },
        { pimg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495685212093&di=2536c1fbc7c06e0e49e631bdf242a6e1&imgtype=0&src=http%3A%2F%2Ffarm3.staticflickr.com%2F2894%2F13506845065_4fa75530b2_b.jpg", ptitle: "macOS" },
        { pimg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495685212079&di=a7a7171f58481de4003c7203e78a8660&imgtype=0&src=http%3A%2F%2Fpic35.photophoto.cn%2F20150401%2F0017031031675987_b.jpg", ptitle: "大愿科技" },
        { pimg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495685303616&di=8a464b1b440fe4beec7aeb07fc559e36&imgtype=0&src=http%3A%2F%2Ffarm4.staticflickr.com%2F3830%2F9575673180_0db80620c0_b_d.jpg", ptitle: "摇钱树" },
        { pimg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495685303616&di=6f8af043a5fc42e3f865f1b50b444b6b&imgtype=0&src=http%3A%2F%2Fimage.peoplearts.cn%2FAdmin%2FUpload%2FImage%2F20160314%2Fv_18404360587.jpg", ptitle: "智利包" },
        { pimg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496280743&di=00d1990a361732f3220f79bd60cb3154&imgtype=jpg&er=1&src=http%3A%2F%2Fn.sinaimg.cn%2Fcollect%2Fcrawl%2F20160314%2Fgi6u-fxqhmve9176693.jpg", ptitle: "大愿科技" }
        ]
      },
      {
        image: '../../images/downcar.png', title: '已下架项目', projects: [{ pimg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495685303622&di=a5671740920631123f1a65f5a1550898&imgtype=0&src=http%3A%2F%2Fbpic.ooopic.com%2F15%2F89%2F71%2F15897166-8743156efa411b8533887c7019f39260-0.jpg", ptitle: "快摇名片" },
        { pimg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495685303616&di=8a464b1b440fe4beec7aeb07fc559e36&imgtype=0&src=http%3A%2F%2Ffarm4.staticflickr.com%2F3830%2F9575673180_0db80620c0_b_d.jpg", ptitle: "摇钱树" },
        { pimg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495685303616&di=6f8af043a5fc42e3f865f1b50b444b6b&imgtype=0&src=http%3A%2F%2Fimage.peoplearts.cn%2FAdmin%2FUpload%2FImage%2F20160314%2Fv_18404360587.jpg", ptitle: "智利包" },
        { pimg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496280743&di=00d1990a361732f3220f79bd60cb3154&imgtype=jpg&er=1&src=http%3A%2F%2Fn.sinaimg.cn%2Fcollect%2Fcrawl%2F20160314%2Fgi6u-fxqhmve9176693.jpg", ptitle: "大愿科技" }]
      },
    ],

    //scrollView滚到顶部
    scrollTop1: 0,
    scrollTop2: 0,
    scrollTop3: 0,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {


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

  //scrollView滚到设置位置
  tapMoveforward: function (e) {

    console.log(e);

    if (e.currentTarget.dataset.type === "cell1") {

      this.setData({
        scrollTop1: this.data.scrollTop1 + 200
      })

    }
    if (e.currentTarget.dataset.type === "cell2") {

      this.setData({
        scrollTop2: this.data.scrollTop2 + 200
      })

    }
    if (e.currentTarget.dataset.type === "cell3") {

      this.setData({
        scrollTop3: this.data.scrollTop3 + 200
      })

    }
  },

  //scrollView回滚
  scrollToTop: function (e) {

    console.log(e);

    if (e.currentTarget.dataset.type === "cell1") {

      this.setData({
        scrollTop1: 0
      })

    }
    if (e.currentTarget.dataset.type === "cell2") {

      this.setData({
        scrollTop2: 0
      })

    }
    if (e.currentTarget.dataset.type === "cell3") {
      this.setData({
        scrollTop3: 0
      })
    }
  },



  //页面跳转
  gotoDetail: function (e) {
    // console.log(e);
    let type = e.currentTarget.dataset.type;

    wx.navigateTo({
      url: '/pages/projects/projectsDetail?type=' + type
    })
  },


})
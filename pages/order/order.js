// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: '',
    phone: '',
    value: '',
    detailadress: '',
    arr:[],
    allp:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  handadd() {
    wx.navigateTo({
      url: '/pages/handadress/handadress',
    })
  },
  autoadd() {
    wx.navigateTo({
      url: '/pages/autoadress/autoadress',
    })
  },
  left_fn() {
    // 导航左侧的点击事件
    // wx.switchTab({
    //   url: '/pages/cart/cart',
    // })
    wx.navigateBack()
  },





  // 一键获取
  chooseAddress() {
    let that = this
    wx.chooseAddress({
      success(res) {
        console.log(res)
        // res = {
        //     cityName: "广州市"
        //     countyName: "海珠区"
        //     detailInfo: "新港中路397号"
        //     errMsg: "chooseAddress:ok"
        //     nationalCode: "510000"
        //     postalCode: "510000"
        //     provinceName: "广东省"
        //     telNumber: "020-81167888"
        //     userName: "张三"
        // }
        let {
          provinceName,
          cityName,
          countyName,
          detailInfo,
          telNumber,
          userName
        } = res
        that.setData({
          value: provinceName + cityName + countyName,
          detailadress: detailInfo,
          phone: telNumber,
          user: userName

        })
      }
    })
  },
  // getdata(){
  //   let arr = wx.getStorageSync('datas')
  //   let newarr = arr.filter(item => item.checked != false)
  //   this.setData({
  //     arr:newarr
  //   })
  // },
  // allprice() {
  //   // console.log(this.data.arr)
  //   let newarr = this.data.arr.filter(item => item.checked != false)
  //   let all = newarr.reduce(function (sum, item) {
  //       return sum + item.count * item.price * 100
  //   }, 0)
  //   this.setData({
  //       allp: all
  //   })
  // },
  getdatas(){
    // 获取详情页传来的数据
    let that = this
    const eventChannel = this.getOpenerEventChannel()
    // 监听datas事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on('orders', function (data) {
        console.log(data.data)
        let all = data.data.reduce(function (sum, item) {
            return sum + item.count * item.price * 100
        }, 0)
        that.setData({
            arr: data.data,
            allp:all
        })
    });
  },

  onLoad: function (options) {
    this.getdatas()
    // this.getdata()
    // this.allprice()
    if (options.adress) {
      let {user,phone,value,detailadress} = JSON.parse(options.adress);
      this.setData({
        user,
        phone,
        value,
        detailadress
      })
    }
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
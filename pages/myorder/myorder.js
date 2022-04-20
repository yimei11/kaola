// pages/myorder/myorder.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      all:[],//全部
      fukuan:[],//待付款
      fahuo:[],//待发货
      shouhuo:[],//待收货
      name:"全部订单"
    },
    onClick(e){
      //点击tabs 
      console.log(e.detail);
    },
    getdata(){
      let all = wx.getStorageSync('datas')
      let fukuan = wx.getStorageSync('checked')
      // 待发货 \ 待收货
      // let fahuo
      //let shouhuo
      this.setData({
        all,fukuan
      })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      console.log(options.wd);
      this.setData({
        name:options.wd
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
      this.getdata()
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
// pages/fktype/fktype.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      type:'',
      typelist:[
        ['无法打开小程序','小程序闪退','卡顿','黑屏白屏','死机','界面错位','界面加载慢','其他异常'],
        ['无法打开小程序','小程序闪退','卡顿','黑屏白屏','死机','界面错位','界面加载慢','其他异常'],
        ['无法打开小程序','小程序闪退','卡顿','黑屏白屏','死机','界面错位','界面加载慢','其他异常'],
        ['无法打开小程序','小程序闪退','卡顿','黑屏白屏','死机','界面错位','界面加载慢','其他异常']
      ],
      typeitem:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      let {type} = options;
      console.log(type);
      this.setData({
        type,typeitem:this.data.typelist[type*1]
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
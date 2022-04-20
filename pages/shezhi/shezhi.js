// pages/shezhi/shezhi.js
Page({

    /**
     * 页面的初始数据
     */
    data: {      
      userInfo:null,
      show:false,//弹窗显示 
    },    
    getuserinfo(){
      //获取本地存储的 kaola_userInfo
      let userInfo = wx.getStorageSync('kaola_userInfo')
      console.log(userInfo);
      this.setData({
        userInfo
      })
    },
    tuilogin_fn(){
      //退出登录 弹窗
      this.setData({
        show:true
      })
    },
    tuiloginnavigate_fn(){
      //退出登录 跳转 我的考拉 为登录时页面
      //把 登录信息删除
      //.....
      wx.setStorageSync('kaola_userInfo', null)
      //在跳转
      wx.switchTab({
        url:"/pages/my/my"
      })
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
      this.getuserinfo()
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
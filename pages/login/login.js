// pages/login/login.js
let app = getApp()
import Notify from '../../miniprogram_npm/@vant/weapp/notify/notify';
Page({

    /**
     * 页面的初始数据
     */
    data: {
      show:false
    },
    onClose(){
      // console.log(1);
      //弹窗  拒绝
      this.setData({show:false})
    },
    getuser_fn(){
      //弹窗  允许
      wx.showToast({
        title: '加载中',
        icon:'loading',
        duration:2000,
        complete:()=>{
          wx.getUserProfile({
            desc:'desc',
            success:(res)=>{
              //成功 消息提示 
              Notify({
                type: 'success',
                message: '登录成功',
                duration: 2000,
                selector: '#custom-selector',
              });
              // console.log(res.userInfo);  
              // console.log(app);  
              app.globalData.userInfo =  res.userInfo 
              wx.setStorageSync('kaola_userInfo', res.userInfo)  
              // console.log(app); 
              wx.navigateBack({
                delta:2,
                complete: (res) => {},
              })
            },
            fail:(err)=>{
              console.log(err);
              //失败消息提示 
              Notify({
                message: '登录失败，请同意授权',
                duration: 2000,
                selector: '#custom-selector',
              });
            }
          })
        }
      })      
    },
    dialog_fn(){
      //点击 微信一键登录 弹窗 
      this.setData({show:true})
    },
    zblogin_fn(){
      //暂不登录
      wx.switchTab({
        url: '/pages/my/my'
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
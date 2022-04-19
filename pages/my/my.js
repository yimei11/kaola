// pages/my/my.js
import myrequest from "../../utils/myrequest";
Page({

    /**
     * 页面的初始数据
     */
    data: {
      fk:[
        {title:"待付款",src:"/images/my/fukuanfangshisel.png"},
        {title:"待发货",src:"/images/my/daishouhuo.png"},
        {title:"待收货",src:"/images/my/chaibaoguoqujian.png"},
        {title:"退货退款",src:"/images/my/tuikuan-mianxing.png"},
        {title:"全部订单",src:"/images/my/dingdan.png"}
      ],
      yh:[
        {title:"优惠券",src:"/images/my/youhuiquan.png"},
        {title:"红包",src:"/images/my/mn_hongbao.png"},
        {title:"考拉豆",src:"/images/my/dadou.png"}
      ],
      products:[],
      show:false,//弹窗显示
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    async _getproduct(){
      let {data} = await myrequest({
        url:"/tabs"
      })
      // console.log(data);
      this.setData({
        products:data.data.data1
      })
    },
    tologin_fn(){
      //未登录，跳转到一键登录
      wx.navigateTo({
        url:"/pages/login/login"
      })
    },
    help_fn(){
      //弹窗显示  点击 班助和客服
      this.setData({
        show:true
      })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
      this._getproduct()
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
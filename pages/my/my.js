// pages/my/my.js
let app = getApp()
import myrequest from "../../utils/myrequest";
Page({

    /**
     * 页面的初始数据
     */
    data: {
      userInfo:null,//用户信息
      fk:[
        {id:0,title:"待付款",src:"/images/my/fukuanfangshisel.png"},
        {id:1,title:"待发货",src:"/images/my/daishouhuo.png"},
        {id:2,title:"待收货",src:"/images/my/chaibaoguoqujian.png"},
        {id:3,title:"退货退款",src:"/images/my/tuikuan-mianxing.png"},
        {id:4,title:"全部订单",src:"/images/my/dingdan.png"}
      ],
      yh:[
        {title:"优惠券",src:"/images/my/youhuiquan.png"},
        {title:"红包",src:"/images/my/mn_hongbao.png"},
        {title:"考拉豆",src:"/images/my/dadou.png"}
      ],
      products:[],
      show:false,//弹窗显示
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
    //未登录 的 方法
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
    know_fn(){
      //点击 关闭弹窗
      this.setData({show:false})
    },
    shezhi_fn(){
      //点击设置 跳转 设置页面
      wx.navigateTo({
        url:"/pages/shezhi/shezhi"
      })
    },
    getuserInfo(){
      //获取用户信息
      let userInfo = wx.getStorageSync('kaola_userInfo')
      this.setData({userInfo})
    },
    // 已登录的 method
    logined_fn(){
      //跳转到  ‘开通会员’ 页面
      wx.navigateTo({
        url:"/pages/vip/vip"
      })
    },
    fklogined_fn(e){
      //付款、发货、收货 跳转 全部订单‘我的订单’
      //退货退款 跳转到 ‘退货退款’
      // console.log(e.currentTarget.id);
      let id= e.currentTarget.id
      if(id!=='3'){
        let wd = id=='0'?'待付款':id=='1'?'待发货':id=='2'?'待收货':'全部订单'
        wx.navigateTo({
          url:"/pages/myorder/myorder?wd="+wd
        })
      }else{
        wx.navigateTo({
          url:"/pages/tuikuan/tuikuan"
        })
      }
    },
    yhlogined_fn(e){
      // 优惠券、红包  跳转 礼券红包
      //考拉豆 跳转 养考拉
      console.log(e.currentTarget.dataset.item);
      if(e.currentTarget.dataset.item==2){
        //养考拉
        console.log('养考拉');
      }else{
        let wd = e.currentTarget.dataset.item==0?'优惠券':'红包'
        wx.navigateTo({
          url:"/pages/hongbao/hongbao?wd="+wd
        })
      }
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      this._getproduct()
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
      this.getuserInfo()
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
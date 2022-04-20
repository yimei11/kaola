// pages/handadress/handadress.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        user:"",
        phone:"",
        value:"",
        detailadress:""
    },
    getuser(event){
        this.setData({
            user:event.detail
        })
    },
    getphone(event){
        this.setData({
            phone:event.detail
        })
    },
    select_fn(e){
        this.setData({
            value:e.detail.value[0]+e.detail.value[1]+e.detail.value[2]
        })
    },
    getdetailadress(event){
        this.setData({
            detailadress:event.detail
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    save(){
        let {user,phone,value,detailadress} = this.data
        if(user.length==0||phone.length==0||value.length==0||detailadress.length==0){
            return wx.showToast({
               title: '信息不全',
               icon:"error"
             })
         }
        wx.navigateTo({
          url: '/pages/order/order?adress='+JSON.stringify({user,phone,value,detailadress})
        })
    },
    
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
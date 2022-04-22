// pages/cart/cart.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        all: false,
        arr: [],
        allp:0
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onChange(event) {
        let that = this
        let id = event.currentTarget.dataset.item;
        let truel = 0
        this.data.arr.forEach(function (item, index) {
            if (item.id == id) {
                item.checked = !item.checked
            }
            if (item.checked) {
                truel++
            }
        })
        if (truel == this.data.arr.length) {
            that.setData({
                all:true
            })
        }else{
            that.setData({
                all: false
            })
        }

        this.setData({ 
            arr: this.data.arr
        })
        this.allprice()
        wx.setStorageSync('datas', this.data.arr)
    },

    oncount(e){
        let id = e.currentTarget.dataset.item;
        this.data.arr.forEach(function (item, index) {
            if (item.id == id) {
                item.count = e.detail
            }
        })
        this.allprice()
        wx.setStorageSync('datas', this.data.arr)
    },
    onall() {
        let that = this
        this.setData({
            all: !this.data.all
        })
        if(that.data.all){
            this.setData({
                arr:this.data.arr.map(item=>{item.checked = true;return item})
            })
        }else{
            this.setData({
                arr:this.data.arr.map(item=>{item.checked = false;return item})
            })
        }
        wx.setStorageSync('datas', this.data.arr)
        this.allprice()
    },
    delete(e){
        let id = e.currentTarget.dataset.item;
        let newarr = this.data.arr.filter(item => item.id != id)
        this.setData({
            arr:newarr
        })
        wx.setStorageSync('datas', this.data.arr)
        this.allprice()
    },

    onClickButton() {
        let data = this.data.arr;
        let newarr = data.filter(item => item.checked != false)
        wx.navigateTo({
            url: '/pages/order/order?order=' + JSON.stringify(newarr),
            success(res){
                res.eventChannel.emit('orders', {
                    data:newarr
                })
            }
        });
    },

    getdata() {
        let arr = wx.getStorageSync('datas')
        // console.log(arr)
        this.setData({
            arr
        })
    },

    allprice() {
        let newarr = this.data.arr.filter(item => item.checked != false)
        let all = newarr.reduce(function (sum, item) {
            return sum + item.count * item.price * 100
        }, 0)
        this.setData({
            allp: all
        })
    },
    goshop(){
        wx.switchTab({
            url: '../home/home',
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

      //判断 是否登录
      //未登录
      let userInfo = wx.getStorageSync('kaola_userInfo')
      if(!userInfo){
        wx.navigateTo({
          url: '/pages/login/login',
        })
      }else{
        this.getdata()
        this.allprice()
      }
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
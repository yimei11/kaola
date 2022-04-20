// pages/home/home.js
import myrequest from '../../utils/myrequest'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        classify: null,
        move: null,
        tabs: null,
        childrens: null
    },
    // methods
    foucusfn() {
        // 搜索框获得焦点时
        wx.navigateTo({
            url: '/pages/search/search',
        })
    },
    async getClassify() {
        // 获取分类数据
        let {
            data
        } = await myrequest({
            url: "/classify"
        })
        this.setData({
            classify: data.data
        })
    },
    async getMove() {
        // 获取活动数据
        let {
            data
        } = await myrequest({
            url: "/move"
        })
        // console.log(data.data);
        this.setData({
            move: data.data
        })
    },
    async getTabs() {
        // 获取活动数据
        let {
            data
        } = await myrequest({
            url: "/tabs"
        })
        // console.log(data.data);
        this.setData({
            tabs: data.data,
            childrens: data.data.猜你喜欢
        })
    },
    onChange(e) {
        let index = e.detail.title;
        let arr = this.data.tabs[index]
        this.setData({
            childrens:arr,
        })
    },
    navigateTofn(item){
        // console.log(item.currentTarget.dataset.item);
        let data = item.currentTarget.dataset.item
        // 跳转详情页
        wx.navigateTo({
          url: '/pages/detail/detail',
          success(res){
            res.eventChannel.emit('datas', { data: data })
          }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getClassify()
        this.getMove()
        this.getTabs()
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
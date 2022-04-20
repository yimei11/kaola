// pages/detail/detail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        commoditys: null,
        value: null,
        show: false,
        count: 1,
        id: null
    },
    // methods
    select_fn(e) {
        // console.log(e.detail.value);
        this.setData({
            value: e.detail.value
        })
    },
    onshow(e) {
        let id = e.currentTarget.dataset.id;
        // 弹出层
        this.setData({
            show: true,
            id,
        })
    },
    onAddcart(e) {
        let id = e.currentTarget.dataset.id;
        this.setData({
            show: true,
            id,
        })
    },
    onClose() {
        this.setData({
            show: false
        });
    },
    onChange(e) {
        // 步进器事件
        // console.log(e.detail);
        this.setData({
            count: e.detail
        })
    },
    onConfirm(e) {
        let index = this.data.id;
        let data = e.currentTarget.dataset.item
        data.count = this.data.count;
        data.checked = false;
        if (index == "addcart") {
            // 加入购物车
            let arrs = wx.getStorageSync("datas") || [];
            if (arrs.length > 0) {
                let index = arrs.find((i, n) => {
                    return i.id == data.id
                })
                if (index) {
                    index.count += data.count
                } else {
                    arrs.push(data)
                }
            } else {
                arrs.push(data);
            }
            wx.setStorageSync('datas',arrs);
            wx.showToast({
                title:"添加成功",
                icon:"success"
            })
        } else if (index == "buy") {
            // 跳转到订单页
            // wx.navigateTo({
            //     url: 'url',
            //     success(res) {
            //         res.eventChannel.emit('datas', {
            //             data: data
            //         })
            //     }
            // });
        }
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let that = this
        const eventChannel = this.getOpenerEventChannel()
        // 监听datas事件，获取上一页面通过eventChannel传送到当前页面的数据
        eventChannel.on('datas', function (data) {
            // console.log(data.data)
            that.setData({
                commoditys: data.data
            })
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
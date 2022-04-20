// pages/autoadress/autoadress.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        provinces:{
            provinceName:"",
            cityName:"",
            countyName:"",
            detailInfo:"",
            telNumber:"",
            userName:""
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */

    chooseAddress(){
        let that = this
        wx.chooseAddress({
            success(res){
                console.log(res)
                // res = {
                //     cityName: "广州市"
                //     countyName: "海珠区"
                //     detailInfo: "新港中路397号"
                //     errMsg: "chooseAddress:ok"
                //     nationalCode: "510000"
                //     postalCode: "510000"
                //     provinceName: "广东省"
                //     telNumber: "020-81167888"
                //     userName: "张三"
                // }
                let {provinceName,cityName,countyName,detailInfo,telNumber,userName} = res
                that.setData({
                    provinces:{
                        provinceName,
                        cityName,
                        countyName,
                        detailInfo,
                        telNumber,
                        userName
                    }
                })
            }
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
// pages/myorder/myorder.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      all:[],//全部
      fukuan:[],//待付款
      fahuo:[],//待发货
      shouhuo:[],//待收货
      name:"全部订单",
      allchecked:false,//全选
      price:0,//总价
    },
    onClick(e){
      //点击tabs 
      console.log(e.detail);
    },
    //获取 存储在本地 的 数据
    getdata(){
      let all = wx.getStorageSync('datas')
      console.log(all);
      let fukuan = all.filter(item=>item.checked)
      // 待发货 \ 待收货
      let fahuo = wx.getStorageSync('fahuo')
      //let shouhuo
      this.setData({
        all,fukuan,fahuo
      })
    },
    onChange(e){
      //商品选择框
      // console.log(e.currentTarget.dataset.item);
      let id = e.currentTarget.dataset.item;
      let all = this.data.all;
      // 点击 checked 取反
      let product = all.find(item => item.id == id)
      // console.log(product);
      product.checked = !product.checked;
      this.setData({all})
      //若 所有的 checked 都为 true 那么全选的 也为true
      if(all.every(item=>item.checked)){
        this.setData({allchecked:true})
      }else{
        this.setData({allchecked:false})
      }
      //在 存储到 本地
      wx.setStorageSync('datas', all)
      this.getdata()
      this._price_fn()
    },
    onAllChange(){
      let all = this.data.all;
      //全选  点击取反
      let allchecked = !this.data.allchecked;
      this.setData({allchecked})
      all.forEach(item => item.checked = allchecked)
      this.setData({all})
      wx.setStorageSync('datas',all)
      this.getdata()
      this._price_fn()
    },
    _allchecked_fn(){
      //判断  所有商品是否 全选
      let all = this.data.all;
      if(all.every(item=>item.checked)){
        this.setData({allchecked:true})
      }
    },
    _price_fn(){
      let all = this.data.all;
      let products = all.filter(item => item.checked);
      let price = products.reduce((pre,item)=> pre+item.price*item.count ,0)
      this.setData({price:price*100})
    },
    stepper_fn(e){
      //步进器
      console.log(e);
      let count = e.detail;
      let id = e.currentTarget.dataset.item;
      let all = this.data.all;
      let product = all.find(item => item.id==id);
      product.count = count;
      this.setData(all)
      this._price_fn()
      wx.setStorageSync('datas',all)
    },
    delete(e){
      //删除
      let id = e.currentTarget.dataset.item;
      let all = this.data.all;
      let productid = all.findIndex(item => item.id==id);
      all.splice(productid,1)
      this.setData({
        all
      })
      wx.setStorageSync('datas', all)
      this._price_fn()
    },
    onSubmit(){
      //提交订单
      wx.redirectTo({
        url: '/pages/myorder/myorder?wd=待付款',
      })
    },
    concel_fn(){
      //返回
      wx.redirectTo({
        url: '/pages/myorder/myorder?wd=全部订单',
      })
    },
    fukuan_fn(e){
      //付款
      // console.log(1);
      let fukuan = this.data.fukuan;
      let all = this.data.all;
      let {title,total} = JSON.parse(e.currentTarget.dataset.item)
      console.log(title,total);
      wx.hanRequestPayment({
        timeStamp:'11',
        nonceStr: '222',
        _package:'prepay_id=1111',
        signType:"MD5",
        paySign:`${title}##${total}##cmcc##ffsf##ffmf##edddd`,
        success:(res)=>{
          console.log(res);
        }
      })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      // console.log(options.item);
      // console.log(options.wd);
      if(options.item){
        //options.item 付款后 传过来的 商品id 数组
        let arr = JSON.parse(options.item)
        // console.log(fahuo);
        //获取 本地存储 并把 付款的商品 去掉 放到 fahuo 中
        let all = wx.getStorageSync('datas')
        let fahuo = [];
        arr.forEach(item=>{
          let index = all.findIndex(el=>el.id==item)
          let product = all.splice(index,1)[0]
          fahuo.push(product)
        })
        console.log(all);
        wx.setStorageSync('datas',all)
        wx.setStorageSync('fahuo',fahuo)
        this.setData({
          name:options.wd,
          all,
          fahuo
        })
      }else{
        this.setData({
          name:options.wd
        })
      }
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
      this.getdata()
      //是否全选
      this._allchecked_fn()
      this._price_fn()
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
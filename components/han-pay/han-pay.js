// components/han-pay/han-pay.js
var _this = {
  self:{
    show(){}
  }
}
wx.hanRequestPayment = function(){
  //arguments  实参构成的伪数组
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref$timeStamp = _ref.timeStamp,
  timeStamp = _ref$timeStamp === undefined ? '' : _ref$timeStamp,
  _ref$nonceStr = _ref.nonceStr,
  nonceStr = _ref$nonceStr === undefined ? '' : _ref$nonceStr,
  _ref$_package = _ref._package,
  _package = _ref$_package === undefined ? '' : _ref$_package,
  _ref$signType = _ref.signType,
  signType = _ref$signType === undefined ? '' : _ref$signType,
  _ref$paySign = _ref.paySign,
  paySign = _ref$paySign === undefined ? '' : _ref$paySign,
  _ref$success = _ref.success,
  success = _ref$success === undefined ? function () {} : _ref$success,
  _ref$fail = _ref.fail,
  fail = _ref$fail === undefined ? function () {} : _ref$fail;
  /**
   * 
   */
  _this.timeStamp = timeStamp;
  _this.nonceStr = nonceStr;
  _this._package = _package;//prepay_id=wx323232
  _this.signType = signType;
  _this.paySign = paySign;
  _this.success = success;
  _this.fail = fail;
  if (_package.split('=').length !== 2 || paySign.split('##').length !== 6) {
    _this.fail({
      errMsg: '参数错误'
    });
    return;
  }
  _this.self.show();//把组件的show 改为true
}
Component({
    /**
     * 组件的属性列表
     */
    properties: {
      fukuan:{
        type:Array,
        value:null
      }
    },

    /**
     * 组件的初始数据
     */
    data: {
      title: '',//商品名称
      total: '0.00',//商品总价
      show:false,//组件显示隐藏
      open: false,//数字键盘
      success: false,
      pw: [],
      tempRes: null
    },
    lifetimes:{
      created () {
        _this.self = this;
      }
    },
    /**
     * 组件的方法列表
     */
    methods: {
      show () {//
        //获取title total
        let arr = _this.paySign.split('##')
        this.setData({
          show: true,
          title:arr[0],
          total:arr[1]
        })
        setTimeout(() => {
          this.setData({
            open: true
          })
        }, 300);
      },
      keyboard(_ref2){
        //
        var num = _ref2.target.dataset.num;

        if (num === undefined) return;
        if (num === '-1' && this.data.pw.length) {
          this.data.pw.pop();
        }
        if (num !== undefined && num !== '-1' && this.data.pw.length < 6) {
          this.data.pw.push(num);
        }
        this.setData({
          pw: this.data.pw
        });
        this.check();
      },
      check(){
        //比对密码
        if (this.data.pw.length === 6){
          wx.showLoading({
            title: '正在支付',
            mask: true
          })
          wx.request({
            url:"http://127.0.0.1:5000/pay",
            mothod:"POST",
            header:{
              token:"token"
            },
            data:{
              order_number:"wxooo"
            },
            success:(res)=>{
              console.log(res);
              setTimeout(() => {
                wx.hideLoading();
                this.setData({
                  success:true
                })
              }, 2000);
            },
            fail:()=>{
              wx.hideLoading()
              wx.showToast({
                title: '支付失败',
                icon: 'error',
                duration: 1000,
                complete:()=>{
                  this.setData({show:false})
                }
              })
            }
          })
        }
        //在此之前都是预支付
        //真正的支付
        // wx.request({
        //   url:"",
        //   header:{
        //     token:""
        //   },
        //   data:{
        //     order_number
        //   },
        //   success(){}
        // })
        
      },
      success(){
        let fukuan = JSON.stringify(this.properties.fukuan.map(item => {return item.id}))
        wx.redirectTo({
          url:"/pages/myorder/myorder?wd=待发货&item="+fukuan
        })
      },
      close(){
        this.setData({
          show:false
        })
      }
    }
})

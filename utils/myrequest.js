let myrequest = (options) => {
  let url = "http://127.0.0.1:5000"+options.url;
  return new Promise((reslove,reject)=>{
    wx.request({
      ...options,
      url,
      method:options.method||"GET",
      success:res=>reslove(res),
      fail:err=>reject(err)
    })
  })
}
export default myrequest
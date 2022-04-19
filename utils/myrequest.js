let myrequest = (options)=>{
    let url = "http://127.0.0.1:5000"+options.url
    let method = options.method?options.method:"GET"
    return new Promise((resolve,reject)=>{
        wx.request({
          ...options,
          method,
          url,
          success(res){
            resolve(res)
          },
          fail(err){
              reject(err)
          }
        })
    })
}
export default myrequest
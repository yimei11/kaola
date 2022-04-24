let debounce = (func,wait) => {
  let timeout;
  return function () {
    let context = this;
    let args = arguments;
    let later = () => {
      timeout = null;
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }
}
export default debounce
/**
 * 使用
 * var utils=require('../../../utils/util');
  Page({
  btnNext:utils.throttle(function(e) {
      this.nextpage()
    },500),
    btnPrev:utils.throttle(function(e) {
      this.prevpage()
    },500),
  })
 */
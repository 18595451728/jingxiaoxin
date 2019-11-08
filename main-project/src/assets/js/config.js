function checkTel (tel) {
  var reg = /^1[3456789]\d{9}$/, res = ''
  if (tel && tel != '') {
    if (reg.test(tel)) {
      res = !0
    } else {
      this.$layer.msg('手机号格式错误')
    }
  } else {
    this.$layer.msg('手机号不能为空')
    res = !1
  }
  return res
}

export default {
  checkTel
}

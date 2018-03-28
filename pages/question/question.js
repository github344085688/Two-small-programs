var WxParse = require('../../wxParse/wxParse.js');
var common = require('../template/template.js');
Page({
  data: {
    iconShowFK:""
  },
  onLoad: function () {
    var that = this;
    common.commonAjax(that);
    common.clickCount();
  }
})


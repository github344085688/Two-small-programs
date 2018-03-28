var WxParse = require('../../wxParse/wxParse.js');
var common = require('../template/template.js');
Page({
  data: {
    iconShowSY: ""
  },
  onLoad: function () {
    var that = this;
    common.commonAjax(that);
    common.clickCount();
    
  }
  
})


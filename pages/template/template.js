var WxParse = require('../../wxParse/wxParse.js')
function commonAjax(that) {
  var index = ``;
  var question = ``;
  var contact = ``;
  wx.showShareMenu({
    withShareTicket: true
  })
  wx.request({
    url: 'https://cmc.xmlcy.com/miniProgramsApi/getInfo?id=1', //访问服务器的API返回数据
    method: 'POST',
    header: {
      'Content-Type': 'application/json'
    },
    success: function (res) {
      index = res.data.data.page_one.content;
      question = res.data.data.page_two.content;
      contact = res.data.data.page_three.content;
      WxParse.wxParse('index', 'html', index, that, 5);
      WxParse.wxParse('question', 'html', question, that, 5);
      WxParse.wxParse('contact', 'html', contact, that, 5);
      that.setData({
        iconShowSY: res.data.data.page_one.is_show,
        iconShowFK: res.data.data.page_two.is_show,
        iconShowLX: res.data.data.page_three.is_show
      })
      setTimeout(function(){
        wx.hideToast();
      },500)
      
    }
  });
  wx.showToast({
    title: '加载中',
    icon: 'loading',
    duration: 1000000
  })
}
// 点击统计
function clickCount() {
  wx.request({
    url: 'https://cmc.xmlcy.com/miniProgramsApi/clicks?id=1', //访问服务器的API返回数据
    method: 'POST',
    header: {
      'Content-Type': 'application/json'
    },
    success: function (res) { }
  })
}
module.exports = {
  commonAjax: commonAjax,
  clickCount: clickCount
}

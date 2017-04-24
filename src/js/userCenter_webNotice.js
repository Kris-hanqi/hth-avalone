var avalon = require('avalon');
var $ = require("jquery");
var mockjax = require("mockjax")($, window);

$.mockjax({
    url:'http://XXX/web-api/userCenter_webNotice',
    status:200,
    responseText:{
        notice:[
            {
                msgTitle:"股市动荡：央行“三箭齐发”有利于P2P行业",
                msgUrl:"#",
                msgDesc:"海投汇网站由北京冠城瑞富信息技术有限公司运营....",
                msgTime:"系统消息2015-10-22"
            },
            {
                msgTitle:"股市动荡：央行“三箭齐发”有利于P2P行业",
                msgUrl:"#",
                msgDesc:"海投汇网站由北京冠城瑞富信息技术有限公司运营....",
                msgTime:"系统消息2016-10-22"
            }
        ]
    }
});

var vmWebNotice =avalon.define({
    $id: "webNotice",
    notice:[]
});

$.ajax({
    url:'http://XXX/web-api/userCenter_webNotice',
    success:function(response){
        vmWebNotice.notice=response.notice;
    }
});

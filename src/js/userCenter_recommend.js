var avalon = require('avalon');
var $ = require("jquery");
var mockjax = require("mockjax")($, window);

$.mockjax({
    url:'http://XXX/web-api/userCenter_recommend',
    status:200,
    responseText:{
        referrerUrl: "#",
        referrerSum: "3",
        recommend:[
            {
                investTime:'2017-02-27 09:00:05',
                recommendName:'李丽丽',
                recommendNumber:'18800001111',
                investMoney:'1000元'
            },
            {
                investTime:'2017-02-27 09:00:05',
                recommendName:'李丽丽',
                recommendNumber:'18800001111',
                investMoney:'1000元'
            }
        ]
    }
});

var vmRecommend =avalon.define({
    $id: "recommend",
    referrerUrl: "",
    referrerSum: "",
    recommend:[]
});

$.ajax({
    url:'http://XXX/web-api/userCenter_recommend',
    success:function(response){
        vmRecommend.referrerUrl=response.referrerUrl;
        vmRecommend.referrerSum=response.referrerSum;
        vmRecommend.recommend=response.recommend;
    }
});


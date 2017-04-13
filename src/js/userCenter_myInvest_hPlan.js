var avalon = require('avalon');
var $ = require("jquery");
var mockjax = require("mockjax")($, window);

$.mockjax({
    url:'http://XXX/web-api/userCenter_myInvest_hPlan',
    status:200,
    responseText: {
        "hPlan":{
            "href":"#",
            "annualInterestRate": "7.00",
            "otherTxt":"《H计划投资与赎回协议》",
            "otherHref":"#",
            "yesterdayEarn":"0",
            "capital":"0",
            "totalProperty":"0",
            "earnings":"199.93",
            "canRedemptionMoney":"0"
        } ,
        "title": ["投资时间","投资金额","状态"],
        "data": [
            {
                "time": "2016-04-08 14:22:38",
                "investmentAccount": "2,000",
                "state":"完成"
            },
            {
                "time": "2016-04-08 14:22:38",
                "investmentAccount": "2,000",
                "state":"投标成功"
            }
        ]
    }
});

var vmHPlan=avalon.define({
    $id:"hPlanCtrl",
    hPlan:{},
    title:[],
    data:[]
});

$.ajax({
    url:'http://XXX/web-api/userCenter_myInvest_hPlan',
    success:function(response){
        vmHPlan.hPlan=response.hPlan;
        vmHPlan.title=response.title;
        vmHPlan.data=response.data;
    }
});






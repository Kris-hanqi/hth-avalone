var avalon = require('avalon');
var $ = require("jquery");
var mockjax = require("mockjax")($, window);

//其他导航---上
var vmOtherNavTop=avalon.define({
    $id:"OtherNavTopCtrl",
    type:["升薪宝","直投项目","新手标"]
});

//其他导航---下
var vmOtherNavDown=avalon.define({
    $id:"OtherNavDownCtrl",
    "projectStatus":["可投资","还款中","已完成"],
    "projectTimeLimit":["3个月以内","3~6个月","6~12个月","12个月以上"],
    "earnings":["10%以下","10%-15%","15%-20%","20%以上"],
    "projectSize":["10万以下","10~50万","50~100万","100~500万","500万以上"]
});

//全站数据
var vmTotalStationData=avalon.define({
    $id:"totalStationDataCtrl",
    "totalStationData":[
        {title : "融资项目","txt" : "1258" , monad:"个"},
        {title : "累计成交金额","txt" : "11亿0834万8100" , monad:"元"},
        {title : "平台用户","txt" : "6万0719" , monad:"人"},
        {title : "可投项目个数","txt" : "2" , monad:"个"}
    ]
});

//标列表
var vmProjectList=avalon.define({
    $id:"projectListCtrl",
    "data":[
        {
            "loanId": "标的id",
            "loanName":"升薪宝A1",
            "loanNum": "17032701",
            "imgUrl":"images/loans/12161490575108783.png",
            "ratePercent": "8.0",
            "repayTimePeriod":"3",
            "loanMoney": "100",
            "sumMoney": "1",
            "loanStatus": "立即投标",
            "targetUrl": "#"
        },
        {
            "loanId": "标的id",
            "loanName":"升薪宝A2",
            "loanNum": "17032702",
            "imgUrl":"images/loans/12161490575108783.png",
            "ratePercent": "8.0",
            "repayTimePeriod":"3",
            "loanMoney": "100",
            "sumMoney": "50",
            "loanStatus": "立即投标",
            "targetUrl": "#"
        }
    ],
    "pageNum":1,
    "pageCount":"10"
});








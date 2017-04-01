var avalon = require('avalon');
var $ = require("jquery");
var mockjax = require("mockjax")($, window);


//其他导航
var vmOtherNav=avalon.define({
    $id:"otherNavCtrl",
    "transferCapital": ["5000以下","5000~1万","1万~2万","2万以下"],
    "earnings":["10%以下","10%-15%","15%-20%","20%以上"],
    "allowance":["-1000以下","-1000~0","0~1000","1000以上"]
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

//列表标题
var vmTransferTitle=avalon.define({
    $id:"transferTitleCtrl",
    "transferTitle":["借款标题","预期收益","折让金","剩余时间","出售价格","债权价值","剩余本金","剩余利息","转让进度"]
});


//列表
var vmTransferList=avalon.define({
    $id:"transferListCtrl",
    "data":[
        {
            "loanId": "标的id",
            "loanName":"升薪宝A1",
            "loanNum": "111111",
            "hrefUrl":"#",
            "earnings":"7.2",
            "allowance": "110.47",
            "remainingTime":"1",
            "sellPrice": "80,000",
            "creditorValue": "80,489.21",
            "remainingCapital":"80,000",
            "remainingInterest": "489.21",
            "transferSchedule": "0",
            "loanStatus" : "购买",
            "targetUrl": "#"
        },
        {
            "loanId": "标的id",
            "loanName":"升薪宝A2",
            "loanNum": "111111",
            "hrefUrl":"#",
            "earnings":"7.2",
            "allowance": "110.47",
            "remainingTime":"1",
            "sellPrice": "80,000",
            "creditorValue": "80,489.21",
            "remainingCapital":"80,000",
            "remainingInterest": "489.21",
            "transferSchedule": "0",
            "loanStatus" : "购买",
            "targetUrl": "#"
        }
    ],
    "pageNum":1,
    "pageCount":"10"
});









var avalon = require('avalon');
var $ = require("jquery");
var mockjax = require("mockjax")($, window);

$.mockjax({
    url:'http://XXX/web-api/userCenter_myBorrow_recentPayments',
    status:200,
    responseText: {
        "userMessage": [
            {name: "待还总额", "money": "23423.23"},
            {name: "本月待还金额", "money": "23423.23"},
            {name: "本月待还笔数", "money": "23423.23"},
            {name: "逾期金额", "money": "23423.23"}
        ],
        "title": ["项目名称", "放款时间","应还期数/总期数", "本金", "利息", "罚息","本期待还总额", "还款日","状态", "管理平台", "操作"],
        "data": [
            {
                "loanId": "标的id",
                "loanName": "升薪宝A1",
                "loanNum": "17031303",
                "hrefUrl": "#",
                "time": "2017-03-14 11:41:50",
                "periods": "1/3",
                "capital": "7400.0",
                "interest": "10.0",
                "defaultInterest": "20.0",
                "paidMoney":"7000.0",
                "nextDay": "2017-04-15",
                "state":"还款中",
                "managementPlatform": "江西银行",
                "other":"无"
            },
            {
                "loanId": "标的id",
                "loanName": "升薪宝A2",
                "loanNum": "17031303",
                "hrefUrl": "#",
                "time": "2017-03-14 11:41:50",
                "periods": "1/3",
                "capital": "7400.0",
                "interest": "10.0",
                "defaultInterest": "20.0",
                "paidMoney":"7000.0",
                "nextDay": "2017-04-15",
                "state":"还款中",
                "managementPlatform": "江西银行",
                "other":"无"
            }
        ]
    }
});

var vmRecentPayments=avalon.define({
    $id:"recentPaymentsCtrl",
    userMessage:[],
    title:[],
    data:[]
});

$.ajax({
    url:'http://XXX/web-api/userCenter_myBorrow_recentPayments',
    success:function(response){
        vmRecentPayments.userMessage=response.userMessage;
        vmRecentPayments.title=response.title;
        vmRecentPayments.data=response.data;
    }
});






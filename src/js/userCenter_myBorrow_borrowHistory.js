var avalon = require('avalon');
var $ = require("jquery");
var mockjax = require("mockjax")($, window);

$.mockjax({
    url:'http://XXX/web-api/userCenter_myBorrow_borrowHistory',
    status:200,
    responseText: {
        "userMessage": [
            {name: "待还总额", "money": "23423.23"},
            {name: "本月待还金额", "money": "23423.23"},
            {name: "本月待还笔数", "money": "23423.23"},
            {name: "逾期金额", "money": "23423.23"}
        ],
        "title": ["项目名称", "放款时间", "借款金额", "实际借款金额", "年利率","待还总额", "已还期数/总期数", "下次还款日", "下次还款数","状态", "管理平台", "其他"],
        "data": [
            {
                "loanId": "标的id",
                "loanName": "升薪宝A1",
                "loanNum": "17031303",
                "hrefUrl": "#",
                "time": "2017-03-14 11:41:50",
                "needBorrowMoney": "7400.0",
                "realityBorrowMoney": "7000.0",
                "annualInterestRate": "8.00",
                "paidMoney":"7000.0",
                "periods": "1/3",
                "nextDay": "2017-04-15",
                "nextMoney": "100.0",
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
                "needBorrowMoney": "7400.0",
                "realityBorrowMoney": "7000.0",
                "annualInterestRate": "8.00",
                "paidMoney":"7000.0",
                "periods": "1/3",
                "nextDay": "2017-04-15",
                "nextMoney": "100.0",
                "state":"还款中",
                "managementPlatform": "江西银行",
                "other":"无"
            }
        ]
    }
});

var vmBorrowHistory=avalon.define({
    $id:"borrowHistoryCtrl",
    userMessage:[],
    title:[],
    data:[]
});

$.ajax({
    url:'http://XXX/web-api/userCenter_myBorrow_borrowHistory',
    success:function(response){
        vmBorrowHistory.userMessage=response.userMessage;
        vmBorrowHistory.title=response.title;
        vmBorrowHistory.data=response.data;
    }
});






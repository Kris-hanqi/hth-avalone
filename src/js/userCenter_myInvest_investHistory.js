var avalon = require('avalon');
var $ = require("jquery");
var mockjax = require("mockjax")($, window);

$.mockjax({
    url:'http://XXX/web-api/userCenter_myAccount_investHistory',
    status:200,
    responseText: {
        "userMessage": [
            {name: "总资产", "money": "23423.23"},
            {name: "待收本金", "money": "23423.23"},
            {name: "待收利息", "money": "23423.23"},
            {name: "冻结金额", "money": "23423.23"}
        ],
        "title": ["项目名称", "投资时间", "投资金额", "待收本息", "年利率", "已还期数/总期数", "下次还款日", "下次还款数", "管理平台", "查看"],
        "data": [
            {
                "loanId": "标的id",
                "loanName": "升薪宝A1",
                "loanNum": "17031303",
                "hrefUrl": "#",
                "time": "2017-03-14 11:41:50",
                "investmentAccount": "7400.0",
                "dueInPrincipalInterest": "100.0",
                "annualInterestRate": "8.00",
                "periods": "1/3",
                "nextDay": "2017-04-15",
                "nextMoney": "100.0",
                "managementPlatform": "江西银行",
                "targetUrl1": "#",
                "targetUrl2": "#",
                "other":"= 实际支付7370.0元  + 现金券30.0元"
            },
            {
                "loanId": "标的id",
                "loanName": "升薪宝A2",
                "loanNum": "17031303",
                "hrefUrl": "#",
                "time": "2017-03-14 11:41:50",
                "investmentAccount": "7400.0",
                "dueInPrincipalInterest": "100.0",
                "annualInterestRate": "8.00",
                "periods": "1/3",
                "nextDay": "2017-04-15",
                "nextMoney": "100.0",
                "managementPlatform": "江西银行",
                "targetUrl1": "#",
                "targetUrl2": "#",
                "other":"= 实际支付7370.0元  + 现金券30.0元"
            }
        ]
    }
});

var vmInvestHistory=avalon.define({
    $id:"investHistoryCtrl",
    userMessage:[],
    title:[],
    data:[]
});

$.ajax({
    url:'http://XXX/web-api/userCenter_myAccount_investHistory',
    success:function(response){
        vmInvestHistory.userMessage=response.userMessage;
        vmInvestHistory.title=response.title;
        vmInvestHistory.data=response.data;
    }
});






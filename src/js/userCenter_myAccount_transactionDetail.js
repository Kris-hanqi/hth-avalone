var avalon = require('avalon');
var $ = require("jquery");
var mockjax = require("mockjax")($, window);


//交易明细
var vmSlideBox=avalon.define({
    $id:"slideBoxCtrl",
    "tradingRecord":[]
});

$.mockjax({
    url:'http://XXX/web-api/userCenter_myAccount_accountSummary',
    status:200,
    responseText:{
        "tradingRecord":[
            {time:"2017-03-29 14:38:26",type:"充值成功",changeAmount:"+100",availableBalance:"585.18",managementPlatform:"江西银行",remark:"充值成功"},
            {time:"2017-03-29 14:38:26",type:"充值成功",changeAmount:"+100",availableBalance:"585.18",managementPlatform:"江西银行",remark:"充值成功"},
            {time:"2017-03-29 14:38:26",type:"充值成功",changeAmount:"+100",availableBalance:"585.18",managementPlatform:"江西银行",remark:"充值成功"},
            {time:"0017-02-15 18:15:03",type:"借款放款",changeAmount:"29,700",availableBalance:"300.96",managementPlatform:"江西银行",remark:"投资成功，取出投资金额, 借款ID：20170214001159"},
            {time:"0017-02-15 18:15:03",type:"借款放款",changeAmount:"29,700",availableBalance:"300.96",managementPlatform:"江西银行",remark:"投资成功，取出投资金额, 借款ID：20170214001159"},
            {time:"0017-02-15 18:15:03",type:"借款放款",changeAmount:"29,700",availableBalance:"300.96",managementPlatform:"江西银行",remark:"投资成功，取出投资金额, 借款ID：20170214001159"}
        ]
    }
});


$.ajax({
    url:'http://XXX/web-api/userCenter_myAccount_accountSummary',
    success:function(response){
        vmSlideBox.tradingRecord = response.tradingRecord;
    }
});









var avalon = require('avalon');
var $ = require("jquery");
var mockjax = require("mockjax")($, window);

$.mockjax({
    url:'http://XXX/web-api/userCenter_myChild_settings',
    status:200,
    responseText:{
        transfer:[
            {
                loanUrl:'#',
                loanName:'债权转让测试项目06（企业三方协议）--2017040606',
                ratePercent:'10.00%',
                period:'3',
                investTime:'2017-04-07 16:27:07',
                investMoney:'￥100.0',
                remainingTime:'3(月)',
                creditorValue:'￥100.17',
                unpaidMoney:'￥101.67',
                others:'债权转让合同',
                contractUrl:'#'
            },
            {
                loanUrl:'#',
                loanName:'债权转让测试项目04（个人回购四方）--2017040604',
                ratePercent:'10.00%',
                period:'3',
                investTime:'2017-04-07 16:27:07',
                investMoney:'￥100.0',
                remainingTime:'3(月)',
                creditorValue:'￥100.17',
                unpaidMoney:'￥101.67',
                others:'债权转让合同',
                contractUrl:'#'
            }
        ]
    }
});

var vmTransfer =avalon.define({
    $id: "transfer",
    transfer:[]
});

$.ajax({
    url:'http://XXX/web-api/userCenter_myChild_settings',
    success:function(response){
        vmTransfer.transfer=response.transfer;

    }
});
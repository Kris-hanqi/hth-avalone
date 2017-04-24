var avalon = require('avalon');
var $ = require("jquery");
var mockjax = require("mockjax")($, window);

//userCenter_myChild_cashFlow
var vmChildCashFlow =avalon.define({
    $id: "childCashFlow",
    cashFlowAll:[
        {
            cashFlowDate:'2016-12-03 01:17:49',
            cashFlowType:'正常还款',
            cashFlowChange:'+339.73元',
            cashFlowUsable:'￥3,351.41',
            cashFlowPlatform:'易宝平台',
            cashFlowMark:'借款ID:20160927000812 正常还款'
        },
        {
            cashFlowDate:'2016-12-03 01:17:49',
            cashFlowType:'正常还款',
            cashFlowChange:'+339.73元',
            cashFlowUsable:'￥3,351.41',
            cashFlowPlatform:'易宝平台',
            cashFlowMark:'借款ID:20160927000812 正常还款'
        },
        {
            cashFlowDate:'2016-12-03 01:17:49',
            cashFlowType:'正常还款',
            cashFlowChange:'+339.73元',
            cashFlowUsable:'￥3,351.41',
            cashFlowPlatform:'易宝平台',
            cashFlowMark:'投资:66a3b8dc46444f41b19b34eaec9c27a2收到还款, 还款ID:201609280008140001  借款ID:20160928000814  本金：0.0  利息：418.85'
        },
        {
            cashFlowDate:'2016-12-03 01:17:49',
            cashFlowType:'借款放款',
            cashFlowChange:'10,000元',
            cashFlowUsable:'￥0.40',
            cashFlowPlatform:'易宝平台',
            cashFlowMark:'投资成功，取出投资金额, 借款ID：20161026000864'
        }
    ]
});


var avalon = require('avalon');
var $ = require("jquery");
var mockjax = require("mockjax")($, window);

$.mockjax({
    url:'http://XXX/web-api/userCenter_myChild_withdraw',
    status:200,
    responseText:{
        "message": {
            name:"叫兽儿",accountNumber:"11111111111111111",bank:"兴业银行",accountBalance:"666",selectAccount:"lalala15011455508"
        }
    }
});

var vmWithdraw=avalon.define({
    $id:"withdrawCtrl",
    message:[]
});

$.ajax({
    url:'http://XXX/web-api/userCenter_myChild_withdraw',
    success:function(response){
        vmWithdraw.message=response.message;

        var bankNum=$('.bankNum').html();
        $('.bankNum').html(bankNum.substr(0,3)+' **** **** '+bankNum.substr(bankNum.length-3));

        $(function() {
            var accountMoney = "";
            if(navigator.userAgent.indexOf('MSIE') >= 0)        // IE浏览器
            {
                $(".tx_txt").get(0).onpropertychange = setJsUserName;
                $(".accountMoney").get(0).onpropertychange = handle;
            } else {
                var intervalName;
                $(".tx_txt").get(0).addEventListener("input",setJsUserName,false);
                // 获得焦点时，启动定时器
                $(".tx_txt").focus(function(){
                    intervalName = setInterval(handle,1000);
                });

                // 失去焦点时，清除定时器
                $(".tx_txt").blur(function() {
                    clearInterval(intervalName);
                });
            }
            // 设置accountMoney input的值
            function setJsUserName() {
                $(".accountMoney").html($(this).val()-2);
            }
            // accountMoney input的值改变时执行的函数
            function handle() {
                if($(".accountMoney").val() != accountMoney) {
                    accountMoney = $(".accountMoney").html();
                }
            }
        });
    }
});





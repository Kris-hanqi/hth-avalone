var avalon = require('avalon');
var $ = require("jquery");
var mockjax = require("mockjax")($, window);

$.mockjax({
    url:'http://XXX/web-api/userCenter_myAccount_withdraw',
    status:200,
    responseText:{
        "message": {
            name:"���޶�",accountNumber:"1111111111111111111",bank:"�������л������ҵ����",accountOpen:"����ʡ�ϲ���",accountBank:"�������йɷ����޹�˾����Ӫҵ��",accountBalance:"666"
        }
    }
});

var vmWithdraw=avalon.define({
    $id:"withdrawCtrl",
    message:[]
});

$.ajax({
    url:'http://XXX/web-api/userCenter_myAccount_withdraw',
    success:function(response){
        vmWithdraw.message=response.message;

        var bankNum=$('.bankNum').html();
        $('.bankNum').html(bankNum.substr(0,3)+' **** **** '+bankNum.substr(bankNum.length-3));

        $(function() {
            var accountMoney = "";
            if(navigator.userAgent.indexOf('MSIE') >= 0)        // IE�����
            {
                $(".tx_txt").get(0).onpropertychange = setJsUserName;
                $(".accountMoney").get(0).onpropertychange = handle;
            } else {
                var intervalName;        // ��ʱ�����
                $(".tx_txt").get(0).addEventListener("input",setJsUserName,false);
                // ��ý���ʱ��������ʱ��
                $(".tx_txt").focus(function(){
                    intervalName = setInterval(handle,1000);
                });

                // ʧȥ����ʱ�������ʱ��
                $(".tx_txt").blur(function() {
                    clearInterval(intervalName);
                });
            }
            // ����accountMoney input��ֵ
            function setJsUserName() {
                $(".accountMoney").html($(this).val());
            }
            // accountMoney input��ֵ�ı�ʱִ�еĺ���
            function handle() {
                if($(".accountMoney").val() != accountMoney) {
                    accountMoney = $(".accountMoney").html();
                }
            }
        });
    }
});





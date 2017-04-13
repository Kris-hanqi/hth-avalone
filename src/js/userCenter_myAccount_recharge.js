var avalon = require('avalon');
var $ = require("jquery");
var mockjax = require("mockjax")($, window);

$.mockjax({
    url:'http://XXX/web-api/userCenter_myAccount_recharge',
    status:200,
    responseText:{
        "message": {
            name:"叫兽儿",accountNumber:"1111111111111111111",bank:"江西银行或城市商业银行",accountOpen:"江西省南昌市",accountBank:"江西银行股份有限公司总行营业部",accountBalance:"666"
        }
    }
});

var vmRecherge=avalon.define({
    $id:"rechargeCtrl",
    message:[]
});

$.ajax({
    url:'http://XXX/web-api/userCenter_myAccount_recharge',
    success:function(response){
        vmRecherge.message=response.message;

        /*选项卡*/
        $("div.recharge_affix>ul").on("click","[data-toggle='item']",function(e){
            e.preventDefault();
            var $target=$(e.target);
            if(!$target.parent().hasClass("active")){
                $target.parent().siblings(".active").removeClass("active")
                $target.parent().addClass("active");
                var selector=$target.attr("href");
                $(selector).addClass("active").siblings(".active").removeClass("active");
            }
        });

        /*快捷充值支付金额*/
        $(function() {
            var payMoney = "";
            if(navigator.userAgent.indexOf('MSIE') >= 0)        // IE浏览器
            {
                $(".cz_txt").get(0).onpropertychange = setJsUserName;
                $(".payMoney").get(0).onpropertychange = handle;
            } else {
                var intervalName;        // 定时器句柄
                $(".cz_txt").get(0).addEventListener("input",setJsUserName,false);
                // 获得焦点时，启动定时器
                $(".cz_txt").focus(function(){
                    intervalName = setInterval(handle,1000);
                });

                // 失去焦点时，清除定时器
                $(".cz_txt").blur(function() {
                    clearInterval(intervalName);
                });
            }
            // 设置payMoney input的值
            function setJsUserName() {
                $(".payMoney").html($(this).val());
            }
            // payMoney input的值改变时执行的函数
            function handle() {
                if($(".payMoney").val() != payMoney) {
                    payMoney = $(".payMoney").html();
                }
            }
        });



        /*模态弹出框*/
        $(".viewBtn").on("click",function(e){
            e.preventDefault();
            $(".modal").css("display","block");
        });
        $(".modal-close").on("click",function(){
            $(".modal").css("display","none");
        });
    }
});




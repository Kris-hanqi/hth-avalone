var avalon = require('avalon');
var $ = require("jquery");
var mockjax = require("mockjax")($, window);

$.mockjax({
    url:'http://XXX/web-api/userCenter_myAccount_settings',
    status:200,
    responseText:{
        "data": {
            name:"叫兽儿",
            openNumber:"1111111111111111111",
            bindBank:"兴业银行",
            bindNumber:"2222222222222222222",
            dealPassword:"0",
            autoRefundAccredit:"1",
            phoneApprove:"13666666666",
            password:"0",
            time:"登录时间",
            email:"13666666666"
        }
    }
});

var vmSettings=avalon.define({
    $id:"settingsCtrl",
    data:[]
});

$.ajax({
    url:'http://XXX/web-api/userCenter_myAccount_settings',
    success:function(response){
        vmSettings.data=response.data;

        //存管开户的名字银行卡加*显示
        $(function(){
            var str=$('#uNameNumber').html();
            if(str.indexOf('|')!=-1){
                var name=str.substr(0,1)+'**';
                var number=str.substr(str.indexOf('|')+3,4)+' **** **** '+str.substr(str.length-4);
            }
            var nameNumber=name+' | '+number;
            $('#uNameNumber').html(nameNumber);
        });

        //银行绑定的尾号加*显示
        $(function(){
            var str=$('#bindNumber').html();
            if(str.lastIndexOf('）')!=-1){
                var number=str.substr(str.lastIndexOf('）')-4);
            }
            var bindNumber=vmSettings.data.bindBank+'（尾号'+number;
            $('#bindNumber').html(bindNumber);
        });

        //交易密码
        $(function(){
            var str=$('#dealPassword').html();
            if(str==0){
                $('#dealPassword').html("已设置");
            }else if(str==1) {
                $('#dealPassword').html("未设置");
            }
        });

        //自动还款授权
        $(function(){
            var str=$('#autoRefundAccredit').html();
            if(str==0){
                $('#autoRefundAccredit').html("已授权");
            }else if(str==1){
                $('#autoRefundAccredit').html("未授权")
            }
        });

        //手机认证
        $(function(){
            var str=$('#phoneApprove').html();
            var phoneApprove=str.substr(0,3)+'******'+str.substr(8);
            $('#phoneApprove').html(phoneApprove);
        });

        //登录密码
        $(function(){
            var str=$('#password').html();
            if(str==0){
                $('#password').html("已设置");
            }else if(str==1){
                $('#password').html("未设置");
            }
        });

        //邮箱认证
        $(function(){
            var str=$('#email').html();
            var email=str.substr(0,5)+'***';
            $('#email').html(email);
        });
    }
});





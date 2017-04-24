var avalon = require('avalon');
var $ = require("jquery");
var mockjax = require("mockjax")($, window);

$.mockjax({
    url:'http://XXX/web-api/userCenter_myChild_settings',
    status:200,
    responseText:{
        "data": {
            selectAccount:"lalal123",
            name:"叫兽儿",
            dealPassword:"0",
            bindBank:"兴业银行",
            bindNumber:"2222222222222222222",
            phoneApprove:"13666666666"
        }
    }
});

var vmSettings=avalon.define({
    $id:"settingsCtrl",
    data:[]
});

$.ajax({
    url:'http://XXX/web-api/userCenter_myChild_settings',
    success:function(response){
        vmSettings.data=response.data;

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

        //手机认证
        $(function(){
            var str=$('#phoneApprove').html();
            var phoneApprove=str.substr(0,3)+'******'+str.substr(8);
            $('#phoneApprove').html(phoneApprove);
        });
    }
});




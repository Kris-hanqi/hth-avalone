var avalon = require('avalon');
var $ = require("jquery");
var mockjax = require("mockjax")($, window);

$.mockjax({
    url:'http://XXX/web-api/userCenter_openAccount',
    status:200,
    responseText:{
        data:{
            "userName":"普通123456",
            "mobileNumber":"13666666666"
        }
    }
});

var vmOpenAccount =avalon.define({
    $id: "openAccountCtrl",
    data:{}
});

$.ajax({
    url:'http://XXX/web-api/userCenter_openAccount',
    success:function(response){
        vmOpenAccount.data=response.data;
    }
});


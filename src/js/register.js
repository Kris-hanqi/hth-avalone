var avalon = require('avalon');
var $ = require("jquery");
var mockjax = require("mockjax")($, window);

//我已经阅读并同意
$(function(){
    var register = $(".register_btn");
    $("#checkbox").change(function(){
        var that = $(this);
        that.prop("checked",that.prop("checked"));
        if(that.prop("checked")){
            register.prop("disabled",false);
            register.css("background", "#2875d9");
        }else{
            register.prop("disabled",true);
            register.css("background", "#DDDDDD");
        }
    });
});
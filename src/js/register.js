var avalon = require('avalon');
var $ = require("jquery");
var backTop = require("backTop");
var mockjax = require("mockjax")($, window);

//���Ѿ��Ķ���ͬ��
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
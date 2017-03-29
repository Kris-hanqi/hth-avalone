var avalon = require('avalon');
var $ = require("jquery");
var backTop = require("backTop");
var mockjax = require("mockjax")($, window);

$(document).ready(function(){
    $("#investStep>li").click(function(){
        $(this).parent().find("li").removeClass("on");
        $(this).addClass("on");
        var index = $(this).parent().find("li").index(this);
        $(this).parent().parent().find("div[_auto=lc]").hide();
        $(this).parent().parent().find("div[_auto=lc]").slice(index,index+1).show();
    });
});

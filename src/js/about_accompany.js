var avalon = require('avalon');
var $ = require("jquery");
var mockjax = require("mockjax")($, window);

//一路相伴
var fase = true;
$("#tip").click(function(){
    $(this).parents().parents().find(".2015Box").slideToggle();
    if(fase){
        $(this).parents().parents().find("#tip").hide();
        fase = false;
    }else{
        $(this).parents().parents().find("#tip").show();
        fase = true;
    }
});
var avalon = require('avalon');
var $ = require("jquery");
var mockjax = require("mockjax")($, window);



(function(){
    /*模拟接口*/
    $.mockjax({
        url:"http://XXX/web-api/aboutUs",
        status: 200,
        responseText: {
            "aboutUsNav":[
                {aboutUrl:"about_htouhui.html",aboutTitle:'企业介绍'},
                {aboutUrl:"about_platform_advantage.html",aboutTitle:'平台优势'},
                {aboutUrl:"about_team.html",aboutTitle:'管理团队'},
                {aboutUrl:"about_accompany.html",aboutTitle:'一路相伴'},
                {aboutUrl:"about_partners.html",aboutTitle:'合作伙伴'},
                {aboutUrl:"about_contactus.html",aboutTitle:'联系我们'},
                {aboutUrl:"about_joinus.html",aboutTitle:'加入我们'}
            ]
        }
    });
    /* -- about --  */
    avalon.component('about', {
        template: (function () {
            var aboutNavBar ='<ul id="aboutNavBar">'+
                '<li ms-for="ell in @aboutBar">'+
                '<a ms-attr="{href: ell.aboutUrl}" >{{ell.aboutTitle}}</a>'+
                '</li>'+
                '</ul>';
            return aboutNavBar;
        }).call(this),
        defaults: {
            aboutBar:[]
        }
    });
//aboutNavBar
    var vmAboutUsNav=avalon.define({
        $id: "about",
        aboutBar:[]
    });
    $.ajax({
        url:"http://XXX/web-api/aboutUs",
        success:function(response){
            vmAboutUsNav.aboutBar = response.aboutUsNav;

            var str=window.location.href;
            if(str.lastIndexOf('/')!=-1){
                var navBar=str.substr(str.lastIndexOf('/')+1);
            }
            $(".about ul li a").each(function(){
                url = $(this).attr('href');
                 if(navBar == url){
                     $(this).siblings().removeClass();
                     $(this).addClass('about_hover');
                 }
            });

            $(".header .nav li a").each(function(){
                navArr = $(this).html();
                if(navArr == "关于我们"){
                    $(".header .nav li a").removeClass();
                    $(this).addClass('chooseNav');
                }
            });
        }

    });
})();




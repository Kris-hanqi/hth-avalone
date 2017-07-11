var avalon = require('avalon');
var $ = require("jquery");
var backTop = require("backTop");

//header
avalon.component('header', {
    template: (function(){
        var slideContent="<div class='header'>"+
            "<div class='header_box'>"+
            "<div class=\"header_left\"><span>客服热线：400-698-8810 （工作日 09:00 - 18:00）</span></div>"+
            "<div class=\"header_right1\">"+
            "<span id=\"header-ico00\" ms-mouseover=\"@outerMouseover\" ms-mouseout=\"@outerMouseout\"><img id=\"app_client\" src=\"images/header_phone.png\"/>手机客户端</span>"+
            "<div class=\"qrcode-outer header-arrow\">"+
            "<i></i>"+
            "<div class=\"qrcode\"><img src=\"images/smart_download.png\"/><span>手机客户端下载</span></div>"+
            "</div>"+
            "<span  id=\"header-ico01\" ms-mouseover=\"@weixinMouseover\" ms-mouseout=\"@weixinMouseout\"><img id=\"app_weixin\" src=\"images/header_weixin.png\"/>微信公众号</span>"+
            "<div class=\"qrcode-weixin header-arrow\">"+
            "<i></i>"+
            "<div class=\"qrcode\"><img src=\"images/weixin-upload.png\"/><span>微信公众号</span></div>"+
            "</div>"+
            "</div>"+
            "<div class=\"header_right2\">"+
            "<a href='login.html'>立即登录</a>"  +
            "<a href='register.html'>免费注册</a>"  +
            "<a href='activityCenter.html'>活动中心</a>"  +
            "<a href='newUserGuide.html'>新手指引</a>"  +
            "<a href='netLoanClass.html'>网贷课堂</a>"  +
            "</div>"    +
            "</div>"+
            "<div class=\"top\">"+
            "<div class=\"top_box\">"+
            "<div class=\"logo\">"+
            "<a href=\"index.html\"><img src=\"images/logo.png\"/></a>"+
            "</div>"+
            "<div class=\"two-code\"><img src=\"images/logo-jxbank.png\"/></div>"+
            "<ul class=\"nav\">"+
            "<li class=\"nLi\"><a href='index.html'>首页</a></li>"+
            "<li class=\"nLi\"><a href='loans.html'>我要投资</a></li>"+
            "<li class=\"nLi\"><a href='transfer.html'>债权转让</a></li>"+
            "<li class=\"nLi\"><a href='riskControl.html'>风控措施</a></li>"+
            "<li class=\"nLi\"><a href='informationDisclosure.html'>信息披露</a></li>"+
            "<li class=\"nLi\"><a href='about_htouhui.html'>关于我们</a></li>"+
            "</ul>"    +
            "</div>"    +
            "</div>"+
            "</div>";
        return slideContent;
    }).call(this),
    defaults: {
        outerMouseover:function(){
            $(".qrcode-outer").stop().slideDown(100);
        },
        outerMouseout:function(){
            $(".qrcode-outer").stop().slideUp(100);
        },
        weixinMouseover:function(){
            $('.qrcode-weixin').stop().slideDown(100);
        },
        weixinMouseout:function(){
            $('.qrcode-weixin').stop().slideUp(100);
        }
    }
});

//header
var vmHeader=avalon.define({
    $id:"headerCtrl"
});
$(function(){
    var str=window.location.href;
    if(str.lastIndexOf('/')!=-1){
        var navArr=str.substr(str.lastIndexOf('/')+1);
    }

    $(".header .nav li a").each(function(){
        var urlArr = $(this).attr('href');
        if(navArr == urlArr){
            $(".header .nav li a").removeClass();
            $(this).addClass('chooseNav');
        }
    });
});


/* -- footer --  */
avalon.component('footer', {
    template: (function () {
        var footerContent ='<div>'+
                             '<div class="footer_box clearfix">' +
                                '<div class="logo02">' +
                                    '<a href="#"><img src="images/logo02.png"/></a>' +
                                    '<span style="font-size: 12px;">客服热线(工作时间 09:00-18:00)</span><span>400-698-8810</span>' +
                                '</div>' +
                                '<ul class="footer_ul">' +
                                    '<li>' +
                                        '<ul class="footer_ul_li">' +
                                            '<li>' +
                                                '<a href="http://www.htouhui.com/about/aboutus">关于我们</a>' +
                                            '</li>' +
                                            '<li>' +
                                                '<a href="http://www.htouhui.com/about/aboutus">企业介绍</a>' +
                                            '</li>' +
                                            '<li>' +
                                                '<a href="http://www.htouhui.com/about/team">管理团队</a>' +
                                            '</li>' +
                                            '<li>' +
                                                '<a href="http://www.htouhui.com/about/partners">合作伙伴</a>' +
                                            '</li>' +
                                            '<li>' +
                                                '<a href="http://www.htouhui.com/about/joinus">联系我们</a>' +
                                            '</li>' +
                                            '<li>' +
                                                '<a href="http://www.htouhui.com/about/contactus">加入我们</a>' +
                                            '</li>' +
                                        '</ul>' +
                                    '</li>' +
                                    '<li>' +
                                        '<ul class="footer_ul_li">' +
                                            '<li>' +
                                                '<a href="http://www.htouhui.com/falv/flgw">法律法规</a>' +
                                            '</li>' +
                                            '<li>' +
                                                '<a href="http://www.htouhui.com/falv/flgw">法律顾问</a>' +
                                            '</li>' +
                                            '<li>' +
                                                '<a href="http://www.htouhui.com/falv/flxy">法律协议</a>' +
                                            '</li>' +
                                            '<li>' +
                                                '<a href="http://www.htouhui.com/falv/flsm">法律声明</a>' +
                                            '</li>' +
                                        '</ul>' +
                                    '</li>' +
                                    '<li>' +
                                        '<ul class="footer_ul_li">' +
                                            '<li>' +
                                                '<a href="https://www.htouhui.com/help/touzibidu">帮助中心</a>' +
                                            '</li>' +
                                            '<li>' +
                                                '<a href="https://www.htouhui.com/help/touzibidu">投资人必读</a>' +
                                            '</li>' +
                                            '<li>' +
                                                '<a href="https://www.htouhui.com/help/chongzhibidu">充值提现必读</a>' +
                                            '</li>' +
                                            '<li>' +
                                                '<a href="https://www.htouhui.com/help/zhaiquanzhuanrang">怎样债权转让</a>' +
                                            '</li>' +
                                        '</ul>' +
                                    '</li>' +
                                    '<li>' +
                                        '<span>扫二维码下载APP</span>' +
                                        '<br />' +
                                        '<img src="images/smart_download.png" style="width: 125px;"/>' +
                                    '</li>' +
                                '</ul>' +
                            '</div>' +
                            '<div class="belw clearfix">' +
                                '<div class="copy">' +
                                    '<span>©版权所有 北京冠城瑞富信息技术有限公司 Copyright Reserved&nbsp;&nbsp;|&nbsp;&nbsp;京ICP备15020986</span>' +
                                    '<div>' +
                                        '<a target="_blank" href="http://www.itrust.org.cn/Home/Index/itrust_certifi?wm=1335541052"><img class="chengxin" src="images/icons_itrust.png" /></a>' +
                                    '</div>' +
                                    '<div>' +
                                        '<a target="_blank" href="https://trustsealinfo.verisign.com/splash?form_file=fdf/splash.fdf&dn=www.htouhui.com&lang=zh_cn"><img class="chengxin" src="images/icons_norton.png" /></a>' +
                                    '</div>' +
                                    '<div>' +
                                        '<a target="_blank" href="https://credit.cecdc.com/CX20150617010820010588.html"><img class="chengxin" src="images/icons_chengxin.png" /></a>' +
                                    '</div>' +
                                '</div>' +
                            '</div>'+
                          '</div>';
        return footerContent;
    }).call(this)
});

//footer
var vmFooter=avalon.define({
    $id: "footer"
});
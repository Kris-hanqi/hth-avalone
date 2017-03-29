var avalon = require('avalon');
var $ = require("jquery");
var backTop = require("backTop");
var mockjax = require("mockjax")($, window);

//header

/*模拟接口*/
$.mockjax({
    url:"http://XXX/web-api/header",
    status: 200,
    responseText:{
        headerTop:[
            {"title":"立即登录","href":"login.html"},
            {"title":"免费注册","href":"register.html"},
            {"title":"活动中心","href":"activityCenter.html"},
            {"title":"新手指引","href":"newUserGuide.html"},
            {"title":"网贷课堂","href":"netLoanClass.html"}
        ],
        headerBottom:[
            {"title":"首页","href":"index.html"},
            {"title":"我要投资","href":"loans.html"},
            {"title":"债权转让","href":""},
            {"title":"风控措施","href":""},
            {"title":"信息披露","href":""},
            {"title":"关于我们","href":"about_htouhui.html"}
        ]
    }
});
avalon.component('header', {
    template: (function(){
        var slideContent="<div class='header'>"+
            "<div class='header_box'>"+
            "<div class=\"header_left\"><span>客服热线：400-698-8810 （工作日 09:00 - 18:00）</span></div>"+
            "<div class=\"header_right1\">"+
            "<span id=\"header-ico00\" ms-mouseover=\"@outerMouseover\" ms-mouseout=\"@outerMouseout\"><img id=\"app_client\" src=\"img/header_phone.png\"/>手机客户端</span>"+
            "<div class=\"qrcode-outer header-arrow\">"+
            "<i></i>"+
            "<div class=\"qrcode\"><img src=\"img/smart_download.png\"/><span>手机客户端下载</span></div>"+
            "</div>"+
            "<span  id=\"header-ico01\" ms-mouseover=\"@weixinMouseover\" ms-mouseout=\"@weixinMouseout\"><img id=\"app_weixin\" src=\"img/header_weixin.png\"/>微信公众号</span>"+
            "<div class=\"qrcode-weixin header-arrow\">"+
            "<i></i>"+
            "<div class=\"qrcode\"><img src=\"img/weixin-upload.png\"/><span>微信公众号</span></div>"+
            "</div>"+
            "</div>"+
            "<div class=\"header_right2\">"+
            "<a ms-for=\"el in @headerRightArr\" ms-attr='{href:el.href}'>{{el.title}}</a>"  +
            "</div>"    +
            "</div>"+
            "<div class=\"top\">"+
            "<div class=\"top_box\">"+
            "<div class=\"logo\">"+
            "<a href=\"#\"><img src=\"img/logo.png\"/></a>"+
            "</div>"+
            "<div class=\"two-code\"><img src=\"img/logo-jxbank.png\"/></div>"+
            "<ul class=\"nav\">"+
            "<li class=\"nLi\" ms-for='item in @navArr'><a ms-attr='{href:item.href}'>{{item.title}}</a></li>"+
            "</ul>"    +
            "</div>"    +
            "</div>"+
            "</div>";
        return slideContent;
    }).call(this),
    defaults: {
        headerRightArr:[],
        navArr:[],
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
    $id:"headerCtrl",
    headerRightArr:[],
    navArr:[]
});

$.ajax({
    url:"http://XXX/web-api/header",
    success:function(response){
        vmHeader.headerRightArr=response.headerTop;
        vmHeader.navArr=response.headerBottom;

        var str=window.location.href;
        if(str.lastIndexOf('/')!=-1){
            var navArr=str.substr(str.lastIndexOf('/')+1);
        }

        $(".header .nav li a").each(function(){
            urlArr = $(this).attr('href');
            if(navArr == urlArr){
                $(".header .nav li a").removeClass();
                $(this).addClass('chooseNav');
            }
        });
    }
});


/* -- footer --  */
avalon.component('footer', {
    template: (function () {
        var footerContent ='<div>'+
                             '<div class="footer_box clearfix">' +
                                '<div class="logo02">' +
                                    '<a href="#"><img src="img/logo02.png"/></a>' +
                                    '<span style="font-size: 12px;">客服热线(工作时间 09:00-18:00)</span><span>400-698-8810</span>' +
                                '</div>' +
                                '<ul class="footer_ul">' +
                                    '<li ms-for="el in @array">' +
                                        '<ul class="footer_ul_li">' +
                                            '<li ms-for="elem in el.arr">' +
                                                '<a ms-attr="{href: elem.path}">{{elem.name}}</a>' +
                                            '</li>' +
                                        '</ul>' +
                                    '</li>' +
                                    '<li>' +
                                        '<span>扫二维码下载APP</span>' +
                                        '<br />' +
                                        '<img src="img/smart_download.png" style="width: 125px;"/>' +
                                    '</li>' +
                                '</ul>' +
                            '</div>' +
                            '<div class="belw clearfix">' +
                                '<div class="copy">' +
                                    '<span>©版权所有 北京冠城瑞富信息技术有限公司 Copyright Reserved&nbsp;&nbsp;|&nbsp;&nbsp;京ICP备15020986</span>' +
                                    '<div ms-for="el in @copy">' +
                                        '<a target="_blank" ms-attr="{href: el.path}"><img class="chengxin" ms-attr="{src: el.img}" /></a>' +
                                    '</div>' +
                                '</div>' +
                            '</div>'+
                          '</div>';
        return footerContent;
    }).call(this),
    defaults: {
        array:[],
        copy:[]
    }
});

//footer
var vmFooter=avalon.define({
    $id: "footer",
    array: [
        {arr: [
            {path:'http://www.htouhui.com/about/aboutus',name:'关于我们'},
            {path:'http://www.htouhui.com/about/aboutus',name:'企业介绍'},
            {path:'http://www.htouhui.com/about/team',name:'管理团队'},
            {path:'http://www.htouhui.com/about/partners',name:'合作伙伴'},
            {path:'http://www.htouhui.com/about/joinus',name:'联系我们'},
            {path:'http://www.htouhui.com/about/contactus',name:'加入我们'}
        ]},
        {arr: [
            {path:'http://www.htouhui.com/falv/flgw',name:'法律法规'},
            {path:'http://www.htouhui.com/falv/flgw',name:'法律顾问'},
            {path:'http://www.htouhui.com/falv/flxy',name:'法律协议'},
            {path:'http://www.htouhui.com/falv/flsm',name:'法律声明'}
        ]},
        {arr: [
            {path:'',name:'帮助中心'},
            {path:'',name:'投资人必读'},
            {path:'',name:'充值提现必读'},
            {path:'',name:'怎样债权转让'}
        ]}
    ],
    copy:[
        {path:'',img:'img/icons_itrust.png'},
        {path:'',img:'img/icons_norton.png'},
        {path:'',img:'img/icons_chengxin.png'}
    ]
});
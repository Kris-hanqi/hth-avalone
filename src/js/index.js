var avalon = require('avalon');
var $ = require("jquery");
var mockjax = require("jquery.mockjax");

//header
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
            "<a href=\"#\" ms-for=\"el in @headerRightArr\">{{el}}</a>"  +
            "</div>"    +
            "</div>"+
            "<div class=\"top\">"+
            "<div class=\"top_box\">"+
            "<div class=\"logo\">"+
            "<a href=\"#\"><img src=\"img/logo.png\"/></a>"+
            "</div>"+
            "<div class=\"two-code\"><img src=\"img/logo-jxbank.png\"/></div>"+
            "<ul class=\"nav\">"+
            "<li class=\"nLi selectMenu\"><a href=\"#\">首页</a></li>"+
            "<li class=\"nLi\" ms-for='el in @navArr'><a href=\"#\">{{el}}</a></li>"+
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

//banner

(function (){
    var number=$('.banner ul li').size()-1;
    var cur=0;
    var timer=0;
    $(".indicator span:first-child").addClass('cur');
    //定时器
    timer=setInterval(slideNext,3000);
    $('.banner').mouseover(function(){
        clearInterval(timer);
    });
    $('.banner').mouseout(function(){
        timer=setInterval(slideNext,3000);
    });
    $('.next').click(function(){
        slideNext();
    });
    $('.prev').click(function(){
        slidPrve();
    });
    //下一张
    function slideNext(){
        if(cur<number){
            $('.banner ul li').eq(cur).css({"z-index":10}).stop().fadeOut();
            $('.banner ul li').eq(cur+1).css({"z-index":20}).stop().fadeIn();
            $('.indicator span').removeClass().eq(cur+1).addClass('cur');
            cur += 1;
        }else{
            $('.banner ul li').eq(cur).css({"z-index":10}).stop().fadeOut();
            $('.banner ul li').eq(0).css({"z-index":20}).stop().fadeIn();
            $('.indicator span').removeClass().eq(0).addClass('cur');
            cur = 0;
        }
    }
    //上一张
    function slidPrve(){
        if(cur>0){
            $('.banner ul li').eq(cur).css({'z-index':10}).stop().fadeOut();
            $('.banner ul li').eq(cur-1).css({'z-index':20}).stop().fadeIn();
            $('.indicator span').removeClass().eq(cur-1).addClass('cur');
            cur -= 1;
        }else{
            $('.banner ul li').eq(cur).css({'z-index':10}).stop().fadeOut();
            $('.banner ul li').eq(number).css({'z-index':20}).stop().fadeIn();
            $('.indicator span').removeClass().eq(number).addClass('cur');
            cur=number;
        }
    }
    //指示器
    $('.indicator span').mouseover(function(){
        var now=$(this).index();
        $('.indicator span').removeClass();
        $(this).addClass('cur');
        $('.banner ul li').eq(cur).css({'z-index':10}).stop().fadeOut();
        $('.banner ul li').eq(now).css({'z-index':20}).stop().fadeIn();
        cur=now;
    });
})();

//home-safe
avalon.component("safe",{
    template: (function(){
        var homeSafe="<div class=\"home-main\">"+
            "<a href=\"#\" class=\"quick_link\" ms-for='el in @txt'>"+
            "<span></span>"+
            "<strong>{{el.strongTxt}}</strong>{{el.txtArr}}"+
            "</a>"+
            "<div class=\"clear\"></div>"+
            "</div>";
        return homeSafe;
    }).call(this),
    defaults: {
        txt:[]
    }
});

//home-record


//home-main
avalon.component("sxb",{
    template: (function(){
        var sxb="<div>"+
                    "<div class=\"home_products sxb\">"+
                        "<div class=\"home_products_left\">"+
                            "<label>预期收益并非平台承诺收益</label>"+
                            "<h2>升薪宝<i><img src=\"img/product_hot_ico.png\"/></i></h2>"+
                            "<img src=\"img/product_line_ico.png\"/>"+
                            "<p>定期理财，严格风控<br>100元起投<br>放款后生息</p>"+
                            "<a class=\"more\" href=\"#\">查看更多</a>"+
                        "</div>"+
                        "<div class=\"home_products_right\">"+
                            "<div ms-for='el in @sxbContent' class=\"home_sxb_box\">"+
                                "<i class=\"label_type_1\">{{el.moneyStyle}}</i>"+
                                "<a href=\"#\" class=\"sxb_name\">"+
                                    "<h3>{{el.title}}</h3>"+
                                "</a>"+
                                "<p class=\"cr_or\"><span>8.0</span>%</p>"+
                                "<p>预期年化利率</p>"+
                                "<p class=\"sxb_des clearfix\"><span>期限<strong class=\"font24\">{{el.timeLimit}}</strong>个月</span><span>规模<strong class=\"font24\">{{el.targetMoney}}</strong>万</span></p>"+
                                "<ul class=\"pro_data clearfix\"><li>进度</li><li>{{el.progress}}</li></ul>"+
                                "<div class=\"pro_progress\"><img ms-css=\"@styleObj\" src=\"img/progress_line.png\"/></div>"+
                                "<ul class=\"pro_data clearfix\"><li>余额</li><li>{{el.balance}}元</li></ul>"+
                                "<a href=\"#\" class=\"box_button\">立即投标</a>"+
                            "</div>"+
                        "</div>"+
                    "</div>"+
                    "<div class=\"home_products ztxm\">"+
                        "<div class=\"home_products_left\">"+
                            "<label>预期收益并非平台承诺收益</label>"+
                            "<h2>直投项目</h2>"+
                            "<img src=\"img/product_line_ico.png\"/>"+
                            "<p>多层审核，稳定收益<br>100元起投<br />放款后生息</p>"+
                            "<a class=\"more\" href=\"#\">查看更多</a>"+
                        "</div>"+
                        "<div class=\"home_products_right\">"+
                            "<div ms-for='el in @ztxmContent' class=\"home_ztxm_box\">"+
                                "<i class=\"label_type_1\">{{el.moneyStyle}}</i>"+
                                "<ul>"+
                                    "<li><a href=\"#\" class=\"ztxm_name\"><h3>【{{el.title}}】</h3>16120701</a></li>" +
                                    "<li class=\"pro_des clearfix\">"+
                                        "<p class=\"cr_or\"> <span>9.5<i class=\"home_jiaxi\">+1.5%</i></span><label class=\"font18\">%</label><br />预期年化利率 </p>"+
                                        "<p class=\"sxb_des ztxm_des clearfix\"> <span><strong class=\"font24\">{{el.timeLimit}}</strong>个月<br />期限</span> <span><strong class=\"font24\">{{el.targetMoney}}</strong>万<br />规模</span> </p>"+
                                    "</li>"+
                                    "<li>"+
                                        "<a href=\"#\" class=\"box_button\">立即投标</a>"+
                                        "<ul class=\"pro_data clearfix\"><li>进度</li><li>{{el.progress}}</li></ul>"+
                                        "<div class=\"box_progress\"> <img ms-css=\"@styleObj2\" src=\"img/progress_line.png\"/> </div>"+
                                        "<ul class=\"pro_data clearfix\"><li>余额</li><li>{{el.balance}}元</li></ul>"+
                                    "</li>"+
                                "</ul>"+
                            "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>";
        return sxb;
    }).call(this),
    defaults: {
        styleObj:{
            width: 258,
            height: 3,
            "marginLeft": 8,
            float: "left"
        },
        styleObj2:{
            width: 258,
            height: 3,
            " margin-left": -4,
            float: "left"
        },
        sxbContent:[],
        ztxmContent:[]
    }
});

//home-news
avalon.component("news",{
    template:(function(){
        var news="<div class=\"home-main\">"+
            "<div class=\"board news\">"+
            "<h3 class=\"news-title\">新闻中心</h3>"+
            "<span class=\"gengduo\"><a href=\"#\">更多...</a></span>"+
            "<div class=\"news-latest\">"+
            "<a href='#'><img src=\"img/index/media-photo-01.jpg\"/><label><span>福布斯中国公布”互联网金融50” 票据理财平台仅有海投汇</span></label></a>"+
            "</div>"+
            "<ul>"+
            "<li ms-for='el in @newsObj'><a ms-attr='{href:el.href}'><span>{{el.title}}</span><span class=\"news-date\">{{el.time}}</span></a></li>"+
            "</ul>"+
            "</div>"+
            "<div class=\"board call\">"+
            "<h3 class=\"news-title\">平台公告</h3>"+
            "<span class=\"gengduo\"><a href=\"#\">更多...</a></span>"+
            "<ul>"+
            "<li ms-for='el in @callObj'><a ms-attr='{href:el.href}'><span>{{el.content}}</span></a></li>"+
            "</ul>"+
            "</div>"+
            "<div class=\"clear\"></div>"+
            "</div>>";
        return news;
    }).call(this),
    defaults:{
        newsObj:[],
        callObj:[]
    }
});




























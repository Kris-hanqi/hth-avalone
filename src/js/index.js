var avalon = require('avalon');
var $ = require("jquery");
var mockjax = require("mockjax")($, window);

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
    /*模拟接口*/
    $.mockjax({
        url: ' http://XXX/homePage/bannerList',
        status: 200,
        responseText: {
            "data":[
                { "imgUrl": "../src/img/banner/banner-01.jpg", "targetUrl": "#"},
                { "imgUrl": "../src/img/banner/banner-02.jpg", "targetUrl": "#"},
                { "imgUrl": "../src/img/banner/banner-03.jpg", "targetUrl": "#"},
                { "imgUrl": "../src/img/banner/banner-04.jpg", "targetUrl": "#"},
                { "imgUrl": "../src/img/banner/banner-05.jpg", "targetUrl": "#"},
                { "imgUrl": "../src/img/banner/banner-06.jpg", "targetUrl": "#"},
                { "imgUrl": "../src/img/banner/banner-07.jpg", "targetUrl": "#"}
            ]
        }
    });
    $.ajax({
        url:' http://XXX/homePage/bannerList',
        type:'get',
        success:function(response){
            var html = '';
            var text = '';
            for(var i=0;i<response.data.length;i++){
                html += '<li style="background: url('+ response.data[i].imgUrl +') center 0 no-repeat"><a href=" '+ response.data[i].targetUrl +'" class="link"></a></li>';
                text += '<span></span>';
            }
            $("#bannerImg").html(html);

            $(".indicator").html(text);

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
        }
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
(function(){
    /*模拟接口*/
    $.mockjax({
        url: 'http://XXX/web-api/platformData',
        status: 200,
        responseText: {
            "data": {
                "allInvestSum": "8亿2396万7916",
                "allUserInterestSum": "2413万7475",
                "userCount": "5万1592"
            }
        }
    });
    $.ajax({
        url:'http://XXX/web-api/platformData',
        type:'get',
        success:function(response){
            var html = '';
            html +='<div class="home-main">'
                 + '<div class="quick_record">平台累计成交额<span>'+ response.data.allInvestSum +'</span>元</div>'
                 + '<div class="quick_record">用户累计收益<span>'+ response.data.allUserInterestSum +'</span>元</div>'
                 + '<div class="quick_record">平台用户<span>'+ response.data.userCount +'</span>人 </div>'
                 + '<div class="quick_record warning"><span style="font-size: 14px;">温馨提示：</span>市场有风险，投资需谨慎！</div>'
                 + '<div class="clear"></div>'
                 +'</div>';
            $('.home-record').html(html);
        }
    });
})();

//home-main
/*模拟接口*/
$.mockjax({
    url: 'http://XXX/web-api/loanRecommend',
    status: 200,
    responseText: {
        "data": {
            xinshoubiao: [
                {
                    "loanId": "标的id",
                    "targetUrl": "点击跳转路径",
                    "deadline": "借款时间",
                    "loanType": {
                        "loanTypeId": "还款类型",
                        "repayTimePeriod": "还款周期(几月,几天)",
                        "repayTimeUnit": "还款账单(按天换，按月还)"
                    },
                    "ratePercent": "预期年化利率",
                    "loanMoney": "预计借款金额(无计数单位)",
                    "sumMoney": "已投资总额",
                    "moneyNeedRaised": "剩余金额",
                    "loanStatus": "项目状态"
                }
            ],
            shengxinbao:[
                {
                    "loanId": "标的id",
                    "targetUrl": "#",
                    "deadline": "借款时间",
                    "loanType": {
                        "loanTypeId": "等额本息",
                        "repayTimePeriod": "12",
                        "repayTimeUnit": "还款账单(按天换，按月还)"
                    },
                    "loanName": "升薪宝A1",
                    "loanNum": "17032101",
                    "ratePercent": "8.0",
                    "tiexiInfo": {
                        "totalDiscountRate": "1.5"
                    },
                    "loanMoney": "100",
                    "sumMoney": "40",
                    "moneyNeedRaised": "111111",
                    "loanStatus": "立即投标"
                },
                {
                    "loanId": "标的id",
                    "targetUrl": "#",
                    "deadline": "借款时间",
                    "loanType": {
                        "loanTypeId": "等额本息",
                        "repayTimePeriod": "12",
                        "repayTimeUnit": "还款账单(按天换，按月还)"
                    },
                    "loanName": "升薪宝A2",
                    "loanNum": "17032102",
                    "ratePercent": "8.0",
                    "tiexiInfo": {
                        "totalDiscountRate": "1.5"
                    },
                    "loanMoney": "100",
                    "sumMoney": "40",
                    "moneyNeedRaised": "111111",
                    "loanStatus": "立即投标"
                },
                {
                    "loanId": "标的id",
                    "targetUrl": "#",
                    "deadline": "借款时间",
                    "loanType": {
                        "loanTypeId": "等额本息",
                        "repayTimePeriod": "12",
                        "repayTimeUnit": "还款账单(按天换，按月还)"
                    },
                    "loanName": "升薪宝A3",
                    "loanNum": "17032103",
                    "ratePercent": "8.0",
                    "tiexiInfo": {
                        "totalDiscountRate": "1.5"
                    },
                    "loanMoney": "100",
                    "sumMoney": "40",
                    "moneyNeedRaised": "111111",
                    "loanStatus": "立即投标"
                }
            ],
            zhitou:[
                {
                    "loanId": "标的id",
                    "targetUrl": "#",
                    "type": "类型（0为新手标，1为升鑫宝，2为直投项目 loan.businessType）",
                    "deadline": "借款时间",
                    "loanType": {
                        "loanTypeId": "等额本息",
                        "repayTimePeriod": "6",
                        "repayTimeUnit": "还款账单(按天换，按月还)"
                    },
                    "loanName": "抵押贷1",
                    "loanNum": "16120701",
                    "ratePercent": "9.5",
                    "tiexiInfo": {
                        "totalDiscountRate": "1.5"
                    },
                    "loanMoney": "100",
                    "sumMoney": "46",
                    "moneyNeedRaised": "1111111",
                    "loanStatus": "立即投标"
                },
                {
                    "loanId": "标的id",
                    "targetUrl": "#",
                    "type": "类型（0为新手标，1为升鑫宝，2为直投项目 loan.businessType）",
                    "deadline": "借款时间",
                    "loanType": {
                        "loanTypeId": "等额本息",
                        "repayTimePeriod": "6",
                        "repayTimeUnit": "还款账单(按天换，按月还)"
                    },
                    "loanName": "抵押贷2",
                    "loanNum": "16120702",
                    "ratePercent": "9.5",
                    "tiexiInfo": {
                        "totalDiscountRate": "1.5"
                    },
                    "loanMoney": "100",
                    "sumMoney": "46",
                    "moneyNeedRaised": "1111111",
                    "loanStatus": "立即投标"
                },
                {
                    "loanId": "标的id",
                    "targetUrl": "#",
                    "type": "类型（0为新手标，1为升鑫宝，2为直投项目 loan.businessType）",
                    "deadline": "借款时间",
                    "loanType": {
                        "loanTypeId": "等额本息",
                        "repayTimePeriod": "6",
                        "repayTimeUnit": "还款账单(按天换，按月还)"
                    },
                    "loanName": "抵押贷3",
                    "loanNum": "16120703",
                    "ratePercent": "9.5",
                    "tiexiInfo": {
                        "totalDiscountRate": "1.5"
                    },
                    "loanMoney": "100",
                    "sumMoney": "46",
                    "moneyNeedRaised": "1111111",
                    "loanStatus": "立即投标"
                },
                {
                    "loanId": "标的id",
                    "targetUrl": "#",
                    "type": "类型（0为新手标，1为升鑫宝，2为直投项目 loan.businessType）",
                    "deadline": "借款时间",
                    "loanType": {
                        "loanTypeId": "等额本息",
                        "repayTimePeriod": "6",
                        "repayTimeUnit": "还款账单(按天换，按月还)"
                    },
                    "loanName": "抵押贷4",
                    "loanNum": "16120704",
                    "ratePercent": "9.5",
                    "tiexiInfo": {
                        "totalDiscountRate": "1.5"
                    },
                    "loanMoney": "100",
                    "sumMoney": "46",
                    "moneyNeedRaised": "1111111",
                    "loanStatus": "立即投标"
                }
            ]
        }
    }
});
avalon.component("main",{
    template: (function(){
        var main="<div>"+
                    "<div class=\"home_products sxb\">"+
                        "<div class=\"home_products_left\">"+
                            "<label>预期收益并非平台承诺收益</label>"+
                            "<h2>升薪宝<i><img src=\"img/product_hot_ico.png\"/></i></h2>"+
                            "<img src=\"img/product_line_ico.png\"/>"+
                            "<p>定期理财，严格风控<br>100元起投<br>放款后生息</p>"+
                            "<a class=\"more\" href=\"#\">查看更多</a>"+
                        "</div>"+
                        "<div class=\"home_products_right\">"+
                            "<div ms-for='el in @shengxinbao' class=\"home_sxb_box\">"+
                                "<i class=\"label_type_1\">{{el.loanType.loanTypeId}}</i>"+
                                "<a ms-attr='{href:el.targetUrl}' class=\"sxb_name\">"+
                                    "<h3>{{el.loanName}}</h3>"+
                                    "<span>{{el.loanNum}}</span>"+
                                "</a>"+
                                "<p class=\"cr_or\"><span>{{el.ratePercent}}</span>%</p>"+
                                "<p>预期年化利率</p>"+
                                "<p class=\"sxb_des clearfix\"><span>期限<strong class=\"font24\">{{el.loanType.repayTimePeriod}}</strong>个月</span><span>规模<strong class=\"font24\">{{el.loanMoney}}</strong>万</span></p>"+
                                "<ul class=\"pro_data clearfix\"><li>进度</li><li>{{el.sumMoney}}%</li></ul>"+
                                "<div class=\"pro_progress\"><img ms-css=\"@styleObj\" src=\"img/progress_line.png\"/></div>"+
                                "<ul class=\"pro_data clearfix\"><li>余额</li><li>{{el.moneyNeedRaised}}元</li></ul>"+
                                "<a ms-attr='{href:el.targetUrl}' class=\"box_button\">{{el.loanStatus}}</a>"+
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
                            "<div ms-for='el in @zhitou' class=\"home_ztxm_box\">"+
                                "<i class=\"label_type_1\">{{el.loanType.loanTypeId}}</i>"+
                                "<ul>"+
                                    "<li><a ms-attr='{href:el.targetUrl}' class=\"ztxm_name\"><h3>【{{el.loanName}}】</h3>{{el.loanNum}}</a></li>" +
                                    "<li class=\"pro_des clearfix\">"+
                                        "<p class=\"cr_or\"> <span>{{el.ratePercent}}%<i class=\"home_jiaxi\">+{{el.tiexiInfo.totalDiscountRate}}%</i></span><label class=\"font18\">%</label><br />预期年化利率 </p>"+
                                        "<p class=\"sxb_des ztxm_des clearfix\"> <span><strong class=\"font24\">{{el.loanType.repayTimePeriod}}</strong>个月<br />期限</span> <span><strong class=\"font24\">{{el.loanMoney}}</strong>万<br />规模</span> </p>"+
                                    "</li>"+
                                    "<li>"+
                                        "<a ms-attr='{href:el.targetUrl}' class=\"box_button\">{{el.loanStatus}}</a>"+
                                        "<ul class=\"pro_data clearfix\"><li>进度</li><li>{{el.sumMoney}}%</li></ul>"+
                                        "<div class=\"box_progress\"> <img ms-css=\"@styleObj2\" src=\"img/progress_line.png\"/> </div>"+
                                        "<ul class=\"pro_data clearfix\"><li>余额</li><li>{{el.moneyNeedRaised}}元</li></ul>"+
                                    "</li>"+
                                "</ul>"+
                            "</div>"+
                        "</div>"+
                    "</div>"+
                "</div>";
        return main;
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
        xinshoubiao:[],
        shengxinbao:[],
        zhitou:[]
    }
});
$.ajax({
   url:'http://XXX/web-api/loanRecommend',
   success:function(response){
       vm4.xinshoubiao=response.data.xinshoubiao;
       vm4.shengxinbao=response.data.shengxinbao;
       vm4.zhitou=response.data.zhitou;
   }
});


//home-news
/*模拟接口*/
$.mockjax({
    url: 'http://XXX/web-api/platformInfo',
    status: 200,
    responseText: {
        "data":{
            newsCenter:[
                {
                    "imgUrl": "img/index/media-photo-01.jpg",
                    "title": "海投汇好友邀请：千五荐面礼 史上最高霸气来袭",
                    "createTime": "2017/2/1",
                    "targetUrl": "#"
                },
                {
                    "imgUrl": "img/index/media-photo-01.jpg",
                    "title": "理财大揭秘，海投汇新手标,老带新活动感恩来...",
                    "createTime": "2017/3/1",
                    "targetUrl": "#"
                },
                {
                    "imgUrl": "img/index/media-photo-01.jpg",
                    "title": "海投汇引领P2P合规时代，银行存管不是终点...",
                    "createTime": "2017/4/1",
                    "targetUrl": "#"
                },
                {
                    "imgUrl": "img/index/media-photo-01.jpg",
                    "title": "海投汇第二届投资人见面会成功举办",
                    "createTime": "2017/5/1",
                    "targetUrl": "#"
                },
                {
                    "imgUrl": "img/index/media-photo-01.jpg",
                    "title": "海投汇李鲁一：修己惠人 笃行致远",
                    "createTime": "2017/6/1",
                    "targetUrl": "#"
                }
            ],
            plateformNotice:[
                {
                    "title": "融资方还款情况报告",
                    "createTime": "2017-1-8",
                    "targetUrl": "#"
                },
                {
                    "title": "融资方还款情况报告",
                    "createTime": "2017-1-9",
                    "targetUrl": "#"
                },
                {
                    "title": "融资方还款情况报告",
                    "createTime": "2017-1-10",
                    "targetUrl": "#"
                },
                {
                    "title": "融资方还款情况报告",
                    "createTime": "2017-1-11",
                    "targetUrl": "#"
                },
                {
                    "title": "融资方还款情况报告",
                    "createTime": "2017-1-12",
                    "targetUrl": "#"
                }
            ]
        }
    }
});
avalon.component("news",{
    template:(function(){
        var news="<div class=\"home-main\">"+
            "<div class=\"board news\">"+
            "<h3 class=\"news-title\">新闻中心</h3>"+
            "<span class=\"gengduo\"><a href=\"#\">更多...</a></span>"+
            "<div class=\"news-latest\">"+
            "<a ms-for='value in @newsCenter | limitBy(10) as items' ms-attr='{href:value.targetUrl}'><img ms-attr='{src:value.imgUrl}'/><label><span>福布斯中国公布”互联网金融50” 票据理财平台仅有海投汇</span></label></a>"+
            "</div>"+
            "<ul>"+
            "<li ms-for='el in @newsCenter'><a ms-attr='{href:el.targetUrl}'><span>{{el.title}}</span><span class=\"news-date\">{{el.createTime}}</span></a></li>"+
            "</ul>"+
            "</div>"+
            "<div class=\"board call\">"+
            "<h3 class=\"news-title\">平台公告</h3>"+
            "<span class=\"gengduo\"><a href=\"#\">更多...</a></span>"+
            "<ul>"+
            "<li ms-for='el in @plateformNotice'><a ms-attr='{href:el.targetUrl}'><span>【{{el.createTime}}】{{el.title}}</span></a></li>"+
            "</ul>"+
            "</div>"+
            "<div class=\"clear\"></div>"+
            "</div>>";
        return news;
    }).call(this),
    defaults:{
        newsCenter:[],
        plateformNotice:[]
    }
});
$.ajax({
    url:'http://XXX/web-api/platformInfo',
    success:function(response){
        vm5.newsCenter=response.data.newsCenter;
        vm5.plateformNotice=response.data.plateformNotice;
    }
});



























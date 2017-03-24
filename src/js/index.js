var avalon = require('avalon');
var $ = require("jquery");
var backTop = require("backTop");
var mockjax = require("mockjax")($, window);



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
var vmSafe=avalon.define({
    $id:"safeCtrl",
    txt:[
        {strongTxt:"稳健运营",txtArr:"完善的业务闭环，历史100%兑付"},
        {strongTxt:"江西银行资金存管",txtArr:"平台与用户资金分离，借贷双方交易信息安全"},
        {strongTxt:"Pre-A轮融资",txtArr:"获战略投资方—五星资本Pre-A轮融资"},
        {strongTxt:"多重风控保障",txtArr:"多级风控审核，抵押信息真实透明"}
    ]
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
var vmMain=avalon.define({
    $id:"mainCtrl",
    xinshoubiao: [],
    shengxinbao:[],
    zhitou:[]
});
$.ajax({
   url:'http://XXX/web-api/loanRecommend',
   success:function(response){
       vmMain.xinshoubiao=response.data.xinshoubiao;
       vmMain.shengxinbao=response.data.shengxinbao;
       vmMain.zhitou=response.data.zhitou;
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
var vmNews=avalon.define({
    $id:"newsCtrl",
    newsCenter:[],
    plateformNotice:[]
});
$.ajax({
    url:'http://XXX/web-api/platformInfo',
    success:function(response){
        vmNews.newsCenter=response.data.newsCenter;
        vmNews.plateformNotice=response.data.plateformNotice;
    }
});

//投资者风采
$(function(){
    $(".investor").on('mouseover','.investor-box',function(){
        $(this).find(".unfoldImg").hide();
        $(this).removeClass("unfold");
        var index = $(this).parent().find("div").index(this);
        $(this).parent().find(".investor-box").addClass("unfold");
        $(this).parent().find(".investor-box").slice(index,index+1).removeClass("unfold");
    });
    $(".investor").on('mouseout','.investor-box',function(){
        $(this).find(".unfoldImg").show();
        $(this).addClass("unfold");
    })
});
/*模拟接口*/
$.mockjax({
    url:'http://XXX/web-api/investorSaid',
    status: 200,
    responseText: {
        "data":[
            {
                headPicUrl: 'img/index/29481485055670889.png',
                nickName: "许女士",
                work: "全职太太",
                leaveMsg: "经身边已经在海投汇投资的朋友强烈推荐，开始关注海投汇。了解到海投汇自成立后业绩一直增长，没有一笔坏账，比较放心，自此与海投汇结缘。去年底资金存管也上线了，刚刚又得知海投汇获得融资，衷心希望海投汇的影响力越来越大、越做做强、越办越好，发布更多更好的产品给大家，给广大的客户带来福利！"
            },
            {
                headPicUrl: 'img/index/33551485055652270.png',
                nickName: "好好好老师",
                work: "教师",
                leaveMsg: "2015年开始接触互联网金融平台并投资，陆续接触了很多家成熟的互金平台。海投汇不管是安全上还是管理上都比较严谨，借款人的身份证、基本信息、借款用途和借款资料等等都会有明确披露，可以说风控很成熟，资料也很全面。在比较了多个互金平台后，最终选择了海投汇作为我的大部分资金的首选，虽然鸡蛋不可能放在同一个篮子里，但是多年的经验告诉我，海投汇是一个值得信赖的互金投资平台。"
            },
            {
                headPicUrl: 'img/index/56131485055626978.png',
                nickName: "惠明",
                work: "家庭主妇",
                leaveMsg: "从2015年海投汇初成立起就深深的关注着他。开头有点担心，小心翼翼试探的小投几把。日子久了，更多的关注着互金相关新闻；一有空就搜索海投汇的消息，看到海投汇各项功能日趋完善，银行资金存管也上线了，越来越符合国家相关规定。每个月都有各种活动开展，我也越来越信赖他了。祝海投汇越办越好，安安全全，成为日久传承的“老店”。"
            },
            {
                headPicUrl: 'img/index/35311485055688654.png',
                nickName: "一切皆好",
                work: "厨师",
                leaveMsg: "我与海投汇的缘分要感谢空中网的一款游戏《坦克世界》。海投汇经常推出投资送金币、送装备的活动，从未让我失望！每一次，我不但获得了游戏各种配件，投资的本金、利息也都如期回来了，投资稳健和收益可观，很靠谱！海投汇微信公众账号后期也开始搞活动，现在我已经把大中小号“小海公仔”都纳入囊中。谢谢海投汇给我一个投资的渠道。希望海投汇做的更好，走的更远。"
            },
            {
                headPicUrl: 'img/index/4561485055715766.png',
                nickName: "小华",
                work: "IT 运营经理",
                leaveMsg: "我也算《坦克世界》的老玩家了，去年一个偶然的机会看到海投汇和坦克世界合作搞活动，因为我一直在投资互联网金融平台理财，所以毫不犹豫的就注册了帐号，开始了投资，于是期期活动都参加，也给海投汇提了好多的意见和建议，大部分都惊喜地被海投汇采纳了。我想今后我会更积极的参与到海投汇的发展中，也希望海投汇越做越大，生意兴隆，更希望海投汇在稳定中发展，为投资人开创美好未来。"
            }
        ]
    }
});
var vmInvestor=avalon.define({
    $id: "investor",
    data: []
});
$.ajax({
    url:'http://XXX/web-api/investorSaid',
    success:function(response){
        vmInvestor.data=response.data;
    }
});

// 媒体报道滚动
$(function($){$.fn.jCarouselLite=function(o){o=$.extend({btnPrev:null,btnNext:null,btnGo:null,mouseWheel:false,auto:1500,speed:1000,easing:null,vertical:false,circular:true,visible:5,start:0,scroll:1,beforeStart:null,afterEnd:null},o||{});return this.each(function(){var b=false,animCss=o.vertical?"top":"left",sizeCss=o.vertical?"height":"width";var c=$(this),ul=$("ul",c),tLi=$("li",ul),tl=tLi.size(),v=o.visible;if(o.circular){ul.prepend(tLi.slice(tl-v-1+1).clone()).append(tLi.slice(0,v).clone());o.start+=v}var f=$("li",ul),itemLength=f.size(),curr=o.start;c.css("visibility","visible");f.css({overflow:"hidden",float:o.vertical?"none":"left"});ul.css({margin:"0",padding:"0",position:"relative","list-style-type":"none","z-index":"1"});c.css({overflow:"hidden",position:"relative","z-index":"2",left:"0px"});var g=o.vertical?height(f):width(f);var h=g*itemLength;var j=g*v;f.css({width:f.width(),height:f.height()});ul.css(sizeCss,h+"px").css(animCss,-(curr*g));c.css(sizeCss,j+"px");if(o.btnPrev)$(o.btnPrev).click(function(){return go(curr-o.scroll)});if(o.btnNext)$(o.btnNext).click(function(){return go(curr+o.scroll)});if(o.btnGo)$.each(o.btnGo,function(i,a){$(a).click(function(){return go(o.circular?o.visible+i:i)})});if(o.mouseWheel&&c.mousewheel)c.mousewheel(function(e,d){return d>0?go(curr-o.scroll):go(curr+o.scroll)});if(o.auto)setInterval(function(){go(curr+o.scroll)},o.auto+o.speed);function vis(){return f.slice(curr).slice(0,v)};function go(a){if(!b){if(o.beforeStart)o.beforeStart.call(this,vis());if(o.circular){if(a<=o.start-v-1){ul.css(animCss,-((itemLength-(v*2))*g)+"px");curr=a==o.start-v-1?itemLength-(v*2)-1:itemLength-(v*2)-o.scroll}else if(a>=itemLength-v+1){ul.css(animCss,-((v)*g)+"px");curr=a==itemLength-v+1?v+1:v+o.scroll}else curr=a}else{if(a<0||a>itemLength-v)return;else curr=a}b=true;ul.animate(animCss=="left"?{left:-(curr*g)}:{top:-(curr*g)},o.speed,o.easing,function(){if(o.afterEnd)o.afterEnd.call(this,vis());b=false});if(!o.circular){$(o.btnPrev+","+o.btnNext).removeClass("disabled");$((curr-o.scroll<0&&o.btnPrev)||(curr+o.scroll>itemLength-v&&o.btnNext)||[]).addClass("disabled")}}return false}})};function css(a,b){return parseInt($.css(a[0],b))||0};function width(a){return a[0].offsetWidth+css(a,'marginLeft')+css(a,'marginRight')};function height(a){return a[0].offsetHeight+css(a,'marginTop')+css(a,'marginBottom')}});
$(function() {
    $("#button-scroll").jCarouselLite({
        btnNext: ".next",
        btnPrev: ".prev"
    });
});
var vm7=avalon.define({
    $id: "mediaList",
    media: [
        {mediaPicUrl: '#',mediaPic: 'img/index/media-01.jpg'},
        {mediaPicUrl: '#',mediaPic: 'img/index/media-02.jpg'},
        {mediaPicUrl: '#',mediaPic: 'img/index/media-03.jpg'},
        {mediaPicUrl: '#',mediaPic: 'img/index/media-04.jpg'},
        {mediaPicUrl: '#',mediaPic: 'img/index/media-05.jpg'},
        {mediaPicUrl: '#',mediaPic: 'img/index/media-06.jpg'}
    ]
});
























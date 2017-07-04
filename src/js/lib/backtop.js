
var $ = require("jquery");
function backTop() {
	this.init();
}

backTop.prototype = {
    constructor : backTop,
    init : function() {
        this._initBackTop();
    },
    _initBackTop : function() {
        var url = window.location.href;
        var counter = '<li>'
            +'<span class="right_qq_on"><a class="right_qq_counter" href="javascript:;" title="计算器"></a></span>'
            +'<div class="right_qq_wx_pic right_qq_hid right_qq_hid_counter" _pic="bt" style="position:absolute;right: 55px;top:-138px "><i class="arrow-icon"></i><div class="counter-box"> <div class="counter"><a href="#"></a><div class="counter-m"><span>投资金额</span><input type="text" class="money"> <span class="deadline">期<span style="visibility: hidden;margin: 0;padding: 0">哈哈</span>限 </span> <form> <i class="select-icon"></i><span>1</span><span>个月<span style="visibility: hidden">22</span></span><span class="red">7.2</span><span class="black">%</span> <br /> <i class="select-icon"></i><span>3</span><span>个月<span style="visibility: hidden">22</span></span><span class="red">8.0</span><span class="black">%</span> <br /> <i class="select-icon"></i><span>6</span><span>个月<span style="visibility: hidden">22</span></span><span class="red">9.5</span><span class="black">%</span> <br /> <i class="select-icon"></i><span>12</span><span>个月<span style="visibility: hidden">2</span></span><span class="red">11.0</span><span class="black">%</span> </form> <span>享受收益</span> <span class="earnings">0元</span> </div> <div class="counter-b"> <a href="#"><span class="calculate"></span></a> <span>以上结果为先息后本计算方式</span> </div> </div></div></div>'
            +'</li>';
        var kefu = '<li>'
            +'<span class="right_qq_on"><a class="right_qq_zx" rel="nofollow" title="在线客服" href="javascript:;"></a></span>'
            +'<div class="right_qq_wx_pic right_qq_hid" _pic="bt" style="right: 55px;"><i class="arrow-icon"></i><span>工作日</span><span>（9:00-18:00）</span></div>'
            +'</li>';
        if (url.indexOf('/activity/') != -1) {
            if (url.indexOf('exclusive-benefits') != -1
                || url.indexOf('common-register') != -1
                || url.indexOf('beauty-plan-bd') != -1
                || url.indexOf('tg') != -1
                || url.indexOf('anniversary-financial') != '-1') {
                kefu='';
            }
        }

        var app = '<li>'
            +'<span class="right_qq_on"><a class="right_qq_app" href="javascript:;" title="手机app"></a></span>'
            +'<div class="right_qq_wx_pic right_qq_hid right_qq_hid_code" _pic="bt" style="position:absolute;right: 55px;top:-65px""><i class="arrow-icon" style="top: 75px;"></i><div style="width: 250px"><div style="float: left"><img src="images/index/counter/QR-code.png"><span>手机客户端下载</span></div><div style="float: right"><img src="images/index/counter/weixin-upload.png"><span>微信公众号</span></div></div></div>'
            +'</li>';

        var $backTop = this.$backTop = $('<div class="cbbfixed right_qq"><ul>'
            + counter
            + kefu
            + app
            // + weixin
            + '<li class="goTop" style="margin-top: 10px;">'
            + '<span class="right_qq_on"><a rel="nofollow" id="goToTop" class="goTop" href="javascript:;" title="返回顶部"></a></span>'
            + '</li>'
            + '</ul></div>');

        $('body').append($backTop);
        $($backTop.find("li[class='goTop']")).click(function() {
            $("html, body").animate({
                scrollTop : 0
            }, 120);
        });

        $(".right_qq_on").mouseover(
            function() {
                var index = $(this).parent().find("div[_pic=bt]").index(this);
                $(this).parent().find("div[_pic=bt]").show();
                $(this).parent().find("div[_pic=bt]").slice(index,index+1).show();
            }).mouseout(
            function() {
                $(".right_qq_on").parent().find("div[_pic=bt]").hide();
            });

        $(".right_qq_hid").mouseover(
            function() {
                $(this).show();
            }).mouseout(
            function() {
                $(this).hide();
            }
		);

        var timmer = null;
        $backTop.css("bottom", "140px");
        $backTop.find(".goTop").hide();
        $(window).bind("scroll", function() {
            var d = $(document).scrollTop();
            if (0 < d) {// 需要出现返回顶部按钮
                $backTop.find(".goTop").show();
            } else {// 不需要出现
                $backTop.find(".goTop").hide();
            }
            clearTimeout(timmer);
            timmer = setTimeout(function() {
                clearTimeout(timmer);
            }, 100);
        });

        $('.right_qq_hid_counter form i.select-icon').on("click",function(e){
            $(this).siblings('i').removeClass('select');
            var radio_checked=$(this).attr('class');

            if(radio_checked == 'select-icon'){
                $(this).children('input').addClass('none');
                $(this).addClass('select');
            }else if(radio_checked == 'select'){
                $(this).children('input').removeClass('none');
                $(this).removeClass('select');
            }
        });


        $(".right_qq_hid_counter .calculate").on('click',function () {
            var money = $('.right_qq_hid_counter .money').val(),
                scale = $('.right_qq_hid_counter .counter-m form i.select').next().text(),
                day = $('.right_qq_hid_counter .counter-m form i.select').next().next().next().text();

            $.ajax({
                url: 'http://192.168.1.89:21000/web-api/invest-calculator/' + money + '/loan_type_3/' + scale + '/' + day ,
                type: 'get',
                success: function (data) {
                    $('.right_qq_hid_counter .earnings').text(data.data.anticipatedInterest +'元');
                },
                error: function () {

                }
            })
        });
    }
}
var backtop = new backTop();

var $ = require("jquery");
function backTop() {
	this.init();
	/*$(document).ready(function() {
		if ($(".main").length != 0) {
			var xx = 0;
			var windowWidth = $(window).width();
			var mainx = $(".main").offset().left + $(".main").width();
			$(".cbbfixed").css("right", windowWidth - mainx - 160);
		}
	});*/
}

backTop.prototype = {
	constructor : backTop,
	init : function() {
		this._initBackTop();
	},
	_initBackTop : function() {
		var url = window.location.href;
		var kefu = '<li>'
				+'<span class="right_qq_on"><a class="right_qq_zx" rel="nofollow" title="在线客服" href="javascript:;"></a></span>'
				+'<div class="right_qq_wx_pic right_qq_hid" _pic="bt" style="right: 55px;"><i></i><span>工作日</span><span>（9:00-18:00）</span></div>'
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
				+'<div class="right_qq_wx_pic right_qq_hid" _pic="bt" style="right: 55px;"><i></i><img src="img/smart_download.png"><span>手机客户端下载</span></div>'
	        	+'</li>';
		var weixin = '<li>'
				+'<span class="right_qq_on"><a rel="nofollow" class="right_qq_wx" title="微信公众号"></a></span>'
				+'<div class="right_qq_wx_pic right_qq_hid" _pic="bt" style="right: 55px;"><i></i><img src="img/weixin-upload.png"><span>微信公众号</span></div>'
	        	+'</li>';
		var $backTop = this.$backTop = $('<div class="cbbfixed right_qq"><ul>'
				+ kefu
				+ app
				+ weixin
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
				});

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
	}
}
var backtop = new backTop();
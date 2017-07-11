var avalon = require('avalon');
var $ = require("jquery");
var mockjax = require("mockjax")($, window);

/* @if NODE_ENV='local_test' **
 var apiBaseUrl = 'http://192.168.1.89:21000/web-api';
 /* @endif */
/* @if NODE_ENV='uat_test' **
 var apiBaseUrl = 'http://120.27.166.122:5001/web-api';
 /* @endif */
/* @if NODE_ENV='sit_test' **
 var apiBaseUrl = 'http://120.27.165.213:5001/web-api';
 /* @endif */
/* @if NODE_ENV='prod' **
 var apiBaseUrl = 'https://www.htouhui.com/web-api';
 /* @endif */
/* @if NODE_ENV='stage' **
 var apiBaseUrl = 'https://118.178.248.228/web-api';
 /* @endif */

//banner
(function (){
    $.ajax({
        url:' http://192.168.1.91:21000/web-api/bannerList/index',
        type:'get',
        success:function(data){
            if(data.meta.code == '200') {
                var html = '';
                var text = '';
                for(var i=0;i<data.data.bannerList.length;i++){
                    text += '<li><a href=" '+ data.data.bannerList[i].targetUrl +'"><img src="'+ data.data.bannerList[i].imgUrl +'" style="width: 100%;height: 100%" alt=""></a></li>';
                    html += '<li><a href="javascript:void(0)"></a></li>';
                }
                $("#fcimg").html(text);
                $("#fcnum").html(html);

                var indx = 1;
                var looper = 3500;
                var myTimer;

                function prev(il, nl, cs) {
                    crobj = $(il).eq(indx);
                    $(il).not(crobj).hide();
                    $(nl).removeClass();
                    $(nl).eq(indx).addClass(cs);
                    crobj.stop(true, true).fadeIn('slow');
                    indx = (--indx) % ($(il).length);
                }
                function showFImg(il,nl,cs){
                    if($(il).length >1){
                        crobj = $(il).eq(indx);
                        $(il).not(crobj).hide();
                        $(nl).removeClass();
                        $(nl).eq(indx).addClass(cs);
                        crobj.stop(true,true).fadeIn('slow');
                        indx = (++indx) % ($(il).length);
                    }
                }

                if ($("#fcimg li").length > 1) {
                    $('#fcnum li:first-child').addClass('one');

                    myTimer = setInterval(function(){
                        crobj = $("#fcimg li").eq(indx);
                        $("#fcimg li").not(crobj).hide();
                        $("#fcnum li").removeClass();
                        $("#fcnum li").eq(indx).addClass("crn");
                        crobj.stop(true,true).fadeIn('slow');
                        indx = (++indx) % ($("#fcimg li").length);
                    }, looper);
                    $("#fcnum li").click(function () {
                        indx = $("#fcnum li").index(this);
                        showFImg("#fcimg li", "#fcnum li", "crn");
                        try {
                            clearInterval(myTimer);
                            myTimer = setInterval(function(){
                                crobj = $("#fcimg li").eq(indx);
                                $("#fcimg li").not(crobj).hide();
                                $("#fcnum li").removeClass();
                                $("#fcnum li").eq(indx).addClass("crn");
                                crobj.stop(true,true).fadeIn('slow');
                                indx = (++indx) % ($("#fcimg li").length);
                            }, looper);
                        } catch (e) {
                        }
                        return false;
                    });
                    $("#fcimg").hover(function () {
                        if (myTimer) {
                            clearInterval(myTimer);
                        }
                    }, function () {
                        myTimer = setInterval(function(){
                            crobj = $("#fcimg li").eq(indx);
                            $("#fcimg li").not(crobj).hide();
                            $("#fcnum li").removeClass();
                            $("#fcnum li").eq(indx).addClass("crn");
                            crobj.stop(true,true).fadeIn('slow');
                            indx = (++indx) % ($("#fcimg li").length);
                        }, looper);
                    });

                    /*banner-btn*/
                    $('.banner_pic .banner-btn-prev').on("click", function () {
                        prev("#fcimg li", "#fcnum li", "crn");
                    });
                    $(".banner_pic .banner-btn-next").on("click", function () {
                        showFImg("#fcimg li", "#fcnum li", "crn");
                    });

                    $('.banner_pic .banner-btn-prev').bind("mouseenter", function () {
                        clearInterval(myTimer);
                    }).bind("mouseleave", function () {
                        myTimer = setInterval(function(){
                            crobj = $("#fcimg li").eq(indx);
                            $("#fcimg li").not(crobj).hide();
                            $("#fcnum li").removeClass();
                            $("#fcnum li").eq(indx).addClass("crn");
                            crobj.stop(true,true).fadeIn('slow');
                            indx = (++indx) % ($("#fcimg li").length);
                        }, looper);
                    });
                    $('.banner_pic .banner-btn-next').bind("mouseenter", function () {
                        clearInterval(myTimer);
                    }).bind("mouseleave", function () {
                        myTimer = setInterval(function(){
                            crobj = $("#fcimg li").eq(indx);
                            $("#fcimg li").not(crobj).hide();
                            $("#fcnum li").removeClass();
                            $("#fcnum li").eq(indx).addClass("crn");
                            crobj.stop(true,true).fadeIn('slow');
                            indx = (++indx) % ($("#fcimg li").length);
                        }, looper);
                    });
                }
            }else {
                console.log(data.meta.message);
            }
        }
    });
})();

//home-record
(function(){
    $.ajax({
        url:'http://192.168.1.91:21000/web-api/platformData',
        type:'get',
        success:function(response){
            var html = '';
            var allInvestSum = numFormat(response.data.allInvestSum);
            var allUserInterestSum = numFormat(response.data.allUserInterestSum);
            var userCount = numFormat(response.data.userCount);
            html +='<div class="home-main">'
                 + '<div class="quick_record">平台累计成交额<span>'+ allInvestSum +'</span>元</div>'
                 + '<div class="quick_record">用户累计收益<span>'+ allUserInterestSum +'</span>元</div>'
                 + '<div class="quick_record">平台用户<span>'+ userCount +'</span>人 </div>'
                 + '<div class="quick_record warning"><span style="font-size: 14px;">温馨提示：</span>市场有风险，投资需谨慎！</div>'
                 + '<div class="clear"></div>'
                 +'</div>';
            $('.home-record').html(html);
        }
    });
})();
function numFormat(money){
    var money = money.toString();
    var moneyConvertmoneyConvertTemp = "";
    var moneyArray = money.split('.');
    if(moneyArray.length == 1){
        if(0 < money.length && money.length < 5){
            return money;
        }else if(5 <= money.length && money.length < 9){
            moneyConvertTemp = money.substring(0,money.length-4);
            moneyConvertTemp = moneyConvertTemp + '万';
            moneyConvertTemp += money.substring(money.length-4,money.length) ;
            return moneyConvertTemp;
        }else{
            moneyConvertTemp = money.substring(0,money.length-8);
            moneyConvertTemp = moneyConvertTemp + '亿';
            moneyConvertTemp += money.substring(money.length-8,money.length-4) + '万';
            moneyConvertTemp += money.substring(money.length-4,money.length) ;
            return moneyConvertTemp;
        }
    }else{
        var integerPart = moneyArray[0].toString();
        var fractionalPart = moneyArray[1].toString();
        if(0 < integerPart.length && integerPart.length < 5){
            return integerPart + '.' + fractionalPart.substring(0,2);
        }else if(5 < integerPart.length && integerPart.length < 9){
            moneyConvertTemp = integerPart.substring(0,integerPart.length-4);
            moneyConvertTemp = moneyConvertTemp + '万';
            moneyConvertTemp += integerPart.substring(integerPart.length-4,integerPart.length) + '.' + fractionalPart.substring(0,2);
            return moneyConvertTemp;
        }else{
            moneyConvertTemp = integerPart.substring(0,integerPart.length-8);
            moneyConvertTemp = moneyConvertTemp + '亿';
            moneyConvertTemp += integerPart.substring(integerPart.length-8,integerPart.length-4) + '万';
            moneyConvertTemp += integerPart.substring(integerPart.length-4,integerPart.length) + '.' ;
            moneyConvertTemp += fractionalPart.substring(0,2);
            return moneyConvertTemp;
        }
    }
}

//home-main
var raiseCapacity=3;
var normalCapacity=4;
var raisePlanCapacity=3;
avalon.component("main",{
    template: (function(){
        var main="<div>"+
                    '<div class="home_products xszx" ms-for="el in @xinshoubiao">'+
                        '<h3>新手专享<i>新用户量身订做的短期体验标</i></h3>'+
                        '<div class="products_xszx_left">'+
                            '<i class="label_type">限投1万元，到期还本付息</i>'+
                            '<div class="xszx_des clearfix">'+
                                '<p><strong style="color: #ee5949;">{{el.ratePercent}}<label>%</label></strong>预期年化利率</p>'+
                                '<p><strong>{{el.deadline}}<label>{{el.repayUnit}}</label></strong>借款期限</p>'+
                                '<p><strong>{{el.loanMoney}}<label>万</label></strong>项目规模</p>'+
                            '</div>'+
                        '</div>'+
                        '<div class="products_xszx_right">'+
                            '<div class="percent-circle">'+
                                '<div id="xinshouPercentContainer1" class="project-percent-circle-container">'+
                                    '<div class="percent-circle">'+
                                        '<span id="xinshouTxtContainer1">{{el.loanProcess}}%</span><br>'+
                                        '<span>项目进度</span>'+
                                    '</div>'+
                                '</div>'+
                                '<a ms-attr="{href:el.targetUrl}" class="box_button">{{el.loanStatus}}</a>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                    "<div class=\"home_products sxb\">"+
                        "<div class=\"home_products_left\">"+
                            "<label>预期收益并非平台承诺收益</label>"+
                            "<h2>升薪宝<i><images src=\"images/product_hot_ico.png\"/></i></h2>"+
                            "<images src=\"images/product_line_ico.png\"/>"+
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
                                "<p class=\"cr_or\"><span>{{el.ratePercent}}<i class=\"home_jiaxi\" ms-if='el.tiexiRate'>+{{el.tiexiRate}}%</i></span>%</p>"+
                                "<p>预期年化利率</p>"+
                                "<p class=\"sxb_des clearfix\"><span>期限<strong class=\"font24\">{{el.loanType.repayTimePeriod}}</strong>个{{el.loanType.repayTimeUnit}}</span><span>规模<strong class=\"font24\">{{el.loanMoney}}</strong>万</span></p>"+
                                "<ul class=\"pro_data clearfix\"><li>进度</li><li>{{el.loanProcess}}%</li></ul>"+
                                "<div class=\"pro_progress\"><images ms-css=\"@styleObj\" src=\"images/progress_line.png\"/></div>"+
                                "<ul class=\"pro_data clearfix\"><li>余额</li><li>{{el.leftLoaningMoney}}元</li></ul>"+
                                "<a ms-attr='{href:el.targetUrl}' class=\"box_button\">{{el.loanStatus}}</a>"+
                            "</div>"+
                        "</div>"+
                    "</div>"+
                    "<div class=\"home_products ztxm\">"+
                        "<div class=\"home_products_left\">"+
                            "<label>预期收益并非平台承诺收益</label>"+
                            "<h2>直投项目</h2>"+
                            "<images src=\"images/product_line_ico.png\"/>"+
                            "<p>多层审核，稳定收益<br>100元起投<br />放款后生息</p>"+
                            "<a class=\"more\" href=\"#\">查看更多</a>"+
                        "</div>"+
                        "<div class=\"home_products_right\">"+
                            "<div ms-for='el in @zhitou' class=\"home_ztxm_box\">"+
                                "<i class=\"label_type_1\">{{el.loanType.loanTypeId}}</i>"+
                                "<ul>"+
                                    "<li><a ms-attr='{href:el.targetUrl}' class=\"ztxm_name\"><h3>【{{el.loanName}}】</h3>{{el.loanNum}}</a></li>" +
                                    "<li class=\"pro_des clearfix\">"+
                                        "<p class=\"cr_or\"> <span>{{el.ratePercent}}<i class=\"home_jiaxi\" ms-if='el.tiexiRate'>+{{el.tiexiRate}}%</i></span><label class=\"font18\">%</label><br />预期年化利率 </p>"+
                                        "<p class=\"sxb_des ztxm_des clearfix\"> <span><strong class=\"font24\">{{el.loanType.repayTimePeriod}}</strong>个{{el.loanType.repayTimeUnit}}<br />期限</span> <span><strong class=\"font24\">{{el.loanMoney}}</strong>万<br />规模</span> </p>"+
                                    "</li>"+
                                    "<li>"+
                                        "<a ms-attr='{href:el.targetUrl}' class=\"box_button\">{{el.loanStatus}}</a>"+
                                        "<ul class=\"pro_data clearfix\"><li>进度</li><li>{{el.loanProcess}}%</li></ul>"+
                                        "<div class=\"box_progress\"> <images ms-css=\"@styleObj2\" src=\"images/progress_line.png\"/> </div>"+
                                        "<ul class=\"pro_data clearfix\"><li>余额</li><li>{{el.leftLoaningMoney}}元</li></ul>"+
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
   url:'http://192.168.1.125:21000/web-api/recommendList/'+ raiseCapacity+'/'+raisePlanCapacity+'/'+normalCapacity,
   success:function(response){
       console.log(response);
       vmMain.xinshoubiao=response.data.xinshoubiao;
       vmMain.shengxinbao=response.data.shengxinbao;
       vmMain.zhitou=response.data.zhitou;
       avalon.each(vmMain.xinshoubiao,function(index,el){
           var a=el.loanStatus;
           if(a=='raising'){
               el.loanStatus='立即投标';
           }else if(a=='complete'){
               el.loanStatus='已完成-查看详情';
           }else if(a=='recheck'){
               el.loanStatus='待放款-查看详情';
           }else if(a=='repaying'){
               el.loanStatus='还款中';
               avalon('.xszx .box_button').attr('class','box_button_over');
           }else{
               el.loanStatus='其它-查看详情';
           }
       });
       avalon.each(vmMain.shengxinbao,function(index,el){
           var a=el.loanStatus;
           if(a=='raising'){
               el.loanStatus='立即投标';
           }else if(a=='complete'){
               el.loanStatus='已完成-查看详情';
           }else if(a=='recheck'){
               el.loanStatus='待放款-查看详情';
           }else if(a=='repaying'){
               el.loanStatus='还款中';
               avalon('.sxb .box_button').attr('class','box_button_over');
           }else{
               el.loanStatus='其它-查看详情';
           }
           var b=el.loanType.loanTypeId;
           if(b=='loan_type_1' || b=='loan_type_3'){
               el.loanType.loanTypeId='先息后本';
           }else if(b=='loan_type_2'){
               el.loanType.loanTypeId='到期还本';
           }else if(b=='loan_type_4' || b=='loan_type_5'){
               el.loanType.loanTypeId='到期还本';
           }
       });
       avalon.each(vmMain.zhitou,function(index,el){
           var a=el.loanStatus;
           if(a=='raising'){
               el.loanStatus='立即投标';
           }else if(a=='complete'){
               el.loanStatus='已完成-查看详情';
           }else if(a=='recheck'){
               el.loanStatus='待放款-查看详情';
           }else if(a=='repaying'){
               el.loanStatus='还款中';
               avalon('.ztxm .box_button').attr('class','box_button_over');
           }else{
               el.loanStatus='其它-查看详情';
           }
           var b=el.loanType.loanTypeId;
           if(b=='loan_type_1' || b=='loan_type_3'){
               el.loanType.loanTypeId='先息后本';
           }else if(b=='loan_type_2'){
               el.loanType.loanTypeId='到期还本';
           }else if(b=='loan_type_4' || b=='loan_type_5'){
               el.loanType.loanTypeId='到期还本';
           }
       });
   }
});

//home-news
var newsCapacity = 5;
var noticeCapacity = 5;
avalon.component("news",{
    template:(function(){
        var news="<div class=\"home-main\">"+
            "<div class=\"board news\">"+
            "<h3 class=\"news-title\">新闻中心</h3>"+
            "<span class=\"gengduo\"><a href=\"#\">更多...</a></span>"+
            "<div class=\"news-latest\">"+
            "<a ms-for='value in @newsCenter | limitBy(10) as items' ms-attr='{href:value.targetUrl}'><images ms-attr='{src:value.imgUrl}'/><label><span>福布斯中国公布”互联网金融50” 票据理财平台仅有海投汇</span></label></a>"+
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
    url:'http://192.168.1.125:21000/web-api/platformInfo'+ '/' + newsCapacity + '/' + noticeCapacity,
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
var vmInvestor=avalon.define({
    $id: "investor",
    data: []
});
$.ajax({
    url:'http://192.168.1.125:21000/web-api/investorSaid',
    success:function(data){
        var li_num = data.data.investorSaid.length;
        var html = '';
        var text = '';
        if(li_num >= 3){
            for(var i=0;i<3;i++){
                var picURL = data.data.investorSaid[i].headPicUrl;
                var userName = data.data.investorSaid[i].nickName;
                var position = data.data.investorSaid[i].work;
                var idClass = 'data-'+i;
                var imgClass = 'img-'+i;
                html = '<div class="investor-box">'+
                    '<div class="investor-img" id="'+ idClass +'">'+
                    '<img src="'+ picURL +'" alt=""/>'+
                    '<img class="investor-choose '+ imgClass +'" src="../src/images/index/investor-choose.png"/>'+
                    '</div>'+
                    '<div class="investor-name">'+
                    '<p>'+ userName +' '+ position +'</p>'+
                    '</div>'+
                    '</div>';
                $('.user-box1 .investor-modal').before(html);
            }
            for(var i=3;i<6;i++){
                var picURL = data.data.investorSaid[i].headPicUrl;
                var userName = data.data.investorSaid[i].nickName;
                var position = data.data.investorSaid[i].work;
                var idClass = 'data-'+i;
                var imgClass = 'img-'+i;
                html = '<div class="investor-box">'+
                    '<div class="investor-img" id="'+ idClass +'">'+
                    '<img src="'+ picURL +'" alt=""/>'+
                    '<img class="investor-choose '+ imgClass +'" src="../src/images/index/investor-choose.png"/>'+
                    '</div>'+
                    '<div class="investor-name">'+
                    '<p>'+ userName +' '+ position +'</p>'+
                    '</div>'+
                    '</div>';
                $('.user-box2 .investor-modal').before(html);
            }
            for(var i=0;i<3;i++){
                var message = data.data.investorSaid[i].leaveMsg;
                var idClass = 'data-'+i;
                text = '<div class="'+ idClass +'">'+
                    '<div class="investor-icon">'+
                    '<img src="../src/images/index/investor-icon.png" alt="">'+
                    '</div>'+
                    '<div class="investor-modal-txt">'+
                    '<p>'+ message +'</p>'+
                    '</div>'+
                    '</div>';
                $('.user-box1 .investor-modal').append(text);
            }
            for(var i=3;i<6;i++){
                var message = data.data.investorSaid[i].leaveMsg;
                var idClass = 'data-'+i;
                text = '<div class="'+ idClass +'">'+
                    '<div class="investor-icon">'+
                    '<img src="../src/images/index/investor-icon.png" alt="">'+
                    '</div>'+
                    '<div class="investor-modal-txt">'+
                    '<p>'+ message +'</p>'+
                    '</div>'+
                    '</div>';
                $('.user-box2 .investor-modal').append(text);
            }

            var mySwiper2 = new Swiper('.home-investor .swiper-container', {
                loop: true,
                simulateTouch : false,
                autoplay : 3000,
                // 前进后退 按钮
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev'
            });

            $('.home-investor .swiper-container').bind("mouseenter", function () {
                mySwiper2.stopAutoplay();
            }).bind("mouseleave", function () {
                mySwiper2.startAutoplay();
            });
        }else{
            for(var i=0;i<3;i++){
                var picURL = data.data.investorSaid[i].headPicUrl;
                var userName = data.data.investorSaid[i].nickName;
                var position = vdata.data.investorSaid[i].work;
                var idClass = 'data-'+i;
                var imgClass = 'img-'+i;
                html = '<div class="investor-box">'+
                    '<div class="investor-img" id="'+ idClass +'">'+
                    '<img src="'+ picURL +'" alt=""/>'+
                    '<img class="investor-choose '+ imgClass +'" src="../src/images/index/investor-choose.png"/>'+
                    '</div>'+
                    '<div class="investor-name">'+
                    '<p>'+ userName +' '+ position +'</p>'+
                    '</div>'+
                    '</div>';
                $('.user-box1 .investor-modal').before(html);
            }
            for(var i=0;i<3;i++){
                var message = data.data.investorSaid[i].leaveMsg;
                var idClass = 'data-'+i;
                text = '<div class="'+ idClass +'">'+
                    '<div class="investor-icon">'+
                    '<img src="../src/images/index/investor-icon.png" alt="">'+
                    '</div>'+
                    '<div class="investor-modal-txt">'+
                    '<p>'+ message +'</p>'+
                    '</div>'+
                    '</div>';
                $('.user-box1 .investor-modal').append(text);
            }

            $('.home-investor .swiper-button-box').css("display","none");
            var mySwiper = new Swiper ('.home-investor .swiper-container', {
                loop: true,
                simulateTouch : false
            });
        }

        $('.investor-img img:last-child').css("display","none");
        $('.investor-img .img-0').css("display","block");
        $('.investor-img .img-3').css("display","block");

        //鼠标移入
        $('.investor-img').bind("mouseenter",function(e){
            $(this).parent().siblings('.investor-box').children('.investor-img').children('img:last-child').css("display","none");
            $(this).children('.investor-choose').css("display","block");
            var id_class = $(this).attr('id');
            $('.'+id_class).siblings().css("display","none");
            $('.'+id_class).css("display","block");
        });
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

























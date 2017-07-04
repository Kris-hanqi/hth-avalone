var avalon = require('avalon');
var $ = require("jquery");
var mockjax = require("mockjax")($, window);

/*模拟接口*/
$.mockjax({
    url:'http://XXX/web-api/userCenterLeft',
    status:200,
    responseText:{
        MenuArray:[
            {
                accountMenu:"我的账户",
                Menu:[
                    {menuUrl:'userCenter_myAccount_accountSummary.html', menuName:'账户概览'},
                    {menuUrl:'userCenter_myAccount_transactionDetail.html', menuName:'交易明细'},
                    {menuUrl:'userCenter_myAccount_recharge.html', menuName:'充值'},//未开户不显示
                    {menuUrl:'userCenter_myAccount_withdraw.html', menuName:'提现'},//未开户不显示
                    {menuUrl:'userCenter_myAccount_settings.html', menuName:'账户设置'}
                ]
            },
            {
                accountMenu:"我的子账户",//有子账户显示
                Menu:[
                    {menuUrl:'userCenter_myChild_cashFlow.html', menuName:'交易记录'},
                    {menuUrl:'userCenter_myChild_investRecord.html', menuName:'投资记录'},
                    {menuUrl:'userCenter_myChild_withdraw.html', menuName:'提现'},
                    {menuUrl:'userCenter_myChild_settings.html', menuName:'账户设置'}
                ]
            },
            {
                accountMenu:"我的投资",
                Menu:[
                    {menuUrl:'userCenter_myInvest_investHistory.html', menuName:'投资记录'},
                    {menuUrl:'userCenter_myInvest_hPlan.html', menuName:'H计划'},//条件显示
                    {menuUrl:'userCenter_myInvest_transfer.html', menuName:'债权转让'}
                ]
            },
            {
                accountMenu:"我的借款",
                Menu:[
                    {menuUrl:'userCenter_myBorrow_borrowHistory.html', menuName:'借款记录'},
                    {menuUrl:'userCenter_myBorrow_recentPayments.html', menuName:'近期还款'}
                ]
            }
        ],
        userName:'普通123456'
    }
});

//account_left
var vmAccountLeft =avalon.define({
    $id: "accountLeftCtrl",
    userName:'',
    MenuArray:[]
});

$.ajax({
    url:"http://XXX/web-api/userCenterLeft",
    success:function(response){
        vmAccountLeft.userName=response.userName;
        vmAccountLeft.MenuArray=response.MenuArray;

        var str=window.location.href;
        if(str.lastIndexOf('/')!=-1){
            var navBar=str.substr(str.lastIndexOf('/')+1);
        }
        $(".mlnav li a").each(function(){
            url = $(this).attr('href');
            if(navBar == url){
                $(this).siblings().removeClass();
                $(this).addClass('mlhover');
            }
        });
    }
});

/* -- account_left --  */
avalon.component('account_left', {
    template: (function () {
        var AccountLeft ='<div class="center_left">'+
                            '<div class="account_person">'+
                                '<images class="person-images" src="images/userCenter/account_head_default.png" /> '+
                                '<a href="javascript:void(0);" class="person-name" ms-attr="{title: @userName}">{{@userName}}</a>'+
                                '<div class="person-ico-prove clearfix">'+
                                    '<a href="userCenter_openAccount.html" class="person_ico1" title="开户"></a>'+
                                    '<a href="#" class="person_ico2" title="绑定银行卡"></a>'+
                                    '<a href="userCenter_bindEmail.html" class="person_ico3" title="绑定邮箱"></a>'+
                                    '<a href="userCenter_changePwd.html" class="person_ico4" title="修改登录密码"></a>'+
                                '</div>'+
                                '<div class="person-quota clearfix">'+
                                    '<a href="userCenter_coupon.html" class="person-qt01"></a>'+
                                    '<a href="userCenter_webNotice.html" class="person-qt02"></a>'+
                                    '<a href="userCenter_recommend.html" class="person-qt03"></a>'+
                                '</div>'+
                            '</div>'+
                            '<div class="account_nav" ms-for="el in @MenuArray">'+
                                '<h3>{{el.accountMenu}}</h3>'+
                                '<ul class="mlnav">'+
                                    '<li ms-for="elem in @el.Menu">'+
                                        '<a ms-attr="{href: elem.menuUrl}"><i></i>{{elem.menuName}}</a>'+
                                    '</li>'+
                                '</ul>'+
                            '</div>'+
                        '</div>';
        return AccountLeft;
    }).call(this),
    defaults: {
        userName:'',
        MenuArray:[]
    }
});




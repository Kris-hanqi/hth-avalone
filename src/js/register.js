var avalon = require('avalon');
var $ = require("jquery");
var mockjax = require("mockjax")($, window);


//图片验证码ajax请求
function imgCodeAjax() {
    $.ajax({
        url: 'http://192.168.1.91:21000/web-api/picCaptcha/webRegist',
        timeout: 5000,
        type: 'get',
        async: false,
        success: function (response) {
            if(response.meta.code == 200) {
                $('#picCodeId').val(response.data.identifyCode);
                var picBase = response.data.pic;
                $('#imgCode_img_s').attr('src','data:image/png;base64,' + picBase);
            }else {
                alert(response.meta.message);
            }
        },
        error: function (error) {

        },
        complete : function(XMLHttpRequest,status){ //请求完成后最终执行参数
            if(status=='timeout'){
                imgCodeAjax.abort();    //超时后请求中断
                alert("请求超时");
            }
        }
    });
};

//提示框3秒之后消失
function promptBoxHide(ele) {
    setTimeout(function () {
        ele.removeClass('show');
    },3000);
};

//密码明文暗文
$(function () {
    $('.login_txt02_eye').on('click',function () {
        // alert(1);
        $(this).hasClass('login_txt02_eye_close') ? $(this).removeClass('login_txt02_eye_close').addClass('login_txt02_eye_open') : $(this).removeClass('login_txt02_eye_open').addClass('login_txt02_eye_close');
        var typeVal = $('#userPassward').attr('type') == 'password' ? 'text' : 'password';
        $('#userPassward').attr('type',typeVal);
    })
});

//显示推荐人手机号输入框
$(function () {
    var invitedInp = $('.register_message_invited_s input[type="checkbox"]');
    invitedInp.change(function () {
        var invitedInpBool = $(this).is(':checked');
        if(invitedInpBool === true) {
            $('.register_message01_s').css('display','block');
        }else {
            $('.register_message01_s').css('display','none');
        }
    })
});

//注册按钮置灰
$(function(){
    var register = $('.register_btn'),
        agreeInp = $('#checkbox[type="checkbox"]');
    agreeInp.change(function(){
        var agreeInpBool = $(this).is(':checked');
        if(agreeInpBool === true) {
            register.removeClass('register_btn_gray').addClass('register_btn_blue');
            register.removeAttr('disabled');
        }else {
            register.removeClass('register_btn_blue').addClass('register_btn_gray');
            register.attr('disabled','true');
        }
    });
});


//进入页面先发一次图片验证码的ajax请求
$(function () {
    imgCodeAjax();
});

//手机号验证
function userPhoneValidate() {
    var userPhoneVal = $('#userPhone').val();
    if(userPhoneVal == "") {
        $('.register_message .promptBox_s01').html('<i>'+'</i>'+'手机号不可以为空。');
        $('.register_message .promptBox_s01').addClass('show');
        promptBoxHide($('.register_message .promptBox_s01'));
        return false;
    }else {
        if(userPhoneVal.length < 11) {
            $('.register_message span.promptBox_s01').html('<i>'+'</i>'+'请输入正确的手机号。');
            $('.register_message .promptBox_s01').addClass('show');
            promptBoxHide($('.register_message .promptBox_s01'));
            return false;
        }else {
            $('.register_message .promptBox_s01').removeClass('show');
        }
    }
    $.ajax({
        url: 'http://192.168.1.91:21000/web-api/mobileRegistVerify/' + userPhoneVal + '',
        type: 'get',
        success: function (res) {
            if(res.data.isExist == 1) {
                $('.register_message span.promptBox_s01').html('<i>'+'</i>'+'手机号:'+userPhoneVal+'已经存在');
                $('.register_message .promptBox_s01').addClass('show');
                promptBoxHide($('.register_message .promptBox_s01'));
                return false;
            }else {
                $('.register_message .promptBox_s01').removeClass('show');
            }
        },
        error: function () {

        }
    });
    return true;
};
$(function () {
    $('#userPhone').blur(function (event) {
        event.preventDefault();
        userPhoneValidate();
    });
});

//密码验证
function userPasswordValidate() {
    var userPwdVal = $('#userPassward').val();
    if(userPwdVal.length < 1) {
        $('.register_message .promptBox_s02').html('<i>'+'</i>'+'密码不可以为空。');
        $('.register_message .promptBox_s02').addClass('show');
        promptBoxHide($('.register_message .promptBox_s02'));
        return false;
    }else {
        if (!/(^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$)/.test(userPwdVal)) {
            $('.register_message .promptBox_s02').html('<i>'+'</i>'+'密码是数字和字母的组合，长度为6-16位。').css('width','232px');
            $('.register_message .promptBox_s02').addClass('show');
            promptBoxHide($('.register_message .promptBox_s02'));
            return false;
        }else {
            $('.register_message .promptBox_s02').removeClass('show');
        }
    };
    return true;
};
$(function () {
    $('#userPassward').blur(function (event) {
        event.preventDefault();
        userPasswordValidate();
    });
});

//图片验证码为空验证
function imgCodeValidate() {
    var imgCodeVal = $('#imgCode').val();
    if(imgCodeVal.length < 1) {
        $('.register_message .promptBox_s03').html('<i>'+'</i>'+'图片验证码不可以为空。');
        $('.register_message .promptBox_s03').addClass('show');
        promptBoxHide($('.register_message .promptBox_s03'));
        return false;
    }else {
        $('.register_message .promptBox_s03').removeClass('show');
    };
    return true;
};
$(function () {
    $('#imgCode').blur(function () {
        event.preventDefault();
        imgCodeValidate();
    });
});

//图片验证码请求
$(function () {
    $('#imgCode_img_s').on('click',function (e) {
        imgCodeAjax();
    });
});

//短信验证码为空验证
function smsCodeValidate() {
    var smsCodeVal = $('#smsCode').val();
    if(smsCodeVal.length < 1) {
        $('.register_message .promptBox_s04').html('<i>'+'</i>'+'验证码不可以为空。');
        $('.register_message .promptBox_s04').addClass('show');
        promptBoxHide($('.register_message .promptBox_s04'));
        return false;
    }else {
        $('.register_message .promptBox_s03').removeClass('show');
    };
    return true;
};
$(function () {
    $('#smsCode').blur(function () {
        event.preventDefault();
        smsCodeValidate();
    });
});

//获取短信验证码
$(function () {
    var sendTime;
    function time(ele) {
        if(sendTime == 0) {
            ele.removeAttr('disabled');
            ele.text("获取短信验证码");
            ele.addClass('getSmsCode_s');
        }else {
            ele.attr('disabled',true);
            ele.text("已发送..." + sendTime + "s");
            ele.removeClass('getSmsCode_s');
            sendTime --;
            setTimeout(function () {
                time(ele);
            },1000);
        }
    }
    $('.getSmsCode').on('click',function (event) {
        event.preventDefault();
        var flag = true;

        //手机号验证
        var userPhoneVal = $('#userPhone').val();
        if(userPhoneVal == "") {
            $('.register_message .promptBox_s01').html('<i>'+'</i>'+'手机号不可以为空。');
            $('.register_message .promptBox_s01').addClass('show');
            promptBoxHide($('.register_message .promptBox_s01'));
            flag = false;
        }else {
            if(userPhoneVal.length < 11) {
                $('.register_message span.promptBox_s01').html('<i>'+'</i>'+'请输入正确的手机号。');
                $('.register_message .promptBox_s01').addClass('show');
                promptBoxHide($('.register_message .promptBox_s01'));
                flag = false;
            }else {
                $('.register_message .promptBox_s01').removeClass('show');
            }
        };

        if (flag == false) {
            flag = true;
            return false;
        };

        var postData = {
            'userPhone': $('#userPhone').val().toString().trim(),
            'identifyCode': $('#picCodeId').val(),
            'picCode': $('#imgCode').val(),
            'picType': 'webRegist',
            'smsType': 'register_by_mobile_number'
        };
        $.ajax({
            url: 'http://192.168.1.91:21000/web-api/generateRegisterAuthCode',
            type: 'post',
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify(postData),
            dataType: 'json',
            success: function (response) {
                // console.log(response);
                if(response.meta.code == 200) {
                    sendTime = 60;
                    time($('.getSmsCode'));

                }else {
                    alert(response.meta.message);
                }
            },
            error: function (error) {

            }
        })
    });
});

//注册
$(function () {
    $('.register_btn').on('click',function () {
        var isValidate = true;
        //手机号验证
        if(!userPhoneValidate()) {
            isValidate = false;
        }
        //密码验证
        if(!userPasswordValidate()) {
            isValidate = false;
        }
        //图片验证码验证
        if(!imgCodeValidate()) {
            isValidate = false;
        }
        //短信验证码验证
        if(!smsCodeValidate()) {
            isValidate = false;
        }
        if(isValidate == false) {
            return isValidate;
        };
        var registerPostData = {
            userPhone: $('#userPhone').val().toString().trim(),
            userPassword: $('#userPassward').val(),
            smsCode: $('#smsCode').val(),
            referrerPhone: $('#referrerPhone').val(),
            channel: ''
        };
        $.ajax({
            url: 'http://192.168.1.91:21000/web-api/register',
            type: 'post',
            contentType: "application/json;charset=UTF-8",
            dataType: 'json',
            data: JSON.stringify(registerPostData),
            success: function (response) {
                if(response.meta.code != 200) {
                    alert(response.meta.message);
                }
            },
            error: function () {

            }
        })
    })
});


avalon.component('register', {
    template: (function () {
        var registerContCtrl = '<div class="h-main">' +
            '<form id="form" class="register">' +
            '<div class="box_title">' +
            '<a href="login.html">会员登录</a>' +
            '<a style="width:1px; height:24px; margin-top: 8px;border-left:1px solid #ccc;"></a>' +
            '<a href="javascript:void(0)">' +
            '<span class="thisRegister">快速注册</span>' +
            '</a>' +
            '</div>' +
            '<div class="register_box">' +
            '<div class="register_message">' +
            '<i class="userPhone_bg"></i>' +
            '<input class="userPhone" id="userPhone" type="text" maxlength="11" placeholder="请输入手机号码"/>' +
            '<span class="promptBox_s promptBox_s01"></span>' +
            '</div>' +
            '<div class="register_message">' +
            '<i class="referrerPhone_bg"></i>' +
            '<input class="userPassward" id="userPassward" type="password" maxlength="16" placeholder="6至16位字母和数字组合"/>' +
            '<span class="login_txt02_eye login_txt02_eye_close"></span>' +
            '<span class="promptBox_s promptBox_s02"></span>' +
            '</div>' +
            '<div class="register_message">' +
            '<i class="imgCode_bg"></i>' +
            '<input class="imgCode" id="imgCode" type="text"  placeholder="请输入图片验证码"/>' +
            '<input type="text" id="picCodeId" style="display: none">' +
            '<span class="promptBox_s promptBox_s03"></span>' +
            '<img style="width: 108px;height: 39px;margin-top: 12px; margin-left: 5px;cursor: pointer" alt="点击刷新" src="" id="imgCode_img_s">' +
            '</div>' +
            '<div class="register_message">' +
            '<i class="smsCode_bg"></i>' +
            '<input class="smsCode" id="smsCode" type="text" maxlength="6" placeholder="请输入验证码"/>' +
            '<span class="promptBox_s promptBox_s04"></span>' +
            '<button type="button" class="getSmsCode getSmsCode_s" >获取短信验证码</button>' +
            '</div>' +
            '<div class="register_message register_message_invited_s" style="padding-top: 13px">' +
            '<input type="checkbox" id="form:choose" name="form:choose" style="margin-top: 1px;width: 12px;height: 12px">' +
            '填写邀请码' +
            '</div>' +
            '<div class="register_message register_message01_s" style="display: none">' +
            '<i class="referrerPhone_bg" style="top: 17px;"></i>' +
            '<input class="referrerPhone" id="referrerPhone" type="text" maxlength="50" placeholder="请输入推荐人手机号（选填）" style="margin-bottom: 10px;margin-top: 8px;"/>' +
            '</div>' +
            '<div class="register_message">' +
            '<button type="button" class="register_btn register_btn_blue">注册</button>' +
            '</div>' +
            '<div class="register_message">' +
            '<p class="serviceAgreement reg">' +
            '<input id="checkbox" type="checkbox" checked="checked" style="width: 12px;height: 12px"/>' +
            '我已经阅读并同意 <a href="https://www.htouhui.com/hetong/registerService" target="_blank">《网站服务协议》</a>' +
            '</p>' +
            '</div>' +
            '</div>' +
            '</form>' +
            '<div class="clear"></div>' +
            '</div>'

        return registerContCtrl;
    }).call(this),
    defaults: {
    }
});

var vmRegister = avalon.define({
    $id: "register"
})












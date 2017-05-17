var avalon = require('avalon');
var $ = require("jquery");
var backTop = require("backTop");
var mockjax = require("mockjax")($, window);

/*兼容IE placeholder*/
var JPlaceHolder = {
    //检测
    _check : function(){
        return 'placeholder' in document.createElement('input');
    },
    //初始化
    init : function(){
        if(!this._check()){
            this.fix();
        }
    },
    //修复
    fix : function(){
        $(':input[placeholder]').each(function(index, element) {
            var self = $(this), txt = self.attr('placeholder');
            self.wrap($('<div></div>').css({position:'relative', zoom:'1', border:'none', background:'none', padding:'none', margin:'none'}));
            var pos = self.position(), h = self.outerHeight(true)+9, paddingleft = self.css('padding-left');
            var holder = $('<span></span>').text(txt).css({position:'absolute', left:pos.left, top:pos.top, height:h, lineHeight:h+'px', paddingLeft:paddingleft, color:'#aaa'}).appendTo(self.parent());
            self.focusin(function(e) {
                holder.hide();
            }).focusout(function(e) {
                if(!self.val()){
                    holder.show();
                }
            });
            holder.click(function(e) {
                holder.hide();
                self.focus();
            });
        });
    }
};
//执行
$(function(){
    JPlaceHolder.init();
});


$(function(){
    /*输入框得到焦点隐藏错误信息*/
    $(".inputClass").focus(function() {
        var labelId = $(this).attr("id");//通过输入框找到对应的id
        $("#" + labelId).siblings('.hint_message').css('display','none');
    });

    /*输入框失去焦点进行校验*/
    $(".inputClass").blur(function() {
        var id = $(this).attr("id");//获取当前输入框的id
        var funName = "validate" + id.substring(0,1).toUpperCase() + id.substring(1) + "()";//得到对应的校验函数名
        eval(funName);//执行函数调用
    });

    /*表单提交时进行校验*/
    $("#registerForm").submit(function(e) {
        if ( e && e.preventDefault ) {
            e.preventDefault();
        } else {
            window.event.returnValue = false;
        }

        var bool = true;//表示校验通过
        if(!validateUserPhone()) {
            bool = false;
        }
        if(!validateUserPassward()) {
            bool = false;
        }
        return bool;
    });
});


/*显示错误信息*/
function hint(className){
    $(className).css('display','block');
}

/*
 *手机号校验方法
 */
function validateUserPhone() {
    var id = "userPhone";
    var userPhone=$('#userPhone').val();
    /*1. 非空校验*/
    if(userPhone == '') {
        hint('.hint_message_userPhone');
        return false;
    }
    /* 2. 格式校验*/
    if((userPhone != '') && (!(/^1[34578]\d{9}$/.test(userPhone)))) {
        $('.hint_message_userPhone p').html('手机号格式不正确');
        hint('.hint_message_userPhone');
        return false;
    }
    /*
     /!* 3. 是否注册校验*!/
     $.ajax({
     url:"/goods/UserServlet",//要请求的servlet
     data:{method:"ajaxValidateLoginname", loginname:value},//给服务器的参数
     type:"POST",
     dataType:"json",
     async:false,//是否异步请求，如果是异步，那么不会等服务器返回，我们这个函数就向下运行了。
     cache:false,
     success:function(result) {
     if(!result) {
     //如果校验失败
     $('.hint_message_userPhone p').html('手机号已注册');
     hint('.hint_message_userPhone');
     return false;
     }
     }
     });*/
    return true;
}

/*
 * 登录密码校验方法
 */
function validateUserPassward() {
    var id = "userPassward";
    var userPassward=$('#userPassward').val();
    /*1. 非空校验*/
    if(userPassward == '') {
        hint('.hint_message_userPassward');
        return false;
    }
    /*2. 格式校验*/
    if((userPassward != '') && (!(/^(?![A-Za-z]+$)(?![0-9]+$)[A-Za-z0-9]{6,16}$/.test(userPassward)))) {
        $('.hint_message_userPassward p').html('密码格式不正确');
        hint('.hint_message_userPassward');
        return false;
    }
    return true;
}

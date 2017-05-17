var avalon = require('avalon');
var $ = require("jquery");
var backTop = require("backTop");
var mockjax = require("mockjax")($, window);

/*����IE placeholder*/
var JPlaceHolder = {
    //���
    _check : function(){
        return 'placeholder' in document.createElement('input');
    },
    //��ʼ��
    init : function(){
        if(!this._check()){
            this.fix();
        }
    },
    //�޸�
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
//ִ��
$(function(){
    JPlaceHolder.init();
});


$(function(){
    /*�����õ��������ش�����Ϣ*/
    $(".inputClass").focus(function() {
        var labelId = $(this).attr("id");//ͨ��������ҵ���Ӧ��id
        $("#" + labelId).siblings('.hint_message').css('display','none');
    });

    /*�����ʧȥ�������У��*/
    $(".inputClass").blur(function() {
        var id = $(this).attr("id");//��ȡ��ǰ������id
        var funName = "validate" + id.substring(0,1).toUpperCase() + id.substring(1) + "()";//�õ���Ӧ��У�麯����
        eval(funName);//ִ�к�������
    });

    /*���ύʱ����У��*/
    $("#registerForm").submit(function(e) {
        if ( e && e.preventDefault ) {
            e.preventDefault();
        } else {
            window.event.returnValue = false;
        }

        var bool = true;//��ʾУ��ͨ��
        if(!validateUserPhone()) {
            bool = false;
        }
        if(!validateUserPassward()) {
            bool = false;
        }
        return bool;
    });
});


/*��ʾ������Ϣ*/
function hint(className){
    $(className).css('display','block');
}

/*
 *�ֻ���У�鷽��
 */
function validateUserPhone() {
    var id = "userPhone";
    var userPhone=$('#userPhone').val();
    /*1. �ǿ�У��*/
    if(userPhone == '') {
        hint('.hint_message_userPhone');
        return false;
    }
    /* 2. ��ʽУ��*/
    if((userPhone != '') && (!(/^1[34578]\d{9}$/.test(userPhone)))) {
        $('.hint_message_userPhone p').html('�ֻ��Ÿ�ʽ����ȷ');
        hint('.hint_message_userPhone');
        return false;
    }
    /*
     /!* 3. �Ƿ�ע��У��*!/
     $.ajax({
     url:"/goods/UserServlet",//Ҫ�����servlet
     data:{method:"ajaxValidateLoginname", loginname:value},//���������Ĳ���
     type:"POST",
     dataType:"json",
     async:false,//�Ƿ��첽����������첽����ô����ȷ��������أ�����������������������ˡ�
     cache:false,
     success:function(result) {
     if(!result) {
     //���У��ʧ��
     $('.hint_message_userPhone p').html('�ֻ�����ע��');
     hint('.hint_message_userPhone');
     return false;
     }
     }
     });*/
    return true;
}

/*
 * ��¼����У�鷽��
 */
function validateUserPassward() {
    var id = "userPassward";
    var userPassward=$('#userPassward').val();
    /*1. �ǿ�У��*/
    if(userPassward == '') {
        hint('.hint_message_userPassward');
        return false;
    }
    /*2. ��ʽУ��*/
    if((userPassward != '') && (!(/^(?![A-Za-z]+$)(?![0-9]+$)[A-Za-z0-9]{6,16}$/.test(userPassward)))) {
        $('.hint_message_userPassward p').html('�����ʽ����ȷ');
        hint('.hint_message_userPassward');
        return false;
    }
    return true;
}

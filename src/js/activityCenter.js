var avalon = require('avalon');
var $ = require("jquery");
var mockjax = require("mockjax")($, window);


/*模拟接口*/
$.mockjax({
    url: 'http://XXX/web-api/activityCenter',
    status: 200,
    responseText: {
        "data":[
            {
                actUrl:"#",
                title:"年末放送-礼品礼金拿到手软",
                actPicUrl:"img/activityCenter/activity01.jpg",
                actDate:"活动时间：2015-11-25至2015-12-06"
            },
            {
                actUrl:"#",
                title:"一锤定金满标送现金",
                actPicUrl:"img/activityCenter/activity02.jpg",
                actDate:"活动时间：2015-11-25至2015-12-06"
            },
            {
                actUrl:"#",
                title:"年末放送-礼品礼金拿到手软",
                actPicUrl:"img/activityCenter/activity01.jpg",
                actDate:"活动时间：2015-11-25至2015-12-06"
            },
            {
                actUrl:"#",
                title:"一锤定金满标送现金",
                actPicUrl:"img/activityCenter/activity02.jpg",
                actDate:"活动时间：2015-11-25至2015-12-06"
            },
            {
                actUrl:"#",
                title:"一锤定金满标送现金",
                actPicUrl:"img/activityCenter/activity02.jpg",
                actDate:"活动时间：2015-11-25至2015-12-06"
            },
            {
                actUrl:"#",
                title:"年末放送-礼品礼金拿到手软",
                actPicUrl:"img/activityCenter/activity01.jpg",
                actDate:"活动时间：2015-11-25至2015-12-06"
            },
            {
                actUrl:"#",
                title:"一锤定金满标送现金",
                actPicUrl:"img/activityCenter/activity02.jpg",
                actDate:"活动时间：2015-11-25至2015-12-06"
            },
            {
                actUrl:"#",
                title:"一锤定金满标送现金",
                actPicUrl:"img/activityCenter/activity02.jpg",
                actDate:"活动时间：2015-11-25至2015-12-06"
            }
        ]
    }
});

//加载更多
$(function(){
    /*初始化*/
    var counter = 0; /*计数器*/
    var pageStart = 0; /*offset*/
    var pageSize = 3; /*size*/

    /*首次加载*/
    getData(pageStart, pageSize);

    /*监听加载更多*/
    $(document).on('click', '.loadMore', function(){
        counter ++;
        pageStart = counter * pageSize;

        getData(pageStart, pageSize);
    });
});

function getData(offset,size){
    $.ajax({
        type: 'GET',
        url: 'http://XXX/web-api/activityCenter',
        success: function(reponse){

            var data = reponse.data;
            var sum = reponse.data.length;

            var result = '';

            if(sum - offset < size ){
                size = sum - offset;
            }

            for(var i=offset; i< (offset+size); i++){
                result += ' <div class="act_list">'+
                            '<a href="'+ data[i].actUrl +'" target="_blank">'+
                                '<h3>'+ data[i].title +'</h3>'+
                                '<div class="act_img">'+
                                    '<img src="'+ data[i].actPicUrl +'" />'+
                                    '<div class="gray_hover" style="display: none;">'+
                                        '<span>点&nbsp;击&nbsp;查&nbsp;看&nbsp;详&nbsp;情</span>'+
                                    '</div>'+
                                '</div>'+
                                '<label>'+ data[i].actDate +'</label>'+
                            '</a>'+
                        '</div>';
            }

            $('.list').append(result);

            /*隐藏显示loadMore按钮*/
            if ( (offset + size) >= sum){
                $(".loadMore").hide();
            }else{
                $(".loadMore").show();
            }
        },
        error: function(xhr, type){
            alert('Ajax error!');
        }
    });
};

//鼠标移入效果
$(function(){
    $("#activityList").delegate(".act_list","mouseover",function(){
        $(this).find(".gray_hover").show();
    });
    $("#activityList").delegate(".act_list","mouseout",function(){
        $(this).find(".gray_hover").hide();
    });
});

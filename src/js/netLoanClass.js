var avalon = require('avalon');
var $ = require("jquery");
var backTop = require("backTop");
var mockjax = require("mockjax")($, window);

/*模拟接口*/
$.mockjax({
    url: 'http://XXX/web-api/netLoanClass',
    status: 200,
    responseText: {
        "data":[
                {href:"https://www.htouhui.com/education_column_details/20170322055655", title:"互联网金融海外上市仍是首选 最大难点在这", time:"2017-03-22"},
                {href:"https://www.htouhui.com/education_column_details/20170322053032", title:"金融科技颠覆全世界？惊人失业潮已席卷华尔街", time:"2017-03-22"},
                {href:"https://www.htouhui.com/education_column_details/20170307071951", title:"网贷资金存管的正确姿势：解答实际操作的一些疑虑", time:"2017-03-07"},
                {href:"https://www.htouhui.com/education_column_details/20170223071312", title:"银监会发布《网络借贷资金存管业务指引》", time:"2017-02-23"},
                {href:"https://www.htouhui.com/education_column_details/20170123104227", title:"如何正确的看待P2P这个行业", time:"2017-01-23"},
                {href:"https://www.htouhui.com/education_column_details/20170123094326", title:"2017年P2P及其他市场渠道的投资攻略", time:"2017-01-23"},
                {href:"https://www.htouhui.com/education_column_details/20170116053434", title:"北京网贷排查结束在即 未来将实施评级管理", time:"2017-01-16"},
                {href:"https://www.htouhui.com/education_column_details/20170116050910", title:"2016网贷行业年度报告", time:"2017-01-16"}
        ],
        "pageCount":5,
        "pageNum":1
    }
});
$(function(){
    var pageNum=1;//请求页码
    var pageCount;//总页数
    pList(pageNum);

    //页码点击事件
    $(".pages").on('click','a',function(e){
        e.preventDefault();//清除a标记的默认行为
        var index=$(this).index();//获取用户点击的a标记的下标
        if(index==0){//用户点击的为上一页
            if(pageNum==1) return;
            pageNum--;
        }else if(index==pageCount+1){//当用户点击的是下一页的时候
            if(pageNum==pageCount) return;
            pageNum++;
        }else{//点击页码的时候
            pageNum=index;
        }
        pList(pageNum);
    });

    function pList(pageNum){
        $.ajax({
            type:'post',
            url:'http://XXX/web-api/netLoanClass',
            data:{pageNum:pageNum},
            success:function(d){
                var data= d.data;//列表数据
                var n=data.length;//列表长度

                //生成列表
                var listHtml='';
                for(var i=0;i<n;i++){
                    listHtml+='<li>'
                        +'<a href="'+data[i].href+'">'+ data[i].title +'</a>'
                        +'<span>'+data[i].time+'</span>'
                        +'</li>';
                }
                $('.list').html(listHtml);

                //动态生成页码
                pageCount = d.pageCount;
                var pageHtml = '<a href="">上一页</a>';
                for(var i=1;i < pageCount+1;i++){
                    pageHtml += '<a href="">'+ i +'</a>';
                }
                pageHtml += '<a href="">下一页</a>';
                $('.pages').html(pageHtml);
                //让当前页码高亮
                $('.pages a').eq(d.pageNum).addClass('cur');
                //为上一页下一页添加样式
                if(d.pageNum==1){
                    $('.pages a:first').addClass('default');
                }
                if(d.pageNum== d.pageCount){
                    $('.pages a:last').addClass('default');
                }
            }
        });
    }
});






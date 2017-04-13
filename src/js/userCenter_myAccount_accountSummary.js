var avalon = require('avalon');
var $ = require("jquery");
var mockjax = require("mockjax")($, window);
var echarts = require("echarts");

//银行卡center_summary
var vmCenterSummary=avalon.define({
    $id:"centerSummaryCtrl",
    bankCard: {}
});

//资产信息center_feature
var vmCenterFeature=avalon.define({
    $id:"centerFeatureCtrl",
    "userMessage":[]
});

//交易记录
var vmSlideBox=avalon.define({
    $id:"slideBoxCtrl",
    "tradingRecord":[]
});

$.mockjax({
    url:'http://XXX/web-api/userCenter_myAccount_accountSummary',
    status:200,
    responseText:{
        "bankCard": {cardNumber:"1111 1111 1111 1111 111",availableBalance:"222"},
        "userMessage":[
            {name:"总资产","money":"23423.23"},
            {name:"待收本金","money":"23423.23"},
            {name:"待收利息","money":"23423.23"},
            {name:"冻结金额","money":"23423.23"}
        ],
        "investmentAmount":[
            {value:"200",name:"升薪宝"},
            {value:"500",name:"直投项目"},
            {value:"1000",name:"H计划"}
        ],
        "monthIncome":[
            {value:"0",time:"2016-10"},
            {value:"0",time:"2016-11"},
            {value:"100",time:"2016-12"},
            {value:"200",time:"2017-01"},
            {value:"5000",time:"2017-02"},
            {value:"0",time:"2017-03"},
            {value:"0",time:"2017-04"}
        ],
        "tradingRecord":[
            {time:"2017-03-29 14:38:26",type:"充值成功",changeAmount:"+100",availableBalance:"585.18",managementPlatform:"江西银行",remark:"充值成功"},
            {time:"2017-03-29 14:38:26",type:"充值成功",changeAmount:"+100",availableBalance:"585.18",managementPlatform:"江西银行",remark:"充值成功"},
            {time:"2017-03-29 14:38:26",type:"充值成功",changeAmount:"+100",availableBalance:"585.18",managementPlatform:"江西银行",remark:"充值成功"},
            {time:"0017-02-15 18:15:03",type:"借款放款",changeAmount:"29,700",availableBalance:"300.96",managementPlatform:"江西银行",remark:"投资成功，取出投资金额, 借款ID：20170214001159"},
            {time:"0017-02-15 18:15:03",type:"借款放款",changeAmount:"29,700",availableBalance:"300.96",managementPlatform:"江西银行",remark:"投资成功，取出投资金额, 借款ID：20170214001159"},
            {time:"0017-02-15 18:15:03",type:"借款放款",changeAmount:"29,700",availableBalance:"300.96",managementPlatform:"江西银行",remark:"投资成功，取出投资金额, 借款ID：20170214001159"}
        ]
    }
});


$.ajax({
    url:'http://XXX/web-api/userCenter_myAccount_accountSummary',
    success:function(response){
        vmSlideBox.tradingRecord = response.tradingRecord;
        vmCenterSummary.bankCard = response.bankCard;
        vmCenterFeature.userMessage = response.userMessage;

        /*点击眼睛显示金额或隐藏金额*/
        var status=true;
        var orignCardNo=$("#cardNo").text();
        var maskCardNo=function(orignCardNo){
            var suffix=orignCardNo.substr(-4,4);
            var maskStr='**** **** ******';
            return maskStr+suffix;
        };
        $("#eyes").click(function(){
            if(status){
                $(".plaintext").hide();
                $(".mask").show();
                $("#cardNo").text(maskCardNo(orignCardNo));
                status=false;
            }else{
                $(".mask").hide();
                $(".plaintext").show();
                $("#cardNo").text(orignCardNo);
                status=true;
            }
        });

        //饼状图
        var dataPie=response.investmentAmount;
        var labels=[];
        for(var i= 0;i<dataPie.length;i++){
            labels.push(dataPie[i].name);
        }
        var myChartPie = echarts.init(document.getElementById('pieChart'));
        var optionPie = {
            title : {
                text: '投资金额',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: labels
            },
            series : [
                {
                    name:'投资金额',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:dataPie,
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ],
            color:['rgb(40, 117, 217)','rgb(254, 110, 76)','rgb(229, 229, 229)']
        };
        myChartPie.setOption(optionPie);

        //柱状图
        var dataBar=response.monthIncome;
        var times=[],values=[];
        for(var j= 0;j<dataBar.length;j++){
            times.push(dataBar[j].time);
            values.push(dataBar[j].value);
        }
        var myChartBar = echarts.init(document.getElementById('barChart'));
        var optionBar = {
            title : {
                text: '每月收益额',
                x:'center'
            },
            color: ['#3398DB'],
            tooltip : {
                trigger: 'axis',
                axisPointer : {
                    type : 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : times,
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLabel:{
                        interval:0
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'每月收益额',
                    type:'bar',
                    barWidth: '60%',
                    data:values
                }
            ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChartBar.setOption(optionBar);


    }
});

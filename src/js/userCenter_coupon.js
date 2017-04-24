var avalon = require('avalon');
var $ = require("jquery");
var mockjax = require("mockjax")($, window);


$.mockjax({
    url:'http://XXX/web-api/userCenter_coupon',
    status:200,
    responseText:{
        AvailableCoupon:"1",
        usedCoupon:"2",
        coupon:[
            {
                getTime:'2017-02-27 09:00:05',
                couponName:'生日送1%加息券',
                couponType:'加息券',
                useCondition:'投资100元可用，最高100000元',
                validUntil:'2017-03-30 09:00:05',
                state:'超期',
                value:'	1%'
            },
            {
                getTime:'2017-02-27 09:00:05',
                couponName:'100元现金券',
                couponType:'现金券',
                useCondition:'投资50000元可用',
                validUntil:'2017-03-30 09:00:05',
                state:'超期',
                value:'100元'
            }
        ]
    }
});

var vmCoupon =avalon.define({
    $id: "coupon",
    AvailableCoupon:"",
    usedCoupon:"",
    coupon:[]
});

$.ajax({
    url:'http://XXX/web-api/userCenter_coupon',
    success:function(response){
        vmCoupon.AvailableCoupon=response.AvailableCoupon;
        vmCoupon.usedCoupon=response.usedCoupon;
        vmCoupon.coupon=response.coupon;
    }
});

var avalon = require('avalon');
var $ = require("jquery");
var mockjax = require("mockjax")($, window);

//合作伙伴

/*模拟接口*/
$.mockjax({
    url:"http://XXX/web-api/aboutUs",
    status: 200,
    responseText:{
        "aboutPartners" : {
            partnerArray : [
                {
                    partnerPic:"img/aboutUs/partner-sky.jpg",
                    partnerDesc:["空中网是中国领先的网络游戏研发商和运营商，致力于为中国及海外互联网用户提供高品质的大型在线游戏服务，同时为中国手机用户提供多元化的无线娱乐服务。公司于2004年在美国纳斯达克上市（NASDAQ：KZ），目前公司业务覆盖互联网游戏、手机游戏以及无线增值三大领域。旗下无线增值业务连续多年位居行业之首。"]
                },
                {
                    partnerPic:"img/aboutUs/partner-sina.jpg",
                    partnerDesc:["新浪公司是一家服务于中国及全球华人社群的网络媒体公司。新浪通过门户网站新浪网(SINA.com)、移动门户手机新浪网(SINA.cn)和社交网络服务及微博客服务新浪微博(Weibo.com)组成的数字媒体网络，帮助广大用户通过互联网和移动设备获得专业媒体和用户自生成的多媒体内容(UGC)并与友人进行兴趣分享。香港新浪、台北新浪、北美新浪等覆盖全球华人社区的全球最大中文门户网站，2012年11月新浪注册用户已突破4亿。","新浪通过上述主营业务及其他业务线向广大用户提供包括移动增值服务(MVAS)、网络视频、音乐流媒体、网络游戏、相册、博客、电子邮件、分类信息、收费服务、电子商务和企业服务在内的一系列服务。" ]
                },
                {
                    partnerPic:"img/aboutUs/sec-jiangxi.jpg",
                    partnerDesc:["海投汇平台依据《网络借贷信息中介机构业务活动管理暂行办法》的规定，正式接入江西银行资金存管系统，为用户带来更安全、透明的服务。客户可通过网银、手机银行等充值方式，方便快捷。海投汇平台只负责匹配借贷双方信息,全程不经手投资人及借款人资金。"]
                },
                {
                    partnerPic:"img/aboutUs/nuoya.jpg",
                    partnerDesc:["诺亚控股有限公司以“诺亚财富”为品牌，源起于中国。是中国第一家在美国纽约证券交易所上市、旗下公司获得中国证监会与香港证监会业务发展相关金融牌照与资格的综合金融服务管理集团。诺亚控股已经形成财富管理、资产管理、投资银行、互联网金融的多业务主线，为超过 13 万名高净值客户提供财富管理、海外资产配置、高端保险、高端教育等全方位的综合金融服务，帮助客户的资产实现稳健、安全的增长。" ]
                },
                {
                    partnerPic:"img/aboutUs/r360.jpg",
                    partnerDesc:[ "融360( www.Rong360.com )，北京融世纪信息技术有限公司，成立于2011年10月，是中国领先的移动金融智选平台。融360致力于为个人消费者和小微企业提供金融产品的搜索、推荐和申请服务，业务范围涵盖贷款、信用卡与理财。此外，融360还免费为用户提供便捷、划算、安全的金融信息服务。 融360平台上的金融产品来自银行、小额贷款公司、消费金融公司、担保公司、典当行、互联网金融公司等机构。公司于2015年10月完成D轮融资，由云锋基金、赛领基金领投，红杉资本及StarVC跟投，融资金额超过10亿元人民币。前三轮的投资机构主要有光速安振(Lightspeed), 红杉中国基金，淡马锡旗下兰亭投资、凯鹏华盈(KPCB)、华兴资本和清科集团 (Zero2IPO)。"]
                },
                {
                    partnerPic:"img/aboutUs/partner-wangdai.jpg",
                    partnerDesc:[ "网贷之家是第三方网贷资讯平台，于2011年10月上线。网贷之家致力推动P2P网贷行业发展，打造网贷行业最有影响力的资讯门户。是中国首家、最大的网络借贷行业门户网站，提供全方位、权威的网贷数据，是您身边的网贷资讯专家,为您的网贷之路保驾护航。" ]
                },
                {
                    partnerPic:"img/aboutUs/partner-wangdaiyan.jpg",
                    partnerDesc:[ "网贷天眼，目前国内网贷行业较为权威的第三方机构。以“正心、正念、正行”的理念为广大网贷投资者提供网贷数据、网贷资讯、论坛交流等服务，并已成长为以监督P2P平台运营为目的的第三方综合性虚拟社区和网络社交平台。 2012年天眼开始构建网贷第三方体系，努力为广大投资者当好参谋助手、做好桥梁纽带、搞好服务监督。天眼注册用户超过9000人，打造了投资者交流投资经验和获得投资信息的重要阵地。天眼一直以服务网贷投资者为中心，并通过提供专业、及时的、海量的网贷资讯信息，满足了广大网贷投资者对网贷资讯和平台信息的需求，成为国内网络借贷投资最具权威的第三方门户网站。" ]
                },
                {
                    partnerPic:"img/aboutUs/lianlianpay.jpg",
                    partnerDesc:[ "连连银通电子支付有限公司是浙江省级高新企业，成立于2003年，注册资金1.05亿元。2011年9月获得人民银行颁发的第二批支付许可证（浙江省第二家），业务范围为全国范围的互联网支付、移动手机支付业务。公司致力于通过互联网和移动手机等渠道为广大用户和商户提供第三方支付和结算服务。 公司拥有由互联网行业资深工作者、优秀金融界人士、高级技术人员及专职客服人员所组成的专业管理团队，在产品开发、技术创新、市场开拓、企业管理、反洗钱等方面都积累了丰富的实战经验。"]
                },
                {
                    partnerPic:"img/aboutUs/partner-duotou.jpg",
                    partnerDesc:["北京多彩投网络科技有限公司（简称多彩投）是一家专注于营造新型生活空间的互联网金融企业，致力于为消费者提供民宿客栈、健身工作室等新型空间的众筹项目，为有情怀、爱自由的人，众筹理想空间。"]
                }
            ] ,
            securityArray : [
                {
                    securityPic:"img/aboutUs/sec-jiangxi.jpg",
                    securityDesc:["海投汇平台依据《网络借贷信息中介机构业务活动管理暂行办法》的规定，正式接入江西银行资金存管系统，为用户带来更安全、透明的服务。客户可通过网银、手机银行等充值方式，方便快捷。海投汇平台只负责匹配借贷双方信息,全程不经手投资人及借款人资金。"]
                },
                {
                    securityPic:"img/aboutUs/e_qianbao.jpg",
                    securityDesc:["e签宝是天谷科技旗下的第三方电子签名SaaS服务平台，是公司自主核心产品，取得了多项国家专利。作为解决互联网在线签署问题，保障数字信息可靠真实的互联网基础工具，e签宝基于《中华人民共和国电子签名法》提供可靠电子签名服务，包括电子合同签署、数字版权保护、电子证照、电子数据存证等一整套完善服务体系。凭借十多年积累的企业服务经验，公司可提供全面和创新的电子签名解决方案，让用户享受全程无忧的签署体验。"]
                },
                {
                    securityPic:"img/aboutUs/changan_baoxian.jpg",
                    securityDesc:["长安责任保险股份有限公司是根据国务院“大力发展责任保险”的要求，由住房和城乡建设部牵头、十部委共同支持组建成立。2007年9月29日经中国保险监督管理委员会批准开业，总部设在北京，注册资本为人民币16.2亿元。截至2016年9月，公司已有16家二级机构开业运营，分支机构数量达到255家。累计为社会提供风险保障6.6万亿元，服务客户数量近1000万。" ]
                },
                {
                    securityPic:"img/aboutUs/sec-zhongan.jpg",
                    securityDesc:["海投汇联合众安保险为所有投资人推出了“网络支付服务责任保险”，众安保险作为国内首家互联网保险公司，由蚂蚁金服、腾讯、中国平安等国内知名企业，基于促进整个互联网生态发展的初衷发起设立。 2013年9月29日，众安在线财产保险股份有限公司获得中国保险监督管理委员会同意开业批复，这是中国首张互联网保险专业牌照。众安保险总部设在中国上海，注册资本金12.40625亿人民币。作为国内首家互联网保险金融机构，众安保险定位于服务互联网生态，未来的互联网时代，是从IT时代到DT时代的演变，IT的思维在于吸纳资源，为强大自己服务。DT思维是吸纳资源，为使别人强大服务。众安保险正是依靠DT思维出发去考虑如何去服务好整个互联网生态。" ]
                },
                {
                    securityPic:"img/aboutUs/sec-zixin.jpg",
                    securityDesc:["海投汇平台的借款企业及关联人的网络金融信用信息，并向“网络金融征信系统”贡献相关数据，共同建造可信的网络借贷环境。 上海资信有限公司成立于1999年7月，是一家融个人征信系统与企业征信系统为一体、既从事征信数据库建设又提供个人征信与企业征信服务的专业化机构。上海资信有限公司搭建的网络金融征信系统（NFCS）收集并整理了P2P平台借贷两端客户的个人基本信息、贷款申请信息、贷款开立信息、贷款还款信息和特殊交易信息，通过有效的信息共享，帮助P2P平台机构全面了解授信对象，防范借款人恶意欺诈、过度负债等信用风险。NFCS系统的建设目标是实现网贷企业之间的信息共享，打通线上线下、新型金融与传统金融的信息壁垒，让网贷违约也无处遁形。NFCS系统是网络金融开展业务的必要基础设施，是央行征信系统的有效补充。"]
                },
                {
                    securityPic:"img/aboutUs/sec-tongdun.jpg",
                    securityDesc:["杭州同盾科技有限公司创立于2013年，由前阿里集团安全部、PayPal（美）、RSA（美）的一批反欺诈科学家和技术高管创立，专注解决网络风险和欺诈问题，让数据智能真正为企业带来价值。 涉及的反欺诈领域包括账号欺诈、交易欺诈、支付欺诈、商户欺诈、网络信用欺诈、企业内部欺诈等，拥有带自主知识产权的一系列核心产品，且同时支持企业级产品和互联网 SAAS 产品，满足企业风险管理的不同需求。" ]
                },
                {
                    securityPic:"img/aboutUs/sec-mifeng.jpg",
                    securityDesc:[ "蜜蜂数据，是盈灿集团依托网贷之家丰富的行业资源，整合优质的行业征信数据，推出的国内首家分布式征信查询系统，是建立网贷行业信用征信体系重要的组成部分。蜜蜂数据是国内首个脱离中央数据库，实行用户自行管理自有数据，系统仅负责通讯、对接，不存储任何数据的分布式征信系统。通过提供标准统一接口和灵活、弹性的数据扩展，可精准查询借款人详细的个人信息、借款信息、个人负债率等独家P2P网贷征信数据的机构。"]
                },
                {
                    securityPic:"img/aboutUs/aliyun.jpg",
                    securityDesc:[ "阿里云，阿里巴巴集团旗下云计算品牌，全球卓越的云计算技术和服务提供商。创立于2009年，在杭州、北京、硅谷等地设有研发中心和运营机构。阿里云广泛在金融、交通、基因、医疗、气象等领域输出一站式的大数据解决方案。2014年，阿里云曾帮助用户抵御全球互联网史上最大的DDoS攻击，峰值流量达到每秒453.8Gb。在Sort Benchmark 2015世界排序竞赛中，阿里云利用自研的分布式计算平台ODPS，377秒完成100TB数据排序，刷新了Apache Spark 1406秒的世界纪录。" ]
                },
                {
                    securityPic:"img/aboutUs/sec-yingke.jpg",
                    securityDesc:["北京市盈科律师事务所（以下简称“盈科律所”）是一家全球化的法律服务机构，律师总人数近5000名，在中国大陆拥有39家办公室，在海外有34家分支机构。盈科律所是互联网金融法律领域的领军者，2014年组建了全国互联网金融专委会，在互联网金融法律领域成绩斐然。"]
                },
                {
                    securityPic:"img/aboutUs/jindagoncheng.jpg",
                    securityDesc:["竞天公诚律师事务所于九十年代初设立，是中国第一批获准设立的合伙制律师事务所之一。发展至今，竞天公诚已成为中国最具规模和最具强劲实力的综合性律师事务所之一，在资本市场、兼并收购、境内外投资、私募股权投资、争议解决等诸多专业领域处于国内领先地位。" ]
                }
            ]
        }
    }
});

var vmAboutPartners=avalon.define({
    $id: "partners",
    partnerArray:[],
    securityArray:[]
});

$.ajax({
    url:"http://XXX/web-api/aboutUs",
    success:function(response){
        vmAboutPartners.partnerArray = response.aboutPartners.partnerArray;
        vmAboutPartners.securityArray = response.aboutPartners.securityArray;
    }

});

$(document).ready(function(){
    $(".hzhb ul>li>a:first-child").addClass("hz-hover");
    $(".partner>li>a").click(function(){
        $(this).parent().parent().find("a").removeClass("hz-hover");
        $(this).addClass("hz-hover");
        var index = $(this).parent().parent().find("a").index(this);
        if(index==0){//空中
            window.location.href="http://www.kongzhong.com/";
        }
        $(this).parent().parent().parent().find("div[_safe=zl]").hide();
        $(this).parent().parent().parent().find("div[_safe=zl]").slice(index,index+1).show();
    });
    $(".security>li>a").click(function(){
        $(this).parent().parent().find("a").removeClass("hz-hover");
        $(this).addClass("hz-hover");
        var index = $(this).parent().parent().find("a").index(this);
        $(this).parent().parent().parent().find("div[_safe=aq]").hide();
        $(this).parent().parent().parent().find("div[_safe=aq]").slice(index,index+1).show();
    });
    /*$(".guarantee>li>a").click(function(){
     $(this).parent().parent().find("a").removeClass("hz-hover");
     $(this).addClass("hz-hover");
     var index = $(this).parent().parent().find("a").index(this);
     $(this).parent().parent().parent().find("div[_safe=db]").hide();
     $(this).parent().parent().parent().find("div[_safe=db]").slice(index,index+1).show();
     });*/
});

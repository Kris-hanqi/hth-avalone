var avalon = require('avalon');
var $ = require("jquery");
var mockjax = require("mockjax")($, window);


/* -- about --  */
avalon.component('about', {
    template: (function () {
        var aboutNavBar ='<ul id="aboutNavBar">'+
                '<li ms-for="ell in @aboutBar">'+
                    '<a ms-attr="{href: ell.aboutUrl}" >{{ell.aboutTitle}}</a>'+
                '</li>'+
            '</ul>';
        return aboutNavBar;
    }).call(this),
    defaults: {
        aboutBar:[]
    }
});
//aboutNavBar
avalon.define({
    $id: "about",
    aboutBar:[
        {aboutUrl:"about_htouhui.html",aboutTitle:'企业介绍'},
        {aboutUrl:"about_platform_advantage.html",aboutTitle:'平台优势'},
        {aboutUrl:"about_team.html",aboutTitle:'管理团队'},
        {aboutUrl:"about_accompany.html",aboutTitle:'一路相伴'},
        {aboutUrl:"about_partners.html",aboutTitle:'合作伙伴'},
        {aboutUrl:"about_contactus.html",aboutTitle:'联系我们'},
        {aboutUrl:"about_joinus.html",aboutTitle:'加入我们'}
    ]
});

//合作伙伴
avalon.define({
    $id: "partners",
    partnerArray:[
        {
            partnerPic:"img/aboutUs/partner-sky.jpg",
            partnerDesc:[
                {partnerDescPart:"空中网是中国领先的网络游戏研发商和运营商，致力于为中国及海外互联网用户提供高品质的大型在线游戏服务，同时为中国手机用户提供多元化的无线娱乐服务。公司于2004年在美国纳斯达克上市（NASDAQ：KZ），目前公司业务覆盖互联网游戏、手机游戏以及无线增值三大领域。旗下无线增值业务连续多年位居行业之首。"}
            ]
        },
        {
            partnerPic:"img/aboutUs/partner-sina.jpg",
            partnerDesc:[
                {partnerDescPart:"新浪公司是一家服务于中国及全球华人社群的网络媒体公司。新浪通过门户网站新浪网(SINA.com)、移动门户手机新浪网(SINA.cn)和社交网络服务及微博客服务新浪微博(Weibo.com)组成的数字媒体网络，帮助广大用户通过互联网和移动设备获得专业媒体和用户自生成的多媒体内容(UGC)并与友人进行兴趣分享。香港新浪、台北新浪、北美新浪等覆盖全球华人社区的全球最大中文门户网站，2012年11月新浪注册用户已突破4亿。"},
                {partnerDescPart:"新浪通过上述主营业务及其他业务线向广大用户提供包括移动增值服务(MVAS)、网络视频、音乐流媒体、网络游戏、相册、博客、电子邮件、分类信息、收费服务、电子商务和企业服务在内的一系列服务。"}
            ]
        },
        {
            partnerPic:"img/aboutUs/sec-jiangxi.jpg",
            partnerDesc:[
                {partnerDescPart:"海投汇平台依据《网络借贷信息中介机构业务活动管理暂行办法》的规定，正式接入江西银行资金存管系统，为用户带来更安全、透明的服务。客户可通过网银、手机银行等充值方式，方便快捷。海投汇平台只负责匹配借贷双方信息,全程不经手投资人及借款人资金。"}
            ]
        },
        {
            partnerPic:"img/aboutUs/nuoya.jpg",
            partnerDesc:[
                {partnerDescPart:"诺亚控股有限公司以“诺亚财富”为品牌，源起于中国。是中国第一家在美国纽约证券交易所上市、旗下公司获得中国证监会与香港证监会业务发展相关金融牌照与资格的综合金融服务管理集团。诺亚控股已经形成财富管理、资产管理、投资银行、互联网金融的多业务主线，为超过 13 万名高净值客户提供财富管理、海外资产配置、高端保险、高端教育等全方位的综合金融服务，帮助客户的资产实现稳健、安全的增长。"}
            ]
        },
        {
            partnerPic:"img/aboutUs/r360.jpg",
            partnerDesc:[
                {partnerDescPart:"融360( www.Rong360.com )，北京融世纪信息技术有限公司，成立于2011年10月，是中国领先的移动金融智选平台。融360致力于为个人消费者和小微企业提供金融产品的搜索、推荐和申请服务，业务范围涵盖贷款、信用卡与理财。此外，融360还免费为用户提供便捷、划算、安全的金融信息服务。 融360平台上的金融产品来自银行、小额贷款公司、消费金融公司、担保公司、典当行、互联网金融公司等机构。公司于2015年10月完成D轮融资，由云锋基金、赛领基金领投，红杉资本及StarVC跟投，融资金额超过10亿元人民币。前三轮的投资机构主要有光速安振(Lightspeed), 红杉中国基金，淡马锡旗下兰亭投资、凯鹏华盈(KPCB)、华兴资本和清科集团 (Zero2IPO)。"}
            ]
        },
        {
            partnerPic:"img/aboutUs/partner-wangdai.jpg",
            partnerDesc:[
                {partnerDescPart:"网贷之家是第三方网贷资讯平台，于2011年10月上线。网贷之家致力推动P2P网贷行业发展，打造网贷行业最有影响力的资讯门户。是中国首家、最大的网络借贷行业门户网站，提供全方位、权威的网贷数据，是您身边的网贷资讯专家,为您的网贷之路保驾护航。"}
            ]
        },
        {
            partnerPic:"img/aboutUs/partner-wangdaiyan.jpg",
            partnerDesc:[
                {partnerDescPart:"网贷天眼，目前国内网贷行业较为权威的第三方机构。以“正心、正念、正行”的理念为广大网贷投资者提供网贷数据、网贷资讯、论坛交流等服务，并已成长为以监督P2P平台运营为目的的第三方综合性虚拟社区和网络社交平台。 2012年天眼开始构建网贷第三方体系，努力为广大投资者当好参谋助手、做好桥梁纽带、搞好服务监督。天眼注册用户超过9000人，打造了投资者交流投资经验和获得投资信息的重要阵地。天眼一直以服务网贷投资者为中心，并通过提供专业、及时的、海量的网贷资讯信息，满足了广大网贷投资者对网贷资讯和平台信息的需求，成为国内网络借贷投资最具权威的第三方门户网站。"}
            ]
        },
        {
            partnerPic:"img/aboutUs/lianlianpay.jpg",
            partnerDesc:[
                {partnerDescPart:"连连银通电子支付有限公司是浙江省级高新企业，成立于2003年，注册资金1.05亿元。2011年9月获得人民银行颁发的第二批支付许可证（浙江省第二家），业务范围为全国范围的互联网支付、移动手机支付业务。公司致力于通过互联网和移动手机等渠道为广大用户和商户提供第三方支付和结算服务。 公司拥有由互联网行业资深工作者、优秀金融界人士、高级技术人员及专职客服人员所组成的专业管理团队，在产品开发、技术创新、市场开拓、企业管理、反洗钱等方面都积累了丰富的实战经验。"}
            ]
        },
        {
            partnerPic:"img/aboutUs/partner-duotou.jpg",
            partnerDesc:[
                {partnerDescPart:"北京多彩投网络科技有限公司（简称多彩投）是一家专注于营造新型生活空间的互联网金融企业，致力于为消费者提供民宿客栈、健身工作室等新型空间的众筹项目，为有情怀、爱自由的人，众筹理想空间。"}
            ]
        }
    ],
    securityArray:[
        {
            securityPic:"img/aboutUs/sec-jiangxi.jpg",
            securityDesc:[
                {securityDescPart:"海投汇平台依据《网络借贷信息中介机构业务活动管理暂行办法》的规定，正式接入江西银行资金存管系统，为用户带来更安全、透明的服务。客户可通过网银、手机银行等充值方式，方便快捷。海投汇平台只负责匹配借贷双方信息,全程不经手投资人及借款人资金。"}
            ]
        },
        {
            securityPic:"img/aboutUs/e_qianbao.jpg",
            securityDesc:[
                {securityDescPart:"e签宝是天谷科技旗下的第三方电子签名SaaS服务平台，是公司自主核心产品，取得了多项国家专利。作为解决互联网在线签署问题，保障数字信息可靠真实的互联网基础工具，e签宝基于《中华人民共和国电子签名法》提供可靠电子签名服务，包括电子合同签署、数字版权保护、电子证照、电子数据存证等一整套完善服务体系。凭借十多年积累的企业服务经验，公司可提供全面和创新的电子签名解决方案，让用户享受全程无忧的签署体验。"}
            ]
        },
        {
            securityPic:"img/aboutUs/changan_baoxian.jpg",
            securityDesc:[
                {securityDescPart:"长安责任保险股份有限公司是根据国务院“大力发展责任保险”的要求，由住房和城乡建设部牵头、十部委共同支持组建成立。2007年9月29日经中国保险监督管理委员会批准开业，总部设在北京，注册资本为人民币16.2亿元。截至2016年9月，公司已有16家二级机构开业运营，分支机构数量达到255家。累计为社会提供风险保障6.6万亿元，服务客户数量近1000万。"}
            ]
        },
        {
            securityPic:"img/aboutUs/sec-zhongan.jpg",
            securityDesc:[
                {securityDescPart:"海投汇联合众安保险为所有投资人推出了“网络支付服务责任保险”，众安保险作为国内首家互联网保险公司，由蚂蚁金服、腾讯、中国平安等国内知名企业，基于促进整个互联网生态发展的初衷发起设立。 2013年9月29日，众安在线财产保险股份有限公司获得中国保险监督管理委员会同意开业批复，这是中国首张互联网保险专业牌照。众安保险总部设在中国上海，注册资本金12.40625亿人民币。作为国内首家互联网保险金融机构，众安保险定位于服务互联网生态，未来的互联网时代，是从IT时代到DT时代的演变，IT的思维在于吸纳资源，为强大自己服务。DT思维是吸纳资源，为使别人强大服务。众安保险正是依靠DT思维出发去考虑如何去服务好整个互联网生态。"}
            ]
        },
        {
            securityPic:"img/aboutUs/sec-zixin.jpg",
            securityDesc:[
                {securityDescPart:"海投汇平台的借款企业及关联人的网络金融信用信息，并向“网络金融征信系统”贡献相关数据，共同建造可信的网络借贷环境。 上海资信有限公司成立于1999年7月，是一家融个人征信系统与企业征信系统为一体、既从事征信数据库建设又提供个人征信与企业征信服务的专业化机构。上海资信有限公司搭建的网络金融征信系统（NFCS）收集并整理了P2P平台借贷两端客户的个人基本信息、贷款申请信息、贷款开立信息、贷款还款信息和特殊交易信息，通过有效的信息共享，帮助P2P平台机构全面了解授信对象，防范借款人恶意欺诈、过度负债等信用风险。NFCS系统的建设目标是实现网贷企业之间的信息共享，打通线上线下、新型金融与传统金融的信息壁垒，让网贷违约也无处遁形。NFCS系统是网络金融开展业务的必要基础设施，是央行征信系统的有效补充。"}
            ]
        },
        {
            securityPic:"img/aboutUs/sec-tongdun.jpg",
            securityDesc:[
                {securityDescPart:"杭州同盾科技有限公司创立于2013年，由前阿里集团安全部、PayPal（美）、RSA（美）的一批反欺诈科学家和技术高管创立，专注解决网络风险和欺诈问题，让数据智能真正为企业带来价值。 涉及的反欺诈领域包括账号欺诈、交易欺诈、支付欺诈、商户欺诈、网络信用欺诈、企业内部欺诈等，拥有带自主知识产权的一系列核心产品，且同时支持企业级产品和互联网 SAAS 产品，满足企业风险管理的不同需求。"}
            ]
        },
        {
            securityPic:"img/aboutUs/sec-mifeng.jpg",
            securityDesc:[
                {partnerDescPart:"蜜蜂数据，是盈灿集团依托网贷之家丰富的行业资源，整合优质的行业征信数据，推出的国内首家分布式征信查询系统，是建立网贷行业信用征信体系重要的组成部分。蜜蜂数据是国内首个脱离中央数据库，实行用户自行管理自有数据，系统仅负责通讯、对接，不存储任何数据的分布式征信系统。通过提供标准统一接口和灵活、弹性的数据扩展，可精准查询借款人详细的个人信息、借款信息、个人负债率等独家P2P网贷征信数据的机构。"}
            ]
        },
        {
            securityPic:"img/aboutUs/aliyun.jpg",
            securityDesc:[
                {securityDescPart:"阿里云，阿里巴巴集团旗下云计算品牌，全球卓越的云计算技术和服务提供商。创立于2009年，在杭州、北京、硅谷等地设有研发中心和运营机构。阿里云广泛在金融、交通、基因、医疗、气象等领域输出一站式的大数据解决方案。2014年，阿里云曾帮助用户抵御全球互联网史上最大的DDoS攻击，峰值流量达到每秒453.8Gb。在Sort Benchmark 2015世界排序竞赛中，阿里云利用自研的分布式计算平台ODPS，377秒完成100TB数据排序，刷新了Apache Spark 1406秒的世界纪录。"}
            ]
        },
        {
            securityPic:"img/aboutUs/sec-yingke.jpg",
            securityDesc:[
                {securityDescPart:"北京市盈科律师事务所（以下简称“盈科律所”）是一家全球化的法律服务机构，律师总人数近5000名，在中国大陆拥有39家办公室，在海外有34家分支机构。盈科律所是互联网金融法律领域的领军者，2014年组建了全国互联网金融专委会，在互联网金融法律领域成绩斐然。"}
            ]
        },
        {
            securityPic:"img/aboutUs/jindagoncheng.jpg",
            securityDesc:[
                {securityDescPart:"竞天公诚律师事务所于九十年代初设立，是中国第一批获准设立的合伙制律师事务所之一。发展至今，竞天公诚已成为中国最具规模和最具强劲实力的综合性律师事务所之一，在资本市场、兼并收购、境内外投资、私募股权投资、争议解决等诸多专业领域处于国内领先地位。"}
            ]
        }
    ]
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

//加入我们
avalon.define({
    $id: "joinUs",
    job:[
        {
            jobTitle:"市场推广专员",
            jobDesc:[
                {descList:"1、负责在社区开拓高净值个人客户，为客户提供全方面金融理财服务；"},
                {descList:"2、根据客户的资产规模、生活目标、预期收益目标和风险承受能力进行需求分析，出具专业的理财计划方案，推荐合适的理财产品；"},
                {descList:"3、每季度完成一定指标的销售业绩；"},
                {descList:"4、维护新老客户关系，提升客户对公司品牌的信任度和认知度；"},
                {descList:"5、协助和配合公司其他部门开展各类市场营销活动。"}
            ],
            jobRequest:[
                {requestList:"1、大专及以上学历，与金融有关的从业经验优先考虑；"},
                {requestList:"2、有过服务过高净值人群者，或从事过金融、保险、房地产等专业优先考虑；"},
                {requestList:"3、具有敏锐的市场洞察力和准确的客户分析能力，能够有效开发客户资源；"},
                {requestList:"4、具备自我约束、激励并勇于承担、完成目标责任的能力，能在一定的压力下胜任工作；"},
                {requestList:"5、强烈的时间观念和服务意识，灵活熟练的沟通技巧；6.强有力的自律和自我驱动力，具有高度的团队合作精神和高度的工作热情。"}
            ]
        },
        {
            jobTitle:"产品专员（实习）",
            jobDesc:[
                {descList:"1、完成项目上线前的验收测试工作；"},
                {descList:"2、协助产品经理定期或不定期编写发布产品月报和研究月报；负责金融产品研究，形成专题研究报告、竞品分析报告；"},
                {descList:"3、协助产品经理分析来自市场和公司内部的业务需求。"},
                {descList:"4、维护新老客户关系，提升客户对公司品牌的信任度和认知度；"},
                {descList:"5、协助和配合公司其他部门开展各类市场营销活动。"}
            ],
            jobRequest:[
                {requestList:"1、大学本科以上学历，有互联网相关工作经验的优先，金融专业优先；"},
                {requestList:"2、了解web网站设计，同时对android、ios手机客户端有较多使用经验；"},
                {requestList:"3、良好的沟通协调技巧和团队合作意识，能承受较大的工作压力；"},
                {requestList:"4、有较强的学习能力、沟通能力和团队意识；"},
                {requestList:"5、诚实、敬业、积极、认真，能够承担一定的工作压力；6、会使用word、excel等办公软件，具有文档撰写能力、逻辑思维能力。"}
            ]
        },
        {
            jobTitle:"客服专员",
            jobDesc:[
                {descList:"1、供通过电话及网络等多元化渠道与客户进行有效沟通，解决客户咨询问题，提高质量理财咨询服务，定期总结客户需求及意见，并记录整理及汇报；"},
                {descList:"2、定期进行回访工作，开发潜在理财投资客户，与客户建立良好的联系，挖掘客户需求，维护后期客户关系；"},
                {descList:"3、对公司产品进行推广，具备处理问题、安排进度、跟进进程、沟通及疑难问题服务的意识能力，最大限度的提高客户满意度；"},
                {descList:"4、接受及处理客户投诉，记录客户投诉内容，按照相应流程给予客户及时反馈；"},
                {descList:"5、建立客户档案，并做好日常维护工作；6、完成上级临时安排的其他工作任务。"}
            ],
            jobRequest:[
                {requestList:"1、熟悉各种网供通过电话及网络等多元化渠道与客户进行有效沟通，解决客户咨询问题，提高质量理财咨询服务，定期总结客户需求及意见，并记录整理及汇报；"},
                {requestList:"2、定期进行回访工作，开发潜在理财投资客户，与客户建立良好的联系，挖掘客户需求，维护后期客户关系；"},
                {requestList:"3、对公司产品进行推广，具备处理问题、安排进度、跟进进程、沟通及疑难问题服务的意识能力，最大限度的提高客户满意度；"},
                {requestList:"4、接受及处理客户投诉，记录客户投诉内容，按照相应流程给予客户及时反馈；"},
                {requestList:"5、建立客户档案，并做好日常维护工作；"},
                {requestList:"6、完成上级临时安排的其他工作任务。"},
                {requestList:"7、络工具的应用，打字速度尚可；"},
                {requestList:"8、具有良好的客户服务意识，善于了解和化解客户心理顾虑，有较强的语言沟通技巧；有一定的抗压能力，性格开朗，责任心强，有较强的团队合作意识，执行力强，愿意与公司一起成长。"}
            ]
        },
        {
            jobTitle:"风控主管",
            jobDesc:[
                {descList:"1、根据公司要求，控制资产质量和项目风险，在完善公司贷款风险控制的指导原则下，不断查审批环节和审查内容，并提出完善建议；"},
                {descList:"2、根据风控制度和产品手册的要求对借款人及借款标的尽职调查，独立出具风控建议及风控报告并对本人的审批意见负责；"},
                {descList:"3、综合考虑借款人及担保措施等因素，给予如实完整的风控审批意见后并审查担保手续的办理，包括但不限于合同、抵押质押、公证等所有涉及的手续；"},
                {descList:"4、配合公司的有关安排，在公司内普及相关知识，增强职员的风险意识；"},
                {descList:"5、领导安排的其他工作。"}
            ],
            jobRequest:[
                {requestList:"1、3年以上信贷审批的经验，对企业贷款及质押有一定的审批经验；"},
                {requestList:"2、熟悉供应链金融及融资租赁企业贷款行业模式及审批流程；"},
                {requestList:"3、按照要求对借款申请人尽职调查，分析审核借款人资信条件及企业经营情况，独立开展项目风控审核；"},
                {requestList:"4、参与风控制度的修订，提出解决方案；"},
                {requestList:"5、风控中心负责人交办的其他相关工作；"},
                {requestList:"6、有银行从业经验，能适应短期出差；"},
                {requestList:"7、本科以上学历，经济、金融、会计等相关专业。"}
            ]
        },
        {
            jobTitle:"前端开发工程师",
            jobDesc:[
                {descList:"1、与设计师、后端工程师紧密工作在一起，负责产出高质量的产品前端层；"},
                {descList:"2、参与多种平台的应用开发，包括PC端及手机端产品，负责前端交互的实现。"}
            ],
            jobRequest:[
                {requestList:"1、精通Javascript、HTML/HTML5、CSS/CSS3、等前端开发技术，熟悉W3C标准；"},
                {requestList:"2、能熟练运用一种常见Javascript开发框架；"},
                {requestList:"3、熟悉浏览器渲染原理，精通各种前端调试工具，对Web性能优化有深入了解；"},
                {requestList:"4、对HTML5和手机WEB开发有深入了解者优先；"},
                {requestList:"5、具备良好的学习能力，能够不断学习并引入新的前端技术；"},
                {requestList:"6、相关专业本科毕业，2年以上相关工作经验。"}
            ]
        },
        {
            jobTitle:"BD拓展/渠道推广",
            jobDesc:[
                {descList:"1、运用各种途径有效的寻找商机，寻找目标公司和目标客户；"},
                {descList:"2、与潜在客户沟通，并与之建立联系，进行商务拓展；"},
                {descList:"3、公司线上、线下活动的渠道拓展，提升用户数量。"},
                {descList:"4、根据公司业务项目需求，有针对性的发展和拓展合作资源，支持项目执行；"},
                {descList:"5、负责商务拓展及合作，与其他客户端及推广渠道（各大市场）建立良好的业务合作关系；"},
                {descList:"6、对推广数据进行分析，有针对性的调整推广策略，提高投资额及活跃度等。"}
            ],
            jobRequest:[
                {requestList:"1、拥有一年以上BD经验，有相关资源优先；"},
                {requestList:"2、执行力强，良好的沟通能力，能高效贯穿并推动整个方案的落实执行；"},
                {requestList:"3、大专以上学历，熟练使用excel、word、ppt等常用办公软件。"}
            ]
        }
    ]
});

//管理团队
avalon.define({
    $id: "teamCtrl",
    teamArray:[
        {
            teamPic:"img/aboutUs/team-6.jpg",
            teamDesc:"海投汇团队：2017年度团建蟒山国家森林公园行"
        },
        {
            teamPic:"img/aboutUs/team-1.jpg",
            teamDesc:"海投汇精英管理团队"
        },
        {
            teamPic:"img/aboutUs/team-2.jpg",
            teamDesc:"海投汇团队：2017年度第一季度策略会"
        },
        {
            teamPic:"img/aboutUs/team-3.jpg",
            teamDesc:"海投汇精英管理团队"
        },
        {
            teamPic:"img/aboutUs/team-4.jpg",
            teamDesc:"海投汇精英管理团队"
        },
        {
            teamPic:"img/aboutUs/team-5.jpg",
            teamDesc:"海投汇团队：2017年度团建蟒山国家森林公园行"
        }
    ]
});

//一路相伴
var fase = true;
$("#tip").click(function(){
    $(this).parents().parents().find(".2015Box").slideToggle();
    if(fase){
        $(this).parents().parents().find("#tip").hide();
        fase = false;
    }else{
        $(this).parents().parents().find("#tip").show();
        fase = true;
    }
});


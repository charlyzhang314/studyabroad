function getQueryVariable(variable){
   var query = window.location.search.substring(1);
   var vars = query.split("&");
   for (var i=0;i<vars.length;i++) {
           var pair = vars[i].split("=");
           if(pair[0] == variable){return pair[1];}
   }
   return(false);
}



var qna =
{
    "us":{
        "preparation":{
            "title":"Option 1",
            "interests":[
                {
                    "image":"img/icons/icon_news.png",
                    "desc":"留学新闻",
                    "link":"../school/news.html"
                },
                {
                    "image":"img/icons/icon_apply.png",
                    "desc":"申请流程",
                    "link":"../school/apply.html"
                },
                {
                    "image":"img/icons/icon_sch_rank.png",
                    "desc":"学校排名",
                    "link":"../school/index.html"
                },
                {
                    "image":"img/icons/icon_test_strategy.png",
                    "desc":"考试攻略",
                    "link":"../school/exam.html"
                },
                {
                    "image":"img/icons/icon_luggage.png",
                    "desc":"行前事项",
                    "link":"../school/notes.html"
                },
                {
                    "image":"img/icons/icon_fee.png",
                    "desc":"缴纳学费",
                    "link":"../school/payment.html"
                },
                {
                    "image":"img/icons/icon_air_ticket_insurance.png",
                    "desc":"机票保险",
                    "link":"../school/flight.html"
                },
                {
                    "image":"img/icons/icon_preparation.png",
                    "desc":"抵校准备",
                    "link":"../school/arrival.html"
                },
                {
                    "image":"img/icons/icon_daily.png",
                    "desc":"日常生活",
                    "link":"../school/daily.html"
                },
                {
                    "image":"img/icons/icon_career.png",
                    "desc":"学成就业",
                    "link":"../school/graduation.html"
                }
            ],
            "banners":[
                // {
                //     "image":"img/top_banner/s1-banner1.jpg",
                //     "desc":"签下人生第一张Visa 打开世界的大门",
                //     "link":"cards.php"
                // },
                {
                    "image":"img/top_banner/banner-230323.jpg",
                    "desc":"",
                    "link":"https://digitas.yijiuplus.com/studyabroad/fy23activity/index.html"
                },
                {
                    "image":"img/top_banner/01_preparation/share/01_visa_with_u@2x.png",
                    "desc":"出国留学 visa 全程相伴",
                    "link":"https://www.visa.com.cn/pay-with-visa/find-a-card/credit-cards.html"
                },
                {
                    "image":"img/top_banner/01_preparation/share/04_xdf@2x.png",
                    "desc":"新东方前途出国：服务费立减高达2000元",
                    "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1898"
                },
                // {
                //     "image":"img/top_banner/02_pre_trip/03_jd_insurance@2x.png",
                //     "desc":"京东安联财险（留学保险）：高达30万元留学生保障计划",
                //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1900"
                // },
                // {
                //     "image":"img/top_banner/banner-621-1.png",
                //     "desc":"British council ",
                //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?utm_source=WeChat&cid=2&id=2130"
                // },
                // {
                //     "image":"img/top_banner/visa-video-banner.png",
                //     "desc":"我的留学生活",
                //     "link":"javascript:videoPop()"
                // },
            ],
            "benefits":[
                {
                    "category":"留学规划",
                    "benefits":[
                        {
                            "image":"img/content_cards/offer-2411-2.jpg",
                            "title":"非同返享-一拍即付全球返",
                            "desc":"购物/公交/餐饮处处便捷支付体验",
                            "link": "https://visaoffer.yijiuplus.com/index/index/detail?bankid=&cid=0&id=2133&nav=1"
                        },
                        {
                            "image":"img/content_cards/01_preparation/share/06_xdf@3x.jpg",
                            "title":"新东方前途出国",
                            "desc":"服务费立减高达2000元",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1898"
                        },
                        // {
                        //     "image":"img/2023/card1.jpg",
                        //     "title":"新东方国际教育",
                        //     "desc":"课程培训最高可享 85 折优惠",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?utm_source=WeChat&cid=31&id=2072"
                        // },
                    ]
                },
                // {
                //     "category":"保险",
                //     "benefits":[
                //         {
                //             "image":"img/content_cards/01_preparation/share/04_study_insurance@3x.jpg",
                //             "title":"京东安联财险（留学保险）",
                //             "desc":"高达30万元留学生保障计划",
                //             "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1900"
                //         },
                //         {
                //             "image":"img/content_cards/01_preparation/share/05_travel_insurance@3x.jpg",
                //             "title":"京东安联财险（旅行保险）",
                //             "desc":"最高30万元医疗保障，最高20万元紧急救援保障",
                //             "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1901"
                //         },
                //     ]
                // },
                // {
                //     "category":"线上课程",
                //     "benefits":[
                //         {
                //             "image":"img/content_cards/offer-621-1.png",
                //             "title":"2U GetSmarter",
                //             "desc":"Visa卡付款即享15%折扣优惠",
                //             "link":"https://visaoffer.yijiuplus.com/index/index/detail?utm_source=WeChat&cid=2&id=2129"
                //         },
                //         {
                //             "image":"img/content_cards/offer-621-2.png",
                //             "title":"British council",
                //             "desc":"Visa卡付款即享10%折扣优惠",
                //             "link":"https://visaoffer.yijiuplus.com/index/index/detail?utm_source=WeChat&cid=2&id=2130"
                //         },
                // //         {
                // //             "image":"img/content_cards/offer-621-3.png",
                // //             "title":"Coursera",
                // //             "desc":"Visa卡付款即享10%折扣优惠",
                // //             "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=2029"
                // //         },
                //         {
                //             "image":"img/content_cards/offer-621-4.png",
                //             "title":"edX",
                //             "desc":"Visa卡付款即享15%折扣优惠",
                //             "link":"https://visaoffer.yijiuplus.com/index/index/detail?utm_source=WeChat&cid=2&id=2131"
                //         },
                //         {
                //             "image":"img/content_cards/offer-0306-1.png",
                //             "title":"Skillshare",
                //             "desc":"年度会员40%的折扣优惠",
                //             "link":"https://visaoffer.yijiuplus.com/index/index/detail?utm_source=WeChat&cid=31&id=2132"
                //         },
                //         {
                //             "image":"img/content_cards/offer-0306-2.png",
                //             "title":"Emeritus",
                //             "desc":"精选课程享受10%的折扣优惠",
                //             "link":"https://visaoffer.yijiuplus.com/index/index/detail?utm_source=WeChat&cid=31&id=2134"
                //         },
                        
                //     ]
                // },
            ]
        },
        "pretrip":{
            "title":"Option 2",
            "interests":[
                {
                    "image":"img/icons/icon_news.png",
                    "desc":"留学新闻",
                    "link":"../school/news.html"
                },
                {
                    "image":"img/icons/icon_fee.png",
                    "desc":"缴纳学费",
                    "link":"../school/payment.html"
                },
                {
                    "image":"img/icons/icon_luggage.png",
                    "desc":"行前事项",
                    "link":"../school/notes.html"
                },
                {
                    "image":"img/icons/icon_air_ticket_insurance.png",
                    "desc":"机票保险",
                    "link":"../school/flight.html"
                },
                {
                    "image":"img/icons/icon_apply.png",
                    "desc":"申请流程",
                    "link":"../school/apply.html"
                },
                {
                    "image":"img/icons/icon_sch_rank.png",
                    "desc":"学校排名",
                    "link":"../school/index.html"
                },
                {
                    "image":"img/icons/icon_test_strategy.png",
                    "desc":"考试攻略",
                    "link":"../school/exam.html"
                },
                {
                    "image":"img/icons/icon_preparation.png",
                    "desc":"抵校准备",
                    "link":"../school/arrival.html"
                },
                {
                    "image":"img/icons/icon_daily.png",
                    "desc":"日常生活",
                    "link":"../school/daily.html"
                },
                {
                    "image":"img/icons/icon_career.png",
                    "desc":"学成就业",
                    "link":"../school/graduation.html"
                }
            ],
            "banners":[
                // {
                //     "image":"img/top_banner/s2-banner1.jpg",
                //     "desc":"签下人生第一张Visa 放飞爱探索的心",
                //     "link":"cards.php"
                // },
                {
                    "image":"img/top_banner/banner-230323.jpg",
                    "desc":"",
                    "link":"https://digitas.yijiuplus.com/studyabroad/fy23activity/index.html"
                },
                {
                    "image":"img/0722/trip-banner1.png",
                    "desc":"留学缴费刷Visa",
                    "link":"javascript:goPayment()"
                },
                {
                    "image":"img/top_banner/banner-621-2.png",
                    "desc":"Scoot酷航",
                    "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=2038"
                },
                // {
                //     "image":"img/top_banner/banner-621-3.png",
                //     "desc":"龙腾出行",
                //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=2034"
                // },
                {
                    "image":"img/top_banner/02_pre_trip/usa/05_ifree_data@2x.png",
                    "desc":"iFREE：流量$1通",
                    "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1902"
                },
                // {
                //     "image":"img/top_banner/0601.jpg",
                //     "desc":"",
                //     "link":"http://www.flyert.com/visavoyage"
                // },
                // {
                //     "image":"img/top_banner/visa-video-banner.png",
                //     "desc":"我的留学生活",
                //     "link":"javascript:videoPop()"
                // },
            ],
            "benefits":[
                {
                    "category": "交通",
                    "benefits":[
                        {
                            "image":"img/content_cards/offer-2024-0124.png",
                            "title":"非同返享-拍Visa搭港铁",
                            "desc":"率先体验Visa一拍过闸",
                            "link":"https://visaoffer.hypers.com.cn/index/index/detail?id=2553"
                        },
                        // {
                        //     "image":"img/content_cards/offer-2024-0119.jpg",
                        //     "title":"V享无界",
                        //     "desc":"多重礼遇，畅游世界",
                        //     "link":"https://www.flyert.com/visavoyage"
                        // },
                        
                        {
                            "image":"img/content_cards/offer-621-6.png",
                            "title":"Scoot酷航",
                            "desc":"Visa卡付款即可购买酷航机票代金券",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=2038"
                        },
                        // {
                        //     "image":"img/content_cards/offer-621-7.png",
                        //     "title":"国际航司",
                        //     "desc":"美国联合航空、达美航空指定航线舱位",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=2023"
                        // },
                        // {
                        //     "image":"img/content_cards/02_pre-trip/card2.jpg",
                        //     "title":"租租车",
                        //     "desc":"境内外双重租车特权",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1921"
                        // },
                        // {
                        //     "image":"img/content_cards/offer-621-8.png",
                        //     "title":"Hertz国际租车",
                        //     "desc":"享9折及额外优惠",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=28"
                        // },
                        // {
                        //     "image":"img/top_banner/top-0601-1.png",
                        //     "title":"龙腾出行",
                        //     "desc":"指定Visa卡付款，可1美元享受龙腾境外贵宾厅",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=2034"
                        // },
                        {
                            "image":"img/2023/card2.jpg",
                            "title":"美元购——龙腾境外贵宾厅",
                            "desc":"可享1美元购买龙腾境外贵宾厅服务",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=0&id=2071"
                        },
                    ]
                },
                {
                    "category": "酒店住宿",
                    "benefits":[
                        // {
                        //     "image":"img/top_banner/top-0601-2.png",
                        //     "title":"Airbnb爱彼迎",
                        //     "desc":"指定Visa卡付款，可0.1美元享受境外房源优惠券包",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=2035"
                        // },
                        // {
                        //     "image":"img/content_cards/offer-621-9.png",
                        //     "title":"Hotels.com好订网",
                        //     "desc":"在线订房享92折优惠",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1522"
                        // },
                        {
                            "image":"img/content_cards/02_pre-trip/others/8hotels@3x.jpg",
                            "title":"8大奢华酒店集团",
                            "desc":"入住即返高达$100消费抵扣",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1918"
                        },
                        {
                            "image":"img/content_cards/offer-621-10.png",
                            "title":"Agoda",
                            "desc":"任何一笔订单都可立享折上7%立减的超值礼遇",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1529"
                        },
                    ]
                },
                {
                    "category": "网络服务",
                    "benefits":[
                        {
                            "image":"img/content_cards/02_pre-trip/card3.jpg",
                            "title":"iFREE",
                            "desc":"一天一美元开启环球之旅",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1902"
                        },
                    ]
                }
            ]
        },
        "destination":{
            "title":"Option 3",
            "interests":[
                {
                    "image":"img/icons/icon_news.png",
                    "desc":"留学新闻",
                    "link":"../school/news.html"
                },
                {
                    "image":"img/icons/icon_preparation.png",
                    "desc":"抵校准备",
                    "link":"../school/arrival.html"
                },
                {
                    "image":"img/icons/icon_daily.png",
                    "desc":"日常生活",
                    "link":"../school/daily.html"
                },
                {
                    "image":"img/icons/icon_career.png",
                    "desc":"学成就业",
                    "link":"../school/graduation.html"
                },
                {
                    "image":"img/icons/icon_apply.png",
                    "desc":"申请流程",
                    "link":"../school/apply.html"
                },
                {
                    "image":"img/icons/icon_sch_rank.png",
                    "desc":"学校排名",
                    "link":"../school/index.html"
                },
                {
                    "image":"img/icons/icon_test_strategy.png",
                    "desc":"考试攻略",
                    "link":"../school/exam.html"
                },
                {
                    "image":"img/icons/icon_luggage.png",
                    "desc":"行前事项",
                    "link":"../school/notes.html"
                },
                {
                    "image":"img/icons/icon_fee.png",
                    "desc":"缴纳学费",
                    "link":"../school/payment.html"
                },
                {
                    "image":"img/icons/icon_air_ticket_insurance.png",
                    "desc":"机票保险",
                    "link":"../school/flight.html"
                }
            ],
            "banners":[
                // {
                //     "image":"img/top_banner/s3-banner1.jpg",
                //     "desc":"签下人生第一张Visa 解锁留学多面精彩",
                //     "link":"cards.php"
                // },
                {
                    "image":"img/top_banner/banner-230323.jpg",
                    "desc":"",
                    "link":"https://digitas.yijiuplus.com/studyabroad/fy23activity/index.html"
                },
                // {
                //     "image":"img/top_banner/03_destination/01_uber_v2@2x.png",
                //     "desc":"境外美食/购物/打车周周返: Visa持卡人境外消费，最高20美元福利周周享",
                //     "link":"https://visaoffer.yijiuplus.com/index/signup2/index?bankid=visa_wechat"
                // },
                {
                    "image":"img/top_banner/03_destination/02_medical@2x.png",
                    "desc":"无需出门辗转就医，用Visa即刻在线咨询",
                    "link":"https://visaoffer.yijiuplus.com/index/index/detail?id=1912&nav=1"
                },
                {
                    "image":"img/top_banner/03_destination/usa/04_ifree_data@2x.png",
                    "desc":"iFREE：流量$1通",
                    "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1902"
                },
                // {
                //     "image":"img/top_banner/03_destination/global-banner.png",
                //     "desc":"海淘精选礼遇",
                //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1909"
                // },
                // {
                //     "image":"img/top_banner/visa-video-banner.png",
                //     "desc":"我的留学生活",
                //     "link":"javascript:videoPop()"
                // }
            ],
            "benefits":[
                {
                    "category":"健康生活",
                    "benefits":[
                        {
                            "image":"img/content_cards/03_destination/usa/health/01_online_dr@3x.jpg",
                            "title":"爱睿智健康",
                            "desc":"在线医疗咨询服务",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1912"
                        },
                        // {
                        //     "image":"img/content_cards/03_destination/usa/health/02_video_dr@3x.jpg",
                        //     "title":"和缓视频医生",
                        //     "desc":"7×24小时实时在线视频医生咨询服务",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail? cid=31&id=2033"
                        // },
                    ]
                },
                {
                    "category":"购物",
                    "benefits":[
                        {
                            "image":"img/content_cards/offer-2411-2.jpg",
                            "title":"非同返享-一拍即付全球返",
                            "desc":"购物/公交/餐饮处处便捷支付体验",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?bankid=&cid=0&id=2133&nav=1"
                        },
                        // {
                        //     "image":"img/content_cards/03_destination/card1.jpg",
                        //     "title":"海淘精选礼遇",
                        //     "desc":"11大品类海淘电商低至4折",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1909"
                        // },
                        {
                            "image":"img/content_cards/offer-621-11.png",
                            "title":"非同返享-境外生活",
                            "desc":"境外美食/购物/订阅类精选商户消费享最高100%返现",
                            "link":"https://visaoffer.yijiuplus.com/index/signup3"
                        },
                    ]
                },
                {
                    "category": "交通美食",
                    "benefits":[
                        {
                            "image":"img/content_cards/offer-2024-0129.jpg",
                            "title":"非同返享-Visa春节年夜饭餐饮返现",
                            "desc":"龙年春节月境外线下消费单笔满99$返9$",
                            "link":"https://visaoffer.hypers.com.cn/index/index/detail?id=2557&nav=1"
                        },
                        {
                            "image":"img/content_cards/offer-2024-0124.png",
                            "title":"非同返享-拍Visa搭港铁",
                            "desc":"率先体验Visa一拍过闸",
                            "link":"https://visaoffer.hypers.com.cn/index/index/detail?id=2553"
                        },
                        {
                            "image":"img/content_cards/offer-2411-3.jpg",
                            "title":"非同返享-境外交通笔笔随机返",
                            "desc":"最高享100%免单",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?bankid=&cid=0&id=2481&nav=1"
                        },
                        
                        // {
                        //     "image":"img/content_cards/03_destination/card4.jpg",
                        //     "title":"租租车",
                        //     "desc":"境内外双重租车特权",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1921"
                        // },
                        // {
                        //     "image":"img/content_cards/03_destination/usa/dine/01_uber@3x.jpg",
                        //     "title":"境外美食/购物/打车周周返",
                        //     "desc":"Visa持卡人境外消费，最高20美元福利周周享",
                        //     "link":"https://visaoffer.yijiuplus.com/index/signup2/index?bankid=visa_wechat"
                        // },
                        // {
                        //     "image":"img/content_cards/offer-621-8.png",
                        //     "title":"Hertz国际租车",
                        //     "desc":"享9折及额外优惠",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=28"
                        // },
                        {
                            "image":"img/2023/card3.jpg",
                            "title":"美元购——熊猫外卖红包组合",
                            "desc":"0.1美元购买熊猫外卖红包组合",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=0&id=2055"
                        },
                    ]
                },
                {
                    "category":"酒店住宿",
                    "benefits":[
                        // {
                        //     "image":"img/top_banner/top-0601-2.png",
                        //     "title":"Airbnb爱彼迎",
                        //     "desc":"指定Visa卡付款，可0.1美元享受境外房源优惠券包",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=2035"
                        // },
                        // {
                        //     "image":"img/content_cards/offer-621-9.png",
                        //     "title":"Hotels.com好订网",
                        //     "desc":"在线订房享92折优惠",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1522"
                        // },
                        {
                            "image":"img/content_cards/02_pre-trip/others/8hotels@3x.jpg",
                            "title":"8大奢华酒店集团",
                            "desc":"入住即返高达$100消费抵扣",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1918"
                        },
                        {
                            "image":"img/content_cards/offer-621-10.png",
                            "title":"Agoda",
                            "desc":"任何一笔订单都可立享折上7%立减的超值礼遇",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1529"
                        },
                    ]
                },
                {
                    "category":"专业培训",
                    "benefits":[
                        {
                            "image":"img/content_cards/03_destination/card15.jpg",
                            "title":"Hilaya",
                            "desc":"优惠价格尊享Hilaya专业北美职场策划服务",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1957"
                        },
                    ]
                },
                {
                    "category":"explore-more",
                    "link":"https://visaoffer.yijiuplus.com/index/index/offer_list?cid=0&area_id=0&scene_id=2&classify_id=0&card_type_id=0&card_etc_id=0&card_theme_id=0",
                }
            ]
        }
    },
    "uk":{
        "preparation":{
            "title":"Option 4",
            "interests":[
                {
                    "image":"img/icons/icon_news.png",
                    "desc":"留学新闻",
                    "link":"../school/news.html"
                },
                {
                    "image":"img/icons/icon_apply.png",
                    "desc":"申请流程",
                    "link":"../school/apply.html"
                },
                {
                    "image":"img/icons/icon_sch_rank.png",
                    "desc":"学校排名",
                    "link":"../school/index.html"
                },
                {
                    "image":"img/icons/icon_test_strategy.png",
                    "desc":"考试攻略",
                    "link":"../school/exam.html"
                },
                {
                    "image":"img/icons/icon_luggage.png",
                    "desc":"行前事项",
                    "link":"../school/notes.html"
                },
                {
                    "image":"img/icons/icon_fee.png",
                    "desc":"缴纳学费",
                    "link":"../school/payment.html"
                },
                {
                    "image":"img/icons/icon_air_ticket_insurance.png",
                    "desc":"机票保险",
                    "link":"../school/flight.html"
                },
                {
                    "image":"img/icons/icon_preparation.png",
                    "desc":"抵校准备",
                    "link":"../school/arrival.html"
                },
                {
                    "image":"img/icons/icon_daily.png",
                    "desc":"日常生活",
                    "link":"../school/daily.html"
                },
                {
                    "image":"img/icons/icon_career.png",
                    "desc":"学成就业",
                    "link":"../school/graduation.html"
                }
            ],
            "banners":[
                // {
                //     "image":"img/top_banner/s1-banner1.jpg",
                //     "desc":"签下人生第一张Visa 打开世界的大门",
                //     "link":"cards.php"
                // },
                {
                    "image":"img/top_banner/banner-230323.jpg",
                    "desc":"",
                    "link":"https://digitas.yijiuplus.com/studyabroad/fy23activity/index.html"
                },
                {
                    "image":"img/top_banner/01_preparation/share/01_visa_with_u@2x.png",
                    "desc":"出国留学 visa 全程相伴",
                    "link":"https://www.visa.com.cn/pay-with-visa/find-a-card/credit-cards.html"
                },
                {
                    "image":"img/top_banner/01_preparation/share/04_xdf@2x.png",
                    "desc":"新东方前途出国：服务费立减高达2000元",
                    "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1898"
                },
                // {
                //     "image":"img/top_banner/02_pre_trip/03_jd_insurance@2x.png",
                //     "desc":"京东安联财险（留学保险）：高达30万元留学生保障计划",
                //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1900"
                // },
                // {
                //     "image":"img/top_banner/banner-621-1.png",
                //     "desc":"British council ",
                //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?utm_source=WeChat&cid=2&id=2130"
                // },
                // {
                //     "image":"img/top_banner/visa-video-banner.png",
                //     "desc":"我的留学生活",
                //     "link":"javascript:videoPop()"
                // },
            ],
            "benefits":[
                {
                    "category":"留学规划",
                    "benefits":[
                        {
                            "image":"img/content_cards/offer-2411-2.jpg",
                            "title":"非同返享-一拍即付全球返",
                            "desc":"购物/公交/餐饮处处便捷支付体验",
                            "link": "https://visaoffer.yijiuplus.com/index/index/detail?bankid=&cid=0&id=2133&nav=1"
                        },
                        {
                            "image":"img/content_cards/01_preparation/share/06_xdf@3x.jpg",
                            "title":"新东方前途出国",
                            "desc":"服务费立减高达2000元",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1898"
                        },
                        // {
                        //     "image":"img/2023/card1.jpg",
                        //     "title":"新东方国际教育",
                        //     "desc":"课程培训最高可享 85 折优惠",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?utm_source=WeChat&cid=31&id=2072"
                        // },
                    ]
                },
                // {
                //     "category":"保险",
                //     "benefits":[
                //         {
                //             "image":"img/content_cards/01_preparation/share/04_study_insurance@3x.jpg",
                //             "title":"京东安联财险（留学保险）",
                //             "desc":"高达30万元留学生保障计划",
                //             "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1900"
                //         },
                //         {
                //             "image":"img/content_cards/01_preparation/share/05_travel_insurance@3x.jpg",
                //             "title":"京东安联财险（旅行保险）",
                //             "desc":"最高30万元医疗保障，最高20万元紧急救援保障",
                //             "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1901"
                //         },
                //     ]
                // },
                // {
                //     "category":"线上课程",
                //     "benefits":[
                //         {
                //             "image":"img/content_cards/offer-621-1.png",
                //             "title":"2U GetSmarter",
                //             "desc":"Visa卡付款即享15%折扣优惠",
                //             "link":"https://visaoffer.yijiuplus.com/index/index/detail?utm_source=WeChat&cid=2&id=2129"
                //         },
                //         {
                //             "image":"img/content_cards/offer-621-2.png",
                //             "title":"British council",
                //             "desc":"Visa卡付款即享10%折扣优惠",
                //             "link":"https://visaoffer.yijiuplus.com/index/index/detail?utm_source=WeChat&cid=2&id=2130"
                //         },
                // //         {
                // //             "image":"img/content_cards/offer-621-3.png",
                // //             "title":"Coursera",
                // //             "desc":"Visa卡付款即享10%折扣优惠",
                // //             "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=2029"
                // //         },
                //         {
                //             "image":"img/content_cards/offer-621-4.png",
                //             "title":"edX",
                //             "desc":"Visa卡付款即享15%折扣优惠",
                //             "link":"https://visaoffer.yijiuplus.com/index/index/detail?utm_source=WeChat&cid=2&id=2131"
                //         },
                //         {
                //             "image":"img/content_cards/offer-0306-1.png",
                //             "title":"Skillshare",
                //             "desc":"年度会员40%的折扣优惠",
                //             "link":"https://visaoffer.yijiuplus.com/index/index/detail?utm_source=WeChat&cid=31&id=2132"
                //         },
                //         {
                //             "image":"img/content_cards/offer-0306-2.png",
                //             "title":"Emeritus",
                //             "desc":"精选课程享受10%的折扣优惠",
                //             "link":"https://visaoffer.yijiuplus.com/index/index/detail?utm_source=WeChat&cid=31&id=2134"
                //         },
                        
                //     ]
                // },
            ]
        },
        "pretrip":{
            "title":"Option 5",
            "interests":[
                {
                    "image":"img/icons/icon_news.png",
                    "desc":"留学新闻",
                    "link":"../school/news.html"
                },
                {
                    "image":"img/icons/icon_fee.png",
                    "desc":"缴纳学费",
                    "link":"../school/payment.html"
                },
                {
                    "image":"img/icons/icon_luggage.png",
                    "desc":"行前事项",
                    "link":"../school/notes.html"
                },
                {
                    "image":"img/icons/icon_air_ticket_insurance.png",
                    "desc":"机票保险",
                    "link":"../school/flight.html"
                },
                {
                    "image":"img/icons/icon_apply.png",
                    "desc":"申请流程",
                    "link":"../school/apply.html"
                },
                {
                    "image":"img/icons/icon_sch_rank.png",
                    "desc":"学校排名",
                    "link":"../school/index.html"
                },
                {
                    "image":"img/icons/icon_test_strategy.png",
                    "desc":"考试攻略",
                    "link":"../school/exam.html"
                },
                {
                    "image":"img/icons/icon_preparation.png",
                    "desc":"抵校准备",
                    "link":"../school/arrival.html"
                },
                {
                    "image":"img/icons/icon_daily.png",
                    "desc":"日常生活",
                    "link":"../school/daily.html"
                },
                {
                    "image":"img/icons/icon_career.png",
                    "desc":"学成就业",
                    "link":"../school/graduation.html"
                }
            ],
            "banners":[
                // {
                //     "image":"img/top_banner/s2-banner1.jpg",
                //     "desc":"签下人生第一张Visa 放飞爱探索的心",
                //     "link":"cards.php"
                // },
                {
                    "image":"img/top_banner/banner-230323.jpg",
                    "desc":"",
                    "link":"https://digitas.yijiuplus.com/studyabroad/fy23activity/index.html"
                },
                {
                    "image":"img/0722/trip-banner1.png",
                    "desc":"留学缴费刷Visa",
                    "link":"javascript:goPayment()"
                },
                {
                    "image":"img/top_banner/banner-621-2.png",
                    "desc":"Scoot酷航",
                    "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=2038"
                },
                // {
                //     "image":"img/top_banner/banner-621-3.png",
                //     "desc":"龙腾出行",
                //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=2034"
                // },
                {
                    "image":"img/top_banner/02_pre_trip/usa/05_ifree_data@2x.png",
                    "desc":"iFREE：流量$1通",
                    "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1902"
                },
                // {
                //     "image":"img/top_banner/0601.jpg",
                //     "desc":"",
                //     "link":"http://www.flyert.com/visavoyage"
                // },
                // {
                //     "image":"img/top_banner/visa-video-banner.png",
                //     "desc":"我的留学生活",
                //     "link":"javascript:videoPop()"
                // },
            ],
            "benefits":[
                {
                    "category": "交通",
                    "benefits":[
                        {
                            "image":"img/content_cards/offer-2024-0124.png",
                            "title":"非同返享-拍Visa搭港铁",
                            "desc":"率先体验Visa一拍过闸",
                            "link":"https://visaoffer.hypers.com.cn/index/index/detail?id=2553"
                        },
                        // {
                        //     "image":"img/content_cards/offer-2024-0119.jpg",
                        //     "title":"V享无界",
                        //     "desc":"多重礼遇，畅游世界",
                        //     "link":"https://www.flyert.com/visavoyage"
                        // },
                        
                        {
                            "image":"img/content_cards/offer-621-6.png",
                            "title":"Scoot酷航",
                            "desc":"Visa卡付款即可购买酷航机票代金券",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=2038"
                        },
                        // {
                        //     "image":"img/content_cards/offer-621-7.png",
                        //     "title":"国际航司",
                        //     "desc":"美国联合航空、达美航空指定航线舱位",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=2023"
                        // },
                        // {
                        //     "image":"img/content_cards/02_pre-trip/card2.jpg",
                        //     "title":"租租车",
                        //     "desc":"境内外双重租车特权",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1921"
                        // },
                        // {
                        //     "image":"img/content_cards/offer-621-8.png",
                        //     "title":"Hertz国际租车",
                        //     "desc":"享9折及额外优惠",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=28"
                        // },
                        // {
                        //     "image":"img/top_banner/top-0601-1.png",
                        //     "title":"龙腾出行",
                        //     "desc":"指定Visa卡付款，可1美元享受龙腾境外贵宾厅",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=2034"
                        // },
                        {
                            "image":"img/2023/card2.jpg",
                            "title":"美元购——龙腾境外贵宾厅",
                            "desc":"可享1美元购买龙腾境外贵宾厅服务",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=0&id=2071"
                        },
                    ]
                },
                {
                    "category": "酒店住宿",
                    "benefits":[
                        // {
                        //     "image":"img/top_banner/top-0601-2.png",
                        //     "title":"Airbnb爱彼迎",
                        //     "desc":"指定Visa卡付款，可0.1美元享受境外房源优惠券包",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=2035"
                        // },
                        // {
                        //     "image":"img/content_cards/offer-621-9.png",
                        //     "title":"Hotels.com好订网",
                        //     "desc":"在线订房享92折优惠",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1522"
                        // },
                        {
                            "image":"img/content_cards/02_pre-trip/others/8hotels@3x.jpg",
                            "title":"8大奢华酒店集团",
                            "desc":"入住即返高达$100消费抵扣",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1918"
                        },
                        {
                            "image":"img/content_cards/offer-621-10.png",
                            "title":"Agoda",
                            "desc":"任何一笔订单都可立享折上7%立减的超值礼遇",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1529"
                        },
                    ]
                },
                {
                    "category": "网络服务",
                    "benefits":[
                        {
                            "image":"img/content_cards/02_pre-trip/card3.jpg",
                            "title":"iFREE",
                            "desc":"一天一美元开启环球之旅",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1902"
                        },
                    ]
                }
            ]
        },
        "destination":{
            "title":"Option 6",
            "interests":[
                {
                    "image":"img/icons/icon_news.png",
                    "desc":"留学新闻",
                    "link":"../school/news.html"
                },
                {
                    "image":"img/icons/icon_preparation.png",
                    "desc":"抵校准备",
                    "link":"../school/arrival.html"
                },
                {
                    "image":"img/icons/icon_daily.png",
                    "desc":"日常生活",
                    "link":"../school/daily.html"
                },
                {
                    "image":"img/icons/icon_career.png",
                    "desc":"学成就业",
                    "link":"../school/graduation.html"
                },
                {
                    "image":"img/icons/icon_apply.png",
                    "desc":"申请流程",
                    "link":"../school/apply.html"
                },
                {
                    "image":"img/icons/icon_sch_rank.png",
                    "desc":"学校排名",
                    "link":"../school/index.html"
                },
                {
                    "image":"img/icons/icon_test_strategy.png",
                    "desc":"考试攻略",
                    "link":"../school/exam.html"
                },
                {
                    "image":"img/icons/icon_luggage.png",
                    "desc":"行前事项",
                    "link":"../school/notes.html"
                },
                {
                    "image":"img/icons/icon_fee.png",
                    "desc":"缴纳学费",
                    "link":"../school/payment.html"
                },
                {
                    "image":"img/icons/icon_air_ticket_insurance.png",
                    "desc":"机票保险",
                    "link":"../school/flight.html"
                }
            ],
            "banners":[
                // {
                //     "image":"img/top_banner/s3-banner1.jpg",
                //     "desc":"签下人生第一张Visa 解锁留学多面精彩",
                //     "link":"cards.php"
                // },
                {
                    "image":"img/top_banner/banner-230323.jpg",
                    "desc":"",
                    "link":"https://digitas.yijiuplus.com/studyabroad/fy23activity/index.html"
                },
                // {
                //     "image":"img/top_banner/03_destination/01_uber_v2@2x.png",
                //     "desc":"境外美食/购物/打车周周返: Visa持卡人境外消费，最高20美元福利周周享",
                //     "link":"https://visaoffer.yijiuplus.com/index/signup2/index?bankid=visa_wechat"
                // },
                {
                    "image":"img/top_banner/03_destination/02_medical@2x.png",
                    "desc":"无需出门辗转就医，用Visa即刻在线咨询",
                    "link":"https://visaoffer.yijiuplus.com/index/index/detail?id=1912&nav=1"
                },
                {
                    "image":"img/top_banner/03_destination/usa/04_ifree_data@2x.png",
                    "desc":"iFREE：流量$1通",
                    "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1902"
                },
                // {
                //     "image":"img/top_banner/03_destination/global-banner.png",
                //     "desc":"海淘精选礼遇",
                //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1909"
                // },
                // {
                //     "image":"img/top_banner/visa-video-banner.png",
                //     "desc":"我的留学生活",
                //     "link":"javascript:videoPop()"
                // }
            ],
            "benefits":[
                {
                    "category":"健康生活",
                    "benefits":[
                        {
                            "image":"img/content_cards/offer-2411-1.jpg",
                            "title":"英国私立医院（脉德医疗）",
                            "desc":"享£50 健康礼包/代金券",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?bankid=&cid=0&id=2529&nav=1"
                        },
                        {
                            "image":"img/content_cards/03_destination/usa/health/01_online_dr@3x.jpg",
                            "title":"爱睿智健康",
                            "desc":"在线医疗咨询服务",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1912"
                        },
                        // {
                        //     "image":"img/content_cards/03_destination/usa/health/02_video_dr@3x.jpg",
                        //     "title":"和缓视频医生",
                        //     "desc":"7×24小时实时在线视频医生咨询服务",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail? cid=31&id=2033"
                        // },
                    ]
                },
                {
                    "category":"购物",
                    "benefits":[
                        {
                            "image":"img/content_cards/offer-2411-2.jpg",
                            "title":"非同返享-一拍即付全球返",
                            "desc":"购物/公交/餐饮处处便捷支付体验",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?bankid=&cid=0&id=2133&nav=1"
                        },
                        // {
                        //     "image":"img/content_cards/03_destination/card1.jpg",
                        //     "title":"海淘精选礼遇",
                        //     "desc":"11大品类海淘电商低至4折",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1909"
                        // },
                        {
                            "image":"img/content_cards/offer-621-11.png",
                            "title":"非同返享-境外生活",
                            "desc":"境外美食/购物/订阅类精选商户消费享最高100%返现",
                            "link":"https://visaoffer.yijiuplus.com/index/signup3"
                        },
                        // {
                        //     "image":"img/content_cards/offer-bisite1.png",
                        //     "title":"比斯特系列欧洲购物村",
                        //     "desc":"享九大欧洲购物村9折特惠，带你尽情畅购欧洲",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?utm_source=WeChat&id=2053"
                        // },
                        // {
                        //     "image":"img/content_cards/offer-bisite2.png",
                        //     "title":"比斯特系列欧洲购物村",
                        //     "desc":"无限卡尊享VIP九折特惠、贵宾室、免提购物服务等超卓礼遇",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?utm_source=WeChat&id=2054"
                        // },
                    ]
                },
                {
                    "category": "交通美食",
                    "benefits":[
                        {
                            "image":"img/content_cards/offer-2024-0129.jpg",
                            "title":"非同返享-Visa春节年夜饭餐饮返现",
                            "desc":"龙年春节月境外线下消费单笔满99$返9$",
                            "link":"https://visaoffer.hypers.com.cn/index/index/detail?id=2557&nav=1"
                        },
                        {
                            "image":"img/content_cards/offer-2024-0124.png",
                            "title":"非同返享-拍Visa搭港铁",
                            "desc":"率先体验Visa一拍过闸",
                            "link":"https://visaoffer.hypers.com.cn/index/index/detail?id=2553"
                        },
                        {
                            "image":"img/content_cards/offer-2411-3.jpg",
                            "title":"非同返享-境外交通笔笔随机返",
                            "desc":"最高享100%免单",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?bankid=&cid=0&id=2481&nav=1"
                        },
                        
                        // {
                        //     "image":"img/content_cards/03_destination/card4.jpg",
                        //     "title":"租租车",
                        //     "desc":"境内外双重租车特权",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1921"
                        // },
                        // {
                        //     "image":"img/content_cards/03_destination/usa/dine/01_uber@3x.jpg",
                        //     "title":"境外美食/购物/打车周周返",
                        //     "desc":"Visa持卡人境外消费，最高20美元福利周周享",
                        //     "link":"https://visaoffer.yijiuplus.com/index/signup2/index?bankid=visa_wechat"
                        // },
                        // {
                        //     "image":"img/content_cards/offer-621-8.png",
                        //     "title":"Hertz国际租车",
                        //     "desc":"享9折及额外优惠",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=28"
                        // },
                    ]
                },
                {
                    "category":"酒店住宿",
                    "benefits":[
                        // {
                        //     "image":"img/top_banner/top-0601-2.png",
                        //     "title":"Airbnb爱彼迎",
                        //     "desc":"指定Visa卡付款，可0.1美元享受境外房源优惠券包",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=2035"
                        // },
                        // {
                        //     "image":"img/content_cards/offer-621-9.png",
                        //     "title":"Hotels.com好订网",
                        //     "desc":"在线订房享92折优惠",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1522"
                        // },
                        {
                            "image":"img/content_cards/02_pre-trip/others/8hotels@3x.jpg",
                            "title":"8大奢华酒店集团",
                            "desc":"入住即返高达$100消费抵扣",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1918"
                        },
                        {
                            "image":"img/content_cards/offer-621-10.png",
                            "title":"Agoda",
                            "desc":"任何一笔订单都可立享折上7%立减的超值礼遇",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1529"
                        },
                    ]
                },
                {
                    "category":"explore-more",
                    "link":"https://visaoffer.yijiuplus.com/index/index/offer_list?cid=0&area_id=0&scene_id=2&classify_id=0&card_type_id=0&card_etc_id=0&card_theme_id=0",
                }
            ]
        }
    },
    "ca":{
        "preparation":{
            "title":"Option 7",
            "interests":[
                {
                    "image":"img/icons/icon_news.png",
                    "desc":"留学新闻",
                    "link":"../school/news.html"
                },
                {
                    "image":"img/icons/icon_apply.png",
                    "desc":"申请流程",
                    "link":"../school/apply.html"
                },
                {
                    "image":"img/icons/icon_sch_rank.png",
                    "desc":"学校排名",
                    "link":"../school/index.html"
                },
                {
                    "image":"img/icons/icon_test_strategy.png",
                    "desc":"考试攻略",
                    "link":"../school/exam.html"
                },
                {
                    "image":"img/icons/icon_luggage.png",
                    "desc":"行前事项",
                    "link":"../school/notes.html"
                },
                {
                    "image":"img/icons/icon_fee.png",
                    "desc":"缴纳学费",
                    "link":"../school/payment.html"
                },
                {
                    "image":"img/icons/icon_air_ticket_insurance.png",
                    "desc":"机票保险",
                    "link":"../school/flight.html"
                },
                {
                    "image":"img/icons/icon_preparation.png",
                    "desc":"抵校准备",
                    "link":"../school/arrival.html"
                },
                {
                    "image":"img/icons/icon_daily.png",
                    "desc":"日常生活",
                    "link":"../school/daily.html"
                },
                {
                    "image":"img/icons/icon_career.png",
                    "desc":"学成就业",
                    "link":"../school/graduation.html"
                }
            ],
            "banners":[
                // {
                //     "image":"img/top_banner/s1-banner1.jpg",
                //     "desc":"签下人生第一张Visa 打开世界的大门",
                //     "link":"cards.php"
                // },
                {
                    "image":"img/top_banner/banner-230323.jpg",
                    "desc":"",
                    "link":"https://digitas.yijiuplus.com/studyabroad/fy23activity/index.html"
                },
                {
                    "image":"img/top_banner/01_preparation/share/01_visa_with_u@2x.png",
                    "desc":"出国留学 visa 全程相伴",
                    "link":"https://www.visa.com.cn/pay-with-visa/find-a-card/credit-cards.html"
                },
                {
                    "image":"img/top_banner/01_preparation/share/04_xdf@2x.png",
                    "desc":"新东方前途出国：服务费立减高达2000元",
                    "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1898"
                },
                // {
                //     "image":"img/top_banner/02_pre_trip/03_jd_insurance@2x.png",
                //     "desc":"京东安联财险（留学保险）：高达30万元留学生保障计划",
                //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1900"
                // },
                // {
                //     "image":"img/top_banner/banner-621-1.png",
                //     "desc":"British council ",
                //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?utm_source=WeChat&cid=2&id=2130"
                // },
                // {
                //     "image":"img/top_banner/visa-video-banner.png",
                //     "desc":"我的留学生活",
                //     "link":"javascript:videoPop()"
                // },
            ],
            "benefits":[
                {
                    "category":"留学规划",
                    "benefits":[
                        {
                            "image":"img/content_cards/offer-2411-2.jpg",
                            "title":"非同返享-一拍即付全球返",
                            "desc":"购物/公交/餐饮处处便捷支付体验",
                            "link": "https://visaoffer.yijiuplus.com/index/index/detail?bankid=&cid=0&id=2133&nav=1"
                        },
                        {
                            "image":"img/content_cards/01_preparation/share/06_xdf@3x.jpg",
                            "title":"新东方前途出国",
                            "desc":"服务费立减高达2000元",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1898"
                        },
                        // {
                        //     "image":"img/2023/card1.jpg",
                        //     "title":"新东方国际教育",
                        //     "desc":"课程培训最高可享 85 折优惠",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?utm_source=WeChat&cid=31&id=2072"
                        // },
                    ]
                },
                // {
                //     "category":"保险",
                //     "benefits":[
                //         {
                //             "image":"img/content_cards/01_preparation/share/04_study_insurance@3x.jpg",
                //             "title":"京东安联财险（留学保险）",
                //             "desc":"高达30万元留学生保障计划",
                //             "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1900"
                //         },
                //         {
                //             "image":"img/content_cards/01_preparation/share/05_travel_insurance@3x.jpg",
                //             "title":"京东安联财险（旅行保险）",
                //             "desc":"最高30万元医疗保障，最高20万元紧急救援保障",
                //             "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1901"
                //         },
                //     ]
                // },
                // {
                //     "category":"线上课程",
                //     "benefits":[
                //         {
                //             "image":"img/content_cards/offer-621-1.png",
                //             "title":"2U GetSmarter",
                //             "desc":"Visa卡付款即享15%折扣优惠",
                //             "link":"https://visaoffer.yijiuplus.com/index/index/detail?utm_source=WeChat&cid=2&id=2129"
                //         },
                //         {
                //             "image":"img/content_cards/offer-621-2.png",
                //             "title":"British council",
                //             "desc":"Visa卡付款即享10%折扣优惠",
                //             "link":"https://visaoffer.yijiuplus.com/index/index/detail?utm_source=WeChat&cid=2&id=2130"
                //         },
                // //         {
                // //             "image":"img/content_cards/offer-621-3.png",
                // //             "title":"Coursera",
                // //             "desc":"Visa卡付款即享10%折扣优惠",
                // //             "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=2029"
                // //         },
                //         {
                //             "image":"img/content_cards/offer-621-4.png",
                //             "title":"edX",
                //             "desc":"Visa卡付款即享15%折扣优惠",
                //             "link":"https://visaoffer.yijiuplus.com/index/index/detail?utm_source=WeChat&cid=2&id=2131"
                //         },
                //         {
                //             "image":"img/content_cards/offer-0306-1.png",
                //             "title":"Skillshare",
                //             "desc":"年度会员40%的折扣优惠",
                //             "link":"https://visaoffer.yijiuplus.com/index/index/detail?utm_source=WeChat&cid=31&id=2132"
                //         },
                //         {
                //             "image":"img/content_cards/offer-0306-2.png",
                //             "title":"Emeritus",
                //             "desc":"精选课程享受10%的折扣优惠",
                //             "link":"https://visaoffer.yijiuplus.com/index/index/detail?utm_source=WeChat&cid=31&id=2134"
                //         },
                        
                //     ]
                // },
            ]
        },
        "pretrip":{
            "title":"Option 8",
            "interests":[
                {
                    "image":"img/icons/icon_news.png",
                    "desc":"留学新闻",
                    "link":"../school/news.html"
                },
                {
                    "image":"img/icons/icon_fee.png",
                    "desc":"缴纳学费",
                    "link":"../school/payment.html"
                },
                {
                    "image":"img/icons/icon_luggage.png",
                    "desc":"行前事项",
                    "link":"../school/notes.html"
                },
                {
                    "image":"img/icons/icon_air_ticket_insurance.png",
                    "desc":"机票保险",
                    "link":"../school/flight.html"
                },
                {
                    "image":"img/icons/icon_apply.png",
                    "desc":"申请流程",
                    "link":"../school/apply.html"
                },
                {
                    "image":"img/icons/icon_sch_rank.png",
                    "desc":"学校排名",
                    "link":"../school/index.html"
                },
                {
                    "image":"img/icons/icon_test_strategy.png",
                    "desc":"考试攻略",
                    "link":"../school/exam.html"
                },
                {
                    "image":"img/icons/icon_preparation.png",
                    "desc":"抵校准备",
                    "link":"../school/arrival.html"
                },
                {
                    "image":"img/icons/icon_daily.png",
                    "desc":"日常生活",
                    "link":"../school/daily.html"
                },
                {
                    "image":"img/icons/icon_career.png",
                    "desc":"学成就业",
                    "link":"../school/graduation.html"
                }
            ],
            "banners":[
                // {
                //     "image":"img/top_banner/s2-banner1.jpg",
                //     "desc":"签下人生第一张Visa 放飞爱探索的心",
                //     "link":"cards.php"
                // },
                {
                    "image":"img/top_banner/banner-230323.jpg",
                    "desc":"",
                    "link":"https://digitas.yijiuplus.com/studyabroad/fy23activity/index.html"
                },
                {
                    "image":"img/0722/trip-banner1.png",
                    "desc":"留学缴费刷Visa",
                    "link":"javascript:goPayment()"
                },
                {
                    "image":"img/top_banner/banner-621-2.png",
                    "desc":"Scoot酷航",
                    "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=2038"
                },
                // {
                //     "image":"img/top_banner/banner-621-3.png",
                //     "desc":"龙腾出行",
                //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=2034"
                // },
                {
                    "image":"img/top_banner/02_pre_trip/usa/05_ifree_data@2x.png",
                    "desc":"iFREE：流量$1通",
                    "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1902"
                },
                // {
                //     "image":"img/top_banner/0601.jpg",
                //     "desc":"",
                //     "link":"http://www.flyert.com/visavoyage"
                // },
                // {
                //     "image":"img/top_banner/visa-video-banner.png",
                //     "desc":"我的留学生活",
                //     "link":"javascript:videoPop()"
                // },
            ],
            "benefits":[
                {
                    "category": "交通",
                    "benefits":[
                        {
                            "image":"img/content_cards/offer-2024-0124.png",
                            "title":"非同返享-拍Visa搭港铁",
                            "desc":"率先体验Visa一拍过闸",
                            "link":"https://visaoffer.hypers.com.cn/index/index/detail?id=2553"
                        },
                        // {
                        //     "image":"img/content_cards/offer-2024-0119.jpg",
                        //     "title":"V享无界",
                        //     "desc":"多重礼遇，畅游世界",
                        //     "link":"https://www.flyert.com/visavoyage"
                        // },
                        
                        {
                            "image":"img/content_cards/offer-621-6.png",
                            "title":"Scoot酷航",
                            "desc":"Visa卡付款即可购买酷航机票代金券",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=2038"
                        },
                        // {
                        //     "image":"img/content_cards/offer-621-7.png",
                        //     "title":"国际航司",
                        //     "desc":"美国联合航空、达美航空指定航线舱位",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=2023"
                        // },
                        // {
                        //     "image":"img/content_cards/02_pre-trip/card2.jpg",
                        //     "title":"租租车",
                        //     "desc":"境内外双重租车特权",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1921"
                        // },
                        // {
                        //     "image":"img/content_cards/offer-621-8.png",
                        //     "title":"Hertz国际租车",
                        //     "desc":"享9折及额外优惠",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=28"
                        // },
                        // {
                        //     "image":"img/top_banner/top-0601-1.png",
                        //     "title":"龙腾出行",
                        //     "desc":"指定Visa卡付款，可1美元享受龙腾境外贵宾厅",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=2034"
                        // },
                        {
                            "image":"img/2023/card2.jpg",
                            "title":"美元购——龙腾境外贵宾厅",
                            "desc":"可享1美元购买龙腾境外贵宾厅服务",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=0&id=2071"
                        },
                    ]
                },
                {
                    "category": "酒店住宿",
                    "benefits":[
                        // {
                        //     "image":"img/top_banner/top-0601-2.png",
                        //     "title":"Airbnb爱彼迎",
                        //     "desc":"指定Visa卡付款，可0.1美元享受境外房源优惠券包",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=2035"
                        // },
                        // {
                        //     "image":"img/content_cards/offer-621-9.png",
                        //     "title":"Hotels.com好订网",
                        //     "desc":"在线订房享92折优惠",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1522"
                        // },
                        {
                            "image":"img/content_cards/02_pre-trip/others/8hotels@3x.jpg",
                            "title":"8大奢华酒店集团",
                            "desc":"入住即返高达$100消费抵扣",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1918"
                        },
                        {
                            "image":"img/content_cards/offer-621-10.png",
                            "title":"Agoda",
                            "desc":"任何一笔订单都可立享折上7%立减的超值礼遇",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1529"
                        },
                    ]
                },
                {
                    "category": "网络服务",
                    "benefits":[
                        {
                            "image":"img/content_cards/02_pre-trip/card3.jpg",
                            "title":"iFREE",
                            "desc":"一天一美元开启环球之旅",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1902"
                        },
                    ]
                }
            ]
        },
        "destination":{
            "title":"Option 9",
            "interests":[
                {
                    "image":"img/icons/icon_news.png",
                    "desc":"留学新闻",
                    "link":"../school/news.html"
                },
                {
                    "image":"img/icons/icon_preparation.png",
                    "desc":"抵校准备",
                    "link":"../school/arrival.html"
                },
                {
                    "image":"img/icons/icon_daily.png",
                    "desc":"日常生活",
                    "link":"../school/daily.html"
                },
                {
                    "image":"img/icons/icon_career.png",
                    "desc":"学成就业",
                    "link":"../school/graduation.html"
                },
                {
                    "image":"img/icons/icon_apply.png",
                    "desc":"申请流程",
                    "link":"../school/apply.html"
                },
                {
                    "image":"img/icons/icon_sch_rank.png",
                    "desc":"学校排名",
                    "link":"../school/index.html"
                },
                {
                    "image":"img/icons/icon_test_strategy.png",
                    "desc":"考试攻略",
                    "link":"../school/exam.html"
                },
                {
                    "image":"img/icons/icon_luggage.png",
                    "desc":"行前事项",
                    "link":"../school/notes.html"
                },
                {
                    "image":"img/icons/icon_fee.png",
                    "desc":"缴纳学费",
                    "link":"../school/payment.html"
                },
                {
                    "image":"img/icons/icon_air_ticket_insurance.png",
                    "desc":"机票保险",
                    "link":"../school/flight.html"
                }
            ],
            "banners":[
                // {
                //     "image":"img/top_banner/s3-banner1.jpg",
                //     "desc":"签下人生第一张Visa 解锁留学多面精彩",
                //     "link":"cards.php"
                // },
                {
                    "image":"img/top_banner/banner-230323.jpg",
                    "desc":"",
                    "link":"https://digitas.yijiuplus.com/studyabroad/fy23activity/index.html"
                },
                // {
                //     "image":"img/top_banner/03_destination/01_uber_v2@2x.png",
                //     "desc":"境外美食/购物/打车周周返: Visa持卡人境外消费，最高20美元福利周周享",
                //     "link":"https://visaoffer.yijiuplus.com/index/signup2/index?bankid=visa_wechat"
                // },
                {
                    "image":"img/top_banner/03_destination/02_medical@2x.png",
                    "desc":"无需出门辗转就医，用Visa即刻在线咨询",
                    "link":"https://visaoffer.yijiuplus.com/index/index/detail?id=1912&nav=1"
                },
                {
                    "image":"img/top_banner/03_destination/usa/04_ifree_data@2x.png",
                    "desc":"iFREE：流量$1通",
                    "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1902"
                },
                // {
                //     "image":"img/top_banner/03_destination/global-banner.png",
                //     "desc":"海淘精选礼遇",
                //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1909"
                // },
                // {
                //     "image":"img/top_banner/visa-video-banner.png",
                //     "desc":"我的留学生活",
                //     "link":"javascript:videoPop()"
                // }
            ],
            "benefits":[
                {
                    "category":"健康生活",
                    "benefits":[
                        {
                            "image":"img/content_cards/03_destination/usa/health/01_online_dr@3x.jpg",
                            "title":"爱睿智健康",
                            "desc":"在线医疗咨询服务",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1912"
                        },
                        // {
                        //     "image":"img/content_cards/03_destination/usa/health/02_video_dr@3x.jpg",
                        //     "title":"和缓视频医生",
                        //     "desc":"7×24小时实时在线视频医生咨询服务",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail? cid=31&id=2033"
                        // },
                    ]
                },
                {
                    "category":"购物",
                    "benefits":[
                        {
                            "image":"img/content_cards/offer-2411-2.jpg",
                            "title":"非同返享-一拍即付全球返",
                            "desc":"购物/公交/餐饮处处便捷支付体验",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?bankid=&cid=0&id=2133&nav=1"
                        },
                        // {
                        //     "image":"img/content_cards/03_destination/card1.jpg",
                        //     "title":"海淘精选礼遇",
                        //     "desc":"11大品类海淘电商低至4折",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1909"
                        // },
                        {
                            "image":"img/content_cards/offer-621-11.png",
                            "title":"非同返享-境外生活",
                            "desc":"境外美食/购物/订阅类精选商户消费享最高100%返现",
                            "link":"https://visaoffer.yijiuplus.com/index/signup3"
                        },
                    ]
                },
                {
                    "category": "交通美食",
                    "benefits":[
                        {
                            "image":"img/content_cards/offer-2024-0129.jpg",
                            "title":"非同返享-Visa春节年夜饭餐饮返现",
                            "desc":"龙年春节月境外线下消费单笔满99$返9$",
                            "link":"https://visaoffer.hypers.com.cn/index/index/detail?id=2557&nav=1"
                        },
                        {
                            "image":"img/content_cards/offer-2024-0124.png",
                            "title":"非同返享-拍Visa搭港铁",
                            "desc":"率先体验Visa一拍过闸",
                            "link":"https://visaoffer.hypers.com.cn/index/index/detail?id=2553"
                        },
                        {
                            "image":"img/content_cards/offer-2411-3.jpg",
                            "title":"非同返享-境外交通笔笔随机返",
                            "desc":"最高享100%免单",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?bankid=&cid=0&id=2481&nav=1"
                        },
                        
                        // {
                        //     "image":"img/content_cards/03_destination/card4.jpg",
                        //     "title":"租租车",
                        //     "desc":"境内外双重租车特权",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1921"
                        // },
                        // {
                        //     "image":"img/content_cards/03_destination/usa/dine/01_uber@3x.jpg",
                        //     "title":"境外美食/购物/打车周周返",
                        //     "desc":"Visa持卡人境外消费，最高20美元福利周周享",
                        //     "link":"https://visaoffer.yijiuplus.com/index/signup2/index?bankid=visa_wechat"
                        // },
                        // {
                        //     "image":"img/content_cards/offer-621-8.png",
                        //     "title":"Hertz国际租车",
                        //     "desc":"享9折及额外优惠",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=28"
                        // },
                    ]
                },
                {
                    "category":"酒店住宿",
                    "benefits":[
                        // {
                        //     "image":"img/top_banner/top-0601-2.png",
                        //     "title":"Airbnb爱彼迎",
                        //     "desc":"指定Visa卡付款，可0.1美元享受境外房源优惠券包",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=2035"
                        // },
                        // {
                        //     "image":"img/content_cards/offer-621-9.png",
                        //     "title":"Hotels.com好订网",
                        //     "desc":"在线订房享92折优惠",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1522"
                        // },
                        {
                            "image":"img/content_cards/02_pre-trip/others/8hotels@3x.jpg",
                            "title":"8大奢华酒店集团",
                            "desc":"入住即返高达$100消费抵扣",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1918"
                        },
                        {
                            "image":"img/content_cards/offer-621-10.png",
                            "title":"Agoda",
                            "desc":"任何一笔订单都可立享折上7%立减的超值礼遇",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1529"
                        },
                    ]
                },
                {
                    "category":"explore-more",
                    "link":"https://visaoffer.yijiuplus.com/index/index/offer_list?cid=0&area_id=0&scene_id=2&classify_id=0&card_type_id=0&card_etc_id=0&card_theme_id=0",
                }
            ]
        }
    },
    "au":{
        "preparation":{
            "title":"Option 10",
            "interests":[
                {
                    "image":"img/icons/icon_news.png",
                    "desc":"留学新闻",
                    "link":"../school/news.html"
                },
                {
                    "image":"img/icons/icon_apply.png",
                    "desc":"申请流程",
                    "link":"../school/apply.html"
                },
                {
                    "image":"img/icons/icon_sch_rank.png",
                    "desc":"学校排名",
                    "link":"../school/index.html"
                },
                {
                    "image":"img/icons/icon_test_strategy.png",
                    "desc":"考试攻略",
                    "link":"../school/exam.html"
                },
                {
                    "image":"img/icons/icon_luggage.png",
                    "desc":"行前事项",
                    "link":"../school/notes.html"
                },
                {
                    "image":"img/icons/icon_fee.png",
                    "desc":"缴纳学费",
                    "link":"../school/payment.html"
                },
                {
                    "image":"img/icons/icon_air_ticket_insurance.png",
                    "desc":"机票保险",
                    "link":"../school/flight.html"
                },
                {
                    "image":"img/icons/icon_preparation.png",
                    "desc":"抵校准备",
                    "link":"../school/arrival.html"
                },
                {
                    "image":"img/icons/icon_daily.png",
                    "desc":"日常生活",
                    "link":"../school/daily.html"
                },
                {
                    "image":"img/icons/icon_career.png",
                    "desc":"学成就业",
                    "link":"../school/graduation.html"
                }
            ],
            "banners":[
                // {
                //     "image":"img/top_banner/s1-banner1.jpg",
                //     "desc":"签下人生第一张Visa 打开世界的大门",
                //     "link":"cards.php"
                // },
                {
                    "image":"img/top_banner/banner-230323.jpg",
                    "desc":"",
                    "link":"https://digitas.yijiuplus.com/studyabroad/fy23activity/index.html"
                },
                {
                    "image":"img/top_banner/01_preparation/share/01_visa_with_u@2x.png",
                    "desc":"出国留学 visa 全程相伴",
                    "link":"https://www.visa.com.cn/pay-with-visa/find-a-card/credit-cards.html"
                },
                {
                    "image":"img/top_banner/01_preparation/share/04_xdf@2x.png",
                    "desc":"新东方前途出国：服务费立减高达2000元",
                    "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1898"
                },
                // {
                //     "image":"img/top_banner/02_pre_trip/03_jd_insurance@2x.png",
                //     "desc":"京东安联财险（留学保险）：高达30万元留学生保障计划",
                //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1900"
                // },
                // {
                //     "image":"img/top_banner/banner-621-1.png",
                //     "desc":"British council ",
                //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?utm_source=WeChat&cid=2&id=2130"
                // },
                // {
                //     "image":"img/top_banner/visa-video-banner.png",
                //     "desc":"我的留学生活",
                //     "link":"javascript:videoPop()"
                // },
            ],
            "benefits":[
                {
                    "category":"留学规划",
                    "benefits":[
                        {
                            "image":"img/content_cards/offer-2411-2.jpg",
                            "title":"非同返享-一拍即付全球返",
                            "desc":"购物/公交/餐饮处处便捷支付体验",
                            "link": "https://visaoffer.yijiuplus.com/index/index/detail?bankid=&cid=0&id=2133&nav=1"
                        },
                        {
                            "image":"img/content_cards/01_preparation/share/06_xdf@3x.jpg",
                            "title":"新东方前途出国",
                            "desc":"服务费立减高达2000元",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1898"
                        },
                        // {
                        //     "image":"img/2023/card1.jpg",
                        //     "title":"新东方国际教育",
                        //     "desc":"课程培训最高可享 85 折优惠",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?utm_source=WeChat&cid=31&id=2072"
                        // },
                    ]
                },
                // {
                //     "category":"保险",
                //     "benefits":[
                //         {
                //             "image":"img/content_cards/01_preparation/share/04_study_insurance@3x.jpg",
                //             "title":"京东安联财险（留学保险）",
                //             "desc":"高达30万元留学生保障计划",
                //             "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1900"
                //         },
                //         {
                //             "image":"img/content_cards/01_preparation/share/05_travel_insurance@3x.jpg",
                //             "title":"京东安联财险（旅行保险）",
                //             "desc":"最高30万元医疗保障，最高20万元紧急救援保障",
                //             "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1901"
                //         },
                //     ]
                // },
                // {
                //     "category":"线上课程",
                //     "benefits":[
                //         {
                //             "image":"img/content_cards/offer-621-1.png",
                //             "title":"2U GetSmarter",
                //             "desc":"Visa卡付款即享15%折扣优惠",
                //             "link":"https://visaoffer.yijiuplus.com/index/index/detail?utm_source=WeChat&cid=2&id=2129"
                //         },
                //         {
                //             "image":"img/content_cards/offer-621-2.png",
                //             "title":"British council",
                //             "desc":"Visa卡付款即享10%折扣优惠",
                //             "link":"https://visaoffer.yijiuplus.com/index/index/detail?utm_source=WeChat&cid=2&id=2130"
                //         },
                // //         {
                // //             "image":"img/content_cards/offer-621-3.png",
                // //             "title":"Coursera",
                // //             "desc":"Visa卡付款即享10%折扣优惠",
                // //             "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=2029"
                // //         },
                //         {
                //             "image":"img/content_cards/offer-621-4.png",
                //             "title":"edX",
                //             "desc":"Visa卡付款即享15%折扣优惠",
                //             "link":"https://visaoffer.yijiuplus.com/index/index/detail?utm_source=WeChat&cid=2&id=2131"
                //         },
                //         {
                //             "image":"img/content_cards/offer-0306-1.png",
                //             "title":"Skillshare",
                //             "desc":"年度会员40%的折扣优惠",
                //             "link":"https://visaoffer.yijiuplus.com/index/index/detail?utm_source=WeChat&cid=31&id=2132"
                //         },
                //         {
                //             "image":"img/content_cards/offer-0306-2.png",
                //             "title":"Emeritus",
                //             "desc":"精选课程享受10%的折扣优惠",
                //             "link":"https://visaoffer.yijiuplus.com/index/index/detail?utm_source=WeChat&cid=31&id=2134"
                //         },
                        
                //     ]
                // },
            ]
        },
        "pretrip":{
            "title":"Option 11",
            "interests":[
                {
                    "image":"img/icons/icon_news.png",
                    "desc":"留学新闻",
                    "link":"../school/news.html"
                },
                {
                    "image":"img/icons/icon_fee.png",
                    "desc":"缴纳学费",
                    "link":"../school/payment.html"
                },
                {
                    "image":"img/icons/icon_luggage.png",
                    "desc":"行前事项",
                    "link":"../school/notes.html"
                },
                {
                    "image":"img/icons/icon_air_ticket_insurance.png",
                    "desc":"机票保险",
                    "link":"../school/flight.html"
                },
                {
                    "image":"img/icons/icon_apply.png",
                    "desc":"申请流程",
                    "link":"../school/apply.html"
                },
                {
                    "image":"img/icons/icon_sch_rank.png",
                    "desc":"学校排名",
                    "link":"../school/index.html"
                },
                {
                    "image":"img/icons/icon_test_strategy.png",
                    "desc":"考试攻略",
                    "link":"../school/exam.html"
                },
                {
                    "image":"img/icons/icon_preparation.png",
                    "desc":"抵校准备",
                    "link":"../school/arrival.html"
                },
                {
                    "image":"img/icons/icon_daily.png",
                    "desc":"日常生活",
                    "link":"../school/daily.html"
                },
                {
                    "image":"img/icons/icon_career.png",
                    "desc":"学成就业",
                    "link":"../school/graduation.html"
                }
            ],
            "banners":[
                // {
                //     "image":"img/top_banner/s2-banner1.jpg",
                //     "desc":"签下人生第一张Visa 放飞爱探索的心",
                //     "link":"cards.php"
                // },
                {
                    "image":"img/top_banner/banner-230323.jpg",
                    "desc":"",
                    "link":"https://digitas.yijiuplus.com/studyabroad/fy23activity/index.html"
                },
                {
                    "image":"img/0722/trip-banner1.png",
                    "desc":"留学缴费刷Visa",
                    "link":"javascript:goPayment()"
                },
                {
                    "image":"img/top_banner/banner-621-2.png",
                    "desc":"Scoot酷航",
                    "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=2038"
                },
                // {
                //     "image":"img/top_banner/banner-621-3.png",
                //     "desc":"龙腾出行",
                //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=2034"
                // },
                {
                    "image":"img/top_banner/02_pre_trip/usa/05_ifree_data@2x.png",
                    "desc":"iFREE：流量$1通",
                    "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1902"
                },
                // {
                //     "image":"img/top_banner/0601.jpg",
                //     "desc":"",
                //     "link":"http://www.flyert.com/visavoyage"
                // },
                // {
                //     "image":"img/top_banner/visa-video-banner.png",
                //     "desc":"我的留学生活",
                //     "link":"javascript:videoPop()"
                // },
            ],
            "benefits":[
                {
                    "category": "交通",
                    "benefits":[
                        {
                            "image":"img/content_cards/offer-2024-0124.png",
                            "title":"非同返享-拍Visa搭港铁",
                            "desc":"率先体验Visa一拍过闸",
                            "link":"https://visaoffer.hypers.com.cn/index/index/detail?id=2553"
                        },
                        // {
                        //     "image":"img/content_cards/offer-2024-0119.jpg",
                        //     "title":"V享无界",
                        //     "desc":"多重礼遇，畅游世界",
                        //     "link":"https://www.flyert.com/visavoyage"
                        // },
                        
                        {
                            "image":"img/content_cards/offer-621-6.png",
                            "title":"Scoot酷航",
                            "desc":"Visa卡付款即可购买酷航机票代金券",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=2038"
                        },
                        // {
                        //     "image":"img/content_cards/offer-621-7.png",
                        //     "title":"国际航司",
                        //     "desc":"美国联合航空、达美航空指定航线舱位",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=2023"
                        // },
                        // {
                        //     "image":"img/content_cards/02_pre-trip/card2.jpg",
                        //     "title":"租租车",
                        //     "desc":"境内外双重租车特权",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1921"
                        // },
                        // {
                        //     "image":"img/content_cards/offer-621-8.png",
                        //     "title":"Hertz国际租车",
                        //     "desc":"享9折及额外优惠",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=28"
                        // },
                        // {
                        //     "image":"img/top_banner/top-0601-1.png",
                        //     "title":"龙腾出行",
                        //     "desc":"指定Visa卡付款，可1美元享受龙腾境外贵宾厅",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=2034"
                        // },
                        {
                            "image":"img/2023/card2.jpg",
                            "title":"美元购——龙腾境外贵宾厅",
                            "desc":"可享1美元购买龙腾境外贵宾厅服务",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=0&id=2071"
                        },
                    ]
                },
                {
                    "category": "酒店住宿",
                    "benefits":[
                        // {
                        //     "image":"img/top_banner/top-0601-2.png",
                        //     "title":"Airbnb爱彼迎",
                        //     "desc":"指定Visa卡付款，可0.1美元享受境外房源优惠券包",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=2035"
                        // },
                        // {
                        //     "image":"img/content_cards/offer-621-9.png",
                        //     "title":"Hotels.com好订网",
                        //     "desc":"在线订房享92折优惠",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1522"
                        // },
                        {
                            "image":"img/content_cards/02_pre-trip/others/8hotels@3x.jpg",
                            "title":"8大奢华酒店集团",
                            "desc":"入住即返高达$100消费抵扣",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1918"
                        },
                        {
                            "image":"img/content_cards/offer-621-10.png",
                            "title":"Agoda",
                            "desc":"任何一笔订单都可立享折上7%立减的超值礼遇",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1529"
                        },
                    ]
                },
                {
                    "category": "网络服务",
                    "benefits":[
                        {
                            "image":"img/content_cards/02_pre-trip/card3.jpg",
                            "title":"iFREE",
                            "desc":"一天一美元开启环球之旅",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1902"
                        },
                    ]
                }
            ]
        },
        "destination":{
            "title":"Option 12",
            "interests":[
                {
                    "image":"img/icons/icon_news.png",
                    "desc":"留学新闻",
                    "link":"../school/news.html"
                },
                {
                    "image":"img/icons/icon_preparation.png",
                    "desc":"抵校准备",
                    "link":"../school/arrival.html"
                },
                {
                    "image":"img/icons/icon_daily.png",
                    "desc":"日常生活",
                    "link":"../school/daily.html"
                },
                {
                    "image":"img/icons/icon_career.png",
                    "desc":"学成就业",
                    "link":"../school/graduation.html"
                },
                {
                    "image":"img/icons/icon_apply.png",
                    "desc":"申请流程",
                    "link":"../school/apply.html"
                },
                {
                    "image":"img/icons/icon_sch_rank.png",
                    "desc":"学校排名",
                    "link":"../school/index.html"
                },
                {
                    "image":"img/icons/icon_test_strategy.png",
                    "desc":"考试攻略",
                    "link":"../school/exam.html"
                },
                {
                    "image":"img/icons/icon_luggage.png",
                    "desc":"行前事项",
                    "link":"../school/notes.html"
                },
                {
                    "image":"img/icons/icon_fee.png",
                    "desc":"缴纳学费",
                    "link":"../school/payment.html"
                },
                {
                    "image":"img/icons/icon_air_ticket_insurance.png",
                    "desc":"机票保险",
                    "link":"../school/flight.html"
                }
            ],
            "banners":[
                // {
                //     "image":"img/top_banner/s3-banner1.jpg",
                //     "desc":"签下人生第一张Visa 解锁留学多面精彩",
                //     "link":"cards.php"
                // },
                {
                    "image":"img/top_banner/banner-230323.jpg",
                    "desc":"",
                    "link":"https://digitas.yijiuplus.com/studyabroad/fy23activity/index.html"
                },
                // {
                //     "image":"img/top_banner/03_destination/01_uber_v2@2x.png",
                //     "desc":"境外美食/购物/打车周周返: Visa持卡人境外消费，最高20美元福利周周享",
                //     "link":"https://visaoffer.yijiuplus.com/index/signup2/index?bankid=visa_wechat"
                // },
                {
                    "image":"img/top_banner/03_destination/02_medical@2x.png",
                    "desc":"无需出门辗转就医，用Visa即刻在线咨询",
                    "link":"https://visaoffer.yijiuplus.com/index/index/detail?id=1912&nav=1"
                },
                {
                    "image":"img/top_banner/03_destination/usa/04_ifree_data@2x.png",
                    "desc":"iFREE：流量$1通",
                    "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1902"
                },
                // {
                //     "image":"img/top_banner/03_destination/global-banner.png",
                //     "desc":"海淘精选礼遇",
                //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1909"
                // },
                // {
                //     "image":"img/top_banner/visa-video-banner.png",
                //     "desc":"我的留学生活",
                //     "link":"javascript:videoPop()"
                // }
            ],
            "benefits":[
                {
                    "category":"健康生活",
                    "benefits":[
                        {
                            "image":"img/content_cards/03_destination/usa/health/01_online_dr@3x.jpg",
                            "title":"爱睿智健康",
                            "desc":"在线医疗咨询服务",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1912"
                        },
                        // {
                        //     "image":"img/content_cards/03_destination/usa/health/02_video_dr@3x.jpg",
                        //     "title":"和缓视频医生",
                        //     "desc":"7×24小时实时在线视频医生咨询服务",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail? cid=31&id=2033"
                        // },
                    ]
                },
                {
                    "category":"购物",
                    "benefits":[
                        {
                            "image":"img/content_cards/offer-2411-2.jpg",
                            "title":"非同返享-一拍即付全球返",
                            "desc":"购物/公交/餐饮处处便捷支付体验",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?bankid=&cid=0&id=2133&nav=1"
                        },
                        // {
                        //     "image":"img/content_cards/03_destination/card1.jpg",
                        //     "title":"海淘精选礼遇",
                        //     "desc":"11大品类海淘电商低至4折",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1909"
                        // },
                        {
                            "image":"img/content_cards/offer-621-11.png",
                            "title":"非同返享-境外生活",
                            "desc":"境外美食/购物/订阅类精选商户消费享最高100%返现",
                            "link":"https://visaoffer.yijiuplus.com/index/signup3"
                        },
                    ]
                },
                {
                    "category": "交通美食",
                    "benefits":[
                        {
                            "image":"img/content_cards/offer-2024-0129.jpg",
                            "title":"非同返享-Visa春节年夜饭餐饮返现",
                            "desc":"龙年春节月境外线下消费单笔满99$返9$",
                            "link":"https://visaoffer.hypers.com.cn/index/index/detail?id=2557&nav=1"
                        },
                        {
                            "image":"img/content_cards/offer-2024-0124.png",
                            "title":"非同返享-拍Visa搭港铁",
                            "desc":"率先体验Visa一拍过闸",
                            "link":"https://visaoffer.hypers.com.cn/index/index/detail?id=2553"
                        },
                        {
                            "image":"img/content_cards/offer-2411-3.jpg",
                            "title":"非同返享-境外交通笔笔随机返",
                            "desc":"最高享100%免单",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?bankid=&cid=0&id=2481&nav=1"
                        },
                        
                        // {
                        //     "image":"img/content_cards/03_destination/card4.jpg",
                        //     "title":"租租车",
                        //     "desc":"境内外双重租车特权",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1921"
                        // },
                        // {
                        //     "image":"img/content_cards/03_destination/usa/dine/01_uber@3x.jpg",
                        //     "title":"境外美食/购物/打车周周返",
                        //     "desc":"Visa持卡人境外消费，最高20美元福利周周享",
                        //     "link":"https://visaoffer.yijiuplus.com/index/signup2/index?bankid=visa_wechat"
                        // },
                        // {
                        //     "image":"img/content_cards/offer-621-8.png",
                        //     "title":"Hertz国际租车",
                        //     "desc":"享9折及额外优惠",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=28"
                        // },
                    ]
                },
                {
                    "category":"酒店住宿",
                    "benefits":[
                        // {
                        //     "image":"img/top_banner/top-0601-2.png",
                        //     "title":"Airbnb爱彼迎",
                        //     "desc":"指定Visa卡付款，可0.1美元享受境外房源优惠券包",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=2035"
                        // },
                        // {
                        //     "image":"img/content_cards/offer-621-9.png",
                        //     "title":"Hotels.com好订网",
                        //     "desc":"在线订房享92折优惠",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1522"
                        // },
                        {
                            "image":"img/content_cards/02_pre-trip/others/8hotels@3x.jpg",
                            "title":"8大奢华酒店集团",
                            "desc":"入住即返高达$100消费抵扣",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1918"
                        },
                        {
                            "image":"img/content_cards/offer-621-10.png",
                            "title":"Agoda",
                            "desc":"任何一笔订单都可立享折上7%立减的超值礼遇",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1529"
                        },
                    ]
                },
                {
                    "category":"explore-more",
                    "link":"https://visaoffer.yijiuplus.com/index/index/offer_list?cid=0&area_id=0&scene_id=2&classify_id=0&card_type_id=0&card_etc_id=0&card_theme_id=0",
                }
            ]
        }
    },
    "other":{
        "preparation":{
            "title":"Option 13",
            "interests":[
                {
                    "image":"img/icons/icon_news.png",
                    "desc":"留学新闻",
                    "link":"../school/news.html"
                },
                {
                    "image":"img/icons/icon_apply.png",
                    "desc":"申请流程",
                    "link":"../school/apply.html"
                },
                {
                    "image":"img/icons/icon_sch_rank.png",
                    "desc":"学校排名",
                    "link":"../school/index.html"
                },
                {
                    "image":"img/icons/icon_test_strategy.png",
                    "desc":"考试攻略",
                    "link":"../school/exam.html"
                },
                {
                    "image":"img/icons/icon_luggage.png",
                    "desc":"行前事项",
                    "link":"../school/notes.html"
                },
                {
                    "image":"img/icons/icon_fee.png",
                    "desc":"缴纳学费",
                    "link":"../school/payment.html"
                },
                {
                    "image":"img/icons/icon_air_ticket_insurance.png",
                    "desc":"机票保险",
                    "link":"../school/flight.html"
                },
                {
                    "image":"img/icons/icon_preparation.png",
                    "desc":"抵校准备",
                    "link":"../school/arrival.html"
                },
                {
                    "image":"img/icons/icon_daily.png",
                    "desc":"日常生活",
                    "link":"../school/daily.html"
                },
                {
                    "image":"img/icons/icon_career.png",
                    "desc":"学成就业",
                    "link":"../school/graduation.html"
                }
            ],
            "banners":[
                // {
                //     "image":"img/top_banner/s1-banner1.jpg",
                //     "desc":"签下人生第一张Visa 打开世界的大门",
                //     "link":"cards.php"
                // },
                {
                    "image":"img/top_banner/banner-230323.jpg",
                    "desc":"",
                    "link":"https://digitas.yijiuplus.com/studyabroad/fy23activity/index.html"
                },
                {
                    "image":"img/top_banner/01_preparation/share/01_visa_with_u@2x.png",
                    "desc":"出国留学 visa 全程相伴",
                    "link":"https://www.visa.com.cn/pay-with-visa/find-a-card/credit-cards.html"
                },
                {
                    "image":"img/top_banner/01_preparation/share/04_xdf@2x.png",
                    "desc":"新东方前途出国：服务费立减高达2000元",
                    "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1898"
                },
                // {
                //     "image":"img/top_banner/02_pre_trip/03_jd_insurance@2x.png",
                //     "desc":"京东安联财险（留学保险）：高达30万元留学生保障计划",
                //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1900"
                // },
                // {
                //     "image":"img/top_banner/banner-621-1.png",
                //     "desc":"British council ",
                //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?utm_source=WeChat&cid=2&id=2130"
                // },
                // {
                //     "image":"img/top_banner/visa-video-banner.png",
                //     "desc":"我的留学生活",
                //     "link":"javascript:videoPop()"
                // },
            ],
            "benefits":[
                {
                    "category":"留学规划",
                    "benefits":[
                        {
                            "image":"img/content_cards/offer-2411-2.jpg",
                            "title":"非同返享-一拍即付全球返",
                            "desc":"购物/公交/餐饮处处便捷支付体验",
                            "link": "https://visaoffer.yijiuplus.com/index/index/detail?bankid=&cid=0&id=2133&nav=1"
                        },
                        {
                            "image":"img/content_cards/01_preparation/share/06_xdf@3x.jpg",
                            "title":"新东方前途出国",
                            "desc":"服务费立减高达2000元",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1898"
                        },
                        // {
                        //     "image":"img/2023/card1.jpg",
                        //     "title":"新东方国际教育",
                        //     "desc":"课程培训最高可享 85 折优惠",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?utm_source=WeChat&cid=31&id=2072"
                        // },
                    ]
                },
                // {
                //     "category":"保险",
                //     "benefits":[
                //         {
                //             "image":"img/content_cards/01_preparation/share/04_study_insurance@3x.jpg",
                //             "title":"京东安联财险（留学保险）",
                //             "desc":"高达30万元留学生保障计划",
                //             "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1900"
                //         },
                //         {
                //             "image":"img/content_cards/01_preparation/share/05_travel_insurance@3x.jpg",
                //             "title":"京东安联财险（旅行保险）",
                //             "desc":"最高30万元医疗保障，最高20万元紧急救援保障",
                //             "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1901"
                //         },
                //     ]
                // },
                // {
                //     "category":"线上课程",
                //     "benefits":[
                //         {
                //             "image":"img/content_cards/offer-621-1.png",
                //             "title":"2U GetSmarter",
                //             "desc":"Visa卡付款即享15%折扣优惠",
                //             "link":"https://visaoffer.yijiuplus.com/index/index/detail?utm_source=WeChat&cid=2&id=2129"
                //         },
                //         {
                //             "image":"img/content_cards/offer-621-2.png",
                //             "title":"British council",
                //             "desc":"Visa卡付款即享10%折扣优惠",
                //             "link":"https://visaoffer.yijiuplus.com/index/index/detail?utm_source=WeChat&cid=2&id=2130"
                //         },
                // //         {
                // //             "image":"img/content_cards/offer-621-3.png",
                // //             "title":"Coursera",
                // //             "desc":"Visa卡付款即享10%折扣优惠",
                // //             "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=2029"
                // //         },
                //         {
                //             "image":"img/content_cards/offer-621-4.png",
                //             "title":"edX",
                //             "desc":"Visa卡付款即享15%折扣优惠",
                //             "link":"https://visaoffer.yijiuplus.com/index/index/detail?utm_source=WeChat&cid=2&id=2131"
                //         },
                //         {
                //             "image":"img/content_cards/offer-0306-1.png",
                //             "title":"Skillshare",
                //             "desc":"年度会员40%的折扣优惠",
                //             "link":"https://visaoffer.yijiuplus.com/index/index/detail?utm_source=WeChat&cid=31&id=2132"
                //         },
                //         {
                //             "image":"img/content_cards/offer-0306-2.png",
                //             "title":"Emeritus",
                //             "desc":"精选课程享受10%的折扣优惠",
                //             "link":"https://visaoffer.yijiuplus.com/index/index/detail?utm_source=WeChat&cid=31&id=2134"
                //         },
                        
                //     ]
                // },
            ]
        },
        "pretrip":{
            "title":"Option 14",
            "interests":[
                {
                    "image":"img/icons/icon_news.png",
                    "desc":"留学新闻",
                    "link":"../school/news.html"
                },
                {
                    "image":"img/icons/icon_fee.png",
                    "desc":"缴纳学费",
                    "link":"../school/payment.html"
                },
                {
                    "image":"img/icons/icon_luggage.png",
                    "desc":"行前事项",
                    "link":"../school/notes.html"
                },
                {
                    "image":"img/icons/icon_air_ticket_insurance.png",
                    "desc":"机票保险",
                    "link":"../school/flight.html"
                },
                {
                    "image":"img/icons/icon_apply.png",
                    "desc":"申请流程",
                    "link":"../school/apply.html"
                },
                {
                    "image":"img/icons/icon_sch_rank.png",
                    "desc":"学校排名",
                    "link":"../school/index.html"
                },
                {
                    "image":"img/icons/icon_test_strategy.png",
                    "desc":"考试攻略",
                    "link":"../school/exam.html"
                },
                {
                    "image":"img/icons/icon_preparation.png",
                    "desc":"抵校准备",
                    "link":"../school/arrival.html"
                },
                {
                    "image":"img/icons/icon_daily.png",
                    "desc":"日常生活",
                    "link":"../school/daily.html"
                },
                {
                    "image":"img/icons/icon_career.png",
                    "desc":"学成就业",
                    "link":"../school/graduation.html"
                }
            ],
            "banners":[
                // {
                //     "image":"img/top_banner/s2-banner1.jpg",
                //     "desc":"签下人生第一张Visa 放飞爱探索的心",
                //     "link":"cards.php"
                // },
                {
                    "image":"img/top_banner/banner-230323.jpg",
                    "desc":"",
                    "link":"https://digitas.yijiuplus.com/studyabroad/fy23activity/index.html"
                },
                {
                    "image":"img/0722/trip-banner1.png",
                    "desc":"留学缴费刷Visa",
                    "link":"javascript:goPayment()"
                },
                {
                    "image":"img/top_banner/banner-621-2.png",
                    "desc":"Scoot酷航",
                    "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=2038"
                },
                // {
                //     "image":"img/top_banner/banner-621-3.png",
                //     "desc":"龙腾出行",
                //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=2034"
                // },
                {
                    "image":"img/top_banner/02_pre_trip/usa/05_ifree_data@2x.png",
                    "desc":"iFREE：流量$1通",
                    "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1902"
                },
                // {
                //     "image":"img/top_banner/0601.jpg",
                //     "desc":"",
                //     "link":"http://www.flyert.com/visavoyage"
                // },
                // {
                //     "image":"img/top_banner/visa-video-banner.png",
                //     "desc":"我的留学生活",
                //     "link":"javascript:videoPop()"
                // },
            ],
            "benefits":[
                {
                    "category": "交通",
                    "benefits":[
                        {
                            "image":"img/content_cards/offer-2024-0124.png",
                            "title":"非同返享-拍Visa搭港铁",
                            "desc":"率先体验Visa一拍过闸",
                            "link":"https://visaoffer.hypers.com.cn/index/index/detail?id=2553"
                        },
                        // {
                        //     "image":"img/content_cards/offer-2024-0119.jpg",
                        //     "title":"V享无界",
                        //     "desc":"多重礼遇，畅游世界",
                        //     "link":"https://www.flyert.com/visavoyage"
                        // },
                        
                        {
                            "image":"img/content_cards/offer-621-6.png",
                            "title":"Scoot酷航",
                            "desc":"Visa卡付款即可购买酷航机票代金券",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=2038"
                        },
                        // {
                        //     "image":"img/content_cards/offer-621-7.png",
                        //     "title":"国际航司",
                        //     "desc":"美国联合航空、达美航空指定航线舱位",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=2023"
                        // },
                        // {
                        //     "image":"img/content_cards/02_pre-trip/card2.jpg",
                        //     "title":"租租车",
                        //     "desc":"境内外双重租车特权",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1921"
                        // },
                        // {
                        //     "image":"img/content_cards/offer-621-8.png",
                        //     "title":"Hertz国际租车",
                        //     "desc":"享9折及额外优惠",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=28"
                        // },
                        // {
                        //     "image":"img/top_banner/top-0601-1.png",
                        //     "title":"龙腾出行",
                        //     "desc":"指定Visa卡付款，可1美元享受龙腾境外贵宾厅",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=2034"
                        // },
                        {
                            "image":"img/2023/card2.jpg",
                            "title":"美元购——龙腾境外贵宾厅",
                            "desc":"可享1美元购买龙腾境外贵宾厅服务",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=0&id=2071"
                        },
                    ]
                },
                {
                    "category": "酒店住宿",
                    "benefits":[
                        // {
                        //     "image":"img/top_banner/top-0601-2.png",
                        //     "title":"Airbnb爱彼迎",
                        //     "desc":"指定Visa卡付款，可0.1美元享受境外房源优惠券包",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=2035"
                        // },
                        // {
                        //     "image":"img/content_cards/offer-621-9.png",
                        //     "title":"Hotels.com好订网",
                        //     "desc":"在线订房享92折优惠",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1522"
                        // },
                        {
                            "image":"img/content_cards/02_pre-trip/others/8hotels@3x.jpg",
                            "title":"8大奢华酒店集团",
                            "desc":"入住即返高达$100消费抵扣",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1918"
                        },
                        {
                            "image":"img/content_cards/offer-621-10.png",
                            "title":"Agoda",
                            "desc":"任何一笔订单都可立享折上7%立减的超值礼遇",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1529"
                        },
                    ]
                },
                {
                    "category": "网络服务",
                    "benefits":[
                        {
                            "image":"img/content_cards/02_pre-trip/card3.jpg",
                            "title":"iFREE",
                            "desc":"一天一美元开启环球之旅",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1902"
                        },
                    ]
                }
            ]
        },
        "destination":{
            "title":"Option 15",
            "interests":[
                {
                    "image":"img/icons/icon_news.png",
                    "desc":"留学新闻",
                    "link":"../school/news.html"
                },
                {
                    "image":"img/icons/icon_preparation.png",
                    "desc":"抵校准备",
                    "link":"../school/arrival.html"
                },
                {
                    "image":"img/icons/icon_daily.png",
                    "desc":"日常生活",
                    "link":"../school/daily.html"
                },
                {
                    "image":"img/icons/icon_career.png",
                    "desc":"学成就业",
                    "link":"../school/graduation.html"
                },
                {
                    "image":"img/icons/icon_apply.png",
                    "desc":"申请流程",
                    "link":"../school/apply.html"
                },
                {
                    "image":"img/icons/icon_sch_rank.png",
                    "desc":"学校排名",
                    "link":"../school/index.html"
                },
                {
                    "image":"img/icons/icon_test_strategy.png",
                    "desc":"考试攻略",
                    "link":"../school/exam.html"
                },
                {
                    "image":"img/icons/icon_luggage.png",
                    "desc":"行前事项",
                    "link":"../school/notes.html"
                },
                {
                    "image":"img/icons/icon_fee.png",
                    "desc":"缴纳学费",
                    "link":"../school/payment.html"
                },
                {
                    "image":"img/icons/icon_air_ticket_insurance.png",
                    "desc":"机票保险",
                    "link":"../school/flight.html"
                }
            ],
            "banners":[
                // {
                //     "image":"img/top_banner/s3-banner1.jpg",
                //     "desc":"签下人生第一张Visa 解锁留学多面精彩",
                //     "link":"cards.php"
                // },
                {
                    "image":"img/top_banner/banner-230323.jpg",
                    "desc":"",
                    "link":"https://digitas.yijiuplus.com/studyabroad/fy23activity/index.html"
                },
                // {
                //     "image":"img/top_banner/03_destination/01_uber_v2@2x.png",
                //     "desc":"境外美食/购物/打车周周返: Visa持卡人境外消费，最高20美元福利周周享",
                //     "link":"https://visaoffer.yijiuplus.com/index/signup2/index?bankid=visa_wechat"
                // },
                {
                    "image":"img/top_banner/03_destination/02_medical@2x.png",
                    "desc":"无需出门辗转就医，用Visa即刻在线咨询",
                    "link":"https://visaoffer.yijiuplus.com/index/index/detail?id=1912&nav=1"
                },
                {
                    "image":"img/top_banner/03_destination/usa/04_ifree_data@2x.png",
                    "desc":"iFREE：流量$1通",
                    "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1902"
                },
                // {
                //     "image":"img/top_banner/03_destination/global-banner.png",
                //     "desc":"海淘精选礼遇",
                //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1909"
                // },
                // {
                //     "image":"img/top_banner/visa-video-banner.png",
                //     "desc":"我的留学生活",
                //     "link":"javascript:videoPop()"
                // }
            ],
            "benefits":[
                {
                    "category":"健康生活",
                    "benefits":[
                        {
                            "image":"img/content_cards/03_destination/usa/health/01_online_dr@3x.jpg",
                            "title":"爱睿智健康",
                            "desc":"在线医疗咨询服务",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1912"
                        },
                        // {
                        //     "image":"img/content_cards/03_destination/usa/health/02_video_dr@3x.jpg",
                        //     "title":"和缓视频医生",
                        //     "desc":"7×24小时实时在线视频医生咨询服务",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail? cid=31&id=2033"
                        // },
                    ]
                },
                {
                    "category":"购物",
                    "benefits":[
                        {
                            "image":"img/content_cards/offer-2411-2.jpg",
                            "title":"非同返享-一拍即付全球返",
                            "desc":"购物/公交/餐饮处处便捷支付体验",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?bankid=&cid=0&id=2133&nav=1"
                        },
                        // {
                        //     "image":"img/content_cards/03_destination/card1.jpg",
                        //     "title":"海淘精选礼遇",
                        //     "desc":"11大品类海淘电商低至4折",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1909"
                        // },
                        {
                            "image":"img/content_cards/offer-621-11.png",
                            "title":"非同返享-境外生活",
                            "desc":"境外美食/购物/订阅类精选商户消费享最高100%返现",
                            "link":"https://visaoffer.yijiuplus.com/index/signup3"
                        },
                        // {
                        //     "image":"img/content_cards/offer-bisite1.png",
                        //     "title":"比斯特系列欧洲购物村",
                        //     "desc":"享九大欧洲购物村9折特惠，带你尽情畅购欧洲",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?utm_source=WeChat&id=2053"
                        // },
                        // {
                        //     "image":"img/content_cards/offer-bisite2.png",
                        //     "title":"比斯特系列欧洲购物村",
                        //     "desc":"无限卡尊享VIP九折特惠、贵宾室、免提购物服务等超卓礼遇",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?utm_source=WeChat&id=2054"
                        // },
                    ]
                },
                {
                    "category": "交通美食",
                    "benefits":[
                        {
                            "image":"img/content_cards/offer-2024-0129.jpg",
                            "title":"非同返享-Visa春节年夜饭餐饮返现",
                            "desc":"龙年春节月境外线下消费单笔满99$返9$",
                            "link":"https://visaoffer.hypers.com.cn/index/index/detail?id=2557&nav=1"
                        },
                        {
                            "image":"img/content_cards/offer-2024-0124.png",
                            "title":"非同返享-拍Visa搭港铁",
                            "desc":"率先体验Visa一拍过闸",
                            "link":"https://visaoffer.hypers.com.cn/index/index/detail?id=2553"
                        },
                        {
                            "image":"img/content_cards/offer-2411-3.jpg",
                            "title":"非同返享-境外交通笔笔随机返",
                            "desc":"最高享100%免单",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?bankid=&cid=0&id=2481&nav=1"
                        },
                        
                        // {
                        //     "image":"img/content_cards/03_destination/card4.jpg",
                        //     "title":"租租车",
                        //     "desc":"境内外双重租车特权",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1921"
                        // },
                        // {
                        //     "image":"img/content_cards/03_destination/usa/dine/01_uber@3x.jpg",
                        //     "title":"境外美食/购物/打车周周返",
                        //     "desc":"Visa持卡人境外消费，最高20美元福利周周享",
                        //     "link":"https://visaoffer.yijiuplus.com/index/signup2/index?bankid=visa_wechat"
                        // },
                        // {
                        //     "image":"img/content_cards/offer-621-8.png",
                        //     "title":"Hertz国际租车",
                        //     "desc":"享9折及额外优惠",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=28"
                        // },
                    ]
                },
                {
                    "category":"酒店住宿",
                    "benefits":[
                        // {
                        //     "image":"img/top_banner/top-0601-2.png",
                        //     "title":"Airbnb爱彼迎",
                        //     "desc":"指定Visa卡付款，可0.1美元享受境外房源优惠券包",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=2035"
                        // },
                        // {
                        //     "image":"img/content_cards/offer-621-9.png",
                        //     "title":"Hotels.com好订网",
                        //     "desc":"在线订房享92折优惠",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1522"
                        // },
                        {
                            "image":"img/content_cards/02_pre-trip/others/8hotels@3x.jpg",
                            "title":"8大奢华酒店集团",
                            "desc":"入住即返高达$100消费抵扣",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1918"
                        },
                        {
                            "image":"img/content_cards/offer-621-10.png",
                            "title":"Agoda",
                            "desc":"任何一笔订单都可立享折上7%立减的超值礼遇",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1529"
                        },
                    ]
                },
                {
                    "category":"explore-more",
                    "link":"https://visaoffer.yijiuplus.com/index/index/offer_list?cid=0&area_id=0&scene_id=2&classify_id=0&card_type_id=0&card_etc_id=0&card_theme_id=0",
                }
            ]
        }
    }
};
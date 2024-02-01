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
                    "image":"img/zh-banner-card.png",
                    "desc":"",
                    "link":"https://market.cmbchina.com/ccard/wap/lxsapp/more.html"
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
                //     "image":"img/top_banner/01_preparation/share/03_art@2x.png",
                //     "desc":"斯芬克教育：用Visa享艺术院校申请培训优惠2000元",
                //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1899"
                // }
                // {
                //     "image":"img/top_banner/01_preparation/share/02_course@2x.png",
                //     "desc":"留学直播课大放送",
                //     "link":"https://visa.yijiuplus.com/liuxue/list.html"
                // }
            ],
            "benefits":[
                {
                    "benefits":[
                        {
                            "image":"img/content_cards/01_preparation/share/06_xdf@3x.jpg",
                            "title":"新东方前途出国",
                            "desc":"服务费立减高达2000元",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1898"
                        },
                        // {
                        //     "image":"img/content_cards/01_preparation/share/sfkedu@3x.jpg",
                        //     "title":"斯芬克教育",
                        //     "desc":"用Visa享艺术院校申请培训优惠2000元",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1899"
                        // },
                        // {
                        //     "image":"img/content_cards/01_preparation/share/02_restroom@3x.jpg",
                        //     "title":"龙腾境外机场休息室",
                        //     "desc":"免费抢兑一人次龙腾出行境外机场休息室服务",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?id=1766"
                        // },
                        // {
                        //     "image":"img/content_cards/01_preparation/share/03_wiley@3x.jpg",
                        //     "title":"Wiley",
                        //     "desc":"备考课程8折优惠",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?id=57"
                        // },
                        {
                            "image":"img/content_cards/01_preparation/share/05_travel_insurance@3x.jpg",
                            "title":"京东安联财险（旅行保险）",
                            "desc":"最高30万元医疗保障，最高20万元紧急救援保障",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1901"
                        },
                        {
                            "image":"img/content_cards/01_preparation/share/04_study_insurance@3x.jpg",
                            "title":"京东安联财险（留学保险）",
                            "desc":"高达30万元留学生保障计划",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1900"
                        }
                    ]
                }
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
                    "link":"../school/payment.html"
                },
                {
                    "image":"img/zh-banner-card.png",
                    "desc":"",
                    "link":"https://market.cmbchina.com/ccard/wap/lxsapp/more.html"
                },
                // {
                //     "image":"img/top_banner/03_destination/01_uber_v2@2x.png",
                //     "desc":"境外美食/购物/打车周周返: Visa持卡人境外消费，最高20美元福利周周享",
                //     "link":"https://visaoffer.yijiuplus.com/index/signup2/index?bankid=visa_wechat"
                // },
                // {
                //     "image":"img/top_banner/02_pre_trip/02_rest_room@2x.png",
                //     "desc":"龙腾境外机场休息室：免费抢兑一人次龙腾出行境外机场休息室服务",
                //     "link":"offer-detail.php?id=1766"
                // },
                // {
                //     "image":"img/top_banner/02_pre_trip/03_jd_insurance@2x.png",
                //     "desc":"京东安联财险（留学保险）：高达30万元留学生保障计划",
                //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1900"
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
                //     "image":"img/top_banner/02_pre_trip/usa/04_united_airline@2x.png",
                //     "desc":"美国联合航空：一飞升金",
                //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?id=1210"
                // }
            ],
            "benefits":[
                {
                    "benefits":[
                        
                        {
                            "image":"img/content_cards/02_pre-trip/card1.jpg",
                            "title":"境外美食/购物/打车周周返",
                            "desc":"Visa持卡人境外消费，最高 20美元福利周周享",
                            "link":"https://visaoffer.yijiuplus.com/index/signup2/index?bankid=visa_wechat"
                        },
                        {
                            "image":"img/content_cards/02_pre-trip/card2.jpg",
                            "title":"租租车",
                            "desc":"境内外双重租车特权",
                            "link":"https://visaoffer.yijiuplus.com/index/signup2/index?bankid=visa_wechat"
                        },
                        {
                            "image":"img/content_cards/02_pre-trip/card3.jpg",
                            "title":"iFREE",
                            "desc":"一天一美元开启环球之旅",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1902"
                        },
                        {
                            "image":"img/content_cards/02_pre-trip/others/8hotels@3x.jpg",
                            "title":"8大奢华酒店集团",
                            "desc":"入住即返高达$100消费抵扣",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1918"
                        },
                        {
                            "image":"img/content_cards/02_pre-trip/card5.jpg",
                            "title":"海淘精选礼遇",
                            "desc":"11大品类海淘电商低至4折",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1909"
                        },
                        {
                            "image":"img/content_cards/01_preparation/share/05_travel_insurance@3x.jpg",
                            "title":"京东安联财险（旅行保险）",
                            "desc":"最高30万元医疗保障，最高20万元紧急救援保障",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1901"
                        },
                        {
                            "image":"img/content_cards/01_preparation/share/04_study_insurance@3x.jpg",
                            "title":"京东安联财险（留学保险）",
                            "desc":"高达30万元留学生保障计划",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1900"
                        },
                        {
                            "image":"img/0722/1.jpg",
                            "title":"非同返享——海淘赢奖励",
                            "desc":"单笔消费满50美元 优选好礼等你来选",
                            "link":"https://visaoffer.yijiuplus.com/index/abroad"
                        },
                        // {
                        //     "image":"img/top_banner/top-0601-1.png",
                        //     "title":"龙腾出行",
                        //     "desc":"指定Visa卡付款，可1美元享受龙腾境外贵宾厅",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=2034"
                        // },
                        {
                            "image":"img/top_banner/top-0601-2.png",
                            "title":"Airbnb爱彼迎",
                            "desc":"指定Visa卡付款，可0.1美元享受境外房源优惠券包",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=2035"
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
                {
                    "image":"img/banner0831.jpg",
                    "desc":"",
                    "link":"https://visaoffer.yijiuplus.com/index/selected?bankid=visa_wechat"
                },
                {
                    "image":"img/zh-banner-card.png",
                    "desc":"",
                    "link":"https://market.cmbchina.com/ccard/wap/lxsapp/more.html"
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
                    "link":"offer-detail.php?id=1096"
                },
                {
                    "image":"img/top_banner/03_destination/global-banner.png",
                    "desc":"海淘精选礼遇",
                    "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1909"
                }
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
                        {
                            "image":"img/content_cards/03_destination/usa/dine/01_uber@3x.jpg",
                            "title":"境外美食/购物/打车周周返",
                            "desc":"Visa持卡人境外消费，最高20美元福利周周享",
                            "link":"https://visaoffer.yijiuplus.com/index/signup2/index?bankid=visa_wechat"
                        },
                        {
                            "image":"img/2023/card3.jpg",
                            "title":"美元购——熊猫外卖红包组合",
                            "desc":"0.1美元购买熊猫外卖红包组合",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=0&id=2055"
                        },
                    ]
                },
                // {
                //     "category":"美食",
                //     "benefits":[
                //         // {
                //         //     "image":"img/content_cards/03_destination/card5.jpg",
                //         //     "title":"DANIEL",
                //         //     "desc":"获赠免费香槟、甜品及参观 厨房礼遇",
                //         //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=2&id=1697"
                //         // },
                //         // {
                //         //     "image":"img/content_cards/03_destination/card6.jpg",
                //         //     "title":"Cafe Boulud",
                //         //     "desc":"获赠免费香槟及甜品",
                //         //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=2&id=1698"
                //         // }
                //     ]
                // },
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
                
                // {
                //     "category":"游玩体验",
                //     "benefits":[
                //         // {
                //         //     "image":"img/content_cards/03_destination/usa/play/01_country_park@3x.jpg",
                //         //     "title":"国家公园/博物馆/儿童博物馆",
                //         //     "desc":"全年高达165美元门票返现",
                //         //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?id=36"
                //         // },
                //         // {
                //         //     "image":"img/content_cards/03_destination/usa/play/02_maui_ocean@3x.jpg",
                //         //     "title":"Maui Ocean Center",
                //         //     "desc":"门票、餐饮和礼品店消费享85折",
                //         //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?&id=564"
                //         // },
                //         // {
                //         //     "image":"img/content_cards/03_destination/usa/play/03_food_on_foot@3x.jpg",
                //         //     "title":"Food On Foot Tours",
                //         //     "desc":"Food on Foot纽约观光项目和服务享4到8折",
                //         //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?&id=1615"
                //         // },
                //         // {
                //         //     "image":"img/content_cards/03_destination/usa/play/04_papiloon@3x.jpg",
                //         //     "title":"Papillon Grand Canyon Helicopters",
                //         //     "desc":"拉斯维加斯大道精华直升机游两人一票",
                //         //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?id=567"
                //         // }
                //     ]
                // },
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
                    "image":"img/zh-banner-card.png",
                    "desc":"",
                    "link":"https://market.cmbchina.com/ccard/wap/lxsapp/more.html"
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
                //     "image":"img/top_banner/01_preparation/share/03_art@2x.png",
                //     "desc":"斯芬克教育：用Visa享艺术院校申请培训优惠2000元",
                //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1899"
                // }
                // {
                //     "image":"img/top_banner/01_preparation/share/02_course@2x.png",
                //     "desc":"留学直播课大放送",
                //     "link":"https://visa.yijiuplus.com/liuxue/list.html"
                // }
            ],
            "benefits":[
                {
                    "benefits":[
                        {
                            "image":"img/content_cards/01_preparation/share/06_xdf@3x.jpg",
                            "title":"新东方前途出国",
                            "desc":"服务费立减高达2000元",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1898"
                        },
                        // {
                        //     "image":"img/content_cards/01_preparation/share/sfkedu@3x.jpg",
                        //     "title":"斯芬克教育",
                        //     "desc":"用Visa享艺术院校申请培训优惠2000元",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1899"
                        // },
                        // {
                        //     "image":"img/content_cards/01_preparation/share/02_restroom@3x.jpg",
                        //     "title":"龙腾境外机场休息室",
                        //     "desc":"免费抢兑一人次龙腾出行境外机场休息室服务",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?id=1766"
                        // },
                        // {
                        //     "image":"img/content_cards/01_preparation/share/03_wiley@3x.jpg",
                        //     "title":"Wiley",
                        //     "desc":"备考课程8折优惠",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?id=57"
                        // },
                        {
                            "image":"img/content_cards/01_preparation/share/05_travel_insurance@3x.jpg",
                            "title":"京东安联财险（旅行保险）",
                            "desc":"最高30万元医疗保障，最高20万元紧急救援保障",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1901"
                        },
                        {
                            "image":"img/content_cards/01_preparation/share/04_study_insurance@3x.jpg",
                            "title":"京东安联财险（留学保险）",
                            "desc":"高达30万元留学生保障计划",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1900"
                        }
                    ]
                }
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
                    "link":"../school/payment.html"
                },
                {
                    "image":"img/zh-banner-card.png",
                    "desc":"",
                    "link":"https://market.cmbchina.com/ccard/wap/lxsapp/more.html"
                },
                // {
                //     "image":"img/top_banner/03_destination/01_uber_v2@2x.png",
                //     "desc":"境外美食/购物/打车周周返: Visa持卡人境外消费，最高20美元福利周周享",
                //     "link":"https://visaoffer.yijiuplus.com/index/signup2/index?bankid=visa_wechat"
                // },
                // {
                //     "image":"img/top_banner/02_pre_trip/02_rest_room@2x.png",
                //     "desc":"龙腾境外机场休息室：免费抢兑一人次龙腾出行境外机场休息室服务",
                //     "link":"offer-detail.php?id=1766"
                // },
                // {
                //     "image":"img/top_banner/02_pre_trip/03_jd_insurance@2x.png",
                //     "desc":"京东安联财险（留学保险）：高达30万元留学生保障计划",
                //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1900"
                // },
                {
                    "image":"img/top_banner/02_pre_trip/british/04_ifree_data@2x.png",
                    "desc":"iFREE：流量$1通",
                    "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1902"
                },
                // {
                //     "image":"img/top_banner/0601.jpg",
                //     "desc":"",
                //     "link":"http://www.flyert.com/visavoyage"
                // },
            ],
            "benefits":[
                {
                    "benefits":[
                        
                        {
                            "image":"img/content_cards/02_pre-trip/british/01_uber@3x.jpg",
                            "title":"境外美食/购物/打车周周返",
                            "desc":"Visa持卡人境外消费，最高20美元福利周周享",
                            "link":"https://visaoffer.yijiuplus.com/index/signup2/index?bankid=visa_wechat"
                        },
                        {
                            "image":"img/content_cards/02_pre-trip/card2.jpg",
                            "title":"租租车",
                            "desc":"境内外双重租车特权",
                            "link":"https://visaoffer.yijiuplus.com/index/signup2/index?bankid=visa_wechat"
                        },
                        {
                            "image":"img/content_cards/02_pre-trip/british/ifree@3x.jpg",
                            "title":"iFREE",
                            "desc":"一天一美元，开启环球之旅",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1902"
                        },
                        {
                            "image":"img/content_cards/02_pre-trip/others/8hotels@3x.jpg",
                            "title":"8大奢华酒店集团",
                            "desc":"入住即返高达$100消费抵扣",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1918"
                        },
                        {
                            "image":"img/content_cards/02_pre-trip/card5.jpg",
                            "title":"海淘精选礼遇",
                            "desc":"11大品类海淘电商低至4折",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1909"
                        },
                        {
                            "image":"img/content_cards/01_preparation/share/05_travel_insurance@3x.jpg",
                            "title":"京东安联财险（旅行保险）",
                            "desc":"最高30万元医疗保障，最高20万元紧急救援保障",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1901"
                        },
                        {
                            "image":"img/content_cards/01_preparation/share/04_study_insurance@3x.jpg",
                            "title":"京东安联财险（留学保险）",
                            "desc":"高达30万元留学生保障计划",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1900"
                        },
                        {
                            "image":"img/0722/1.jpg",
                            "title":"非同返享——海淘赢奖励",
                            "desc":"单笔消费满50美元 优选好礼等你来选",
                            "link":"https://visaoffer.yijiuplus.com/index/abroad"
                        },
                        // {
                        //     "image":"img/top_banner/top-0601-1.png",
                        //     "title":"龙腾出行",
                        //     "desc":"指定Visa卡付款，可1美元享受龙腾境外贵宾厅",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=2034"
                        // },
                        {
                            "image":"img/top_banner/top-0601-2.png",
                            "title":"Airbnb爱彼迎",
                            "desc":"指定Visa卡付款，可0.1美元享受境外房源优惠券包",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=2035"
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
                {
                    "image":"img/banner0831.jpg",
                    "desc":"",
                    "link":"https://visaoffer.yijiuplus.com/index/selected?bankid=visa_wechat"
                },
                {
                    "image":"img/zh-banner-card.png",
                    "desc":"",
                    "link":"https://market.cmbchina.com/ccard/wap/lxsapp/more.html"
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
                // {
                //     "image":"img/top_banner/03_destination/02_rest_room@2x.png",
                //     "desc":"龙腾境外机场休息室：免费抢兑一人次龙腾出行境外机场休息室服务",
                //     "link":"offer-detail.php?id=1766"
                // },
                {
                    "image":"img/top_banner/03_destination/british/04_ifree_data@2x.png",
                    "desc":"iFREE：流量$1通",
                    "link":"offer-detail.php?id=1096"
                },
                {
                    "image":"img/top_banner/03_destination/british/05_ecom@2x.png",
                    "desc":"点击支付用Visa，网购享折扣",
                    "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1909"
                }
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
                            "image":"img/content_cards/03_destination/british/health/01_online_dr@3x.jpg",
                            "title":"爱睿智健康",
                            "desc":"在线医疗咨询服务",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1912"
                        },
                        {
                            "image":"img/content_cards/03_destination/british/health/02_video_dr@3x.jpg",
                            "title":"和缓视频医生",
                            "desc":"7×24小时实时在线视频医生咨询服务",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail? cid=31&id=2033"
                        },
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
                        {
                            "image":"img/content_cards/03_destination/usa/dine/01_uber@3x.jpg",
                            "title":"境外美食/购物/打车周周返",
                            "desc":"Visa持卡人境外消费，最高20美元福利周周享",
                            "link":"https://visaoffer.yijiuplus.com/index/signup2/index?bankid=visa_wechat"
                        }
                    ]
                },
                // {
                //     "category":"美食",
                //     "benefits":[
                //         // {
                //         //     "image":"img/content_cards/03_destination/card7.jpg",
                //         //     "title":"Barrafina",
                //         //     "desc":"每人赠西班牙短扎枪腌物串 一盘",
                //         //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=0&id=1696"
                //         // },
                //     ]
                // },
                // {
                //     "category":"游玩体验",
                //     "benefits":[
                //         // {
                //         //     "image":"img/content_cards/03_destination/british/play/03_small_car@3x.jpg",
                //         //     "title":"Small Car Big City",
                //         //     "desc":"所有2小时及以上的观光项目享9折",
                //         //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?id=986"
                //         // }
                //     ]
                // },
                {
                    "category":"explore-more",
                    "link":"https://visaoffer.yijiuplus.com/index/index/plist?cid=19",
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
                    "image":"img/zh-banner-card.png",
                    "desc":"",
                    "link":"https://market.cmbchina.com/ccard/wap/lxsapp/more.html"
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
                //     "image":"img/top_banner/01_preparation/share/03_art@2x.png",
                //     "desc":"斯芬克教育：用Visa享艺术院校申请培训优惠2000元",
                //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1899"
                // }
                // {
                //     "image":"img/top_banner/01_preparation/share/02_course@2x.png",
                //     "desc":"留学直播课大放送",
                //     "link":"https://visa.yijiuplus.com/liuxue/list.html"
                // }
            ],
            "benefits":[
                {
                    "benefits":[
                        {
                            "image":"img/content_cards/01_preparation/share/06_xdf@3x.jpg",
                            "title":"新东方前途出国",
                            "desc":"服务费立减高达2000元",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1898"
                        },
                        // {
                        //     "image":"img/content_cards/01_preparation/share/sfkedu@3x.jpg",
                        //     "title":"斯芬克教育",
                        //     "desc":"用Visa享艺术院校申请培训优惠2000元",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1899"
                        // },
                        // {
                        //     "image":"img/content_cards/01_preparation/share/02_restroom@3x.jpg",
                        //     "title":"龙腾境外机场休息室",
                        //     "desc":"免费抢兑一人次龙腾出行境外机场休息室服务",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?id=1766"
                        // },
                        // {
                        //     "image":"img/content_cards/01_preparation/share/03_wiley@3x.jpg",
                        //     "title":"Wiley",
                        //     "desc":"备考课程8折优惠",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?id=57"
                        // },
                        {
                            "image":"img/content_cards/01_preparation/share/05_travel_insurance@3x.jpg",
                            "title":"京东安联财险（旅行保险）",
                            "desc":"最高30万元医疗保障，最高20万元紧急救援保障",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1901"
                        },
                        {
                            "image":"img/content_cards/01_preparation/share/04_study_insurance@3x.jpg",
                            "title":"京东安联财险（留学保险）",
                            "desc":"高达30万元留学生保障计划",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1900"
                        }
                    ]
                }
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
                    "link":"../school/payment.html"
                },
                {
                    "image":"img/zh-banner-card.png",
                    "desc":"",
                    "link":"https://market.cmbchina.com/ccard/wap/lxsapp/more.html"
                },
                // {
                //     "image":"img/top_banner/03_destination/01_uber_v2@2x.png",
                //     "desc":"境外美食/购物/打车周周返: Visa持卡人境外消费，最高20美元福利周周享",
                //     "link":"https://visaoffer.yijiuplus.com/index/signup2/index?bankid=visa_wechat"
                // },
                // {
                //     "image":"img/top_banner/02_pre_trip/02_rest_room@2x.png",
                //     "desc":"龙腾境外机场休息室：免费抢兑一人次龙腾出行境外机场休息室服务",
                //     "link":"offer-detail.php?id=1766"
                // },
                // {
                //     "image":"img/top_banner/02_pre_trip/03_jd_insurance@2x.png",
                //     "desc":"京东安联财险（留学保险）：高达30万元留学生保障计划",
                //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1900"
                // },
                {
                    "image":"img/top_banner/02_pre_trip/canada/05_ifree_data@2x.png",
                    "desc":"iFREE：流量$1通",
                    "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1902"
                },
                // {
                //     "image":"img/top_banner/0601.jpg",
                //     "desc":"",
                //     "link":"http://www.flyert.com/visavoyage"
                // },
                // {
                //     "image":"img/top_banner/02_pre_trip/canada/04_auto_europe@2x.png",
                //     "desc":"Auto Europe：在全球180个国家和地区租车最高享63折优惠",
                //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?id=550"
                // }
            ],
            "benefits":[
                {
                    "benefits":[
                        
                        {
                            "image":"img/content_cards/02_pre-trip/card1.jpg",
                            "title":"境外美食/购物/打车周周返",
                            "desc":"Visa持卡人境外消费，最高 20美元福利周周享",
                            "link":"https://visaoffer.yijiuplus.com/index/signup2/index?bankid=visa_wechat"
                        },
                        {
                            "image":"img/content_cards/02_pre-trip/card2.jpg",
                            "title":"租租车",
                            "desc":"境内外双重租车特权",
                            "link":"https://visaoffer.yijiuplus.com/index/signup2/index?bankid=visa_wechat"
                        },
                        {
                            "image":"img/content_cards/02_pre-trip/card3.jpg",
                            "title":"iFREE",
                            "desc":"一天一美元开启环球之旅",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1902"
                        },
                        {
                            "image":"img/content_cards/02_pre-trip/others/8hotels@3x.jpg",
                            "title":"8大奢华酒店集团",
                            "desc":"入住即返高达$100消费抵扣",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1918"
                        },
                        {
                            "image":"img/content_cards/02_pre-trip/card5.jpg",
                            "title":"海淘精选礼遇",
                            "desc":"11大品类海淘电商低至4折",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1909"
                        },
                        {
                            "image":"img/content_cards/01_preparation/share/05_travel_insurance@3x.jpg",
                            "title":"京东安联财险（旅行保险）",
                            "desc":"最高30万元医疗保障，最高20万元紧急救援保障",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1901"
                        },
                        {
                            "image":"img/content_cards/01_preparation/share/04_study_insurance@3x.jpg",
                            "title":"京东安联财险（留学保险）",
                            "desc":"高达30万元留学生保障计划",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1900"
                        },
                        {
                            "image":"img/0722/1.jpg",
                            "title":"非同返享——海淘赢奖励",
                            "desc":"单笔消费满50美元 优选好礼等你来选",
                            "link":"https://visaoffer.yijiuplus.com/index/abroad"
                        },
                        // {
                        //     "image":"img/top_banner/top-0601-1.png",
                        //     "title":"龙腾出行",
                        //     "desc":"指定Visa卡付款，可1美元享受龙腾境外贵宾厅",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=2034"
                        // },
                        {
                            "image":"img/top_banner/top-0601-2.png",
                            "title":"Airbnb爱彼迎",
                            "desc":"指定Visa卡付款，可0.1美元享受境外房源优惠券包",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=2035"
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
                {
                    "image":"img/banner0831.jpg",
                    "desc":"",
                    "link":"https://visaoffer.yijiuplus.com/index/selected?bankid=visa_wechat"
                },
                {
                    "image":"img/zh-banner-card.png",
                    "desc":"",
                    "link":"https://market.cmbchina.com/ccard/wap/lxsapp/more.html"
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
                // {
                //     "image":"img/top_banner/03_destination/02_rest_room@2x.png",
                //     "desc":"龙腾境外机场休息室：免费抢兑一人次龙腾出行境外机场休息室服务",
                //     "link":"offer-detail.php?id=1766"
                // },
                {
                    "image":"img/top_banner/03_destination/canada/04_ifree_data@2x.png",
                    "desc":"iFREE：流量$1通",
                    "link":"offer-detail.php?id=1096"
                },
                {
                    "image":"img/top_banner/03_destination/canada/05_ecom@2x.png",
                    "desc":"点击支付用Visa，网购享折扣",
                    "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1909"
                }
            ],
            "benefits":[
                {
                    "category":"健康生活",
                    "benefits":[
                        {
                            "image":"img/content_cards/03_destination/canada/health/01_online_dr@3x.jpg",
                            "title":"爱睿智健康",
                            "desc":"在线医疗咨询服务",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1912"
                        },
                        {
                            "image":"img/content_cards/03_destination/canada/health/02_video_dr@3x.jpg",
                            "title":"和缓视频医生",
                            "desc":"7×24小时实时在线视频医生咨询服务",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail? cid=31&id=2033"
                        },
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
                        {
                            "image":"img/content_cards/03_destination/usa/dine/01_uber@3x.jpg",
                            "title":"境外美食/购物/打车周周返",
                            "desc":"Visa持卡人境外消费，最高20美元福利周周享",
                            "link":"https://visaoffer.yijiuplus.com/index/signup2/index?bankid=visa_wechat"
                        }
                    ]
                },
                // {
                //     "category":"美食",
                //     "benefits":[
                //         // {
                //         //     "image":"img/content_cards/03_destination/canada/dine/03_auntie_anne@3x.jpg",
                //         //     "title":"Auntie Anne's",
                //         //     "desc":"蝴蝶饼买二赠一",
                //         //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?id=1610"
                //         // }
                //     ]
                // },
                
                // {
                //     "category":"游玩体验",
                //     "benefits":[
                //         // {
                //         //     "image":"img/content_cards/03_destination/canada/play/01_eating_through@3x.jpg",
                //         //     "title":"Eating Through TO",
                //         //     "desc":"所有团游8折优惠",
                //         //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?id=1590"
                //         // },
                //         // {
                //         //     "image":"img/content_cards/03_destination/canada/play/02_banff_norquay@3x.jpg",
                //         //     "title":"Banff Norquay",
                //         //     "desc":"观光吊椅索道8折优惠",
                //         //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?id=1596"
                //         // },
                //         // {
                //         //     "image":"img/content_cards/03_destination/canada/play/03_new_world_wine@3x.jpg",
                //         //     "title":"New World Wine Tours",
                //         //     "desc":"所有团8折优惠",
                //         //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?id=638"
                //         // },
                //         // {
                //         //     "image":"img/content_cards/03_destination/canada/play/04_johnston@3x.jpg",
                //         //     "title":"Johnston Canyon Icewalk<sup>®</sup>",
                //         //     "desc":"约翰斯顿峡谷冰上健行<sup>®</sup>85折优惠",
                //         //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?id=645"
                //         // }
                //     ]
                // },
                {
                    "category":"explore-more",
                    "link":"https://visaoffer.yijiuplus.com/index/index/plist?cid=34",
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
                    "image":"img/zh-banner-card.png",
                    "desc":"",
                    "link":"https://market.cmbchina.com/ccard/wap/lxsapp/more.html"
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
                //     "image":"img/top_banner/01_preparation/share/03_art@2x.png",
                //     "desc":"斯芬克教育：用Visa享艺术院校申请培训优惠2000元",
                //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1899"
                // }
                // {
                //     "image":"img/top_banner/01_preparation/share/02_course@2x.png",
                //     "desc":"留学直播课大放送",
                //     "link":"https://visa.yijiuplus.com/liuxue/list.html"
                // }
            ],
            "benefits":[
                {
                    "benefits":[
                        {
                            "image":"img/content_cards/01_preparation/share/06_xdf@3x.jpg",
                            "title":"新东方前途出国",
                            "desc":"服务费立减高达2000元",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1898"
                        },
                        // {
                        //     "image":"img/content_cards/01_preparation/share/sfkedu@3x.jpg",
                        //     "title":"斯芬克教育",
                        //     "desc":"用Visa享艺术院校申请培训优惠2000元",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1899"
                        // },
                        // {
                        //     "image":"img/content_cards/01_preparation/share/02_restroom@3x.jpg",
                        //     "title":"龙腾境外机场休息室",
                        //     "desc":"免费抢兑一人次龙腾出行境外机场休息室服务",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?id=1766"
                        // },
                        // {
                        //     "image":"img/content_cards/01_preparation/share/03_wiley@3x.jpg",
                        //     "title":"Wiley",
                        //     "desc":"备考课程8折优惠",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?id=57"
                        // },
                        {
                            "image":"img/content_cards/01_preparation/share/05_travel_insurance@3x.jpg",
                            "title":"京东安联财险（旅行保险）",
                            "desc":"最高30万元医疗保障，最高20万元紧急救援保障",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1901"
                        },
                        {
                            "image":"img/content_cards/01_preparation/share/04_study_insurance@3x.jpg",
                            "title":"京东安联财险（留学保险）",
                            "desc":"高达30万元留学生保障计划",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1900"
                        }
                    ]
                }
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
                    "link":"../school/payment.html"
                },
                {
                    "image":"img/zh-banner-card.png",
                    "desc":"",
                    "link":"https://market.cmbchina.com/ccard/wap/lxsapp/more.html"
                },
                // {
                //     "image":"img/top_banner/03_destination/01_uber_v2@2x.png",
                //     "desc":"境外美食/购物/打车周周返: Visa持卡人境外消费，最高20美元福利周周享",
                //     "link":"https://visaoffer.yijiuplus.com/index/signup2/index?bankid=visa_wechat"
                // },
                // {
                //     "image":"img/top_banner/02_pre_trip/02_rest_room@2x.png",
                //     "desc":"龙腾境外机场休息室：免费抢兑一人次龙腾出行境外机场休息室服务",
                //     "link":"offer-detail.php?id=1766"
                // },
                // {
                //     "image":"img/top_banner/02_pre_trip/03_jd_insurance@2x.png",
                //     "desc":"京东安联财险（留学保险）：高达30万元留学生保障计划",
                //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1900"
                // },
                {
                    "image":"img/top_banner/02_pre_trip/australia/05_ifree_data@2x.png",
                    "desc":"iFREE：流量$1通",
                    "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1902"
                },
                // {
                //     "image":"img/top_banner/0601.jpg",
                //     "desc":"",
                //     "link":"http://www.flyert.com/visavoyage"
                // },
                // {
                //     "image":"img/top_banner/02_pre_trip/australia/04_auto_europe@2x.png",
                //     "desc":"Auto Europe：在全球180个国家和地区租车最高享63折优惠",
                //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?id=550"
                // }
            ],
            "benefits":[
                {
                    "benefits":[
                        
                        {
                            "image":"img/content_cards/02_pre-trip/card1.jpg",
                            "title":"境外美食/购物/打车周周返",
                            "desc":"Visa持卡人境外消费，最高 20美元福利周周享",
                            "link":"https://visaoffer.yijiuplus.com/index/signup2/index?bankid=visa_wechat"
                        },
                        {
                            "image":"img/content_cards/02_pre-trip/card2.jpg",
                            "title":"租租车",
                            "desc":"境内外双重租车特权",
                            "link":"https://visaoffer.yijiuplus.com/index/signup2/index?bankid=visa_wechat"
                        },
                        {
                            "image":"img/content_cards/02_pre-trip/card3.jpg",
                            "title":"iFREE",
                            "desc":"一天一美元开启环球之旅",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1902"
                        },
                        {
                            "image":"img/content_cards/02_pre-trip/others/8hotels@3x.jpg",
                            "title":"8大奢华酒店集团",
                            "desc":"入住即返高达$100消费抵扣",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1918"
                        },
                        {
                            "image":"img/content_cards/02_pre-trip/card5.jpg",
                            "title":"海淘精选礼遇",
                            "desc":"11大品类海淘电商低至4折",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1909"
                        },
                        {
                            "image":"img/content_cards/01_preparation/share/05_travel_insurance@3x.jpg",
                            "title":"京东安联财险（旅行保险）",
                            "desc":"最高30万元医疗保障，最高20万元紧急救援保障",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1901"
                        },
                        {
                            "image":"img/content_cards/01_preparation/share/04_study_insurance@3x.jpg",
                            "title":"京东安联财险（留学保险）",
                            "desc":"高达30万元留学生保障计划",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1900"
                        },
                        {
                            "image":"img/0722/1.jpg",
                            "title":"非同返享——海淘赢奖励",
                            "desc":"单笔消费满50美元 优选好礼等你来选",
                            "link":"https://visaoffer.yijiuplus.com/index/abroad"
                        },
                        // {
                        //     "image":"img/top_banner/top-0601-1.png",
                        //     "title":"龙腾出行",
                        //     "desc":"指定Visa卡付款，可1美元享受龙腾境外贵宾厅",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=2034"
                        // },
                        {
                            "image":"img/top_banner/top-0601-2.png",
                            "title":"Airbnb爱彼迎",
                            "desc":"指定Visa卡付款，可0.1美元享受境外房源优惠券包",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=2035"
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
                {
                    "image":"img/banner0831.jpg",
                    "desc":"",
                    "link":"https://visaoffer.yijiuplus.com/index/selected?bankid=visa_wechat"
                },
                {
                    "image":"img/zh-banner-card.png",
                    "desc":"",
                    "link":"https://market.cmbchina.com/ccard/wap/lxsapp/more.html"
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
                // {
                //     "image":"img/top_banner/03_destination/02_rest_room@2x.png",
                //     "desc":"龙腾境外机场休息室：免费抢兑一人次龙腾出行境外机场休息室服务",
                //     "link":"offer-detail.php?id=1766"
                // },
                {
                    "image":"img/top_banner/03_destination/australia/04_ifree_data@2x.png",
                    "desc":"iFREE：流量$1通",
                    "link":"offer-detail.php?id=1096"
                },
                {
                    "image":"img/top_banner/03_destination/australia/05_ecom@2x.png",
                    "desc":"点击支付用Visa，网购享折扣",
                    "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1909"
                }
            ],
            "benefits":[
                {
                    "category":"健康生活",
                    "benefits":[
                        {
                            "image":"img/content_cards/03_destination/australia/health/01_online_dr@3x.jpg",
                            "title":"爱睿智健康",
                            "desc":"在线医疗咨询服务",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1912"
                        },
                        {
                            "image":"img/content_cards/03_destination/australia/health/02_video_dr@3x.jpg",
                            "title":"和缓视频医生",
                            "desc":"7×24小时实时在线视频医生咨询服务",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail? cid=31&id=2033"
                        },
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
                        {
                            "image":"img/content_cards/03_destination/usa/dine/01_uber@3x.jpg",
                            "title":"境外美食/购物/打车周周返",
                            "desc":"Visa持卡人境外消费，最高20美元福利周周享",
                            "link":"https://visaoffer.yijiuplus.com/index/signup2/index?bankid=visa_wechat"
                        }
                    ]
                },
                // {
                //     "category":"美食",
                //     "benefits":[
                //         // {
                //         //     "image":"img/content_cards/03_destination/australia/dine/02_hurricane_grill@3x.jpg",
                //         //     "title":"Hurricane's Grill",
                //         //     "desc":"9折优惠+优先座位",
                //         //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?id=1715"
                //         // },
                //         // {
                //         //     "image":"img/content_cards/03_destination/card8.jpg",
                //         //     "title":"The Nine咖啡店",
                //         //     "desc":"高端特色餐厅第二道主菜半 价优惠",
                //         //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=4&id=1804"
                //         // },
                //         // {
                //         //     "image":"img/content_cards/03_destination/card9.jpg",
                //         //     "title":"Rocker 餐厅",
                //         //     "desc":"高端特色餐厅第二道主菜半 价优惠",
                //         //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=4&id=1805"
                //         // },
                //         // {
                //         //     "image":"img/content_cards/03_destination/card10.jpg",
                //         //     "title":"Sergeant Lok餐厅",
                //         //     "desc":"高端特色餐厅第二道主菜半 价优惠",
                //         //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=4&id=1806"
                //         // }
                //     ]
                // },
                // {
                //     "category":"游玩体验",
                //     "benefits":[
                //         // {
                //         //     "image":"img/content_cards/03_destination/australia/play/01_ski@3x.jpg",
                //         //     "title":"全球知名雪场",
                //         //     "desc":"低至7折体验",
                //         //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?id=1196"
                //         // }
                //     ]
                // },
                {
                    "category":"explore-more",
                    "link":"https://visaoffer.yijiuplus.com/index/index/plist?cid=4",
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
                    "image":"img/zh-banner-card.png",
                    "desc":"",
                    "link":"https://market.cmbchina.com/ccard/wap/lxsapp/more.html"
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
                //     "image":"img/top_banner/01_preparation/share/03_art@2x.png",
                //     "desc":"斯芬克教育：用Visa享艺术院校申请培训优惠2000元",
                //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1899"
                // }
                // {
                //     "image":"img/top_banner/01_preparation/share/02_course@2x.png",
                //     "desc":"留学直播课大放送",
                //     "link":"https://visa.yijiuplus.com/liuxue/list.html"
                // }
            ],
            "benefits":[
                {
                    "benefits":[
                        {
                            "image":"img/content_cards/01_preparation/share/06_xdf@3x.jpg",
                            "title":"新东方前途出国",
                            "desc":"服务费立减高达2000元",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1898"
                        },
                        // {
                        //     "image":"img/content_cards/01_preparation/share/sfkedu@3x.jpg",
                        //     "title":"斯芬克教育",
                        //     "desc":"用Visa享艺术院校申请培训优惠2000元",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1899"
                        // },
                        // {
                        //     "image":"img/content_cards/01_preparation/share/02_restroom@3x.jpg",
                        //     "title":"龙腾境外机场休息室",
                        //     "desc":"免费抢兑一人次龙腾出行境外机场休息室服务",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?id=1766"
                        // },
                        // {
                        //     "image":"img/content_cards/01_preparation/share/03_wiley@3x.jpg",
                        //     "title":"Wiley",
                        //     "desc":"备考课程8折优惠",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?id=57"
                        // },
                        {
                            "image":"img/content_cards/01_preparation/share/05_travel_insurance@3x.jpg",
                            "title":"京东安联财险（旅行保险）",
                            "desc":"最高30万元医疗保障，最高20万元紧急救援保障",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1901"
                        },
                        {
                            "image":"img/content_cards/01_preparation/share/04_study_insurance@3x.jpg",
                            "title":"京东安联财险（留学保险）",
                            "desc":"高达30万元留学生保障计划",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1900"
                        }
                    ]
                }
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
                    "link":"../school/payment.html"
                },
                {
                    "image":"img/zh-banner-card.png",
                    "desc":"",
                    "link":"https://market.cmbchina.com/ccard/wap/lxsapp/more.html"
                },
                // {
                //     "image":"img/top_banner/03_destination/01_uber_v2@2x.png",
                //     "desc":"境外美食/购物/打车周周返: Visa持卡人境外消费，最高20美元福利周周享",
                //     "link":"https://visaoffer.yijiuplus.com/index/signup2/index?bankid=visa_wechat"
                // },
                // {
                //     "image":"img/top_banner/02_pre_trip/02_rest_room@2x.png",
                //     "desc":"龙腾境外机场休息室：免费抢兑一人次龙腾出行境外机场休息室服务",
                //     "link":"offer-detail.php?id=1766"
                // },
                // {
                //     "image":"img/top_banner/02_pre_trip/03_jd_insurance@2x.png",
                //     "desc":"京东安联财险（留学保险）：高达30万元留学生保障计划",
                //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1900"
                // },
                {
                    "image":"img/top_banner/02_pre_trip/others/05_ifree_data@2x.png",
                    "desc":"iFREE：流量$1通",
                    "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1902"
                },
                // {
                //     "image":"img/top_banner/0601.jpg",
                //     "desc":"",
                //     "link":"http://www.flyert.com/visavoyage"
                // },
            ],
            "benefits":[
                {
                    "benefits":[
                        
                        {
                            "image":"img/content_cards/02_pre-trip/card1.jpg",
                            "title":"境外美食/购物/打车周周返",
                            "desc":"Visa持卡人境外消费，最高 20美元福利周周享",
                            "link":"https://visaoffer.yijiuplus.com/index/signup2/index?bankid=visa_wechat"
                        },
                        {
                            "image":"img/content_cards/02_pre-trip/card2.jpg",
                            "title":"租租车",
                            "desc":"境内外双重租车特权",
                            "link":"https://visaoffer.yijiuplus.com/index/signup2/index?bankid=visa_wechat"
                        },
                        {
                            "image":"img/content_cards/02_pre-trip/card3.jpg",
                            "title":"iFREE",
                            "desc":"一天一美元开启环球之旅",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1902"
                        },
                        {
                            "image":"img/content_cards/02_pre-trip/others/8hotels@3x.jpg",
                            "title":"8大奢华酒店集团",
                            "desc":"入住即返高达$100消费抵扣",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1918"
                        },
                        {
                            "image":"img/content_cards/02_pre-trip/card5.jpg",
                            "title":"海淘精选礼遇",
                            "desc":"11大品类海淘电商低至4折",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1909"
                        },
                        {
                            "image":"img/content_cards/01_preparation/share/05_travel_insurance@3x.jpg",
                            "title":"京东安联财险（旅行保险）",
                            "desc":"最高30万元医疗保障，最高20万元紧急救援保障",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1901"
                        },
                        {
                            "image":"img/content_cards/01_preparation/share/04_study_insurance@3x.jpg",
                            "title":"京东安联财险（留学保险）",
                            "desc":"高达30万元留学生保障计划",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1900"
                        },
                        {
                            "image":"img/0722/1.jpg",
                            "title":"非同返享——海淘赢奖励",
                            "desc":"单笔消费满50美元 优选好礼等你来选",
                            "link":"https://visaoffer.yijiuplus.com/index/abroad"
                        },
                        // {
                        //     "image":"img/top_banner/top-0601-1.png",
                        //     "title":"龙腾出行",
                        //     "desc":"指定Visa卡付款，可1美元享受龙腾境外贵宾厅",
                        //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=2034"
                        // },
                        {
                            "image":"img/top_banner/top-0601-2.png",
                            "title":"Airbnb爱彼迎",
                            "desc":"指定Visa卡付款，可0.1美元享受境外房源优惠券包",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=2035"
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
                {
                    "image":"img/zh-banner-card.png",
                    "desc":"",
                    "link":"https://market.cmbchina.com/ccard/wap/lxsapp/more.html"
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
                    "image":"img/top_banner/03_destination/others/03_ifree_data@2x.png",
                    "desc":"iFREE：流量$1通",
                    "link":"offer-detail.php?id=1096"
                },
                {
                    "image":"img/top_banner/03_destination/global-banner.png",
                    "desc":"海淘精选礼遇",
                    "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1909"
                }
            ],
            "benefits":[
                {
                    "category":"健康生活",
                    "benefits":[
                        {
                            "image":"img/content_cards/03_destination/others/health/01_online_dr@3x.jpg",
                            "title":"爱睿智健康",
                            "desc":"在线医疗咨询服务",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=31&id=1912"
                        },
                        {
                            "image":"img/content_cards/03_destination/others/health/02_video_dr@3x.jpg",
                            "title":"和缓视频医生",
                            "desc":"7×24小时实时在线视频医生咨询服务",
                            "link":"https://visaoffer.yijiuplus.com/index/index/detail? cid=31&id=2033"
                        },
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
                            "image":"img/0722/3.jpg",
                            "title":"Kojima",
                            "desc":"最高享93折优惠+最高10%退税",
                            "link":"https://www.visa.cn/zh_cn/visa-offers-and-perks/kojima/144685"
                        },
                        {
                            "image":"img/0722/4.jpg",
                            "title":"BIC CAMERA",
                            "desc":"最高享93折优惠+最高10%退税",
                            "link":"https://www.visa.cn/zh_cn/visa-offers-and-perks/bic-camera/144684"
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
                        {
                            "image":"img/content_cards/03_destination/usa/dine/01_uber@3x.jpg",
                            "title":"境外美食/购物/打车周周返",
                            "desc":"Visa持卡人境外消费，最高20美元福利周周享",
                            "link":"https://visaoffer.yijiuplus.com/index/signup2/index?bankid=visa_wechat"
                        }
                    ]
                },
                // {
                //     "category":"美食",
                //     "benefits":[
                //         // {
                //         //     "image":"img/content_cards/03_destination/others/dine/03_imperial_treasure@3x.jpg",
                //         //     "title":"Imperial Treasure Fine Shanghai Cuisine",
                //         //     "desc":"消费满150新币赠甜品一份",
                //         //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?id=1712"
                //         // },
                //         // {
                //         //     "image":"img/content_cards/03_destination/card11.jpg",
                //         //     "title":"Ola 海滩俱乐部",
                //         //     "desc":"高端特色餐厅第二道主菜半 价优惠",
                //         //     "link":"https://visaoffer.yijiuplus.com/index/index/detail?cid=0&id=1797"
                //         // }
                //     ]
                // },
                // {
                {
                    "category":"游玩体验",
                    "benefits":[
                        {
                            "image":"img/0722/5.jpg",
                            "title":"Y-aoyama",
                            "desc":"最高享93折优惠+最高10%退税",
                            "link":"https://www.visa.cn/zh_cn/visa-offers-and-perks/y-aoyama/128580"
                        },
                        {
                            "image":"img/0722/6.jpg",
                            "title":"松本清",
                            "desc":"最高享93折优惠+最高10%退税",
                            "link":"https://www.visa.cn/zh_cn/visa-offers-and-perks/%E6%9D%BE%E6%9C%AC%E6%B8%85/128578"
                        }
                    ]
                },
                {
                    "category":"explore-more",
                    "link":"https://visaoffer.yijiuplus.com/index/index/plist?card_type=0&cid=0&use_type_id=0",
                }
            ]
        }
    }
};
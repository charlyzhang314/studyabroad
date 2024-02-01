<?php
function is_weixin_visit(){
    if (strpos($_SERVER['HTTP_USER_AGENT'], 'MicroMessenger') !== false) {
        return true;
    } else {
        return false;
    }
    return false;
}

$openid = '';
if(isset($_COOKIE['visa_openid']) && !empty($_COOKIE['visa_openid'])){
    $openid = htmlspecialchars(strip_tags($_COOKIE['visa_openid']));
}

if(isset($_GET['openid']) && !empty($_GET['openid'])) {
    $openid = htmlspecialchars(strip_tags($_GET['openid']));

    setcookie('visa_openid', $openid, time() + 3600);
}

if(is_weixin_visit() && empty($openid)){
    $callback = "https://digitas.yijiuplus.com/studyabroad/interest.php";
    $str = $_SERVER['QUERY_STRING'];
    if(!empty($str)){
        $callback .= "?".$str;
    }
    $oauthurl = "https://visa-open.yijiuplus.com/wx/oauth2/authorize?brandId=i7PH9zVzE1VhNfxu&access_token=false&scope=snsapi_base&url=".urlencode($callback);

    header("Location: ".$oauthurl);
}

?>
<!DOCTYPE html>
<html lang="en" class="interest">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Visa留学家</title>

	<link rel="stylesheet" href="css/libs/slick.css">
	<link rel="stylesheet" href="css/libs/slick-theme.css">
	<link rel="stylesheet" href="css/swiper.min.css">
    <link rel="stylesheet" href="css/app.css?24">
    <style type="text/css">
    	.bank_intro_pop{position: fixed;width: 100%;height: 100%;background: rgba(0,0,0,0.7);left: 0;top: 0;z-index: 9999;display: none}
    	.bank_intro_pop .main{width: 80%;position: absolute;left: 50%;top: 50%;transform: translate(-50%,-50%);max-width: 700px;}
    	.bank_intro_pop .close_bg{position: absolute;left: 0;top: 0;width: 100%;height: 100%;}
    	.bank_intro_pop .main .banks{overflow: hidden}
    	.bank_intro_pop .main .grid .bg{display: block;width: 100%}
    	.bank_intro_pop .main .grid .apply_btn{position: absolute;left: 25.5%;bottom: 4.36%;width: 49.5%;height: 6.3%;background: url("img/credit_card/btn3.png");background-size: 100% 100%}
    	#arrow_prev{position: fixed;width: 4.4vw;left: 0.8vw;top: 50%;transform: translate(0,-50%);padding: 2vw;box-sizing: content-box;}
    	#arrow_next{position: fixed;width: 4.4vw;right: 0.8vw;top: 50%;transform: translate(0,-50%);padding: 2vw;box-sizing: content-box;}
    	.swiper-pagination{bottom: -20px !important}
    	.swiper-pagination-bullet-active{background: white}
    	.swiper-pagination-bullet{background: white}
    	.pop_close_btn{position: absolute;right: 0;top: 0;padding: 3vw;width: 4.2vw;z-index: 2;box-sizing: content-box;}
    	.swipe_hint{position: fixed;left: 0;top: 0;width: 100%;height: 100%;background: rgba(0,0,0,0.8);z-index: 3}
    	.swipe_hint .main{position: absolute;left: 50%;top: 50%;transform: translate(-50%,-50%);width: 28.5%;max-width: 400px;}
    	.swipe_hint .main .txt{display: block;width: 100%}
    	.swipe_hint .main .cursor{position: absolute;left: 0;top: 0;width: 100%;animation: cursorMove 0.8s linear infinite}

    	.video_pop{position: fixed;width: 100%;height: 100%;background: rgba(0,0,0,0.8);z-index: 9999;left: 0;top: 0;display: none}
    	.video_pop .main{position: absolute;left: 0;top: 50%;width: 100%;transform: translate(0,-50%);}
    	.video_pop .main .video_box{display: block;width: 100%;}
    	.video_pop .main .video_box video{display: block;width: 100%;}
    	.video_pop .main .hash{display: block;width: 95%;padding: 1vw 0;box-sizing: content-box;margin:0 auto;}
    	.video_pop .close_btn{position: absolute;right: 0;top: 0;width: 4.2vw;padding: 3vw;box-sizing: content-box;}
    	.video_pop .danmu{position: absolute;left: 100%;font-size: 3.6vw;box-sizing: content-box;padding: 1.8vw 5.3vw;color: white;border-radius: 5vw}
    	.video_pop .danmu.list1{top: -12vw;animation: danmuMove 8s linear infinite;white-space: nowrap;}
    	.video_pop .danmu.list2{top: -24vw;animation: danmuMove 8s linear 0.5s infinite;white-space: nowrap;}
    	.video_pop .danmu.list3{top: -36vw;animation: danmuMove 7s linear 1s infinite;white-space: nowrap;}
    	.video_pop .danmu.list4{bottom: -12vw;animation: danmuMove 6s linear 0.5s infinite;white-space: nowrap;}
    	.video_pop .danmu.list5{bottom: -24vw;animation: danmuMove 8s linear 1s infinite;white-space: nowrap;}
    	.video_pop .danmu.list6{bottom: -36vw;animation: danmuMove 8s linear infinite;white-space: nowrap;}

    	.video_pop .danmu.list7{top: -12vw;animation: danmuMove 8s linear 1s infinite;white-space: nowrap;}
    	.video_pop .danmu.list8{top: -24vw;animation: danmuMove 8s linear 2.5s infinite;white-space: nowrap;}
    	.video_pop .danmu.list9{top: -36vw;animation: danmuMove 7s linear 2s infinite;white-space: nowrap;}
    	.video_pop .danmu.list10{bottom: -12vw;animation: danmuMove 6s linear 2.5s infinite;white-space: nowrap;}
    	.video_pop .danmu.list11{bottom: -24vw;animation: danmuMove 8s linear 3.5s infinite;white-space: nowrap;}
    	.video_pop .danmu.list12{bottom: -36vw;animation: danmuMove 8s linear 2s infinite;white-space: nowrap;}

    	.video_pop .danmu.list13{top: -12vw;animation: danmuMove 8s linear 2.5s infinite;white-space: nowrap;}
    	.video_pop .danmu.list14{top: -24vw;animation: danmuMove 8s linear 4.5s infinite;white-space: nowrap;}
    	.video_pop .danmu.list15{top: -36vw;animation: danmuMove 7s linear 5s infinite;white-space: nowrap;}
    	.video_pop .danmu.list16{bottom: -12vw;animation: danmuMove 6s linear 4.5s infinite;white-space: nowrap;}
    	.video_pop .danmu.list17{bottom: -24vw;animation: danmuMove 8s linear 6.5s infinite;white-space: nowrap;}
    	.video_pop .danmu.list18{bottom: -36vw;animation: danmuMove 8s linear 5s infinite;white-space: nowrap;}

    	.video_pop .danmu.list19{top: -12vw;animation: danmuMove 8s linear 5s infinite;white-space: nowrap;}
    	.video_pop .danmu.list20{top: -24vw;animation: danmuMove 8s linear 6.5s infinite;white-space: nowrap;}
    	.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px}

    	@keyframes cursorMove{
		0%{transform:translate(5px,0px);}
		50%{transform:translate(-5px,0px);}
		100%{transform:translate(5px,0px);}
		}

		@keyframes danmuMove{
		0%{transform:translate(0,0px);}
		100%{transform:translate(calc(-250vw),0px);}
		}
    </style>
    <script src="https://hcm.publicis-groupe.cn/hcm.js"></script>
<script>
(function (g, o, f) {
  g[f] =
    g[f] ||
    function () {
      return g[f].q ? g[f].q.push(arguments) : (g[f].q = [arguments]);
    };
  g[o] = f;
})(window, "_HypersConsent", "_hcm");

_hcm('init', 48, {
api_url: 'https://hcm.publicis-groupe.cn',
noCustomize: true, 
defaultBlock: true,
allowList:["type=pv"],
headerImg: 'https://digitas.yijiuplus.com/studyabroad/img/header.png',
defaultBlock: false,
allowList: [/type=pv/]
});
</script>
<script>
(function(i,d,t,o,u,h,s,f){i[t]=i[t]||[],i[t].push(h);i[h]=i[h]||function(){
return (i[h].q=i[h].q||[]).push(arguments)};s=d.createElement(o);s.src=u;
s.async=1;f=d.getElementsByTagName(o)[0];f.parentNode.insertBefore(s,f);
})(window,document,"HyperAnalyticsObject","script","//t1.publicis-groupe.cn/hwt.js?v=1.10","_ha");
_ha("create","8470",{
    auto_track: true,
    heatmap_url: "//analytics.publicis-groupe.cn/static/hwt-heatmap.js",
    // If your website is using HTTP, while tracker is using HTTPs, please uncomment next line.
    // force_ssl: true,
    // If your website is a single page web application(SPA), please uncomment next line (supported after js v2.15.0).
    // url_change_track: true,
    env: { inst: "saas" },
    "api_url":"//t1.publicis-groupe.cn"
});
// If able to get visitor's openid, please uncomment next line，and replace [openid] with visitor's openid
//_ha("identify",{ wx_id: [openId] });
_ha("send","pageview");
</script>

</head>
<body class="interest">
	<img class="sharing_img" src="img/visa_sharing_img.jpg" />

	<header class="fixed-top">
		<ul class="nav nav-tabs justify-content-between status-selection" id="status-selection">
			<li class="nav-item">
				<a class="nav-link btn-tracking" href="javascript:;" onclick="onClickInterestStatus(this)" data-answer="preparation" data-trackaction="homepageclick_stage" data-trackvalue='{"button_name":"计划留学", "button_id":"preparation"}'>计划留学</a>
			</li>
			<li class="nav-item">
				<a class="nav-link btn-tracking" href="javascript:;" onclick="onClickInterestStatus(this)" data-answer="pretrip" data-trackaction="homepageclick_stage" data-trackvalue='{"button_name":"出发准备", "button_id":"pretrip"}'>出发准备</a>
			</li>
			<li class="nav-item">
				<a class="nav-link btn-tracking" href="javascript:;" onclick="onClickInterestStatus(this)" data-answer="destination" data-trackaction="homepageclick_stage" data-trackvalue='{"button_name":"当地生活", "button_id":"destination"}'>当地生活</a>
			</li>
		</ul>
		<ul class="list-inline scrolling-wrapper-flexbox country-selection" id="country-selection">
			<li class="list-inline-item item"><a class="btn-tracking" href="javascript:;" onclick="onClickInterestCountry(this)" data-answer="us" data-trackaction="homepageclick_country" data-trackvalue='{"button_name":"美国", "button_id":"us"}'>美国</a>
			</li><li class="list-inline-item item"><a class="btn-tracking" href="javascript:;" onclick="onClickInterestCountry(this)" data-answer="uk" data-trackaction="homepageclick_country" data-trackvalue='{"button_name":"英国", "button_id":"uk"}'>英国</a>
			</li><li class="list-inline-item item"><a class="btn-tracking" href="javascript:;" onclick="onClickInterestCountry(this)" data-answer="ca" data-trackaction="homepageclick_country" data-trackvalue='{"button_name":"加拿大", "button_id":"ca"}'>加拿大</a>
			</li><li class="list-inline-item item"><a class="btn-tracking" href="javascript:;" onclick="onClickInterestCountry(this)" data-answer="au" data-trackaction="homepageclick_country" data-trackvalue='{"button_name":"澳大利亚", "button_id":"au"}'>澳大利亚</a>
			</li><li class="list-inline-item item"><a class="btn-tracking" href="javascript:;" onclick="onClickInterestCountry(this)" data-answer="other" data-trackaction="homepageclick_country" data-trackvalue='{"button_name":"其他", "button_id":"other"}'>其他</a>
			</li>
		</ul>
	</header>

	<div class="container-fluid px-0 position-relative loading" style="margin-top:0rem">
		<div class="loader">Loading...</div>
		<div class="content">
			<section class="section-banners" id="section-banners">
				<div class="slick-carousel">
					<!-- dynamic banners -->
				</div>
				<div class="banner dummy">
					<a href="javascript:;" target="_blank">
						<img width="335" alt="" />
					</a>
				</div>
			</section>

			<img src="img/first-visa-banner.jpg" class="first_visa_banner" id="section-banks-slogan" />

			<section class="section-benefits" id="section-benefits">
				<img src="img/home-banner-title1.png" class="section_slogan" />
				<div class="benefits">
					<!-- dynamic benefits -->
				</div>
				<div class="col-6 benefit dummy">
					<div class="card">
						<a href="javascript:;" target="_blank">
							<img class="card-img-top" alt="">
							<div class="card-body">
								<h5 class="card-title">&nbsp;</h5>
								<p class="card-text">&nbsp;</p>
							</div>
						</a>
					</div>
				</div>
				<div class="text-center btn-more-container dummy" style="background: none">
					<a class="btn btn-primary btn-more" style="border: none;background: none;color: #1434cb;" href="javascript:;" onclick="showAllBenefits(this);">查看更多 ></a>
					<!-- <a class="btn btn-primary btn-more" style="border-radius: 1rem;" href="javascript:;" onclick="showAllBenefits(this);">查看更多 <i class="fas fa-chevron-right"></i></a> -->
					<!-- <a style="border-radius: 1rem;" href="javascript:;" onclick="showAllBenefits(this);"><img src="img/check-more-btn.png" style="width: 32%;margin:10px auto" /></a> -->
				</div>
			</section>

			<section class="section-interests" id="section-interests">
				<img src="img/home-banner-title2.png" class="section_slogan" style="padding-top:6vw" />
				<div class="slide-down interests">
					<!-- dynamic interests -->
				</div>

				<a class="item interest dummy btn-interest" target="_blank" href="javascript:;">
					<img height="32" alt="" />
					<p>&nbsp;</p>
				</a>
				<a class="item interest dummy btn-showAll" href="javascript:;" onclick="showAllInterests(this);" data-trackaction="homepageclick_maininfoall" data-trackvalue='{"button_name":"查看全部"}'>
					<img src="img/icons/icon_show_all.png" height="32" alt="" />
					<p>查看全部</p>
				</a>
			</section>

			<img src="img/home-banner-title3.png" class="section_slogan" style="padding-top:6vw" />
			<section class="section-banks" id="section-banks">
				<!-- <div class="title">
					<h4>
						<a class="item bank" href="javascript:;" onclick="onClickInterestBank(this)" data-bank="all" data-trackaction="homepageclick_applycard" data-trackvalue='{"button_name":"一键解锁 留学信用卡", "button_id":"applycard_all"}'>
							一键解锁<br>留学信用卡
						</a>
					</h4>
				</div> -->
				<div class="banks">
					<div class="scrolling-wrapper-flexbox">
						<!-- <a class="item bank" href="javascript:;" onclick="onClickInterestBank(this)" data-bank="icbc" data-trackaction="homepageclick_bankcard" data-trackvalue='{"button_name":"工商银行", "button_id":"applycard_icbc"}'>
							<img src="img/icons/icon_visa_card.svg" width="32" alt="" />
							工商银行
						</a> -->
						<a class="item bank bank_tb" data-index="1" href="javascript:;" data-bank="icbc" data-trackaction="homepageclick_bankcard" data-trackvalue='{"button_name":"工商银行", "button_id":"applycard_icbc", "bank_id": "4"}'>
							<img src="img/icons/icon_visa_card.png" width="32" alt="" />
							工商银行
						</a>
						<a class="item bank bank_tb" data-index="2" href="javascript:;" data-bank="abc" data-trackaction="homepageclick_bankcard" data-trackvalue='{"button_name":"农业银行", "button_id":"applycard_abc", "bank_id": "6"}'>
							<img src="img/icons/icon_visa_card.png" width="32" alt="" />
							农业银行
						</a>
						<a class="item bank bank_tb" data-index="3" href="javascript:;" data-bank="boc" data-trackaction="homepageclick_bankcard" data-trackvalue='{"button_name":"中国银行", "button_id":"applycard_boc", "bank_id": "2"}'>
							<img src="img/icons/icon_visa_card.png" width="32" alt="" />
							中国银行
						</a>
						<a class="item bank bank_tb" data-index="4" href="javascript:;" data-bank="ccb" data-trackaction="homepageclick_bankcard" data-trackvalue='{"button_name":"建设银行", "button_id":"applycard_ccb", "bank_id": "5"}'>
							<img src="img/icons/icon_visa_card.png" width="32" alt="" />
							建设银行
						</a>
						<a class="item bank bank_tb" data-index="5" href="javascript:;" data-bank="cmb" data-trackaction="homepageclick_bankcard" data-trackvalue='{"button_name":"招商银行", "button_id":"applycard_cmb", "bank_id": "15"}'>
							<img src="img/icons/icon_visa_card.png" width="32" alt="" />
							招商银行
						</a>
						<a class="item bank bank_tb" data-index="6" href="javascript:;" data-bank="citic" data-trackaction="homepageclick_bankcard" data-trackvalue='{"button_name":"中信银行", "button_id":"applycard_citic", "bank_id": "10"}'>
							<img src="img/icons/icon_visa_card.png" width="32" alt="" />
							中信银行
						</a>
						<a class="item bank bank_tb" data-index="7" href="javascript:;" data-bank="spdb" data-trackaction="homepageclick_bankcard" data-trackvalue='{"button_name":"浦发银行", "button_id":"applycard_citic", "bank_id": "12"}'>
							<img src="img/icons/icon_visa_card.png" width="32" alt="" />
							浦发银行
						</a>
						<a class="item bank bank_tb" data-index="8" href="javascript:;" data-bank="cms" data-trackaction="homepageclick_bankcard" data-trackvalue='{"button_name":"民生银行", "button_id":"applycard_cms", "bank_id": "11"}'>
							<img src="img/icons/icon_visa_card.png" width="32" alt="" />
							民生银行
						</a>
						<a class="item bank bank_tb" data-index="9" href="javascript:;" data-bank="ceb" data-trackaction="homepageclick_bankcard" data-trackvalue='{"button_name":"光大银行", "button_id":"applycard_ceb", "bank_id": "9"}'>
							<img src="img/icons/icon_visa_card.png" width="32" alt="" />
							光大银行
						</a>
						<a class="item bank bank_tb" data-index="10" href="javascript:;" data-bank="cib" data-trackaction="homepageclick_bankcard" data-trackvalue='{"button_name":"兴业银行", "button_id":"applycard_cib", "bank_id": "10"}'>
							<img src="img/icons/icon_visa_card.png" width="32" alt="" />
							兴业银行
						</a>
						
					</div>
				</div>
				<!-- <a class="item" href="javascript:;" onclick="onClickInterestBank(this)" data-bank="all"><img src="img/search-more-btn.png" class="more_btn" /></a>
 -->				<!-- <div class="hint"></div> -->
 				<a class="item" href="javascript:;" data-bank="all"><img src="img/search-more-btn.png?1" class="more_btn" /></a>

			</section>

			

			

			<!-- <a id="btn-sticky" class="btn btn-sticky hide" href="javascript:;" onclick="onClickInterestBank(this)" data-bank="all" data-trackaction="homepageclick_applycard" data-trackvalue='{"button_name":"一键解锁 留学信用卡", "button_id":"applycard_all"}'>
				一键解锁<br>留学信用卡
			</a> -->
			<!-- <a id="btn-sticky" class="btn-sticky hide side_btn" href="javascript:;">
				一键申请<br>留学信用卡
			</a> -->
			<a id="btn-sticky" class="btn-sticky hide side_btn" href="javascript:;">
				<img src="img/stick-btn1.png" class="side_btn_bg" />
			</a>
		</div>
	</div>

	<p id="delete_btn" style="color: #1a1c73;font-size: 12px;text-align: center;position: relative;width: 100%;line-height: 30px;margin-bottom: 0;">申请删除个人数据</p>

	<footer style="margin-top: 10px;">
		<div class="copyright">&copy; Copyright 1996-2022. All rights reserved.</div>
		<img src="img/logo_visa.svg" width="60" alt="Visa Logo" />
	</footer>

	<!-- <div class="modal fade" data-backdrop="static" id="modal-onboard">
		<div class="modal-dialog">
			<div class="modal-content text-center">
				<div class="modal-header">
					<h5 class="modal-title"><span class="visa">Visa</span> 伴你留学行</h5>
				</div>
				<div class="modal-body p-0">
					<img class="d-block img-fluid" alt="" />
					<a class="btn btn-primary btn-apply btn-tracking" href="javascript:;" onclick="onClickInterestBank(this)" data-bank="all" data-trackaction="landingpopup_cardapply" data-trackvalue='{"button_name":"立即办卡"}'>立即办卡 <i class="fas fa-chevron-right"></i></a>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-close" data-dismiss="modal"></button>
				</div>
			</div>
		</div>
	</div> -->
	<div class="modal fade" data-backdrop="static" id="modal-survey">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header text-center">
					<h5 class="modal-title">想获得更多专属留学福利？<br/>
						<small>让我们进一步了解你</small></h5>
				</div>
				<div class="modal-body">
					<div id="carouselPopupSurvey" class="carousel slide questions" data-ride="carousel" data-interval="false">
						<ol class="carousel-indicators">
							<li data-target="#carouselPopupSurvey" data-slide-to="0" class="active"></li>
							<li data-target="#carouselPopupSurvey" data-slide-to="1"></li>
						</ol>
						<div class="carousel-inner">
							<section class="question question1 carousel-item active">
								<p>你是</p>
								<div class="ans-group">
									<a class="btn btn-outline-primary" role="button" href="javascript:;" onclick="onClickInterestAnswer(1, this)" data-answer="parent" data-trackaction="agegroup" data-trackvalue='{"button_name":"家长", "button_id":"parent"}'>家长</a>
									<a class="btn btn-outline-primary" role="button" href="javascript:;" onclick="onClickInterestAnswer(1, this)" data-answer="student" data-trackaction="agegroup" data-trackvalue='{"button_name":"学生", "button_id":"student"}'>学生</a>
								</div>
							</section>
							<section class="question question3 carousel-item">
								<p>目前处于以下哪个阶段？</p>
								<div class="ans-group">
									<a class="btn btn-outline-primary" role="button" href="javascript:;" onclick="onClickInterestAnswer(3, this)" data-answer="preparation" data-trackaction="stagegroup" data-trackvalue='{"button_name":"计划留学", "button_id":"preparation"}'>计划留学</a>
									<a class="btn btn-outline-primary" role="button" href="javascript:;" onclick="onClickInterestAnswer(3, this)" data-answer="pretrip" data-trackaction="stagegroup" data-trackvalue='{"button_name":"出发准备", "button_id":"pretrip"}'>出发准备</a>
									<a class="btn btn-outline-primary" role="button" href="javascript:;" onclick="onClickInterestAnswer(3, this)" data-answer="destination" data-trackaction="stagegroup" data-trackvalue='{"button_name":"当地生活", "button_id":"destination"}'>当地生活</a>
								</div>
							</section>
						</div>
					</div>
				</div>
				<div class="modal-footer text-center">
					<button type="button" class="btn btn-close" data-dismiss="modal"></button>
				</div>
			</div>
		</div>
	</div>

	<div class="bank_intro_pop">
		<div class="close_bg"></div>
		<div class="main">
			
			<div class="bank_icbc banks" data-switch="1">
				<div class="swiper-wrapper">
					<!-- 工商银行 -->
		            <div class="swiper-slide">
		                <div class="grid">
		                	<img src="img/credit_card/bank1-card1.jpg" class="bg" />
		                	<span class="apply_btn" data-id="1" data-name="Visa留学信用卡" data-link="https://elife.icbc.com.cn/OFSTCARDWEB/dist/#/apply/detail/460000459/105BKRK0001000000000000000"></span>
		                </div>
		            </div>
		            <div class="swiper-slide">
		                <div class="grid">
		                	<img src="img/credit_card/bank1-card2.jpg" class="bg" />
		                	<span class="apply_btn" data-id="2" data-name="Visa留学生金卡" data-link="https://elife.icbc.com.cn/OFSTCARDWEB/dist/#/apply/detail/460000460/105BKRK0001000000000000000"></span>
		                </div>
		            </div>

		            <!-- 农业银行 -->
		            <div class="swiper-slide">
		                <div class="grid">
		                	<img src="img/credit_card/bank2-card1.jpg" class="bg" />
		                	<span class="apply_btn" data-id="1" data-name="留学白金信用卡（美好生活版）" data-link="https://wx.abchina.com/CreditCard/netBank/webank/applyCard.aspx?id=null&q=direct&cardcode=VCPC1I"></span>
		                </div>
		            </div>

		            <!-- 中国银行 -->
		            <!-- <div class="swiper-slide">
		                <div class="grid">
		                	<img src="img/credit_card/bank3-card1.jpg" class="bg" />
		                	<span class="apply_btn" data-id="1" data-name="Visa长城选校帝国际教育联名卡" data-link="https://cloud.bankofchina.com/sh/api/net/common/url/adr?id=xuanxiaodivish"></span>
		                </div>
		            </div> -->
		            <div class="swiper-slide">
		                <div class="grid">
		                	<img src="img/credit_card/bank3-card10.jpg?1" class="bg" />
		                	<span class="apply_btn" data-id="4" data-name="卓隽留学Visa英镑卡" data-link="https://apply.mcard.boc.cn/apply/I36vaa"></span>
		                </div>
		            </div>
		            <div class="swiper-slide">
		                <div class="grid">
		                	<img src="img/credit_card/bank3-card2.jpg" class="bg" />
		                	<span class="apply_btn" data-id="2" data-name="卓隽留学Visa美元卡" data-link="https://apply.mcard.boc.cn/apply/mobile/product/productConfirm/mchot?newInTypeCode=57719d33301ab5a878f0d77d9ae213400820c14219f3b1b93ac6d00588ebf866abb404bafb771befa0778702915ad7bfe74b49702e2cef88fd39d0fd943bc39beee36686df1e21f1bd78250ad991321052e2b01468a2b466f5749eaf088c8403b356cb2f6194cc7700bb319719673d750b610b80930fafdb6b95da2bbb5e81e2&masterOrSubFlag=1&formVersion=GPB1A&shortId=bqAfum&channelSource=1"></span>
		                </div>
		            </div>
		            <div class="swiper-slide">
		                <div class="grid">
		                	<img src="img/credit_card/bank3-card11.jpg?1" class="bg" />
		                	<span class="apply_btn" data-id="5" data-name="卓隽留学Visa欧元卡" data-link="https://apply.mcard.boc.cn/apply/RJFbuu"></span>
		                </div>
		            </div>
		            <!-- <div class="swiper-slide">
		                <div class="grid">
		                	<img src="img/credit_card/bank3-card4.jpg?1" class="bg" />
		                	<span class="apply_btn" data-id="3" data-name="长城卓隽新东方白金卡（Visa白金）" data-link="https://apply.mcard.boc.cn/apply/mobile/product/productListPage/proList?bizUuid=3ce20ee0cef0c6838c75bc4ed2b24ae78c979dcbcb90818967254c10641031908cd58c1fd52f87a4ec35222fb39cefb77b4fee55e36cae5c94da0f56bf5b00aa157d1257c075a461f637892493a76effa035303668ee35e3ad58f82f97846b844cf5a10bf00c283a0dbb867c800583b842048b41f60b899d85d01ae22cf30868,73f57c8c5bf5b2d79b23da53a1c408b97a8cd7cc3809faeae41324612447b1a76cfcf1f7b7379ab3e0a3b93c5df413fce1a29a62dec36e16f25371aec9b02ac5fb78693653190cd515ecb2974f160483595ddd98d029530e8005de496da18a61d4e8e26b77b0940622f5ec42e057ea389e0973c0e949e03f60a36660c8f6dfe9"></span>
		                </div>
		            </div> -->
		            <!-- <div class="swiper-slide">
		                <div class="grid">
		                	<img src="img/credit_card/bank3-card3.jpg?1" class="bg" />
		                	<span class="apply_btn" data-id="3" data-name="长城卓隽新东方金卡（Visa金）" data-link="https://apply.mcard.boc.cn/apply/mobile/product/productListPage/proList?bizUuid=3ce20ee0cef0c6838c75bc4ed2b24ae78c979dcbcb90818967254c10641031908cd58c1fd52f87a4ec35222fb39cefb77b4fee55e36cae5c94da0f56bf5b00aa157d1257c075a461f637892493a76effa035303668ee35e3ad58f82f97846b844cf5a10bf00c283a0dbb867c800583b842048b41f60b899d85d01ae22cf30868,73f57c8c5bf5b2d79b23da53a1c408b97a8cd7cc3809faeae41324612447b1a76cfcf1f7b7379ab3e0a3b93c5df413fce1a29a62dec36e16f25371aec9b02ac5fb78693653190cd515ecb2974f160483595ddd98d029530e8005de496da18a61d4e8e26b77b0940622f5ec42e057ea389e0973c0e949e03f60a36660c8f6dfe9"></span>
		                </div>
		            </div> -->
		            
		            
		            <div class="swiper-slide">
		                <div class="grid">
		                	<img src="img/credit_card/bank3-card13.jpg?1" class="bg" />
		                	<span class="apply_btn" data-id="7" data-name="Visa全币白金卡" data-link="https://apply.mcard.boc.cn/apply/mobile/product/productConfirm/mhot?newInTypeCode=0019&masterOrSubFlag=1&formVersion=GPB1A&from=singlemessage&isappinstalled=0"></span>
		                </div>
		            </div>

		            <!-- 建设银行 -->
		            <div class="swiper-slide">
		                <div class="grid">
		                	<img src="img/credit_card/bank8-card5.jpg" class="bg" />
		                	<span class="apply_btn" data-id="1" data-name="龙卡畅享信用卡" data-link="http://m.ccb.com/cn/creditcard/apply/mobile/newMobile/standard_form.html?cardId=20190813_1565683729&applyCity=3&applyProv=1003&Rcmd_insID=W00000001"></span>
		                </div>
		            </div>

		            <!-- 招商银行 -->
		            <div class="swiper-slide">
		              <div class="grid">
		              	<img src="img/credit_card/bank4-card1.jpg" class="bg" />
		              	<span class="apply_btn" data-id="1" data-name="留学信用卡" data-link="https://market.cmbchina.com/ccard/wap/lxswap/lxsfm/more.html"></span>
		              </div>
			          </div>
			          <div class="swiper-slide">
			              <div class="grid">
			              	<img src="img/credit_card/bank4-card2.jpg" class="bg" />
			              	<span class="apply_btn" data-id="2" data-name="Visa外币单标信用卡" data-link="https://ccclub.cmbchina.com/mca/Oapply.aspx?cardsel=7602"></span>
			              </div>
			          </div>
			          <div class="swiper-slide">
			              <div class="grid">
			              	<img src="img/credit_card/bank4-card3.jpg" class="bg" />
			              	<span class="apply_btn" data-id="3" data-name="全币种国际白金卡" data-link="https://market.cmbchina.com/ccard/wap/qbbwap/index.html"></span>
			              </div>
			          </div>

			          <!-- 中信银行 -->
			          <div class="swiper-slide">
			              <div class="grid">
			              	<img src="img/credit_card/bank5-card1.jpg" class="bg" />
			              	<span class="apply_btn" data-id="1" data-name="Visa Signature 信用卡（御玺卡）" data-link="https://cs.creditcard.ecitic.com/citiccard/cardshopcloud/standardcard-h5/index.html?pid=CS0136&cls=SJWXFBK2&sid=SJWXFBK2"></span>
			              </div>
			          </div>
			          <div class="swiper-slide">
			              <div class="grid">
			              	<img src="img/credit_card/bank5-card6.jpg" class="bg" />
			              	<span class="apply_btn" data-id="6" data-name="国航携程联名信用卡御玺卡" data-link="https://cs.creditcard.ecitic.com/citiccard/cardshopcloud/standardcard-h5/index.html?sid=YDKHD&pid=CS0650"></span>
			              </div>
			          </div>
			          <div class="swiper-slide">
			              <div class="grid">
			              	<img src="img/credit_card/bank5-card7.jpg" class="bg" />
			              	<span class="apply_btn" data-id="7" data-name="国航携程联名信用卡金卡" data-link="https://cs.creditcard.ecitic.com/citiccard/cardshopcloud/standardcard-h5/index.html?sid=YDKHD&pid=CS0649"></span>
			              </div>
			          </div>

			          <!-- 浦发银行 -->
			          <div class="swiper-slide">
			              <div class="grid">
			              	<img src="img/credit_card/bank10-card1.jpg" class="bg" />
			              	<span class="apply_btn" data-id="1" data-name="Visa御玺卡" data-link="https://ecentre.spdbccc.com.cn/creditcard/indexActivity.htm?data=P2248092"></span>
			              </div>
			          </div>

			          <!-- 民生银行 -->
			          <div class="swiper-slide">
		                <div class="grid">
		                	<img src="img/credit_card/bank6-card2.jpg" class="bg" />
		                	<span class="apply_btn" data-id="1" data-name="Visa留学生芯片标准白金信用卡" data-link="https://creditcard.cmbc.com.cn/wsv2/step?encryptStr=RpyKzjTqU49aaWP%2FLTV8Ckvr5LbKye5Re7qZiJsoOVCAp3QAM11WFDQyj3NE%2BKNr0VFFWgSQylVJ%2FsmIjfsCzp9yd0HXzHBfJQK6ubq5Qpwos0wusJiDAsZhrik%2B4kGtvLMnr501Yl%2FsjEwUrys%2BOiYc1hzbmWNMGYXr79ZJsDY%3D&cardId=338&source=WX"></span>
		                </div>
		            </div>
		            <!-- <div class="swiper-slide">
		                <div class="grid">
		                	<img src="img/credit_card/bank6-card1.jpg" class="bg" />
		                </div>
		            </div> -->

		            <!-- 光大银行 -->
		            <div class="swiper-slide">
		                <div class="grid">
		                	<img src="img/credit_card/bank7-card1.jpg" class="bg" />
		                	<span class="apply_btn" data-id="1" data-name="Evoke联名白金信用卡" data-link="https://xyk.cebbank.com/icip/icip-applypage/info1?cardId=17553&pro_code=ZHTG03BKRK000001VISA"></span>
		                </div>
		            </div>

		            <!-- 兴业银行 -->
		            <div class="swiper-slide">
		                <div class="grid">
		                	<img src="img/credit_card/bank17-card1.jpg" class="bg" />
		                	<span class="apply_btn" data-id="1" data-name="Visa留学生全币种国际信用卡" data-link="https://wm.cib.com.cn/html/webapp/fast-issue-con/parnter.html?id=03b1333e21aa49cc83959b9015d015c3&from=singlemessage"></span>
		                </div>
		            </div>

            


        </div>
        <div class="swiper-pagination"></div>
        <img src="img/credit_card/close-btn.png" class="pop_close_btn" />
        <div class="swipe_hint">
        	<div class="main">
        		<img src="img/credit_card/swipe-hint1.png" class="txt" />
        		<img src="img/credit_card/swipe-hint2.png" class="cursor" />
        	</div>
        </div>

			</div>

			
			<!-- <div class="bank_abc banks" data-switch="2">
				<div class="swiper-wrapper">
	                
	            </div>
	            <img src="img/credit_card/close-btn.png" class="pop_close_btn" />
			</div>

			
			<div class="bank_boc banks" data-switch="3">
				<div class="swiper-wrapper">
					
	            
			</div>

			
			<div class="bank_cmb banks" data-switch="4">
				<div class="swiper-wrapper">
	                
	            </div>
	            <div class="swiper-pagination"></div>
	            <img src="img/credit_card/close-btn.png" class="pop_close_btn" />
	            <div class="swipe_hint">
	            	<div class="main">
	            		<img src="img/credit_card/swipe-hint1.png" class="txt" />
	            		<img src="img/credit_card/swipe-hint2.png" class="cursor" />
	            	</div>
	            </div>
			</div>

			
			<div class="bank_citic banks" data-switch="5">
				<div class="swiper-wrapper">
	                
	            </div>
	            <img src="img/credit_card/close-btn.png" class="pop_close_btn" />
			</div>

			
			<div class="bank_cms banks" data-switch="6">
				<div class="swiper-wrapper">
	                
	            </div>
	            <div class="swiper-pagination"></div>
	            <img src="img/credit_card/close-btn.png" class="pop_close_btn" />
	            <div class="swipe_hint">
	            	<div class="main">
	            		<img src="img/credit_card/swipe-hint1.png" class="txt" />
	            		<img src="img/credit_card/swipe-hint2.png" class="cursor" />
	            	</div>
	            </div>
			</div>

			
			<div class="bank_ceb banks" data-switch="7">
				<div class="swiper-wrapper">
	                
	            </div>
	            <img src="img/credit_card/close-btn.png" class="pop_close_btn" />
			</div>

			
			<div class="bank_ccb banks" data-switch="8">
				<div class="swiper-wrapper">
	                
	            </div>
	            <img src="img/credit_card/close-btn.png" class="pop_close_btn" />
			</div> -->



		</div>
		<img src="img/credit_card/arrow-left.png" id="arrow_prev" class="slide_arrow" />
		<img src="img/credit_card/arrow-right.png" id="arrow_next" class="slide_arrow" />
	</div>

	<div class="video_pop">
		<div class="main">
			<div class="video_box">
                <video id="video1" onended="videoEnded()" x5-playsinline="" playsinline="true" src="img/top_banner/video.mp4" controls="controls"></video>
            </div>
            <img src="img/top_banner/weibo-hash.png?1" class="hash" id="weibo_hash" />
            <div class="danmu list1">我来了！</div>
            <div class="danmu list2">留学生前来打卡</div>
            <div class="danmu list3">泪目了…</div>
            <div class="danmu list4">各位留学生要好好照顾自己啊</div>
            <div class="danmu list5">Visa也来关注留学生们了？惊喜！！</div>
            <div class="danmu list6">呜呜呜呜</div>
            <div class="danmu list7">谢谢Visa的鼓励！</div>
            <div class="danmu list8">大家一起加油啊！！！！</div>
            <div class="danmu list9">新的一年，大家不要放弃，继续追梦！</div>
            <div class="danmu list10">爱了爱了，出国前先办张Visa卡</div>
            <div class="danmu list11">简直感同身受，一个人在国外隔离真的很孤单</div>
            <div class="danmu list12">求Visa保佑，今年能拿到Dream school 的offer！</div>
            <div class="danmu list13">话说刚到国外的时候，还好有Visa卡</div>
            <div class="danmu list14">简直是我2020年的真实写照</div>
            <div class="danmu list15">Visa真的可以</div>
            <div class="danmu list16">感动，保护好我钱包里的Visa卡</div>
            <div class="danmu list17">谢谢Visa对我们的关注和鼓励，哭了</div>
            <div class="danmu list18">孩子们在国外，父母哪能不担心呢…</div>
            <div class="danmu list19">留学生们加油！！！Visa棒棒哒！！</div>
            <div class="danmu list20">2021年一切都会变好的！</div>
		</div>
		<img src="img/top_banner/close-btn.png" class="close_btn" />
	</div>

    <!-- <?php include_once('wechat/init.php')?> -->
	<script type="text/javascript" src="js/libs/jquery-3.5.1.min.js"></script>
	<script type="text/javascript" src="js/libs/bootstrap.js"></script>
	<script type="text/javascript" src="js/libs/slick.min.js"></script>
	<script type="text/javascript" src="js/libs/solid.min.js"></script>
	<script type="text/javascript" src="js/libs/fontawesome.min.js"></script>
	<script type="text/javascript" src="js/swiper.min.js"></script>
	<script type="text/javascript" src="js/interest.js?v=324"></script>
	<script type="text/javascript" src="js/app.js?v=324"></script>
	<script type="text/javascript" src="//res.wx.qq.com/open/js/jweixin-1.6.0.js"></script>
	<script type="text/javascript" src="js/wx.js"></script>

	<script type="text/javascript">
	var isBank = false;
	function getQueryVariable(variable){
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
    }

    var bankName = getQueryVariable("bank") == false ? '' : getQueryVariable("bank");
	var stageType;
	var countryType;
	var tagAgeName;
	var tagDestinationName
	var tagStageName;

	function newTrack(buttonName) {
		var hash = getCookie(C_SURVEY_INTEREST);
		if (hash) {
			hash = hash.split("-");
			tagAgeName = hashvalues[0][hash[0]];
			tagDestinationName = hashvalues[1][hash[1]];
			tagStageName = hashvalues[2][hash[2]];
		}else{
			// hash = location.href.split("#")[1].split("-");
			// tagAgeName = hashvalues[0][hash[0]];
			// tagDestinationName = hashvalues[1][hash[1]];
			// tagStageName = hashvalues[2][hash[2]];
			tagAgeName = "";
			tagDestinationName = "";
			tagStageName = "";
		}

		// for popup survey
		var age = getCookie(C_SURVEY_AGE);
		if (age) { newTagAgeName = hashvalues[0][age]; }

		var stage = getCookie(C_SURVEY_STAGE);
		if (stage) { newTagStageName = hashvalues[2][stage]; }

		var interest = getCookie(C_LAST_INTEREST);
		if (interest) {
			interest = interest.split("-");
			countryType = hashvalues[1][interest[1]];
			stageType = hashvalues[2][interest[2]];
		}
		//console.log(buttonName + ";" + stageType + ";"+ countryType + ";" + tagAgeName + ";" + tagDestinationName + ";" + tagStageName)
		_ha("send","action","arrivalpreparation_applycard", {
		    "botton_name":buttonName,
		    "stage_type": stageType,
		    "country_type": countryType,
		    "tag_age_name": tagAgeName,
		    "tag_destination_name": tagDestinationName,
		    "tag_stage_name": tagStageName
		});

	}

	function goCards(){
    	location.href = "cards.php"
    }

	function goPayment(){
		$(".item.interest.btn-interest").eq(1).click()
	}

	$(function(){
		var $section = $("#section-interests .interests");
		//$section.find(".interest").removeClass("hide");
		// $section.css("max-height", "999px");

		$("#delete_btn").click(function(){
            window.HypersDSAR.show({
			    clause_id: 18,
			    api_url: "https://hcm.publicis-groupe.cn"
			});
        })

		bankName = getQueryVariable("bank");
		initInterest();

		$("#weibo_hash").click(function(){
			_ha("send","action","popvideo_content", {
			    "article_id":"01",
			    "article_name":"我的留学生活",
			    "tag_age_name": tagAgeName,
			    "tag_destination_name": tagDestinationName,
			    "tag_stage_name": tagStageName
			});

			setTimeout(function(){
				window.open("http://s.weibo.com/weibo?q=%23Visa%E7%95%99%E5%AD%A6%E7%94%9F%E7%9B%B4%E6%8B%8D%23")
			},100)
			
		})
		
		$(document).on("click", ".item.interest.btn-interest", function (e) {
			e.preventDefault();
			var that = $(this);
			var btnName = that.find("p").text();
			var link = that.attr("href");
	    	//newTrack(btnName);
	    	window.open(link + "?bank=" + bankName + "&stage_type=" + stageType + "&country_type=" + countryType + "&tag_age_name=" + tagAgeName + "&tag_destination_name=" + tagDestinationName + "&tag_stage_name=" + tagStageName + "&isBank=" + isBank)
	    });
	});
	</script>
	<script type="text/javascript">
		var card_name;
		var swiper1 = new Swiper('.bank_icbc', {
		    observer: true,
		    observeParents: true,
		    loop: true,
		    pagination : '.bank_icbc .swiper-pagination',
		    onSlideChangeStart: function(swiper){

		    },
		    onSlideChangeEnd: function(swiper){

		    },
		});

		// var swiper2 = new Swiper('.bank_abc', {
		//     observer: true,
		//     observeParents: true
		// });

		// var swiper3 = new Swiper('.bank_boc', {
		//     observer: true,
		//     observeParents: true,
		//     loop: true,
		//     pagination : '.bank_boc .swiper-pagination'
		// });

		// var swiper4 = new Swiper('.bank_cmb', {
		//     observer: true,
		//     observeParents: true,
		//     loop: true,
		//     pagination : '.bank_cmb .swiper-pagination'
		// });

		// var swiper5 = new Swiper('.bank_citic', {
		//     observer: true,
		//     observeParents: true
		// });

		// var swiper6 = new Swiper('.bank_cms', {
		//     observer: true,
		//     observeParents: true,
		//     pagination : '.bank_cms .swiper-pagination'
		// });

		// var swiper7 = new Swiper('.bank_ceb', {
		//     observer: true,
		//     observeParents: true
		// });

		// var swiper8 = new Swiper('.bank_ccb', {
		//     observer: true,
		//     observeParents: true
		// });

		var bankIndex;

		$(function(){
			var w = $(window).width();
			if(w > 1000){
				$(".bank_intro_pop .main").css({
					"width": "500px"
				})
				$(".slide_arrow").css({
					"width": "30px"
				})
			}

			$(".swipe_hint").click(function(){
				$(".swipe_hint").fadeOut(300);
			})

			newTrack();

			$(".bank_tb").click(function(){
				var name = $(this).data("bank");
				var bank_name = $(this).data("trackvalue").button_name;
				var bank_id = $(this).data("trackvalue").bank_id;
				bankIndex = $(this).data("index")
				console.log(bankName)
				$(".bank_intro_pop .banks").hide();
				//$(".bank_" + name).show();
				$(".bank_icbc").show();
				
				// if(bankIndex == "1" || bankIndex == "2" || bankIndex == "5" || bankIndex == "7" || bankIndex == "8"){
				// 	$(".slide_arrow").hide();
				// }else{
				// 	$(".slide_arrow").show();
				// }
				if(bankIndex == 1){
					swiper1.slideTo(1, 10, true);
				}else if(bankIndex == 2){
					swiper1.slideTo(3, 10, true);
				}else if(bankIndex == 3){
					swiper1.slideTo(4, 10, true);
				}else if(bankIndex == 4){
					swiper1.slideTo(8, 10, true);
				}else if(bankIndex == 5){
					swiper1.slideTo(9, 10, true);
				}else if(bankIndex == 6){
					swiper1.slideTo(12, 10, true);
				}else if(bankIndex == 7){
					swiper1.slideTo(15, 10, true);
				}else if(bankIndex == 8){
					swiper1.slideTo(16, 10, true);
				}else if(bankIndex == 9){
					swiper1.slideTo(17, 10, true);
				}else if(bankIndex == 10){
					swiper1.slideTo(18, 10, true);
				}

				$(".bank_intro_pop").fadeIn(300);

				_ha("send","action","homepageclick_bankcard", {
				    "bank_name":bank_name,
				    "bank_id":bank_id,
				    "stage_type":stageType,
				    "country_type":countryType,
				    "tag_age_name":tagAgeName,
				    "tag_destination_name":tagDestinationName,
				    "tag_stage_name":tagStageName
				});

				console.log(bank_name + ";" + bank_id + ";" + stageType + ";" + countryType + ";" + tagAgeName + ";" + tagDestinationName + ";" + tagStageName)
			})

			$(".close_bg, .pop_close_btn").click(function(){
				$(".bank_intro_pop").fadeOut(300);
			})

			$("#arrow_next").click(function(){
				eval("swiper"+bankIndex).slideNext();
			})

			$("#arrow_prev").click(function(){
				eval("swiper"+bankIndex).slidePrev();
			})

			$(".apply_btn").click(function(){
				var id = $(this).data("id");
				var link = $(this).data("link");
				card_name = $(this).data("name");
				if(link != ""){
					window.open(link);
				}
				_ha("send","action","card_apply_pop", {
	                "card_id":id,
	                "card_name":card_name,
	                "button_name":"立即申请",
	                "stage_type":stageType,
	                "country_type":countryType,
	                "ref_button":"主页-银行",
	                "tag_age_name":tagAgeName,
	                "tag_destination_name":tagDestinationName,
	                "tag_stage_name":tagStageName
	            });
	            console.log(id + ";" + card_name + ";" + stageType + ";" + countryType + ";" + tagAgeName + ";" + tagDestinationName + ";" + tagStageName)
			})
		})
	</script>

<script>
(function(i,d,t,o,u,h,s,f){i[t]=i[t]||[],i[t].push(h);i[h]=i[h]||function(){
return (i[h].q=i[h].q||[]).push(arguments)};s=d.createElement(o);s.src=u;
s.async=1;f=d.getElementsByTagName(o)[0];f.parentNode.insertBefore(s,f);
})(window,document,"HyperAnalyticsObject","script","//t1.publicis-groupe.cn/hwt.js?v=1.10","_ha");
_ha("create","8470",{
    auto_track: true,
    heatmap_url: "//analytics.publicis-groupe.cn/static/hwt-heatmap.js",
    // If your website is using HTTP, while tracker is using HTTPs, please uncomment next line.
    // force_ssl: true,
    // If your website is a single page web application(SPA), please uncomment next line (supported after js v2.15.0).
    // url_change_track: true,
    env: { inst: "saas" },
    "api_url":"//t1.publicis-groupe.cn"
});
// If able to get visitor's openid, please uncomment next line，and replace [openid] with visitor's openid
// _ha("identify",{ wx_id: ""});
<?php
if(!empty($openid)) {
    echo('_ha("identify",{ wx_id: "'.$openid.'" });');
}
?>
_ha("send","pageview");
</script>
<script type="text/javascript">
	function videoPop(){
		$(".video_pop").fadeIn(300);
		$("#video1")[0].play();
	}

	function videoEnded(){
		_ha("send","action","popvideo_finish", {
		    "video_id":"01",
		    "video_name":"我的留学生活",
		    "tag_age_name":tagAgeName,
		    "tag_destination_name":tagDestinationName,
		    "tag_stage_name":tagStageName
		});
	}


	$(".video_pop .close_btn").click(function(){
		$(".video_pop").fadeOut(300);
		$("#video1")[0].pause();
	})

	$(".more_btn").click(function(){
		var status = $("#status-selection").find("li.active a").data("answer");
		var country = $("#country-selection").find("li.active a").text();

		// _ha("send","action","homepageclick_applycard", {
		//     "button_name":"探索更多Visa留学信用卡",
		//     "button_id":"applycard_all",
		//     "stage_type":status,
		//     "country_type":country
		// });

		_ha("send","action","homepageclick_applycard", {
		    "button_name":"探索更多Visa留学信用卡",
		    "button_id":"applycard_all",
		    "stage_type":stageType,
		    "country_type":countryType,
		    "tag_age_name":tagAgeName,
		    "tag_destination_name":tagDestinationName,
		    "tag_stage_name":tagStageName
		});

		setTimeout(function(){
			location.href = "cards.php?ref=home";
		},300)
	})

	$(".side_btn").click(function(){
		// var hash = getCookie(C_SURVEY_INTEREST);
		// if (hash) {
		// 	hash = hash.split("-");
		// 	tagAgeName = hashvalues[0][hash[0]];
		// 	tagDestinationName = hashvalues[1][hash[1]];
		// 	tagStageName = hashvalues[2][hash[2]];
		// }else{
		// 	// hash = location.href.split("#")[1].split("-");
		// 	// tagAgeName = hashvalues[0][hash[0]];
		// 	// tagDestinationName = hashvalues[1][hash[1]];
		// 	// tagStageName = hashvalues[2][hash[2]];
		// 	tagAgeName = "";
		// 	tagDestinationName = "";
		// 	tagStageName = "";
		// }

		// _ha("send","action","guangdabank_applycard", {
		//     "botton_id":"1",
		//     "botton_name":"一键解锁留学信用卡",
		//     "stage_type":stageType,
		//     "country_type":countryType,
		//     "tag_age_name":tagAgeName,
		//     "tag_destination_name":tagDestinationName,
		//     "tag_stage_name":tagStageName
		// });
		// setTimeout(function(){
		// 	location.href = "cards.php?ref=side";
		// },300)
		_ha("send","action","Fubiao_button", {
		    "button_id":"75",
		    "button_name":"Fubiao-button"
		});
		setTimeout(function(){
			location.href = "https://digitas.yijiuplus.com/studyabroad/fy23activity/index.html ";
		},300)
	})
</script>
<script src="https://hcm.publicis-groupe.cn/dsar.js"></script>

</body>
</html>
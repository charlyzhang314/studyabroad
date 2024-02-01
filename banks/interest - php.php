<?php
function is_weixin_visit(){
    if (strpos($_SERVER['HTTP_USER_AGENT'], 'MicroMessenger') !== false) {
        return true;
    } else {
        return false;
    }
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
    $callback = "https://digitas.yijiuplus.com/studyabroad/banks/interest.php";
    $str = $_SERVER['QUERY_STRING'];
    if(!empty($str)){
        $callback .= "?".$str;
    }
    $oauthurl = "https://visa-open.yijiuplus.com/wx/oauth2/authorize?brandId=i7PH9zVzE1VhNfxu&access_token=false&scope=snsapi_base&url=".urlencode($callback);

    header("Location: ".$oauthurl);
}

?>
<!DOCTYPE html>
<html lang="en" class="bankspage interest">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Visa留学家</title>
    <link rel="stylesheet" href="../css/swiper.min.css">
	<link rel="stylesheet" href="../css/libs/slick.css">
	<link rel="stylesheet" href="../css/libs/slick-theme.css">
    <link rel="stylesheet" href="app.css?28">
    <style type="text/css">
    	.more_btn{display: block;margin:0 auto;width: 56%;max-width: 200px;}
    	body.interest .scrolling-wrapper-flexbox{}
    	html.bankspage body.interest .section-banks .bank{width: 25vw;padding-left: 0}
    	html.bankspage body.interest .section-banks .bank:last-child{padding-right: 0}
    	.bank_intro_pop{position: fixed;width: 100%;height: 100%;background: rgba(0,0,0,0.7);left: 0;top: 0;z-index: 9999;display: none}
    	.bank_intro_pop .main{width: 80%;position: absolute;left: 50%;top: 50%;transform: translate(-50%,-50%);max-width: 700px;}
    	.bank_intro_pop .close_bg{position: absolute;left: 0;top: 0;width: 100%;height: 100%;}
    	.bank_intro_pop .main .pop_banks{overflow: hidden}
    	.bank_intro_pop .main .grid .bg{display: block;width: 100%}
    	.bank_intro_pop .main .grid .apply_btn{position: absolute;left: 25.5%;bottom: 4.36%;width: 49.5%;height: 6.3%;background: url("../img/credit_card/btn3.png");background-size: 100% 100%}
        .link_btn{position: absolute;left: 28.5%;bottom: 4.36%;width: 42.9%;height: 5.2%;background: url("../img/credit_card/btn3.png");background-size: 100% 100%}
        .pop_close_btn{position: absolute;right: 0;top: 0;padding: 3vw;width: 4.2vw;z-index: 2;box-sizing: content-box;}
        #arrow_prev{position: fixed;width: 4.4vw;left: 0.8vw;top: 50%;transform: translate(0,-50%);padding: 2vw;box-sizing: content-box;}
    	#arrow_next{position: fixed;width: 4.4vw;right: 0.8vw;top: 50%;transform: translate(0,-50%);padding: 2vw;box-sizing: content-box;}
    	.swiper-pagination{bottom: -20px !important}
    	.swiper-pagination-bullet-active{background: white}
    	.swiper-pagination-bullet{background: white}

    	.swipe_hint{position: fixed;left: 0;top: 0;width: 100%;height: 100%;background: rgba(0,0,0,0.8);z-index: 3}
    	.swipe_hint .main{position: absolute;left: 50%;top: 50%;transform: translate(-50%,-50%);width: 28.5%;max-width: 400px;}
    	.swipe_hint .main .txt{display: block;width: 100%}
    	.swipe_hint .main .cursor{position: absolute;left: 0;top: 0;width: 100%;animation: cursorMove 0.8s linear infinite}

    	.card_detail{position: absolute;left: 6vw;top: 69.5vw;width: 68.7vw;padding-right: 3vw;height: 53.56vw;overflow: auto;}
		.card_detail .card_pop_detail{display: block;width: 100%;}

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

    	@keyframes cursorMove{
		0%{transform:translate(5px,0px);}
		50%{transform:translate(-5px,0px);}
		100%{transform:translate(5px,0px);}
		}

		@keyframes danmuMove{
		0%{transform:translate(0,0px);}
		100%{transform:translate(calc(-250vw),0px);}
		}
		}
    </style>
    <script type="text/javascript" src="../js/libs/jquery-3.5.1.min.js"></script>
    <script type="text/javascript">
    	function getQueryVariable(variable){
	       var query = window.location.search.substring(1);
	       var vars = query.split("&");
	       for (var i=0;i<vars.length;i++) {
	               var pair = vars[i].split("=");
	               if(pair[0] == variable){return pair[1];}
	       }
	       return(false);
	    }

	    function goCards(){
	    	location.href = "cards.php"
	    }

    	var hcmId;
    	var hcmBankName = getQueryVariable("bank");
    	var hcmBankId = getQueryVariable("bankid");

    	

    	if(hcmBankName == "boc" || hcmBankId == "boc"){				// 中行
    		hcmId = 53;
    		clauseId = 22;
    	}else if(hcmBankName == "ph" || hcmBankId == "spdb"){		// 浦发
    		hcmId = 54;
    		clauseId = 23;
    	}else if(hcmBankName == "gh" || hcmBankId == "icbc"){		// 工行
    		hcmId = 55;
    		clauseId = 24;
    	}else if(hcmBankName == "jh_debit" || hcmBankId == "ccbji"){		// 建行credit
    		hcmId = 56;
    		clauseId = 25;
    	}else if(hcmBankName == "nh" || hcmBankId == "abc"){		// 农行
    		hcmId = 57;
    		clauseId = 26;
    	}else if(hcmBankName == "pa" || hcmBankId == "pab"){		// 平安
    		hcmId = 58;
    		clauseId = 27;
    	}else if(hcmBankName == "boc_debit" || hcmBankId == "boc_debit"){		// 中行debit
    		hcmId = 59;
    		clauseId = 28;
    	}else if(hcmBankName == "gd" || hcmBankId == "ceb"){		// 光大
    		hcmId = 60;
    		clauseId = 29;
    	}else if(hcmBankName == "zx" || hcmBankId == "citic"){		// 中信
    		hcmId = 61;
    		clauseId = 30;
    	}else if(hcmBankName == "ms" || hcmBankId == "cmbc"){		// 民生
    		hcmId = 52;
    		clauseId = 21;
    	}else if(hcmBankName == "sh" || hcmBankId == "bos"){		// 上海银行
    		hcmId = 62;
    		clauseId = 31;
    	}else if(hcmBankName == "zd" || hcmBankId == "scb"){		// 渣打银行
    		hcmId = 63;
    		clauseId = 32;
    	}else if(hcmBankName == "jx" || hcmBankId == "bocom"){		// 交行
    		hcmId = 64;
    		clauseId = 33;
    	}else if(hcmBankName == "zh" || hcmBankId == "cmb"){		// 招行
    		hcmId = 65;
    		clauseId = 34;
    	}else if(hcmBankName == "jh" || hcmBankId == "ccb"){		// 建行
    		hcmId = 71;
    		clauseId = 35;
    	}else if(hcmBankName == "xdf" || hcmBankId == "xdf"){		// 新东方
    		hcmId = 66;
    		clauseId = 36;
    	}else if(hcmBankName == "nh_debit" || hcmBankId == "abc_debit"){		// 农行借记卡
    		hcmId = 67;
    		clauseId = 40;
    	}else if(hcmBankName == "xy" || hcmBankId == "cib"){		// 兴业
    		hcmId = 68;
    		clauseId = 37;
    	}else if(hcmBankName == "gf" || hcmBankId == "cgb"){		// 广发
    		hcmId = 69;
    		clauseId = 38;
    	}else if(hcmBankName == "bob" || hcmBankId == "bob"){		// 北京银行
    		hcmId = 70;
    		clauseId = 39;
    	}else{		// 其他
    		hcmId = 48;
    		clauseId = 18;
    	}
    	
    </script>
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

_hcm('init', hcmId, {
api_url: 'https://hcm.publicis-groupe.cn',
noCustomize: true, 
defaultBlock: true,
allowList:["type=pv"],
headerImg: 'https://digitas.yijiuplus.com/studyabroad/img/header.png'
});
</script>
</head>
<body class="bankspage interest">
	<img class="sharing_img" src="../img/visa_sharing_img.jpg" />

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

			<img src="../img/home-banner-title3.png" class="section_slogan" id="section_banks_slogan" style="padding-top:6vw;padding-bottom: 0;" />
			<section class="section-banks" id="section-banks" style="margin-bottom: 0;">
				<!-- <div class="title">
					<h4>
						<a class="item bank px-0 mx-0" href="javascript:;" onclick="onClickInterestBank(this)" data-bank="all" data-trackaction="homepageclick_applycard" data-trackvalue='{"button_name":"一键解锁 留学信用卡", "button_id":"applycard_all"}'>
							一键解锁<br>留学信用卡
						</a>
					</h4>
				</div> -->

				<div class="banks" style="width:100% !important;padding-bottom: 25px">
					<div class="scrolling-wrapper-flexbox">
						<!-- dynamic items -->
					</div>
					<!-- <a class="item bank dummy" href="javascript:;" onclick="onClickInterestBank(this)" data-trackaction="homepageclick_bankcard">
						<span class="thumbnail"><img src="../img/icons/icon_visa_card.svg" width="32" alt="" /></span>
						<p>&nbsp;</p>
					</a> -->
					<div class="item bank dummy pop_btn" href="javascript:;"  data-trackaction="homepageclick_bankcard">
						<span class="thumbnail"><img src="../img/icons/icon_visa_card.svg" width="32" alt="" /></span>
						<p>&nbsp;</p>
					</div>
					<a class="item" href="javascript:;" data-bank="all"><img src="../img/search-more-btn.png" class="more_btn" /></a>
				</div>
				<!-- <div class="hint"></div> -->
			</section>

			<section class="section-interests" id="section-interests">
				<img src="../img/home-banner-title2.png" class="section_slogan" style="padding-top: 6vw" />
				<div class="slide-down interests">
					<!-- dynamic interests -->
				</div>

				<a class="item interest dummy btn-interest" href="javascript:;">
					<img height="32" alt="" />
					<p>&nbsp;</p>
				</a>
				<!-- <a class="item interest dummy btn-showAll" href="javascript:;" onclick="showAllInterests(this);" data-trackaction="homepageclick_maininfoall" data-trackvalue='{"button_name":"查看全部"}'>
					<img src="../img/icons/icon_show_all.png" height="32" alt="" />
					<p>查看全部</p>
				</a> -->
			</section>

			<img src="../img/home-banner-title1.png" class="section_slogan" style="padding-top:6vw" />
			<section class="section-benefits" id="section-benefits">
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
				<div class="text-center btn-more-container dummy">
					<!-- <a class="btn btn-primary btn-more" href="javascript:;" onclick="showAllBenefits(this);">查看更多 <i class="fas fa-chevron-right"></i></a> -->
					<a style="border-radius: 1rem;" href="javascript:;" onclick="showAllBenefits(this);"><img src="../img/check-more-btn.png" style="width: 32%;margin:10px auto" /></a>
				</div>
			</section>

			<!-- <a id="btn-sticky" class="btn btn-sticky hide" href="javascript:;" onclick="onClickInterestBank(this)" data-bank="all" data-trackaction="homepageclick_applycard" data-trackvalue='{"button_name":"一键解锁 留学信用卡", "button_id":"applycard_all"}'>
				一键解锁<br>留学信用卡
			</a> -->
			<a id="btn-sticky" class="btn btn-sticky hide side_btn" href="javascript:;">
				一键申请<br>留学信用卡
			</a>
		</div>
	</div>

	<p id="delete_btn" style="color: #1a1c73;font-size: 12px;text-align: center;position: relative;width: 100%;line-height: 30px;margin-bottom: 0;">申请删除个人数据</p>

	<footer style="margin-top: 10px;">
		<div class="copyright">&copy; Copyright 1996-2022. All rights reserved.</div>
		<img class="logo" src="../img/logo_visa.svg" width="60" alt="Visa Logo" />
	</footer>

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

	<!-- <div class="bank_intro_pop">
        <div class="close_bg"></div>
        <div class="main">
            <img src="" class="bg" id="pop_pic" />  
            <a class="link_btn" target="_blank"></a>
            <img src="../img/credit_card/close-btn.png" class="pop_close_btn" />
        </div>
    </div> -->

    <!-- 银行弹窗 -->
	<div class="bank_intro_pop">
		<div class="close_bg"></div>
		<div class="main">
			<div class="pop_banks">
				<div class="swiper-wrapper">
		            
		        </div>
		        <div class="swiper-pagination"></div>
		        <img src="../img/credit_card/close-btn.png" class="pop_close_btn" />
		        <div class="swipe_hint">
	            	<div class="main">
	            		<img src="../img/credit_card/swipe-hint1.png" class="txt" />
	            		<img src="../img/credit_card/swipe-hint2.png" class="cursor" />
	            	</div>
	            </div>
			</div>
		</div>
		<img src="../img/credit_card/arrow-left.png" id="arrow_prev" class="slide_arrow" />
		<img src="../img/credit_card/arrow-right.png" id="arrow_next" class="slide_arrow" />
        
	</div>

	<div class="video_pop">
		<div class="main">
			<div class="video_box">
                <video id="video1" onended="videoEnded()" x5-playsinline="" playsinline="true" src="../img/top_banner/video.mp4" controls="controls"></video>
            </div>
            <img src="../img/top_banner/weibo-hash.png?1" class="hash" id="weibo_hash" />
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
		<img src="../img/top_banner/close-btn.png" class="close_btn" />
	</div>

    <!-- <?php include_once('../wechat/init.php')?> -->
	
	<script type="text/javascript" src="../js/libs/bootstrap.js"></script>
	<script type="text/javascript" src="../js/swiper.min.js"></script>
	<script type="text/javascript" src="../js/libs/slick.min.js"></script>
	<script type="text/javascript" src="../js/libs/solid.min.js"></script>
	<script type="text/javascript" src="../js/libs/fontawesome.min.js"></script>
	<?php
	if((isset($_GET['bank']) && ($_GET['bank'] == "boc" || $_GET['bank'] == "boc_debit" ) ) ||
		(isset($_GET['bankid']) && ($_GET['bankid'] == "boc" || $_GET['bankid'] == "boc_debit" ) )
	 ){
	?>
	<script type="text/javascript" src="../js/interest-bank-boc.js?303"></script>
	<?php
	}else if((isset($_GET['bank']) && ($_GET['bank'] == "zh") ) ||
		(isset($_GET['bankid']) && ($_GET['bankid'] == "cmb") )
	){
	?>
	<script type="text/javascript" src="../js/interest-bank-zh.js?303"></script>
	<?php
	}else if((isset($_GET['bank']) && ($_GET['bank'] == "jx") ) ||
		(isset($_GET['bankid']) && ($_GET['bankid'] == "bocom") )
	){
	?>
	<script type="text/javascript" src="../js/interest-bank-jh.js?303"></script>
	<?php
	}else if((isset($_GET['bank']) && ($_GET['bank'] == "bob") ) ||
		(isset($_GET['bankid']) && ($_GET['bankid'] == "bob") )
	){
	?>
	<script type="text/javascript" src="../js/interest-bank-bob.js?303"></script>
	<?php
	}else{
	?>
	<script type="text/javascript" src="../js/interest-bank.js?303"></script>
	<?php
	}
	?>
	<script type="text/javascript" src="../js/banks.js?303"></script>
	<script type="text/javascript" src="../js/cards2.js?303"></script>
	<script type="text/javascript">
	// var link = location.href;
 //    if(link.indexOf("bankid=boc&utm_source=WeChat&utm_medium=liuxuejinnangbaibiao_20210209&utm_campaign=FY21_Glocal_student")> -1){
 //        $("html").html("");
 //    }

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

	var isBank = true;
	

    var bankName = getQueryVariable("bank") == false ? '' : getQueryVariable("bank");
    var bankid = getUrlParameter("bankid");
    if(bankName == "" && bankid){
    	if(bankIdvalues.includes(bankid)){
			var index = bankIdvalues.indexOf(bankid);
			bankName = bankvalues[index];
		}
    }

	var stageType;
	var countryType;
	var tagAgeName;
	var tagDestinationName
	var tagStageName;
	var card_name = "";
	var popSwiper = new Swiper('.pop_banks',{
		observer: true,
	    observeParents: true,
	    loop: true,
	    pagination : '.swiper-pagination'
	});

	function initSwiper(){
		var l = $(".pop_btn").length - 1;
		if(l == 1){
			popSwiper.params.loop = false;
			$(".swiper-pagination, .slide_arrow").hide();
		}else{
			popSwiper.params.loop = true;
			$(".swiper-pagination, .slide_arrow").show();
		}

	}
	
	function goPayment(){
		$(".item.interest.btn-interest").eq(1).click()
	}

	$(function(){
		$("#delete_btn").click(function(){
            window.HypersDSAR.show({
			    clause_id: clauseId,
			    api_url: "https://hcm.publicis-groupe.cn"
			});
        })
		initInterest();
		initSwiper();

		if(bankName == "boc_debit"){
			$(".more_btn").attr("src","../img/visa-btn2.png")
		}

		if(bankName == "bob"){
			$("#modal-survey").remove();
			$("#btn-sticky").html("一键申请<br/>留学信用卡")
		}


		if(bankName == "jx" || bankid == "bocom"){
			$(".text-center.btn-more-container").hide();
		}
		

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

		// tagAgeName = hashvalues[0][getCookie(C_SURVEY_AGE)];
		// console.log(tagAgeName)

		// tagStageName = hashvalues[2][getCookie(C_SURVEY_STAGE)];
		// console.log(tagStageName)

		var interest = getCookie(C_LAST_INTEREST);
		if (interest) {
			interest = interest.split("-");
			countryType = hashvalues[1][interest[1]];
			stageType = hashvalues[2][interest[2]];
		}

		$("#arrow_next").click(function(){
			popSwiper.slideNext();
		})

		$("#arrow_prev").click(function(){
			popSwiper.slidePrev();
		})

		$(".more_btn").click(function(){
			var status = hashvalues[2][$("#status-selection").find("li.active a").data("answer")];
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
			    "stage_type":status,
			    "country_type":country,
			    "tag_age_name":tagAgeName,
			    "tag_destination_name":"",
			    "tag_stage_name":tagStageName
			});
			
			setTimeout(function(){
				location.href = "cards.php?bank=" + bankName + "&ref=home";
			},500)
			
		})

		$(".side_btn").click(function(){
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
		
			_ha("send","action","guangdabank_applycard", {
			    "botton_id":"1",
			    "botton_name":"一键解锁留学信用卡",
			    "stage_type":stageType,
			    "country_type":countryType,
			    "tag_age_name":tagAgeName,
			    "tag_destination_name":tagDestinationName,
			    "tag_stage_name":tagStageName
			});
			setTimeout(function(){
				location.href = "cards.php?bank=" + bankName + "&ref=side";
			},300)
		})

		$(".pop_btn").each(function(){
            var that = $(this);
            var index = that.index();

        	var pic = that.data("pic");
            var link = that.data("link");
            var id = that.data("id");
            var name = that.find("img").attr("alt");
            var scroll = that.data("scroll"); 
            if(pic){
            	if(scroll == "1"){
            		popSwiper.appendSlide('<div class="swiper-slide"><div class="grid">\
            						<img src="../img/credit_card/' + pic + '" class="bg" />\
            						<div class="card_detail">\
            							<img src="../img/credit_card/' + pic.split(".jpg")[0] + '-detail.png" class="card_pop_detail">\
            						</div>\
            						<a class="apply_btn" data-name="' + name + '" data-id="' + id + '" target="_blank" href="' + link + '"></a>\
            					</div></div>');
            	}else{
            		popSwiper.appendSlide('<div class="swiper-slide"><div class="grid">\
            						<img src="../img/credit_card/' + pic + '" class="bg" />\
            						<a class="apply_btn" data-name="' + name + '" data-id="' + id + '" target="_blank" href="' + link + '"></a>\
            					</div></div>');
            	}
            	
            }
		})

		if($(".pop_btn").length > 2){
			$(".swipe_hint").show();
		}else{
			$(".swipe_hint").hide();
		}

		$(".swipe_hint").click(function(){
			$(".swipe_hint").fadeOut(300);
		})

		$(".apply_btn").each(function(){
			if($(this).attr("href") == "undefined"){
				$(this).hide();
			}

			
		})

		$(".pop_btn").click(function(){
            var that = $(this);
            var index = parseInt(that.index()) + 1;
            var name = that.find("img").attr("alt").replace("<br/>", "");
            popSwiper.slideTo(index, 10, true);
            $(".bank_intro_pop").fadeIn(300);

            _ha("send","action","homepageclick_bankcard", {
			    "bank_name":name,
			    "bank_id":index,
			    "stage_type":stageType,
			    "country_type":countryType,
			    "tag_age_name":tagAgeName,
			    "tag_destination_name":"",
			    "tag_stage_name":tagStageName
			});

			console.log(name + ";" + index + ";" + stageType + ";" + countryType + ";" + tagAgeName + ";" + tagDestinationName + ";" + tagStageName)
        })

        $(".close_bg, .pop_close_btn").click(function(){
            $(".bank_intro_pop").fadeOut(300);
        })

   //      $(".link_btn").click(function(){
   //      	_ha("send","action","card_apply_pop", {
			//     "card_id":"",
			//     "card_name":card_name,
			//     "button_name":"立即申请",
			//     "stage_type":"[Value]",
			//     "country_type":"[Value]",
			//     "ref_button":"",
			//     "tag_age_name":"[Value]",
			//     "tag_destination_name":"[Value]",
			//     "tag_stage_name":"[Value]"
			// });
			// console.log(card_name + ";" + stageType + ";" + countryType + ";" + tagAgeName + ";" + tagDestinationName + ";" + tagStageName)
   //      })

        $(".apply_btn").click(function(){
        	var name = $(this).attr("data-name").replace("<br/>", "");
        	var id = $(this).attr("data-id");

        	_ha("send","action","card_apply_pop", {
			    "card_id":id,
			    "card_name":name,
			    "button_name":"立即申请",
			    "stage_type":stageType,
			    "country_type":countryType,
			    "ref_button":"首页-银行卡",
			    "tag_age_name":tagAgeName,
			    "tag_destination_name":tagDestinationName,
			    "tag_stage_name":tagStageName
			});
            console.log(name + ";" + id + ";" + stageType + ";" + countryType + ";" + tagAgeName + ";" + tagDestinationName + ";" + tagStageName)
        })

        $(document).on("click", ".item.interest.btn-interest", function (e) {
			e.preventDefault();
			var that = $(this);
			var btnName = that.find("p").text();
			var link = that.attr("href");
	    	//newTrack(btnName);
	    	window.open(link + "?bank=" + bankName + "&stage_type=" + stageType + "&country_type=" + countryType + "&tag_age_name=" + tagAgeName + "&tag_stage_name=" + tagStageName + "&isBank=" + isBank)
	    });
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
// _ha("identify",{ wx_id: ""});
<?php
if(!empty($openid)) {
    echo('_ha("identify",{ wx_id: "'.$openid.'" });');
}
?>
_ha("send","pageview");
</script>
<script src="https://hcm.publicis-groupe.cn/dsar.js"></script>
</body>
</html>
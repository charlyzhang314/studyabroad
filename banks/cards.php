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
    $callback = "https://digitas.yijiuplus.com/studyabroad/banks/cards.php";
    $str = $_SERVER['QUERY_STRING'];
    if(!empty($str)){
        $callback .= "?".$str;
    }
    $oauthurl = "https://visa-open.yijiuplus.com/wx/oauth2/authorize?brandId=i7PH9zVzE1VhNfxu&access_token=false&scope=snsapi_base&url=".urlencode($callback);

    header("Location: ".$oauthurl);
}

?>
<!DOCTYPE html>
<html lang="en" class="bankspage cards">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Visa留学家 我写我篇章</title>
    <link rel="stylesheet" href="../css/swiper5.min.css">
    <link rel="stylesheet" href="../css/app.css?v=2020110602">
    <style type="text/css">
        .card{flex-direction: row}
        .grid_wrapper{overflow: auto;position: relative;padding: 4.35vw 0;box-shadow: none !important;box-sizing: content-box;border-bottom: 0.4vw solid #e1e1e1 !important;border-radius: 0 !important}
        .grid_wrapper .grid_left{float: left;width: 47%;}
        .grid_wrapper .grid_left img{display: block;max-width: 100%;margin:0 auto;}
        .grid_wrapper .grid_right{float: left;width: 46%;margin-left: 7%;position: relative;}
        .grid_wrapper .grid_right .inner{position: absolute;left: 0;top: 50%;transform: translate(0,-50%);}
        .grid_wrapper .grid_right h2{font-size: 3.7vw;margin-bottom: 7vw;color: black;line-height: 5.5vw;}
        .grid_wrapper .grid_right p{font-size: 2.67vw;color: #5c5c5c;line-height: 3.56vw;margin-bottom: 4vw;display: none}
        .grid_wrapper .grid_right .button-group{position: relative;overflow: auto}
        .grid_wrapper .grid_right .button-group .btn1{float: left;width: 17.6vw;}
        .grid_wrapper .grid_right .button-group .btn2{float: left;width: 17.6vw;margin-left: 5.5vw}

        .bank_intro_pop{position: fixed;width: 100%;height: 100%;background: rgba(0,0,0,0.7);left: 0;top: 0;z-index: 9999;display: none}
        .bank_intro_pop .main{width: 80%;position: absolute;left: 50%;top: 50%;transform: translate(-50%,-50%);max-width: 700px;}
        .bank_intro_pop .close_bg{position: absolute;left: 0;top: 0;width: 100%;height: 100%;}

        .bank_intro_pop .main .pop_banks{overflow: hidden}
        .bank_intro_pop .main .grid .bg{display: block;width: 100%}
        .bank_intro_pop .main .grid .apply_btn{position: absolute;left: 22.5%;bottom: 4.36%;width: 49.5%;height: 6.3%;background: url("../img/credit_card/btn3.png");background-size: 100% 100%}
        .link_btn{position: absolute;left: 28.5%;bottom: 4.36%;width: 49.5%;height: 6.3%;background: url("../img/credit_card/btn3.png");background-size: 100% 100%}
        .pop_close_btn{position: absolute;right: 0;top: 0;padding: 3vw;width: 4.2vw;z-index: 2;box-sizing: content-box;}
        #arrow_prev{position: fixed;width: 4.4vw;left: 0.8vw;top: 50%;transform: translate(0,-50%);padding: 2vw;box-sizing: content-box;}
        #arrow_next{position: fixed;width: 4.4vw;right: 0.8vw;top: 50%;transform: translate(0,-50%);padding: 2vw;box-sizing: content-box;}
        .swiper-pagination{bottom: -20px !important}
        .swiper-pagination-bullet-active{background: white}
        .swiper-pagination-bullet{background: white}

        .swipe_hint{position: fixed;left: 0;top: 0;width: 100%;height: 100%;background: rgba(0,0,0,0.8);z-index: 3;display: none;}
        .swipe_hint .main{position: absolute;left: 50%;top: 50%;transform: translate(-50%,-50%);width: 28.5%;max-width: 400px;}
        .swipe_hint .main .txt{display: block;width: 100%}
        .swipe_hint .main .cursor{position: absolute;left: 0;top: 0;width: 100%;animation: cursorMove 0.8s linear infinite}

        .card_detail{position: absolute;left: 6vw;top: 69.5vw;width: 68.7vw;padding-right: 3vw;height: 53.56vw;overflow: auto;}
        .card_detail .card_pop_detail{display: block;width: 100%;}
    </style>
</head>
<body class="bankspage cards">
    <img class="sharing_img" src="../img/visa_sharing_img.jpg" />

    <header class="fixed-top">
        <div class="intro">
            <div class="top-logos">
                <img class="logo-bank" alt="Bank Logo" />
                <img class="logo-visa" src="../img/onboard_logo@2x.png" height="20" alt="Visa Logo" />
            </div>
            <h1 class="text-center">Visa留学家 我写我篇章</h1>
        </div>
    </header>

    <div class="container-fluid px-0">
        <section class="section-cards" id="section-cards">
            <div class="card-listing">
                <!-- dynamic cards -->
            </div>
            <!-- <p class="text-center card-not-found" id="card-not-found">不好意思，找不到对应的 Visa 卡。</p> -->

            <div class="card item dummy grid_wrapper">
                <div class="grid_left">
                    <img class="img-fluid card_bg" width="290" alt="" />
                </div>
                <div class="grid_right">
                    <div class="inner">
                        <h2>&nbsp;</h2>
                        <p></p>
                        <div class="button-group">
                            <!-- <a class="btn btn-outline-primary btn-more disabled" href="javascript:;" data-toggle="modal">了解详情</a>
                            <a class="btn btn-primary btn-apply" target="_blank">立即办卡 <i class="fas fa-chevron-right"></i></a> -->
                            <img src="../img/credit_card/btn1.png" class="btn1 know_btn" />
                            <a href="" target="_blank" class="btn-apply"><img src="../img/credit_card/btn2.png" class="btn2 apply_btn" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal modal-card fade dummy" data-backdrop="static" id="modal-card">
                <div class="modal-dialog">
                    <div class="modal-content text-center">
                        <div class="modal-header">
                            <h5 class="modal-title">&nbsp;</h5>
                        </div>
                        <div class="modal-body">
                            <div class="content">&nbsp;</div>
                            <a class="btn btn-primary btn-apply" target="_blank">立即办卡 <i class="fas fa-chevron-right"></i></a>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-close" data-dismiss="modal"></button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </div>

    <footer>
		<div class="copyright">&copy; Copyright 1996-2022. <br/>All rights reserved.</div>
		<img class="logo" src="../img/logo_visa.svg" width="60" alt="Visa Logo" />
	</footer>

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

    <!-- <?php include_once('../wechat/init.php')?> -->
    <script type="text/javascript" src="//res.wx.qq.com/open/js/jweixin-1.6.0.js"></script>
    <script type="text/javascript" src="../js/libs/jquery-3.5.1.min.js"></script>
    <script type="text/javascript" src="../js/swiper5.min.js"></script>
    <script type="text/javascript" src="../js/libs/bootstrap.js"></script>
    <script type="text/javascript" src="../js/libs/solid.min.js"></script>
    <script type="text/javascript" src="../js/libs/fontawesome.min.js"></script>
    <script type="text/javascript" src="../js/banks.js?v=315"></script>
	<script type="text/javascript" src="../js/cards2.js?v=202"></script>
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

    var country = "all"; // temp card country;
    var isBank = true;
    var stageType;
    var countryType;
    var tagAgeName;
    var tagDestinationName
    var tagStageName;
    var card_name = "";

    var cards_stage_type;
    var cards_country_type;
    var cards_tag_age_name;
    var cards_tag_destination_name;
    var cards_tag_stage_name;
    var cardId = 0;

    var ref_temp = "";

    var slideIndex;

    var popSwiper = new Swiper('.pop_banks',{
        observer: true,
        observeParents: true,
        loop: true,
        pagination: {
            el: '.swiper-pagination'
        },
    });
    var popArray = [];

    var bankName = getUrlParameter("bank");
    var bankId = getUrlParameter("bankid");

    if (bankvalues.includes(bankName)) {
        console.log(bankName);
    }else if(bankIdvalues.includes(bankId)){
        var index = bankIdvalues.indexOf(bankId);
        bankName = bankvalues[index];
        console.log(bankName);
    }

    function initSwiper(picture){
        
        if(popArray == ''){
            popArray = bankdata[bankName].cards;

            for(var i=0;i<popArray.length;i++){
                if(popArray[i].scroll == "1"){
                    popSwiper.appendSlide('<div class="swiper-slide"><div class="grid">\
                                <img src="../img/credit_card/' + popArray[i].pop + '" class="bg" />\
                                <div class="card_detail">\
                                    <img src="../img/credit_card/' + popArray[i].pop.split(".jpg")[0] + '-detail.png" class="card_pop_detail">\
                                </div>\
                                <a class="apply_btn" data-name="' + popArray[i].detail + '" data-id="' + popArray[i].id + '" target="_blank" href="' + popArray[i].link + '"></a>\
                            </div></div>');
                }else{
                    popSwiper.appendSlide('<div class="swiper-slide"><div class="grid">\
                                <img src="../img/credit_card/' + popArray[i].pop + '" class="bg" />\
                                <a class="apply_btn" data-name="' + popArray[i].detail + '" data-id="' + popArray[i].id + '" target="_blank" href="' + popArray[i].link + '"></a>\
                            </div></div>');
                }
                
            }
            if(popArray.length == 1){
                popSwiper.params.loop = false;
                $(".swiper-pagination, .slide_arrow").hide();
            }else{
                popSwiper.params.loop = true;
                $(".swiper-pagination, .slide_arrow").show();
            }

            
            
        }

        for(var i=0;i<popArray.length;i++){
            if(popArray[i].pop == picture){
                slideIndex = i+1;
            }
        }
        popSwiper.updateSlides();
        popSwiper.pagination.update();
        popSwiper.slideTo(slideIndex, 10, true);

        setTimeout(function(){
            popSwiper.updateSlides();
            popSwiper.pagination.update();
            popSwiper.slideTo(slideIndex, 10, true);
        },500)
        
        $(".apply_btn").each(function(){
            if($(this).attr("href") == "undefined"){
                $(this).hide();
            }
        })
    }


	$(function(){
        var lc = location.href;
        if(lc.indexOf("bank=boc_debit") > -1){
            $(".intro h1.text-center").hide();
        }else if(lc.indexOf("bank=jh_debit") <= 0){
            $(".intro h1.text-center").html("Visa留学家 我写我篇章");
        }


		initCards();
        

        var hash = getCookie(C_SURVEY_INTEREST);
        if (hash) {
            hash = hash.split("-");
            tagAgeName = hashvalues[0][hash[0]];
            tagDestinationName = hashvalues[1][hash[1]];
            tagStageName = hashvalues[2][hash[2]];
        }

        var interest = getCookie(C_LAST_INTEREST);
        if (interest) {
            interest = interest.split("-");
            countryType = hashvalues[1][interest[1]];
            stageType = hashvalues[2][interest[2]];
        }

        tagAgeName = hashvalues[0][getCookie(C_SURVEY_AGE)];
        console.log(tagAgeName)

        tagStageName = hashvalues[2][getCookie(C_SURVEY_STAGE)];
        console.log(tagStageName)

        $(".know_btn").click(function(){
            
            var that = $(this);
            var pic = that.data("pic");
            var link = that.data("link");
            var id = that.data("id");
            cardId = id;
            var area = $("#region-selection").find("option:selected").text();
            var bank_name = $("#bank-selection").find("option:selected").text();
            var card_type = $("#type-selection").find("option:selected").text();
            if(link){
                $(".link_btn").show();
                $(".link_btn").attr("href",link);
            }else{
                $(".link_btn").hide();
            }

            
            initSwiper(pic);

            
            $(".bank_intro_pop").fadeIn(300);

            ref_temp = "了解详情";
            if(getQueryVariable("ref") == "home"){
                ref_value = "探索更多Visa留学信用卡";
            }else if(getQueryVariable("ref") == "side"){
                ref_value = "一键解锁 留学信用卡";
            }else{
                ref_value = "";
            }

            var source = decodeURI(getQueryVariable("source"))
            if(source !== "undefined" && source !== "false"){
                ref_value = source
            }

            _ha("send","action","card_getmore", {
                "card_id":id,
                "card_name":card_name,
                "area_name":"",
                "bank_name":"",
                "cardtype_type":"",
                "stage_type":stageType,
                "country_type":countryType,
                "ref":ref_value,
                "tag_age_name":tagAgeName,
                "tag_destination_name":"",
                "tag_stage_name":tagStageName
            });
             console.log(id + ";" + card_name + ";" + ref_value + ";" +  stageType + ";" + countryType + ";" + tagAgeName + ";" + tagStageName)
        })

        $(".card_bg").click(function(){
            var that = $(this).parents(".grid_wrapper").find(".know_btn");
            var pic = that.data("pic");
            var link = that.data("link");
            var id = that.data("id");
            cardId = id;
            var area = $("#region-selection").find("option:selected").text();
            var bank_name = $("#bank-selection").find("option:selected").text();
            var card_type = $("#type-selection").find("option:selected").text();
            if(link){
                $(".link_btn").show();
                $(".link_btn").attr("href",link);
            }else{
                $(".link_btn").hide();
            }
            card_name = that.parents(".inner").find("h2").html();
            $("#pop_pic").attr("src","../img/credit_card/" + pic);
            
            $(".bank_intro_pop").fadeIn(300);

            ref_temp = "卡面";
            if(getQueryVariable("ref") == "home"){
                ref_value = "探索更多Visa留学信用卡";
            }else if(getQueryVariable("ref") == "side"){
                ref_value = "一键解锁 留学信用卡";
            }else{
                ref_value = "";
            }

            var source = decodeURI(getQueryVariable("source"))
            if(source !== "undefined" && source !== "false"){
                ref_value = source
            }

            _ha("send","action","card_list_card", {
                "card_id":id,
                "card_name":card_name,
                "stage_type":stageType,
                "country_type":countryType,
                "area_name":"",
                "bank_name":"",
                "cardtype_name":"",
                "ref_button":ref_value,
                "tag_age_name":tagAgeName,
                "tag_destination_name":"",
                "tag_stage_name":tagStageName
            });
             console.log(id + ";" + card_name + ";" + ref_value + ";" + stageType + ";" + countryType + ";" + tagAgeName + ";" + tagStageName)
        })
        
        $(".link_btn").click(function(){
            var source = decodeURI(getQueryVariable("source"));
            if(getQueryVariable("ref") == "home"){
                ref_value = "探索更多Visa留学信用卡-" + ref_temp;
            }else if(getQueryVariable("ref") == "side"){
                ref_value = "一键解锁 留学信用卡-" + ref_temp;
            }else if(source !== "undefined" && source !== "false"){
                ref_value = source + ref_temp
            }else{
                ref_value = ref_temp;
            }

            _ha("send","action","card_apply_pop", {
                "card_id":cardId,
                "card_name":card_name,
                "button_name":"立即申请",
                "stage_type":stageType,
                "country_type":countryType,
                "ref_button":ref_value,
                "tag_age_name":tagAgeName,
                "tag_destination_name":"",
                "tag_stage_name":tagStageName
            });
            console.log(cardId + ";" + ref_value + ";" + card_name + ";" + stageType + ";" + countryType + ";" + tagAgeName + ";" + tagStageName)
        })

        $(".apply_btn").click(function(){
            var that = $(this);
            var id = that.parents(".button-group").find(".know_btn").data("id");
            card_name = that.parents(".inner").find("h2").html();
            if(getQueryVariable("ref") == "home"){
                ref_value = "探索更多Visa留学信用卡";
            }else if(getQueryVariable("ref") == "side"){
                ref_value = "一键解锁 留学信用卡";
            }else{
                ref_value = "";
            }

            var source = decodeURI(getQueryVariable("source"))
            if(source !== "undefined" && source !== "false"){
                ref_value = source
            }

            _ha("send","action","card_apply", {
                "card_id":id,
                "card_name":card_name,
                "button_name":"立即申请",
                "stage_type":stageType,
                "country_type":countryType,
                "ref_button":ref_value,
                "tag_age_name":tagAgeName,
                "tag_destination_name":"",
                "tag_stage_name":tagStageName
            });
            console.log(id + ";" + card_name + ";" + ref_value + ";" + stageType + ";" + countryType + ";" + tagAgeName + ";" + tagStageName)
        })

        $(".close_bg, .pop_close_btn").click(function(){
            $(".bank_intro_pop").fadeOut(300);
        })
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

</body>
</html>
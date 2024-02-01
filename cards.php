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
    $callback = "https://digitas.yijiuplus.com/studyabroad/cards.php";
    $str = $_SERVER['QUERY_STRING'];
    if(!empty($str)){
        $callback .= "?".$str;
    }
    $oauthurl = "https://visa-open.yijiuplus.com/wx/oauth2/authorize?brandId=i7PH9zVzE1VhNfxu&access_token=false&scope=snsapi_base&url=".urlencode($callback);

    header("Location: ".$oauthurl);
}

?>
<!DOCTYPE html>
<html lang="en" class="cards">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Visa留学家 我写我篇章</title>
    <link rel="stylesheet" href="css/swiper5.min.css">
    <link rel="stylesheet" href="css/app.css?v=2020110602">
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
        /*.bank_intro_pop .main .banks{overflow: hidden}
        .bank_intro_pop .main .bg{display: block;width: 100%}
        .link_btn{position: absolute;left: 28.5%;bottom: 4.36%;width: 42.9%;height: 5.2%;background: url("img/credit_card/btn3.png");background-size: 100% 100%}
        .pop_close_btn{position: absolute;right: 0;top: 0;padding: 3vw;width: 4.2vw;z-index: 2;box-sizing: content-box;}
        a:not([href]){display: none}*/

        .bank_intro_pop .main .pop_banks{overflow: hidden}
        .bank_intro_pop .main .grid .bg{display: block;width: 100%}
        .bank_intro_pop .main .grid .apply_btn{position: absolute;left: 22.5%;bottom: 4.36%;width: 49.5%;height: 6.3%;background: url("img/credit_card/btn3.png");background-size: 100% 100%}
        .link_btn{position: absolute;left: 28.5%;bottom: 4.36%;width: 49.5%;height: 6.3%;background: url("img/credit_card/btn3.png");background-size: 100% 100%}
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
    headerImg: 'https://digitas.yijiuplus.com/studyabroad/img/header.png'
    });
    </script>
</head>
<body class="cards">
    <img class="sharing_img" src="img/visa_sharing_img.jpg" />

    <header class="fixed-top">
        <div class="intro">
            <h1 class="text-center">Visa留学家 我写我篇章</h1>
        </div>

        <section class="section-selection">
            <div class="row">
                <div class="col col-4">
                    <div class="position-relative">
                        <select class="custom-select region-selection" id="region-selection" onchange="onChangeCardsCountry(this)" data-trackvalue='{"area_name":"", "bank_name":"", "cardtype_type":""}'>
                            <option value="all">全部区域</option>
                        </select>
                        <i class="fas fa-chevron-down"></i>
                    </div>
                </div>
                <div class="col col-4">
                    <div class="position-relative">
                        <select class="custom-select bank-selection" id="bank-selection" onchange="onChangeCardsBank(this)">
                            <option value="all">全部银行</option>
                            <option value="icbc">工商银行</option>
                            <option value="abc">农业银行</option>
                            <option value="boc">中国银行</option>
                            <option value="ccb">建设银行</option>
                            <option value="cmb">招商银行</option>
                            <option value="citic">中信银行</option>
                            <option value="ph">浦发银行</option>
                            <option value="cms">民生银行</option>
                            <option value="ceb">光大银行</option>
                            
                        </select>
                        <i class="fas fa-chevron-down"></i>
                    </div>
                </div>
                <div class="col col-4">
                    <div class="position-relative">
                        <select class="custom-select type-selection" id="type-selection" onchange="onChangeCardsType(this)">
                            <option value="all">全部卡种</option>
                            <option value="plat">白金卡</option>
                            <option value="gold">金卡</option>
                        </select>
                        <i class="fas fa-chevron-down"></i>
                    </div>
                </div>
            </div>
        </section>
    </header>

    <div class="container-fluid px-0">
        <section class="section-cards" id="section-cards">
            <div class="card-listing">
                <!-- dynamic cards -->
            </div>
            <p class="text-center card-not-found" id="card-not-found">不好意思，找不到对应的 Visa 卡。</p>

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
                            <img src="img/credit_card/btn1.png" class="btn1 know_btn" />
                            <a href="" target="_blank" class="btn-apply"><img src="img/credit_card/btn2.png" class="btn2 apply_btn" /></a>
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
        <div class="copyright">&copy; Copyright 1996-2022. All rights reserved.</div>
        <img src="img/logo_visa.svg" width="60" alt="Visa Logo" />
    </footer>

    <div class="bank_intro_pop">
        <div class="close_bg"></div>
        <div class="main">
            <div class="pop_banks">
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
        </div>
        <img src="img/credit_card/arrow-left.png" id="arrow_prev" class="slide_arrow" />
        <img src="img/credit_card/arrow-right.png" id="arrow_next" class="slide_arrow" />
        
    </div>

    <!-- <?php include_once('wechat/init.php')?> -->
    <script type="text/javascript" src="js/libs/jquery-3.5.1.min.js"></script>
    <script type="text/javascript" src="js/swiper5.min.js"></script>
    <script type="text/javascript" src="js/libs/bootstrap.js"></script>
    <script type="text/javascript" src="js/libs/solid.min.js"></script>
    <script type="text/javascript" src="js/libs/fontawesome.min.js"></script>
    <script type="text/javascript" src="js/cards.js?v=317"></script>
	<script type="text/javascript" src="js/cards1.js?v=317"></script>
	<script type="text/javascript">
    var country = "all"; // temp card country;
    var cardId;
    var card_name;
    var isBank = false;
    var cards_stage_type;
    var cards_country_type;
    var cards_tag_age_name;
    var cards_tag_destination_name;
    var cards_tag_stage_name;
    var ref_value = "";
    var ref_temp;
    var popArray = [];
    var slideIndex;

    function getQueryVariable(variable){
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if(pair[0] == variable){return pair[1];}
        }
        return(false);
    }

    function initSwiper(){
        popSwiper.updateSlides();
        popSwiper.pagination.update();
        popSwiper.slideTo(slideIndex, 10, true);
        
        $(".apply_btn").each(function(){
            if($(this).attr("href") == "undefined"){
                $(this).hide();
            }
        })

    }

    var popSwiper = new Swiper('.pop_banks',{
        observer: true,
        observeParents: true,
        //loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
    });

    function filterPopSwiper(picture){
        var bank_name = $("#bank-selection").find("option:selected").text();
        var card_type_val = $("#type-selection").find("option:selected").val();
        popArray = [];
        popSwiper.removeAllSlides();
        if(bank_name !== "全部银行" && card_type_val !== "all"){
            for(var i=0;i<carddata.length;i++){
                var pos = carddata[i].type.indexOf(card_type_val);
                if(carddata[i].bankname == bank_name && pos >= 0){
                    popArray.push(carddata[i]);
                }
            }
        }else if(bank_name !== "全部银行" && card_type_val == "all"){
            for(var i=0;i<carddata.length;i++){
                if(carddata[i].bankname == bank_name){
                    popArray.push(carddata[i]);
                }
            }
        }else if(bank_name == "全部银行" && card_type_val !== "all"){
            for(var i=0;i<carddata.length;i++){
                var pos = carddata[i].type.indexOf(card_type_val);
                console.log(pos)
                if(pos >= 0){
                    popArray.push(carddata[i]);
                }
            }
        }else{
            popArray = carddata;
        }
        console.log(popArray)
        if(popArray.length == 1){
            popSwiper.params.loop = false;
            $(".swiper-pagination, .slide_arrow").hide();
        }else{
            popSwiper.params.loop = true;
            $(".swiper-pagination, .slide_arrow").show();
        }

        for(var k=0;k<popArray.length;k++){
            popSwiper.appendSlide('<div class="swiper-slide"><div class="grid">\
                            <img src="img/credit_card/' + popArray[k].pop + '" class="bg" />\
                            <a class="apply_btn" data-name="' + popArray[k].detail + '" data-id="' + popArray[k].id + '" target="_blank" href="' + popArray[k].link + '"></a>\
                        </div></div>');
        }
        
        for(var i=0;i<popArray.length;i++){
            if(popArray[i].pop == picture){
                slideIndex = i+1;
            }
        }
        
        
        initSwiper();
        setTimeout(function(){
            initSwiper();
        },200)
    }

	$(function(){
		initCards();
        //initSwiper();

        onChangeCardSelection($('#region-selection'));



        var hash = getCookie(C_SURVEY_INTEREST);
        if (hash) {
            hash = hash.split("-");
            cards_tag_age_name = hashvalues[0][hash[0]];
            cards_tag_destination_name = hashvalues[1][hash[1]];
            cards_tag_stage_name = hashvalues[2][hash[2]];
        }else{
            hash = location.href.split("#")[1].split("-");
            cards_tag_age_name = hashvalues[0][hash[0]];
            cards_tag_destination_name = hashvalues[1][hash[1]];
            cards_tag_stage_name = hashvalues[2][hash[2]];
        }

        var interest = getCookie(C_LAST_INTEREST);
        if (interest) {
            interest = interest.split("-");
            cards_country_type = hashvalues[1][interest[1]];
            cards_stage_type = hashvalues[2][interest[2]];
        }

        $(".card_bg").click(function(){
            var that = $(this).parents(".grid_wrapper").find(".know_btn");
            var pic = that.data("pic");
            var link = that.data("link");
            var id = that.data("id"); 
            cardId = id;
            card_name = that.parents(".inner").find("h2").html();
            var area = $("#region-selection").find("option:selected").text();
            var bank_name = $("#bank-selection").find("option:selected").text();
            var card_type = $("#type-selection").find("option:selected").text();
            
            
            // $("#pop_pic").attr("src","img/credit_card/" + pic);
            // $(".link_btn").attr("href",link);
            $(".bank_intro_pop").fadeIn(300);

            filterPopSwiper(pic);

            if(getQueryVariable("ref") == "home"){
                ref_value = "探索更多Visa留学信用卡";
            }else if(getQueryVariable("ref") == "side"){
                ref_value = "一键解锁 留学信用卡";
            }else{
                ref_value = "";
            }
            ref_temp = "卡面";

            var source = decodeURI(getQueryVariable("source"))
            if(source !== "undefined" && source !== "false"){
                ref_value = source
            }

            _ha("send","action","card_list_card", {
                "card_id":id,
                "card_name":card_name,
                "stage_type":cards_stage_type,
                "country_type":cards_country_type,
                "area_name":area,
                "bank_name":bank_name,
                "cardtype_name":card_type,
                "ref_button":ref_value,
                "tag_age_name":cards_tag_age_name,
                "tag_destination_name":cards_tag_destination_name,
                "tag_stage_name":cards_tag_stage_name
            });
            console.log(id + ";" + card_name + ";" + ref_value + ";" + area + ";" + bank_name + ";" + cards_stage_type + ";" + cards_country_type + ";" + cards_tag_age_name + ";" +cards_tag_destination_name + ";" + cards_tag_stage_name)
        })

        $(".know_btn").click(function(){
            var that = $(this);
            var pic = that.data("pic");
            var link = that.data("link");
            var id = that.data("id"); 
            cardId = id;
            card_name = that.parents(".inner").find("h2").html();
            var area = $("#region-selection").find("option:selected").text();
            var bank_name = $("#bank-selection").find("option:selected").text();
            var card_type = $("#type-selection").find("option:selected").text();

            // $("#pop_pic").attr("src","img/credit_card/" + pic);
            // $(".link_btn").attr("href",link);
            $(".bank_intro_pop").fadeIn(300);

            
            filterPopSwiper(pic);


            if(getQueryVariable("ref") == "home"){
                ref_value = "探索更多Visa留学信用卡";
            }else if(getQueryVariable("ref") == "side"){
                ref_value = "一键解锁 留学信用卡";
            }else{
                ref_value = "";
            }
            ref_temp = "了解详情";

            var source = decodeURI(getQueryVariable("source"))
            if(source !== "undefined" && source !== "false"){
                ref_value = source
            }

            _ha("send","action","card_getmore", {
                "card_id":id,
                "card_name":card_name,
                "area_name":area,
                "bank_name":bank_name,
                "cardtype_type":card_type,
                "stage_type":cards_stage_type,
                "country_type":cards_country_type,
                "ref":ref_value,
                "tag_age_name":cards_tag_age_name,
                "tag_destination_name":cards_tag_destination_name,
                "tag_stage_name":cards_tag_stage_name
            });
            console.log(id + ";" + ref_value + ";" + area + ";" + bank_name + ";" + cards_stage_type + ";" + cards_country_type + ";" + cards_tag_age_name + ";" +cards_tag_destination_name + ";" + cards_tag_stage_name)
        })

        $(".link_btn").click(function(){
            var source = decodeURI(getQueryVariable("source"))

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
                "stage_type":cards_stage_type,
                "country_type":cards_country_type,
                "ref_button":ref_value,
                "tag_age_name":cards_tag_age_name,
                "tag_destination_name":cards_tag_destination_name,
                "tag_stage_name":cards_tag_stage_name
            });
            console.log(cardId + ";" + ref_value + ";" + card_name + ";" + cards_stage_type + ";" + cards_country_type + ";" + cards_tag_age_name + ";" + cards_tag_destination_name + ";" + cards_tag_stage_name)
        })

        $(".apply_btn").click(function(){
            var that = $(this);
            var id = that.parents(".button-group").find(".know_btn").data("id"); 
            var card_name = that.parents(".inner").find("h2").html();
            var area = $("#region-selection").find("option:selected").text();
            var bank_name = $("#bank-selection").find("option:selected").text();
            var card_type = $("#type-selection").find("option:selected").text();

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
                "area_name":area,
                "bank_name":bank_name,
                "cardtype_type":card_type,
                "stage_type":cards_stage_type,
                "country_type":cards_country_type,
                "ref":ref_value,
                "tag_age_name":cards_tag_age_name,
                "tag_destination_name":cards_tag_destination_name,
                "tag_stage_name":cards_tag_stage_name
            });
            console.log(id + ";" + ref_value + ";" + area + ";" + bank_name + ";" + cards_stage_type + ";" + cards_country_type + ";" + cards_tag_age_name + ";" +cards_tag_destination_name + ";" + cards_tag_stage_name)
        })

        $(".close_bg, .pop_close_btn").click(function(){
            $(".bank_intro_pop").fadeOut(300,function(){
                popSwiper.removeAllSlides();
            });
        })

        

        $("select").change(function(){
            var area = $("#region-selection").find("option:selected").text();
            var bank_name = $("#bank-selection").find("option:selected").text();
            var card_type = $("#type-selection").find("option:selected").text();

            _ha("send","action","card_list_content", {
                "area_name":area,
                "bank_name":bank_name,
                "cardtype_type":card_type,
                "stage_type":cards_stage_type,
                "country_type":cards_country_type,
                "ref":"",
                "tag_age_name":cards_tag_age_name,
                "tag_destination_name":cards_tag_destination_name,
                "tag_stage_name":cards_tag_stage_name
            });

            //console.log(area + ";" + bank_name + ";" + card_type + ";" + cards_stage_type + ";" + cards_country_type + ";" + cards_tag_age_name + ";" +cards_tag_destination_name + ";" + cards_tag_stage_name)
        })

        $("#arrow_next").click(function(){
            popSwiper.slideNext();
        })

        $("#arrow_prev").click(function(){
            popSwiper.slidePrev();
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

<script type="text/javascript" src="//res.wx.qq.com/open/js/jweixin-1.6.0.js"></script>
<script type="text/javascript" src="js/wx.js"></script>

</body>
</html>
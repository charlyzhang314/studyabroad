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
    $callback = "https://digitas.yijiuplus.com/studyabroad/banks/offer-medical.php";
    $str = $_SERVER['QUERY_STRING'];
    if(!empty($str)){
        $callback .= "?".$str;
    }
    $oauthurl = "https://visa-open.yijiuplus.com/wx/oauth2/authorize?brandId=i7PH9zVzE1VhNfxu&access_token=false&scope=snsapi_base&url=".urlencode($callback);

    header("Location: ".$oauthurl);
}

?>
<!DOCTYPE html>
<html lang="en" class="bankspage offer-medical">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Visa 精选礼遇</title>

    <link rel="stylesheet" href="../css/app.css?v=2020112706">
</head>
<body class="offer-medical">
    <img class="sharing_img" src="../img/visa_sharing_img.jpg" />

    <header class="fixed-top">
        <div class="intro">
            <div class="top-logos">
                <img class="logo-bank" alt="Bank Logo" />
                <img class="logo-visa" src="../img/onboard_logo@2x.png" height="20" alt="Visa Logo" />
            </div>
        </div>
    </header>

    <div class="container-fluid px-0">
        <h1>在线医疗服务</h1>

        <section class="section-offers">
            <div class="card item" id="element1" style="background: #f0f0f3">
                <img class="card-img-top" src="../img/offers/medical/banner_medical_01@2x.jpg" width="355" alt="爱睿智健康" />
                <div class="card-body">
                    <h3>爱睿智健康</h3>
                    <div class="d-flex">
                        <p>在线医疗咨询服务</p>
                        <a class="btn btn-primary btn-more" href="javascript:;" onclick="onClickOffer(this)" data-offer="1375" data-trackaction="offermedical_viewnow" data-trackvalue='{"button_name":"立即查看", "content_id":"1375", "content_name":"爱睿智健康"}'>立即查看 <i class="fas fa-chevron-right"></i></a>
                    </div>
                </div>
            </div>
            <div class="card item" style="background: #f0f0f3">
                <img class="card-img-top" src="../img/offers/medical/banner_medical_02@2x.jpg" width="355" alt="和缓视频医生" />
                <div class="card-body">
                    <h3>和缓视频医生</h3>
                    <div class="d-flex">
                        <p>7×24小时实时在线视频医生咨询服务</p>
                        <a class="btn btn-primary btn-more" href="javascript:;" onclick="onClickOffer(this)" data-offer="1764" data-trackaction="offermedical_viewnow" data-trackvalue='{"button_name":"立即查看", "content_id":"1764", "content_name":"和缓视频医生"}'>立即查看 <i class="fas fa-chevron-right"></i></a>
                    </div>
                </div>
            </div>
        </section>

        <div class="btn-container text-center" id="btn1">
            <a class="btn btn-primary btn-apply" href="javascript:;" onclick="onClickOfferDetailApply(this)" data-trackaction="offermedical_applycard" data-trackvalue='{"button_name":"立即办卡", "button_id":"applycard_offermedical"}'>立即办卡</a>
        </div>

    </div>

    <footer class="mt-0">
        <div class="copyright">&copy; Copyright 1996-2022. <br/>All rights reserved.</div>
		<img class="logo" src="../img/logo_visa.svg" width="60" alt="Visa Logo" />
    </footer>

    <script type="text/javascript" src="../js/libs/jquery-3.5.1.min.js"></script>
    <script type="text/javascript" src="../js/libs/bootstrap.js"></script>
    <script type="text/javascript" src="../js/libs/solid.min.js"></script>
    <script type="text/javascript" src="../js/libs/fontawesome.min.js"></script>
	<script type="text/javascript" src="https://res.wx.qq.com/open/js/jweixin-1.6.0.js"></script>
    <script type="text/javascript" src="../js/offers.js?v=11"></script>
    <script type="text/javascript" src="../js/banks.js?v=2020112706"></script>
	<script type="text/javascript" src="../js/app.js?v=213"></script>
	<script type="text/javascript">
    var isBank = true;

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
    var bankid = getUrlParameter("bankid");

	$(function(){
		initOfferMedical();


        if(bankName == "jx" || bankid == "bocom"){
            $("#element1, #btn1").hide();
        }
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
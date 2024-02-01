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
    $callback = "https://digitas.yijiuplus.com/studyabroad/banks/offer-detail.php";
    $str = $_SERVER['QUERY_STRING'];
    if(!empty($str)){
        $callback .= "?".$str;
    }
    $oauthurl = "https://visa-open.yijiuplus.com/wx/oauth2/authorize?brandId=i7PH9zVzE1VhNfxu&access_token=false&scope=snsapi_base&url=".urlencode($callback);

    header("Location: ".$oauthurl);
}

?>
<!DOCTYPE html>
<html lang="en" class="bankspage offer-detail">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Visa 精选礼遇</title>

    <link rel="stylesheet" href="../css/app.css?v=2020112706">
</head>
<body class="offer-detail">
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
        <h1 id="title">&nbsp;</h1>
        
        <section class="section-banner" id="section-banner">
            <img class="img-fluid" width="355" alt="" />
        </section>

        <div class="content">
            <h2 id="subtitle">&nbsp;</h2>

            <section class="section-highlights" id="section-highlights">
                <img src="../img/offer_middle_title@2x.png" width="60" alt="权益亮点" />
                <div class="intro"></div>
                <ul></ul>
                <div class="remarks"></div>
            </section>

            <section class="section-available">
                <table>
                    <tr><td class="text-nowrap">活动时间: </td><td><span id="available_date"></span></td></tr>
                    <tr><td class="text-nowrap">适用卡别: </td><td><span id="available_card"></span></td></tr>
                </table>
            </section>

            <div class="btn-container text-center">
                <a class="btn btn-primary btn-apply" id="btn1" href="javascript:;" onclick="onClickOfferDetailApply(this)" data-trackaction="offerdetail_applycard" data-trackvalue='{"button_name":"立即办卡"}'>立即办卡</a>
            </div>

            <hr/>

            <ul class="nav justify-content-center" id="offer-detail-selection" role="tablist">
                <li class="nav-item" role="presentation">
                    <a class="nav-link active" data-toggle="tab" href="#details-tab" role="tab" aria-controls="details-tab" aria-selected="true" data-trackaction="offerdetail_campaignrule" data-trackvalue='{"button_name":"活动细则"}'>活动细则</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" data-toggle="tab" href="#instructions-tab" role="tab" aria-controls="instructions-tab" aria-selected="true" data-trackaction="offerdetail_howtouse" data-trackvalue='{"button_name":"使用方法"}'>使用方法</a>
                </li>
            </ul>
            <div class="tab-content">
                <div class="tab-pane active" id="details-tab" role="tabpanel" aria-labelledby="details-tab">
                    <ul></ul>
                    <button class="btn btn-viewall" onclick="showAllOfferDetails(this);" data-trackaction="offerdetail_viewall" data-trackvalue='{"button_name":"查看全部"}'></button>
                </div>
                <div class="tab-pane" id="instructions-tab" role="tabpanel" aria-labelledby="instructions-tab">
                    <ul></ul>
                    <button class="btn btn-viewall" onclick="showAllOfferDetails(this);" data-trackaction="offerdetail_viewall" data-trackvalue='{"button_name":"查看全部"}'></button>
                </div>
            </div>
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
    <script type="text/javascript" src="../js/offers.js?v=101"></script>
    <script type="text/javascript" src="../js/banks.js?v=2020112706"></script>
	<script type="text/javascript" src="../js/app.js?v=2020112706"></script>
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

    var bankName = getUrlParameter("bank");
    var bankid = getUrlParameter("bankid");

	$(function(){
		initOfferDetail();

        if(bankName == "jx" || bankid == "bocom"){
            $("#btn1").hide();
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
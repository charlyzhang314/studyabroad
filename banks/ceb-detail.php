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
    $callback = "https://digitas.yijiuplus.com/studyabroad/banks/ceb-detail.php";
    $str = $_SERVER['QUERY_STRING'];
    if(!empty($str)){
        $callback .= "?".$str;
    }
    $oauthurl = "https://visa-open.yijiuplus.com/wx/oauth2/authorize?brandId=i7PH9zVzE1VhNfxu&access_token=false&scope=snsapi_base&url=".urlencode($callback);

    header("Location: ".$oauthurl);
}

?>
<!DOCTYPE html>
<html lang="en" class="ceb-detail">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Visa留学家</title>

    <link rel="stylesheet" href="../css/app.css?v=2020112706">
</head>
<body class="ceb-detail">
    <img class="sharing_img" src="../img/visa_sharing_img.jpg" />

    <div class="container-fluid px-0">
        <div class="content">
            <img class="img-fluid" src="../img/banks/ceb/new_card_01.jpg" alt="" width="750" />
            <img class="img-fluid" src="../img/banks/ceb/new_card_02.jpg" alt="" width="750" />
            <div class="position-relative">
                <img class="img-fluid" src="../img/banks/ceb/new_card_03.jpg" alt="" width="750" />
                <a href="http://efficientlearning.wileychina.cn" target="_blank" class="position-absolute" style="width:100%;height:7%;top:45%;"></a>
            </div>
            <img class="img-fluid" src="../img/banks/ceb/new_card_04.jpg" alt="" width="750" />
            <img class="img-fluid" src="../img/banks/ceb/new_card_05.jpg" alt="" width="750" />
        </div>

        <a id="btn-sticky" class="btn btn-sticky hide" href="https://xyk.cebbank.com/icip/icip-applypage/info1?cardId=24016&pro_code=ZHTG03BKRK000001VISA" target="_blank" data-trackaction="guangdabank_applycard" data-trackvalue='{"button_name":"一键解锁 留学信用卡", "button_id":"applycard_guangdabank"}'>
            一键解锁<br>留学信用卡
        </a>
    </div>

    <script type="text/javascript" src="../js/libs/jquery-3.5.1.min.js"></script>
    <script type="text/javascript" src="../js/libs/bootstrap.js"></script>
    <script type="text/javascript" src="../js/libs/solid.min.js"></script>
    <script type="text/javascript" src="../js/libs/fontawesome.min.js"></script>
	<script type="text/javascript" src="https://res.wx.qq.com/open/js/jweixin-1.6.0.js"></script>
	<script type="text/javascript" src="../js/app.js?v=2020112706"></script>
	<script type="text/javascript">
    var isBank = true;
	$(function(){
		initCEBDetail();
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
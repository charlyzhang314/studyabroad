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
    $callback = "https://digitas.yijiuplus.com/studyabroad/onboard.php";
    $str = $_SERVER['QUERY_STRING'];
    if(!empty($str)){
        $callback .= "?".$str;
    }
    $oauthurl = "https://visa-open.yijiuplus.com/wx/oauth2/authorize?brandId=i7PH9zVzE1VhNfxu&access_token=false&scope=snsapi_base&url=".urlencode($callback);

    header("Location: ".$oauthurl);
}

?>
<!DOCTYPE html>
<html lang="en" class="onboard">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>出国留学，Visa全程相伴</title>

    <link rel="stylesheet" href="css/app.css?v=2020112706">
    <script src="https://hcm.publicis-groupe.cn/hcm.js"></script>
    <script type="text/javascript">
        location.href = "index.php"
    </script>
</head>
<body class="onboard" style="display: none">
    <img class="sharing_img" src="img/visa_sharing_img.jpg" />

    <div class="container-fluid position-relative px-0">
        <div id="carouselIndicators" class="carousel slide text-center" data-ride="carousel" data-interval="2000" data-wrap="true">
            <ol class="carousel-indicators">
                <li data-target="#carouselIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselIndicators" data-slide-to="1"></li>
                <li data-target="#carouselIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="bkg-white text-center">
                        <img src="img/onboard_img01@2x.jpg" class="d-block w-100" alt="">
                        <h2>一卡万里行，简单又靠谱</h2>
                        <p>Visa 支持全球多数学校在线缴费<br/>
                            且能便利覆盖当地生活</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="bkg-white text-center">
                        <img src="img/onboard_img02@2x.jpg" class="d-block w-100" alt="">
                        <h2>一卡握在手，意外不用愁</h2>
                        <p>紧急现金支持与24小时贴心支援<br/>
                            让孩子与家长更放心</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="bkg-white text-center">
                        <img src="img/onboard_img03@2x.jpg" class="d-block w-100" alt="">
                        <h2>一路神助攻，礼遇享不停</h2>
                        <p>免费加申、Uber返现、网购折扣…<br/>
                            缤纷超值福利，助你探索精彩世界</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="btn-container text-center">
            <a class="btn btn-primary btn-learn btn-tracking" href="survey.php" role="button" data-trackaction="discovermore" data-trackvalue='{"button_name":"了解更多"}'>了解更多</a>
			<br/>
			<a class="btn-skip btn-tracking" href="interest.php" data-trackaction="surveyskip" data-trackvalue='{"button_name":"跳过"}'>跳过</a>
		</div>
        
        <img class="logo-visa" src="img/onboard_logo@2x.png" width="90" alt="Visa Logo" />
    </div>

    <script src="js/libs/jquery-3.5.1.min.js"></script>
    <script src="js/libs/bootstrap.js"></script>
	<script type="text/javascript" src="https://res.wx.qq.com/open/js/jweixin-1.6.0.js"></script>
    <script type="text/javascript" src="js/app.js?v=2020112706"></script>
	<script type="text/javascript">
    var isBank = false;
	$(function(){
		initOnboard();
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
<script src="https://hcm.publicis-groupe.cn/dsar.js"></script>

</body>
</html>

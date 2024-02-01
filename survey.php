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
    $callback = "https://digitas.yijiuplus.com/studyabroad/survey.php";
    $str = $_SERVER['QUERY_STRING'];
    if(!empty($str)){
        $callback .= "?".$str;
    }
    $oauthurl = "https://visa-open.yijiuplus.com/wx/oauth2/authorize?brandId=i7PH9zVzE1VhNfxu&access_token=false&scope=snsapi_base&url=".urlencode($callback);

    header("Location: ".$oauthurl);
}

?>
<!DOCTYPE html>
<html lang="en" class="survey">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Visa留学家</title>

    <link rel="stylesheet" href="css/app.css?v=2020112706">
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
<body class="survey">
	<img class="sharing_img" src="img/visa_sharing_img.jpg" />

	<div class="container-fluid px-0">
		<div class="text-center intro">
			只需回答三道问题<br/>
			就能让我们更懂你
		</div>
		<div class="questions">
			<section class="question question1">
				<p>1. 你是</p>
				<div class="ans-group">
					<a class="btn btn-outline-primary" role="button" href="javascript:;" onclick="onClickSurveyAnswer(1, this)" data-answer="parent">家长</a>
					<a class="btn btn-outline-primary" role="button" href="javascript:;" onclick="onClickSurveyAnswer(1, this)" data-answer="student">学生</a>
				</div>
			</section>
			<hr />
			<section class="question question2">
				<p>2. 留学目的地是？</p>
				<div class="ans-group">
					<a class="btn btn-outline-primary" role="button" href="javascript:;" onclick="onClickSurveyAnswer(2, this)" data-answer="us">美国</a>
					<a class="btn btn-outline-primary" role="button" href="javascript:;" onclick="onClickSurveyAnswer(2, this)" data-answer="uk">英国</a>
					<a class="btn btn-outline-primary" role="button" href="javascript:;" onclick="onClickSurveyAnswer(2, this)" data-answer="ca">加拿大</a>
					<a class="btn btn-outline-primary" role="button" href="javascript:;" onclick="onClickSurveyAnswer(2, this)" data-answer="au">澳大利亚</a>
					<a class="btn btn-outline-primary" role="button" href="javascript:;" onclick="onClickSurveyAnswer(2, this)" data-answer="other">其他</a>
				</div>
			</section>
			<hr />
			<section class="question question3">
				<p>3. 目前处于以下哪个阶段？</p>
				<div class="ans-group">
					<a class="btn btn-outline-primary" role="button" href="javascript:;" onclick="onClickSurveyAnswer(3, this)" data-answer="preparation">计划留学</a>
					<a class="btn btn-outline-primary" role="button" href="javascript:;" onclick="onClickSurveyAnswer(3, this)" data-answer="pretrip">出发准备</a>
					<a class="btn btn-outline-primary" role="button" href="javascript:;" onclick="onClickSurveyAnswer(3, this)" data-answer="destination">当地生活</a>
				</div>
			</section>
		</div>

		<div class="text-center">
			<a class="btn btn-outline-secondary btn-submit disabled" id="btn-submit" href="javascript:submitSurveyAnswer()">完成</a>
			<br/>
			<a class="btn-skip btn-tracking" href="interest.php" data-trackaction="surveyskip" data-trackvalue='{"button_name":"跳过这一步"}'>跳过这一步</a>
		</div>
	</div>

	<script type="text/javascript" src="js/libs/jquery-3.5.1.min.js"></script>
	<script type="text/javascript" src="https://res.wx.qq.com/open/js/jweixin-1.6.0.js"></script>
	<script type="text/javascript" src="js/app.js?v=2020112706"></script>
	<script type="text/javascript">
	var isBank = false;
	$(function(){
		initSurvey();
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
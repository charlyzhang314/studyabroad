<?php
return ;
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

use Yuanshe\WeChatSDK\WeChat;
use Yuanshe\WeChatSDK\Example\Cache;

require __DIR__ . '/vendor/autoload.php';
require __DIR__ . '/Cache.php';

$config = include __DIR__ . '/config.php';

$wechat = new WeChat($config, Cache::class);
$current_url = "https://{$_SERVER['HTTP_HOST']}{$_SERVER['REQUEST_URI']}";
$jssdk_config = $wechat->jsSDK($current_url, ['updateAppMessageShareData', 'updateTimelineShareData', 'onMenuShareWeibo']);

?>

<script src="https://res.wx.qq.com/open/js/jweixin-1.6.0.js"></script>
<script>
wx.config(<?php echo json_encode($jssdk_config); ?>)
wx.ready(function () {
	setWechatShare('title', 'desc', 'https://studyabroad.visa-campaign.com/wechat/init.php', 'https://www.visa.com.cn/dam/VCOM/regional/ap/china/offers/ecommerce/ECommerce_640x640.jpg');
});

function setWechatShare(title, desc, link, img){
	wx.updateAppMessageShareData({ 
		title: title, // 分享标题
		desc: desc, // 分享描述
		link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
		imgUrl: img, // 分享图标
		success: function () {
		}
	});
	
	wx.updateTimelineShareData({ 
		title: title, // 分享标题
		link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
		imgUrl: img, // 分享图标
		success: function () {
		}
	});
	
	wx.onMenuShareWeibo({ 
		title: title, // 分享标题
		desc: desc, // 分享描述
		link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
		imgUrl: img, // 分享图标
		success: function () {
		}
	});
	
}

</script>
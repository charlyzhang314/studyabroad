var job = 'parent';
var lastupdate = '?v=2020110602';
var socialmedia = {
	"title":"Visa留学家",
	"desc":"",
	"link":"https://studyabroad.visa-campaign.com/",
	"img":"https://studyabroad.visa-campaign.com/img/visa_sharing_img.jpg"
};
var popupvalues = [
	"value_xdf", "value_dragon", "value_jd", "value_uber",
	"value_ubereats", "value_ecom", "value_skfedu", "value_ifree",
	"value_booking", "value_health", "accep_local", "accep_schoolfee",
	"secu_gcas"
];
var bankvalues = [
	"boc", "boc_debit", "nh", "gf", "ph", "gh",
	"jh", "pa", "gd", "ms", "sh", "zd",
	"jx", "zh", "xy", "zx", "jh_debit",
	"nh_debit"
];
// var bankvalues = [
// 	"boc", "boc_debit", "gf", "ph", "gh",
// 	"jh", "pa", "gd", "ms", "sh", "zd",
// 	"jx", "zh", "xy", "zx", "jh_debit", "xdf"
// ];
var hashvalues = [
	{"parent":"家长", "student":"学生"},
	{"us":"美国", "uk":"英国", "ca":"加拿大", "au":"澳大利亚", "other":"其他"},
	{"preparation":"计划留学", "pretrip":"出发准备", "destination":"当地生活"}
];
var cardvalues = [
	{"all":"全部区域", "us":"美国", "uk":"英国", "ca":"加拿大", "au":"澳大利亚", "other":"其他"},
	{"all":"全部银行", "icbc":"工商银行", "abc":"农业银行", "boc":"中国银行", "cmb":"招商银行", "cms":"民生银行", "ceb":"光大银行", "ccb":"建设银行"},
	{"all":"全部卡种", "plat":"白金卡", "gold":"金卡"}
]
// var cardvalues = [
// 	{"all":"全部区域", "us":"美国", "uk":"英国", "ca":"加拿大", "au":"澳大利亚", "other":"其他"},
// 	{"all":"全部银行", "icbc":"工商银行", "boc":"中国银行", "cmb":"招商银行", "cms":"民生银行", "ceb":"光大银行", "ccb":"建设银行"},
// 	{"all":"全部卡种", "plat":"白金卡", "gold":"金卡"}
// ]
const PAGE_CHANGE_DELAY = 700;

/**
 * versions
 * - normal: old flow, onboard -> survey -> homegage
 * - media (?popup=xxx): new flow, no onboard & survey page, homepage popup survey
 * - individual banks page (/banks/?bank=xxx): loading logo, footer logo with banks, links add ?bankid=xxx
 * - no medical (?popup=toutiao): remove health banner, change course banner, remove health category
 * - land uk dest (?popup=oversea_ddm): default land to ‘本地生活’的英国
 * - 中信银行(zx), 工行(gh)、平安(pa)、光大(gd)、上海银行BOS(sh)、建行Debit(jh_debit)、兴业(xy)、广发(gf) (/banks/?bank=zx): take out 龙腾 banner & card
 * - boc_debit change to 一键解锁 留学借记卡
 */

const NO_RESTROOM_BANK = ['zx','gh','pa','gd','sh','jh_debit','xy','gf'];
const NO_MEDICAL_PARAM = "popup"; // no medical version
const NO_MEDICAL_VAL = "toutiao"; // no medical version
const LAND_UK_DEST_PARAM = "popup";
const LAND_UK_DEST_VAL = "oversea_ddm";
const BANK_ID_PARAM = "bankid";
const BANK_PARAM = "bank";

const C_ONBOARD_POPUP = "onboard"; // ?popup=xxx
const C_BANK = "bank"; // ?bank=xxx
const C_SURVEY_INTEREST = "survey";
const C_SURVEY_AGE = "survey_age";
const C_SURVEY_DEST = "survey_destination";
const C_SURVEY_STAGE = "survey_stage";
const C_LAST_INTEREST = "interest";
const C_BANK_REF_BUTTON = "ref_button";

$(function(){
	initTrackingBtn();

	wx.ready(function () {
		var bank = getCookie(C_BANK);
		if (bank) {
			socialmedia.link = socialmedia.link + "banks/?bank="+bank;
		}
		console.log(socialmedia);
		setWechatShare(socialmedia.title, socialmedia.desc, socialmedia.link, socialmedia.img);
	});
});

function initIndex() {
	var hash = null;
	var popup = "";
	var onboard = getUrlParameter("popup");
	var bank = getUrlParameter("bank");
	var page_change_delay = PAGE_CHANGE_DELAY;

	if (onboard) {
		setCookie(C_ONBOARD_POPUP, onboard);
		popup = "?"+window.location.search.substring(1);
	} else {
		eraseCookie(C_ONBOARD_POPUP);
	}

	if (isBank && bank) {
		setCookie(C_BANK, bank);
		popup = "?"+window.location.search.substring(1);
		page_change_delay = 2000;
		if (bankvalues.includes(bank)) {
			// change visa logo
			$("img.logo-bank").attr("src", "../img/banks/loading/loading_"+bank+"@2x.png");
		}
	} else {
		eraseCookie(C_BANK);
	}

	hash = getCookie(C_SURVEY_INTEREST);
	if (hash) {
		replaceLocWithDelay("interest.php"+popup+"#"+hash, page_change_delay);
		return;
	}
	hash = getCookie(C_LAST_INTEREST);
	if (hash) {
		replaceLocWithDelay("interest.php"+popup+"#"+hash, page_change_delay);
		return;
	}

	if (onboard || (isBank && bank)) {
		replaceLocWithDelay("interest.php"+popup, page_change_delay);
		return;
	}

	// not come from media
	replaceLocWithDelay("onboard.php", page_change_delay);
	return;
}

function initOnboard(){

}

function initSurvey(){

}

function onClickSurveyAnswer(question, answer){
	$(".question"+question).find("a.active").removeClass("active");
	$(answer).addClass("active");

	var answer1 = $(".question1").find("a.active").data("answer");
	var answer2 = $(".question2").find("a.active").data("answer");
	var answer3 = $(".question3").find("a.active").data("answer");
	if (answer1 && answer2 && answer3) {
		$("#btn-submit").removeClass("disabled");
	}
}

function onClickInterestAnswer(question, answer){
	$(".question"+question).find("a.active").removeClass("active");
	$(answer).addClass("active");

	var answer1, answer2, answer3;
	if(location.hash != "" && location.hash != "#"){
		var hash = location.hash.substr(1);
		hash = hash.split("-");
		answer2 = hash[1];
		answer3 = hash[2];
		if(hash[0] == "parent" || hash[0] == "student"){
			answer1 = hash[0];
		}
	}
	answer1 = $(".question1").find("a.active").data("answer");
	answer3 = $(".question3").find("a.active").data("answer");
	if (question == 1) { setCookie(C_SURVEY_AGE, answer1); }
	if (question == 3) { setCookie(C_SURVEY_STAGE, answer3); }

	var trackaction = $(answer).data("trackaction");
	var trackvalue = $(answer).data("trackvalue");
	if (trackaction) {
		tracking(trackaction, trackvalue);
	}

	if (answer1 && answer2 && answer3) {
		setCookie(C_SURVEY_INTEREST, answer1+"-"+answer2+"-"+answer3);
		setCookie(C_SURVEY_DEST, answer2);
		setCookie(C_LAST_INTEREST, answer1+"-"+answer2+"-"+answer3);
		location.hash = answer1+"-"+answer2+"-"+answer3;
		$("#modal-survey").modal("hide");
	}

	if (question == 1) {
		$("#carouselPopupSurvey").carousel("next");
	}
}

function submitSurveyAnswer(){
	var answer1 = $(".question1").find("a.active").data("answer");
	var answer2 = $(".question2").find("a.active").data("answer");
	var answer3 = $(".question3").find("a.active").data("answer");

	setCookie(C_SURVEY_INTEREST, answer1+"-"+answer2+"-"+answer3);
	setCookie(C_LAST_INTEREST, answer1+"-"+answer2+"-"+answer3);

	var trackvalue = {
		"button_name":"完成",
		"tag_age_name":hashvalues[0][answer1],
		"tag_destination_name":hashvalues[1][answer2],
		"tag_stage_name":hashvalues[2][answer3]
	};
	tracking("surveyfinish", trackvalue);
	// gain some time for send out tracking
	changeLocWithDelay("interest.php#"+answer1+"-"+answer2+"-"+answer3);
}

function initInterest(){
	setBankCookie();

	$("#section-banners .slick-carousel").slick({
		infinite: true,
		dots: true,
		arrows: false,
		slidesToScroll: 1,
  		autoplay: false,
  		autoplaySpeed: 2000,
		cssEase: 'linear',
		speed: 200,
		touchThreshold: 8
	});

	var onboard = getCookie(C_ONBOARD_POPUP);
	var bank = getCookie(C_BANK);
	var interest = getCookie(C_LAST_INTEREST);
	if ((onboard || bank) && !interest) {
		setTimeout(function(){
			$("#modal-survey").modal('show');
		}, 4000);
		// eraseCookie(C_ONBOARD_POPUP);
	}

	onInterestHashChange();
	window.addEventListener('hashchange', function() {
		onInterestHashChange();
	}, false);

	// boc_debit change to 一键解锁 留学借记卡
	if (bank && bank == 'boc_debit') {
		$("#section-banks .title a").html("一键解锁<br/>留学借记卡");
		$("#btn-sticky").html("一键解锁<br/>留学借记卡");
	}

	// show sticky on slide
	var timer;
	$(document).scroll(function (){
		if (timer) {
			window.clearTimeout(timer);
		}
		timer = window.setTimeout(function() {
			var y = $(this).scrollTop();
			var banksSectionY = $('#section-banks').offset().top - 30;
			if (y != 0 && y > banksSectionY) {
				$("#btn-sticky").removeClass("hide");
			} else {
				$("#btn-sticky").addClass("hide");
			}
		}, 30); // debounce time
	});
}
function onInterestHashChange() {
	$("#status-selection").find("li.active").removeClass("active");
	$("#country-selection").find("li.active").removeClass("active");

	if(location.hash != "" && location.hash != "#"){
		var hash = location.hash.substr(1);
		hash = hash.split("-");
		var country = hash[1];
		var status = hash[2];
		if(hash[0] == "parent" || hash[0] == "student"){
			job = hash[0];
		}

		$("#status-selection").find("a[data-answer='"+status+"']").parent().addClass("active");
		$("#country-selection").find("a[data-answer='"+country+"']").parent().addClass("active");
		updateInterestSelection();
	}else{
		var onboard = getCookie(C_ONBOARD_POPUP);
		var land_uk_dest = getUrlParameter(LAND_UK_DEST_PARAM);
		var bank = getCookie(C_BANK);
		if (onboard || bank) { // come from media, default hash
			if (land_uk_dest == LAND_UK_DEST_VAL) {
				$("#status-selection").find("a[data-answer='destination']").parent().addClass("active");
				$("#country-selection").find("a[data-answer='uk']").parent().addClass("active");
			} else {
				$("#status-selection").find("a[data-answer='pretrip']").parent().addClass("active");
				$("#country-selection").find("a[data-answer='uk']").parent().addClass("active");
			}
		} else {
			$("#status-selection").find("li:first").addClass("active");
			$("#country-selection").find("li:first").addClass("active");
		}
		updateInterestSelection(true);
	}

	console.log(location.hash);
}
function onClickInterestStatus(answer){
	console.log(123)
	$("#status-selection").find("li.active").removeClass("active");
	$(answer).parent().addClass("active");
	updateInterestSelection(true);
}
function onClickInterestCountry(answer){
	$("#country-selection").find("li.active").removeClass("active");
	$(answer).parent().addClass("active");
	updateInterestSelection(true);
}
function onClickInterestBank(btn){
	var trackaction = $(btn).data("trackaction");
	var trackvalue = $(btn).data("trackvalue");
	if (trackaction) {
		setCookie(C_BANK_REF_BUTTON, trackaction, 1);
		tracking(trackaction, trackvalue, true);
	}

	if (isBank) {
		var popup = "?"+window.location.search.substring(1);
		var card_id = $(btn).data("card") ? "#"+$(btn).data("card") : "";
		changeLocWithDelay("cards.php"+popup+card_id);
	} else {
		var bank = $(btn).data("bank");
		var country = $(btn).data("country");
		if (bank && country) {
			// gain some time for send out tracking
			changeLocWithDelay("cards.php#"+country+"-"+bank+"-"+"all");
		}
	}
}
function updateInterestSelection(updateCookies = false){
	$(".container-fluid").addClass("loading");
	setTimeout(function(){
		$(".container-fluid").removeClass("loading");
	}, 800);

	if($("#status-selection").find("li.active").length == 0){
		$("#status-selection").find("li:first").addClass("active");
	}
	if($("#country-selection").find("li.active").length == 0){
		$("#country-selection").find("li:first").addClass("active");
	}
	var status = $("#status-selection").find("li.active a").data("answer");
	var country = $("#country-selection").find("li.active a").data("answer");
	location.hash = job+"-"+country+"-"+status;
	if (updateCookies) {
		setCookie(C_LAST_INTEREST, job+"-"+country+"-"+status);
	}

	if (status == "preparation") {
		$("#country-selection").hide(0, function(){
			$("body.interest > .container-fluid").css("padding-top", $("body.interest > header").height());
		});
	} else {
		$("#country-selection").show(0, function(){
			$("body.interest > .container-fluid").css("padding-top", $("body.interest > header").height());
		});
	}

	scrollTop();

	updateBannersSection(qna[country][status].banners, country, status);
	updateBankSection(country, status);
	updateInterestSection(qna[country][status].interests, country, status);
	updateBenefitsSection(qna[country][status].benefits, country, status);
}
function showAllInterests(btn) {
	var trackaction = $(btn).data("trackaction");
	var trackvalue = $(btn).data("trackvalue");
	if (trackaction) {
		tracking(trackaction, trackvalue, true);
	}

	$(btn).remove();
	var $section = $("#section-interests .interests");
	$section.find(".interest").removeClass("hide");
	$section.css("max-height", "999px");
}
function showAllBenefits(btn) {
	$(btn).addClass("disabled");
	var $benefits = $(btn).closest(".category");
	let maxheight = $benefits.find(".slide-down").height();
	$benefits.find(".slide-down").css("max-height", maxheight);
	setTimeout(function() {
		$benefits.find(".benefit").removeClass("hide");
		$benefits.find(".slide-down").css("max-height", "1999px");
		$(btn).remove();
   }, 200); // add time for html to load
}

function updateBannersSection(data, country, status) {
	var $cont = $("#section-banners .slick-carousel");
	var $dummy = $("#section-banners .dummy.banner");

	// remove old data
	var count = $cont.find(".banner").length;
	$cont.slick("slickPause");
	for (var i = 0; i < count; i++) {
		$cont.slick("slickRemove", 0);
	}

	// create new data
	if (!data) return;
	$cont.hide();
	var bannerdata = JSON.parse(JSON.stringify(data)); // clone
	var no_medical = getUrlParameter(NO_MEDICAL_PARAM);
	var bank = getCookie(C_BANK);

	if (isBank && bank) {
		if (bankdata[bank] && bankdata[bank].banners) {
			bannerdata.unshift(bankdata[bank].banners[0]);
		}
	}

	bannerdata.forEach(function(banner, index) {
		if (no_medical && no_medical == NO_MEDICAL_VAL && banner.image.includes("medical")) {
			return;
		}
		if (no_medical && no_medical == NO_MEDICAL_VAL && banner.image.includes("course")) {
			banner.image = "img/top_banner/01_preparation/share/course_no_medical@2x.png";
		}
		if (isBank && NO_RESTROOM_BANK.includes(bank) && banner.image.includes("rest_room")) { // take out 龙腾
			return;
		}

		var $ele = $dummy.clone();
		$ele.removeClass("dummy");

		$ele.find("img").attr("src", (isBank?"../":"")+banner.image+lastupdate);
		$ele.find("img").attr("alt", banner.desc);

		if (banner.link) {
			var isLocal = banner.link.lastIndexOf("http", 0) !== 0;

			if (isBank && bank) {
				if (isLocal) {
					banner.link = updateQueryStringParameter(banner.link, BANK_PARAM, bank);
				}
				if (bankdata[bank] && bankdata[bank].bankid) {
					banner.link = updateQueryStringParameter(banner.link, BANK_ID_PARAM, bankdata[bank].bankid);
				}
			}
			$ele.find("a").attr("href", banner.link);
			$ele.find("a").bind("click", function(e) {
				var trackvalue = {
					"banner_name":banner.desc,
					"banner_id":index
				};
				tracking("homepageclick_banner", trackvalue, true);

				// newHaTracking("homepageclick_banner", trackvalue, true)
				// _ha("send","action","homepageclick_banner", {
				//     "banner_name":banner.desc,
				//     "banner_id":index,
				//     "stage_type":"[Value]",
				//     "country_type":"[Value]"
				// });

				if (isLocal) {
					e.preventDefault();
					changeLocWithDelay(banner.link);
				}
			});
		} else {
			$ele.find("a").click(function(e) {
				e.preventDefault();
			});
		}

		$cont.slick("slickAdd", $ele);
	});

	setTimeout(function() {
		$cont.show();
		$cont.slick("slickGoTo", 0, true);
		$cont.slick("slickPlay");
	}, 800);
}
function updateBankSection(country, status) {
	var $cont = $("#section-banks");
	var $dummy = $("#section-banks .dummy.bank");
	var $stickyBtn = $("#btn-sticky");

	var bank = getCookie(C_BANK);
	if (isBank && bank) {
		if (bankdata[bank] && bankdata[bank].cards) {
			$cont = $("#section-banks .scrolling-wrapper-flexbox");

			// remove old data
			$cont.html('');

			let data = bankdata[bank].cards;
			data.forEach(function(card, index) {
				var $ele = $dummy.clone();
				$ele.removeClass("dummy");

				$ele.find("img").attr("src", (isBank?"../":"")+card.image+lastupdate);
				$ele.find("img").attr("alt", card.shortname);
				$ele.find("p").html(card.shortname);

				var trackvalue = {
					"button_name":card.shortname,
					"button_id":index,
				};
				$ele.data("trackvalue", trackvalue);
				$ele.data("bank", bank);
				$ele.data("card", "card"+index);

				$cont.append($ele);
			});
			$cont = $("#section-banks");
		} else {
			$cont.hide();
			$stickyBtn.hide();
		}
	}

	$cont.find("a").data("country", country);

	$stickyBtn.addClass("hide"); // hide at first
	$stickyBtn.data("country", country);
}
function updateInterestSection(data, country, status) {
	var $cont = $("#section-interests .interests");
	var $dummy = $("#section-interests .dummy.btn-interest");
	var $dummyButton = $("#section-interests .dummy.btn-showAll");

	// remove old data
	$cont.html('');

	// create new data
	if (!data) return;
	data.forEach(function(interest, index) {
		if (index == 4) {
			var $btn = $dummyButton.clone();
			$btn.removeClass("dummy");
			$cont.append($btn);
		}

		var $ele = $dummy.clone();
		if (index >= 4) {
			$ele.addClass("hide")
		}
		$ele.removeClass("dummy");

		$ele.attr("href", interest.link);
		$ele.bind("click", function() {
			var trackvalue = {
				"button_name":interest.desc,
				"button_id":index
			};
			tracking("homepageclick_maininfo", trackvalue, true);
		});

		$ele.find("img").attr("src", (isBank?"../":"")+interest.image+lastupdate);
		$ele.find("img").attr("alt", interest.desc);
		$ele.find("p").html(interest.desc);
		$cont.append($ele);
	});
}
function updateBenefitsSection(data, country, status) {
	var $cont = $("#section-benefits .benefits");
	var $dummy = $("#section-benefits .dummy.benefit");
	var $dummyButton = $("#section-benefits .dummy.btn-more-container");

	// remove old data
	$cont.html('');

	// create new data
	if (!data) return;
	var no_medical = getUrlParameter(NO_MEDICAL_PARAM);
	var bank = getCookie(C_BANK);

	data.forEach(function(category) {
		if (category.category && category.category == "explore-more") {

			var $button = $dummyButton.clone();
			$button.removeClass("dummy");
			$button.find("a.btn").prop("onclick", null);
			$button.find("a.btn").attr("target", "_blank");
			$button.find("a.btn").attr("href", category.link);
			$button.find("a.btn").bind("click", function() {
				var trackvalue = {
					"offercontent_name":"查看更多",
					"content_type":"查看更多"
				};
				tracking("homepageclick_offercontentmore", trackvalue, true);
			});
			$cont.append($button);
		} else {

			if (no_medical && no_medical == NO_MEDICAL_VAL && category.category && category.category == "健康生活") {
				return;
			}

			var $category = $('<div class="category"></div>');

			if (category.category && category.category != "") {
				$('<h4>'+category.category+'</h4>').appendTo($category);
			}

			var count = category.benefits.length;
			var $row = $('<div class="row"></div>').appendTo($category);
			// if (status == "destination" && count > 4) {
			// 	$row.addClass("slide-down");
			// }
			category.benefits.forEach(function(benefit, index) {
				var $ele = $dummy.clone();
				$ele.removeClass("dummy");
				// if (status == "destination" && index >= 4) {
				// 	$ele.addClass("hide")
				// }

				if (isBank && NO_RESTROOM_BANK.includes(bank) && benefit.image.includes("restroom")) { // take out 龙腾
					return;
				}

				var isLocal = benefit.link.lastIndexOf("http", 0) !== 0;
				if (isBank && bank) {
					if (isLocal) {
						benefit.link = updateQueryStringParameter(benefit.link, BANK_PARAM, bank);
					}
					if (bankdata[bank] && bankdata[bank].bankid) {
						benefit.link = updateQueryStringParameter(benefit.link, BANK_ID_PARAM, bankdata[bank].bankid);
					}
				}

				$ele.find("a").attr("href", benefit.link);
				$ele.find("a").bind("click", function(e) {
					var trackvalue = {
						"offercontent_name":benefit.title,
						"offercontent_id":index,
						"content_type":category.category
					};
					tracking("homepageclick_offercontent", trackvalue, true);
					if (isLocal) {
						e.preventDefault();
						changeLocWithDelay(benefit.link);
					}
				});

				$ele.find("img").attr("src", (isBank?"../":"")+benefit.image+lastupdate);
				$ele.find("img").attr("alt", benefit.title);
				$ele.find(".card-title").html(benefit.title);
				$ele.find(".card-text").html(benefit.desc);
				$row.append($ele);
			});
			// if (status == "destination" && count > 4) {
			// 	var $button = $dummyButton.clone();
			// 	$button.removeClass("dummy");
			// 	$category.append($button);
			// }

			$cont.append($category);
		}
	});
}

function initCards(){
	setBankCookie();

	var bank = getCookie(C_BANK);
	if (isBank && bank) {
		if (bankdata[bank] && bankdata[bank].cards) {
			// insert all cards
			updateCardsSection(bankdata[bank].cards);

			setTimeout(function() {
				if(location.hash != "" && location.hash != "#"){
					var hash = location.hash.substr(1);
					scrollTo($("#"+hash));
				}
			}, 500);  // add time for html to load
		}
	} else {
		// insert all cards
		updateCardsSection(carddata);

		// show card according to selection
		onCardsHashChange();
		updateCardSelection();

		window.addEventListener('hashchange', function() {
			onCardsHashChange();
			updateCardSelection();
		}, false);
	}
}
function onCardsHashChange() {
	if(location.hash != "" && location.hash != "#"){
		var hash = location.hash.substr(1);
		hash = hash.split("-");
		country = hash[0]; // temp card country
		var bank = hash[1];
		var type = hash[2];
		$("#bank-selection").val(bank);
		$("#type-selection").val(type);
	} else {
		country = "all";
		$("#bank-selection").val("all");
		$("#type-selection").val("all");
	}
	console.log(location.hash);
}

function updateCardsSection(data) {
	var $cont = $("#section-cards .card-listing");
	var $dummy = $("#section-cards .dummy.item");
	var $dummyModal = $("#section-cards .dummy.modal");

	// init once only
	var trackvalue = {};
	var ref = getCookie(C_BANK_REF_BUTTON);
	if (ref) {
		trackvalue.ref = ref;
		// eraseCookie(C_BANK_REF_BUTTON);
	}
	$("#country-selection").data("trackvalue", trackvalue);
	$("#bank-selection").data("trackvalue", trackvalue);
	$("#type-selection").data("trackvalue", trackvalue);

	// remove old data
	$cont.html('');

	// create new data
	if (!data) return;
	data.forEach(function(card, index) {
		var $ele = $dummy.clone();
		$ele.removeClass("dummy");
		if (isBank) {
			$ele.addClass("active");
			$ele.attr("id", "card"+index);
		}
		$ele.data("bank", card.bank);
		$ele.data("type", card.type);

		var $modal = $dummyModal.clone();
		$modal.removeClass("dummy");
		$modal.attr("id", "modal-card-"+index);
		$modal.find(".modal-title").html(card.bankname+"<br/>"+card.name);
		$modal.find(".modal-body .content").html(card.content);
		$cont.append($modal);

		$ele.find("a.btn-more").bind("click", function() {
			var tvalue = $ele.data("trackvalue");
			tracking("card_getmore", tvalue, true);

			$("#modal-card-"+index).modal("show");
		});

		var tvalue = JSON.parse(JSON.stringify(trackvalue));
		tvalue.card_id = index;
		tvalue.card_name = card.bankname+" "+card.name;
		$ele.data("trackvalue", tvalue);

		if (card.link) {
			$ele.find("a.btn-apply").attr("href", card.link);
			$ele.find("a.btn-apply").bind("click", function() {
				var tvalue = $ele.data("trackvalue");
				//tracking("card_apply", tvalue, true);
			});
			$modal.find("a.btn-apply").attr("href", card.link);
			$modal.find("a.btn-apply").bind("click", function() {
				var tvalue = $ele.data("trackvalue");
				//tracking("card_apply", tvalue, true);
			});
		} else {
			$ele.find("a.btn-apply").hide();
			$modal.find("a.btn-apply").hide();
		}

		$ele.find(".know_btn").attr("data-pic", card.pop);
		$ele.find(".know_btn").attr("data-link", card.link);
		$ele.find(".know_btn").attr("data-id", card.id);
		$ele.find(".card_bg").attr("src", (isBank?"../":"")+card.image+lastupdate);
		$ele.find(".card_bg").attr("alt", card.bankname+" "+card.name);
		$ele.find("h2").html(card.name);
		$ele.find("p").html(card.detail);

		if (card.linkdesc) {
			$ele.find(".card-footer").append('<p class="desc mb-0">'+card.linkdesc+'</p>');
		}

		$cont.append($ele);
	});
}
function onChangeCardsCountry(selected) {
	onChangeCardSelection(selected);
	updateCardSelection();
}
function onChangeCardsBank(selected) {
	onChangeCardSelection(selected);
	updateCardSelection();
}
function onChangeCardsType(selected) {
	onChangeCardSelection(selected);
	updateCardSelection();
}
function onChangeCardSelection(selected) {
	var selectedCountry = $("#country-selection").find(":selected").val();
	var selectedBank = $("#bank-selection").find(":selected").val();
	var selectedType = $("#type-selection").find(":selected").val();
	var trackvalue = $(selected).data("trackvalue");
	trackvalue.area_name = selectedCountry;
	trackvalue.bank_name = cardvalues[1][selectedBank];
	trackvalue.cardtype_type = cardvalues[2][selectedType];

	//tracking("card_list_content", trackvalue, true);
}
function updateCardSelection() {
	$items = $("#section-cards .card-listing .item");
	$notFound = $("#section-cards #card-not-found");
	$items.removeClass("active");
	$notFound.show();
	var selectedCountry = $("#country-selection").find(":selected").val();
	var selectedBank = $("#bank-selection").find(":selected").val();
	var selectedType = $("#type-selection").find(":selected").val();

	$items.each(function(index) {
		var trackvalue = $(this).data("trackvalue");
		trackvalue.area_name = selectedCountry;
		trackvalue.bank_name = cardvalues[1][selectedBank];
		trackvalue.cardtype_type = cardvalues[2][selectedType];
		$(this).data("trackvalue", trackvalue);

		var fit = true;
		if (selectedBank != "all" && $(this).data("bank") != selectedBank){
			fit = false;
		}
		if (selectedType != "all" && !$(this).data("type").includes(selectedType)){
			fit = false;
		}
		if (fit) {
			$(this).addClass("active");
			$notFound.hide();
		}
	});

	// if (country == "all" && selectedBank == "all" && selectedType == "all") {
	if (false) {
		removeHash();
	} else {
		location.hash = country+"-"+selectedBank+"-"+selectedType;
	}
}

function initOfferMedical() {
	setBankCookie();
}
function onClickOffer(btn) {
	var offerId = $(btn).data("offer");
	if (!offerId) return;

	var trackaction = $(btn).data("trackaction");
	var trackvalue = $(btn).data("trackvalue");
	if (trackaction) {
		tracking(trackaction, trackvalue, true);
	}

	var link = "offer-detail.php?id="+offerId;
	var bank = getCookie(C_BANK);
	if (isBank && bankdata[bank] && bankdata[bank].bankid) {
		link = updateQueryStringParameter(link, BANK_PARAM, bank);
		link = updateQueryStringParameter(link, BANK_ID_PARAM, bankdata[bank].bankid);
	}

	changeLocWithDelay(link);
}

function initOfferDetail() {
	setBankCookie();

	var offerId = getUrlParameter("id");
	if (offerdata[offerId]) {
		var offer = offerdata[offerId];
		$("#title").html(offer.name);
		$("#section-banner img").attr("src", (isBank?"../":"")+offer.image+lastupdate);
		$("#section-banner img").attr("alt", offer.name);
		$("#subtitle").html(offer.subtitle);

		offer.highlight.listing.forEach(function(highlight, index) {
			$("#section-highlights ul").append("<li>"+highlight+"</li>");
		});
		if (offer.highlight.intro) {
			offer.highlight.intro.forEach(function(intro, index) {
				$("#section-highlights .intro").append("<p>"+intro+"</p>");
			});
		} else {
			$("#section-highlights .intro").hide();
		}
		if (offer.highlight.remarks) {
			offer.highlight.remarks.forEach(function(remark, index) {
				$("#section-highlights .remarks").append("<p>"+remark+"</p>");
			});
		} else {
			$("#section-highlights .remarks").hide();
		}
		$("#available_date").html(offer.available_date);
		// var a = offer.available_card.split(",").join(" / ");
		// console.log(a);
		$("#available_card").html(offer.available_card);
		offer.details.forEach(function(detail, index) {
			$("#details-tab ul").append("<li>"+detail+"</li>");
		});
		offer.instructions.forEach(function(instruction, index) {
			$("#instructions-tab ul").append("<li>"+instruction+"</li>");
		});
		showOfferDetailsBtn("#details-tab");

		// trackings
		$(".offer-detail .btn-apply").each(function(index) {
			var trackvalue = $(this).data("trackvalue");
			trackvalue.content_id = offerId;
			trackvalue.content_name = offer.name;
			$(this).data("trackvalue", trackvalue);
		});
		$(".offer-detail .btn-viewall").each(function(index) {
			var trackvalue = $(this).data("trackvalue");
			trackvalue.content_id = offerId;
			trackvalue.content_name = offer.name;
			$(this).data("trackvalue", trackvalue);
		});
		function offerDetailLinkTracking(ele) {
			var trackvalue = {};
			trackvalue.content_id = offerId;
			trackvalue.content_name = offer.name;
			tracking("offerdetail_link", trackvalue, true);

			var href = $(ele).attr("href");
			if (href) {
				if (href.startsWith("http")) {
					window.open(href, "_blank");
				} else {
					// gain some time for send out tracking
					changeLocWithDelay(href);
				}
			}
		}
		$("#section-highlights a").click(function(e) {
			e.preventDefault();
			offerDetailLinkTracking($(this));
		});
		$("#details-tab ul a").click(function(e) {
			e.preventDefault();
			offerDetailLinkTracking($(this));
		});
		$("#instructions-tab ul a").click(function(e) {
			e.preventDefault();
			offerDetailLinkTracking($(this));
		});

		$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
			var trackaction = $(e.target).data("trackaction");
			var trackvalue = $(e.target).data("trackvalue");
			if (trackaction) {
				trackvalue.content_id = offerId;
				trackvalue.content_name = offer.name;
				tracking(trackaction, trackvalue, true);
			}

			var tabPanelId = $(e.target).attr("href");
			showOfferDetailsBtn(tabPanelId);
		});
	}
}
function showOfferDetailsBtn(tabPanelId) {
	$(tabPanelId).find("ul").addClass("view-all");
	$(tabPanelId).find(".btn-viewall").hide();
	var h = $(tabPanelId).find("ul").height();
	if (h > "72") {
		$(tabPanelId).find("ul").removeClass("view-all");
		$(tabPanelId).find(".btn-viewall").show();
	}
}
function showAllOfferDetails(btn) {
	var trackaction = $(btn).data("trackaction");
	var trackvalue = $(btn).data("trackvalue");
	if (trackaction) {
		tracking(trackaction, trackvalue, true);
	}

	$(btn).closest(".tab-pane").find("ul").addClass("view-all");
	$(btn).hide();
}
function onClickOfferDetailApply(btn) {
	var trackaction = $(btn).data("trackaction");
	var trackvalue = $(btn).data("trackvalue");
	if (trackaction) {
		tracking(trackaction, trackvalue, true);
	}

	var bank = getCookie(C_BANK);
	if (isBank) {
		if (bank && bankdata[bank] && bankdata[bank].cards) {
			changeLocWithDelay("cards.php?bank="+bank);
		} else {
			changeLocWithDelay("../cards.php");
		}
	} else {
		changeLocWithDelay("cards.php");
	}
}

function initCEBDetail() {
	$("#btn-sticky").click(function(e) {
		e.preventDefault();

		var trackaction = $(this).data("trackaction");
		var trackvalue = $(this).data("trackvalue");
		if (trackaction) {
			tracking(trackaction, trackvalue, true);
		}

		var href = $(this).attr("href");
		window.open(href, "_blank");
	});

	// show sticky on slide
	var timer;
	$(document).scroll(function (){
		if (timer) {
			window.clearTimeout(timer);
		}
		timer = window.setTimeout(function() {
			var y = $(this).scrollTop();
			if (y != 0 && y > 250) {
				$("#btn-sticky").removeClass("hide");
			} else {
				$("#btn-sticky").addClass("hide");
			}
		}, 30); // debounce time
	});
}

/**
 * banks pages
 */
function setBankCookie() {
	var bank = getUrlParameter("bank");
	if (isBank && bank) {
		setCookie(C_BANK, bank);

		if (bankvalues.includes(bank)) {
			$("header img.logo-bank").attr("src", "../img/banks/logo/logo_"+bank+"_top@2x.png");
			// change footer visa logo
			$("footer img.logo").attr("src", "../img/banks/logo/logo_"+bank+"_bottom@2x.png");
			$("footer img.logo").addClass("logo-bank");
		}
	}
}


/**
 * helper functions
 */
function initTrackingBtn() {
	$(".btn-tracking").unbind("click").bind("click", function(event){
		event.preventDefault();
		var action = $(this).data("trackaction");
		var data = $(this).data("trackvalue");
		if (action) {
			tracking(action, data);
		}

		var href = $(this).attr("href");
		if (href) {
			if (href.startsWith("http")) {
				window.open(href, "_blank");
			} else {
				// gain some time for send out tracking
				changeLocWithDelay(href);
			}
		}
	});
}
function tracking(action, data, includeCurrent = false) {
	var hash = getCookie(C_SURVEY_INTEREST);
	if (hash) {
		hash = hash.split("-");
		data.tag_age_name = hashvalues[0][hash[0]];
		data.tag_destination_name = hashvalues[1][hash[1]];
		data.tag_stage_name = hashvalues[2][hash[2]];
	}

	// for popup survey
	var age = getCookie(C_SURVEY_AGE);
	if (age) { data.tag_age_name = hashvalues[0][age]; }
	var dest = getCookie(C_SURVEY_DEST);
	if (dest) { data.tag_destination_name = hashvalues[1][dest]; }
	var stage = getCookie(C_SURVEY_STAGE);
	if (stage) { data.tag_stage_name = hashvalues[2][stage]; }

	var interest = getCookie(C_LAST_INTEREST);
	if (includeCurrent && interest) {
		interest = interest.split("-");
		data.country_type = hashvalues[1][interest[1]];
		data.stage_type = hashvalues[2][interest[2]];
	}

	cards_stage_type = data.stage_type;
	cards_country_type = data.country_type;
	cards_tag_age_name = data.tag_age_name;
	cards_tag_destination_name = data.tag_destination_name;
	cards_tag_stage_name = data.tag_stage_name;
	console.log("track action: ", action, data);
	_ha("send", "action", action, data);
}
function newHaTracking(action, data, includeCurrent = false) {
	var hash = getCookie(C_SURVEY_INTEREST);
	if (hash) {
		hash = hash.split("-");
		data.tag_age_name = hashvalues[0][hash[0]];
		data.tag_destination_name = hashvalues[1][hash[1]];
		data.tag_stage_name = hashvalues[2][hash[2]];
	}

	// for popup survey
	var age = getCookie(C_SURVEY_AGE);
	if (age) { data.tag_age_name = hashvalues[0][age]; }
	var dest = getCookie(C_SURVEY_DEST);
	if (dest) { data.tag_destination_name = hashvalues[1][dest]; }
	var stage = getCookie(C_SURVEY_STAGE);
	if (stage) { data.tag_stage_name = hashvalues[2][stage]; }

	var interest = getCookie(C_LAST_INTEREST);
	if (includeCurrent && interest) {
		interest = interest.split("-");
		data.country_type = hashvalues[1][interest[1]];
		data.stage_type = hashvalues[2][interest[2]];
	}

	console.log("track action: ", action, data);
}
function changeLocWithDelay(url, delay = PAGE_CHANGE_DELAY){
	setTimeout(function(){
		location.href = url;
	}, delay);
	return;
}
function replaceLocWithDelay(url, delay = PAGE_CHANGE_DELAY){
	setTimeout(function(){
		window.location.replace(url);
	}, delay);
	return;
}

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

function scrollTop() {
	$("html, body").animate({ scrollTop: 0 }, "fast");
}
function scrollTo($ele) {
	if ($ele.length) {
		$("html, body").animate({
			scrollTop: $ele.offset().top - $("header").height()
		}, "fast");
	}
}

function removeHash() {
    var scrollV, scrollH, loc = window.location;
    if ("pushState" in history)
        history.pushState("", document.title, loc.pathname + loc.search);
    else {
        // Prevent scrolling by storing the page's current scroll offset
        scrollV = document.body.scrollTop;
        scrollH = document.body.scrollLeft;

        loc.hash = "";

        // Restore the scroll offset, should be flicker free
        document.body.scrollTop = scrollV;
        document.body.scrollLeft = scrollH;
    }
}

function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
}
function updateQueryStringParameter(uri, key, value) {
	if(uri == "https://visaoffer.yijiuplus.com/index/selected?bankid=visa_wechat"){
		return uri;
	}
	var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
	var separator = uri.indexOf('?') !== -1 ? "&" : "?";
	if (uri.match(re)) {
	  	return uri.replace(re, '$1' + key + "=" + value + '$2');
	}
	else {
	  	return uri + separator + key + "=" + value;
	}
}

function setCookie(name,value,days = 365) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
	document.cookie = name + "=" + (value || "")  + expires + "; path=/";
	// alert("set "+name+": "+value+", "+days);
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		// if (c.indexOf(nameEQ) == 0) alert(name+": "+c.substring(nameEQ.length,c.length));
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
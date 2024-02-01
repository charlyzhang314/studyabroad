
$(function(){
    $.ajax({
        url:'https://visa-open.yijiuplus.com/wechat/share',
        type:'GET',
        data:
        {
            _url:window.location.href
        },
        dataType:"json",
        success:function(data){
            wx.config(data);
            setWxData("Visa留学家",
                "",
                "Visa留学家",
                location.href,
                "https://digitas.yijiuplus.com/ticketingw3/img/share.jpg"
            );
        }
    });
})


function  setWxData(title,desc,timelinetitle,link,img){
    wx.ready(function () {
        wx.onMenuShareAppMessage({
            title: title,
            desc: desc,
            link: link,
            imgUrl: img,
            success: function (res) {
                
            }
        });
        wx.onMenuShareTimeline({
            title: timelinetitle,
            link: link,
            imgUrl: img,
            success: function (res) {
                
            }
        });
    });
}
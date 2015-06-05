/*==================
by:Girders
QQ:710720456
据说这样加很上档次
====================*/

//var swidth=document.write(screen.width+"<br/>");
//var sheight=document.write(screen.height+"<br/>");
//document.write(document.body.clientHeight+"<br/>");
//document.write(document.body.clientWidth+"<br/>");
//document.write(screen.width+"<br/>");
//document.write(screen.height+"<br/>");
//alert(screen.width+"分辨率宽");1366
//alert(screen.height+"分辨率高");768


//var swidth=window.innerWidth;
//var sheight=window.innerHeight;

var swt_css='<style>*html {background-image: url(about:blank); background-attachment: fixed; }.swt_con{box-shadow: 0 0 20px rgba(10,2,4,0.75);position: fixed; left: 47%; top: 50%; z-index: 2147483647;margin-left:-210px;margin-top:-150px;_position: absolute;_top: expression(eval(document.documentElement.scrollTop+290));}.wx_tc_swt{position: fixed;left: 62%; top: 45%; z-index: 9999999;}</style>';
var swt_con='<div class="swt_con" style="display:none;"><img src="/swt/swt_con.jpg" width="440" height="290"  class="" usemap="#swt_map" border="0" alt="商务通"/><map name="swt_map" id="swt_map"><area shape="circle" coords="423,18,14" href="javascript:;" id="swt_cls" /><area shape="rect" coords="173,211,277,252" href="javascript:swt_window();" target="_self" rel="nofollow" /><area shape="rect" coords="280,215,371,242" href="javascript:;" target="_self" id="swt_cls1" /></map></div>';
var qqtc='<div id="qqtc_yx" style="height:0;position:fixed;right:0;bottom: -20px;z-index:2147483647;"><a  href="javascript:swt_window();" target="_self"  rel="nofollow"><img src="/swt/qqtc.png"></a><div style="position:absolute;top: 0;right: 0;width:30px;height:30px;overflow: hidden;margin:0;" id="qqtc_cls"></div></div>';

$(document).ready(function(){
$(document.body).append(swt_css);
$(document.body).append(swt_con);
$(document.body).append(qqtc);

 //$("#qqtc_yx").animate({ height: "197px"}, 2500).css({visibility: "visible"});
//qqtc=$("#qqtc_yx");
//if($("#qqtc_yx").is(":visible")){
		//setTimeout($("#qqtc_yx").animate({ height: "0" }, 2500),"10000");
		//setTimeout(function(){$("#qqtc_yx").animate({height:"0"},2500)},20000);
	//}

//商务通
swt_con=$(".swt_con");

setTimeout('swt_con.show()',"4000");

$("#swt_cls").click(function(){
	$(".swt_con").hide()
	$("#LRdiv0").show();
})

$("#swt_cls1").click(function(){
	$(".swt_con").hide()
	$("#LRdiv0").show();
})

$("#qqtc_yx").click(function(){
	$("#qqtc_yx").hide();
})

$("#wx_tc_window").mouseover(function(){
$(".wx_tc_swt").show();

})

//if($(".wx_tc_swt").mouseover)
//	{
//$(".wx_tc_swt").mouseout(function(){
//	$(".wx_tc_swt").hide();
//
//})
//	}
//商务通 end

//对话框清空
//var oneclick_swt=true;
//$("#chattextarea_sc").click(function(){
//	if(oneclick_swt)
//	{
//		$(this).val("");
//		oneclick_swt=false;
//	}
//	
//})

})

var b1='<div class="bottom_dibux"><div class="bottom_img01"><ul>';
var b2='<li id="frist" ><div id="doc"><a  href="/swt.htm" target="_blank"  rel="nofollow" ><img  src="/swt/1.png" /></a><div id="zxzj"><a href=""  target="_blank"><img  src="/swt/2.png" /></a></div></div></li><li class="bt_n_zx bt_n" ><a href="/swt.htm" target="_blank"  rel="nofollow" ><br /><br />咨询</a></li>'
var b3='<li class="bt_n bt1" ><a href="/swt.htm" target="_blank"  rel="nofollow"><br/><br/>本月<br />优惠</a></li><li class="bt_n bt2" ><a href="/swt.htm" target="_blank"  rel="nofollow"><br/><br/>免费<br />整形</a></li><li class="bt_n wx_tc_1023 bt3" ><a href="/yiyuanweizhi/" ><br/><br/>路线</a></li><li class="bt_n bt4" id="foot_wx_1023" ><a href="javascript:;" ><br/><br/>微信</a></li><li class="wx_tc_1023 bt_n bt5" ><a href="/"><br/><br/>首页</a></li>'
var b4='<div class="wx_big_1023" style="display:none;"><a href="#"><img src="/swt/ma.png?1023" width="160" height="173"></a></div></ul></div></div>'

var b1_css='<style type="text/css">.bottom_dibux{position: fixed; right:0;bottom:0;z-index: 50;margin:0 auto;text-align: center;background-color: #a48451;width:59px;height:100%;_background-color:;}.bottom_img01{width:59px;height:100%;display:black; margin-top:60px;}.bottom_img01 ul{ right:0;position: absolute;}.bottom_img01 ul li{font-size:12px; list-style:none; margin-bottom:10px; color:#fff;}.bottom_img01 ul .bt_n{width:59px;height:66px;padding-top:3px;float:left;}.bottom_img01 ul .bt_n img{border: 0;outline: none;}'
var b2_css='.bottom_img01 ul .bt_n a{ width:59px; height:100%; display:block;}.bottom_img01 ul .bt_n_zx{width:59px;height:59px;float:left;padding-top:12px; background:url(/swt/tubiao.png) 18px -171px no-repeat;}.bottom_img01 ul .bt_n_zx:hover{ background:#b09468 url(/swt/tubiao.png) -52px -171px no-repeat}.bottom_img01 ul .bt1{background:url(/swt/tubiao.png) -120px -175px no-repeat;}.bottom_img01 ul .bt1:hover{background:#b09468 url(/swt/tubiao.png) -190px -175px no-repeat}.bottom_img01 ul .bt2{background:url(/swt/tubiao.png) 16px -270px no-repeat; margin-top:8px;}.bottom_img01 ul .bt2:hover{background:#b09468 url(/swt/tubiao.png) -53px -270px no-repeat}.bottom_img01 ul .bt3{background:url(/swt/tubiao.png) -122px -273px no-repeat;margin-top:13px;}.bottom_img01 ul .bt3:hover{background:#b09468 url(/swt/tubiao.png) -192px -273px no-repeat}.bottom_img01 ul .bt4{background:url(/swt/tubiao.png) 16px -385px no-repeat;}.bottom_img01 ul .bt4:hover{background:#b09468 url(/swt/tubiao.png) -54px -385px no-repeat}.bottom_img01 ul .bt5{background:url(/swt/tubiao.png) -122px -380px no-repeat;}'
var b3_css='.bottom_img01 ul .bt5:hover{background:#b09468 url(/swt/tubiao.png) -192px -380px no-repeat}.bottom_img01 ul .bt_text{width:212px;height:44px;float:left;padding-top:12px;margin-right:50px;}.bottom_img01 ul .bt_text textarea{color:#fff;float: left;}.bottom_img01 ul li a{color:#ddd3c5;}.wx_big_1023{position: absolute;width:160px;height:173px;left:-120px;top:390px;z-index:9999999;}.bottom_zx_1023{position: absolute;width:50px;height:50px;left:285px;top:-5px;z-index:9999999;}'
var b4_css='.bottom_zxsz_1023{position: absolute;width:25px;height:25px;left:325px;top:1px;z-index:9999999;background:url("/images/foot_js/b_ico.png?1023") no-repeat;padding-top:1px;font-size: 16px;}.bottom_zxsz_1023 a{color:#fff;}#doc{position:absolute; right:0; z-index:1000; }#zxzj{position:absolute; left:-76px; top:-20px; z-index:100; display:none;  }.bottom_img01 #frist{width:59px; position:relative; height:135px;}.bottom_img01 #doc:hover #zxzj{ display:block;}</style>'

document.write(b1+b2+b3+b4);
document.write(b1_css+b2_css+b3_css+b4_css);

$(document).ready(function(){
$("#foot_wx_1023").mouseover(function(){
	$(".wx_big_1023").show(200);
})
$(".wx_tc_1023").mouseover(function(){
	$(".wx_big_1023").hide(200);
})
if($(".wx_big_1023").mouseover){
$(".wx_big_1023").mouseout(function(){
	$(".wx_big_1023").hide(200);
})
}


var randnum=Math.floor(30 * Math.random() + 30)
$(".bottom_zxsz_1023 a").text(randnum);

var oneclick_swt=true;
$(".bt_text textarea").click(function(){
	if(oneclick_swt)
	{
		$(this).val("");
		oneclick_swt=false;
	}
	
})

})
//alert(randnum);


//进入商务通
function swt_window()
{
openZoosUrl();LR_HideInvite();
}
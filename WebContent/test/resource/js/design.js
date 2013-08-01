var $j = jQuery.noConflict();
$j(document).ready(function(){
	$j.each($j("table tr"), function(){
		$j(this).children().eq(0).css({
			"border-left": "none",
			"border-right": "1px solid #dadcdb"
		})
		$j(this).children().eq(-1).css({
			"border-right": "none"
		})
	});
	
	var article = $j('.f_fam .article');
	article.addClass('hide');
	article.find('ul').slideUp(100);
	
	function mainTab(){
		$j(".eventArea p:eq(0)").show();
		$j(".eventArea li > a").click(function(event) {
		event.preventDefault();
		$j(this).parent().parent().find("p").hide();

		$j(".eventArea li img").each(function() {
		$j(this).attr("src", $j(this).attr("src").replace("_on", ""));
		});

		if ($j(this).find("img").attr("src").indexOf("_on") < 0) {
		$j(this).find("img").attr("src", $j(this).find("img").attr("src").replace(".gif", "_on.gif")); 
		}
		$j(this).next().fadeIn(100);
		});
	} mainTab();
	
	$j(".f_fam .article .base, .listClose").click(function(){
		var myArticle = $j(this).parents('.article:first');
		if(myArticle.hasClass('hide')){
			article.addClass('hide').removeClass('show'); 
			article.find('ul').slideUp(100); 
			myArticle.removeClass('hide').addClass('show');
			myArticle.find('ul').slideDown(100);
		} else {
			myArticle.removeClass('show').addClass('hide');
			myArticle.find('ul').slideUp(100);
		}
		if ( $j(this).attr("class") == "listClose" ) {
			return false;
		};
	});

	$j(".pdTbl01 img").click(function(){
		$j(".pdTbl01 img").attr("src",$j(".pdTbl01 img").attr("src").replace("_off","_on"));
		$j(".pdTbl02 img").attr("src",$j(".pdTbl02 img").attr("src").replace("_on","_off"));
		$j(".pdTbl03 img").attr("src",$j(".pdTbl03 img").attr("src").replace("_on","_off"));
		$j(".pdTbl04 img").attr("src",$j(".pdTbl04 img").attr("src").replace("_on","_off"));
		$j("#PdTbl01").css("display","block");
		$j("#PdTbl02").css("display","none");
		$j("#PdTbl03").css("display","none");
		$j("#PdTbl04").css("display","none");
	});
	$j(".pdTbl02 img").click(function(){
		$j(".pdTbl01 img").attr("src",$j(".pdTbl01 img").attr("src").replace("_on","_off"));
		$j(".pdTbl02 img").attr("src",$j(".pdTbl02 img").attr("src").replace("_off","_on"));
		$j(".pdTbl03 img").attr("src",$j(".pdTbl03 img").attr("src").replace("_on","_off"));
		$j(".pdTbl04 img").attr("src",$j(".pdTbl04 img").attr("src").replace("_on","_off"));
		$j("#PdTbl01").css("display","none");
		$j("#PdTbl02").css("display","block");
		$j("#PdTbl03").css("display","none");
		$j("#PdTbl04").css("display","none");
	});
	$j(".pdTbl03 img").click(function(){
		$j(".pdTbl01 img").attr("src",$j(".pdTbl01 img").attr("src").replace("_on","_off"));
		$j(".pdTbl02 img").attr("src",$j(".pdTbl02 img").attr("src").replace("_on","_off"));
		$j(".pdTbl03 img").attr("src",$j(".pdTbl03 img").attr("src").replace("_off","_on"));
		$j(".pdTbl04 img").attr("src",$j(".pdTbl04 img").attr("src").replace("_on","_off"));
		$j("#PdTbl01").css("display","none");
		$j("#PdTbl02").css("display","none");
		$j("#PdTbl03").css("display","block");
		$j("#PdTbl04").css("display","none");
	});
	$j(".pdTbl04 img").click(function(){
		$j(".pdTbl01 img").attr("src",$j(".pdTbl01 img").attr("src").replace("_on","_off"));
		$j(".pdTbl02 img").attr("src",$j(".pdTbl02 img").attr("src").replace("_on","_off"));
		$j(".pdTbl03 img").attr("src",$j(".pdTbl03 img").attr("src").replace("_on","_off"));
		$j(".pdTbl04 img").attr("src",$j(".pdTbl04 img").attr("src").replace("_off","_on"));
		$j("#PdTbl01").css("display","none");
		$j("#PdTbl02").css("display","none");
		$j("#PdTbl03").css("display","none");
		$j("#PdTbl04").css("display","block");
	});

	$j(".exp01").mouseover(function(){
		$j("#exp01").css("display","block");
		$j("#exp02").css("display","none");
		$j("#exp03").css("display","none");
		$j("#exp04").css("display","none");
		$j("#exp05").css("display","none");
	});
	$j(".exp02").mouseover(function(){
		$j("#exp01").css("display","none");
		$j("#exp02").css("display","block");
		$j("#exp03").css("display","none");
		$j("#exp04").css("display","none");
		$j("#exp05").css("display","none");
	});
	$j(".exp03").mouseover(function(){
		$j("#exp01").css("display","none");
		$j("#exp02").css("display","none");
		$j("#exp03").css("display","block");
		$j("#exp04").css("display","none");
		$j("#exp05").css("display","none");
	});
	$j(".exp04").mouseover(function(){
		$j("#exp01").css("display","none");
		$j("#exp02").css("display","none");
		$j("#exp03").css("display","none");
		$j("#exp04").css("display","block");
		$j("#exp05").css("display","none");
	});
	$j(".exp05").mouseover(function(){
		$j("#exp01").css("display","none");
		$j("#exp02").css("display","none");
		$j("#exp03").css("display","none");
		$j("#exp04").css("display","none");
		$j("#exp05").css("display","block");
	});

	$j("#tabmenu li.m01").mouseover(function(){
		$j("#tabmenu li.m01 ul").css("display","block");
		$j("#tabmenu li.m02 ul").css("display","none");
		$j("#tabmenu li.m01").addClass("on");
		$j("#tabmenu li.m02").removeClass("on");
	});
	$j("#tabmenu li.m02").mouseover(function(){
		$j("#tabmenu li.m01 ul").css("display","none");
		$j("#tabmenu li.m02 ul").css("display","block");
		$j("#tabmenu li.m02").addClass("on");
		$j("#tabmenu li.m01").removeClass("on");
	});

	$j(".lnb > li >ul").css("display","none");
	$j(".lnb li ul li").hover(function(){
		$j(this).addClass("active").addClass("ons");
		$j(".lnb li.ons ul").slideDown(200);
		$j(".lnb li.slc ul").slideDown(200);
		$j(".lnb li.ons ul").show();
		return false;
	});

	$j(".tabs li").mouseover(function(){
		$j(this).addClass("on")
		return false;
	});
	$j(".tabs li").mouseleave(function(){
		$j(this).removeClass("on")
		return false;
	});

	$j(".tab_menu li")
		.mouseover(function(){
			$j(this).addClass("on");
			$j(".tab_menu li ul").css("display","none");
			$j(".tab_menu li.on ul").css("display","block");
			return false;
		})
		.mouseleave(function(){
			$j(this).removeClass("on");
			$j(".tab_menu li ul").css("display","none");
			$j(".tab_menu li.ons ul").css("display","block");
			return false;
		});

	$j(".view01").click(function(){
		$j(".tab01").addClass("on");
		$j(".tab02").removeClass("on");
		$j("#demo01").css("display","block");
		$j("#demo02").css("display","none");
		return false;
	});
	$j(".view02").click(function(){
		$j(".tab02").addClass("on");
		$j(".tab01").removeClass("on");
		$j("#demo01").css("display","none");
		$j("#demo02").css("display","block");
		return false;
	});

	$j(".lnb li ul").mouseleave(function(){
		$j(".lnb li").removeClass("active");
		$j(this).slideUp(500);
		$j(".lnb li.slc ul").slideDown(500);
		$j(".lnb li.slc ul").css("display","block");
		$j(".lnb li.slc ul").stop().slideDown();
	});
	$j(".lnb li").mouseleave(function(){
		$j(".lnb li").removeClass("active").removeClass("ons");
		$j(".lnb li.slc").addClass("ons");
		$j(".lnb li.slc ul").slideDown(500);
		$j(".lnb li.slc ul").show();
		$j(".lnb li.slc ul").stop().slideDown();
	});

	$j(".lnb").mouseleave(function(){
		$j(".lnb li").removeClass("active").removeClass("ons");
		$j(".lnb li.slc").addClass("ons");
		$j(".lnb li.slc ul").slideDown(500);
		$j(".lnb li.slc ul").show();
		$j(".lnb > li > ul").hide();
		$j(".lnb > li.ons > ul").show();
		$j(".lnb li.slc ul").stop().slideDown();
	});

	$j(".lnb li ul li a").each(function(index){
		$j(this).eq(index).click(function(){
			var lnbimgsrc = $j(this);
			for(i=0;i<$j(this).length;i++)
		{
		var insrcs = $j(this).eq(i);
		if(insrcs)
		{
				$j(this).eq(i);
			}
		}
		if(lnbimgsrc)
		{
			$j(this);
		}
	});

	$j("#serviceCode01").click(function(){
		$j(".serviceTab1").css("display","block")
		$j(".serviceTab2").css("display","none");
		$j(".serviceTab3").css("display","none");
		$j(".serviceTab4").css("display","none");
		$j(".serviceTab5").css("display","none");
		$j(".serviceTab6").css("display","none");
		$j(".serviceTab7").css("display","none");
		$j(".serviceTab8").css("display","none");
		$j(".serviceTab9").css("display","none");
		$j(".serviceTab10").css("display","none");
		$j(".serviceTab11").css("display","none");
		$j(".serviceTab12").css("display","none");
	});
	$j("#serviceCode02").click(function(){
		$j("#serviceTab1").css("display","none");
		$j("#serviceTab2").css("display","block");
		$j(".serviceTab3").css("display","none");
		$j(".serviceTab4").css("display","none");
		$j(".serviceTab5").css("display","none");
		$j(".serviceTab6").css("display","none");
		$j(".serviceTab7").css("display","none");
		$j(".serviceTab8").css("display","none");
		$j(".serviceTab9").css("display","none");
		$j(".serviceTab10").css("display","none");
		$j(".serviceTab11").css("display","none");
		$j(".serviceTab12").css("display","none");
	});
	$j("#serviceCode03").click(function(){
		$j(".serviceTab1").css("display","none");
		$j(".serviceTab2").css("display","none");
		$j(".serviceTab3").css("display","block");
		$j(".serviceTab4").css("display","none");
		$j(".serviceTab5").css("display","none");
		$j(".serviceTab6").css("display","none");
		$j(".serviceTab7").css("display","none");
		$j(".serviceTab8").css("display","none");
		$j(".serviceTab9").css("display","none");
		$j(".serviceTab10").css("display","none");
		$j(".serviceTab11").css("display","none");
		$j(".serviceTab12").css("display","none");
	});
	$j("#serviceCode04").click(function(){
		$j(".serviceTab1").css("display","none");
		$j(".serviceTab2").css("display","none");
		$j(".serviceTab3").css("display","none");
		$j(".serviceTab4").css("display","block");
		$j(".serviceTab5").css("display","none");
		$j(".serviceTab6").css("display","none");
		$j(".serviceTab7").css("display","none");
		$j(".serviceTab8").css("display","none");
		$j(".serviceTab9").css("display","none");
		$j(".serviceTab10").css("display","none");
		$j(".serviceTab11").css("display","none");
		$j(".serviceTab12").css("display","none");
	});
	$j("#serviceCode05").click(function(){
		$j(".serviceTab1").css("display","none");
		$j(".serviceTab2").css("display","none");
		$j(".serviceTab3").css("display","none");
		$j(".serviceTab4").css("display","none");
		$j(".serviceTab5").css("display","block");
		$j(".serviceTab6").css("display","none");
		$j(".serviceTab7").css("display","none");
		$j(".serviceTab8").css("display","none");
		$j(".serviceTab9").css("display","none");
		$j(".serviceTab10").css("display","none");
		$j(".serviceTab11").css("display","none");
		$j(".serviceTab12").css("display","none");
	});
	$j("#serviceCode07").click(function(){
		$j(".serviceTab1").css("display","none");
		$j(".serviceTab2").css("display","none");
		$j(".serviceTab3").css("display","none");
		$j(".serviceTab4").css("display","none");
		$j(".serviceTab5").css("display","none");
		$j(".serviceTab6").css("display","none");
		$j(".serviceTab7").css("display","block");
		$j(".serviceTab8").css("display","none");
		$j(".serviceTab9").css("display","none");
		$j(".serviceTab10").css("display","none");
		$j(".serviceTab11").css("display","none");
		$j(".serviceTab12").css("display","none");
	});
	$j("#serviceCode08").click(function(){
		$j(".serviceTab1").css("display","none");
		$j(".serviceTab2").css("display","none");
		$j(".serviceTab3").css("display","none");
		$j(".serviceTab4").css("display","none");
		$j(".serviceTab5").css("display","none");
		$j(".serviceTab6").css("display","none");
		$j(".serviceTab7").css("display","none");
		$j(".serviceTab8").css("display","block");
		$j(".serviceTab9").css("display","none");
		$j(".serviceTab10").css("display","none");
		$j(".serviceTab11").css("display","none");
		$j(".serviceTab12").css("display","none");
	});
	$j("#serviceCode09").click(function(){
		$j(".serviceTab1").css("display","none");
		$j(".serviceTab2").css("display","none");
		$j(".serviceTab3").css("display","none");
		$j(".serviceTab4").css("display","none");
		$j(".serviceTab5").css("display","none");
		$j(".serviceTab6").css("display","none");
		$j(".serviceTab7").css("display","none");
		$j(".serviceTab8").css("display","none");
		$j(".serviceTab9").css("display","block");
		$j(".serviceTab10").css("display","none");
		$j(".serviceTab11").css("display","none");
		$j(".serviceTab12").css("display","none");
	});
	$j("#serviceCode10").click(function(){
		$j(".serviceTab1").css("display","none");
		$j(".serviceTab2").css("display","none");
		$j(".serviceTab3").css("display","none");
		$j(".serviceTab4").css("display","none");
		$j(".serviceTab5").css("display","none");
		$j(".serviceTab6").css("display","none");
		$j(".serviceTab7").css("display","none");
		$j(".serviceTab8").css("display","none");
		$j(".serviceTab9").css("display","none");
		$j(".serviceTab10").css("display","block");
		$j(".serviceTab11").css("display","none");
		$j(".serviceTab12").css("display","none");
	});
	$j("#serviceCode11").click(function(){
		$j(".serviceTab1").css("display","none");
		$j(".serviceTab2").css("display","none");
		$j(".serviceTab3").css("display","none");
		$j(".serviceTab4").css("display","none");
		$j(".serviceTab5").css("display","none");
		$j(".serviceTab6").css("display","none");
		$j(".serviceTab7").css("display","none");
		$j(".serviceTab8").css("display","none");
		$j(".serviceTab9").css("display","none");
		$j(".serviceTab10").css("display","none");
		$j(".serviceTab11").css("display","block");
		$j(".serviceTab12").css("display","none");
	});
	$j("#serviceCode12").click(function(){
		$j(".serviceTab1").css("display","none");
		$j(".serviceTab2").css("display","none");
		$j(".serviceTab3").css("display","none");
		$j(".serviceTab4").css("display","none");
		$j(".serviceTab5").css("display","none");
		$j(".serviceTab6").css("display","none");
		$j(".serviceTab7").css("display","none");
		$j(".serviceTab8").css("display","none");
		$j(".serviceTab9").css("display","none");
		$j(".serviceTab10").css("display","none");
		$j(".serviceTab11").css("display","none");
		$j(".serviceTab12").css("display","block");
	});

	$j(".lnb li ul li a").eq(index).mouseout(function(){
		var lnbimgsrc = $j(this);
		if(lnbimgsrc)
		{
			$j(this);
		}
			});
		});
		$j(".lnb li ul").each(function(index){
		$j(".lnb li ul").eq(index).mouseleave(function(){
			for(i=0;i<$j(this).find("li").length;i++)
		{
			if($j(this).find("li").eq(i).hasClass("selected"))
				{
					var strsrc = $j("a",$j(this)).eq(i);
					if(strsrc)
					{
						$j("a",$j(this)).eq(i);
					}
				}
			}
		})	;
	});

	$j(".lnb > li.ls01").click(function(){
		$j(".lnb > li.ls01 > ul").addClass("ons slc");
		$j(this).slideDown(100);
		$j(".lnb > li.ls01 > ul").show();
		$j(".lnb > li.slc > ul").stop().slideDown();
	});
	$j(".lnb > li.ls02").click(function(){
		$j(".lnb > li.ls02 > ul").addClass("ons slc");
		$j(this).slideDown(100);
		$j(".lnb > li.ls02 > ul").show();
		$j(".lnb > li.slc > ul").stop().slideDown();
	});
	$j(".lnb > li.ls03").click(function(){
		$j(".lnb > li.ls03 > ul").addClass("ons slc");
		$j(this).slideDown(100);
		$j(".lnb > li.ls03 > ul").show();
		$j(".lnb > li.slc > ul").stop().slideDown();
	});
	$j(".lnb > li.ls04").click(function(){
		$j(".lnb > li.ls04 > ul").addClass("ons slc");
		$j(this).slideDown(100);
		$j(".lnb > li.ls04 > ul").show();
		$j(".lnb > li.slc > ul").stop().slideDown();
	});
	$j(".lnb > li.ls05").click(function(){
		$j(".lnb > li.ls05 > ul").addClass("ons slc");
		$j(this).slideDown(100);
		$j(".lnb > li.ls05 > ul").show();
		$j(".lnb > li.slc > ul").stop().slideDown();
	});
	$j(".lnb > li.ls06").click(function(){
		$j(".lnb > li.ls06 > ul").addClass("ons slc");
		$j(this).slideDown(100);
		$j(".lnb > li.ls06 > ul").show();
		$j(".lnb > li.slc > ul").stop().slideDown();
	});
	$j(".lnb > li.ls07").click(function(){
		$j(".lnb > li.ls07 > ul").addClass("ons slc");
		$j(this).slideDown(100);
		$j(".lnb > li.ls07 > ul").show();
		$j(".lnb > li.slc > ul").stop().slideDown();
	});
	$j(".lnb > li.ls08").click(function(){
		$j(".lnb > li.ls08 > ul").addClass("ons slc");
		$j(this).slideDown(100);
		$j(".lnb > li.ls08 > ul").show();
		$j(".lnb > li.slc > ul").stop().slideDown();
	});
	$j(".lnb > li.ls09").click(function(){
		$j(".lnb > li.ls09 > ul").addClass("ons slc");
		$j(this).slideDown(100);
		$j(".lnb > li.ls09 > ul").show();
		$j(".lnb > li.slc > ul").stop().slideDown();
	});
	$j(".lnb > li.ls10").click(function(){
		$j(".lnb > li.ls10 > ul").addClass("ons slc");
		$j(this).slideDown(100);
		$j(".lnb > li.ls10 > ul").show();
		$j(".lnb > li.slc > ul").stop().slideDown();
	});
	
	/* reponsive table */
	var switched = false;
	var updateTables = function() {
    
		if (($j(window).width() < 700) && !switched ){
			switched = true;
			$j("table.tbl_rwd01").each(function(i, element) {
				splitTable($j(element));
			});
		return true;
		}
		else if (switched && ($j(window).width() > 700)) {
			switched = false;
			$j("table.tbl_rwd01").each(function(i, element) {
				unsplitTable($j(element));
			});
		}
	};
   
	$j(window).load(updateTables);
	$j(window).bind("resize", updateTables);

	/* 금융상품몰 메인 */
	(function(){
		var
			$article = $j('.tab_img li'),
			$articleSapn = $article.find("span");
		$article.eq(0).addClass('show').siblings().addClass('hide');
		$articleSapn.on("mouseenter click", function(){
			var idx = $j(this).parent().index();
			$article.eq(idx)
				.removeClass('hide').addClass('show')
				.siblings().removeClass('show').addClass('hide');
		})
	})();
	/* //금융상품몰 메인 */	
	
	function splitTable(original)
	{
		original.wrap("<div class='table-wrapper' />");		
		var copy = original.clone();
		copy.find("td:not(:first-child), th:not(:first-child)").css("display", "none");
		copy.removeClass("tbl_rwd01");		
		original.closest(".table-wrapper").append(copy);
		copy.wrap("<div class='pinned' />");
		original.wrap("<div class='scrollable' />");
	}	
	function unsplitTable(original) {
		original.closest(".table-wrapper").find(".pinned").remove();
		original.unwrap();
		original.unwrap();
	}
});

function lnbonoff(a,b,c,d){
	$j("li",$j(".lnb > li")).eq(b).removeClass("selected");
	//$j("li",$j(".lnb > li")).eq(b).find("a").css("color", "#343434");
	var thissrc = $j(".lnb > li").eq(a).find("a").eq(a);
	var thissrcin = $j("li",$j(".lnb > li").eq(a)).eq(b).find("a").css("color", "#2c846e");
	var inul = $j("ul",$j(".lnb > li").eq(a));
	var insrcs = $j(".topMenuSub dl dt img").eq(c).attr("src");	
	if(inul != null){
		inul.show();
	}
	if ( $j("#main").length ) {
		$j("#topMenu dl dd").css("display","none")
	};
	if(thissrc){
		if ( !$j("#main").length ) {
			$j(".lnb > li").addClass("active");
			$j(".lnb > li").eq(a).addClass("ons");
			$j(".lnb > li").eq(a).addClass("slc");
			if ( $j(".topMenuSub dl dt img").length != 0) { $j(".topMenuSub dl dt img").eq(c).attr("src",insrcs.replace("_off.","_on.")); }; // 2013-02-18 수정
			$j(".topMenuSub dl dd").eq(c).find('ul').show();
			$j(".topMenuSub dl dd").eq(c).find('li').eq(d).find('a').css({
				"color": "#EA0061",
				"text-decoration": "underline"
			});
		};
	}
	if(thissrcin){
		$j("li",$j(".lnb > li").eq(a)).eq(b).find("a").css({
			"color": "#EA0061",
			"text-decoration": "underline"
		});
		$j("li",$j(".lnb > li").eq(a)).eq(b).addClass("selected");
	}
} 
 
function viewnhide(obj){
	var obj = document.getElementById(obj);
	obj.style.display = (obj.style.display == "block") ? "none" : "block";
	var childli = clearFnode(obj);
	for (var i=0; i<childli.length; i++){
		childli[i].childNodes[0].onclick = function(){
			var url = this.href;
			obj.style.display = (obj.style.display == "block") ? "none" : "block";
			window.open(url,"_blank");
			return false;
		}
	}
}

function setCookie( name, value, expiredays ){
   var todayDate = new Date();
   todayDate.setDate( todayDate.getDate() + expiredays );
   document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
  }

  function closeWin(){ 
   setCookie( "popup", "done" , 1); 
   self.close(); 
  }
  
  function pop_chk2(){
	var f = document.evtForm; 
	if(f.pop_open.checked == true) {
		f.pop_open.value = "Y";
	} else {
		f.pop_open.value = "N";
	}

	if(f.pop_open.value == "Y"){
		closeWin();
	}else{
		self.close(); 
	}
}
 
/** 개발팀 정의 함수입니다.  */
var designInit = function() {
	$j(".tabs li").mouseover(function(){
		$j(this).addClass("on");
		return false;
	});
	$j(".tabs li").mouseleave(function(){
		$j(this).removeClass("on");
		return false;
	});
};

(function(){
/*
** list에 class만 넣어주시면 list index번호를 찾아 target index만 block 시키고 나머지 none시킴
** objcet : class on이 되는 대상, arg1 : block이 되는 대상, arg2 : 추가할 className, arg3 : 기본 false, true설정시 tabindex
*/
	$j.prototype._onblock = function(arg1, arg2, arg3){
		var
			$item = $j(this),
			$target = $j(arg1),
			cls = arg2;
		function _init(){
			if ( arg3 ) $target.attr("tabIndex", 0);
			$item
				.each(function(i){
					$target.eq(i).css("display", "none");
					if ( $j(this).hasClass(cls) ) {
						$target.eq(i).css("display", "block");
					};
				})
				.on('click', _event);
		}; _init();

		function _event(){
			$item.each(function(i){
				if ( $j(this).hasClass(cls) ) {
					$j(this).removeClass(cls);
					$target.eq(i).css("display", "none");
				};
			});
			$j(this).addClass(cls);
			$item.each(function(i){
				if ( $j(this).hasClass(cls) ) {
					$target.eq(i).css("display", "block");
					if ( arg3 ) {
						$focus = document.getElementById($target[i].id)
						$focus.focus();
					};
				};
			});
			if ( $j(this).find("a").attr("href").length <= 1 ) return false;
		};
		return this;
	};
	$j.prototype._sitemapArrow = function(arg1, cls){
		var
			$item = $j(this),
			$target = $j(arg1),
			$itemH = $item.height(),
			$targetH = 5,
			$itemM = ($itemH / 2) - $targetH;
		function _init(){
			$item
				.each(function(i){
					if ( $j(this).hasClass(cls) ) {
						$target.css('top', ($itemH * i) + $itemM);
					};
				})
				.on('click', _event)
		}; _init();

		function _event(){
			var idx = $j(this).index();
			$target.css('top', ($itemH * idx) + $itemM);
			return false;
		};
		return this;
	};
/*
** objcet : click 대상, arg1 : block이 되는 대상, arg2 : close 대상
*/
	$j.prototype._layerPop = function(arg1, arg2){
		var
			$item = $j(this),
			$target = $j(arg1),
			$close = $j(arg2);
		$item.on('click', _event);
		$close.on('click', _close);

		function _event(){
			$target.css("display", "block");
			return false;
		};
		function _close(){
			$target.css("display", "none");
			return false;
		};
		return this;
	};
})();
$j(document).ready(function(){
	$j("#sitemap .site_left li")._onblock("#sitemap .site_right > div", "on", true)._sitemapArrow("#sitemap .site_left .arrow", "on");
});
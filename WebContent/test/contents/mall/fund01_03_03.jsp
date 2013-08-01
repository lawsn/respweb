<%@ page language="java" contentType="text/html; charset=euc-kr" %> 
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ko" xml:lang="ko">
<head>
	<title>펀드가입 &lt; 펀드 &lt; 금융상품몰 &lt; 하나은행 오픈뱅킹</title>
	<meta http-equiv="Content-type" content="text/html; charset=euc-kr" />
	<meta http-equiv="Cache-control" content="No-cache" />
	<meta http-equiv="Pragma" content="No-cache" />
	<meta name="Description" content="" />
	<meta name="Keywords" content="" />
	<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=yes, target-densitydpi=medium-dpi" name="viewport" />
	<link rel="stylesheet" type="text/css" href="../../resource/css/base.css" />
	<link rel="stylesheet" type="text/css" href="../../resource/css/common.css" />
	<link rel="stylesheet" type="text/css" href="../../resource/css/contents.css" />
	<link rel="stylesheet" type="text/css" href="../../resource/css/contents02.css" />
	<link rel="stylesheet" type="text/css" href="../../resource/css/fundmall.css" />
	<link rel="stylesheet" type="text/css" href="../../resource/css/jquery-ui.css"></script>		
	<script type="text/javascript" src="../../resource/js/jquery-1.9.1.js"></script>
	<script type="text/javascript" src="../../resource/js/jquery-ui.js"></script>
	<script type="text/javascript" src="../../resource/js/design.js"></script>	
	<script type="text/javascript" src="../../resource/js/respond.js"></script>
	<script type="text/javascript" src="../../resource/js/css_browser_selector.js"></script>
	<%--<script type="text/javascript" src="../../resource/js/exporting.js"></script>--%>
	<script type="text/javascript" src="../../resource/js/highcharts.js"></script>
	<script type="text/javascript">	
		$j(document).ready(function(){
			lnbonoff(5,0,1,5);

			// lnbonoff(a,b,c,d);

			// a : lnb 1depth
			// b : lnb 1depth - 1depth
			// a : gnb 1depth
			// d : gnb 1depth -1depth
			// 0 부터 1edpth

		});
	</script>	
</head>
<body>
	<div id="HANA_SKIP_NAVI_DIV">
		<h2>SKIP HANA_CONTENTS_DIV</h2>
		<ul>
			<li><a href="#HANA_CONTENTS_DIV">본문 바로가기</a></li>
			<li><a href="#topMenu">주메뉴 바로가기</a></li>
			<li><a href="#HANA_LNB_DIV">하위메뉴 바로가기</a></li>
			<li><a href="#HANA_FOOTER_DIV">하단영역 바로가기</a></li>
		</ul> 
	</div>
	<div id="HANA_WRAP_DIV">
		<%@ include file="../../WEB-INF/include/top.jsp" %>
		<%@ include file="../../WEB-INF/include/lnb02_02.jsp" %>

		<!-- HANA_CONTENTS_DIV -->
		<div id="HANA_CONTENTS_DIV">	
			<ul class="f_tab_img">		
				<li><strong><a href="fund01_01_01.jsp">수익률 상위펀드 Top5</a></strong></li>				
				<li><strong><a href="fund01_02_01.jsp">가입 많이하는 펀드 Top5</a></strong></li>					
				<li class="show"><strong><a href="fund01_03_01.jsp">테마펀드</a></strong></li>		
			</ul>
			<div class="f_tab_cont">
				<div class="cont_btn">
					<span class="f_btn other4"><a href="fund01_03_01.jsp">&nbsp;&nbsp;새로나온 펀드&nbsp;&nbsp;</a></span>
					<span class="f_btn other4"><a href="fund01_03_02.jsp">&nbsp;&nbsp;월이자 지급식 펀드&nbsp;&nbsp;</a></span>
					<span class="f_btn other3"><a href="fund01_03_03.jsp">&nbsp;&nbsp;인덱스 펀드&nbsp;&nbsp;</a></span>
				</div>

				<div class="cont_list">
					<div class="cont_box">
						<h5><img src="../../resource/img/cont/f_main_top1.gif" alt="Top1" /></h5>
						<p class="percent"><em>-25.32</em>%</p>

						<p><span class="f_lisk01">최고위험</span><br />
						삼성WTI원유특별자산1호[WTI원유-파생형](A)
						<span class="f_sub01">계열사</span>

						<p class="btn"><span class="f_btn"><a href="">가입하기</a></span></p>
					</div>
					<div class="cont_box">
						<h5><img src="../../resource/img/cont/f_main_top2.gif" alt="Top2" /></h5>
						<p class="percent"><em>-23.12</em>%</p>

						<p><span class="f_lisk01">최고위험</span><br />
						한국투자월스트리트투자은행1호[주식](A)
						<span class="f_sub01">계열사</span>

						<p class="btn"><span class="f_btn"><a href="">가입하기</a></span></p>
					</div>
					<div class="cont_box mr0">
						<h5><img src="../../resource/img/cont/f_main_top3.gif" alt="Top3" /></h5>
						<p class="percent"><em>-20.55</em>%</p>
						
						<p><span class="f_lisk01">최고위험</span><br />
						JP모간미국대표[주식-재간접형](UA)
						<span class="f_sub01">계열사</span>

						<p class="btn"><span class="f_btn"><a href="">가입하기</a></span></p>
					</div>
				</div>
				<div class="cont_list">
					<div class="cont_ban">
						<a href="#"><img src="../../resource/img/cont/f_main_banner.gif" alt="카드연계 연 0.6% 추가금리 하나 e-플러스 적금" /></a>
					</div>
					<div class="cont_box">
						<h5><img src="../../resource/img/cont/f_main_top4.gif" alt="Top4" /></h5>
						<p class="percent"><em>-23.12</em>%</p>
						
						<p><span class="f_lisk01">최고위험</span><br />
						삼성WTI원유특별자산1호[WTI원유-파생형](A)
						<span class="f_sub01">계열사</span>

						<p class="btn"><span class="f_btn"><a href="">가입하기</a></span></p>
					</div>
					<div class="cont_box mr0">
						<h5><img src="../../resource/img/cont/f_main_top5.gif" alt="Top5" /></h5>
						<p class="percent"><em>-20.55</em>%</p>
						
						<p><span class="f_lisk01">최고위험</span><br />
						삼성WTI원유특별자산1호[WTI원유-파생형](A)
						<span class="f_sub01">계열사</span>

						<p class="btn"><span class="f_btn"><a href="">가입하기</a></span></p>
					</div>
				</div>
			</div>

			<script type="text/javascript">	
				/* 펀드몰 메인 */
				(function(){
					var
					$article = $j('.f_tab_img li'),
					$articleSapn = $article.find("strong");
					//$article.eq(0).addClass('show').siblings().addClass('hide');
					$articleSapn.on("mouseenter click", function(){
						var idx = $j(this).parent().index();
						$article.eq(idx)
							.removeClass('hide').addClass('show')
							.siblings().removeClass('show').addClass('hide');
					})
				})();
				/* //펀드몰 메인 */	
			</script>
			<!-- fund_search -->
			<div class="fund_search">
				<label for="fund_search">펀드상품검색</label>
				<input type="text" id="fund_search" />
				<span class="f_btn"><a href="">Search</a></span>
			</div>
			<!-- //fund_search -->
			<p class="noti2">※ 최근 3개월간의 누적 수익률을 기준으로 순위가 산정됩니다.</p>

			<div class="tbl_div fund_sub">			
				<div class="div_left1">
					<h5><img src="../../resource/img/cont/title_fund_library.gif" alt="펀드자료실" /></h5>
					<div class="f_info01 mt10">						
						<ul>
							<li><a href="">공지사항</a></li>
							<li><a href="">회계감사보고서</a></li>
							<li><a href="">수시공시(2010년 이후)</a></li>
							<li><a href="">계열펀드 수익률 비용 비교공시</a></li>
							<li><a href="">수시공시(2010년 이전)</a></li>
							<li><a href="">연금펀드 비교공시</a></li>
							<li><a href="">운용보고서</a></li>
							<li><a href="">재형저축 집합 투자증권</a></li>
						</ul>
					</div>	
				</div>
				<div class="div_right1">
					<h5><img src="../../resource/img/cont/title_fund_info.gif" alt="이용시간 안내" /></h5>			
					<div class="f_info01">							
						<ul>
							<li class="list2">펀드 신규/환매</li>
							<li class="list2"><em class="color02">평일</em> : 09:00 ~ 17:00<br /><span>(토요일 및 공휴일 제외)</span></li>							
						</ul>
					</div>	
				</div>
			</div>

		</div>
		<!-- //HANA_CONTENTS_DIV -->
	</div>
	<%@ include file="../../WEB-INF/include/footer.jsp" %>
</body>
</html>
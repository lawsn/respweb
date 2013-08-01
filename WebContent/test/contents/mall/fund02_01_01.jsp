<%@ page language="java" contentType="text/html; charset=EUC-KR" %> 
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ko" xml:lang="ko">
<head>
	<title>펀드검색 &lt; 펀드 &lt; 금융상품몰 &lt; 하나은행 오픈뱅킹</title>
	<meta http-equiv="Content-type" content="text/html; charset=EUC-KR" />
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
		<%@ include file="../../WEB-INF/include/lnb12.jsp" %>

		<!-- HANA_CONTENTS_DIV -->
		<div id="HANA_CONTENTS_DIV">
			<!-- fund_search -->
			<div class="fund_search sch">
				<label for="fund_search">펀드상품검색</label>
				<input type="text" id="fund_search" />
				<span class="f_btn"><a href="">Search</a></span>
			</div>
			<!-- //fund_search -->
			<div class="f_opbox">
				<ul>
					<li>
						<strong>투자지역 선택</strong>
						<input type="radio" name="area" id="area01" checked="checked" /><label for="area01">전체</label>
						<input type="radio" name="area" id="area02" /><label for="area02">국내</label>
						<input type="radio" name="area" id="area03" /><label for="area03">해외</label>&nbsp;
						<label for="fund_class_cd" class="lab_none">투자지역 선택</label>
						<select id="fund_class_cd" title="투자지역 선택" class="wd100px">							
							<option value="00">전체</option>
						</select>
					</li>	
				</ul>
				<div class="f_opline"></div>
				<ul>
					<li>					
						<label for="fund_managing_co_cd"><strong>운용사 선택</strong></label>&nbsp;				
						<select id="fund_managing_co_cd" title="운용사 선택" class="wd100px">
							<option value="all" selected="">전체</option>
						</select>
					</li>		
					<li class="infirst">								
						<label for="risk_class_nm"><strong>위험등급</strong></label>&nbsp;				
						<select id="risk_class_nm" title="위험등급 선택" class="wd100px">
							<option value="all">전체</option>
							<option value="risk_class_nm_1">최고위험</option>
							<option value="risk_class_nm_2">고위험</option>
							<option value="risk_class_nm_3">중위험</option>
							<option value="risk_class_nm_4">저위험</option>
							<option value="risk_class_nm_5">최저위험</option>
						</select>
					</li>	
					<li class="insecond">
						<input type="checkbox" name="webonly" id="webonly">
						<label for="webonly">인터넷 전용</label>
					</li>
				</ul>
				<ul>
					<li>
						<strong>수익률</strong>
						<input type="radio" name="period" value="1" id="period_1"><label for="period_1">1개월</label>						
						<input type="radio" name="period" value="6" id="period_3"><label for="period_3">3개월</label>
						<input type="radio" name="period" value="6" id="period_6"><label for="period_6">6개월</label>
						<input type="radio" name="period" value="12" id="period_12" checked=""><label for="period_12">12개월</label>
					</li>		
					<li class="fslider">
						<div id="slider-range"></div>
						<script>
							$j(function() {
								$j( "#slider-range" ).slider({
								  range: true,
								  min: 0,
								  max: 500,
								  values: [ 0, 1000 ],
								  slide: function( event, ui ) {
									$j( "#amount" ).val( "$j" + ui.values[ 0 ] + " - $j" + ui.values[ 1 ] );
								  }
								});
								$j( "#amount" ).val( "$j" + $j( "#slider-range" ).slider( "values", 0 ) +
								  " - $j" + $j( "#slider-range" ).slider( "values", 1 ) );
							});
						</script>
					</li>
				</ul>
				<div class="btn_ex01">
					<span><a href="#">조건검색</a></span>
				</div>
			</div>			

			<div class="tbl_top">				
				<p>
					<span class="f_btn"><a href="#">상품비교</a></span>
					<span>※ 상품은 최대 3개까지 비교하실 수 있습니다.</span>
				</p>
				<div class="tbl_btnTop01">
					<label for="sorting"><strong>정렬선택</strong></label>					
					<select id="sorting" title="상품명 선택" class="wd90px">
						<option value="all" selected="">상품명</option>
					</select>			
					<select  id="sorting" title="정렬갯수 선택" class="wd70px">
						<option value="10" selected="">10개</option>
						<option value="20">20개</option>
					</select>
					<span class="f_btn"><a href="#">보기</a></span>
				</div>
			</div>

			<div class="tbldiv">
				<div class="tblscrol">		
					<table class="tbl_col01" summary="비교, 상품명, 투자유형, 기준가, 1개월 누적수익률(%), 1개월 누적수익률(%), 3개월 누적수익률(%), 6개월 누적수익률(%), 12개월 누적수익률(%), 신탁보수(선취수수료), 가입하기를 보여줍니다">
						<caption>상호부금</caption>
						<colgroup>
							<col style="width:6%" />
							<col style="width:21%" />
							<col style="width:9%" />
							<col style="width:9%" />
							<col style="width:8%" />
							<col style="width:8%" />
							<col style="width:8%" />
							<col style="width:8%" />
							<col style="width:12%" />
							<col style="width:11%" />
						</colgroup>
						<thead>
							<tr>
								<th rowspan="2" class="b-tnone" scope="col">비교</th>
								<th rowspan="2" class="b-tnone" scope="col">상품명</th>
								<th rowspan="2" class="b-tnone" scope="col">투자유형</th>
								<th rowspan="2" class="b-tnone" scope="col">기준가</th>
								<th colspan="4" class="b-tnone" scope="col">누적수익률(%)</th>
								<th rowspan="2" class="b-tnone" scope="col">신탁보수<br />(선취수수료)</th>
								<th rowspan="2" class="b-tnone" scope="col">가입</th>
							</tr>
							<tr>
								<th scope="col">1개월</th>
								<th scope="col">3개월</th>
								<th scope="col">6개월</th>
								<th scope="col">12개월</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><input type="checkbox" name="comparison" id="comparison" title="비교하기 선택"></td>
								<td>초고위험 | 마이다스 백년대게 어린이 적립식증권 투자신탁(주식) C1 | 판매중</td>
								<td>주식형</td>
								<td>927.90<br /><span class="color02">▲</span> 2.98</td>
								<td>-3.84</td>
								<td>14.97</td>
								<td>14.97</td>
								<td>22.27</td>
								<td>2.41<br />(1.000%)</td>
								<td><span class="f_btn"><a href="#">가입하기</a></span></td>
							</tr>
							<tr>
								<td><input type="checkbox" name="comparison" id="comparison" title="비교하기 선택"></td>
								<td>초고위험 | 마이다스 백년대게 어린이 적립식증권 투자신탁(주식) C1 | 판매중</td>
								<td>주식형</td>
								<td>927.90<br /><span class="color02">▲</span> 2.98</td>
								<td>-3.84</td>
								<td>14.97</td>
								<td>14.97</td>
								<td>22.27</td>
								<td>2.41<br />(1.000%)</td>
								<td><span class="under">영업접가입</span></td>
							</tr>
							<tr>
								<td><input type="checkbox" name="comparison" id="comparison" title="비교하기 선택"></td>
								<td>초고위험 | 마이다스 백년대게 어린이 적립식증권 투자신탁(주식) C1 | 판매중</td>
								<td>주식형</td>
								<td>927.90<br /><span class="color03">▼</span> 2.98</td>
								<td>-3.84</td>
								<td>14.97</td>
								<td>14.97</td>
								<td>22.27</td>
								<td>2.41<br />(1.000%)</td>
								<td><span class="f_btn"><a href="#">가입하기</a></span></td>
							</tr>
							<tr>
								<td><input type="checkbox" name="comparison" id="comparison" title="비교하기 선택"></td>
								<td>초고위험 | 마이다스 백년대게 어린이 적립식증권 투자신탁(주식) C1 | 판매중</td>
								<td>주식형</td>
								<td>927.90<br /><span class="color03">▼</span> 2.98</td>
								<td>-3.84</td>
								<td>14.97</td>
								<td>14.97</td>
								<td>22.27</td>
								<td>2.41<br />(1.000%)</td>
								<td><span class="under">영업접가입</span>	</td>
							</tr>
							<tr>
								<td><input type="checkbox" name="comparison" id="comparison" title="비교하기 선택"></td>
								<td>초고위험 | 마이다스 백년대게 어린이 적립식증권 투자신탁(주식) C1 | 판매중</td>
								<td>주식형</td>
								<td>927.90<br /><span class="color03">▼</span> 2.98</td>
								<td>-3.84</td>
								<td>14.97</td>
								<td>14.97</td>
								<td>22.27</td>
								<td>2.41<br />(1.000%)</td>
								<td><span class="under">영업접가입</span></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<div class="paging">
				<a href="#" class="bl_none"><img src="../../resource/img/btn/btn_first.gif" alt="처음페이지" /></a>
				<a href="#" class="bl_none"><img src="../../resource/img/btn/btn_prev.gif" alt="이전페이지" /></a>
				<a href="#" class="on"><strong>1</strong></a>
				<a href="#">2</a>
				<a href="#">3</a>
				<a href="#">4</a>
				<a href="#">5</a>
				<a href="#">6</a>
				<a href="#">7</a>
				<a href="#">8</a>
				<a href="#">9</a>
				<a href="#">10</a>
				<a href="#" class="bl_none"><img src="../../resource/img/btn/btn_next.gif" alt="다음페이지" /></a>
				<a href="#" class="bl_none"><img src="../../resource/img/btn/btn_last.gif" alt="마지막페이지" /></a>
			</div>

		</div>
		<!-- //HANA_CONTENTS_DIV -->
	</div>
	<%@ include file="../../WEB-INF/include/footer.jsp" %>
</body>
</html>
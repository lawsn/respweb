<%@ page language="java" contentType="text/html; charset=euc-kr" %> 
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ko" xml:lang="ko">
<head>
	<title>펀드검색 &lt; 펀드 &lt; 금융상품몰 &lt; 하나은행 오픈뱅킹</title>
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
		$j(function () {
		$j('#graph_cont').highcharts({
			title: {
				text: '',
				x: -20 //center
			},
			subtitle: {
				text: '',
				x: -20
			},

			xAxis: {
				categories: ['2013-01', '02', '03', '04']
			},
			yAxis: {
				title: {
					text: ''
				},
				plotLines: [{
					value: 0,
					width: 1,
					color: '#808080'
				}]
			},
			tooltip: {
				valueSuffix: ''
			},
			legend: {
				layout: 'horizontal',
				align: 'bottom',
				verticalAlign: 'bottom',
				borderWidth: 0
			},

			series: [{
				name: '펀드명',
				data: [7.0, 6.9, 8.8, 8.2]
			}, {
				name: '유형평균',
				data: [5.1, 2.6, 3.5, 4.4]
			}, {
				name: '모닝스타BM',
				data: [3.5, 4.8, 5.7, 5.6]
			}]
		});

		$j('#graph_cont2').highcharts({
			chart: {
				type: 'area'
			},
			title: {
				text: ''
			},
			subtitle: {
				text: ''
			},
			xAxis: {						
				categories: ['2013-01', '02', '03'],
				tickmarkPlacement: 'on',
				title: {
					enabled: false
				}
			},
			yAxis: {
				title: {
					text: ''
				},
				labels: {
					formatter: function() {
						return this.value / 1000;
					}
				}
			},
			tooltip: {
				shared: true,
				valueSuffix: 'won'
			},
			plotOptions: {
				area: {
					stacking: 'normal',
					lineColor: '#008183',
					lineWidth: 1,
					marker: {
						lineWidth: 1,
						lineColor: '#008183'
					}
				}
			},
			series: [{
				name: '기준가',
				data: [400, 950, 1850]
			}]
		});
	});
	</script>
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
			<div class="locate">
				HOME &gt; 금융상품몰 &gt; 펀드 &gt; <strong>펀드검색</strong>
			</div>
			<div class="f_bntop">
				<span class="f_lisk02">최고위험</span>
				<span class="f_sub02">인터넷</span>
				<span class="f_sub02">영업접</span>
				<span class="f_sub02">계열사</span>
			</div>

			<h4 class="fund_h4">AB 미국 그로스 증권투자신탁(주식-재간접형) Class C-e</h4>

			<div class="tbl_right_top"><span class="f_btn"><a href="">펀드목록</a></span></div>

			<div class="f_listbox">
				<ul class="lst_01">
					<li>기업의 내재가치 대비 저 평가되어 있으면서 배당 수익률이 높은 기업에 주로 투자하는 국내 배당형 펀드</li>
				</ul>
				<ul class="tbl_btnTop f_btndiv">
					<li><span class="f_btn other5"><a href="">가입하기</a></span></li>
					<li><span class="f_btn other"><a href="">전화상담 신청</a></span></li>
					<li><span class="f_btn other"><a href="">이메일 상담등록</a></span></li>
				</ul>
			</div>

			<div class="tbl_btnbox">
				<span class="f_btn white"><a class="pdf" title="새창에서 운용보고서 보기" href="">운용보고서</a></span>
				<span class="f_btn white"><a class="pdf" title="새창에서 자산보고 관리보고서 보기" href="">자산보고 관리보고서</a></span>
				<span class="f_btn white"><a class="pdf" title="새창에서 집합투자규약 보기" href="">집합투자규약</a></span>
				<span class="f_btn white"><a class="pdf" title="새창에서 간이투자 설명서 보기" href="">간이투자 설명서</a></span>
				<span class="f_btn white"><a class="pdf" title="새창에서 투자설명서 보기" href="">투자설명서</a></span>
			</div>

			<ul class="tabs mt50">
				<li class="ons"><a href="fund02_02_01.jsp"><span>펀드요약정보</span></a></li>
				<li><a href="fund02_02_02.jsp"><span>수익&위험관리</span></a></li>
				<li><a href="fund02_02_03.jsp"><span>포트폴리오</span></a></li>
			</ul>

			<h5 class="mt30">펀드기본정보</h5>
			<div class="f_info02">						
				<ul>
					<li>위험등급 : 높은 위험</li>
					<li>하나평가등급 : <span class="star">★ ★ ★ ★ ★</span></li>
					<li>펀드유형 : 국내주식형</li>
					<li>설정금액 : 337.471백만원</li>
					<li>판매여부 : 판매중</li>
					<li>최초설정일 : 2003-05-26</li>
					<li>운용사 : 신영투신운용</li>
					<li>최종결산일 : 2003-05-26</li>
					<li>기준가 : 1,006.38 (전일대비 +4.06원) <span class="f_btn white"><a title="새창에서 열립니다." href="">기준가 조회</a></span></li>					
					<li>판매시작일 : 2003-05-26</li>		
					<li>환매수수료 : 1일 이상 90일 미만 이익금의 70%</li>
				</ul>
			</div>

			<div class="tbl_div">			
				<div class="div_left2">
					<h5>가입정보</h5>	
					<p class="tbl_btnTop02">(단위 : 원)</p>
					<div class="tbldiv">
						<div class="tblscrol">
							<table class="tbl_col01" summary="구분, 최소가입금액, 추가입금가능액을 보여줍니다.">
								<caption>펀드가입정보</caption>
								<colgroup>
									<col style="width:30%" />
									<col style="width:35%" />
									<col style="width:35%" />
								</colgroup> 	 	
								<thead>
									<tr>
										<th class="b-tnone" scope="col">구분</th>
										<th class="b-tnone" scope="col">최소가입금액</th>
										<th class="b-tnone" scope="col">추가입금가능액</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>임의식</td>
										<td class="f12_ar">50,000</td>
										<td class="f12_ar">50,000</td>
									</tr>
									<tr>
										<td>거치식</td>
										<td class="f12_ar">1,000,000</td>
										<td class="f12_ar">-</td>
									</tr>
									<tr>
										<td>적립식</td>
										<td class="f12_ar">50,000</td>
										<td class="f12_ar">50,000</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<div class="div_right2">
					<h5>거래방법</h5>
					<ul class="liType1">	
						<li class="mt5">매입기준일
							<ul class="liType2">	
								<li>15시 이전 : 제2영업일 기준가를 적용하여 제2영업일에 매입</li>
								<li>15시 이후 : 제3영업일 기준가를 적용하여 제3영업일에 매입</li>
							</ul>
						</li>
						<li class="mt10">환매기준일
							<ul class="liType2">	
								<li>15시 이전 : 제2영업일 기준가를 적용하여 제4영업일에 환매대금지급</li>
								<li>15시 이후 : 제3영업일 기준가를 적용하여 제4영업일에 환매대금지급</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>			

			<h5 class="mt30">수수료</h5>
			<ul class="liType1">	
				<li>환매수수료 : 90일 미만 이익금의 70%</li>
				<li>선취수수료 : 없음</li>
				<li>신탁보수 : 총 1.29% (판매 0.85%, 운용 0.39%, 기타 0.05%)</li>
			</ul>

			<h5>투자전략</h5>
			<ul class="liType1">	
				<li>이 투자신탁은 국내 주식 등에 중장기적으로 투자하여 비교지수의 수익 률을 초과하는 투자수익률 달성 추구 비교지수 : KOSPI*95% + Call금리*5%</li>
			</ul>

			<h5>펀드특징</h5>
			<ul class="liType1">	
				<li>한국의 저평가된 리딩기업을 중심으로 일부 테마주에 분산 투자</li>
			</ul>

			<h5>운용사</h5>	
			<div class="tbldiv">
				<div class="tblscrol">
					<table class="tbl_col01" summary="회사명, 운용자산규모, 홈페이지, 운용펀드개수를 보여줍니다.">
						<caption>운용사 정보</caption>
						<colgroup>
							<col style="width:20%" />
							<col style="width:30%" />
							<col style="width:20%" />
							<col style="width:30%" />
						</colgroup> 							
						<tbody>
							<tr>
								<th class="b-tnone" scope="row">회사명</th>
								<td class="b-tnone">신영자산운용</td>
								<th class="b-tnone" scope="row">운용자산규모</th>
								<td class="b-tnone f12_ar">32,621.03</td>
							</tr>
							<tr>
								<th scope="row">홈페이지</th>
								<td class="f12_ar"><a target="_blank" href="http://www.adfdedc.com" title="새창에서 열립니다.">http://www.adfdedc.com</a></td>
								<th scope="row">운용펀드개수</th>
								<td class="f12_ar">150개</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<div class="btn_Rright">
				<span class="f_btn"><a href="">기간별 기준가 / 수익률 조회</a></span>
			</div>

			<h5 class="mt20">수익률표</h5>
			<p class="tbl_btnTop02">기준일자 : 2013. 06. 28 &nbsp;(단위 : 원)</p>
			<div class="tbldiv">
				<div class="tblscrol">
					<table class="tbl_col01" summary="기준가, 수익률을 보여줍니다.">
						<caption>수익률표</caption>
						<colgroup>
							<col style="width:40%" />
							<col style="width:15%" />
							<col style="width:15%" />
							<col style="width:15%" />
							<col style="width:15%" />
						</colgroup> 	 	
						<thead>
							<tr>
								<th class="b-tnone" scope="col">기준가</th>
								<th class="b-tnone" scope="col" colspan="4">수익률</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>전일대비</td>
								<td>1개월</td>
								<td>3개월</td>
								<td>6개월</td>
								<td>12개월</td>
							</tr>
							<tr>
								<td class="f12_ar">1,040.42(+4.06)</td>
								<td class="f12_ar">-4.63</td>
								<td class="f12_ar">2.61</td>
								<td class="f12_ar">10.84</td>
								<td class="f12_ar">13.36</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<h5 class="mt30">수익률 그래프</h5>
			<p class="tbl_btnTop01">
				<span class="f_btn"><a href="">1개월</a></span>
				<span class="f_btn"><a href="">3개월</a></span>
				<span class="f_btn"><a href="">6개월</a></span>
				<span class="f_btn"><a href="">12개월</a></span>
			</p>
			<div class="graph_box">
				<div id="graph_cont"></div>	
			</div>	

			<h5 class="mt30">기준가 그래프</h5>
			<p class="tbl_btnTop01">
				<span class="f_btn"><a href="">1개월</a></span>
				<span class="f_btn"><a href="">3개월</a></span>
				<span class="f_btn"><a href="">6개월</a></span>
				<span class="f_btn"><a href="">12개월</a></span>
			</p>
			<div class="graph_box">
				<div id="graph_cont2"></div>
			</div>	

			<h5 class="mt30">위험분석</h5>
			<div class="graph_box_left">
				<div class="img">
					<img src="../../resource/img/cont/img_fund_lisk01.gif" alt="펀드 위험수준 고(High) - 높음" />
					<!-- 유형에 따라 다르게 들어감 ********
					<img src="../../resource/img/cont/img_fund_lisk02.gif" alt="펀드 위험수준 중(Middle) - 중간" />
					<img src="../../resource/img/cont/img_fund_lisk03.gif" alt="펀드 위험수준 저(Low) - 낮음" />
					******** 유형에 따라 다르게 들어감 -->
				</div>
				<div class="text">
					<strong>과거 최저 수익률 (기준일 2013.06.25)</strong><br />
					3개월 최저 수익률 (From 2012.11 to 2013.01) -4.20%<br />
					6개월 최저 수익률 (From 2012.11 to 2013.04) 7.04%
				</div>
			</div>
			<div class="tbldiv mt20">
				<div class="tblscrol">
					<table class="tbl_col01" summary="수익률의 변동성을 보여줍니다.">
						<caption>변동성</caption>
						<colgroup>
							<col style="width:25%" />
							<col style="width:25%" />
							<col style="width:25%" />
							<col style="width:25%" />
						</colgroup> 	 	
						<thead>
							<tr>
								<th class="b-tnone" scope="col" colspan="4">변동성</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>연평균 수익률(%)</td>
								<td>표준편차</td>
								<td>샤프지수</td>
								<td>베타</td>
							</tr>
							<tr>
								<td class="f12_ar">19.7122</td>
								<td class="f12_ar">12.8126</td>
								<td class="f12_ar">0.1665</td>
								<td class="f12_ar">0.8451</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<ul class="liType2">
				<li>표준편차 : 펀드수익률이 평균수익률로부터 떨어져 있는 정도를 나타내는 것으로 값이 클수록 변동성이 심하므로 위험이 큽니다.</li>
				<li>샤프지수 : 펀드 위험 1단위에 대한 초과수익의 정도를 나타내는 지표, 즉 초과수익이 얼마인가를 측정하는 지표입니다.<br />
				펀드 수익률에서 무위험 이자율을 뺀 수치를 표준편차로 나눈값으로 값이 높을수록 투자성과가 좋다는 의미입니다.</li>
				<li>베타 : 시장대비 수익률 변동성을 나타내는 지표로 수치가 높으면 펀드 수익률이 시장 움직임에 민감하게 반응하고 낮으면 둔감하게 움직인다고 볼 수 있습니다.</li>
			</ul>

			<h5 class="mt30">자산별 현황</h5>
			<div class="graph_box">
				<img src="../../resource/img/cont/graph_2.gif" alt="그래프샘플" />
			</div>

			<div class="info01">
				<h5>유의사항</h5>
				<ul class="liType2">
					<li>본 상품은 펀드운용결과에 따라 실적이 변동되며 원금에 손실을 가져올 수도 있습니다.</li>
					<li>이 금융상품은 예금자보호법에 따라 예금보험공사가 보호하지 않습니다.</li>
					<li>하나은행은 본 상품의 판매회사로 그 수익이나 원금을 보장하지 않습니다.</li>
					<li>가입하시기 전에 (투자대상, 환매방법 및 보수 등에 관하여) 투자설명서를 반드시 읽어보시기 바랍니다.</li>
					<li>과거의 운영실적이 미래의 수익을 보장하는 것은 아닙니다.</li>
					<li>외화표시자산에 투자하는 상품은 환율변동에 따라 투자자산의 가치가 변동될 수 있습니다.</li>
					<li>월지급식 상품의 경우 운용결과에 따라 월 분배금이 변동될 수 있으며, 이익금을 초과하여 분배하는 경우 투자원금이 감소할 수 있습니다. 또한 투자성과가 부진할 경우 월 분배금 지급이 조기에 중단될 수 있으며, 상환시점에 원금의 손실이 발생할 수 있습니다.</li>
					<li>자료제공 : 모닝스타</li>
				</ul>
			</div>

		</div>
		<!-- //HANA_CONTENTS_DIV -->
	</div>
	<%@ include file="../../WEB-INF/include/footer.jsp" %>
</body>
</html>
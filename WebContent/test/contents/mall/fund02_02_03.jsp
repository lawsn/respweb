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
		<%@ include file="../../WEB-INF/include/lnb12.jsp" %>

		<!-- HANA_CONTENTS_DIV -->
		<div id="HANA_CONTENTS_DIV">	
			<div class="locate">
				HOME &gt; 금융상품몰 &gt; 펀드 &gt; <strong>펀드검색</strong>
			</div>
			<div class="f_bntop">
				<span class="f_top01">최고위험</span>
				<span class="f_top01">인터넷</span>
				<span class="f_top01">영업접</span>
				<span class="f_top01">계열사</span>
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
				<li><a href="fund02_02_01.jsp"><span>펀드요약정보</span></a></li>
				<li><a href="fund02_02_02.jsp"><span>수익&위험관리</span></a></li>
				<li class="ons"><a href="fund02_02_03.jsp"><span>포트폴리오</span></a></li>
			</ul>

			<h5 class="mt30">자산별 현황</h5>
			<div class="graph_box">
				<img src="../../resource/img/cont/graph_2.gif" alt="그래프샘플" />	
			</div>

			<h5 class="mt30">보유주식 업종현황</h5>
			<div class="graph_box">
				<img src="../../resource/img/cont/graph_5.gif" alt="그래프샘플" />	
			</div>

			<h5 class="mt30">보유종목 상위 Top10</h5>	
			<p class="tbl_btnTop02">기준일자 : 2013. 06. 30</p>
			<div class="tbldiv">
				<div class="tblscrol">
					<table class="tbl_col01" summary="종목명, 섹터, 자산비중(%), 시장비중(%), 전월대비 비중변동을보여줍니다.">
						<caption>보유종목 상위 Top10 리스트</caption>
						<colgroup>
							<col style="width:20%" />
							<col style="width:20%" />
							<col style="width:20%" />
							<col style="width:20%" />
							<col style="width:20%" />
						</colgroup> 	 	
						<thead>
							<tr>
								<th class="b-tnone" scope="col">종목명</th>
								<th class="b-tnone" scope="col">섹터</th>
								<th class="b-tnone" scope="col">자산비중(%)</th>
								<th class="b-tnone" scope="col">시장비중(%)</th>
								<th class="b-tnone" scope="col">전월대비 비중변동</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>삼성전자 보통주</td>
								<td>하드웨어</td>
								<td>3.75</td>
								<td>20.51</td>
								<td>0.74</td>
							</tr>
							<tr>
								<td>삼성전자 보통주</td>
								<td>하드웨어</td>
								<td>3.75</td>
								<td>20.51</td>
								<td>0.74</td>
							</tr>
							<tr>
								<td>삼성전자 보통주</td>
								<td>하드웨어</td>
								<td>3.75</td>
								<td>20.51</td>
								<td>0.74</td>
							</tr>
							<tr>
								<td>삼성전자 보통주</td>
								<td>하드웨어</td>
								<td>3.75</td>
								<td>20.51</td>
								<td>0.74</td>
							</tr>
							<tr>
								<td>삼성전자 보통주</td>
								<td>하드웨어</td>
								<td>3.75</td>
								<td>20.51</td>
								<td>0.74</td>
							</tr>
							<tr>
								<td>삼성전자 보통주</td>
								<td>하드웨어</td>
								<td>3.75</td>
								<td>20.51</td>
								<td>0.74</td>
							</tr>
							<tr>
								<td>삼성전자 보통주</td>
								<td>하드웨어</td>
								<td>3.75</td>
								<td>20.51</td>
								<td>0.74</td>
							</tr>
							<tr>
								<td>삼성전자 보통주</td>
								<td>하드웨어</td>
								<td>3.75</td>
								<td>20.51</td>
								<td>0.74</td>
							</tr>
							<tr>
								<td>삼성전자 보통주</td>
								<td>하드웨어</td>
								<td>3.75</td>
								<td>20.51</td>
								<td>0.74</td>
							</tr>
							<tr>
								<td>삼성전자 보통주</td>
								<td>하드웨어</td>
								<td>3.75</td>
								<td>20.51</td>
								<td>0.74</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<h5 class="mt30">스타일 분석</h5>
			<div class="graph_box_left">
				<div class="img_left">
					<img src="../../resource/img/cont/img_fund_style01.gif" alt="펀드스타일 분석 주식형 가치형 대형" />	
					<!-- 유형에 따라 다르게 들어감 ********
					<img src="../../resource/img/cont/img_fund_style02.gif" alt="펀드스타일 분석 주식형 혼합형 대형" />	
					<img src="../../resource/img/cont/img_fund_style03.gif" alt="펀드스타일 분석 주식형 성장형 대형" />	
					<img src="../../resource/img/cont/img_fund_style04.gif" alt="펀드스타일 분석 주식형 가치형 중형" />	
					<img src="../../resource/img/cont/img_fund_style05.gif" alt="펀드스타일 분석 주식형 혼합형 중형" />	
					<img src="../../resource/img/cont/img_fund_style06.gif" alt="펀드스타일 분석 주식형 성장형 중형" />	
					<img src="../../resource/img/cont/img_fund_style07.gif" alt="펀드스타일 분석 주식형 가치형 소형" />	
					<img src="../../resource/img/cont/img_fund_style08.gif" alt="펀드스타일 분석 주식형 혼합형 소형" />	
					<img src="../../resource/img/cont/img_fund_style09.gif" alt="펀드스타일 분석 주식형 성장형 소형" />	
					******** 유형에 따라 다르게 들어감 -->
				</div>
				<div class="tbldiv">
					<div class="tblscrol">
						<table class="tbl_col01" summary="시가총액구분, 비중(%)를 보여줍니다.">
							<caption>스타일 분석</caption>
							<colgroup>
								<col style="width:50%" />
								<col style="width:50%" />
							</colgroup> 	 	
							<thead>
								<tr>
									<th class="b-tnone" scope="col">시가총액구분</th>
									<th class="b-tnone" scope="col">비중(%)</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>대형주</td>
									<td>50.97</td>
								</tr>
								<tr>
									<td>중형주</td>
									<td>29.16</td>
								</tr>
								<tr>
									<td>소형주</td>
									<td>19.87</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
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
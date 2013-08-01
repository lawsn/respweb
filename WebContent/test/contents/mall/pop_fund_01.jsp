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
	<link rel="stylesheet" type="text/css" href="/resource/css/base.css" />
	<link rel="stylesheet" type="text/css" href="/resource/css/common.css" />
	<link rel="stylesheet" type="text/css" href="/resource/css/contents.css" />
	<link rel="stylesheet" type="text/css" href="/resource/css/contents02.css" />
	<link rel="stylesheet" type="text/css" href="/resource/css/fundmall.css" />
	<link rel="stylesheet" type="text/css" href="/resource/css/jquery-ui.css"></script>		
	<script type="text/javascript" src="/resource/js/jquery-1.9.1.js"></script>
	<script type="text/javascript" src="/resource/js/jquery-ui.js"></script>
	<script type="text/javascript" src="/resource/js/design.js"></script>	
	<script type="text/javascript" src="/resource/js/respond.js"></script>
	<script type="text/javascript" src="/resource/js/css_browser_selector.js"></script>
	<script type="text/javascript" src="/resource/js/exporting.js"></script>
	<script type="text/javascript" src="/resource/js/highcharts.js"></script>
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
<body style="background:none;">

<div style="padding:30px 0 30px 30px;">

	<!-- 기준가 조회 -->
	<div class="pop_ty01">
		<h4>기준가/수익률 조회</h4>
		<div tabindex="0" class="pop_cont">		
			<h5>AB 미국 그로스 증권투자신탁(주식-재간접형) Class C-e 기준가 추이</h5>
			<div class="tbl_tbldiv">
				<div class="tblscrol">
					<table class="tbl_col01" summary="기준가, 수익률을 보여줍니다.">
						<caption>기준가 전체조회 및 구간별 조회</caption>
						<colgroup>
							<col style="width:18%" />
							<col style="width:18%" />
							<col style="width:16%" />
							<col style="width:16%" />
							<col style="width:16%" />
							<col style="width:16%" />
						</colgroup>						
						<tbody>
							<tr>
								<th class="b-tnone" scope="col" colspan="2">기준가</th>
								<th class="b-tnone" scope="col" colspan="4">수익률</th>	
							</tr>
							<tr>
								<td>기준가</td>
								<td>전일대비 (등락률)</td>
								<td>1개월</td>
								<td>3개월</td>
								<td>6개월</td>
								<td>12개월</td>
							</tr>
							<tr>
								<td>1,004.99</td>
								<td>+4.06(0.5%)</td>
								<td>-4.63</td>
								<td>2.61</td>
								<td>10.84</td>
								<td>13.36</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<div class="tbl_tbldiv mt40">
				<div class="tblscrol">
					<table class="tbl_col01" summary="조회시작일, 조회종료일을 보여줍니다.">
						<caption>기준가 조회</caption>
						<colgroup>
							<col style="width:20%" />
							<col style="width:80%" />
						</colgroup>						
						<tbody>
							<tr>
								<th class="b-tnone" scope="row">조회 시작일</th>
								<td class="b-tnone tbl_left">
									<div class="tbl_in">
										<label for="label01" class="lab_none">조회시작 년도 입력</label>
										<select id="label01" class="wd100px">
											<option>2013</option>
										</select>
										<span class="mr5">년</span>

										<label for="label01" class="lab_none">조회시작 월 입력</label>
										<select id="label01" class="wd80px">
											<option>01</option>
										</select>
										<span class="mr5">월</span>

										<label for="label01" class="lab_none">조회시작 날짜 입력</label>
										<select id="label01" class="wd80px">
											<option>01</option>
										</select>
										<span class="mr5">일</span>										
										<a href="#"><img src="/resource/img/btn/btn_calendar.gif" alt="조회 시작일 달력버튼" /></a>
										
									</div>		
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div class="btn_ex01">
				<span><a href="#">조회</a></span>
			</div>		

			<h5>기준가 그래프</h5>
			<div class="graph_box_pop">
				<img src="/resource/img/cont/graph_4.gif" alt="그래프샘플" />	
			</div>

			<div class="tbl_tbldiv mt40">
				<div class="tblscrol">
					<table class="tbl_col01" summary="기준날짜, 기준가 , 전일대비, 등락률(%), 과표기준가, 설정액(백만원)을 보여줍니다.">
						<caption>기준가/수익률 조회결과</caption>
						<colgroup>
							<col style="width:18%" />
							<col style="width:16%" />
							<col style="width:16%" />
							<col style="width:16%" />
							<col style="width:16%" />
							<col style="width:18%" />
						</colgroup>						
						<tbody>
							<tr>
								<th class="b-tnone" scope="col">기준날짜</th>
								<th class="b-tnone" scope="col">기준가</th>	
								<th class="b-tnone" scope="col">전일대비</th>
								<th class="b-tnone" scope="col">등락률(%)</th>
								<th class="b-tnone" scope="col">과표기준가</th>
								<th class="b-tnone" scope="col">설정액(백만원)</th>
							</tr>
							<tr>
								<td>2013-07-09</td>
								<td>928.14</td>
								<td>▲ 0.95</td>
								<td>1.0</td>
								<td>657.11</td>
								<td>337.471</td>
							</tr>
							<tr>
								<td>2013-07-09</td>
								<td>928.14</td>
								<td>▲ 0.95</td>
								<td>1.0</td>
								<td>657.11</td>
								<td>337.471</td>
							</tr>
							<tr>
								<td>2013-07-09</td>
								<td>928.14</td>
								<td>▲ 0.95</td>
								<td>1.0</td>
								<td>657.11</td>
								<td>337.471</td>
							</tr>
							<tr>
								<td>2013-07-09</td>
								<td>928.14</td>
								<td>▲ 0.95</td>
								<td>1.0</td>
								<td>657.11</td>
								<td>337.471</td>
							</tr>
							<tr>
								<td>2013-07-09</td>
								<td>928.14</td>
								<td>▲ 0.95</td>
								<td>1.0</td>
								<td>657.11</td>
								<td>337.471</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

		</div>		

		<div class="pop_footer_left">
			<p>COPYRIGHT(C) 2013 HANABANK. ALL RIGHTS RESERVED.</p>
			<div class="today">
				<input type="checkbox" id="today" /><label for="today">오늘하루동안 열지 않습니다.</label>
			<span class="f_btn"><a href="#">확인</a></span>
			</div>
		</div>
		<div class="pop_close"><a href="#"><img src="/resource/img/common/btn_popclose.gif" alt="팝업 닫기" /></a></div>
	</div>
	<!-- // 기준가 조회 -->

</div>
</body>
</html>
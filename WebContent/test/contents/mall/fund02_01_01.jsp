<%@ page language="java" contentType="text/html; charset=EUC-KR" %> 
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ko" xml:lang="ko">
<head>
	<title>�ݵ�˻� &lt; �ݵ� &lt; ������ǰ�� &lt; �ϳ����� ���¹�ŷ</title>
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
			// 0 ���� 1edpth

		});
	</script>
</head>
<body>
	<div id="HANA_SKIP_NAVI_DIV">
		<h2>SKIP HANA_CONTENTS_DIV</h2>
		<ul>
			<li><a href="#HANA_CONTENTS_DIV">���� �ٷΰ���</a></li>
			<li><a href="#topMenu">�ָ޴� �ٷΰ���</a></li>
			<li><a href="#HANA_LNB_DIV">�����޴� �ٷΰ���</a></li>
			<li><a href="#HANA_FOOTER_DIV">�ϴܿ��� �ٷΰ���</a></li>
		</ul> 
	</div>
	<div id="HANA_WRAP_DIV">
		<%@ include file="../../WEB-INF/include/top.jsp" %>
		<%@ include file="../../WEB-INF/include/lnb12.jsp" %>

		<!-- HANA_CONTENTS_DIV -->
		<div id="HANA_CONTENTS_DIV">
			<!-- fund_search -->
			<div class="fund_search sch">
				<label for="fund_search">�ݵ��ǰ�˻�</label>
				<input type="text" id="fund_search" />
				<span class="f_btn"><a href="">Search</a></span>
			</div>
			<!-- //fund_search -->
			<div class="f_opbox">
				<ul>
					<li>
						<strong>�������� ����</strong>
						<input type="radio" name="area" id="area01" checked="checked" /><label for="area01">��ü</label>
						<input type="radio" name="area" id="area02" /><label for="area02">����</label>
						<input type="radio" name="area" id="area03" /><label for="area03">�ؿ�</label>&nbsp;
						<label for="fund_class_cd" class="lab_none">�������� ����</label>
						<select id="fund_class_cd" title="�������� ����" class="wd100px">							
							<option value="00">��ü</option>
						</select>
					</li>	
				</ul>
				<div class="f_opline"></div>
				<ul>
					<li>					
						<label for="fund_managing_co_cd"><strong>���� ����</strong></label>&nbsp;				
						<select id="fund_managing_co_cd" title="���� ����" class="wd100px">
							<option value="all" selected="">��ü</option>
						</select>
					</li>		
					<li class="infirst">								
						<label for="risk_class_nm"><strong>������</strong></label>&nbsp;				
						<select id="risk_class_nm" title="������ ����" class="wd100px">
							<option value="all">��ü</option>
							<option value="risk_class_nm_1">�ְ�����</option>
							<option value="risk_class_nm_2">������</option>
							<option value="risk_class_nm_3">������</option>
							<option value="risk_class_nm_4">������</option>
							<option value="risk_class_nm_5">��������</option>
						</select>
					</li>	
					<li class="insecond">
						<input type="checkbox" name="webonly" id="webonly">
						<label for="webonly">���ͳ� ����</label>
					</li>
				</ul>
				<ul>
					<li>
						<strong>���ͷ�</strong>
						<input type="radio" name="period" value="1" id="period_1"><label for="period_1">1����</label>						
						<input type="radio" name="period" value="6" id="period_3"><label for="period_3">3����</label>
						<input type="radio" name="period" value="6" id="period_6"><label for="period_6">6����</label>
						<input type="radio" name="period" value="12" id="period_12" checked=""><label for="period_12">12����</label>
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
					<span><a href="#">���ǰ˻�</a></span>
				</div>
			</div>			

			<div class="tbl_top">				
				<p>
					<span class="f_btn"><a href="#">��ǰ��</a></span>
					<span>�� ��ǰ�� �ִ� 3������ ���Ͻ� �� �ֽ��ϴ�.</span>
				</p>
				<div class="tbl_btnTop01">
					<label for="sorting"><strong>���ļ���</strong></label>					
					<select id="sorting" title="��ǰ�� ����" class="wd90px">
						<option value="all" selected="">��ǰ��</option>
					</select>			
					<select  id="sorting" title="���İ��� ����" class="wd70px">
						<option value="10" selected="">10��</option>
						<option value="20">20��</option>
					</select>
					<span class="f_btn"><a href="#">����</a></span>
				</div>
			</div>

			<div class="tbldiv">
				<div class="tblscrol">		
					<table class="tbl_col01" summary="��, ��ǰ��, ��������, ���ذ�, 1���� �������ͷ�(%), 1���� �������ͷ�(%), 3���� �������ͷ�(%), 6���� �������ͷ�(%), 12���� �������ͷ�(%), ��Ź����(���������), �����ϱ⸦ �����ݴϴ�">
						<caption>��ȣ�α�</caption>
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
								<th rowspan="2" class="b-tnone" scope="col">��</th>
								<th rowspan="2" class="b-tnone" scope="col">��ǰ��</th>
								<th rowspan="2" class="b-tnone" scope="col">��������</th>
								<th rowspan="2" class="b-tnone" scope="col">���ذ�</th>
								<th colspan="4" class="b-tnone" scope="col">�������ͷ�(%)</th>
								<th rowspan="2" class="b-tnone" scope="col">��Ź����<br />(���������)</th>
								<th rowspan="2" class="b-tnone" scope="col">����</th>
							</tr>
							<tr>
								<th scope="col">1����</th>
								<th scope="col">3����</th>
								<th scope="col">6����</th>
								<th scope="col">12����</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><input type="checkbox" name="comparison" id="comparison" title="���ϱ� ����"></td>
								<td>�ʰ����� | ���̴ٽ� ����� ��� ���������� ���ڽ�Ź(�ֽ�) C1 | �Ǹ���</td>
								<td>�ֽ���</td>
								<td>927.90<br /><span class="color02">��</span> 2.98</td>
								<td>-3.84</td>
								<td>14.97</td>
								<td>14.97</td>
								<td>22.27</td>
								<td>2.41<br />(1.000%)</td>
								<td><span class="f_btn"><a href="#">�����ϱ�</a></span></td>
							</tr>
							<tr>
								<td><input type="checkbox" name="comparison" id="comparison" title="���ϱ� ����"></td>
								<td>�ʰ����� | ���̴ٽ� ����� ��� ���������� ���ڽ�Ź(�ֽ�) C1 | �Ǹ���</td>
								<td>�ֽ���</td>
								<td>927.90<br /><span class="color02">��</span> 2.98</td>
								<td>-3.84</td>
								<td>14.97</td>
								<td>14.97</td>
								<td>22.27</td>
								<td>2.41<br />(1.000%)</td>
								<td><span class="under">����������</span></td>
							</tr>
							<tr>
								<td><input type="checkbox" name="comparison" id="comparison" title="���ϱ� ����"></td>
								<td>�ʰ����� | ���̴ٽ� ����� ��� ���������� ���ڽ�Ź(�ֽ�) C1 | �Ǹ���</td>
								<td>�ֽ���</td>
								<td>927.90<br /><span class="color03">��</span> 2.98</td>
								<td>-3.84</td>
								<td>14.97</td>
								<td>14.97</td>
								<td>22.27</td>
								<td>2.41<br />(1.000%)</td>
								<td><span class="f_btn"><a href="#">�����ϱ�</a></span></td>
							</tr>
							<tr>
								<td><input type="checkbox" name="comparison" id="comparison" title="���ϱ� ����"></td>
								<td>�ʰ����� | ���̴ٽ� ����� ��� ���������� ���ڽ�Ź(�ֽ�) C1 | �Ǹ���</td>
								<td>�ֽ���</td>
								<td>927.90<br /><span class="color03">��</span> 2.98</td>
								<td>-3.84</td>
								<td>14.97</td>
								<td>14.97</td>
								<td>22.27</td>
								<td>2.41<br />(1.000%)</td>
								<td><span class="under">����������</span>	</td>
							</tr>
							<tr>
								<td><input type="checkbox" name="comparison" id="comparison" title="���ϱ� ����"></td>
								<td>�ʰ����� | ���̴ٽ� ����� ��� ���������� ���ڽ�Ź(�ֽ�) C1 | �Ǹ���</td>
								<td>�ֽ���</td>
								<td>927.90<br /><span class="color03">��</span> 2.98</td>
								<td>-3.84</td>
								<td>14.97</td>
								<td>14.97</td>
								<td>22.27</td>
								<td>2.41<br />(1.000%)</td>
								<td><span class="under">����������</span></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<div class="paging">
				<a href="#" class="bl_none"><img src="../../resource/img/btn/btn_first.gif" alt="ó��������" /></a>
				<a href="#" class="bl_none"><img src="../../resource/img/btn/btn_prev.gif" alt="����������" /></a>
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
				<a href="#" class="bl_none"><img src="../../resource/img/btn/btn_next.gif" alt="����������" /></a>
				<a href="#" class="bl_none"><img src="../../resource/img/btn/btn_last.gif" alt="������������" /></a>
			</div>

		</div>
		<!-- //HANA_CONTENTS_DIV -->
	</div>
	<%@ include file="../../WEB-INF/include/footer.jsp" %>
</body>
</html>
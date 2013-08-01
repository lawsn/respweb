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
				name: '�ݵ��',
				data: [7.0, 6.9, 8.8, 8.2]
			}, {
				name: '�������',
				data: [5.1, 2.6, 3.5, 4.4]
			}, {
				name: '��׽�ŸBM',
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
				name: '���ذ�',
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
			<div class="locate">
				HOME &gt; ������ǰ�� &gt; �ݵ� &gt; <strong>�ݵ�˻�</strong>
			</div>
			<div class="f_bntop">
				<span class="f_top01">�ְ�����</span>
				<span class="f_top01">���ͳ�</span>
				<span class="f_top01">������</span>
				<span class="f_top01">�迭��</span>
			</div>

			<h4 class="fund_h4">AB �̱� �׷ν� �������ڽ�Ź(�ֽ�-�簣����) Class C-e</h4>

			<div class="tbl_right_top"><span class="f_btn"><a href="">�ݵ���</a></span></div>

			<div class="f_listbox">
				<ul class="lst_01">
					<li>����� ���簡ġ ��� �� �򰡵Ǿ� �����鼭 ��� ���ͷ��� ���� ����� �ַ� �����ϴ� ���� ����� �ݵ�</li>
				</ul>
				<ul class="tbl_btnTop f_btndiv">
					<li><span class="f_btn other5"><a href="">�����ϱ�</a></span></li>
					<li><span class="f_btn other"><a href="">��ȭ��� ��û</a></span></li>
					<li><span class="f_btn other"><a href="">�̸��� �����</a></span></li>
				</ul>
			</div>

			<div class="tbl_btnbox">
				<span class="f_btn white"><a class="pdf" title="��â���� ��뺸�� ����" href="">��뺸��</a></span>
				<span class="f_btn white"><a class="pdf" title="��â���� �ڻ꺸�� �������� ����" href="">�ڻ꺸�� ��������</a></span>
				<span class="f_btn white"><a class="pdf" title="��â���� �������ڱԾ� ����" href="">�������ڱԾ�</a></span>
				<span class="f_btn white"><a class="pdf" title="��â���� �������� ���� ����" href="">�������� ����</a></span>
				<span class="f_btn white"><a class="pdf" title="��â���� ���ڼ��� ����" href="">���ڼ���</a></span>
			</div>

			<ul class="tabs mt50">
				<li><a href="fund02_02_01.jsp"><span>�ݵ�������</span></a></li>
				<li><a href="fund02_02_02.jsp"><span>����&�������</span></a></li>
				<li class="ons"><a href="fund02_02_03.jsp"><span>��Ʈ������</span></a></li>
			</ul>

			<h5 class="mt30">�ڻ꺰 ��Ȳ</h5>
			<div class="graph_box">
				<img src="../../resource/img/cont/graph_2.gif" alt="�׷�������" />	
			</div>

			<h5 class="mt30">�����ֽ� ������Ȳ</h5>
			<div class="graph_box">
				<img src="../../resource/img/cont/graph_5.gif" alt="�׷�������" />	
			</div>

			<h5 class="mt30">�������� ���� Top10</h5>	
			<p class="tbl_btnTop02">�������� : 2013. 06. 30</p>
			<div class="tbldiv">
				<div class="tblscrol">
					<table class="tbl_col01" summary="�����, ����, �ڻ����(%), �������(%), ������� ���ߺ����������ݴϴ�.">
						<caption>�������� ���� Top10 ����Ʈ</caption>
						<colgroup>
							<col style="width:20%" />
							<col style="width:20%" />
							<col style="width:20%" />
							<col style="width:20%" />
							<col style="width:20%" />
						</colgroup> 	 	
						<thead>
							<tr>
								<th class="b-tnone" scope="col">�����</th>
								<th class="b-tnone" scope="col">����</th>
								<th class="b-tnone" scope="col">�ڻ����(%)</th>
								<th class="b-tnone" scope="col">�������(%)</th>
								<th class="b-tnone" scope="col">������� ���ߺ���</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>�Ｚ���� ������</td>
								<td>�ϵ����</td>
								<td>3.75</td>
								<td>20.51</td>
								<td>0.74</td>
							</tr>
							<tr>
								<td>�Ｚ���� ������</td>
								<td>�ϵ����</td>
								<td>3.75</td>
								<td>20.51</td>
								<td>0.74</td>
							</tr>
							<tr>
								<td>�Ｚ���� ������</td>
								<td>�ϵ����</td>
								<td>3.75</td>
								<td>20.51</td>
								<td>0.74</td>
							</tr>
							<tr>
								<td>�Ｚ���� ������</td>
								<td>�ϵ����</td>
								<td>3.75</td>
								<td>20.51</td>
								<td>0.74</td>
							</tr>
							<tr>
								<td>�Ｚ���� ������</td>
								<td>�ϵ����</td>
								<td>3.75</td>
								<td>20.51</td>
								<td>0.74</td>
							</tr>
							<tr>
								<td>�Ｚ���� ������</td>
								<td>�ϵ����</td>
								<td>3.75</td>
								<td>20.51</td>
								<td>0.74</td>
							</tr>
							<tr>
								<td>�Ｚ���� ������</td>
								<td>�ϵ����</td>
								<td>3.75</td>
								<td>20.51</td>
								<td>0.74</td>
							</tr>
							<tr>
								<td>�Ｚ���� ������</td>
								<td>�ϵ����</td>
								<td>3.75</td>
								<td>20.51</td>
								<td>0.74</td>
							</tr>
							<tr>
								<td>�Ｚ���� ������</td>
								<td>�ϵ����</td>
								<td>3.75</td>
								<td>20.51</td>
								<td>0.74</td>
							</tr>
							<tr>
								<td>�Ｚ���� ������</td>
								<td>�ϵ����</td>
								<td>3.75</td>
								<td>20.51</td>
								<td>0.74</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<h5 class="mt30">��Ÿ�� �м�</h5>
			<div class="graph_box_left">
				<div class="img_left">
					<img src="../../resource/img/cont/img_fund_style01.gif" alt="�ݵ彺Ÿ�� �м� �ֽ��� ��ġ�� ����" />	
					<!-- ������ ���� �ٸ��� �� ********
					<img src="../../resource/img/cont/img_fund_style02.gif" alt="�ݵ彺Ÿ�� �м� �ֽ��� ȥ���� ����" />	
					<img src="../../resource/img/cont/img_fund_style03.gif" alt="�ݵ彺Ÿ�� �м� �ֽ��� ������ ����" />	
					<img src="../../resource/img/cont/img_fund_style04.gif" alt="�ݵ彺Ÿ�� �м� �ֽ��� ��ġ�� ����" />	
					<img src="../../resource/img/cont/img_fund_style05.gif" alt="�ݵ彺Ÿ�� �м� �ֽ��� ȥ���� ����" />	
					<img src="../../resource/img/cont/img_fund_style06.gif" alt="�ݵ彺Ÿ�� �м� �ֽ��� ������ ����" />	
					<img src="../../resource/img/cont/img_fund_style07.gif" alt="�ݵ彺Ÿ�� �м� �ֽ��� ��ġ�� ����" />	
					<img src="../../resource/img/cont/img_fund_style08.gif" alt="�ݵ彺Ÿ�� �м� �ֽ��� ȥ���� ����" />	
					<img src="../../resource/img/cont/img_fund_style09.gif" alt="�ݵ彺Ÿ�� �м� �ֽ��� ������ ����" />	
					******** ������ ���� �ٸ��� �� -->
				</div>
				<div class="tbldiv">
					<div class="tblscrol">
						<table class="tbl_col01" summary="�ð��Ѿױ���, ����(%)�� �����ݴϴ�.">
							<caption>��Ÿ�� �м�</caption>
							<colgroup>
								<col style="width:50%" />
								<col style="width:50%" />
							</colgroup> 	 	
							<thead>
								<tr>
									<th class="b-tnone" scope="col">�ð��Ѿױ���</th>
									<th class="b-tnone" scope="col">����(%)</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>������</td>
									<td>50.97</td>
								</tr>
								<tr>
									<td>������</td>
									<td>29.16</td>
								</tr>
								<tr>
									<td>������</td>
									<td>19.87</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>

			<div class="info01">
				<h5>���ǻ���</h5>
				<ul class="liType2">
					<li>�� ��ǰ�� �ݵ������� ���� ������ �����Ǹ� ���ݿ� �ս��� ������ ���� �ֽ��ϴ�.</li>
					<li>�� ������ǰ�� �����ں�ȣ���� ���� ���ݺ�����簡 ��ȣ���� �ʽ��ϴ�.</li>
					<li>�ϳ������� �� ��ǰ�� �Ǹ�ȸ��� �� �����̳� ������ �������� �ʽ��ϴ�.</li>
					<li>�����Ͻñ� ���� (���ڴ��, ȯ�Ź�� �� ���� � ���Ͽ�) ���ڼ����� �ݵ�� �о�ñ� �ٶ��ϴ�.</li>
					<li>������ ������� �̷��� ������ �����ϴ� ���� �ƴմϴ�.</li>
					<li>��ȭǥ���ڻ꿡 �����ϴ� ��ǰ�� ȯ�������� ���� �����ڻ��� ��ġ�� ������ �� �ֽ��ϴ�.</li>
					<li>�����޽� ��ǰ�� ��� ������� ���� �� �й���� ������ �� ������, ���ͱ��� �ʰ��Ͽ� �й��ϴ� ��� ���ڿ����� ������ �� �ֽ��ϴ�. ���� ���ڼ����� ������ ��� �� �й�� ������ ���⿡ �ߴܵ� �� ������, ��ȯ������ ������ �ս��� �߻��� �� �ֽ��ϴ�.</li>
					<li>�ڷ����� : ��׽�Ÿ</li>
				</ul>
			</div>


		</div>
		<!-- //HANA_CONTENTS_DIV -->
	</div>
	<%@ include file="../../WEB-INF/include/footer.jsp" %>
</body>
</html>
<%@ page language="java" contentType="text/html; charset=euc-kr" %> 
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ko" xml:lang="ko">
<head>
	<title>�ݵ�˻� &lt; �ݵ� &lt; ������ǰ�� &lt; �ϳ����� ���¹�ŷ</title>
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
		<%@ include file="../../WEB-INF/include/lnb02_02.jsp" %>

		<!-- HANA_CONTENTS_DIV -->
		<div id="HANA_CONTENTS_DIV">	
			<div class="locate">
				HOME &gt; ������ǰ�� &gt; �ݵ� &gt; <strong>�ݵ�˻�</strong>
			</div>
			<div class="f_bntop">
				<span class="f_lisk02">�ְ�����</span>
				<span class="f_sub02">���ͳ�</span>
				<span class="f_sub02">������</span>
				<span class="f_sub02">�迭��</span>
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
				<li class="ons"><a href="fund02_02_01.jsp"><span>�ݵ�������</span></a></li>
				<li><a href="fund02_02_02.jsp"><span>����&�������</span></a></li>
				<li><a href="fund02_02_03.jsp"><span>��Ʈ������</span></a></li>
			</ul>

			<h5 class="mt30">�ݵ�⺻����</h5>
			<div class="f_info02">						
				<ul>
					<li>������ : ���� ����</li>
					<li>�ϳ��򰡵�� : <span class="star">�� �� �� �� ��</span></li>
					<li>�ݵ����� : �����ֽ���</li>
					<li>�����ݾ� : 337.471�鸸��</li>
					<li>�Ǹſ��� : �Ǹ���</li>
					<li>���ʼ����� : 2003-05-26</li>
					<li>���� : �ſ����ſ��</li>
					<li>��������� : 2003-05-26</li>
					<li>���ذ� : 1,006.38 (���ϴ�� +4.06��) <span class="f_btn white"><a title="��â���� �����ϴ�." href="">���ذ� ��ȸ</a></span></li>					
					<li>�ǸŽ����� : 2003-05-26</li>		
					<li>ȯ�ż����� : 1�� �̻� 90�� �̸� ���ͱ��� 70%</li>
				</ul>
			</div>

			<div class="tbl_div">			
				<div class="div_left2">
					<h5>��������</h5>	
					<p class="tbl_btnTop02">(���� : ��)</p>
					<div class="tbldiv">
						<div class="tblscrol">
							<table class="tbl_col01" summary="����, �ּҰ��Աݾ�, �߰��Աݰ��ɾ��� �����ݴϴ�.">
								<caption>�ݵ尡������</caption>
								<colgroup>
									<col style="width:30%" />
									<col style="width:35%" />
									<col style="width:35%" />
								</colgroup> 	 	
								<thead>
									<tr>
										<th class="b-tnone" scope="col">����</th>
										<th class="b-tnone" scope="col">�ּҰ��Աݾ�</th>
										<th class="b-tnone" scope="col">�߰��Աݰ��ɾ�</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>���ǽ�</td>
										<td class="f12_ar">50,000</td>
										<td class="f12_ar">50,000</td>
									</tr>
									<tr>
										<td>��ġ��</td>
										<td class="f12_ar">1,000,000</td>
										<td class="f12_ar">-</td>
									</tr>
									<tr>
										<td>������</td>
										<td class="f12_ar">50,000</td>
										<td class="f12_ar">50,000</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<div class="div_right2">
					<h5>�ŷ����</h5>
					<ul class="liType1">	
						<li class="mt5">���Ա�����
							<ul class="liType2">	
								<li>15�� ���� : ��2������ ���ذ��� �����Ͽ� ��2�����Ͽ� ����</li>
								<li>15�� ���� : ��3������ ���ذ��� �����Ͽ� ��3�����Ͽ� ����</li>
							</ul>
						</li>
						<li class="mt10">ȯ�ű�����
							<ul class="liType2">	
								<li>15�� ���� : ��2������ ���ذ��� �����Ͽ� ��4�����Ͽ� ȯ�Ŵ������</li>
								<li>15�� ���� : ��3������ ���ذ��� �����Ͽ� ��4�����Ͽ� ȯ�Ŵ������</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>			

			<h5 class="mt30">������</h5>
			<ul class="liType1">	
				<li>ȯ�ż����� : 90�� �̸� ���ͱ��� 70%</li>
				<li>��������� : ����</li>
				<li>��Ź���� : �� 1.29% (�Ǹ� 0.85%, ��� 0.39%, ��Ÿ 0.05%)</li>
			</ul>

			<h5>��������</h5>
			<ul class="liType1">	
				<li>�� ���ڽ�Ź�� ���� �ֽ� � ����������� �����Ͽ� �������� ���� ���� �ʰ��ϴ� ���ڼ��ͷ� �޼� �߱� ������ : KOSPI*95% + Call�ݸ�*5%</li>
			</ul>

			<h5>�ݵ�Ư¡</h5>
			<ul class="liType1">	
				<li>�ѱ��� ���򰡵� ��������� �߽����� �Ϻ� �׸��ֿ� �л� ����</li>
			</ul>

			<h5>����</h5>	
			<div class="tbldiv">
				<div class="tblscrol">
					<table class="tbl_col01" summary="ȸ���, ����ڻ�Ը�, Ȩ������, ����ݵ尳���� �����ݴϴ�.">
						<caption>���� ����</caption>
						<colgroup>
							<col style="width:20%" />
							<col style="width:30%" />
							<col style="width:20%" />
							<col style="width:30%" />
						</colgroup> 							
						<tbody>
							<tr>
								<th class="b-tnone" scope="row">ȸ���</th>
								<td class="b-tnone">�ſ��ڻ���</td>
								<th class="b-tnone" scope="row">����ڻ�Ը�</th>
								<td class="b-tnone f12_ar">32,621.03</td>
							</tr>
							<tr>
								<th scope="row">Ȩ������</th>
								<td class="f12_ar"><a target="_blank" href="http://www.adfdedc.com" title="��â���� �����ϴ�.">http://www.adfdedc.com</a></td>
								<th scope="row">����ݵ尳��</th>
								<td class="f12_ar">150��</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<div class="btn_Rright">
				<span class="f_btn"><a href="">�Ⱓ�� ���ذ� / ���ͷ� ��ȸ</a></span>
			</div>

			<h5 class="mt20">���ͷ�ǥ</h5>
			<p class="tbl_btnTop02">�������� : 2013. 06. 28 &nbsp;(���� : ��)</p>
			<div class="tbldiv">
				<div class="tblscrol">
					<table class="tbl_col01" summary="���ذ�, ���ͷ��� �����ݴϴ�.">
						<caption>���ͷ�ǥ</caption>
						<colgroup>
							<col style="width:40%" />
							<col style="width:15%" />
							<col style="width:15%" />
							<col style="width:15%" />
							<col style="width:15%" />
						</colgroup> 	 	
						<thead>
							<tr>
								<th class="b-tnone" scope="col">���ذ�</th>
								<th class="b-tnone" scope="col" colspan="4">���ͷ�</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>���ϴ��</td>
								<td>1����</td>
								<td>3����</td>
								<td>6����</td>
								<td>12����</td>
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

			<h5 class="mt30">���ͷ� �׷���</h5>
			<p class="tbl_btnTop01">
				<span class="f_btn"><a href="">1����</a></span>
				<span class="f_btn"><a href="">3����</a></span>
				<span class="f_btn"><a href="">6����</a></span>
				<span class="f_btn"><a href="">12����</a></span>
			</p>
			<div class="graph_box">
				<div id="graph_cont"></div>	
			</div>	

			<h5 class="mt30">���ذ� �׷���</h5>
			<p class="tbl_btnTop01">
				<span class="f_btn"><a href="">1����</a></span>
				<span class="f_btn"><a href="">3����</a></span>
				<span class="f_btn"><a href="">6����</a></span>
				<span class="f_btn"><a href="">12����</a></span>
			</p>
			<div class="graph_box">
				<div id="graph_cont2"></div>
			</div>	

			<h5 class="mt30">����м�</h5>
			<div class="graph_box_left">
				<div class="img">
					<img src="../../resource/img/cont/img_fund_lisk01.gif" alt="�ݵ� ������� ��(High) - ����" />
					<!-- ������ ���� �ٸ��� �� ********
					<img src="../../resource/img/cont/img_fund_lisk02.gif" alt="�ݵ� ������� ��(Middle) - �߰�" />
					<img src="../../resource/img/cont/img_fund_lisk03.gif" alt="�ݵ� ������� ��(Low) - ����" />
					******** ������ ���� �ٸ��� �� -->
				</div>
				<div class="text">
					<strong>���� ���� ���ͷ� (������ 2013.06.25)</strong><br />
					3���� ���� ���ͷ� (From 2012.11 to 2013.01) -4.20%<br />
					6���� ���� ���ͷ� (From 2012.11 to 2013.04) 7.04%
				</div>
			</div>
			<div class="tbldiv mt20">
				<div class="tblscrol">
					<table class="tbl_col01" summary="���ͷ��� �������� �����ݴϴ�.">
						<caption>������</caption>
						<colgroup>
							<col style="width:25%" />
							<col style="width:25%" />
							<col style="width:25%" />
							<col style="width:25%" />
						</colgroup> 	 	
						<thead>
							<tr>
								<th class="b-tnone" scope="col" colspan="4">������</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>����� ���ͷ�(%)</td>
								<td>ǥ������</td>
								<td>��������</td>
								<td>��Ÿ</td>
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
				<li>ǥ������ : �ݵ���ͷ��� ��ռ��ͷ��κ��� ������ �ִ� ������ ��Ÿ���� ������ ���� Ŭ���� �������� ���ϹǷ� ������ Ů�ϴ�.</li>
				<li>�������� : �ݵ� ���� 1������ ���� �ʰ������� ������ ��Ÿ���� ��ǥ, �� �ʰ������� ���ΰ��� �����ϴ� ��ǥ�Դϴ�.<br />
				�ݵ� ���ͷ����� ������ �������� �� ��ġ�� ǥ�������� ���������� ���� �������� ���ڼ����� ���ٴ� �ǹ��Դϴ�.</li>
				<li>��Ÿ : ������ ���ͷ� �������� ��Ÿ���� ��ǥ�� ��ġ�� ������ �ݵ� ���ͷ��� ���� �����ӿ� �ΰ��ϰ� �����ϰ� ������ �а��ϰ� �����δٰ� �� �� �ֽ��ϴ�.</li>
			</ul>

			<h5 class="mt30">�ڻ꺰 ��Ȳ</h5>
			<div class="graph_box">
				<img src="../../resource/img/cont/graph_2.gif" alt="�׷�������" />
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
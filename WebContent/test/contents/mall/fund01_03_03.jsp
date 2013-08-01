<%@ page language="java" contentType="text/html; charset=euc-kr" %> 
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ko" xml:lang="ko">
<head>
	<title>�ݵ尡�� &lt; �ݵ� &lt; ������ǰ�� &lt; �ϳ����� ���¹�ŷ</title>
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
			<ul class="f_tab_img">		
				<li><strong><a href="fund01_01_01.jsp">���ͷ� �����ݵ� Top5</a></strong></li>				
				<li><strong><a href="fund01_02_01.jsp">���� �����ϴ� �ݵ� Top5</a></strong></li>					
				<li class="show"><strong><a href="fund01_03_01.jsp">�׸��ݵ�</a></strong></li>		
			</ul>
			<div class="f_tab_cont">
				<div class="cont_btn">
					<span class="f_btn other4"><a href="fund01_03_01.jsp">&nbsp;&nbsp;���γ��� �ݵ�&nbsp;&nbsp;</a></span>
					<span class="f_btn other4"><a href="fund01_03_02.jsp">&nbsp;&nbsp;������ ���޽� �ݵ�&nbsp;&nbsp;</a></span>
					<span class="f_btn other3"><a href="fund01_03_03.jsp">&nbsp;&nbsp;�ε��� �ݵ�&nbsp;&nbsp;</a></span>
				</div>

				<div class="cont_list">
					<div class="cont_box">
						<h5><img src="../../resource/img/cont/f_main_top1.gif" alt="Top1" /></h5>
						<p class="percent"><em>-25.32</em>%</p>

						<p><span class="f_lisk01">�ְ�����</span><br />
						�ＺWTI����Ư���ڻ�1ȣ[WTI����-�Ļ���](A)
						<span class="f_sub01">�迭��</span>

						<p class="btn"><span class="f_btn"><a href="">�����ϱ�</a></span></p>
					</div>
					<div class="cont_box">
						<h5><img src="../../resource/img/cont/f_main_top2.gif" alt="Top2" /></h5>
						<p class="percent"><em>-23.12</em>%</p>

						<p><span class="f_lisk01">�ְ�����</span><br />
						�ѱ����ڿ���Ʈ��Ʈ��������1ȣ[�ֽ�](A)
						<span class="f_sub01">�迭��</span>

						<p class="btn"><span class="f_btn"><a href="">�����ϱ�</a></span></p>
					</div>
					<div class="cont_box mr0">
						<h5><img src="../../resource/img/cont/f_main_top3.gif" alt="Top3" /></h5>
						<p class="percent"><em>-20.55</em>%</p>
						
						<p><span class="f_lisk01">�ְ�����</span><br />
						JP�𰣹̱���ǥ[�ֽ�-�簣����](UA)
						<span class="f_sub01">�迭��</span>

						<p class="btn"><span class="f_btn"><a href="">�����ϱ�</a></span></p>
					</div>
				</div>
				<div class="cont_list">
					<div class="cont_ban">
						<a href="#"><img src="../../resource/img/cont/f_main_banner.gif" alt="ī�忬�� �� 0.6% �߰��ݸ� �ϳ� e-�÷��� ����" /></a>
					</div>
					<div class="cont_box">
						<h5><img src="../../resource/img/cont/f_main_top4.gif" alt="Top4" /></h5>
						<p class="percent"><em>-23.12</em>%</p>
						
						<p><span class="f_lisk01">�ְ�����</span><br />
						�ＺWTI����Ư���ڻ�1ȣ[WTI����-�Ļ���](A)
						<span class="f_sub01">�迭��</span>

						<p class="btn"><span class="f_btn"><a href="">�����ϱ�</a></span></p>
					</div>
					<div class="cont_box mr0">
						<h5><img src="../../resource/img/cont/f_main_top5.gif" alt="Top5" /></h5>
						<p class="percent"><em>-20.55</em>%</p>
						
						<p><span class="f_lisk01">�ְ�����</span><br />
						�ＺWTI����Ư���ڻ�1ȣ[WTI����-�Ļ���](A)
						<span class="f_sub01">�迭��</span>

						<p class="btn"><span class="f_btn"><a href="">�����ϱ�</a></span></p>
					</div>
				</div>
			</div>

			<script type="text/javascript">	
				/* �ݵ�� ���� */
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
				/* //�ݵ�� ���� */	
			</script>
			<!-- fund_search -->
			<div class="fund_search">
				<label for="fund_search">�ݵ��ǰ�˻�</label>
				<input type="text" id="fund_search" />
				<span class="f_btn"><a href="">Search</a></span>
			</div>
			<!-- //fund_search -->
			<p class="noti2">�� �ֱ� 3�������� ���� ���ͷ��� �������� ������ �����˴ϴ�.</p>

			<div class="tbl_div fund_sub">			
				<div class="div_left1">
					<h5><img src="../../resource/img/cont/title_fund_library.gif" alt="�ݵ��ڷ��" /></h5>
					<div class="f_info01 mt10">						
						<ul>
							<li><a href="">��������</a></li>
							<li><a href="">ȸ�谨�纸��</a></li>
							<li><a href="">���ð���(2010�� ����)</a></li>
							<li><a href="">�迭�ݵ� ���ͷ� ��� �񱳰���</a></li>
							<li><a href="">���ð���(2010�� ����)</a></li>
							<li><a href="">�����ݵ� �񱳰���</a></li>
							<li><a href="">��뺸��</a></li>
							<li><a href="">�������� ���� ��������</a></li>
						</ul>
					</div>	
				</div>
				<div class="div_right1">
					<h5><img src="../../resource/img/cont/title_fund_info.gif" alt="�̿�ð� �ȳ�" /></h5>			
					<div class="f_info01">							
						<ul>
							<li class="list2">�ݵ� �ű�/ȯ��</li>
							<li class="list2"><em class="color02">����</em> : 09:00 ~ 17:00<br /><span>(����� �� ������ ����)</span></li>							
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
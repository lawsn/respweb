<%@ page language="java" contentType="text/html; charset=EUC-KR" %>

			<div id="HANA_HEAD_DIV">
				<div class="top_gnb">
					<h1 class="logo">
						<a href="javascript:opb.common.util.goMainPage_fnc();"><img src="/contents/img/common/h1_logo.gif" alt="�ϳ����� ���¹�ŷ" /></a>
					</h1>
					<div class="top_util01">
						<a href="/common/login.do"><img src="/contents/img/common/btn_login.gif" alt="�α���" /></a></p>
					</div>
					<div class="top_util02">
						<a href="#//Hanabank" onclick="opb.common.util.goHanaBankMainPage_fnc();return false;" class="bar_none">
						<img src="/contents/img/btn/util_m07.gif" alt="�ϳ����� Ȩ������" /></a>
						<a href="/contents/smartreader/index.jsp" onclick="window.open(this.href, 'mypopup', 'width=550, height=680, scrollbars=no'); return false;"><img src="/contents/img/btn/util_m01.gif" alt="��ũ����������" /></a>
						<a href="/contents/openbaking/index.jsp"><img src="/contents/img/btn/util_m02.gif" alt="�̿�ȳ�" /></a>
						<a href="http://open.hanabank.chzero.com/content.jsp" target="_blank" title="��â���� �����ϴ�."><img src="/contents/img/btn/util_m03.gif" alt="������" /></a>
						<a href="/contents/customer/index.jsp"><img src="/contents/img/btn/util_m04.gif" alt="������" /></a>
						<a href="http://pr.hanabank.com/contents/kor/index.jsp" target="_blank" title="��â���� �����ϴ�."><img src="/contents/img/btn/util_m05.gif" alt="����Ұ�" /></a>
						<a href="#//Hanabank" onclick="opb.common.util.openSitemap_fnc(this);return false;"><img src="/contents/img/btn/util_m06.gif" alt="����Ʈ��" /></a>
					</div>
				<div class="totalSearch">
<form id="searchfrm" name="searchfrm"  action="/contents/search/search.jsp" method="post">
					<input type="text" title="�˻�" id="query2" name="query" onKeydown="javascript:main_pressCheck(event);" onfocus="this.value='';" value="�ϳ�N Wallet" />
					<a href="#" onclick="javascript:main_go_search(); return false;"><img src="/contents/img/common/btn_portal_search.gif" alt="�˻�" /></a>
</form>
				</div>
					<div id="topMenu" style="display:block;">
						<div class="topMenuSub">
							<dl>
								<dt class="Depth_1 Active_On">
										<a href="/inquiry/account/wpdep406_01i_01_01.do"><img src="/contents/img/common/GnbM01_off.gif" alt="���ͳݹ�ŷ" /></a>
								</dt>
								<dd id="sub01">
									<ul class="gng_2depUl display_off" id="depth01">
										<li class="gng_2depLi">
											<div class="mymenu" id="myMenuBtn"><a id="myMenuBtnHref" href="#//HanaBank" onclick="opb.common.util.goMenu_fnc('/common/login.do');return false;" >My Menu</a></div>
											<span><a class="dep_2" href="/inquiry/account/wpdep406_01i_01_01.do">��ȸ</a></span>
										</li>
										<li class="gng_2depLi"><span><a class="dep_2" href="/transfer/account/wpdep411_01t_01.do">��ü</a></span></li>
										<li class="gng_2depLi"><span><a class="dep_2" href="/ebpp/giro/wpads419_01t.do">������</a></span></li>
										<li class="gng_2depLi"><span><a class="dep_2" href="/deposit/savings/wpdep428_01i.do">����/��Ź</a></span></li>
										<li class="gng_2depLi"><span><a class="dep_2" href="/fund/transfer/wpfnd432_09t.do?pageRequestType=fund">�ݵ�</a></span></li>
										<li class="gng_2depLi"><span><a class="dep_2" href="/card/inquiry/wpccd435_01i.do?type=C">ī��</a></span></li>
										<li class="gng_2depLi"><span><a class="dep_2" href="/loan/inquiry/wplon444_01t.do">����</a></span></li>
										<li class="gng_2depLi"><span><a class="dep_2" href="/foreign/rate/wpfxd458_01p.do">��ȯ</a></span></li>
										<li class="gng_2depLi"><span><a class="dep_2" href="/banka/insu/wpdep407_01i.do">����/����</a></span></li>
										<li class="gng_2depLi"><span><a class="dep_2" href="/myhana/personal/wpcus401_01i.do">��������</a></span></li>
										<li class="gng_2depLi"><span><a class="dep_2" href="/certify/wpcer461_01m.do">������������</a></span></li>
									</ul>
								</dd>
								<dt class="Depth_1 Active_On">
									<a href="/contents/mall/index.jsp"><img src="/contents/img/common/GnbM02_off.gif" alt="������ǰ��" /></a>
								</dt>
								<dd id="sub02">
									<ul class="gng_2depUl display_off" id="depth02">
										<li class="gng_2depLi"><span><a class="dep_2" href="/contents/mall/freedeposit/index.jsp">������������ο��</a></span></li>
										<li class="gng_2depLi"><span><a class="dep_2" href="/contents/mall/timedeposit/index.jsp">���⿹��</a></span></li>
										<li class="gng_2depLi"><span><a class="dep_2" href="/contents/mall/periodicaldeposit/index.jsp">����</a></span></li>
										<li class="gng_2depLi"><span><a class="dep_2" href="/contents/mall/trust/index.jsp">��Ź</a></span></li>
										<li class="gng_2depLi"><span><a class="dep_2" href="/contents/mall/loan/index.jsp">����</a></span></li>
										<li class="gng_2depLi"><span><a class="dep_2" href="/contents/mall/fund/index.jsp">�ݵ��ڷ��</a></span></li>
										<li class="gng_2depLi"><span><a class="dep_2" href="/contents/mall/goods/index.jsp">��ǰ���ý�</a></span></li>
									</ul>
								</dd>
								<dt class="Depth_1 Active_On">
									<a href="/contents/yummyzone/index.jsp"><img src="/contents/img/common/GnbM04_off.gif" alt="�ͻ�ٻ� zone" /></a>
								</dt>
								<dd id="sub03">
									<ul class="gng_2depUl display_off" id="depth04">
										<li class="gng_2depLi"><span><a class="dep_2" href="/contents/yummyzone/goods/index.jsp">�ͻ�ٻ� ������ǰ</a></span></li>
										<li class="gng_2depLi"><span><a class="dep_2" href="/contents/yummyzone/student/index.jsp">���л� ����</a></span></li>
									</ul>
								</dd>
								<dt class="Depth_1 Active_On">
									<a href="/contents/channel/index.jsp"><img src="/contents/img/common/GnbM03_off.gif" alt="����Ʈä��" /></a>
								</dt>
								<dd id="sub04">
									<ul class="gng_2depUl display_off" id="depth03">
										<li class="gng_2depLi"><span><a class="dep_2" href="/contents/channel/hananbank/index.jsp">�ϳ�N Bank</a></span></li>
										<li class="gng_2depLi"><span><a class="dep_2" href="/contents/channel/hananmini/index.jsp">�ϳ�N mini</a></span></li>
										<li class="gng_2depLi"><span><a class="dep_2" href="/contents/channel/hananwallet/index.jsp">�ϳ�N Wallet</a></span></li>
										<li class="gng_2depLi"><span><a class="dep_2" href="/contents/channel/hananmoneyplus/index.jsp">�ϳ�N Money Plus</a></span></li>
										<li class="gng_2depLi"><span><a class="dep_2" href="/contents/channel/hanancbs/index.jsp">�ϳ�N CBS</a></span></li>
									</ul>
								</dd>
								<dt class="Depth_1 Active_On">
									<a href="/contents/info/index.jsp"><img src="/contents/img/common/GnbM05_off.gif" alt="�������񽺾ȳ�" /></a>
								</dt>
								<dd id="sub05">
									<ul class="gng_2depUl display_off" id="depth05">
										<li class="gng_2depLi"><span><a class="dep_2" href="/contents/info/phonebanking/index.jsp">����ŷ����</a></span></li>
										<li class="gng_2depLi"><span><a class="dep_2" href="/contents/info/businessbanking/index.jsp">�����ŷ ����</a></span></li>
										<li class="gng_2depLi"><span><a class="dep_2" href="/contents/info/moneymanagement/index.jsp">����ڱݰ�������</a></span></li>
									</ul>
								</dd>
							</dl>
						</div>
					</div>
				</div>
			</div>
			<hr />
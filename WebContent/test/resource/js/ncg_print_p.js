var idkey = 0;
var pageCnt = 0;
var eleArray = [];
var rowspanArray = [];
var rowspanCheck = 0;
var colspanArray = [];
var colArray = [];
var rowArray = [];
var colspanFoot = [];
var pchk_area_cnt = 0;

/*
 * 	Site Define(Customizing) Value
 *	[START] 
 */
//	����� DIV ��������(�μ�� �ش� SIZE ��ŭ Content�� ä���ش�).
var prtDivSize	 = 1100;
var prtDivBorder = "<div id='pageBreaker' class='pagebreak' style='position:relative;height:"+prtDivSize+"px;'></div>";
/*
 * 	Site Define(Customizing) Value
 * 	[END]
 */

$j(document).ready(function(){
	if ($j.getURLParam("pType") == "edit") {
		var removeList = ".btn_down, .btn_print, .location, .f_btn, .btn_ex01";
		var acceptList = ".printAble, .tbldiv, .printdiv, .pop_cont, .tbl_tbldiv, .pop_bankpaper, .tex_pop";
		var popup_chk  = "";
	 
		var contents;
		var printElementTemplate = $j("#printElementTemplate").html();
		var printElementList = $j("#printElementList");
	    
	    // layer �˾��� ���� ���� �߿�
	    // �ϳ� �̻��� layer �˾��� ��Ÿ�� ���, �ֻ��� Layer �˾��� �������� ó���ϱ� ���� eq(0)�� ���
	    if ($j(opener.document.body).find("#pop_ty01").length > 0) {
	        contents = $j(opener.document.body).find("#pop_ty01").eq(0);
	        $j("#printTitle").html("<h4>" + contents.find("h4").eq(0).html() + "</h4>");
	    } else if ($j(opener.document.body).find(".pop_ty01").length > 0) {
	        contents = $j(opener.document.body).find(".pop_ty01").eq(0);
	        $j("#printTitle").html("<h4>" + contents.find("h4").eq(0).html() + "</h4>");
	    } else if ($j(opener.document.body).find("#HANA_CONTENTS_DIV").length > 0) {
			contents = $j(opener.document.body).find("#HANA_CONTENTS_DIV");
			$j("#printTitle").html("<h4>" + contents.find("h4").eq(0).html() + "</h4>");
	    } else if ($j(opener.document.body).find("#mainContent").length > 0) {
	        contents = $j(opener.document.body).find("#mainContent");
	        $j("#printTitle").html(contents.find("#conts_top h2").eq(0).html());
	    }	    
	    
	    var contentsCnt = 0;
	    contents.find(acceptList).each(function(idcon) {
	    	if($j.getURLParam("selFlag") == "Y") {
	    		if(!$j(this).hasClass("SelectBorder")) {
	    			return;
	    		} 
	    	}
			var thisClass = $j(this).attr("class");
			var chkPrintDiv = "";
        
			if (thisClass == "") thisClass = $j(this).attr("id");
			
			if (thisClass.indexOf("noPrint") > -1) {
				chkPrintDiv = "*";
			}
			
			// pop_cont�� ����Ʈ�� ��쿡�� tbl_tbldiv ������ ����Ʈ �������� ����ó���Ѵ�.
	        if (chkPrintDiv == "" && popup_chk == "*" && 
	        		(thisClass.indexOf("tbl_tbldiv") > -1 || thisClass.indexOf("tbldiv") > -1)) {
				chkPrintDiv = "*";
			}
			
	        // display:none���� ���ǵǾ� �ִ� ������ ����Ʈ���� ����ó���Ѵ�.
	        var display_check = $j(this).parent().attr("style");
	        if (display_check != undefined) {
	        	display_check = display_check.replace(" ", "").toLowerCase();
	        	if (display_check.indexOf("display:none") > - 1) {
	        		chkPrintDiv = "*";
	        	}
	        }

	        display_check = $j(this).attr("style");
	        if (display_check != undefined) {
	        	display_check = display_check.replace(" ", "").toLowerCase();
	        	if (display_check.indexOf("display:none") > - 1) {
	        		chkPrintDiv = "*";
	        	}
	        }
	        
			if (chkPrintDiv == "") {
				if (thisClass.indexOf("pop_cont") > -1 || thisClass.indexOf("tex_pop") > -1) {
					popup_chk = "*";
				}

		        if(thisClass != undefined && thisClass != "") {
		        	thisClass = (thisClass.split(" "))[0];
		        }
	
		        var printElement, contentHtml, objContent;
		        var checkDisable = '';
		
		        var nodeName = this.nodeName.toLowerCase();
		        if (nodeName == "h4") {
		            printElement = "<h4>" + $j(this).html() + "</h4>";
		            printElementList.append(printElement);
		        } else {
		            if (nodeName == "table") {
		                if (thisClass.indexOf("tableType3") == -1 && thisClass.indexOf("listType1") == -1)
		                    thisClass = "tableType2";
		            }
		            
		            printElement = $j(printElementTemplate);
		            contentHtml = "<" + nodeName + ">" + $j(this).html().replace(/((<[\s\/]*script\b[^>]*>)([^>]*)(<\/script>))/gi, "") + "<" + nodeName + "/>";
		            // div �ȿ� script ������ ���� ��쿡 ���� ó��
		            while (1 == 1) {
		            	var contentHtml_temp = contentHtml.toLowerCase();
			            if (contentHtml_temp.indexOf("<script") > -1) {
			            	var sPos = contentHtml_temp.indexOf("<script");
			            	var ePos = contentHtml_temp.indexOf("</script>");
			            	var contentHtml1 = contentHtml.substring(0, sPos);
			            	var contentHtml2 = contentHtml.substring(ePos + 9);
			            	contentHtml = contentHtml1 + contentHtml2;
			            } else {
			            	break;
			            }
		            }
		            contentHtml = contentHtml.replace(/((?:onclick="(.*?)"))/gi, "");
		            contentHtml = contentHtml.replace(/((?:href="(.*?)"))/gi, "");
		            contentHtml = contentHtml.replace("tbldiv scroll", "tbldiv");
		            
		            var formsLen = opener.document.forms.length;
		            objContent = $j(contentHtml).addClass(thisClass).unbind();
		            objContent.find("select").each(function() {
		            	if ($j(this).attr("name") != undefined) {
		            		for (var i = 0; i < formsLen; i++) {
		            			var ex = eval("opener.document.forms[" + i + "]."+$j(this).attr("name"));
		            			if (ex != undefined) {
		            				var selText = "";
		            				$j(this).find("option").each(function() {
		            					if (ex.value == $j(this).val()) {
		            						selText = $j(this).text();
		            					}
		            				});
		            				$j(this).removeAttr("onchange");
		            				$j(this).removeAttr("onkeyup");
		            				$j(this).removeAttr("onblur");
									$j(this).removeAttr("onfocus");
            						$j(this).empty().append("<option>" + selText + "</option>");
					            	break;
		            			}
		            		}		            			
		            	}
		                $j(this).attr("disabled", true);
		            });
		            objContent.find("input:checkbox").each(function() {
		            	if ($j(this).attr("name") != undefined) {
		            		for (var i = 0; i < formsLen; i++) {
				            	var ex = eval("opener.document.forms[" + i + "]."+$j(this).attr("name"));
				            	
				            	if (ex != undefined) {
					            	$j(this).attr("checked", ex.checked);
					            	var chk_id = $j(this).attr("id");
					            	var chk_on_off = "";
					            	if (ex.checked == true) {
					            		chk_on_off = "on";
					            	} else {
					            		chk_on_off = "off";
					            	}
					            	
					            	if ($j(this).next().attr("for") == undefined) {
					            		$j(this).next().next().addClass("check_" + chk_on_off);
					            	} else {
					            		$j(this).next().addClass("check_" + chk_on_off);
					            	}
					            	$j(this).remove();
					            	break;
				            	}
		            		}
		            	}
		                //$j(this).attr("disabled", true);
		            });
		            
		            // radio ��ư�� ���, �μ�̸����⿡�� ���ð��� ���޵��� �����Ƿ�,
		            // �̰��� �ذ��ϱ� ���Ͽ� radio ��ư�� ���ְ� ���õ� ���� ������ �ֵ��� ��.
		            var rdoName = "";
		            var rdoIdx  = 0;
		            objContent.find("input:radio").each(function() {
		            	if ($j(this).attr("name") != undefined) {
			            	if ($j(this).attr("name") != rdoName) {
			            		rdoIdx = 0;
			            	}
			            	rdoName = $j(this).attr("name");
			            	
			            	for (var i = 0; i < formsLen; i++) {
			            		var ex = eval("opener.document.forms[" + i + "]."+$j(this).attr("name"));
			            		if (ex != undefined) {
					            	ex = eval("opener.document.forms[" + i + "]."+$j(this).attr("name")+"[" + rdoIdx + "]");
					            	
					            	if (ex != undefined) {
						            	//if (ex.checked == false) {
						            	//	$j(this).next().remove();  // label ������ ���ش�.
						            	//}
					            		
						            	var radio_on_off = "";
						            	if (ex.checked == true) {
						            		radio_on_off = "on";
						            	} else {
						            		radio_on_off = "off";
						            	}
						            	
						            	if ($j(this).next().attr("for") != undefined) {
						            		$j(this).next().addClass("radio_" + radio_on_off);
						            	}

					            		$j(this).remove();	// radio ��ư�� ����.
					            		break;
					            	}
					            }
			            	}
			            	rdoIdx++;
		            	}
		            });
		            objContent.find("input:text,textarea").each(function() {
		            	if ($j(this).attr("name") != undefined) {
		            		for (var i = 0; i < formsLen; i++) {
				            	var ex = eval("opener.document.forms[" + i + "]."+$j(this).attr("name"));
				            	if (ex != undefined) {
					            	$j(this).val(ex.value);
					            	$j(this).attr("value", ex.value);
					            	
		            				$j(this).removeAttr("onchange");
		            				$j(this).removeAttr("onkeyup");
		            				$j(this).removeAttr("onblur");
									$j(this).removeAttr("onfocus");
					            	break;
				            	}
		            		}
		            	}
		                $j(this).attr("readOnly", true);
		            });
		            objContent.find("input:password").each(function() {
		            	if ($j(this).attr("name") != undefined) {
		            		for (var i = 0; i < formsLen; i++) {
				            	var ex = eval("opener.document.forms[" + i + "]."+$j(this).attr("name"));
				            	if (ex != undefined) {
					            	$j(this).val(ex.value);
					            	$j(this).attr("value", ex.value);

		            				$j(this).removeAttr("onchange");
		            				$j(this).removeAttr("onkeyup");
		            				$j(this).removeAttr("onblur");
									$j(this).removeAttr("onfocus");
					            	break;
				            	}
		            		}
		            	}
		                $j(this).attr("readOnly", true);
		            });
		
		            objContent.find(removeList).each(function() {
		                $j(this).hide();
		            });
		            
					objContent.find("thead tr").each(function(idy) {
						// Header�� ���� ���� ��, ù ���� �������� ó��
						if (idy == 0 && popup_chk == "") {
							var layer_contents;

							layer_contents  = "<div class='sub_layer' style='position:absolute;display:none;left:370px;z-index:998'>";
							layer_contents += "   <div class='sub_area'><h4>����׸� ����</h4>";
							layer_contents += "       <ul>";
							
							$j(this).find("th").each(function(idx) {
								// ù ���ο� colspan�� �����ϴ� ��쿡�� �ش� �÷��� ���� uncheck �� �� ������ �Ѵ�.
								if ($j(this).attr("colspan") == undefined || $j(this).attr("colspan") == 1) {
									layer_contents += "<li><input id='" + idcon + '_' + idx + "' type='checkbox' checked /> <label for='" + idcon + '_' + idx + "'>" + $j(this).text() + "</label></li>";
								} else {
									layer_contents += "<li><input id='" + idcon + '_' + idx + "' type='checkbox' checked disabled /> <label for='" + idcon + '_' + idx + "'>" + $j(this).text() + "</label></li>";
								}
							});
							
							layer_contents += "</ul>";
							layer_contents += "<div class='btn_ex01'>";
							layer_contents += "<span><a href='#' class='selClick'>Ȯ��</a></span>";
							layer_contents += "<span class='exty01'><a href='#' class='selCancel'>�ݱ�</a></span>";
							layer_contents += "</div>";
							layer_contents += "<div class='pop_close'><a href='#' class='selClose'><img src='" + opb.base.IMG_SVR_DOMAIN +"/resource/img/common/btn_popcloseSmall.gif' alt='�˾� �ݱ�' /></a></div>";
							layer_contents += "</div></div>";
							
							printElement.find(".printElement").eq(0).prev().append(layer_contents);
							printElement.find(".printElement").eq(0).prev().append($j("<div class='thnameSelect btn_right02'><span class='f_btn'><a href='#'>�μ��׸�����</a></span></div>"));
							
							pchk_area_cnt++;
						}
					});
					printElement.find(".printElement").eq(0).parent().append(objContent);
	
		            printElementList.append(printElement);
		            contentsCnt++;
		        }
            }
	    });
	    
	    // ������ �׸��� �ϳ��� ��� �μ� ���θ� Ȯ���ϴ� checkbox �κ��� ������.
	    if (contentsCnt == 1) {
	    	$j(".pChk_area").remove();
	    }
	    
	    $j(".printElement *").click(function() { });
	    $j("object").css("width", "964px");  // 1024 - 60 
	    $j("#printElementList>h3>span").remove();
	    
	    $j("#scroll").remove();

		// �μ��׸������� �����ϴ� ����������, FF, IE8���� display:block �� �� �߻��ϴ� ���ܻ��� ó��
	    if (pchk_area_cnt > 0) {
			if(navigator.userAgent.indexOf("Firefox") > -1 ||
					navigator.userAgent.indexOf("MSIE 8.0") > -1) {
		    	$j(this).find("colgroup").each(function() {
		    		$j(this).css("display", "none");
		    	});
	    	}
	    }
	    
	    $j(".thnameSelect").click(function() {
	    	if($j(this).prev().css("display") == "none") {
	    		$j(this).prev().css("display", "");		// block ó�� (��� browser���� �����ϵ��� block ��� ó��)
	    		$j(this).prev().focus();
	    	} else {
	    		$j(this).prev().css("display", "none");
	    	}
	    	
	    	var visibleKey = [];
	    	
	    	$j(this).parent().parent().find("thead th").each(function(idx) {
	    		if($j(this).css("display") != "none") {
	    			//visibleKey.push($j(this).text());
	    			visibleKey.push("0_" + idx);  // text�� ó���� ��쿡 ������ ������ ������ �� ��쿡 ���� ����.
	    		}
	    	});
	    	
	    	$j(this).siblings().find("input:checkbox").each(function() {
	    		for(var i = 0; i < visibleKey.length; i++) {
	    			//if(visibleKey[i] == $j(this).next().text()) {
	    			if(visibleKey[i] == $j(this).attr("id")) {
	    				$j(this).attr('checked', true);
	    			}
	    		}
	    	});
	    	
	    	colspanArray = [];
	    	$j(this).parent().parent().find("thead tr").each(function(idx) {
				// Header�� ���� ���� ��, ù ���� �������� ó��
				if (idx == 0) {
					$j(this).find("th").each(function(idx) {
						if ($j(this).attr("colspan") == undefined) {
							colspanArray.push(1);
						} else {
							colspanArray.push($j(this).attr("colspan"));
						}
					});
				}
			});	    	
	    	
	    	// colspan �׸��� �����ϴ��� üũ
	    	colspanFoot = [];
	    	$j(this).parent().parent().find("table tr").each(function(idy) {
	    		var colspan = 0;
	    		var colno_tot = 0;
	    		var colspan_tot = 0;
	    		var colspanInfo = [];
	    		var colfoot = '';
	    		
				$j(this).children().siblings().each(function(idx) {
					children_check = 1;
					// colspan üũ
					if ($j(this).attr("colspan") == undefined) {
						colspan = 1;
					} else {
						colspan = $j(this).attr("colspan");
					}
					
					colno_tot = Number(colno_tot) + Number(colspan);
					colspan_tot = 0;
		    		colfoot = '';
			    	for (var i = 0; i < colspanArray.length; i++) {
			    		colspan_tot = Number(colspan_tot) + Number(colspanArray[i]); 
			    		if (colno_tot <= colspan_tot) {
			    			if (colfoot != '') {
			    				colfoot = '';
			    				for (var j = (i - colspan + 1); j <= i; j++) {
			    					colfoot = colfoot + j + ',';
			    				}
			    				colfoot += '(' + colspan + ')';
			    				colspanFoot.push(colfoot);
			    			}
			    			break;
			    		} else {  // colspanArray ���� colspan�� Ŭ ���
			    			if (colspan > colspanArray[idx]) {
			    				colfoot = colfoot + i + ',';
			    			}
			    		}
					}
				});
				
				// row�� �� ���� ��� ���� ������ ������� ����.
				if (children_check == 0) {
					// colspan üũ
					if ($j(this).attr("colspan") == undefined) {
						colspan = 1;
					} else {
						colspan = $j(this).attr("colspan");
					}
					colno_tot = Number(colno_tot) + Number(colspan);
					colspan_tot = 0;
		    		colfoot = '';
			    	for (var i = 0; i < colspanArray.length; i++) {
			    		colspan_tot = Number(colspan_tot) + Number(colspanArray[i]); 
			    		if (colno_tot <= colspan_tot) {
			    			if (colfoot != '') {
			    				colfoot = '';
			    				for (var j = (i - colspan + 1); j <= i; j++) {
			    					colfoot = colfoot + j + ',';
			    				}
			    				colfoot += '(' + colspan + ')';
			    				colspanFoot.push(colfoot);
			    				colspanRow += idy + ',';
			    			}
			    			break;
			    		} else {  // colspanArray ���� colspan�� Ŭ ���
			    			if (colspan > colspanArray[0]) {
			    				colfoot = colfoot + i + ',';
			    			}
			    		}
					}
				}
	    	});
	    });
	    
	    //	���� ���̾� Ȯ�ι�ư Ŭ��
	    $j(".selClick").click(function() {
	    	var visibleNo = [];
	    	var visibleCnt = 0;
	    	var noVisibleCnt = 0;
	    	colArray = [];
	    	rowArray = [];
	    	
	    	var colspanFootCnt = colspanFoot.length;
	    	if (colspanFootCnt > 0) {
    			for (var i=0; i < colspanFoot.length; i++) {
    				var sPos = colspanFoot[i].indexOf("(");
					var ePos = colspanFoot[i].indexOf(")");
					var colspanCnt = colspanFoot[i].substring(sPos+1, ePos);
					noVisibleCnt = 0;
			    	$j(this).parent().parent().siblings().find("input:checkbox").each(function(idx) {
			    		if($j(this).attr("checked") == "checked") {
			    			if (colspanFoot[i].indexOf(idx + ",") > -1) {		
			    				noVisibleCnt++;
			    			}
			    		}
			    	});
    				if (noVisibleCnt < Number(colspanCnt)) {
    		    		alert('������ ���� �����ϴ� �׸��� ������ �� �����ϴ�.');
    		    		return;			    					
    				}
    			}
	    	}
	    	
	    	$j(this).parent().parent().siblings().find("input:checkbox").each(function(idx) {
	    		if($j(this).attr("checked") != "checked") {
	    			visibleNo.push(idx);
	    		} else {
	    			visibleNo.push('xxx');
	    			visibleCnt++;
	    		}
	    	});
	    	
	    	if (visibleCnt == 0) {
	    		alert('�ݵ�� �ϳ� �̻� üũ�ؾ� �մϴ�.');
	    		return;
	    	}
	    	
	    	rowspanArray = [];
	    	colspanArray = [];
	    	$j(this).parent().parent().parent().parent().parent().next().next().find("thead tr").each(function(idx) {
				// Header�� ���� ���� ��, ù ���� �������� ó��
				if (idx == 0) {
					$j(this).find("th").each(function(idx) {
						if ($j(this).attr("rowspan") == undefined || $j(this).attr("rowspan") == 1) {
							rowspanArray.push(1);
						} else {
							rowspanArray.push($j(this).attr("rowspan"));
							rowspanCheck = 1;
						}
						
						if ($j(this).attr("colspan") == undefined) {
							colspanArray.push(1);
						} else {
							colspanArray.push($j(this).attr("colspan"));
						}
					});
				}
			});
	    	
    		var pre_rowspanCheck = 0;
    		var cur_rowspanCheck = 0;
    		var colspanRow = '';
	    	$j(this).parent().parent().parent().parent().parent().next().next().find("table tr").each(function(idy) {
	    		var colspan = 0;
	    		var colno_tot = 0;
	    		var colspan_tot = 0;
	    		var colspanInfo = [];
	    		var colfoot = '';
	    		var children_check = 0;
	    		
	    		var rowspanInfo = [];
				$j(this).children().siblings().each(function(idx) {
					children_check = 1;
					// colspan üũ
					if ($j(this).attr("colspan") == undefined) {
						colspan = 1;
					} else {
						colspan = $j(this).attr("colspan");
					}
					colno_tot = Number(colno_tot) + Number(colspan);

					if (idy == 0) {
						colspanInfo.push(idx);
						rowspanInfo.push(idx);
					} 
					else {
						colspan_tot = 0;
			    		colfoot = '';
				    	for (var i = 0; i < colspanArray.length; i++) {
				    		colspan_tot = Number(colspan_tot) + Number(colspanArray[i]); 
				    		if (colno_tot <= colspan_tot) {
				    			if (colfoot != '') {
				    				colfoot = colfoot + i;
				    				colfoot = '';
				    				for (var j = (i - colspan + 1); j <= i; j++) {
				    					colfoot = colfoot + j + ',';
				    				}
				    				colfoot += '(' + colspan + ')';
				    				colspanInfo.push(colfoot);
				    				colspanRow += idy + ',';
				    			} else {
				    				colspanInfo.push(i);
				    			}
				    			break;
				    		} else {  // colspanArray ���� colspan�� Ŭ ���
				    			if (colspan > colspanArray[idx]) {
				    				colfoot = colfoot + i + ',';
				    			}
				    		}
				    	}
				    	
				    	if (pre_rowspanCheck != 0) {
					    	var colno = 0;
					    	var colcount = 0;
					    	var span_check = 0;
					    	for (var i = 0; i < rowspanArray.length; i++) {
					    		if (rowspanArray[i] == 1) {
					    			span_check = Number(colspanArray[i]) - Number(rowspanArray[i]);
					    			if (colcount == idx) {
					    				if (span_check > 0) {
					    					for (var j = 0; j < span_check; j++) {
					    						rowspanInfo.push(colno);
					    					}
					    				} else {
						    				rowspanInfo.push(colno);
					    				}
					    				break;
					    			} else {
					    				colcount++;
					    			}
					    		}
				    			colno++;
					    	}
				    	} else {
				    		rowspanInfo.push(idx);
				    	}
					}
					
					// rowspan üũ
					if (idx == 0) {  // �ʱ�ȭ
						cur_rowspanCheck = 0;
					}
					if ($j(this).attr("rowspan") != undefined && $j(this).attr("rowspan") != 1) {
						cur_rowspanCheck = $j(this).attr("rowspan");
					}
				});
				
				// column�� �� ���� ��� ���� ������ ������� ����.
				if (children_check == 0) {
					// colspan üũ
					if ($j(this).attr("colspan") == undefined) {
						colspan = 1;
					} else {
						colspan = $j(this).attr("colspan");
					}
					colno_tot = Number(colno_tot) + Number(colspan);

					if (idy == 0) {
						colspanInfo.push(0);
						rowspanInfo.push(0);
					} 
					else {
						colspan_tot = 0;
			    		colfoot = '';
				    	for (var i = 0; i < colspanArray.length; i++) {
				    		colspan_tot = Number(colspan_tot) + Number(colspanArray[i]); 
				    		if (colno_tot <= colspan_tot) {
				    			if (colfoot != '') {
				    				colfoot = colfoot + i;
				    				colfoot = '';
				    				for (var j = (i - colspan + 1); j <= i; j++) {
				    					colfoot = colfoot + j + ',';
				    				}
				    				colfoot += '(' + colspan + ')';
				    				colspanInfo.push(colfoot);
				    				colspanRow += idy + ',';
				    			} else {
				    				colspanInfo.push(i);
				    			}
				    			break;
				    		} else {  // colspanArray ���� colspan�� Ŭ ���
				    			if (colspan > colspanArray[0]) {
				    				colfoot = colfoot + i + ',';
				    			}
				    		}
				    	}
				    	
				    	if (pre_rowspanCheck != 0) {
					    	var colno = 0;
					    	var colcount = 0;
					    	var span_check = 0;
					    	for (var i = 0; i < rowspanArray.length; i++) {
					    		if (rowspanArray[i] == 1) {
					    			span_check = Number(colspanArray[i]) - Number(rowspanArray[i]);
					    			if (colcount == 0) {
					    				if (span_check > 0) {
					    					for (var j = 0; j < span_check; j++) {
					    						rowspanInfo.push(colno);
					    					}
					    				} else {
						    				rowspanInfo.push(colno);
					    				}
					    				break;
					    			} else {
					    				colcount++;
					    			}
					    		}
				    			colno++;
					    	}
				    	} else {
				    		rowspanInfo.push(0);
				    	}	
					}
					
					// rowspan üũ
					cur_rowspanCheck = 0; // �ʱ�ȭ
					if ($j(this).attr("rowspan") != undefined && $j(this).attr("rowspan") != 1) {
						cur_rowspanCheck = $j(this).attr("rowspan");
					}				    	
				}
				
				if (rowspanInfo.length > rowspanArray.length) {
					var icol = 0;
					var icolno = 0;
					for (var i = 0; i < colspanArray.length; i++) {
						for (var j = 0; j < colspanArray[i]; j++) {
							rowspanInfo[icol] = icolno;
							rowspanCheck = 1;
							icol++;
						}
						icolno++;
					}
				}
				pre_rowspanCheck = cur_rowspanCheck;
				colArray.push(colspanInfo);
				rowArray.push(rowspanInfo);
			});

	    	// header���� rowspan�� ����, tr�� rowspan�� �����ϴ� ���
			var rowspanCheck2 = 0;
			if (rowspanCheck == 0) {
		    	$j(this).parent().parent().parent().parent().parent().next().next().find("table tr").each(function(idy) {
					$j(this).children().siblings().each(function(idx) {
						var rowspan = 0;
						// rowspan üũ
						if ($j(this).attr("rowspan") == undefined) {
							rowspan = 1;
						} else {
							rowspan = $j(this).attr("rowspan");
							rowspanCheck2 = 1;
						}
						
						if (rowspan > 1) {
							for (var i = 1; i < rowspan; i++) {
								for (var j = 0; j < rowArray[idy+i].length; j++) {
									rowArray[idy+i][idx + j] = rowArray[idy+i][idx + j] + 1;
								}
							}
						}
					});
		    	});
			}
	    	
	    	var strColno = "";
	    	$j(this).parent().parent().parent().parent().parent().next().next().find("table tr").each(function(idy) {
				$j(this).children().siblings().each(function(idx) {
					var dipFlag = false;
					var colno = idx;
		    		var colspan = 0;
		    		var colspan_no = 0;

					// rowspan�� �����ϴ� ���
		    		if (rowspanCheck == 1 || rowspanCheck2 == 1) {
		    			colno = rowArray[idy][idx];
		    		} else {
		    			colno = idx;
		    		}
		    		
					// colspan�� �����ϴ� ���
					if (idy > 0 && colspanRow.indexOf(idy + ',') > -1) {
						colno = colArray[idy][idx];
					}
					
					for(var j = 0; j < visibleNo.length; j++) {
						if(visibleNo[j] == colno) {
							dipFlag = true;
							break;
						} else {
							strColno = new String(colno);
							// colspan�� ������ ���
							if (strColno.indexOf(',') >= 0) {
								var sPos = strColno.indexOf("(");
								var ePos = strColno.indexOf(")");
								colspan = strColno.substring(sPos+1, ePos); 
								if (strColno.indexOf(visibleNo[j] + ',') >= 0) {
									colspan_no++;
									dipFlag = true;
								}
							}
						}
					}
					
					// foot�� colspan�� ���ǵǾ� �ִ� ���
					if (colspan > 0) {
						if (Number(colspan) > Number(colspan_no)) {
							$j(this).attr("colspan", Number(colspan) - Number(colspan_no));
							$j(this).css("display", "");
						} else {
							$j(this).css("colspan", 1);
							$j(this).css("display", "none");
						}
					} else {
						if(dipFlag) {
							$j(this).css("display", "none");
						} else {
							$j(this).css("display", "");
						}
					}
				});
				
			});
	    });
	
	    $j(".selCancel").click(function() {
	    	$j(this).parent().parent().parent().parent().css("display", "none");
	    });
	    
	    $j(".selClose").click(function() {
	    	$j(this).parent().parent().parent().css("display", "none");
	    });	    
	} else {
		var contents = $j("#htmlData").val();
		$j("#printElementList2").html(contents);
		
		regEditStyle();
		tablePar();
		
//		PREVIEW 1 Depth Define END
//		########	NEW Define LOGIC START	############# 
		
		var printElementList = $j("#nowElementLayer").clone();
		
		printElementList.find("#pageBreaker").each(function(idx) {
			pageCnt = idx;
			
			var inputContents = $j("<div><div id='circleLayer' name='circleLayer' style='height:1100px;position:absolute;'></div></div>");
			
			inputContents.find("#circleLayer").append($j(this));

			eleArray.push(inputContents);
		});
		
		$j("#nowElementLayer").html("");
		var elementHtml = "";
		
		for(var i = 0; i < eleArray.length; i++) {
			var pageDiv = $j("<div class='divPageBreak' style='position:relative;height:1100px;'></div>");
			if(i != 0) {
				$j("#nowElementLayer").append("<p style=\"page-break-before:always\">");
				$j("#nowElementLayer").append("<!--[if IE 7]><br style=\"height:0; line-height:0\"><![endif]-->");
			}
			$j("#nowElementLayer").append(pageDiv.append(eleArray[i]));
		}
		
		$j("#mainContent").html(eleArray[0].html());
		
		$j("#nowPage").val(1);
		//$j("#totPage").html(pageCnt + 1);
		$j("#totPage").val(pageCnt + 1);

		$j("#first_page").parent().bind({
			click : function() {
				goFirstPage();
			}
		});
		
		$j("#prev_page").parent().bind({
			click : function() {
				goPrevPage();
			}
		});
		
		$j("#next_page").parent().bind({
			click : function() {
				goNextPage();
			}
		});

		$j("#last_page").parent().bind({
			click : function() {
				goLastPage();
			}
		});
//		########	NEW Define LOGIC END	#############	    
	}

});

jQuery.extend({
/**
 * Returns get parameters.
 *
 * If the desired param does not exist, null will be returned
 *
 * @example value = $j.getURLParam("paramName");
 */ 
 getURLParam: function(strParamName){
	  var strReturn = "";
	  var strHref = window.location.href;
	  var bFound=false;
	  
	  var cmpstring = strParamName + "=";
	  var cmplen = cmpstring.length;
	  if ( strHref.indexOf("?") > -1 ){
	    var strQueryString = strHref.substr(strHref.indexOf("?")+1);
	    var aQueryString = strQueryString.split("&");
	    for ( var iParam = 0; iParam < aQueryString.length; iParam++ ){
	      if (aQueryString[iParam].substr(0,cmplen)==cmpstring){
	        var aParam = aQueryString[iParam].split("=");
	        strReturn = aParam[1];
	        bFound=true;
	        break;
	      }
	      
	    }
	  }
	  if (bFound==false) return null;
	  return strReturn;
	}
});


/* print preview */
function regEditStyle() {
	var openerStyle   = $j(this).find("style").html();
	var bfOpenerStyle = $j(this).find("#styleHtml").val();
	
	$j('<style>'+bfOpenerStyle+'</style>').appendTo('body');	
	$j("style").each(function() {
		//console.log("style check=>" + $j(this).html());	
	});
}

function goPrint() {
	$j(".pagebreak").each(function(idx) {
		if(idx == 0) {
			$j(this).css("page-break-before", "avoid");
		}		
	});
	
	var nowElement_html = "<div class='pop_print' style='border:none;'>";
	nowElement_html += $j("#nowElementLayer").html();
	nowElement_html += "</div>";
	//$j("body").html($j("#nowElementLayer").html());
	$j("body").html(nowElement_html);
	window.print();
	window.close();
}

/**
 *	DIV Object �������� �� Element �� Size �� ����Ͽ� ���������� �����ϵ��� �Ѵ�.
 *	�� �׸� ������ ������ �Ұ�� ����Ʈ�� CSS �� ����Ͽ� �� �������� ������ �����Ͽ� �μ��Ҽ� �ִ�.
 **/
function tablePar() {
	var chkCnt 				= 	0;
	var pageBasicSize 		= 	1080;							//	�������� ��½� ���� SIZE (960)
	//DIV ���̾�� ȭ�� ����ϱ�	START
	var applyLayer			=	$j("<div id='NowContentareaGenerate_Print'></div>");
	var applyHtml			=	null;							//	��¿��� ��� ����
	var basicHeight			=	1080;							// 960
	
	var acDivHeight			= 	0;
	//	size ����
	var divObjHeight 		=	0;								//	���� DIV Element �� ����
	var tableObjHeight		=	0;								//	���� TABLE Element �� ����
	var trObjHeight			=	0;								//	���� TR Element �� ����
	//	temp obj ����
	var tempHtml			=	null;
	
	var tempCount			=	0;
	var divTotCount			=	0;								//	��ü DIV COUNT
	
	var pageFlag			=	false;							//	���� Element �� page offset �� �Ǵ��Ͽ� page �� �̵����� �����Ѵ�.
	
	$j("#printElementList2 > div").each(function(idx) {			//	���� ȭ�鿡 ��� ������ DIV ������ �̸� Ȯ���Ѵ�.
		divTotCount 		= 	idx;
		//	@ TODO	:	���� �ʿ�
		//$j(this).height("100%");
	});
	
	$j("#printElementList2 > div").each(function(index) {
		//$j(this).css("overflow", "hidden");
		/*	
		 * 	@ TODO	:	������ ������ üũ�ܿ� ��� ������ Ȯ�� �ʿ���
		 * 				����, ũ�ҿ����� �������� �ʿ���(size check �ÿ�)	$j(this).css("overflow", "hidden");
		 * 
		 * 	2012/08/16	�� �߰� :	$j(this).css("display", "inline-block");	IE8/IE9 ���� Height �� 0px �� ������ ����
		 * 
		 */
		if(navigator.userAgent.indexOf("MSIE 8.0") > 0 ) { 
			
		} else if(navigator.userAgent.indexOf("MSIE 7.0") > 0 ) {
			
		} else if(navigator.userAgent.indexOf("MSIE 6.0") > 0 ) {
			
		} else if(navigator.userAgent.indexOf("Navigator") > 0 ) {
			$j(this).css("overflow", "hidden");
		} else if(navigator.userAgent.indexOf("Firefox") > 0 ) {
			$j(this).css("overflow", "hidden");
		} else if(navigator.userAgent.indexOf("Chrome") > 0 ) {
			$j(this).css("overflow", "hidden");
		} else if(navigator.userAgent.indexOf("Safari") > 0 ) {
			$j(this).css("overflow", "hidden");
		}
		
		//$j(this).css("display", "inline-block");
		$j(this).css("display", "");

		//$j(this).width($j(this).width());
		
		if($j(this).height() != 0) {														//	DIV Element �� 0���� Ŭ���
			tempCount++;
			var divClone 	= 	$j(this).clone();
			var divObj 		= 	$j(this).clone();										//	Layer �� �̾� ���϶� ����ϱ� ���� ������.
			var chkPrint    =   0;
			$j("#sizechkLayer").append(divClone.addClass("prtRemoveDivCls"));			//	[APPEND-DIV]
			
			//console.log("SIZE CHK=>" + $j("#sizechkLayer").height());
			
			var title_chk = 0;
			if($j("#sizechkLayer").height() > basicHeight) {
				$j("#sizechkLayer .prtRemoveDivCls").each(function() {
					$j(this).remove();													//	������ DIV Object clear �Ѵ�.
				});
				
				divObj.children().each(function(idx) {										//	���� DIV ���̾�� ������ Object �� ����� �ش� ������ �����.
					var thisClass = $j(this).attr("class");

					if (thisClass == 'printdiv') {
						if ($j(this).find("h5")) {
							title_chk = 1;
						} else {
							$j(this).remove();
						}
					} else {
						$j(this).remove();
					}
				});
				
				if (title_chk == 1) {
					divObj.children().children().each(function(idx) {										//	���� DIV ���̾�� ������ Object �� ����� �ش� ������ �����.
						var thisClass = $j(this).attr("class");
						if (thisClass != undefined && thisClass.indexOf("tbldiv") > -1) {
							$j(this).children().remove();
						}
					});
				}
				
				// ���� ����� div class ������.(2012/07/20 �߰� Modify : TEMI)
				$j(".prtAddDivCls").each(function() {
					$j(this).removeClass("prtAddDivCls");
				});

				// ��༭�� ���� pop_inner �����ϴ� ���
				var chk_inner = "";
				if ($j(this).find(".pop_inner").length > 0) {
					chk_inner = "1";
				}
				
				if (chk_inner == "1") {
					$j(this).find(".pop_inner").children().children().each(function(idx) {
						$j("#sizechkLayer").append(divObj.addClass("prtAddDivCls"));
						
						chkPrint = 1;
						var innerClone = $j(this).clone();
						var innerObj   = $j(this).clone();
						
						$j("#sizechkLayer").find(".prtAddDivCls").append(innerClone.addClass("prtRemoveTableCls").attr("style", "margin-bottom:10px;"));	//	[APPEND-TABLE]
						
						if($j("#sizechkLayer").height() > basicHeight) {
							$j("#sizechkLayer .prtAddDivCls .prtRemoveTableCls").each(function() {
								$j(this).remove();
							});
							
							var applyHtml = $j(prtDivBorder);
							applyHtml.append($j("#sizechkLayer").clone());
							
							$j("#nowElementLayer").append(applyHtml.clone());
							//	2.
							$j("#sizechkLayer").empty();
							//	3.
							divObj.removeClass("prtRemoveDivCls");
							divObj.removeClass("prtRemoveTableCls");
							$j("#sizechkLayer").append(divObj.empty().append(innerObj).append("<br />"));
						} else {
							$j("#sizechkLayer .prtRemoveTableCls").each(function() {
								$j(this).removeClass("prtRemoveTableCls");
							});
						}
					});
				}

				// �˾����� ����¡ ó��
				if (chkPrint == 0) {
					$j(this).find(".pop_cont").each(function() {
						var divPopObj = $j(this).clone();
						
						divPopObj.children().each(function(idx) {										//	���� DIV ���̾�� ������ Object �� ����� �ش� ������ �����.
							$j("#sizechkLayer").append(divObj.addClass("prtAddDivCls"));
							
							chkPrint = 1;
							var transferClone = $j(this).clone();
							var transferObj	  = $j(this).clone();
							
							$j("#sizechkLayer").find(".prtAddDivCls").append(transferClone.addClass("prtRemoveTableCls"));	//	[APPEND-TABLE]
							
							if($j("#sizechkLayer").height() > basicHeight) {
								$j("#sizechkLayer .prtAddDivCls .prtRemoveTableCls").each(function() {
									$j(this).remove();
								});
								
								var applyHtml = $j(prtDivBorder);
								applyHtml.append($j("#sizechkLayer").clone());
								
								$j("#nowElementLayer").append(applyHtml.clone());
								//	2.
								$j("#sizechkLayer").empty();
								//	3.
								divObj.removeClass("prtRemoveDivCls");
								divObj.removeClass("prtRemoveTableCls");
								$j("#sizechkLayer").append(divObj.empty().append(transferObj));
							} else {
								$j("#sizechkLayer .prtRemoveTableCls").each(function() {
									$j(this).removeClass("prtRemoveTableCls");
								});
							}
						});					
					});	
				}

				// ����, ������ ���̺� ������ �Ǿ� �ִ� ���
				if (chkPrint == 0) {
					$j(this).find(".transferDiv").each(function() {
						$j("#sizechkLayer").append(divObj.addClass("prtAddDivCls"));
						
						chkPrint = 1;
						var transferClone = $j(this).clone();
						var transferObj	  = $j(this).clone();

						$j("#sizechkLayer").find(".prtAddDivCls").append(transferClone.addClass("prtRemoveTableCls"));	//	[APPEND-TABLE]
						
						if($j("#sizechkLayer").height() > basicHeight) {
							$j("#sizechkLayer .prtAddDivCls .prtRemoveTableCls").each(function() {
								$j(this).remove();
							});
							
							var applyHtml = $j(prtDivBorder);
							applyHtml.append($j("#sizechkLayer").clone());
							
							$j("#nowElementLayer").append(applyHtml.clone());
							//	2.
							$j("#sizechkLayer").empty();
							//	3.
							divObj.removeClass("prtRemoveDivCls");
							divObj.removeClass("prtRemoveTableCls");
							$j("#sizechkLayer").append(divObj.empty().append(transferObj));
						} else {
							$j("#sizechkLayer .prtRemoveTableCls").each(function() {
								$j(this).removeClass("prtRemoveTableCls");
							});
						}
					});
				}
				
//	CASE TABLE	[[[[[[[[TABLE �ϰ��]]]]]]]]
				if (chkPrint == 0) {
					if (title_chk == 0) {
						$j("#sizechkLayer").append(divObj.addClass("prtAddDivCls tbldiv"));	//	DIV �׵θ��� ����
					} else {
						$j("#sizechkLayer").append(divObj.addClass("prtAddDivCls"));
					}
					
					$j(this).find("table").each(function() {									//	LOOP
						var tableClone 	= 	$j(this).clone();
						var tableObj	=	$j(this).clone();
						
						$j("#sizechkLayer").find(".prtAddDivCls").append(tableClone.addClass("prtRemoveTableCls"));	//	[APPEND-TABLE]
						if($j("#sizechkLayer").height() > basicHeight) {
							$j("#sizechkLayer .prtAddDivCls .prtRemoveTableCls").each(function() {
								$j(this).remove();
							});
							
							tableObj.find("tbody tr").each(function(idx) {
								$j(this).remove();
							});
							
							//	CHECK	TEST	START
							var newTableObj	=	"";
							$j(this).parentsUntil("#printElementList2 > div").each(function(idx) {
								$j(this).find("TBODY").children().each(function(idx) {
									$j(this).remove();
								});
								newTableObj	=	$j(this);
							});
							newTableObj.find("TABLE").each(function() {
								$j(this).addClass("PRT_NEWTABLE");
							});
							//console.log("AFTER THEN HTML=>" + newTableObj.html());
							//alert("AFTER THEN HTML=>" + newTableObj.html());
							// CHECK	TEST END
							
							$j("#sizechkLayer").find(".prtAddDivCls").each(function() {
								if (title_chk == 0) {
									$j(this).append(tableObj.addClass("prtAddTableCls"));
								} else {
									$j(this).find(".tbldiv").each(function() {
										$j(this).append(tableObj.addClass("prtAddTableCls"));
									});
								}
							});
							
							tableClone.find("tbody tr").each(function() {
								var trClone	=	$j(this).clone();
								$j("#sizechkLayer").find(".prtAddDivCls .prtAddTableCls tbody").append(trClone.addClass("prtRemoveTrCls"));	//	[APPEND-TR]
								
								if($j("#sizechkLayer").height() > basicHeight) {
									$j("#sizechkLayer").find(".prtRemoveTrCls").each(function() {
										$j(this).remove();
									});
									//	@TODO : TR ���� A4 ����� ������ ���ϸ� ���̺��� ������Ҽ� �ְ� ���ش�.
									//
									//	Logic Definde
									//	1. 	Page division Gubun Object insert
									//	2. 	sizechkLayer remove
									//	3. 	Now Tr Element  sizechkLayer insert
									//	4.	remove Class
									//	1.
									var applyHtml = $j(prtDivBorder);
									applyHtml.append($j("#sizechkLayer").clone());
									
									$j("#nowElementLayer").append(applyHtml.clone());
									//	2.
									$j("#sizechkLayer").empty();
									//	3.
									divObj.removeClass("prtRemoveDivCls");
									tableObj.removeClass("prtRemoveTrCls");
									tableObj.find("tbody tr").each(function() {
										$j(this).remove();
									});
									$j("#sizechkLayer").append(divObj.empty().append(tableObj.append($j(this))));
								} else {
									$j("#sizechkLayer .prtRemoveTrCls").each(function() {
										$j(this).removeClass("prtRemoveTrCls");
									});
								}
							});
							tableObj.removeClass("prtAddTableCls");
						} else {
							$j("#sizechkLayer .prtRemoveTableCls").each(function() {
								$j(this).removeClass("prtRemoveTableCls");
							});
						}
					});
				} else {
					$j(this).find(".total").each(function() {
						$j("#sizechkLayer").children().append($j(this));
					});
				}
				
				$j(this).find("EMBED").each(function() {
					$j("#sizechkLayer").append($j(this).parent());
				});

				//	IMAGE �ΰ��
				/*	@TODO : ���̺� �ܿ� �ٸ� �ڵ� ã�ƾ� ��.
				 *	
				 *	img : �ش� img ����� ��ҽ�Ų��.
				 *	
				 *	STEP 1 	: DIV ���� element �� ���� ������ �����ϰ� ���� object �� ������ �����ϸ� ����
				 *	STEP 2	: DIV ���� element �� ���� ������ �����ؼ� Ŭ��� size �� ����ؼ� �����Ѵ�.
				 */
				$j(this).find("img").each(function() {					
					var imgObj 		= $j(this);
					var imgObj_src  = $j(this).attr("src");
					imgObj_src      = imgObj_src.toLowerCase();
					
					// sorting ���� �̹����� ���ؼ��� ó�� ���� ó���Ѵ�.
					if (imgObj_src.indexOf("sort_up.gif") == - 1 && 
						imgObj_src.indexOf("sort_down.gif") == -1 &&
						imgObj_src.indexOf("arrow1.gif") == -1 &&
						imgObj_src.indexOf("stamp.gif") == -1) {
						var nowSizeEle 	= basicHeight - $j("#sizechkLayer").height();
						
						$j("#sizechkLayer").find(".prtAddDivCls").append(imgObj.addClass("prtRemoveImgCls"));	//	[APPEND-img]
						
						var nowImgSize 	= imgObj.height();
						//console.log("���� �ܿ� SIZE=>" + nowSizeEle + ", ���� ��� �̹��� ������=>" + nowImgSize);
					
						if(nowImgSize > basicHeight) {			//	�����̹����� A4 ������� Ŭ��� 
							//	@TODO:	�̹��� ������ ����ؾ���.
							//console.log("############	���� ��� �̹��� SIZE A4 ������ ���� ŭ");
							//console.log("���� ������ Ȯ��=>" + $j("#sizechkLayer").height());
							$j("#sizechkLayer .prtRemoveImgCls").each(function() {
								$j(this).remove();													//	������ img Object clear �Ѵ�.
							});
							//console.log("������ ������ Ȯ��=>" + $j("#sizechkLayer").height());
						} else {								//	���� �̹����� A4 ������� �������
							//	@TODO: ��� ����� 0���� �������
							if($j("#sizechkLayer").height() > basicHeight) {
								//	@TODO : �μ⸦ ������������ �ѱ⵵�� �ؾ���.
								//	���� ��ϵ� img �� �������� �ű� div ���̾� �߰��� img �߰��ؾ���.
								$j("#sizechkLayer .prtRemoveImgCls").each(function() {
									$j(this).remove();													//	������ img Object clear �Ѵ�.
									//console.log("����� �̹��� ������.");
								});
								var applyHtml = $j(prtDivBorder);
								applyHtml.append($j("#sizechkLayer").clone());
								$j("#nowElementLayer").append(applyHtml.clone());
								//	2.
								$j("#sizechkLayer").empty();
								//	3.
								divObj.removeClass("prtRemoveDivCls");
								imgObj.removeClass("prtRemoveImgCls");
								$j("#sizechkLayer").append(divObj.empty().append($j(this)));
							} else {
								//	pass
								$j(".prtRemoveImgCls").each(function() {
									$j(this).removeClass("prtRemoveImgCls");
								});
							}
						}
					}
				});
				
/**********************************************************************************************************************************************/
				var ulIdxTot	=	0;
				var madeUlCnt	=	0;
				var ulClone		=	$j(this);
				
				/*
				ulClone.find("ul").each(function(idx) {
					$j(this).addClass("prtUlRemoveCls");
					$j(this).css("display", "none");
				});
				
				ulClone.find("ul").each(function(chkIdx) {
					var nowSizeEle 	= basicHeight - $j("#sizechkLayer").height();
					
					$j(this).css("display", "");
					madeUlCnt	=	chkIdx;

					var ulSize	=	ulClone.height();
					
					if(nowSizeEle > ulSize) {
						$j("#sizechkLayer").append(divObj.empty().append(ulClone));
					} else {
						$j(this).css("display", "none");
					}
				});
				*/
				
/******************************************************************************************************************************************************/
//	dl tag �ΰ��

			} else {
				$j("#sizechkLayer .prtRemoveDivCls").each(function() {
					$j(this).removeClass("prtRemoveDivCls");
				});
			}
			$j("#sizechkLayer").removeClass("prtRemoveDivCls");
		}
		if(index == divTotCount) {
			var applyHtml = $j(prtDivBorder);
			applyHtml.append($j("#sizechkLayer").clone());
			$j("#nowElementLayer").append(applyHtml.clone());
		}
	});
	
	$j("#printElementList2 div").each(function(index) {
		$j(this).remove();
	});
	
	$j("#sizechkLayer").each(function() {
		$j(this).remove();
	});
	
	$j("#nowElementLayer").css("display", "none");
}

function goPrevPage() {
	if(idkey == 0) {
		alert("ó�� ������ �Դϴ�.");
		return;
	} else {
		idkey = idkey-1;
		$j("#mainContent").html(eleArray[idkey].html());
	}
	$j("#nowPage").val(idkey+1);
}

function goFirstPage() {
	idkey = 0;
	$j("#mainContent").html(eleArray[idkey].html());
	$j("#nowPage").val(idkey+1);
}

function goNextPage() {
	if(idkey == pageCnt) {
		alert("������ ������ �Դϴ�.");
		return;
	} else {
		idkey = idkey+1;
		$j("#mainContent").html(eleArray[idkey].html());
	}
	$j("#nowPage").val(idkey+1);
}

function goLastPage() {
	idkey = pageCnt;
	$j("#mainContent").html(eleArray[idkey].html());
	$j("#nowPage").val(pageCnt+1);
}


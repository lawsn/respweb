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
//	출력할 DIV 영역지정(인쇄시 해당 SIZE 만큼 Content를 채워준다).
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
	    
	    // layer 팝업에 따른 순서 중요
	    // 하나 이상의 layer 팝업이 나타날 경우, 최상위 Layer 팝업을 기준으로 처리하기 위해 eq(0)을 사용
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
			
			// pop_cont를 프린트할 경우에는 tbl_tbldiv 영역은 프린트 영역에서 제외처리한다.
	        if (chkPrintDiv == "" && popup_chk == "*" && 
	        		(thisClass.indexOf("tbl_tbldiv") > -1 || thisClass.indexOf("tbldiv") > -1)) {
				chkPrintDiv = "*";
			}
			
	        // display:none으로 정의되어 있는 영역은 프린트에서 제외처리한다.
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
		            // div 안에 script 문장이 있을 경우에 대한 처리
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
		            
		            // radio 버튼일 경우, 인쇄미리보기에서 선택값이 전달되지 않으므로,
		            // 이것을 해결하기 위하여 radio 버튼을 없애고 선택된 값만 가지고 있도록 함.
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
						            	//	$j(this).next().remove();  // label 정보를 없앤다.
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

					            		$j(this).remove();	// radio 버튼을 없앰.
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
						// Header가 여러 행일 때, 첫 행을 기준으로 처리
						if (idy == 0 && popup_chk == "") {
							var layer_contents;

							layer_contents  = "<div class='sub_layer' style='position:absolute;display:none;left:370px;z-index:998'>";
							layer_contents += "   <div class='sub_area'><h4>출력항목 선택</h4>";
							layer_contents += "       <ul>";
							
							$j(this).find("th").each(function(idx) {
								// 첫 라인에 colspan이 존재하는 경우에는 해당 컬럼에 대해 uncheck 할 수 없도록 한다.
								if ($j(this).attr("colspan") == undefined || $j(this).attr("colspan") == 1) {
									layer_contents += "<li><input id='" + idcon + '_' + idx + "' type='checkbox' checked /> <label for='" + idcon + '_' + idx + "'>" + $j(this).text() + "</label></li>";
								} else {
									layer_contents += "<li><input id='" + idcon + '_' + idx + "' type='checkbox' checked disabled /> <label for='" + idcon + '_' + idx + "'>" + $j(this).text() + "</label></li>";
								}
							});
							
							layer_contents += "</ul>";
							layer_contents += "<div class='btn_ex01'>";
							layer_contents += "<span><a href='#' class='selClick'>확인</a></span>";
							layer_contents += "<span class='exty01'><a href='#' class='selCancel'>닫기</a></span>";
							layer_contents += "</div>";
							layer_contents += "<div class='pop_close'><a href='#' class='selClose'><img src='" + opb.base.IMG_SVR_DOMAIN +"/resource/img/common/btn_popcloseSmall.gif' alt='팝업 닫기' /></a></div>";
							layer_contents += "</div></div>";
							
							printElement.find(".printElement").eq(0).prev().append(layer_contents);
							printElement.find(".printElement").eq(0).prev().append($j("<div class='thnameSelect btn_right02'><span class='f_btn'><a href='#'>인쇄항목편집</a></span></div>"));
							
							pchk_area_cnt++;
						}
					});
					printElement.find(".printElement").eq(0).parent().append(objContent);
	
		            printElementList.append(printElement);
		            contentsCnt++;
		        }
            }
	    });
	    
	    // 컨텐츠 항목이 하나일 경우 인쇄 여부를 확인하는 checkbox 부분을 제거함.
	    if (contentsCnt == 1) {
	    	$j(".pChk_area").remove();
	    }
	    
	    $j(".printElement *").click(function() { });
	    $j("object").css("width", "964px");  // 1024 - 60 
	    $j("#printElementList>h3>span").remove();
	    
	    $j("#scroll").remove();

		// 인쇄항목편집이 존재하는 페이지에서, FF, IE8에서 display:block 일 때 발생하는 예외사항 처리
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
	    		$j(this).prev().css("display", "");		// block 처리 (모든 browser에서 적용하도록 block 대신 처리)
	    		$j(this).prev().focus();
	    	} else {
	    		$j(this).prev().css("display", "none");
	    	}
	    	
	    	var visibleKey = [];
	    	
	    	$j(this).parent().parent().find("thead th").each(function(idx) {
	    		if($j(this).css("display") != "none") {
	    			//visibleKey.push($j(this).text());
	    			visibleKey.push("0_" + idx);  // text로 처리할 경우에 동일한 제목을 가지게 될 경우에 문제 있음.
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
				// Header가 여러 행일 때, 첫 행을 기준으로 처리
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
	    	
	    	// colspan 항목이 존재하는지 체크
	    	colspanFoot = [];
	    	$j(this).parent().parent().find("table tr").each(function(idy) {
	    		var colspan = 0;
	    		var colno_tot = 0;
	    		var colspan_tot = 0;
	    		var colspanInfo = [];
	    		var colfoot = '';
	    		
				$j(this).children().siblings().each(function(idx) {
					children_check = 1;
					// colspan 체크
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
			    		} else {  // colspanArray 보다 colspan이 클 경우
			    			if (colspan > colspanArray[idx]) {
			    				colfoot = colfoot + i + ',';
			    			}
			    		}
					}
				});
				
				// row가 한 개일 경우 위의 문장이 실행되지 않음.
				if (children_check == 0) {
					// colspan 체크
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
			    		} else {  // colspanArray 보다 colspan이 클 경우
			    			if (colspan > colspanArray[0]) {
			    				colfoot = colfoot + i + ',';
			    			}
			    		}
					}
				}
	    	});
	    });
	    
	    //	선택 레이어 확인버튼 클릭
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
    		    		alert('합쳐진 열이 존재하는 항목은 제외할 수 없습니다.');
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
	    		alert('반드시 하나 이상 체크해야 합니다.');
	    		return;
	    	}
	    	
	    	rowspanArray = [];
	    	colspanArray = [];
	    	$j(this).parent().parent().parent().parent().parent().next().next().find("thead tr").each(function(idx) {
				// Header가 여러 행일 때, 첫 행을 기준으로 처리
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
					// colspan 체크
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
				    		} else {  // colspanArray 보다 colspan이 클 경우
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
					
					// rowspan 체크
					if (idx == 0) {  // 초기화
						cur_rowspanCheck = 0;
					}
					if ($j(this).attr("rowspan") != undefined && $j(this).attr("rowspan") != 1) {
						cur_rowspanCheck = $j(this).attr("rowspan");
					}
				});
				
				// column이 한 개일 경우 위의 문장이 실행되지 않음.
				if (children_check == 0) {
					// colspan 체크
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
				    		} else {  // colspanArray 보다 colspan이 클 경우
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
					
					// rowspan 체크
					cur_rowspanCheck = 0; // 초기화
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

	    	// header에는 rowspan이 없고, tr에 rowspan이 존재하는 경우
			var rowspanCheck2 = 0;
			if (rowspanCheck == 0) {
		    	$j(this).parent().parent().parent().parent().parent().next().next().find("table tr").each(function(idy) {
					$j(this).children().siblings().each(function(idx) {
						var rowspan = 0;
						// rowspan 체크
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

					// rowspan이 존재하는 경우
		    		if (rowspanCheck == 1 || rowspanCheck2 == 1) {
		    			colno = rowArray[idy][idx];
		    		} else {
		    			colno = idx;
		    		}
		    		
					// colspan이 존재하는 경우
					if (idy > 0 && colspanRow.indexOf(idy + ',') > -1) {
						colno = colArray[idy][idx];
					}
					
					for(var j = 0; j < visibleNo.length; j++) {
						if(visibleNo[j] == colno) {
							dipFlag = true;
							break;
						} else {
							strColno = new String(colno);
							// colspan이 존재할 경우
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
					
					// foot에 colspan이 정의되어 있는 경우
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
 *	DIV Object 기준으로 각 Element 의 Size 를 계산하여 한페이지를 구성하도록 한다.
 *	각 항목 단위로 구성을 할경우 프린트시 CSS 를 사용하여 각 페이지를 강제로 지정하여 인쇄할수 있다.
 **/
function tablePar() {
	var chkCnt 				= 	0;
	var pageBasicSize 		= 	1080;							//	한페이지 출력시 기준 SIZE (960)
	//DIV 레이어당 화면 계산하기	START
	var applyLayer			=	$j("<div id='NowContentareaGenerate_Print'></div>");
	var applyHtml			=	null;							//	출력영영 담는 변수
	var basicHeight			=	1080;							// 960
	
	var acDivHeight			= 	0;
	//	size 관련
	var divObjHeight 		=	0;								//	현재 DIV Element 의 높이
	var tableObjHeight		=	0;								//	현재 TABLE Element 의 높이
	var trObjHeight			=	0;								//	현재 TR Element 의 높이
	//	temp obj 관련
	var tempHtml			=	null;
	
	var tempCount			=	0;
	var divTotCount			=	0;								//	전체 DIV COUNT
	
	var pageFlag			=	false;							//	현재 Element 의 page offset 을 판단하여 page 를 이동할지 결정한다.
	
	$j("#printElementList2 > div").each(function(idx) {			//	현재 화면에 출력 가능한 DIV 갯수를 미리 확인한다.
		divTotCount 		= 	idx;
		//	@ TODO	:	삭제 필요
		//$j(this).height("100%");
	});
	
	$j("#printElementList2 > div").each(function(index) {
		//$j(this).css("overflow", "hidden");
		/*	
		 * 	@ TODO	:	브라우저 버젼별 체크외에 방법 없는지 확인 필요함
		 * 				파폭, 크롬에서는 다음조건 필요함(size check 시에)	$j(this).css("overflow", "hidden");
		 * 
		 * 	2012/08/16	일 추가 :	$j(this).css("display", "inline-block");	IE8/IE9 에서 Height 가 0px 로 뜸으로 인해
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
		
		if($j(this).height() != 0) {														//	DIV Element 가 0보다 클경우
			tempCount++;
			var divClone 	= 	$j(this).clone();
			var divObj 		= 	$j(this).clone();										//	Layer 를 이어 붙일때 사용하기 위해 복사함.
			var chkPrint    =   0;
			$j("#sizechkLayer").append(divClone.addClass("prtRemoveDivCls"));			//	[APPEND-DIV]
			
			//console.log("SIZE CHK=>" + $j("#sizechkLayer").height());
			
			var title_chk = 0;
			if($j("#sizechkLayer").height() > basicHeight) {
				$j("#sizechkLayer .prtRemoveDivCls").each(function() {
					$j(this).remove();													//	삽입한 DIV Object clear 한다.
				});
				
				divObj.children().each(function(idx) {										//	현재 DIV 레이어와 동일한 Object 를 만들고 해당 내용을 지운다.
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
					divObj.children().children().each(function(idx) {										//	현재 DIV 레이어와 동일한 Object 를 만들고 해당 내용을 지운다.
						var thisClass = $j(this).attr("class");
						if (thisClass != undefined && thisClass.indexOf("tbldiv") > -1) {
							$j(this).children().remove();
						}
					});
				}
				
				// 이전 등록한 div class 제거함.(2012/07/20 추가 Modify : TEMI)
				$j(".prtAddDivCls").each(function() {
					$j(this).removeClass("prtAddDivCls");
				});

				// 계약서와 같은 pop_inner 존재하는 경우
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

				// 팝업에서 페이징 처리
				if (chkPrint == 0) {
					$j(this).find(".pop_cont").each(function() {
						var divPopObj = $j(this).clone();
						
						divPopObj.children().each(function(idx) {										//	현재 DIV 레이어와 동일한 Object 를 만들고 해당 내용을 지운다.
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

				// 왼쪽, 오른쪽 테이블 구성이 되어 있는 경우
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
				
//	CASE TABLE	[[[[[[[[TABLE 일경우]]]]]]]]
				if (chkPrint == 0) {
					if (title_chk == 0) {
						$j("#sizechkLayer").append(divObj.addClass("prtAddDivCls tbldiv"));	//	DIV 테두리를 삽입
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
									//	@TODO : TR 까지 A4 사이즈를 만들지 못하면 테이블을 재생성할수 있게 해준다.
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

				//	IMAGE 인경우
				/*	@TODO : 테이블 외에 다른 코드 찾아야 함.
				 *	
				 *	img : 해당 img 사이즈를 축소시킨다.
				 *	
				 *	STEP 1 	: DIV 내부 element 를 각각 나누어 삽입하고 개별 object 가 삽입이 가능하면 삽입
				 *	STEP 2	: DIV 내부 element 를 각각 나누어 삽입해서 클경우 size 를 축소해서 삽입한다.
				 */
				$j(this).find("img").each(function() {					
					var imgObj 		= $j(this);
					var imgObj_src  = $j(this).attr("src");
					imgObj_src      = imgObj_src.toLowerCase();
					
					// sorting 관련 이미지에 대해서는 처리 제외 처리한다.
					if (imgObj_src.indexOf("sort_up.gif") == - 1 && 
						imgObj_src.indexOf("sort_down.gif") == -1 &&
						imgObj_src.indexOf("arrow1.gif") == -1 &&
						imgObj_src.indexOf("stamp.gif") == -1) {
						var nowSizeEle 	= basicHeight - $j("#sizechkLayer").height();
						
						$j("#sizechkLayer").find(".prtAddDivCls").append(imgObj.addClass("prtRemoveImgCls"));	//	[APPEND-img]
						
						var nowImgSize 	= imgObj.height();
						//console.log("현재 잔여 SIZE=>" + nowSizeEle + ", 현재 등록 이미지 사이즈=>" + nowImgSize);
					
						if(nowImgSize > basicHeight) {			//	단일이미지가 A4 사이즈보다 클경우 
							//	@TODO:	이미지 사이즈 축소해야함.
							//console.log("############	현재 등록 이미지 SIZE A4 사이즈 보다 큼");
							//console.log("현재 사이즈 확인=>" + $j("#sizechkLayer").height());
							$j("#sizechkLayer .prtRemoveImgCls").each(function() {
								$j(this).remove();													//	삽입한 img Object clear 한다.
							});
							//console.log("제거후 사이즈 확인=>" + $j("#sizechkLayer").height());
						} else {								//	단일 이미지가 A4 사이즈보다 작을경우
							//	@TODO: 등록 사이즈가 0보다 작을경우
							if($j("#sizechkLayer").height() > basicHeight) {
								//	@TODO : 인쇄를 다음페이지로 넘기도록 해야함.
								//	현재 등록된 img 를 제거한후 신규 div 레이어 추가후 img 추가해야함.
								$j("#sizechkLayer .prtRemoveImgCls").each(function() {
									$j(this).remove();													//	삽입한 img Object clear 한다.
									//console.log("등록한 이미지 제거함.");
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
//	dl tag 인경우

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
		alert("처음 페이지 입니다.");
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
		alert("마지막 페이지 입니다.");
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


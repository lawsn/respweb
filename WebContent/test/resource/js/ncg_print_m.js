/**
 * 인쇄편집하기 팝업
 */
var printPopup = {
	defaultOption : {
		menubar : "no",
		scrollbars : "no",
		resizable : "no",
		status : "no",
		width : 817,
		height : 678,
		top : (screen.height - 678)/2,
		left : (screen.width - 817)/2,
		isMultiSelect : false,
		callbackF : null
	},

	printPopupWindow : null,
	
	/**
	 * 팝업창을 띄움.
	 * @param id 	: 팝업객체의 ID
	 * @param param : 파라미터
	 * @param url	: 호출 URL
	 */
	open : function () {
		var id = "printPopupWindow1";
		var param = "&pType=edit";
		var url = "/common/div_print.do";
		
		//alert('navigator.userAgent: ' + navigator.userAgent);
		
		if(navigator.userAgent.indexOf("MSIE 8.0") > 0 ) { 
			
		} else if(navigator.userAgent.indexOf("MSIE 7.0") > 0 ) {
			
		} else if(navigator.userAgent.indexOf("MSIE 6.0") > 0 ) {
			
		} else if(navigator.userAgent.indexOf("Navigator") > 0 ) {

		} else if(navigator.userAgent.indexOf("Firefox") > 0 ) { // width, height (IE 기준으로 +4)
			this.defaultOption.width = 821;
			this.defaultOption.height = 682;
		} else if(navigator.userAgent.indexOf("Chrome") > 0 ) { // width, height (IE 기준으로 +4)
			this.defaultOption.width = 821;
			this.defaultOption.height = 682;
		} else if(navigator.userAgent.indexOf("Safari") > 0 ) {  // width+4, height-84 (IE 기준)
			this.defaultOption.width = 821;
			this.defaultOption.height = 594;
		}
		
		this.printPopupWindow = window.open(
			url + "?isMultiSelect=" + this.defaultOption.isMultiSelect + param,
			"prtPop",
			"menubar=" + this.defaultOption.menubar + ",scrollbars=" + this.defaultOption.scrollbars 
			+ ",resizable=" + this.defaultOption.resizable + ",status=" + this.defaultOption.status 
			+ ",width=" + this.defaultOption.width + ",height=" + this.defaultOption.height 
			+ ",top=" + this.defaultOption.top + ",left=" + this.defaultOption.left
		);
	}
};

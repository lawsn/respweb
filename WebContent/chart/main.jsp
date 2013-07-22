<%@ page language="java" contentType="text/html; charset=EUC-KR" pageEncoding="EUC-KR"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>챠트 메인 화면</title>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/jsapi.js"></script>
<script type="text/javascript">
	var viewChart = function(type) {
		$.post('${pageContext.request.contextPath}/test/' + type + 'GoogleCharts.do', function(data) {
			
			var $header = $(data).find('header');
			var _result = $header.find('result').attr('value');
			
			/* 실패 일 경우 (SUCCESS 가 아닌 경우) 에러메세지를 출력한다. */
			if(_result != 'SUCCESS') {
				var errorMessage = $header.find('result').text();
				alert(errorMessage);
				return;
			}
			
			var $content = $(data).find('content');
			alert($content.find('category').attr('value') + ' :: ' + $content.find('category').text());

			pieChart();
		});
	};
	
	// Load the Visualization API and the piechart package. 
	google.load('visualization', '1.0', {'packages' : ['corechart']});

	// Set a callback to run when the Google Visualization API is loaded. 
	//google.setOnLoadCallback(drawChart);

	// Callback that creates and populates a data table, 
	// instantiates the pie chart, passes in the data and 
	// draws it. 
	var pieChart = function() {

		// Create the data table. 
		var data = new google.visualization.DataTable();
		data.addColumn('string', 'Goods');
		data.addColumn('number', 'Percent');
		data.addRows([
				['주식', 96.37],
				['채권', 0],
				['선물옵션', 0.01],
				['유동성', 0.05],
				['기타', 3.57]
			]);

		// Set chart options 
		var options = {
			'title' : '자산별 현황',
			'width' : 400,
			'height' : 300
		};

		// Instantiate and draw our chart, passing in some options. 
		//var chart = new google.visualization.PieChart($('#drawer')[0]);
		var chart = new google.visualization.barChart($('#drawer')[0]);
		chart.draw(data, options);
	}
	
</script>
</head>
<body>
<ul id="chartList">
	<li onclick="viewChart('pie');">pie Chart</li>
	<li onclick="viewChart('bar');">bar Chart</li>
	<li onclick="viewChart('line');">line chart</li>
</ul>

<div id="drawer"></div>
</body>
</html>
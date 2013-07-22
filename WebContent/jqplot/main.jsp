<%@ page language="java" contentType="text/html; charset=EUC-KR" pageEncoding="EUC-KR"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>챠트 메인 화면</title>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/jqplot/jquery.jqplot.js"></script>
<!-- Line Chart -->
<script type="text/javascript" src="${pageContext.request.contextPath}/js/jqplot/jqplot.canvasTextRenderer.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/jqplot/jqplot.canvasAxisLabelRenderer.js"></script>
<!-- Bar Chart -->
<script type="text/javascript" src="${pageContext.request.contextPath}/js/jqplot/jqplot.barRenderer.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/jqplot/jqplot.categoryAxisRenderer.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/jqplot/jqplot.pointLabels.js"></script>
<!-- Pie Chart -->
<script type="text/javascript" src="${pageContext.request.contextPath}/js/jqplot/jqplot.pieRenderer.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/jqplot/jqplot.donutRenderer.js"></script>
<script type="text/javascript">
	var viewChart = function(type) {
		$.post('${pageContext.request.contextPath}/test/' + type + 'JQPlot.do', function(data) {
			
			var $header = $(data).find('header');
			var _result = $header.find('result').attr('value');
			
			/* 실패 일 경우 (SUCCESS 가 아닌 경우) 에러메세지를 출력한다. */
			if(_result != 'SUCCESS') {
				var errorMessage = $header.find('result').text();
				alert(errorMessage);
				return;
			}
			
			var $content = $(data).find('content');
			//alert($content.find('category').attr('value') + ' :: ' + $content.find('category').text());

			$('#chart1').html('');
			eval(type + 'Chart()');
		});
	};
	
	var pieChart = function() {
		var data = [
			['Heavy Industry', 12], ['Retail', 9], ['Light Industry', 14],
			['Out of home', 16], ['Commuting', 7], ['Orientation', 9]
		];
		
		var plot1 = $.jqplot('chart1', [data],
			{
				seriesDefaults: {
					renderer: $.jqplot.PieRenderer,
					rendererOptions: {
						showDataLabels: true
					}
				},
		
				legend: {show:true, location: 'e'}
			}
		);
	};
	
	var barChart = function() {
		var s1 = [200, 600, 700, 1000];
		var s2 = [460, -210, 690, 820];
		var s3 = [-260, -440, 320, 200];
		
		var ticks = ['May', 'June', 'July', 'August'];
		
		var plot1 = $.jqplot('chart1', [s1, s2, s3], {
			seriesDefaults:{
				renderer:$.jqplot.BarRenderer,
				renderrerOptions: {fillToZero: true}
			},
			
			series:[
				{label:'Hotel'},
				{label:'Event Regristration'},
				{label:'Airfare'}
			],
			
			legend: {
				show: true,
				placement: 'outsideGrid'
			},
			
			axes: {
				xaxis: {
					renderer: $.jqplot.CategoryAxisRenderer,
					ticks: ticks
				},
				yaxis: {
					pad: 1.05,
					tickOptions: {formatString: '$%d'}
				}
			}
		});
	};
	
	var lineChart = function() {
		var plot1 = $.jqplot('chart1', [[3,7,9,1,4,6,8,2,5]]);
	};
	
</script>
</head>
<body>
<ul id="chartList">
	<li onclick="viewChart('pie');">pie Chart</li>
	<li onclick="viewChart('bar');">bar Chart</li>
	<li onclick="viewChart('line');">line chart</li>
</ul>

<div id="chart1"></div>
</body>
</html>
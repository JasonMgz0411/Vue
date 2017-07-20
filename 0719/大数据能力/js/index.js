$(function() {
	//数字翻转插件
	var num = 1234567890;
	flip(num);
	setInterval(function() {
		flip(num);
	}, 2000);

	function flip(num) {
		var endVal = $("#myTargetElement").text();
		endVal = Number(endVal.replace(',', '').replace(' ', ''));
		demoAnim = new countUp("myTargetElement", num, 2, 1);
		demoAnim.start();
	}
	setLine({
		xdata: ['2016年3月', '2016年6月', '2016年9月', '2016年12月', '2017年3月', '2017年6月'],
		ydata: [1500, 1600, 15000, 20000, 25000, 60000],
		label: {
			'2017年3月': ['阅读', '餐饮', '电影', '微信公众号分类偏好'],
			'2017年6月': ['咪咕视频', '爱奇艺', '淘宝', '京东']
		}
	});
	setBar({
		xdata: ['手机通话', '移动上网', '位置轨迹'],
		ydata: [15000000, 1600000, 15000000],
		ydata0: [100000000, 60000, 3000000]
	});
	setInterval(function() {
		setBar({
			xdata: ['手机通话', '移动上网', '位置轨迹'],
			ydata: [15000000, 1600000, 15000000],
			ydata0: [Math.random() * 100000000, Math.random() * 60000, Math.random() * 3000000]
		});
	}, 1000);
});

function setLine(data) {
	var ec = echarts.init(document.getElementById('lineCont'));
	var max = (Math.max.apply(null, data.ydata) + '').length * 9;
	ec.setOption({
		grid: {
			right: 0,
			left: max,
			top: 30
		},
		tooltip: {
			show: false
		},
		xAxis: {
			type: 'category',
			data: data.xdata,
			axisLine: {
				lineStyle: {
					color: "rgba(47,47,73,.5)"
				}
			},
			axisTick: {
				lineStyle: {
					width: 0
				}
			},
			axisLabel: {
				textStyle: {
					color: '#7e9aaa',
					fontSize: '20px',
					fontFamily: 'PingFangSC-Regular'
				}
			}
		},
		yAxis: {
			type: 'value',
			axisLine: {
				lineStyle: {
					width: 0,
					color: "rgba(47,47,73,.5)"
				}
			},
			axisTick: {
				lineStyle: {
					width: 0
				}
			},
			splitLine: {
				show: false
			},
			axisLabel: {
				textStyle: {
					color: '#7e9aaa',
					fontSize: '16px',
					fontFamily: 'PingFangSC-Regular'
				}
			}
		},
		series: [{
			type: 'line',
			showAllSymbol: true,
			symbol: "image://../img/point.png",
			symbolSize: 20,
			lineStyle: {
				normal: {
					color: "#45d0b9",
					shadowColor: '#4cedcd',
					shadowBlur: 10,
					shadowOffsetY: 2
				}
			},
			label: {
				normal: {
					show: true,
					textStyle: {
						color: "#45d0b9",
						fontSize: "28px",
						fontFamily: "DINCond-Bold"
					}
				}
			},
			areaStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: 'rgba(76, 237, 205, 1)'
					}, {
						offset: 1,
						color: 'rgba(76, 237, 205, 0.3)'
					}], false)
				}
			},
			data: data.ydata
		}]
	});
	ec.on('click', function(p) {
		var _i = 0;

		function setDrop(opt) {
			$('.labelCont').eq(0).css({
				left: opt.left,
				top: opt.top,
				opacity: 1
			}).show().html('+ ' + opt.nameArr[opt.index]);
			$('.labelCont').eq(0).stop().animate({
				top: opt.top + 64
			}, 1000, 'linear', function() {
				$('.labelCont').eq(1).css({
					left: opt.left,
					top: opt.top + 64,
					opacity: 1
				}).show().html('+ ' + opt.nameArr[opt.index]);
				$('.labelCont').eq(1).stop().animate({
					top: opt.top + 84,
					opacity: 0
				}, 1000, 'linear');
				$('.labelCont').eq(0).hide();
				_i++;
				if (_i < opt.nameArr.length) {
					opt.index = _i;
					setDrop(opt);
				}
			});
		}
		if (data && data.label && data.label[p.name]) {
			var left = p.event.offsetX - 60,
				top = p.event.offsetY - 120;
			setDrop({
				left: left,
				top: top,
				nameArr: data.label[p.name],
				index: 0
			});
		}
	});
}

function setBar(data) {
	var ec = echarts.init(document.getElementById('barCont'));
	var leftBar = [];
	var rightBar = [];
	var leftBarColor = ['#291638', '#3e1a31', '#122445'];
	var rightBarColor = ['#9d5d71', '#a8433e', '#177d9b'];
	for (var i = 0; i < data.ydata.length; i++) {
		leftBar.push({
			value: data.ydata[i],
			itemStyle: {
				normal: {
					color: leftBarColor[i]
				}
			}
		});
		rightBar.push({
			value: data.ydata0[i],
			itemStyle: {
				normal: {
					color: rightBarColor[i]
				}
			}
		});
	}
	ec.setOption({
		grid: {
			right: 0,
			left: 0,
			bottom: 35
		},
		xAxis: {
			type: 'category',
			data: data.xdata,
			axisLine: {
				lineStyle: {
					width: 0
				}
			},
			axisTick: {
				lineStyle: {
					width: 0
				}
			},
			axisLabel: {
				margin: 20,
				textStyle: {
					color: '#7e9aaa',
					fontSize: '20px',
					fontFamily: 'PingFangSC-Regular'
				}
			}
		},
		yAxis: {
			type: 'value',
			axisLine: {
				lineStyle: {
					width: 0,
					color: "rgba(47,47,73,.5)"
				}
			},
			axisTick: {
				lineStyle: {
					width: 0
				}
			},
			splitLine: {
				show: false
			},
			axisLabel: {
				show: false
			}
		},
		series: [{
			type: 'pictorialBar',
			symbol: 'rect',
			symbolRepeat: true,
			symbolSize: [30, 4],
			showAllSymbol: true,
			symbolMargin: -1,
			barWidth: 30,
			label: {
				normal: {
					show: true,
					position: 'top',
					formatter: function(p) {
						var obj = changeValue({
							value: p.value + '',
							unit: '',
							max: 6,
							fixed: 0,
							rules: {
								"4": "万",
								"6": "百万",
								"7": "千万",
								"8": "亿"
							}
						});
						return obj.value + obj.end;
					}
				}
			},
			animation: false,
			data: leftBar
		}, {
			type: 'pictorialBar',
			barGap: '50%',
			symbol: 'rect',
			label: {
				normal: {
					show: true,
					position: 'top',
					formatter: function(p) {
						var obj = changeValue({
							value: p.value + '',
							unit: '',
							max: 6,
							fixed: 0,
							rules: {
								"4": "W",
								"6": "M",
								"8": "B"
							}
						});
						return obj.value + obj.end;
					}
				}
			},
			symbolRepeat: true,
			symbolSize: [30, 4],
			z: -10,
			showAllSymbol: true,
			symbolMargin: 1,
			animationDelay: function(dataIndex, params) {
				return params.index * 30;
			},
			data: rightBar
		}],
		animationEasing: 'elasticOut'
	});
}

function changeValue(option) {
	var obj = {
			value: 0,
			end: ''
		},
		reg = new RegExp(/^(?=.*\d.*\b)/), //判断是否含有数字;
		breakPoint,
		valArr,
		rules = [],
		_rule,
		valMax,
		intEnd = ['个', '户'],
		valCheck = ['%'],
		_flag = intEnd.indexOf(option.unit);
	//		if(_flag != -1){
	//			option.fixed = 0;
	//		}
	breakPoint = option.value.match(/\D+/g);
	//错误处理
	if (undefined === option.value || 'undefined' === option.value || '' === option.value.trim() || !reg.test(option.value)) {
		return obj;
	}
	valArr = breakPoint && breakPoint[0] !== '.' ? option.value.split(breakPoint[0]) : [option.value];
	//参数非法处理
	if (valCheck.indexOf(option.unit) != -1 || typeof(option.rules) !== 'object' || Object.getOwnPropertyNames(rules).length === 0 || !option.max) {
		obj.value = option.value;
		obj.end = option.unit ? option.unit : '';
		return obj;
	}
	for (var item in option.rules) {
		rules.push([item, option.rules[item]]);
	}
	rules.sort(function(a, b) {
		return a[0] - b[0];
	});
	option.fixed = option.fixed + '' === '0' ? 0 - (-option.fixed) : 1 - (-option.fixed);
	for (var i = 0; i < rules.length; i++) {
		var _l = Math.round(valArr.join('') / Math.pow(10, rules[i][0])) + '';
		if (_l.length + rules[i][1].length + option.fixed + 1 <= option.max) {
			_rule = rules[i];
			break;
		}
	}
	if (_rule === undefined) _rule = rules[rules.length - 1];
	obj.end = _rule[1] + option.unit;
	option.fixed = option.fixed - 1 >= 0 ? option.fixed - 1 : 0;
	var totalVal = (valArr.join('') / (Math.pow(10, _rule[0]))).toFixed(option.fixed);
	var valHead = Math.floor(totalVal);
	var _length = Math.floor((valHead + '').length / 3);
	var valEnd = ((totalVal - valHead) * Math.pow(10, option.fixed)).toFixed(0);
	var valHeadArr = [];
	for (var j = 1; j <= _length; j++) {
		valHeadArr.unshift((valHead + '').substr((valHead + '').length - 3 * j, 3));
	}
	var _head = (valHead + '').substring(0, (valHead + '').length - 3 * (j - 1));
	totalVal = _head + (_head && _head !== '' && valHeadArr.length > 0 ? ',' : '') + valHeadArr.join(',') + (valEnd && valEnd != 0 ? '.' + valEnd : '');
	obj.value = totalVal;
	return obj;
}
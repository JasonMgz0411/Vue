/**
 * [changeValue 数据加单位]
 * @param  {[Object]} [option] 
 * {
 * 		value:'134,557,866.66',//数据
 * 		unit:'兆',//单位
 * 		max:7,//整个容器最大容纳的字数(包含单位)
 * 		fixed:2,
 * 		rules:{
 * 			"4":"万",
 * 			"6":"百万",
 * 			"7":"千万",
 * 			"8":"亿"
 * 		}
 * }
 * @return {[Object]} [description]
 */
changeValue({
	value: '134,557,866.66',
	unit: '元',
	max: 9,
	fixed: 2,
	rules: {
		"4": "万",
		"6": "百万",
		"7": "千万",
		"8": "亿"
	}
});

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
		valMax;
	breakPoint = option.value.match(/\D+/g);
	//错误处理
	if (undefined === option.value || 'undefined' === option.value || '' === option.value.trim() || !reg.test(option.value)) {
		return obj;
	}
	valArr = breakPoint && breakPoint[0] !== '.' ? option.value.split(breakPoint[0]) : [option.value];
	//参数非法处理
	if (typeof(option.rules) !== 'object' || Object.getOwnPropertyNames(rules).length === 0 || !option.max) {
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
	var totalVal = (valArr.join('') / (Math.pow(10, _rule[0]))).toFixed(option.fixed - 1);
	var valHead = Math.floor(totalVal);
	var _length = Math.floor((valHead + '').length / 3);
	var valEnd = ((totalVal - valHead) * Math.pow(10, option.fixed - 1)).toFixed(0);
	var valHeadArr = [];
	for (var j = 1; j <= _length; j++) {
		valHeadArr.unshift((valHead + '').substr((valHead + '').length - 3 * j, 3));
	}
	var _head = (valHead + '').substring(0, (valHead + '').length - 3 * (j - 1));
	totalVal = _head + (_head && _head !== '' && valHeadArr.length > 0 ? ',' : '') + valHeadArr.join(',') + (valEnd ? '.' + valEnd : '');
	obj.value = totalVal;
	return obj;
}
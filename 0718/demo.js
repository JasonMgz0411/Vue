window.onload = function() {
    setLine();
};

function setLine() {
    var ec = echarts.init(document.getElementById('lineCont'));
    ec.setOption({
        xAxis: {
            type: 'category',
            data: ['2016年3月', '2016年6月', '2016年9月', '2016年12月', '2017年3月', '2017年6月'],
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
            symbol: "image://./point.png",
            symbolSize: 20,
            lineStyle: {
                normal: {
                    color: "#45d0b9",
                    shadowColor: '#4cedcd',
                    shadowBlur: 3
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
            data: [1500, 1600, 15000, 20000, 25000, 60000]
        }]
    });
    ec.on('click', function(p) {
        $('#dropTabel').animate({
            left: p.event.offsetX - 50,
            top: p.event.offsetY - 70
        },100);
    });
}

function setDrop() {

}
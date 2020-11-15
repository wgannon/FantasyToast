var chart = tui.chart; /* namespace */
var chart = require('tui-chart'); /* CommonJS in Node.js */
import chart from 'tui-chart'; /* ES6 in Node.js */


var container = document.getElementById('chart-area');
var data = {
    categories: ['June', 'July', 'Aug', 'Sep', 'Oct', 'Nov'],
    series: [
        {
            name: 'Budget',
            data: [5000, 3000, 5000, 7000, 6000, 4000]
        },
        {
            name: 'Income',
            data: [8000, 1000, 7000, 2000, 5000, 3000]
        }
    ]
};
var options = {
    chart: {
        width: 1160,
        height: 650,
        title: 'Monthly Revenue',
        format: '1,000'
    },
    yAxis: {
        title: 'Month'
    },
    xAxis: {
        title: 'Amount',
        min: 0,
        max: 9000,
        suffix: '$'
    },
     series: {
         showLabel: true
     }
};
var theme = {
    series: {
        colors: [
            '#83b14e', '#458a3f', '#295ba0', '#2a4175', '#289399',
            '#289399', '#617178', '#8a9a9a', '#516f7d', '#dddddd'
        ]
    }
};

// For apply theme

// tui.chart.registerTheme('myTheme', theme);
// options.theme = 'myTheme';

tui.chart.barChart(container, data, options);
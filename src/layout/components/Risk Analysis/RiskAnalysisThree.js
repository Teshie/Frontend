import React, { useState, Component } from 'react';
import GaugeChart from 'react-gauge-chart';
import Gauge from 'react-svg-gauge';
import Chart from 'react-apexcharts';
const RiskAnalysisThree = ({ myValue }) => {
  const [value, setValue] = useState(100);
  const foo = myValue > 0 ? 100 - (100 * myValue) / 100 : 0;
  return (
    <Chart
      type="radialBar"
      width={380}
      height={350}
      series={[100 - (100 * myValue) / 100]}
      options={{
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 225,
            track: {
              background: 'gray',
              strokeWidth: '67%',
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: 0,
                left: 0,
                blur: 1,
                opacity: 0.5,
              },
            },

            dataLabels: {
              name: {
                show: false,
              },
              value: {
                formatter: function (val) {
                  return val + '%';
                },
                color: '#111',
                fontSize: '36px',
                show: true,
              },
            },
          },
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: 'horizontal',
            shadeIntensity: 0.5,
            gradientToColors: ['#ce9f2c'],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100],
          },
        },

        labels: ['%'],
        colors: ['#04365d'],
      }}
    />
  );
};
export default RiskAnalysisThree;

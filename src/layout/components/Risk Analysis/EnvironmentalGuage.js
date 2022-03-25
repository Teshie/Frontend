import React from 'react';
import Chart from 'react-apexcharts';
const EnvironmentalGuage = ({ myValue }) => {
  const value = 100 - (100 * myValue) / 30;
  const valueRounded = Math.round(value * 100) / 100;
  return (
    <div>
      <Chart
        type="radialBar"
        width={380}
        height={350}
        series={[valueRounded]}
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
              type: 'vertical',
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
    </div>
  );
};

export default EnvironmentalGuage;

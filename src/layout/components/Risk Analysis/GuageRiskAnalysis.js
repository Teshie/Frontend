import React from 'react';
import Chart from 'react-apexcharts';

const GuageRiskAnalysis = ({ myValue }) => {
  return (
    <div>
      <Chart
        type="radialBar"
        offsetY={-20}
        width={380}
        height={450}
        series={[100 - (100 * myValue) / 5]}
        options={{
          sparkline: {
            enabled: true,
          },
          plotOptions: {
            radialBar: {
              startAngle: -90,
              endAngle: 90,
              track: {
                background: '#ce9f2c',
                strokeWidth: '97%',
                margin: 5, // margin is in pixels
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
                  offsetY: -30,
                  fontSize: '42px',
                },
              },
            },
          },
          grid: {
            padding: {
              top: -10,
            },
          },

          labels: ['Percent'],
          colors: ['#04365d'],
        }}
      />
    </div>
  );
};

export default GuageRiskAnalysis;

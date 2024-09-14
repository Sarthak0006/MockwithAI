import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import style from './style.module.css';

interface PieData {
  value: number;
  label: string;
}

const MyPieChart: React.FC = () => {
  const pieData: PieData[] = [
    { value: 40, label: 'Category A' },
    { value: 30, label: 'Category B' },
    { value: 20, label: 'Category C' },
    { value: 10, label: 'Category D' },
  ];

  return (
    <div className={style.pie_chart_container}> {/* Use a CSS class */}
      <PieChart
        series={[
          {
            data: pieData,
            innerRadius: 30,
            outerRadius: 100,
            paddingAngle: 5,
            cornerRadius: 5,
            startAngle: -45,
            endAngle: 225,
            cx: 150,
            cy: 150,
          },
        ]}
      />
    </div>
  );
};

export default MyPieChart;

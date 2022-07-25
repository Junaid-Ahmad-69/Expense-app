import React, { useState } from "react";
import ChartBar from "./ChartBar";
import "../Chart/Chart.css";

const Chart = (props) => {
  // const [dataPoints, setdata] = useState([]);
  const dataPointsValues = props.dataPoints.map((dataPoint) => {
    return dataPoint.value;
  });
  const totalMaximum = Math.max(...dataPointsValues);
  return (
    <>
      <div className="chart">
        {props.dataPoints.map((dataPoint) => {
          return (
            <ChartBar
              key={dataPoint.label}
              value={dataPoint.value}
              maxValue={totalMaximum}
              label={dataPoint.label}
            />
          );
        })}
      </div>
    </>
  );
};

export default Chart;

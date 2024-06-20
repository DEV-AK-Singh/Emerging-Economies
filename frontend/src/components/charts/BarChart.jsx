import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

export default function BarCharts() {
  return (
    <div>
      <BarChart
        yAxis={[
          {
            id: "barCategories",
            data: ["bar A", "bar B", "bar C"],
            scaleType: "band",
          },
        ]}
        series={[
          {
            data: [2, 5, 3],
          },
          {
            data: [1, 4, 3],
          },
          {
            data: [2, 3, 4],
          },
        ]}
        layout="horizontal"
        width={500}
        height={300}
      />
    </div>
  );
}

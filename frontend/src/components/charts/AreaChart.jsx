import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

const years = [
  new Date(2008, 0, 1),
  new Date(2009, 0, 1),
  new Date(2010, 0, 1),
  new Date(2011, 0, 1),
  new Date(2012, 0, 1),
  new Date(2013, 0, 1),
  new Date(2014, 0, 1),
  new Date(2015, 0, 1),
  new Date(2016, 0, 1),
  new Date(2017, 0, 1),
];

const FranceGDPperCapita = [
  28129, 28294.264, 28619.805, 28336.16, 28907.977, 29418.863, 29736.645,
  30341.807, 31323.078, 32284.611,
];

const UKGDPperCapita = [
  26189, 25792.014, 25790.186, 26349.342, 27277.543, 27861.215, 28472.248,
  29259.764, 30077.385, 30932.537,
];

const MexGDPperCapita = [
  26189, 25792.014, 25790.186, 26349.342, 27277.543, 27861.215, 28472.248,
  29259.764, 30077.385, 30932.537,
];

const GermanyGDPperCapita = [
  25391, 26769.96, 27385.055, 27250.701, 28140.057, 28868.945, 29349.982,
  30186.945, 31129.584, 32087.604,
];

const IndiaGDPperCapita = [
  25391, 26769.96, 27385.055, 27250.701, 28140.057, 28868.945, 29349.982,
  30186.945, 31129.584, 32087.604,
];

export default function StackedAreas() {
  return (
    <LineChart
      xAxis={[
        {
          id: "Years",
          data: years,
          scaleType: "time",
          valueFormatter: (date) => date.getFullYear().toString(),
        },
      ]}
      series={[
        {
          id: "France",
          label: "French",
          data: FranceGDPperCapita,
          
          area: false,
          showMark: true,
        },
        
        {
          id: "Germany",
          label: "German",
          data: GermanyGDPperCapita,
         
          area: false,
          showMark: true,
        },

        {
          id: "United Kingdom",
          label: "UK",
          data: UKGDPperCapita,
       
          area: false,
          showMark: true,
        },

        {
          id: "India",
          label: "India",
          data: IndiaGDPperCapita,
     
          area: false,
          showMark: true,
        },

        {
          id: "Mexico",
          label: "Mexico",
          data: MexGDPperCapita,
         
          area: false,
          showMark: true,
        },
      ]}
      width={600}
      height={400}
      margin={{ left: 70 }}
    />
  );
}

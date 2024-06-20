import React, { useEffect, useState } from "react";
import { LineChart } from "@mui/x-charts/LineChart";

export default function LineCharts({ data, customTitle, fixMargin }) {
  const [years, setYears] = useState(null);
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [data3, setData3] = useState(null);
  const [data4, setData4] = useState(null);
  const [data5, setData5] = useState(null);
  const [data6, setData6] = useState(null);
  const [title, setTitle] = useState(customTitle);
  const [indicator, setIndicator] = useState(null);

  useEffect(() => {
    setYears(
      data?.ind.map((data) => {
        return new Date(data.date);
      })
    );
    setData1(
      data?.bra.map((data) => {
        return (data.value > 1) ? data.value?.toFixed(3) : data.value;
      })
    );
    setData2(
      data?.chn.map((data) => {
        return (data.value > 1) ? data.value?.toFixed(3) : data.value;
      })
    );
    setData3(
      data?.ind.map((data) => {
        return (data.value > 1) ? data.value?.toFixed(3) : data.value;
      })
    );
    setData4(
      data?.mex.map((data) => {
        return (data.value > 1) ? data.value?.toFixed(3) : data.value;
      })
    );
    setData5(
      data?.tur.map((data) => {
        return (data.value > 1) ? data.value?.toFixed(3) : data.value;
      })
    );
    setData6(
      data?.zaf.map((data) => {
        return (data.value > 1) ? data.value?.toFixed(3) : data.value;
      })
    );
    if (!title) {
      setTitle(data?.indicator?.value);
    }
    setIndicator(data?.indicator?.id);
  }, [data]);

  return (
    <div>
      <h1 className="text-xl text-center mt-8 font-semibold">{title}</h1>
      {data && years ? (
        <LineChart
          grid={{ horizontal: true, vertical: true }}
          xAxis={[
            {
              data: years,
              scaleType: "band",
              labelStyle:{
                fontSize:12,
                fontWeight:900,
                padding:12,
              },
              label:"Past 10 years",
              valueFormatter: (date) => date?.getFullYear()?.toString(),
            },
          ]}
          yAxis={[
            {
              label: "",
              valueFormatter: (value) => {
                return (fixMargin) ? `${(value / 1000000000000).toLocaleString()}T` : value?.toString()
              },
            },
          ]}
          series={[
            {
              data: data1,
              valueFormatter: (value) => {
                return (fixMargin) ? `${(value / 1000000000000).toLocaleString()} Trillion` : value?.toString()
              },
              curve: "linear",
              showMark: false,
              label:"Brazil",
              color:"green"
            },
            {
              data: data2,
              valueFormatter: (value) => {
                return (fixMargin) ? `${(value / 1000000000000).toLocaleString()} Trillion` : value?.toString()
              },
              curve: "linear",
              showMark: false,
              label:"China",
              color:"red"
            },
            {
              data: data3,
              valueFormatter: (value) => {
                return (fixMargin) ? `${(value / 1000000000000).toLocaleString()} Trillion` : value?.toString()
              },
              curve: "linear",
              showMark: true,
              label:"India",
              color:"orange"
            },
            {
              data: data4,
              valueFormatter: (value) => {
                return (fixMargin) ? `${(value / 1000000000000).toLocaleString()} Trillion` : value?.toString()
              },
              curve: "linear",
              showMark: false,
              label:"Mexico",
              color:"brown"
            },
            {
              data: data5,
              valueFormatter: (value) => {
                return (fixMargin) ? `${(value / 1000000000000).toLocaleString()} Trillion` : value?.toString()
              },
              curve: "linear",
              showMark: false,
              label:"Turkey",
              color:"blue"
            },
            {
              data: data6,
              valueFormatter: (value) => {
                return (fixMargin) ? `${(value / 1000000000000).toLocaleString()} Trillion` : value?.toString()
              },
              curve: "linear",
              showMark: false,
              label:"South Africa",
              color:"lime"
            },
          ]}
          slotProps={{
            legend: {
              direction: 'row',
              position: { vertical: 'top', horizontal: 'middle' },
              padding: 12,
              itemMarkWidth: 8,
              itemMarkHeight: 8,
              labelStyle : {
                fontSize : 12,
                fontWeight : 900
              }
            },
          }}
          height={400}
        />
      ) : (
        ""
      )}
    </div>
  );
}

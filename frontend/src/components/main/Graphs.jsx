import React, { useEffect, useState } from "react";
import LineChart from "../charts/LineChart";
import fetchWorldBankData from "../../controllers/worldbank";
import fetchWorldBankGroupData from "../../controllers/worldbankgroup";
import fetchUNDPData from "../../controllers/undp";
import fetchIMFData from "../../controllers/imf";
import Switch from "./Switch";

export default function Graphs() {
  // Set Live Data
  const [liveData, setLiveData] = useState(false);

  // World-Bank Graphs
  const title1 = "GDP (constant 2015 US$)";
  const [data1, setData1] = useState(null);
  const title2 = "GDP per capita, PPP (constant 2021 international $)";
  const [data2, setData2] = useState(null);
  const title3 =
    "Market capitalization of listed domestic companies (% of GDP)";
  const [data3, setData3] = useState(null);
  const title4 = "Exports of goods and services (% of GDP)";
  const [data4, setData4] = useState(null);
  const title5 = "Domestic credit to private sector (% of GDP)";
  const [data5, setData5] = useState(null);

  // World-Bank-Group Graphs
  const title6 = "Consumer Price Index (CPI) Inflation";
  const [data6, setData6] = useState(null);
  const title7 = "Exchange Rate (Monthly Average)";
  const [data7, setData7] = useState(null);
  const title8 = "Outstanding deposits with commercial banks";
  const [data8, setData8] = useState(null);
  const title9 = "Number of commercial bank branches per 100,000 adults";
  const [data9, setData9] = useState(null);

  // IMF
  const title10 = "Net lending/borrowing (% of GDP)";
  const [data10, setData10] = useState(null);
  const title11 = "Gross debt position (% of GDP)";
  const [data11, setData11] = useState(null);

  // UNDP
  const title12 = "HDI - Human Development Index";
  const [data12, setData12] = useState(null);

  const fetchAllData = () => {
    fetchWorldBankData("NY.GDP.MKTP.KD", liveData)
      .then((res) => {
        console.log("data-1:", res);
        setData1(res);
      })
      .catch((err) => {
        console.log(err);
        setData1(null);
      });

    fetchWorldBankData("NY.GDP.PCAP.PP.KD", liveData)
      .then((res) => {
        console.log("data-2:", res);
        setData2(res);
      })
      .catch((err) => {
        console.log(err);
        setData2(null);
      });

    fetchWorldBankData("CM.MKT.LCAP.GD.ZS", liveData)
      .then((res) => {
        console.log("data-3:", res);
        setData3(res);
      })
      .catch((err) => {
        console.log(err);
        setData3(null);
      });

    fetchWorldBankData("NE.EXP.GNFS.ZS", liveData)
      .then((res) => {
        console.log("data-4:", res);
        setData4(res);
      })
      .catch((err) => {
        console.log(err);
        setData4(null);
      });

    fetchWorldBankData("FS.AST.PRVT.GD.ZS", liveData)
      .then((res) => {
        console.log("data-5:", res);
        setData5(res);
      })
      .catch((err) => {
        console.log(err);
        setData5(null);
      });

    fetchWorldBankGroupData("IMF.CPI", "IMF.CPI.PCPI_PC_CP_A_PT", liveData)
      .then((res) => {
        console.log("data-6:", res);
        setData6(res);
      })
      .catch((err) => {
        console.log(err);
        setData6(null);
      });

    fetchWorldBankGroupData("IMF.IFS", "IMF.IFS.ENDA_XDC_USD_RATE", liveData)
      .then((res) => {
        console.log("data-7:", res);
        setData7(res);
      })
      .catch((err) => {
        console.log(err);
        setData7(null);
      });

    fetchWorldBankGroupData("IMF.FAS", "IMF.FAS.FCLODCG_GDP_PT", liveData)
      .then((res) => {
        console.log("data-8:", res);
        setData8(res);
      })
      .catch((err) => {
        console.log(err);
        setData8(null);
      });

    fetchWorldBankGroupData("IMF.FAS", "IMF.FAS.FCBODCA_NUM", liveData)
      .then((res) => {
        console.log("data-9:", res);
        setData9(res);
      })
      .catch((err) => {
        console.log(err);
        setData9(null);
      });

    fetchIMFData("GGXCNL_G01_GDP_PT", liveData)
      .then((res) => {
        console.log("data-10:", res);
        setData10(res);
      })
      .catch((err) => {
        console.log(err);
        setData10(null);
      });

    fetchIMFData("G_XWDG_G01_GDP_PT", liveData)
      .then((res) => {
        console.log("data-11:", res);
        setData11(res);
      })
      .catch((err) => {
        console.log(err);
        setData11(null);
      });

    fetchUNDPData("hdi", liveData)
      .then((res) => {
        console.log("data-12:", res);
        setData12(res);
      })
      .catch((err) => {
        console.log(err);
        setData12(null);
      });
  };

  useEffect(() => {
    fetchAllData();
  }, [liveData]);

  return (
    <div>
      <div className="fixed right-4 bottom-4 bg-white/70 py-3 px-4 rounded-full border border-black">
        <div>
          <Switch checked={liveData} onChange={setLiveData} />
        </div>
      </div>
      <div className="bg-black p-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          <div className="rounded-none bg-white">
            <LineChart data={data1} customTitle={title1} fixMargin={true} />
          </div>
          <div className="rounded-none bg-white">
            <LineChart data={data2} customTitle={title2} />
          </div>
          <div className="rounded-none bg-white">
            <LineChart data={data3} customTitle={title3} />
          </div>
          <div className="rounded-none bg-white">
            <LineChart data={data4} customTitle={title4} />
          </div>
          <div className="rounded-none bg-white">
            <LineChart data={data5} customTitle={title5} />
          </div>
          <div className="rounded-none bg-white">
            <LineChart data={data6} customTitle={title6} />
          </div>
          <div className="rounded-none bg-white">
            <LineChart data={data7} customTitle={title7} />
          </div>
          <div className="rounded-none bg-white">
            <LineChart data={data8} customTitle={title8} />
          </div>
          <div className="rounded-none bg-white">
            <LineChart data={data9} customTitle={title9} />
          </div>
          <div className="rounded-none bg-white">
            <LineChart data={data10} customTitle={title10} />
          </div>
          <div className="rounded-none bg-white">
            <LineChart data={data11} customTitle={title11} />
          </div>
          <div className="rounded-none bg-white">
            <LineChart data={data12} customTitle={title12} />
          </div>
        </div>
      </div>
    </div>
  );
}

import React ,{ useEffect, useState } from "react";
import LineChart from "../charts/LineChart";
import fetchWorldBankData from "../../controllers/worldbank";
import fetchWorldBankGroupData from "../../controllers/worldbankgroup";
import fetchUNDPData from "../../controllers/undp";
import fetchIMFData from "../../controllers/imf";

export default function Graphs() {
  // World-Bank Graphs
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [data3, setData3] = useState(null);
  const [data4, setData4] = useState(null);
  const [data5, setData5] = useState(null);

  // World-Bank-Group Graphs
  const [data6, setData6] = useState(null);
  const [data7, setData7] = useState(null);
  const [data8, setData8] = useState(null);
  const [data9, setData9] = useState(null);

  // IMF
  const [data10, setData10] = useState(null);
  const [data11, setData11] = useState(null);

  // UNDP
  const [data12, setData12] = useState(null);

  useEffect(() => {
    fetchWorldBankData("NY.GDP.MKTP.KD").then((res) => {
      // console.log("data-1:",res)
      setData1(res);
    });

    fetchWorldBankData("NY.GDP.PCAP.PP.KD").then((res) => {
      // console.log("data-2:",res)
      setData2(res);
    });

    fetchWorldBankData("CM.MKT.LCAP.GD.ZS").then((res) => {
      // console.log("data-3:",res)
      setData3(res);
    });

    fetchWorldBankData("NE.EXP.GNFS.ZS").then((res) => {
      // console.log("data-4:",res)
      setData4(res);
    });

    fetchWorldBankData("FS.AST.PRVT.GD.ZS").then((res) => {
      // console.log("data-5:",res)
      setData5(res);
    });

    fetchWorldBankGroupData("IMF.CPI", "IMF.CPI.PCPI_PC_CP_A_PT").then((res) => {
      // console.log("data-6:",res)
      setData6(res);
    });

    fetchWorldBankGroupData("IMF.IFS", "IMF.IFS.ENDA_XDC_USD_RATE").then((res) => {
      // console.log("data-7:",res)
      setData7(res);
    });

    fetchWorldBankGroupData("IMF.FAS", "IMF.FAS.FCLODCG_GDP_PT").then((res) => {
      // console.log("data-8:",res)
      setData8(res);
    });

    fetchWorldBankGroupData("IMF.FAS", "IMF.FAS.FCBODCA_NUM").then((res) => {
      // console.log("data-9:",res)
      setData9(res);
    });

    fetchIMFData("GGXCNL_G01_GDP_PT").then((res) => {
      // console.log("data-10:",res)
      setData10(res);
    });

    fetchIMFData("G_XWDG_G01_GDP_PT").then((res) => {
      // console.log("data-11:",res)
      setData11(res);
    });

    fetchUNDPData("hdi").then((res) => {
      // console.log("data-12:",res)
      setData12(res);
    });

  }, []);

  return (
    <div>
      <div className="bg-black p-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          <div className="rounded-none bg-white">
            <LineChart data={data1} fixMargin={true} />
          </div>
          <div className="rounded-none bg-white">
            <LineChart data={data2} />
          </div>
          <div className="rounded-none bg-white">
            <LineChart data={data3} />
          </div>
          <div className="rounded-none bg-white">
            <LineChart data={data4} />
          </div>
          <div className="rounded-none bg-white">
            <LineChart data={data5} />
          </div>
          <div className="rounded-none bg-white">
            <LineChart
              data={data6}
              customTitle={"Consumer Price Index (CPI)"}
            />
          </div>
          <div className="rounded-none bg-white">
            <LineChart
              data={data7}
              customTitle={"Exchange Rates, Domestic Currency per U.S. Dollar"}
            />
          </div>
          <div className="rounded-none bg-white">
            <LineChart
              data={data8}
              customTitle={"Outstanding deposits with commercial banks"}
            />
          </div>
          <div className="rounded-none bg-white">
            <LineChart
              data={data9}
              customTitle={
                "Number of commercial bank branches per 100,000 adults"
              }
            />
          </div>
          <div className="rounded-none bg-white">
            <LineChart
              data={data10}
              customTitle={"Net lending/borrowing (% of GDP)"}
            />
          </div>
          <div className="rounded-none bg-white">
            <LineChart
              data={data11}
              customTitle={"Gross debt position (% of GDP)"}
            />
          </div>
          <div className="rounded-none bg-white">
            <LineChart data={data12} />
          </div>
        </div>
      </div>
    </div>
  );
}

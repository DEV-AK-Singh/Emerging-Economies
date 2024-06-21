const express = require("express");
const cors = require("cors");
require('dotenv').config();

const Indicator1Data = require("./data/indicator1.json");
const Indicator2Data = require("./data/indicator2.json");
const Indicator3Data = require("./data/indicator3.json");
const Indicator4Data = require("./data/indicator4.json");
const Indicator5Data = require("./data/indicator5.json");
const Indicator6Data = require("./data/indicator6.json");
const Indicator7Data = require("./data/indicator7.json");
const Indicator8Data = require("./data/indicator8.json");
const Indicator9Data = require("./data/indicator9.json");
const Indicator10Data = require("./data/indicator10.json");
const Indicator11Data = require("./data/indicator11.json");
const Indicator12Data = require("./data/indicator12.json");

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/",express.static("dist"));

app.post("/worldbank", (req, res) => {

  const Indicator1 = "NY.GDP.MKTP.KD";
  const Indicator2 = "NY.GDP.PCAP.PP.KD";
  const Indicator3 = "CM.MKT.LCAP.GD.ZS";
  const Indicator4 = "NE.EXP.GNFS.ZS";
  const Indicator5 = "FS.AST.PRVT.GD.ZS";

  const indicator = req.body.indicator;

  if(indicator==Indicator1){
    res.send(Indicator1Data);
  }
  if(indicator==Indicator2){
    res.send(Indicator2Data);
  }
  if(indicator==Indicator3){
    res.send(Indicator3Data);
  }
  if(indicator==Indicator4){
    res.send(Indicator4Data);
  }
  if(indicator==Indicator5){
    res.send(Indicator5Data);
  }

  // const countries = "bra;chn;ind;mex;tur;zaf";
  // const date = "2014:2022";
  // const url = `http://api.worldbank.org/v2/country/${countries}/indicator/${indicator}?date=${date}&format=json&per_page=2000`;

  // fetch(url)
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((json) => {
  //     res.send({ code: 1, response: json });
  //   })
  //   .catch((err) => {
  //     res.send({ code: 0, response: err });
  //   });
});

app.post("/worldbankgroup", (req, res) => {

  
  const Dataset1 = "IMF.CPI";
  const Indicator6 = "IMF.CPI.PCPI_PC_CP_A_PT";
  
  const Dataset2 = "IMF.IFS";
  const Indicator7 = "IMF.IFS.ENDA_XDC_USD_RATE";
  
  const Dataset3 = "IMF.FAS";
  const Indicator8 = "IMF.FAS.FCLODCG_GDP_PT";
  
  const Dataset4 = "IMF.FAS";
  const Indicator9 = "IMF.FAS.FCBODCA_NUM";

  const dataset = req.body.dataset;
  const indicator = req.body.indicator;

  if(indicator==Indicator6 && dataset==Dataset1){
    res.send(Indicator6Data);
  }
  if(indicator==Indicator7 && dataset==Dataset2){
    res.send(Indicator7Data);
  }
  if(indicator==Indicator8 && dataset==Dataset3){
    res.send(Indicator8Data);
  }
  if(indicator==Indicator9 && dataset==Dataset4){
    res.send(Indicator9Data);
  }

  // const countries = "BRA,CHN,IND,MEX,TUR,ZAF";
  // const dates = "2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024";
  // const url = `https://datacatalogapi.worldbank.org/dexapps/efi/data?datasetId=${dataset}&indicatorIds=${indicator}&countryCodes=${countries}&years=${dates}`;

  // fetch(url)
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((json) => {
  //     res.send({ code: 1, response: json });
  //   })
  //   .catch((err) => {
  //     res.send({ code: 0, response: err });
  //   });
});

app.post("/imf", (req, res) => {

  const Indicator10 = "GGXCNL_G01_GDP_PT";
  const Indicator11 = "G_XWDG_G01_GDP_PT";

  const indicator = req.body.indicator;

  if(indicator==Indicator10){
    res.send(Indicator10Data);
  }
  if(indicator==Indicator11){
    res.send(Indicator11Data);
  }

  // const countries = "BRA/CHN/IND/MEX/TUR/ZAF";
  // const dates = "2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024";
  // const url = `https://www.imf.org/external/datamapper/api/v1/${indicator}/${countries}/?periods=${dates}`;

  // fetch(url,{method:"GET",headers:{"Content-Type":"application/json"}})
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((json) => {
  //     res.send({ code: 1, response: json });
  //   })
  //   .catch((err) => {
  //     res.send({ code: 0, response: err });
  //   });
});

app.post("/undp", (req, res) => {

  // hdi - Human Development Index (value)

  const indicator = req.body.indicator;

  if(indicator=="hdi"){
    res.send(Indicator12Data);
  }
  
  // const countries = "BRA,CHN,IND,MEX,TUR,ZAF";
  // const dates = "2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024";
  // const API_KEY = process.env.UNDP_API_KEY;
  // const url = `https://hdrdata.org/api/CompositeIndices/query?apikey=${API_KEY}&countryOrAggregation=${countries}&year=${dates}&indicator=${indicator}`;

  // fetch(url)
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((json) => {
  //     res.send({ code: 1, response: json });
  //   })
  //   .catch((err) => {
  //     res.send({ code: 0, response: err });
  //   });
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

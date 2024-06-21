const express = require("express");
const cors = require("cors");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/",express.static("dist"));

app.post("/worldbank", (req, res) => {

  // NY.GDP.MKTP.KD
  // NY.GDP.PCAP.PP.KD
  // CM.MKT.LCAP.GD.ZS
  // NE.EXP.GNFS.ZS
  // FS.AST.PRVT.GD.ZS

  const countries = "bra;chn;ind;mex;tur;zaf";
  const date = "2014:2022";
  const indicator = req.body.indicator;
  const url = `http://api.worldbank.org/v2/country/${countries}/indicator/${indicator}?date=${date}&format=json&per_page=2000`;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      res.send({ code: 1, response: json });
    })
    .catch((err) => {
      res.send({ code: 0, response: err });
    });
});

app.post("/worldbankgroup", (req, res) => {

  // IMF.CPI , IMF.CPI.PCPI_PC_CP_A_PT
  // IMF.IFS , IMF.IFS.ENDA_XDC_USD_RATE
  // IMF.FAS , IMF.FAS.FCLODCG_GDP_PT
  // IMF.FAS , IMF.FAS.FCBODCA_NUM

  const dataset = req.body.dataset;
  const indicator = req.body.indicator;
  const countries = "BRA,CHN,IND,MEX,TUR,ZAF";
  const dates = "2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024";
  const url = `https://datacatalogapi.worldbank.org/dexapps/efi/data?datasetId=${dataset}&indicatorIds=${indicator}&countryCodes=${countries}&years=${dates}`;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      res.send({ code: 1, response: json });
    })
    .catch((err) => {
      res.send({ code: 0, response: err });
    });
});

app.post("/imf", (req, res) => {

  // GGXCNL_G01_GDP_PT
  // G_XWDG_G01_GDP_PT

  const countries = "BRA/CHN/IND/MEX/TUR/ZAF";
  const dates = "2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024";
  const indicator = req.body.indicator;
  const url = `https://www.imf.org/external/datamapper/api/v1/${indicator}/${countries}/?periods=${dates}`;

  fetch(url,{method:"GET",headers:{"Content-Type":"application/json"}})
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      res.send({ code: 1, response: json });
    })
    .catch((err) => {
      res.send({ code: 0, response: err });
    });
});

app.post("/undp", (req, res) => {

  // hdi - Human Development Index (value)

  const countries = "BRA,CHN,IND,MEX,TUR,ZAF";
  const dates = "2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024";
  const indicator = req.body.indicator;
  const API_KEY = process.env.UNDP_API_KEY;
  const url = `https://hdrdata.org/api/CompositeIndices/query?apikey=${API_KEY}&countryOrAggregation=${countries}&year=${dates}&indicator=${indicator}`;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      res.send({ code: 1, response: json });
    })
    .catch((err) => {
      res.send({ code: 0, response: err });
    });
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

const express = require("express");
const cors = require("cors");
require("dotenv").config();

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

app.use("/", express.static("dist"));

app.post("/worldbank", (req, res) => {
  const indicator = req.body.indicator;
  const isLiveData = req.body.isLiveData || false;

  const Indicator1 = "NY.GDP.MKTP.KD";
  const Indicator2 = "NY.GDP.PCAP.PP.KD";
  const Indicator3 = "CM.MKT.LCAP.GD.ZS";
  const Indicator4 = "NE.EXP.GNFS.ZS";
  const Indicator5 = "FS.AST.PRVT.GD.ZS";

  if (!isLiveData) {
    if (indicator == Indicator1) {
      res.send(Indicator1Data);
    } else if (indicator == Indicator2) {
      res.send(Indicator2Data);
    } else if (indicator == Indicator3) {
      res.send(Indicator3Data);
    } else if (indicator == Indicator4) {
      res.send(Indicator4Data);
    } else if (indicator == Indicator5) {
      res.send(Indicator5Data);
    } else {
      res.send({ code: 0, response: "Invalid indicator" });
    }
  } else {
    const countries = "bra;chn;ind;mex;tur;zaf";
    const currentYear = new Date().getFullYear();
    const date = `2014:${currentYear}`;
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
  }
});

app.post("/worldbankgroup", (req, res) => {
  const dataset = req.body.dataset;
  const indicator = req.body.indicator;
  const isLiveData = req.body.isLiveData || false;

  const Dataset1 = "IMF.CPI";
  const Indicator6 = "IMF.CPI.PCPI_PC_CP_A_PT";
  const Dataset2 = "IMF.IFS";
  const Indicator7 = "IMF.IFS.ENDA_XDC_USD_RATE";
  const Dataset3 = "IMF.FAS";
  const Indicator8 = "IMF.FAS.FCLODCG_GDP_PT";
  const Dataset4 = "IMF.FAS";
  const Indicator9 = "IMF.FAS.FCBODCA_NUM";

  if (!isLiveData) {
    if (indicator == Indicator6 && dataset == Dataset1) {
      res.send(Indicator6Data);
    } else if (indicator == Indicator7 && dataset == Dataset2) {
      res.send(Indicator7Data);
    } else if (indicator == Indicator8 && dataset == Dataset3) {
      res.send(Indicator8Data);
    } else if (indicator == Indicator9 && dataset == Dataset4) {
      res.send(Indicator9Data);
    } else {
      res.send({ code: 0, response: "Invalid indicator or dataset" });
    }
  } else {
    const countries = "BRA,CHN,IND,MEX,TUR,ZAF";
    // const dates = "2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024";
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 2014 + 1 }, (_, i) => 2014 + i);
    const dates = years.join(",");
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
  }
});

app.post("/imf", (req, res) => {
  const indicator = req.body.indicator;
  const isLiveData = req.body.isLiveData || false;

  const Indicator10 = "GGXCNL_G01_GDP_PT";
  const Indicator11 = "G_XWDG_G01_GDP_PT";

  if (!isLiveData) {
    if (indicator == Indicator10) {
      res.send(Indicator10Data);
    } else if (indicator == Indicator11) {
      res.send(Indicator11Data);
    } else {
      res.send({ code: 0, response: "Invalid indicator" });
    }
  } else {
    const countries = "BRA/CHN/IND/MEX/TUR/ZAF";
    // const dates = "2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024";
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 2014 + 1 }, (_, i) => 2014 + i);
    const dates = years.join(",");
    const url = `https://www.imf.org/external/datamapper/api/v1/${indicator}/${countries}/?periods=${dates}`;
    fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        res.send({ code: 1, response: json });
      })
      .catch((err) => {
        res.send({ code: 0, response: err });
      });
  }
});

app.post("/undp", (req, res) => {
  const indicator = req.body.indicator;
  const isLiveData = req.body.isLiveData || false; 
  if (!isLiveData) {
    if (indicator == "hdi") {
      res.send(Indicator12Data);
    } else {
      res.send({ code: 0, response: "Invalid indicator" });
    }
  } else {
    const countries = "BRA,CHN,IND,MEX,TUR,ZAF";
    // const dates = "2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024";
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 2014 + 1 }, (_, i) => 2014 + i);
    const dates = years.join(",");
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
  }
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

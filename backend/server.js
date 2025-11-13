const express = require("express");
const cors = require("cors");
const axios = require("axios"); // Add axios
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
const PORT = process.env.PORT || 5000; // Added default port

app.use(cors());
app.use(express.json());

app.use("/", express.static("dist"));

// Configure axios with better defaults
const apiClient = axios.create({
  timeout: 30000, // 30 seconds timeout
  timeoutErrorMessage: "Request timed out after 30 seconds",
  maxRedirects: 5,
  validateStatus: function (status) {
    return status >= 200 && status < 500; // Resolve only if status code < 500
  }
});

// Add retry interceptor
apiClient.interceptors.response.use(null, async (error) => {
  const config = error.config;
  
  // If no retry configuration, reject immediately
  if (!config || !config.retry) {
    return Promise.reject(error);
  }

  config.retryCount = config.retryCount || 0;

  // Check if we should retry
  if (config.retryCount >= config.retry) {
    return Promise.reject(error);
  }

  // Increase retry count
  config.retryCount += 1;

  // Create new promise to handle retry delay
  const delay = Math.pow(2, config.retryCount) * 1000; // Exponential backoff
  console.log(`Retrying request (${config.retryCount}/${config.retry}) after ${delay}ms delay`);
  
  await new Promise(resolve => setTimeout(resolve, delay));
  
  return apiClient(config);
});

app.post("/api/worldbank", async (req, res) => {
  const indicator = req.body.indicator;
  const isLiveData = req.body.isLiveData || false;

  const Indicator1 = "NY.GDP.MKTP.KD";
  const Indicator2 = "NY.GDP.PCAP.PP.KD";
  const Indicator3 = "CM.MKT.LCAP.GD.ZS";
  const Indicator4 = "NE.EXP.GNFS.ZS";
  const Indicator5 = "FS.AST.PRVT.GD.ZS";

  console.log("worldbank: ", indicator, isLiveData);

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
      res.status(400).send({ code: 0, response: "Invalid indicator" });
    }
  } else {
    try {
      const countries = "bra;chn;ind;mex;tur;zaf";
      const currentYear = new Date().getFullYear();
      const date = `2014:${currentYear}`;
      const url = `http://api.worldbank.org/v2/country/${countries}/indicator/${indicator}?date=${date}&format=json&per_page=2000`;
      
      console.log("Calling World Bank API:", url);
      
      const response = await apiClient.get(url, {
        retry: 2, // Retry 2 times
        timeout: 30000
      });

      console.log("World Bank API response status:", response.status);
      res.send({ code: 1, response: response.data });
      
    } catch (error) {
      console.error("World Bank API error:", error.message);
      
      // Fallback to local data
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
        res.status(500).send({ 
          code: 0, 
          response: `API Error: ${error.message}`,
          fallback: "No local data available for this indicator"
        });
      }
    }
  }
});

app.post("/api/worldbankgroup", async (req, res) => {
  const dataset = req.body.dataset;
  const indicator = req.body.indicator;
  const isLiveData = req.body.isLiveData || false;

  console.log("worldbankgroup: ", dataset, indicator, isLiveData);

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
      res.status(400).send({ code: 0, response: "Invalid indicator or dataset" });
    }
  } else {
    try {
      const countries = "BRA,CHN,IND,MEX,TUR,ZAF";
      const currentYear = new Date().getFullYear();
      const years = Array.from({ length: currentYear - 2014 + 1 }, (_, i) => 2014 + i);
      const dates = years.join(",");
      const url = `https://datacatalogapi.worldbank.org/dexapps/efi/data?datasetId=${dataset}&indicatorIds=${indicator}&countryCodes=${countries}&years=${dates}`;
      
      console.log("Calling World Bank Group API:", url);
      
      const response = await apiClient.get(url, {
        retry: 2,
        timeout: 30000
      });

      console.log("World Bank Group API response status:", response.status);
      res.send({ code: 1, response: response.data });
      
    } catch (error) {
      console.error("World Bank Group API error:", error.message);
      
      // Fallback to local data
      if (indicator == Indicator6 && dataset == Dataset1) {
        res.send(Indicator6Data);
      } else if (indicator == Indicator7 && dataset == Dataset2) {
        res.send(Indicator7Data);
      } else if (indicator == Indicator8 && dataset == Dataset3) {
        res.send(Indicator8Data);
      } else if (indicator == Indicator9 && dataset == Dataset4) {
        res.send(Indicator9Data);
      } else {
        res.status(500).send({ 
          code: 0, 
          response: `API Error: ${error.message}`,
          fallback: "No local data available for this indicator/dataset"
        });
      }
    }
  }
});

app.post("/api/imf", async (req, res) => {
  const indicator = req.body.indicator;
  const isLiveData = req.body.isLiveData || false;

  console.log("imf: ", indicator, isLiveData);

  const Indicator10 = "GGXCNL_G01_GDP_PT";
  const Indicator11 = "G_XWDG_G01_GDP_PT";

  if (!isLiveData) {
    if (indicator == Indicator10) {
      res.send(Indicator10Data);
    } else if (indicator == Indicator11) {
      res.send(Indicator11Data);
    } else {
      res.status(400).send({ code: 0, response: "Invalid indicator" });
    }
  } else {
    try {
      const countries = "BRA/CHN/IND/MEX/TUR/ZAF";
      const currentYear = new Date().getFullYear();
      const years = Array.from({ length: currentYear - 2014 + 1 }, (_, i) => 2014 + i);
      const dates = years.join(",");
      const url = `https://www.imf.org/external/datamapper/api/v1/${indicator}/${countries}/?periods=${dates}`;
      
      console.log("Calling IMF API:", url);
      
      const response = await apiClient.get(url, {
        retry: 2,
        timeout: 30000,
        headers: { 
          "Content-Type": "application/json",
          "User-Agent": "EconomicDashboard/1.0"
        }
      });

      console.log("IMF API response status:", response.status);
      res.send({ code: 1, response: response.data });
      
    } catch (error) {
      console.error("IMF API error:", error.message);
      
      // Fallback to local data
      if (indicator == Indicator10) {
        res.send(Indicator10Data);
      } else if (indicator == Indicator11) {
        res.send(Indicator11Data);
      } else {
        res.status(500).send({ 
          code: 0, 
          response: `API Error: ${error.message}`,
          fallback: "No local data available for this indicator"
        });
      }
    }
  }
});

app.post("/api/undp", async (req, res) => {
  const indicator = req.body.indicator;
  const isLiveData = req.body.isLiveData || false; 

  console.log("undp: ", indicator, isLiveData);

  if (!isLiveData) {
    if (indicator == "hdi") {
      res.send(Indicator12Data);
    } else {
      res.status(400).send({ code: 0, response: "Invalid indicator" });
    }
  } else {
    try {
      const countries = "BRA,CHN,IND,MEX,TUR,ZAF";
      const currentYear = new Date().getFullYear();
      const years = Array.from({ length: currentYear - 2014 + 1 }, (_, i) => 2014 + i);
      const dates = years.join(",");
      const API_KEY = process.env.UNDP_API_KEY;
      
      if (!API_KEY) {
        throw new Error("UNDP_API_KEY environment variable is not set");
      }
      
      const url = `https://hdrdata.org/api/CompositeIndices/query?apikey=${API_KEY}&countryOrAggregation=${countries}&year=${dates}&indicator=${indicator}`;
      
      console.log("Calling UNDP API:", url.replace(API_KEY, '***')); // Hide API key in logs
      
      const response = await apiClient.get(url, {
        retry: 2,
        timeout: 30000
      });

      console.log("UNDP API response status:", response.status);
      res.send({ code: 1, response: response.data });
      
    } catch (error) {
      console.error("UNDP API error:", error.message);
      
      // Fallback to local data
      if (indicator == "hdi") {
        res.send(Indicator12Data);
      } else {
        res.status(500).send({ 
          code: 0, 
          response: `API Error: ${error.message}`,
          fallback: "No local data available for this indicator"
        });
      }
    }
  }
});

app.get("/api/health", async (req, res) => {
  res.json({
    status: "ok",
    message: "Health check successful"
  })
});

// Network test endpoint
app.get("/api/network-test", async (req, res) => {
  const tests = {};

  try {
    // Test World Bank
    const wbResponse = await apiClient.get('http://api.worldbank.org/v2/country/ind?format=json', { timeout: 10000 });
    tests.worldbank = { status: 'success', statusCode: wbResponse.status };
  } catch (error) {
    tests.worldbank = { status: 'error', error: error.message };
  }

  try {
    // Test basic internet
    const googleResponse = await apiClient.get('https://www.google.com', { timeout: 10000 });
    tests.internet = { status: 'success', statusCode: googleResponse.status };
  } catch (error) {
    tests.internet = { status: 'error', error: error.message };
  }

  res.json({ tests });
});

app.listen(PORT, '0.0.0.0', () => { // Listen on all interfaces
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`🌐 Health check: http://localhost:${PORT}/api/health`);
  console.log(`🔧 Network test: http://localhost:${PORT}/api/network-test`);
});
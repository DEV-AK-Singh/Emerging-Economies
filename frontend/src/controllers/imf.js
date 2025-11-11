import { BASE_URL } from "../Constant";

const fetchIMFData = async (indicator, isLiveData=false) => {
    const data = await fetch(`${BASE_URL}/imf`, {
      method: "POST",
      body: JSON.stringify({ indicator, isLiveData }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((json) => {
        const records = json.response.values[Object.keys(json.response.values)[0]];
        const indicator = {id:Object.keys(json.response.values)[0], value:""};
        let bra = [];
        let chn = [];
        let ind = [];
        let mex = [];
        let tur = [];
        let zaf = [];
        Object.keys(records).map((idc)=>{
            Object.keys(records[idc]).map((date)=>{
                if(idc=="BRA"){
                    bra.push({
                        date:date,
                        value:records[idc][date]
                    })
                }
                if(idc=="CHN"){
                    chn.push({
                        date:date,
                        value:records[idc][date]
                    })
                }
                if(idc=="IND"){
                    ind.push({
                        date:date,
                        value:records[idc][date]
                    })
                }
                if(idc=="MEX"){
                    mex.push({
                        date:date,
                        value:records[idc][date]
                    })
                }
                if(idc=="TUR"){
                    tur.push({
                        date:date,
                        value:records[idc][date]
                    })
                }
                if(idc=="ZAF"){
                    zaf.push({
                        date:date,
                        value:records[idc][date]
                    })
                }
            })
        })
        return {
          indicator,
          bra,
          chn,
          ind,
          mex,
          tur,
          zaf,
        };
      })
      .catch((err) => {
        return err;
      });
    return data;
  };
  
  export default fetchIMFData;
  
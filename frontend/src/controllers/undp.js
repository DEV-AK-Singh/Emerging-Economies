const fetchUNDPData = async (indicator) => {
    const data = await fetch(`${process.env.BASE_URL}/undp`, {
      method: "POST",
      body: JSON.stringify({ indicator }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        const records = json.response;
        const indicator = {id:records[0].indicator, value:records[0].index};
        let bra = [];
        let chn = [];
        let ind = [];
        let mex = [];
        let tur = [];
        let zaf = [];
        records.map((data) => {
          if(data.country.toLowerCase() == "bra - brazil"){
            bra.push({
              date:data.year,
              value:data.value,
            });
          }
          if(data.country.toLowerCase() == "chn - china"){
            chn.push({
              date:data.year,
              value:data.value,
            });
          }
          if(data.country.toLowerCase() == "ind - india"){
            ind.push({
              date:data.year,
              value:data.value,
            });
          }
          if(data.country.toLowerCase() == "mex - mexico"){
            mex.push({
              date:data.year,
              value:data.value,
            });
          }
          if(data.country.toLowerCase() == "tur - turkey"){
            tur.push({
              date:data.year,
              value:data.value,
            });
          }
          if(data.country.toLowerCase() == "zaf - south africa"){
            zaf.push({
              date:data.year,
              value:data.value,
            });
          }
        });
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
  
  export default fetchUNDPData;
  
const fetchWorldBankData = async (indicator) => {
  const data = await fetch(`${process.env.BASE_URL}/worldbank`, {
    method: "POST",
    body: JSON.stringify({ indicator }),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      const records = json.response[1];
      const indicator = {id:records[0].indicator.id, value:records[0].indicator.value};
      let bra = [];
      let chn = [];
      let ind = [];
      let mex = [];
      let tur = [];
      let zaf = [];
      records.map((data) => {
        if(data.countryiso3code.toLowerCase() == "bra"){
          bra.push({
            date:data.date,
            value:data.value,
          });
        }
        if(data.countryiso3code.toLowerCase() == "chn"){
          chn.push({
            date:data.date,
            value:data.value,
          });
        }
        if(data.countryiso3code.toLowerCase() == "ind"){
          ind.push({
            date:data.date,
            value:data.value,
          });
        }
        if(data.countryiso3code.toLowerCase() == "mex"){
          mex.push({
            date:data.date,
            value:data.value,
          });
        }
        if(data.countryiso3code.toLowerCase() == "tur"){
          tur.push({
            date:data.date,
            value:data.value,
          });
        }
        if(data.countryiso3code.toLowerCase() == "zaf"){
          zaf.push({
            date:data.date,
            value:data.value,
          });
        }
      });
      return {
        indicator,
        bra:bra.reverse(),
        chn:chn.reverse(),
        ind:ind.reverse(),
        mex:mex.reverse(),
        tur:tur.reverse(),
        zaf:zaf.reverse(),
      };
    })
    .catch((err) => {
      return err;
    });
  return data;
};

export default fetchWorldBankData;

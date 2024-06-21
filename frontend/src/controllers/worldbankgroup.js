const fetchWorldBankGroupData = async (dataset, indicator) => {
  const data = await fetch(`${process.env.BASE_URL}/worldbankgroup`, {
    method: "POST",
    body: JSON.stringify({ indicator, dataset }),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      const records = json.response.value;
      const indicator = { id: records[0].INDICATOR_ID, value: "" };
      let bra = [];
      let chn = [];
      let ind = [];
      let mex = [];
      let tur = [];
      let zaf = [];
      records.map((data) => {
        if (data.COUNTRY_CODE.toLowerCase() == "bra" && (data.ATTRIBUTE_1=="Annual" || (data.ATTRIBUTE_1==null && data.ATTRIBUTE_2==null && data.ATTRIBUTE_3==null))) {
          bra.push({
            date: data.CAL_YEAR,
            value: data.IND_VALUE,
          });
        }
        if (data.COUNTRY_CODE.toLowerCase() == "chn" && (data.ATTRIBUTE_1=="Annual" || (data.ATTRIBUTE_1==null && data.ATTRIBUTE_2==null && data.ATTRIBUTE_3==null))) {
          chn.push({
            date: data.CAL_YEAR,
            value: data.IND_VALUE,
          });
        }
        if (data.COUNTRY_CODE.toLowerCase() == "ind" && (data.ATTRIBUTE_1=="Annual" || (data.ATTRIBUTE_1==null && data.ATTRIBUTE_2==null && data.ATTRIBUTE_3==null))) {
          ind.push({
            date: data.CAL_YEAR,
            value: data.IND_VALUE,
          });
        }
        if (data.COUNTRY_CODE.toLowerCase() == "mex" && (data.ATTRIBUTE_1=="Annual" || (data.ATTRIBUTE_1==null && data.ATTRIBUTE_2==null && data.ATTRIBUTE_3==null))) {
          mex.push({
            date: data.CAL_YEAR,
            value: data.IND_VALUE,
          });
        }
        if (data.COUNTRY_CODE.toLowerCase() == "tur" && (data.ATTRIBUTE_1=="Annual" || (data.ATTRIBUTE_1==null && data.ATTRIBUTE_2==null && data.ATTRIBUTE_3==null))) {
          tur.push({
            date: data.CAL_YEAR,
            value: data.IND_VALUE,
          });
        }
        if (data.COUNTRY_CODE.toLowerCase() == "zaf" && (data.ATTRIBUTE_1=="Annual" || (data.ATTRIBUTE_1==null && data.ATTRIBUTE_2==null && data.ATTRIBUTE_3==null))) {
          zaf.push({
            date: data.CAL_YEAR,
            value: data.IND_VALUE,
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

export default fetchWorldBankGroupData;

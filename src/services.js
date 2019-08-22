const axios = require("axios");
const yelp_url = "https://api.yelp.com/v3/businesses/";
const headers = {
  Authorization:
    "Bearer _FcfHW9TVbjOWsE2ImCi1y9EqYUENFJG00EjliQKKLZCbwmdnlvPBmVx7rBRUrJaOysGZJch2l9uhFAtSVfQkutfSdKVpdMR4YbGj_EHC7YEq1P0TB87v2z1txZeXXYx"
};

const searchBusiness = async key => {
  let result;
  await axios(yelp_url + "search?location=" + key, {
    method: "GET",
    headers
  })
    .then(response => {
      if (response && response.data) {
        //console.log("Result : ", response.data.total);
        result = response.data;
      }
    })
    .catch(err => {
      console.log("Exception: ", err);
    });
  //console.log('Result After : ', result.businesses.length, result.total, result.region);
  return result.businesses;
};
exports.searchBusiness = searchBusiness;

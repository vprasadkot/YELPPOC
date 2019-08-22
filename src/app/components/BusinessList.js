import React, { useState } from "react";
import BussinessDetails from "./BusinessDetails";
const BusinessList = () => {
  const [searchText, setSearchText] = useState("");
  const [businessList, setBusinessList] = useState([]);
  const api_url = "/api/getList/";

  const getBusinessList = key => {
    console.log("Search Text : ", key);
    fetch(api_url + key).then(data => {
      data.json().then(res => {
        console.log("Result Set: ", res);
        setBusinessList(res);
      });
      //setBusinessList(response.result);
    });
  };

  return (
    <div>
      <h2>Business List</h2>
      <div>
        <input
          type="text"
          value={searchText}
          placeholder="Enter location to search for business"
          onChange={e => setSearchText(e.target.value)}
        />
        <button
          onClick={() => {
            getBusinessList(searchText);
          }}
        >
          Search
        </button>
      </div>
      <div className="report">
        Result : {businessList && businessList.length}
        {businessList.map(item => {
          console.log(item);
          return <BussinessDetails details={item} />;
        })}
      </div>
    </div>
  );
};
export default BusinessList;

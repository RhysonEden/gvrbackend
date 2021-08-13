import React from "react";
import { getGVR } from "../api";

const Header = ({ searchInput, setSearchInput, setMessage }) => {
  const handleTextChange = (e) => {
    console.log(e.target.value);
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    getGVR(searchInput).then((resp) => {
      console.log(resp, "response");
      setMessage(resp.gvr);
    });
  };
  return (
    <>
      <div className="header">
        <input
          className="searchmobil"
          type="text"
          placeholder="Search By GVR ID"
          value={searchInput}
          onChange={handleTextChange}
        />
        {/* <button>Submit</button> */}
      </div>
      <div className="headerbutton">
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
};

export default Header;

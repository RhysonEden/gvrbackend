import React from "react";
import { getGVR } from "../api";
import { useHistory } from "react-router-dom";

const Header = ({ searchInput, setSearchInput, setMessage }) => {
  const history = useHistory();

  const handleTextChange = (e) => {
    console.log(e.target.value);
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    if (searchInput.length === 0) {
      return;
    } else if (searchInput.length >= 7) {
      console.log("Wrong");
    } else {
      getGVR(searchInput).then((resp) => {
        console.log(resp, "response");
        setMessage(resp.gvr);
        history.push("/home");
      });
    }
  };

  const clearSubmit = () => {
    window.location.reload();
  };
  return (
    <>
      <div className="header">
        <div className="hundred">
          <input
            className="searchmobil"
            type="text"
            placeholder="Search By GVR ID"
            value={searchInput}
            onChange={handleTextChange}
          />
        </div>
        <div className="headerbutton">
          <button onClick={handleSubmit}>Submit</button>
        </div>
        <div className="headerbutton">
          <button onClick={clearSubmit}>Clear</button>
        </div>
      </div>
      {/* <div className="headerbutton">
        <button onClick={handleSubmit}>Submit</button>
      </div> */}
    </>
  );
};

export default Header;

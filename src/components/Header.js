import React from "react";
import { getGVR } from "../api";
import { useHistory } from "react-router-dom";
import { useAlert } from "react-alert";
import icon180 from "../icon180.png";
const Header = ({ searchInput, setSearchInput, setMessage, setWarning }) => {
  const history = useHistory();
  const alert = useAlert();
  const handleTextChange = (e) => {
    console.log(e.target.value);
    setSearchInput(e.target.value);
  };

  const goHomeYouAreDrunk = () => {
    history.push("/home");
    window.location.reload();
  };

  const handleSubmit = (e) => {
    if (searchInput.length === 0) {
      return;
    } else if (searchInput.length >= 7) {
      console.log("Wrong");
    } else {
      getGVR(searchInput).then((resp) => {
        console.log(resp.gvr.length, "response");
        if (resp.gvr.length === 0) {
          setWarning("Nothing Found, Please Check the GVR ID and Try Again.");
        } else {
          setMessage(resp.gvr);
          history.push("/home");
        }
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
          <img src={icon180} className="photo" />
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
        <div className="headerbutton">
          <button onClick={goHomeYouAreDrunk}>Home</button>
        </div>
      </div>
      {/* <div className="headerbutton">
        <button onClick={handleSubmit}>Submit</button>
      </div> */}
    </>
  );
};

export default Header;

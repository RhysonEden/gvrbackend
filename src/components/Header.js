import React, { useState } from "react";
import { getGVR, getGVRAdd } from "../api";
import { useHistory } from "react-router-dom";
import { useAlert } from "react-alert";
import icon180 from "../icon180.png";
import { fetchThree, fetchFive, fetchCr } from "../api";
import Checkbox from "./checkbox";
const Header = ({
  searchInput,
  setSearchInput,
  setMessage,
  setWarning,
  value,
}) => {
  const [check, setCheck] = useState("no");
  const history = useHistory();
  const alert = useAlert();
  const handleTextChange = (e) => {
    console.log(e.target.value);
    setSearchInput(e.target.value);
  };

  let barView = sessionStorage.getItem("searchbar");

  const goHomeYouAreDrunk = () => {
    history.push("/");
    window.location.reload();
  };

  const handleSubmit = (e) => {
    // if (searchInput.length === 0) {
    //   return;
    // }

    if (check.length === 4) {
      getGVRAdd(searchInput).then((resp) => {
        console.log(resp.add, "response");
        if (resp.add.length === 0) {
          setWarning("Nothing Found, Please Check the GVR ID and Try Again.");
        } else {
          setMessage(resp.add);
          history.push("/");
        }
      });
    } else {
      // } else if (searchInput.length >= 7) {
      //   console.log("Wrong");
      // } else {
      getGVR(searchInput).then((resp) => {
        console.log(resp.gvr.length, "response");
        if (resp.gvr.length === 0) {
          setWarning("Nothing Found, Please Check the GVR ID and Try Again.");
        } else {
          setMessage(resp.gvr);
          history.push("/");
        }
      });
    }
  };

  const handleSubmitTwo = () => {
    let disp = value.value;
    console.log(disp);
    if (disp === "500" || disp === "700") {
      fetchFive(searchInput).then((resp) => {
        setMessage(resp);
      });
    } else if (disp === "300") {
      fetchThree(searchInput).then((resp) => {
        setMessage(resp);
      });
    } else if (disp === "cr") {
      fetchCr(searchInput).then((resp) => {
        setMessage(resp);
      });
    } else {
      setMessage("Invalid Dispenser Type");
    }
  };

  const clearSubmit = () => {
    window.location.reload();
  };
  return (
    <>
      <div className="header">
        {/* {console.log(barView)} */}
        <div className="hundred">
          <img src={icon180} className="photo" />
          <input
            className="searchmobil"
            type="text"
            placeholder="Search..."
            value={searchInput}
            onChange={handleTextChange}
          />
        </div>
        {barView === "true" ? (
          <>
            <Checkbox check={check} setCheck={setCheck} />

            <div className="headerbutton">
              <button onClick={handleSubmit}>Submit</button>
            </div>

            <div className="headerbutton">
              <button onClick={clearSubmit}>Clear</button>
            </div>
          </>
        ) : (
          <>
            <div className="checkbox"></div>

            <div className="headerbutton">
              <button onClick={handleSubmitTwo}>Submit</button>
            </div>

            <div className="headerbutton">
              <button onClick={clearSubmit}>Clear</button>
            </div>
          </>
        )}
        <div className="headerbutton">
          <button onClick={goHomeYouAreDrunk}>Home</button>
        </div>
        {/* <Checkbox /> */}
      </div>
    </>
  );
};

export default Header;

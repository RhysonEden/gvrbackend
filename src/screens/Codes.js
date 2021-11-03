import React, { useEffect, useState } from "react";
import Select from "react-select";
import { fetchThree, fetchFive } from "../api";
const options = [
  { value: "300", label: "300" },
  { value: "500", label: "500" },
  { value: "700", label: "700" },
  { value: "cr", label: "Card Reader" },
];

const Codes = ({ searchInput, setValue, message }) => {
  useEffect(() => {
    sessionStorage.setItem("searchbar", "false");
  }, []);

  // const handleSubmit = () => {
  //   let disp = value.value;
  //   if (disp === "500" || disp === "700") {
  //     fetchFive(searchInput).then((resp) => {
  //       console.log(resp);
  //     });
  //   } else if (disp === "300") {
  //     fetchThree(searchInput).then((resp) => {
  //       console.log(resp);
  //     });
  //   } else {
  //     console.log("Invalid Dispenser Type");
  //   }
  // };
  return (
    <>
      <div className="codes">
        <Select options={options} onChange={setValue} />
      </div>
      {console.log(typeof message)}
      {message.length === 0 ? (
        <div className="blankcard">
          Enter Code at the Top Search Bar, Select Your Dispenser Type from the
          dropdown, Then Hit Submit.
        </div>
      ) : (
        <div className="yellowcard">{message}</div>
      )}
      {/* <div className="blankcard">
        Enter Code at the Top Searchbar, Select Your Dispenser Type from the
        dropdown, Then Hit Submit.
      </div> */}
    </>
  );
};

export default Codes;

import React, { useState, useEffect } from "react";
import getSomething from "../api/index";
import Login from "./Login";
import { BrowserRouter as Brouter, Switch } from "react-router-dom";
import "./phone.css";
const App = () => {
  const [message, setMessage] = useState([]);
  const [show, setShow] = useState(false);
  const [callname, setCallName] = useState("");
  const [callnumber, setCallNumber] = useState("");
  const [gvrid, setGvrid] = useState(0);
  const [notes, setNotes] = useState("");
  const [ntcflag, setNtcflag] = useState(false);
  const [id, setId] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [gpid, setGpid] = useState("");
  const [email, setEmail] = useState("");
  const [gpcust, setGpcust] = useState("");
  const [sol, setSol] = useState("op");
  let user = sessionStorage.getItem("user");
  // if (!user) {
  //   console.log("no");
  // } else {
  // useEffect(() => {
  //   getSomething()
  //     .then((response) => {
  //       let tickets = response.tickets;
  //       setMessage(tickets);
  //     })
  //     .catch((error) => {
  //       setMessage(error.message);
  //     });
  // }, []);
  // }
  if (!user) {
    return (
      <Brouter>
        <Switch>
          <Login />
        </Switch>
      </Brouter>
    );
  } else {
    return <Brouter></Brouter>;
  }
};
export default App;

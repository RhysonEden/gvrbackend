import React, { useState, useEffect } from "react";
import Header from "./Header";
import HomeScreen from "../screens/HomeScreen";
import Login from "./Login";
import { BrowserRouter as Brouter, Switch } from "react-router-dom";
import "./phone.css";
const App = () => {
  const [message, setMessage] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  let user = sessionStorage.getItem("user");

  if (!user) {
    return (
      <Brouter>
        <Switch>
          <Login />
        </Switch>
      </Brouter>
    );
  } else {
    return (
      <Brouter>
        <Header
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          setMessage={setMessage}
        />
        <HomeScreen message={message} setMessage={setMessage} />
      </Brouter>
    );
  }
};
export default App;

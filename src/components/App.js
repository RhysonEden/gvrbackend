import React, { useState, useEffect } from "react";
import Header from "./Header";
import HomeScreen from "../screens/HomeScreen";
import Login from "./Login";
import Footer from "./Footer";
import GuideScreen from "../screens/GuideScreen";
import { BrowserRouter as Brouter, Switch } from "react-router-dom";
import "./phone.css";
const App = () => {
  const [message, setMessage] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [warning, setWarning] = useState(
    "Please Search Above or Contact Guardian Connect for Assitance"
  );
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
        <div className="appbody">
          <Header
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            setMessage={setMessage}
            setWarning={setWarning}
          />
          <Switch>
            <HomeScreen
              path="/home"
              exact
              component={HomeScreen}
              message={message}
              setMessage={setMessage}
              warning={warning}
            />
            <GuideScreen path="/guide" exact component={HomeScreen} />
          </Switch>
          <Footer />
        </div>
      </Brouter>
    );
  }
};
export default App;

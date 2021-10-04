import React, { useState, useEffect } from "react";
import Header from "./Header";
import HomeScreen from "../screens/HomeScreen";
import Login from "./Login";
import Footer from "./Footer";
import GuideScreen from "../screens/GuideScreen";
import { BrowserRouter as Brouter, Switch } from "react-router-dom";
import "./phone.css";
import Codes from "../screens/Codes";
import Register from "../screens/Register";
const App = () => {
  const [message, setMessage] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [value, setValue] = useState("");
  const [warning, setWarning] = useState(
    "Please Search the GVR ID Above or Contact Guardian Connect for Assitance"
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
            value={value}
          />
          <Switch>
            <Codes
              path="/codes"
              exact
              component={Codes}
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              message={message}
              setValue={setValue}
            />
            <HomeScreen
              path="/"
              exact
              component={HomeScreen}
              message={message}
              setMessage={setMessage}
              warning={warning}
            />
            <GuideScreen path="/guide" exact component={HomeScreen} />
            <Register path="/regi" exact component={Register} />
          </Switch>
          <Footer />
        </div>
      </Brouter>
    );
  }
};
export default App;

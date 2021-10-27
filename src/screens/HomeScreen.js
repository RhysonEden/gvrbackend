import React, { useEffect } from "react";

const HomeScreen = ({ message, setMessage, warning }) => {
  useEffect(() => {
    sessionStorage.setItem("searchbar", "true");
  }, []);

  if (message.length == 0) {
    return <div className="yellowcard">{warning}</div>;
  } else {
    return (
      <div className="cardmaster">
        {console.log(message)}
        {message.map((mess, index) => (
          <div className="card">
            <div key={index} className="center">
              {mess.gvrid}
            </div>
            <div className="center">{mess.address}</div>
            {mess.prov == true ? (
              <div className="centeractive">Active with Guardian Connect</div>
            ) : (
              <div className="centerinactive">Provisioned, but not Active</div>
            )}
          </div>
        ))}
      </div>
    );
  }
};

export default HomeScreen;

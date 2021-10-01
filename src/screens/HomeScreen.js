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
        {message.map((mess, index) => (
          <div className="card">
            <div key={index}>{mess.gvrid}</div>
            {mess.prov == true ? (
              <div>Active with Guardian Connect</div>
            ) : (
              <div>Provisioned, but not Active</div>
            )}
          </div>
        ))}
      </div>
    );
  }
};

export default HomeScreen;

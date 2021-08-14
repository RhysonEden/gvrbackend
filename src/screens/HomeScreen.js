import React from "react";

const HomeScreen = ({ message, setMessage }) => {
  if (message.length == 0) {
    return <></>;
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

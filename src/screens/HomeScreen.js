import React from "react";

const HomeScreen = ({ message, setMessage }) => {
  const clearSubmit = () => {
    window.location.reload();
  };
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
        <div className="headerbutton">
          <button onClick={clearSubmit}>Clear</button>
        </div>
      </div>
    );
  }
};

export default HomeScreen;

import React from "react";

export default function Checkbox({ setCheck }) {
  const handler = (e) => {
    if (e.target.checked) {
      setCheck("yeah");
    } else if (!e.target.checked) {
      setCheck("no");
    }
  };

  return (
    <>
      {/* <div className="create"> */}
      <div className="checkbox" onClick={handler}>
        <input className="checkbox-input" type="checkbox" onChange={handler} />
        <div className="space">Check Box to Search By Address</div>
      </div>
      {/* </div> */}
    </>
  );
}

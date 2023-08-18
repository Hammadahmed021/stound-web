import React from "react";

export default function Spinner() {
  const mainStyle = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "white",
      width: "100%",
      height: "100%",

      outline: "none",
      border: "none",
    },
  };

  return (
    <>
      <div style={mainStyle}>
        <h2>Spin it</h2>
      </div>
    </>
  );
}

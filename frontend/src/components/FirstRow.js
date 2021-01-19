import React from "react";

const topbarStyle = {
  display: "flex",
  flexDirection: "row",
  color: "#757575",
  justifyContent: "space-between",
  fontSize: "14px",
};

const sessionStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  minWidth: "20em",
  overflow: "hidden",
  whiteSpaces: "nowrap",
  textOverflow: "ellipsis",
  marginRight: "0.5em",
};

const FirstRow = () => {
  return (
    <div style={topbarStyle}>
      <div>
        <u>Updates</u>
      </div>
      <div style={sessionStyle}>
        <div>Session: 34 minutes</div>
        <div>User: Vikas Dubey</div>
      </div>
    </div>
  );
};

export default FirstRow;

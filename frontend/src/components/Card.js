import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";

const cardStyle = {
  border: "0.1rem solid #e0e0e0",
  width: "18rem",
  borderRadius: "8px",
  padding: "0.5rem",
  margin: "0.5rem",
  fontSize: "0.8rem",
  boxShadow: "0 0 2px #eeeeee",
};

const Card = ({ name, body, fetch, profile }) => {
  // console.log(profile);
  if (name && name.length > 26) name = name.slice(0, 26) + "...";

  if (body.length > 58) body = body.slice(0, 58) + "...";

  return (
    <div style={cardStyle} onClick={() => fetch(name)}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <img
            style={{ borderRadius: "50%" }}
            className="image"
            src={profile}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "0 1.5rem",
          }}
        >
          <div>
            <b> {name} </b>
          </div>
          <div
            style={{
              maxHeight: "2.4rem",
              overflow: "hidden",
            }}
          >
            {" "}
            {body}{" "}
          </div>
          {/* <img src={link}/> */}
        </div>
      </div>
    </div>
  );
};

export default Card;

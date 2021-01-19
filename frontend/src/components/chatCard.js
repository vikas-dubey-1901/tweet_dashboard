import React from "react";

const cardStyle = {
  border: "none",
  width: "18rem",
  borderRadius: "8px",
  padding: "0.5rem",
  margin: "0.5rem",
  fontSize: "0.9rem",
};

const ChatCard = ({ name, body }) => {
  //   if (name.length > 26) name = name.slice(0, 26) + "...";

  // if (body.length > 58)
  //     body = body.slice(0, 58) + '...'

  return (
    <div style={cardStyle}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <i className="fas fa-user-circle"></i>
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
              overflow: "visible",
            }}
          >
            {" "}
            {body}
            {""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatCard;

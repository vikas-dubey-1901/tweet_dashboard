import React, { useState } from "react";
import axios from "axios";
import ChatCard from "./chatCard";
const cardStyle = {
  border: "0.1rem solid #e0e0e0",
  height: "100%",
  width: "40%",
  minWidth: "40rem",
  borderRadius: "8px",
  margin: "0 1rem",
  boxShadow: "0 0 2px #eeeeee",
  position: "relative",
};

const inputContainerStyle = {
  position: "absolute",
  bottom: "1rem",
  right: "1rem",
  width: "80%",
  display: "flex",
  flexDirection: "row",
  border: "0.2rem solid #e0e0e0",
  borderRadius: "8px",
  padding: "0 1rem",
};

const iconStyle = {
  padding: "0.5rem",
  color: "#8d8d8d",
};

const topbarStyle = {
  display: "flex",
  flexDirection: "row",
  padding: "0.5rem 1rem",
  boxShadow: "0 0.1rem #eeeeee",
  justifyContent: "space-between",
};

const TopBar = () => {
  return (
    <div style={topbarStyle}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <i
          style={{ color: "#8d8d8d", marginTop: "5px", marginRight: "5px" }}
          className="far fa-user-circle"
        ></i>
        <div>Name here</div>
      </div>
      <div>Jan 18</div>
    </div>
  );
};

const CardDetail = (props) => {
  const [message, setMessage] = useState("");
  console.log(props);
  const reply = async () => {
    alert(message);
    const _data = await axios.post(
      `https://cors-anywhere.herokuapp.com/https://api.twitter.com/2/tweets/?expansions=author_id`,
      message,
      {
        headers: {
          Authorization:
            "Bearer AAAAAAAAAAAAAAAAAAAAAOFRLwEAAAAA4FTSfTl8bDKSJIwHnAAhzhd7Pzg%3DzwNNYqOcUevbRaTUESIlARrW1ys80YY68X86P7D9pyStjUh6o8",
        },
      }
    );
  };

  return (
    <div style={cardStyle}>
      <TopBar />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <ChatCard name={"@user"} body={props.data.text} />
      </div>
      {/* <div>{props.data.text}</div> */}
      <div style={inputContainerStyle}>
        <input
          id="reply-button"
          type="text"
          placeholder="Reply"
          onChange={
            (e) => {
              setMessage(e.target.value);
            }
            // onsubmit
          }
        />

        {/* <button onClick={reply}>reply</button> */}
        <i style={iconStyle} className="fas fa-paperclip"></i>
      </div>
    </div>
  );
};

export default CardDetail;

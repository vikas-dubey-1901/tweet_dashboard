import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import CardDetail from "./cardDetail";

const cardlistStyle = {
  height: "100%",
  width: "20rem",
  display: "flex",
  flexDirection: "column",
  overflowY: "scroll",
};

const CardList = () => {
  const [data, setData] = useState([]);
  const [feedData, setfeedData] = useState({});
  const [includ, setInc] = useState([]);

  useEffect(() => {
    const id = "1174596176055717888";
    const fetchData = async () => {
      const _data = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.twitter.com/2/users/${id}/mentions?expansions=author_id&user.fields=profile_image_url`,
        {
          headers: {
            Authorization:
              "Bearer AAAAAAAAAAAAAAAAAAAAAOFRLwEAAAAA4FTSfTl8bDKSJIwHnAAhzhd7Pzg%3DzwNNYqOcUevbRaTUESIlARrW1ys80YY68X86P7D9pyStjUh6o8",
          },
        }
      );

      setData(_data.data.data);
      setInc(_data.data.includes.users);
      console.log(_data.data.includes.users);
    };
    fetchData();
  }, []);
  const fetchFeedData = async (id) => {
    // alert(id);
    const _data = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.twitter.com/2/tweets/${id}?tweet.fields=created_at,attachments&expansions=author_id&user.fields=name,username,profile_image_url`,
      {
        headers: {
          Authorization:
            "Bearer AAAAAAAAAAAAAAAAAAAAAOFRLwEAAAAA4FTSfTl8bDKSJIwHnAAhzhd7Pzg%3DzwNNYqOcUevbRaTUESIlARrW1ys80YY68X86P7D9pyStjUh6o8",
        },
      }
    );

    setfeedData(_data.data.data);
    console.log(_data.data.data);
  };

  return (
    <React.Fragment>
      <div style={cardlistStyle}>
        {data.map((things) => {
          const index = includ.findIndex(
            (user) => user.id === things.author_id
          );
          console.log(includ[index]);
          return (
            <Card
              name={includ.length ? includ[index].name : " "}
              body={things.text}
              fetch={fetchFeedData}
              profile={
                includ.length > 0 ? includ[index].profile_image_url : " "
              }
            />
          );
        })}
      </div>

      <CardDetail data={feedData}></CardDetail>
    </React.Fragment>
  );
};

export default CardList;

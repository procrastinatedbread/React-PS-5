import { useState, useEffect } from "react";
import { fakeFetch } from "./utils";
import Schimmer from "./Schimmer";

const FifthComponent = () => {
  const [usersData, setUsersData] = useState([]);
  const url = "https://example.com/api/users";
  useEffect(() => {
    const innerFunction = async () => {
      const { data } = await fakeFetch(url);
      setUsersData(data);
    };
    innerFunction();
  }, []);

  return usersData.length === 0 ? (
    <Schimmer />
  ) : (
    <>
      <h1>Users Feed</h1>
      {usersData.map(({ name, image, likes, comments }) => {
        return (
          <>
            <img src={image} alt="photu" style={{ height: "200px" }} />
            <p>{name}</p>
            <p>Likes: {likes}</p>
            <p>Comments: {comments}</p>
          </>
        );
      })}
    </>
  );
};
export default FifthComponent;

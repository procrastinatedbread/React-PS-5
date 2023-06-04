import { useEffect, useState } from "react";
import { fakeFetch } from "./utils";

const SeventhComponent = () => {
  const [usersData, setUsersData] = useState([]);
  const url = "https://example.com/api/comments";
  useEffect(() => {
    const innerFunction = async () => {
      const { data } = await fakeFetch(url);
      setUsersData(data.comments);
    };
    innerFunction();
  }, []);
  return (
    <>
      <h1>Comments</h1>
      {usersData.map(({ name, text }, index) => {
        return (
          <div key={index}>
            <h1>{name}</h1>
            <p>{text}</p>
            <button
              onClick={() => {
                setUsersData(
                  usersData.filter(
                    (userData, otherIndex) => otherIndex !== index
                  )
                );
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
};
export default SeventhComponent;

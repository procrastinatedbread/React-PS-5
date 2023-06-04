import { useState, useEffect } from "react";
import { fakeFetch } from "./utils";
import Schimmer from "./Schimmer";

const SixthComponent = () => {
  const [usersData, setUsersData] = useState([]);
  const url = "https://example.com/api/userchat";
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
      {usersData.map(({ name, messages }) => {
        return (
          <li>
            <h1>{name}'s Chat</h1>
            {messages.map(({ from, message }) => {
              return (
                <>
                  <li>
                    {from}-{message}
                  </li>
                </>
              );
            })}
          </li>
        );
      })}
    </>
  );
};
export default SixthComponent;

import { useState, useEffect } from "react";
import { fakeFetch } from "./utils";

const FirstComponent = () => {
  const [users, setUsers] = useState([]);
  const url = "https://example.com/api/users/status";
  useEffect(() => {
    const innerFunction = async () => {
      const { data } = await fakeFetch(url);
      setUsers(data.users);
    };
    innerFunction();
  }, []);
  return (
    <>
      <h1>Online users</h1>
      {users.map(({ name, status }) => {
        return (
          <h1
            style={{
              color: status === "Online" ? "green" : "red"
            }}
          >
            {name}-{status}
          </h1>
        );
      })}
    </>
  );
};
export default FirstComponent;

import { useState, useEffect } from "react";
import { fakeFetch } from "./utils";

const FourthComponent = () => {
  const [imageData, setImageData] = useState({});
  const url = "https://example.com/api/user";

  useEffect(() => {
    const innerFunction = async () => {
      const { data } = await fakeFetch(url);
      setImageData(data);
    };
    innerFunction();
  }, []);
  return (
    <>
      <h1>User Profile</h1>
      <img src={imageData.image} alt="photu"></img>
      <p>Name:{imageData.name}</p>
      <p>Likes:{imageData.likes}</p>
      <p>Comments:{imageData.comments}</p>
    </>
  );
};
export default FourthComponent;

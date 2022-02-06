import React, { useEffect, useState } from "react";
import axios from "axios";

export const UseEffectHook = () => {
  const [arr, setArr] = useState([]);
  useEffect(async () => {
    try {
      const { data } = await axios(
        "https://jsonplaceholder.typicode.com/comments"
      );
      setArr(data);
    } catch (error) {
      console.log(error);
    }
    console.log("hello");
  }, []);

  return (
    <div>
      {arr.map((el) => (
        <div>{el.name}</div>
      ))}
    </div>
  );
};

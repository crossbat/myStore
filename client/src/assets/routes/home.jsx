import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  let [homeInfo, setHomeInfo] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/')
      .then((res) => setHomeInfo(res.data))
      .catch((err) => console.log(err));
  }, [])

  return (
    <>
      <h1>{homeInfo.title}</h1>
      <p>{homeInfo.description}</p>
    </>
  )
}

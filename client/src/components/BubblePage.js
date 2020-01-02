import React, { useState, useEffect } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    getColors();
  }, []);

  const getColors = () => {
    setIsFetching(true);
    axiosWithAuth()
      .get("/colors")
      .then(res => {
        setColorList(res.data);
        setIsFetching(false);
      })
      .catch(err => console.log(err));
  };
  return (
    <>
      {isFetching && <h2> Loading </h2>}
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

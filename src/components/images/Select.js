import React from "react";
import { Link, useSearchParams } from "react-router-dom";

import redPic from "../../assets/img/red.png";
import bluePic from "../../assets/img/blue.png";
import greenPic from "../../assets/img/green.png";

let step;
const SelectImgs = () => {
  const [searchParams] = useSearchParams();
  let select = 0;
  for (const entry of searchParams.entries()) {
    const [param, value] = entry;
    console.log(param, value);
    select++;
  }
  if (select <= 2) {
    step = 2;
  } else { 
    step = 3;
  }
  return (
    <>
      <div className="select-imgs">
        <Link className="item" to={`/step${step}/?select${select}=1`} >
          <img src={redPic} alt="画像１" />
        </Link>
        <Link className="item" to={`/step${step}/?select${select}=2`}>
          <img src={bluePic} alt="画像２" />
        </Link>
        <Link className="item" to={`/step${step}/?select${select}=3`}>
          <img src={greenPic} alt="画像３" />
        </Link>
        <Link className="item" to={`/step${step}/?select${select}=4`}>
          <img src={redPic} alt="画像４" />
        </Link>
      </div>
    </>
  );
}

export default SelectImgs;

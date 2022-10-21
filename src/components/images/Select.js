import React from "react";
import { Link, useSearchParams } from "react-router-dom";

import redPic from "../../assets/img/red.png";
import bluePic from "../../assets/img/blue.png";
import greenPic from "../../assets/img/green.png";

let step;
const SelectImgs = () => {
  const [searchParams] = useSearchParams();
  const maxCount = Number(searchParams.get("maxCount"));
  const selectCount = Number(searchParams.get("selectCount"));
  const selectAns = Number(searchParams.get("selectAns"));
  step = selectCount + 1 === maxCount ? 3 : 2;
  return (
    <>
      <div className="select-imgs">
        <Link className="item" to={`/step${step}/?maxCount=${maxCount}&selectCount=${selectCount + 1}&selectAns=${selectAns * 10 + 1}`} >
          <img src={redPic} alt="画像１" />
        </Link>
        <Link className="item" to={`/step${step}/?maxCount=${maxCount}&selectCount=${selectCount + 1}&selectAns=${selectAns * 10 + 2}`}>
          <img src={bluePic} alt="画像２" />
        </Link>
        <Link className="item" to={`/step${step}/?maxCount=${maxCount}&selectCount=${selectCount + 1}&selectAns=${selectAns * 10 + 3}`}>
          <img src={greenPic} alt="画像３" />
        </Link>
        <Link className="item" to={`/step${step}/?maxCount=${maxCount}&selectCount=${selectCount + 1}&selectAns=${selectAns * 10 + 4}`}>
          <img src={redPic} alt="画像４" />
        </Link>
      </div>
    </>
  );
}

export default SelectImgs;

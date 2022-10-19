import React from "react";
import { Link } from "react-router-dom";
import SelectImgs from "../images/Select"
import ProgressBar from "../ProgressBar";

import backImg from "../../assets/img/back.svg"

const Modal2 = () => {
  return (
    <>
      <div className="modal modal-2">
        <div className="modal-header">
          <h3>Step2</h3>
          <ProgressBar step="2" />
        </div>
        <div className="modal-content">
          <Link to={`/`}>
            <img src={backImg} className="back-img" alt="" />
          </Link>
          <div className="explain">
            <h2>好みの絵を選択</h2>
            <p className="mt8 fs12">４枚のうち、１枚選んでください</p>
            <p className="mt16 fs12">?/3</p>
          </div>
        </div>
        <SelectImgs />
      </div>
    </>
  );
}

export default Modal2;

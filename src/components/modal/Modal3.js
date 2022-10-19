import React from "react";
import SelectedImgs from "../images/Selected";

const Modal3 = () => {
  return (
    <>
      <div className="modal modal-3">
        <h3>Step3</h3>
        <div className="mt8"></div>
        <div className="explain">
          <h2>絵を生成する</h2>
          <p className="mt8 fs12">これらの画像が選ばれました</p>
        </div>
        <SelectedImgs />
      </div>
    </>
  );
}

export default Modal3;

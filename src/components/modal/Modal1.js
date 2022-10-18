import React from "react";
import iconCamera from "../../assets/img/icon_camera.svg";

class Modal1 extends React.Component {
  render() {
    return (
      <>
        <div className="modal modal-1">
          <h3>Step1</h3>
          <div className="mt8"></div>
          <div className="explain">
            <h2>部屋の写真を撮る</h2>
            <p className="mt8 fs12">飾りたい場所を引き目で撮影してください</p>
          </div>
          <div className="btn btn-camera mt24">
            <img src={iconCamera} alt="camera icon" className="icon-camera" />
            <p className="fs16">画像のアップロード</p>
          </div>
        </div>
      </>
    );
  }
}

export default Modal1;

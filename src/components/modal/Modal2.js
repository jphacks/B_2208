import React from "react";
import SelectImgs from "../images/Select"

class Modal2 extends React.Component {
  render() {
    return (
      <>
        <div className="modal modal-2">
          <h3>Step2</h3>
          <div className="mt8"></div>
          <div className="explain">
            <h2>好みの絵を選択</h2>
            <p className="mt8 fs12">４枚のうち、１枚選んでください</p>
            <p className="mt16 fs12">?/3</p>
          </div>
          <SelectImgs />
        </div>
      </>
    );
  }
}

export default Modal2;

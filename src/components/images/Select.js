import React from "react";
import redPic from "../../assets/img/red.png";
import bluePic from "../../assets/img/blue.png";
import greenPic from "../../assets/img/green.png";

class SelectImgs extends React.Component {
  render() {
    return (
      <>
        <div className="select-imgs">
          <img className="item" src={redPic} alt="画像１" />
          <img className="item" src={bluePic} alt="画像２" />
          <img className="item" src={greenPic} alt="画像３" />
          <img className="item" src={redPic} alt="画像４" />
        </div>
      </>
    );
  }
}

export default SelectImgs;

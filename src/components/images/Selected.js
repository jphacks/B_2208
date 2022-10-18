import React from "react";
import redPic from "../../assets/img/red.png";
import bluePic from "../../assets/img/blue.png";
import greenPic from "../../assets/img/green.png";

class SelectImgs extends React.Component {
  render() {
    return (
      <>
        <div className="selected-imgs">
          <img className="selected-img selected-img-1" src={redPic} alt="画像１" />
          <img className="selected-img selected-img-2" src={bluePic} alt="画像２" />
          <img className="selected-img selected-img-3" src={greenPic} alt="画像３" />
        </div>
      </>
    );
  }
}

export default SelectImgs;
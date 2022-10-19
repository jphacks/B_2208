import React from "react";
import { Link } from "react-router-dom";
import Modal3 from "./modal/Modal3";

class Step3 extends React.Component {
  render() {
    return (
      <>
        <Modal3 />
        <Link to={`/generate/`} className='btn btn-create'>
          <p>絵を作成する</p>
        </Link>
      </>
    );
  }
}

export default Step3;

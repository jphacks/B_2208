import { React, useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { Camera } from "react-camera-pro";
import btnCancel from "../assets/img/btn_cancel.svg";
import btnCamera from "../assets/img/btn_camera.svg";
import btnGo from "../assets/img/btn_go.svg";


// const videoConstraints = {
//   width: 390,
//   height: 520,
//   facingMode: "environment"
// };

const TakePic = () => {
  const [isCaptureEnable, setCaptureEnable] = useState(true);
  const camera = useRef(null);
  const [url, setUrl] = useState(null);

  const takePhoto = useCallback(() => {
    const imageSrc = camera.current?.takePhoto();
    if (imageSrc) {
      setUrl(imageSrc);
      setCaptureEnable(false);
    }
  }, [camera])

  const maxCount = 5;

  return (
    <>
      {isCaptureEnable || (
        <>
          <div>
            <img src={btnCancel} alt="" />
          </div>
          <div className="capture-img">
            <img src={url} alt='Taken photo' />
            <div>
              <Link to={`/step2/?maxCount=${maxCount}&selectCount=0&selectAns=0`}>
                <p>進める</p>
                <img src={btnGo} alt="" />
              </Link>
            </div>
          </div>
          <button onClick={() => setCaptureEnable(true)}>開始</button>
        </>
      )}
      {isCaptureEnable && (
        <>
          <div>
            <Camera ref={camera} aspectRatio={9 / 16} />
            <img src={btnCamera} alt="" onClick={takePhoto} />
          </div>
        </>
      )}
    </>
  );
}

export default TakePic;
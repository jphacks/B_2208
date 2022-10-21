import { React, useState } from "react";
import { Link } from "react-router-dom";

const Complete = () => {
  const [isGenerate, setGenerate] = useState(true);
  return (
    <>
      {isGenerate || (
        <>
          <div className="loader-area">
            <p className="fs24">generating...</p>
            <div class="loader">Loading...</div>
          </div>
        </>  
      )}
      {isGenerate && (
        <>
          <Link onClick={() => setGenerate(false)} to={`/complete/`} className='btn btn-create'>
            <p>再作成する</p>
          </Link>
        </>
      )}
    </>
  );
}

export default Complete;

import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Complete = (props) => {
  const [isGenerate, setGenerate] = useState(true);
  const [posts, setPosts] = useState([])

  const url = props.url;
  useEffect(() => {
    fetch('https://google.com', { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setPosts(data)
      })
  }, [])

  return (
    <>
      {isGenerate || (
        <>
          <div className="loader-area">
            <p>{posts}</p>
            <p className="fs24">generating...</p>
            <div class="loader">Loading...</div>
          </div>
        </>
      )}
      {isGenerate && (
        <>
          <img className="camera-area" src={url} alt="" />
          <img className="generate-area" src="" alt="" />
          <Link onClick={() => setGenerate(false)} to={`/complete/`} className='btn btn-create'>
            <p>再作成する</p>
          </Link>
        </>
      )}
    </>
  );
}

export default Complete;

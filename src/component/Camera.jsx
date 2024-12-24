import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

const Camera = () => {
  const [url, setUrl] = useState(null);
  const webcamRef = useRef(null);
  const videoConstraints = { width: 580, facingMode: "user" };

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setUrl(imageSrc);
  };

  return (
    <div className="container my-4">
      <div className="row md-3">
        <div className="col-md-6 offset-md-3 text-center ">
          <h3 className=" text-center fw-bold">Webcam Camera</h3>
          <hr />
          {/* Webcam component */}
          <Webcam
            audio={false}
            ref={webcamRef}
            videoConstraints={videoConstraints}
            screenshotFormat="image/jpeg"
          />
          <div className="button-group mt-3">
            <button className="btn btn-primary" onClick={capture}>
              Capture Photo
            </button>
            <button
              className="btn btn-secondary ms-2 "
              onClick={() => setUrl(null)}
            >
              Refresh
            </button>
          </div>
          <hr />
          {/* Display captured photo */}
          {url && (
            <div className="mt-3">
              <h5>Captured Photo:</h5>
              <img src={url} alt="Captured" width="100%" />
              <a
                href={url}
                download="captured-photo.jpg"
                className="btn btn-primary mt-3"
              >
                Download
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Camera;

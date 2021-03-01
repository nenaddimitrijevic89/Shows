import React from "react";

import "./SingleShowInfo.css";

const SingleShowInfo = ({ image, name, summary }) => {
  return (
    <>
    <div className="row">
      <div className="col-lg-6 col-sm-12 poster">
        <img src={image} alt="poster" />
      </div>
      <div className="col-lg-6 col-sm-12 info">
        <h2 className="text-center name">{name}</h2>
      </div>
    </div>
    <div className='row summary'>
    <div dangerouslySetInnerHTML={{ __html: summary }} />
    </div>
    </>
  );
};

export default SingleShowInfo;

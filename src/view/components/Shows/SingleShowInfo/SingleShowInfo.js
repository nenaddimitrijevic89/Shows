import React from "react";
import Carousel from "../../Carousel/Carousel";

import "./SingleShowInfo.css";

const SingleShowInfo = ({ image, name, summary, seasons, cast, crew, images }) => {
  return (
    <>
      <div className="row">
        <div className="col-lg-6 col-sm-12 poster">
          <img src={image} alt="poster" />
        </div>
        <div className="col-lg-6 col-sm-12 info">
          <h2 className="text-center name">{name}</h2>
          <ul>
            <h5>Seasons ({seasons && seasons.length})</h5>
            {seasons && seasons.slice(0, 3).map((season) => <li key={season.id}>{`${season.premiereDate} - ${season.endDate}`}</li>)}
            <h5>Cast</h5>
            {cast && cast.slice(0, 5).map(c => <li key={c.id}>{c.name}</li>)}
            <h5>Crew</h5>
            {crew && crew.slice(0, 5).map(c => <li key={c.id}>{`${c.type} - ${c.name}`}</li>)}
            <h5>Images</h5>
            <div className="images">
              <Carousel images={images}/>
            </div>
          </ul>
        </div>
      </div>
      <div className="row summary">
        <div dangerouslySetInnerHTML={{ __html: summary }} />
      </div>
    </>
  );
};

export default SingleShowInfo;

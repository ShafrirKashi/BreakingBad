import React from "react";
import { useParams } from "react-router-dom";
import './Episode.css'
function Episode({ episodes }) {
  const params = useParams();

  return (
    <div className="episodeMain">
      <div className="episodeWrapper">
      <div className="EpisodeTitleWrapper">
      <div className="EpisodeTitle">{episodes.data[params.id - 1].title}</div>
      <div className="EpisodeAirDate">{episodes.data[params.id - 1].air_date}</div>
      </div>
     
      <ul>
      <li>{episodes.data[params.id - 1].characters}</li>
      </ul>
      </div>
    </div>
  );
}

export default Episode;

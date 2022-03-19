import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./Episode.css";
function Episode({ episodes }) {
  const params = useParams();

  const navigate = useNavigate();

  const handleSelected = (character) => {
    navigate("/" + character);
  };
  return (
    <div className="episodeMain">
      <div className="episodeWrapper">
        <div className="EpisodeTitleWrapper">
          <div className="EpisodePageTitle">
            {episodes.data[params.id - 1].title} <br></br>
            <div className="Characterstitle">
            Characters:
            </div>
          </div>
          <div className="EpisodePageAirDate">
            {episodes.data[params.id - 1].air_date}
          </div>
        </div>
        {episodes.data[params.id - 1].characters?.map((character) => (
          <div
            className="characterWrapper"
            onClick={() => handleSelected(character)}
          >
            <div className="characterLine">{character}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Episode;

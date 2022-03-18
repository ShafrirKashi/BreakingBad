import React, { useEffect, useState } from "react";
import axios from "axios";
import "./EpisodeLine.css";
import { useNavigate } from "react-router-dom";

function EpisodeLine({variant, episodes}) {

  const navigate = useNavigate()

  const handleSelected = (id) => {
      navigate("/episode/" + id)
  }

  if (variant === "season1") {
  return (
    <div className="god">
      {episodes.data
        ?.filter((episode) => episode.season < 2)
        ?.map((filteredName) => (
          <div key={filteredName.episode_id} onClick={() => handleSelected(filteredName.episode_id)} className="EpisodeLine">
            <div className="EpisodeLineTitle">
            <div  className="Season1EpisodeTitle">{filteredName.episode_id}. {filteredName.title}</div>
            <div className="Season1EpisodeAirDate"> {filteredName.air_date}</div>
            </div>
          </div>
        ))}
    </div>
  );
  }else if(variant === "season2"){
    return (
      <div className="god">
        {episodes.data
          ?.filter((episode) => episode.season > 1 && episode.season < 3)
          ?.map((filteredName) => (
            <div onClick={() => handleSelected(filteredName.episode_id)} className="EpisodeLine">
              <div className="EpisodeLineTitle">
              <div className="Season1EpisodeTitle">{filteredName.episode_id}. {filteredName.title}</div>
              <div className="Season1EpisodeAirDate"> {filteredName.air_date}</div>
              </div>
            </div>
          ))}
      </div>
    );
  }else if(variant === "season3"){
    return (
      <div className="god">
        {episodes.data
          ?.filter((episode) => episode.season > 2 && episode.season < 4)
          ?.map((filteredName) => (
            <div onClick={() => handleSelected(filteredName.episode_id)} className="EpisodeLine">
              <div className="EpisodeLineTitle">
              <div className="Season1EpisodeTitle">{filteredName.episode_id}. {filteredName.title}</div>
              <div className="Season1EpisodeAirDate"> {filteredName.air_date}</div>
              </div>
            </div>
          ))}
      </div>
    );
  }else if(variant === "season4"){
    return (
      <div className="god">
        {episodes.data
          ?.filter((episode) => episode.season > 3 && episode.season < 5)
          ?.map((filteredName) => (
            <div onClick={(e) => {handleSelected(filteredName.episode_id)}} className="EpisodeLine">
              <div className="EpisodeLineTitle">
              <div className="Season1EpisodeTitle">{filteredName.episode_id}. {filteredName.title}</div>
              <div className="Season1EpisodeAirDate"> {filteredName.air_date}</div>
              </div>
            </div>
          ))}
      </div>
    );
  }else if(variant === "season5"){
    return (
      <div className="god">
        {episodes.data
          ?.filter((episode) => episode.season > 4)
          ?.map((filteredName) => (
            <div onClick={() => handleSelected(filteredName.episode_id)} className="EpisodeLine">
              <div className="EpisodeLineTitle">
              <div className="Season1EpisodeTitle">{filteredName.episode_id}. {filteredName.title}</div>
              <div className="Season1EpisodeAirDate"> {filteredName.air_date}</div>
              </div>
            </div>
          ))}
      </div>
    );
  }else{return ""}
}

export default EpisodeLine;

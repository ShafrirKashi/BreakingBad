import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Characters from "../../API/Characters.json";
import './Character.css'

function Character() {
  const params = useParams();

  return (
    <div className="characterMain">
      {Characters.map((Character) => {
        if (Character.name === params.character) {
          return (
            <div className="characterWrapper1">
              <div className="characterName">{Character.name}</div>
                <img className="characterImg" src={Character.img} alt="" />
              <div className="characterLine1">Birthday: {Character.birthday}</div>
              <div className="characterLine1">Nickname: {Character.nickname}</div>
              <div className="characterLine1">Status: {Character.status}</div>
              <div className="characterLine1">Occupation: {Character.occupation.toString().replaceAll(",", ", ")}</div>
            </div>
          );
        } else {
          return "";
        }
      })}
    </div>
  );
}

export default Character;

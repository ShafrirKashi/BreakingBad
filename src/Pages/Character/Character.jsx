import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Characters from "../../API/Characters.json";
import './Character.css'

function Character() {
  const params = useParams();

  console.log(Characters[1].name);
  console.log(params.character);
  return (
    <div className="characterMain">
      {Characters.map((Character) => {
        if (Character.name === params.character) {
          return (
            <div className="characterWrapper1">
              <div className="characterName">{Character.name}</div>
                <img className="characterImg" src={Character.img} alt="" />
              <div className="characterLine">Birthday: {Character.birthday}</div>
              <div className="characterLine">Nickname: {Character.nickname}</div>
              <div className="characterLine">Status: {Character.status}</div>
              <div className="characterLine">Occupation: {Character.occupation.toString().replaceAll(",", ", ")}</div>
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

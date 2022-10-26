import React, { useContext } from "react";
import FrenchFlag from "../../assets/france.svg";
import SpanishFlag from "../../assets/spain.svg";
import EnglishFlag from "../../assets/united-kingdom.svg";
import "./ToggleLangs.css";
import { Context } from "../../context/langContext";

export default function ToggleLangs() {
  const { toggleLang } = useContext(Context);
  // console.log(toggleLang);

  return (
    <div className="container-langs">
      <img
        onClick={() => toggleLang("FR")}
        src={FrenchFlag}
        alt="drapeau français"
      />
      <img
        onClick={() => toggleLang("EN")}
        src={EnglishFlag}
        alt="drapeau royaume-uni"
      />
      <img
        onClick={() => toggleLang("ES")}
        src={SpanishFlag}
        alt="drapeau espagnol"
      />
    </div>
  );
}

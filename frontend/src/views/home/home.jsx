import React from "react";
import MaskotApp from "../assets/maskotapp.png";
import Mensajes from "../assets/placeholder/boton_mensajes.svg";
import Publication from "./publication";
import gatos from "../assets/placeholder/gatos_info.js";

const HomeComp = () => {
  let gatos_info = gatos;
  return (
    <div>
      <div className="flex items-center h-20 w-full pl-4 pr-4 justify-between">
        <div className="w-1/2 h-12 flex items-center">
          <img src={MaskotApp} className="" />
        </div>
        <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray">
          <img src={Mensajes} className="w-6" />
        </div>
      </div>
      {Object.entries(gatos_info).map(([key, value]) => (
          <Publication gato={value} key={key} />
      ))}
    </div>
  );
};

export default HomeComp;
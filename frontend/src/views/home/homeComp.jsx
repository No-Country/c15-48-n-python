import React from "react";
import MaskotApp from "../../assets/Logo MaskotApp.png";
import Publication from "../../components/publication.jsx";
import gatos from "../../assets/placeholder/gatos_info.js";

const HomeComp = () => {
  let gatos_info = gatos;
  return (
    <div className="pl-4 pr-4">
      <div className="flex items-center h-20 w-full justify-between">
        <div className="w-1/2 h-12 flex items-center">
          <img src={MaskotApp} className="" />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {Object.entries(gatos_info).map(([key, value]) => (
            <Publication gato={value} key={key} />
        ))}  
      </div>
      
    </div>
  );
};

export default HomeComp;
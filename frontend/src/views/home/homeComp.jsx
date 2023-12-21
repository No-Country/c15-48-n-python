import React from "react";
import MaskotApp from "../../assets/Logo MaskotApp.png";
import Publication from "../../components/publication.jsx";
import gatos_info from "../../assets/placeholder/gatos_info.js";

const HomeComp = () => {
  let gatos = gatos_info;

  return (
    <div className="flex flex-col items-center md:relative">
      <div className="flex items-center h-20 w-full justify-between max-w-4xl md:sticky md:top-0 md:bg-dark-black">
        <div className="w-1/2 h-12 flex items-center md:w-full md:justify-center mx-6">
          <img src={MaskotApp} className="" />
        </div>
      </div>
      <div className="flex flex-col gap-4 max-w-4xl">
        {Object.entries(gatos).map(([key, value]) => (
            <Publication gato={value} key={key} />
        ))}  
      </div>
    </div>
  );
};

export default HomeComp;
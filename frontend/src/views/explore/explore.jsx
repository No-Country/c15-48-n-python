import React from "react";
import SearchBar from "../../components/SearchBar.jsx";
import Publication from "../../components/publication.jsx";
import animales from "../../assets/placeholder/gatos_info.js";

const Explore = () => {
  let animalesInfo = animales;
  const tipos = [
    "Todas",
    "Aves",
    "Gatos",
    "Perro",
    "Conejos",
    "Caballos",
    "Tags",
  ];

  return (
    <div className="flex flex-col gap-4 text-white items-center">
      <div className="md:max-w-4xl">
        <div className="px-4">
          <SearchBar />
          <div className="flex flex-col gap-3 mt-3">
            <p className="text-lg">Tipo de MaskotA</p>
            <div className="flex gap-2 w-full flex-wrap pb-4 max-w-4xl">
              {tipos.map((tipo) => (
                <button
                  key={tipo}
                  className="border border-gray px-2 pt-1 pb-1 rounded-2xl text-sm"
                >
                  {tipo}
                </button>
              ))}
            </div>
          </div>  
        </div>
        {Object.entries(animalesInfo).map(([key, value]) => (
          <Publication gato={value} key={key} />
        ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;

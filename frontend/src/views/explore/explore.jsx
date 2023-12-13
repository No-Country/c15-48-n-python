import React from "react";
import SearchBar from "../../components/SearchBar.jsx";
import Publication from "../../components/publication";
import animales from "../../assets/placeholder/gatos_info";

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
    <div className="flex flex-col pl-4 pr-4 gap-4 text-white">
        <SearchBar />
      <div className="flex flex-col gap-3">
        <p className="text-lg">Tipo de MaskotA</p>
        <div className="flex gap-2 w-full overflow-auto pb-4">
          {tipos.map((tipo) => (
            <button key={tipo} className="border border-gray pl-2 pr-2 pt-1 pb-1 rounded-2xl text-sm">{tipo}</button>
          ))}
        </div>
      </div>
      {Object.entries(animalesInfo).map(([key, value]) => (
          <Publication gato={value} key={key} />
      ))}
    </div>
  );
};

export default Explore;
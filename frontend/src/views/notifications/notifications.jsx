import React, { useState } from "react";
import Notification from "../../components/notification";

const Notifications = () => {
  const [activeButton, setActiveButton] = useState("btn1");

  let notifications = [
    {
      id: 1,
      type: "like",
      user: "Caballero",
      time: "hace 10 mins",
    },
    {
      id: 2,
      type: "like",
      user: "Dama",
      time: "hace 15 mins",
    },
    {
      id: 3,
      type: "comment",
      user: "Rey",
      time: "hace 20 mins",
    },
    {
      id: 4,
      type: "comment",
      user: "Reina",
      time: "hace 25 mins",
    },
    {
      id: 5,
      type: "like",
      user: "Príncipe",
      time: "hace 30 mins",
    },
    {
      id: 6,
      type: "like",
      user: "Princesa",
      time: "hace 35 mins",
    },
    {
      id: 7,
      type: "comment",
      user: "Caballero Oscuro",
      time: "hace 40 mins",
    },
    {
      id: 8,
      type: "comment",
      user: "Dama Oscura",
      time: "hace 45 mins",
    },
    {
      id: 9,
      type: "like",
      user: "Mago",
      time: "hace 50 mins",
    },
    {
      id: 10,
      type: "like",
      user: "Hechicera",
      time: "hace 55 mins",
    },
    {
      id: 11,
      type: "comment",
      user: "Brujo",
      time: "hace 1 hora",
    },
    {
      id: 12,
      type: "comment",
      user: "Bruja",
      time: "hace 1 hora y 5 mins",
    },
    {
      id: 13,
      type: "like",
      user: "Elfo",
      time: "hace 1 hora y 10 mins",
    },
    {
      id: 14,
      type: "like",
      user: "Hada",
      time: "hace 1 hora y 15 mins",
    },
    {
      id: 15,
      type: "comment",
      user: "Enano",
      time: "hace 1 hora y 20 mins",
    },
    {
      id: 16,
      type: "comment",
      user: "Ninfa",
      time: "hace 1 hora y 25 mins",
    },
    {
      id: 17,
      type: "like",
      user: "Gnomo",
      time: "hace 1 hora y 30 mins",
    },
    {
      id: 18,
      type: "like",
      user: "Sirena",
      time: "hace 1 hora y 35 mins",
    },
    {
      id: 19,
      type: "comment",
      user: "Dragón",
      time: "hace 1 hora y 40 mins",
    },
    {
      id: 20,
      type: "comment",
      user: "Fénix",
      time: "hace 1 hora y 45 mins",
    },
  ];

  let likes = notifications.filter(
    (notification) => notification.type === "like"
  );

  let comments = notifications.filter(
    (notification) => notification.type === "comment"
  );

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  const getButtonStyle = (buttonId) => {
    const isActive = activeButton === buttonId;
    return isActive
      ? "w-full bg-gradient-to-r from-social-pink to-social-blue pb-1"
      : "w-full pb-1 border-b-2 border-dark-gray";
  };

  return (
    <div className="w-full h-full text-white flex flex-col">
      <div className="w-full h-40 flex flex-col justify-between">
        <div className="h-full flex items-center ml-4">
          <p className="text-lg">Notificaciones</p>
        </div>

        <div className="flex h-14">
          <div
            className={getButtonStyle("btn1")}
            onClick={() => handleButtonClick("btn1")}
          >
            <button className="w-full h-full bg-dark-black">Todas</button>
          </div>
          <div
            className={getButtonStyle("btn2")}
            onClick={() => handleButtonClick("btn2")}
          >
            <button className="w-full h-full bg-dark-black">Me gusta</button>
          </div>
          <div
            className={getButtonStyle("btn3")}
            onClick={() => handleButtonClick("btn3")}
          >
            <button className="w-full h-full bg-dark-black">Comentarios</button>
          </div>
        </div>
      </div>

      <div className="w-full h-full overflow-auto">
        {activeButton === "btn1" &&
          notifications.map((notification) => (
            <Notification key={notification.id} notification={notification} />
          ))}
        {activeButton === "btn2" &&
          likes.map((notification) => (
            <Notification key={notification.id} notification={notification} />
          ))}
        {activeButton === "btn3" &&
          comments.map((notification) => (
            <Notification key={notification.id} notification={notification} />
          ))}
      </div>
    </div>
  );
};

export default Notifications;

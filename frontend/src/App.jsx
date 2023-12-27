import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Register from "./views/register/register.jsx";
import HomeComp from "./views/home/homeComp";
import Login from "./views/login/login";
import HumanData from "./views/humanData/HumanData";
import Explore from "./views/explore/explore";
import Create from "./views/createPet/Create.jsx";
import CreatePublish from "./views/Publish/CreatePublish";
import Profile from "./views/profile/profile";
import Notifications from "./views/notifications/notifications";
import Followers from "./views/followers/followers.jsx";
import Publication from "./components/publication.jsx";
import gatos_info from "./assets/placeholder/gatos_info.js";
import SharedLayout from "./views/sharedLayout/SharedLayout.jsx";

let gatos = gatos_info;
const idGatosArray = Object.keys(gatos).map(Number);

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    errorElement: <p>Error here</p>,
    children: [
      {
        index: true,
        element: <HomeComp />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "explore",
        element: <Explore />,
      },
      {
        path: "publish",
        element: <CreatePublish />,
      },
      {
        path: "notifications",
        element: <Notifications />,
      },
      {
        path: "profile/:id",
        element: <Profile />,
      },
      {
        path: "profile/:id/:human",
        element: <HumanData />,
      },
      {
        path: "crearMaskota",
        element: <Create />,
      },
      {
        path: "followers/:id",
        element: <Followers />,
      },
      {
        path: "posts/:id",
        element: <Publication ids={idGatosArray} />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

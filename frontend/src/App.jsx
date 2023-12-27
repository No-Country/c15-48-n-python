import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Register from "./views/register/Register.jsx";
import HomeComp from "./views/home/homeComp";
import Login from "./views/login/login";
import HumanData from "./views/humanData/HumanData";
import Explore from "./views/explore/explore";
import CreatePet from "./views/createPet/CreatePet.jsx";
import CreatePublish from "./views/Publish/CreatePublish";
import Profile from "./views/profile/profile";
import Notifications from "./views/notifications/notifications";
import Followers from "./views/followers/followers.jsx";
import Publication from "./components/publication.jsx";
import gatos_info from "./assets/placeholder/gatos_info.js";
import SharedLayout from "./views/sharedLayout/SharedLayout.jsx";
import { useCreateTokenMutation } from "./services/tokenSlice.js";
// import {
//   useCreateNewUserMutation,
//   useGetUsersQuery,
// } from "./features/user/userSlice.js";

// import { useGetUsersQuery } from "./features/api/apiSlice.js";
import { useEffect } from "react";
import { useGetUsersQuery } from "./services/userSlice.js";

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
        element: <CreatePet />,
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
  // const { data, isLoading, error } = useCreateNewUserMutation({
  //   username: "verylongusername",
  //   password: "VERYLONGPUSERNAME",
  //   email: "test@gmail.com",
  //   first_name: "string",
  // });
  const [CreateToken, tokenData] = useCreateTokenMutation();
  console.log(tokenData);

  useEffect(() => {
    CreateToken({
      username: "admin",
      password: "admin",
    });
  }, []);

  const userData = useGetUsersQuery();
  console.log(userData);
  // if (isLoading) return <p>Loading</p>;
  // console.log(data, isFetching, isLoading);
  // if (data) return <p>{data}</p>;
  // if (tokenData) {
  //   console.log(tokenData);
  // }
  // console.log(tokenData);
  return <RouterProvider router={router} />;
};

export default App;

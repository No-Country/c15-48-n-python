import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Register from "./components/registerComponent/register";
import HomeComp from "./views/home/homeComp";
import Login from "./views/login/login";
import HumanData from "./views/humanData/HumanData";
import Explore from "./views/explore/explore";
import Create from "./views/create/Create";
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

// function App() {
//   const location = useLocation();
//   const profileRoute = location.pathname.startsWith("/profile/:id");
//   const registerRoute = location.pathname === "/register";
//   const loginRoute = location.pathname === "/login";
//   const createMaskotaRoute = location.pathname === "/crearMaskota";

//   return (
//     <div className='h-screen flex flex-col md:flex-row-reverse justify-center'>
//       <div
//         className={
//           profileRoute || registerRoute || loginRoute || createMaskotaRoute
//             ? "AppHiddenNav"
//             : "App"
//         }>
//         <Routes>
//           <Route path='/' element={<HomeComp />} />
//           <Route path='/login' element={<Login />} />
//           <Route path='/register' element={<Register />} />
//           <Route path='/explore' element={<Explore />} />
//           <Route path='/publish' element={<CreatePublish />} />
//           <Route path='/notifications' element={<Notifications />} />
//           <Route path='/profile/:id' element={<Profile />} />
//           <Route path='/profile/:id/:human' element={<HumanData />} />
//           <Route path='/crearMaskota' element={<Create />} />
//           <Route path='/followers/:id' element={<Followers />} />
//           <Route
//             path='/posts/:id'
//             element={<Publication ids={idGatosArray} />}
//           />
//         </Routes>
//       </div>
//       {profileRoute || registerRoute || loginRoute || createMaskotaRoute ? (
//         <div className='navContainer'>
//           <Webnavbar />
//         </div>
//       ) : (
//         <div className='navContainer'>
//           {!profileRoute &&
//           !registerRoute &&
//           !loginRoute &&
//           !createMaskotaRoute ? (
//             <>
//               <Navbar />
//               <Webnavbar />
//             </>
//           ) : null}
//         </div>
//       )}
//     </div>
//   );
// }

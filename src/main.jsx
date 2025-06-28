import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import Overview from "./components/Overview.jsx";
import Profile from "./components/MyProfile.jsx";
import EnrollCourse from "./components/EnrollCourse.jsx";
import Wishlist from "./components/Wishlist.jsx";
import Reviews from "./components/Reviews.jsx";
import MyQuiz from "./components/MyQuiz.jsx";
import Assignments from "./components/Assignments.jsx";
import Setting from "./components/Setting.jsx";
import Logout from "./components/LogOut.jsx";
import Message from "./components/Message.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
     { path: "/", element : <Overview/>,},
     { path: "/profile", element : <Profile/>},
     { path: "/enrollCourse", element : <EnrollCourse/>},
     { path: "/wishlist", element : <Wishlist/>},
     { path: "/review" , element :  <Reviews/>},
     { path: "/myQuiz" , element :  <MyQuiz/>},
     { path: "/message" , element :  <Message/>},
     { path: "/assignments" , element :  <Assignments/>},
     { path: "/setting" , element :  <Setting/>},
     { path: "/logout" , element :  <Logout/>},
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
  
);

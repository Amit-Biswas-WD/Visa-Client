import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main";
import Home from "../page/Home";
import AllVisa from "../page/AllVisa";
import AddVisa from "./../page/AddVisa";
import MyAddedVisas from "../page/MyAddedVisas";
import MyVisaApplications from "./../page/MyVisaApplications";
import AllVisaDetails from "../components/AllVisaDetails";
import Update from "../components/Update";
import Registation from "../page/Registration";
import Login from "../page/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allVisa",
        element: <AllVisa />,
        loader: () => fetch("http://localhost:5000/addVisa"),
      },
      {
        path: "/allVisaDetails/:id",
        element: <AllVisaDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/addVisa/${params.id}`),
      },
      {
        path: "/addVisa",
        element: <AddVisa />,
      },
      {
        path: "/addedVisas",
        element: <MyAddedVisas />,
        loader: () => fetch("http://localhost:5000/addVisa"),
      },
      {
        path: "/visaApplications",
        element: <MyVisaApplications />,
        loader: () => fetch(`http://localhost:5000/addVisa`),
      },
      {
        path: "/update/:id",
        element: <Update />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/addVisa/${params.id}`),
      },
      {
        path: "/registation",
        element: <Registation/>
      },
      {
        path: "/login",
        element: <Login/>
      },
    ],
  },
]);

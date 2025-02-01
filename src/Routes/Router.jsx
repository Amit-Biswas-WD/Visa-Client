import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main";
import Home from "../page/Home";
import AllVisa from "../page/AllVisa";
import AddVisa from './../page/AddVisa';
import MyAddedVisas from "../page/MyAddedVisas";
import MyVisaApplications from './../page/MyVisaApplications';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/allVisa",
            element: <AllVisa/>
        },
        {
            path: "/addVisa",
            element: <AddVisa/>
        },
        {
            path: "/addedVisas",
            element: <MyAddedVisas/>
        },
        {
            path: "/visaApplications",
            element: <MyVisaApplications/>
        },
    ]
  },
]);

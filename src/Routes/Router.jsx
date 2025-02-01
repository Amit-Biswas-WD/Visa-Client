import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main";
import Home from "../page/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
        {
            path: "/",
            element: <Home/>
        }
    ]
  },
]);

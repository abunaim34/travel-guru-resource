import {createBrowserRouter} from "react-router-dom";
import Root from "./Root";
import Home from "../Pages/Home";

const router = createBrowserRouter([
{
    path: "/",
    element: <Root></Root>,
    children: [
        {
            index: true,
            element: <Home />
        }
    ]
},
]);

export default router
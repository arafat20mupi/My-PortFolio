import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import App from "../App";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            // {
            //     path: "/about",
            //     element: <About />,
            // },
            // {
            //     path: "/skills",
            //     element: <Skills />,
            // },
            // {
            //     path: "/services",
            //     element: <Services />,
            // },
            // {
            //     path: "/portfolio",
            //     element: <Portfolio />,
            // },
            // {
            //     path: "/contact",
            //     element: <Contact />,
            // },
        ]
    }
]);

export default router
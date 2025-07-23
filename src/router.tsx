import {createBrowserRouter} from "react-router-dom";
import {HomePage} from "./pages/HomePage.tsx";
import {CountryPage} from "./pages/CountryPage.tsx";
import App from "./App.tsx";
import {homepageLoader} from "./pages/homepageLoader.ts";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {path: '', element: <HomePage/>, loader: homepageLoader}, // Прикрутить loader??
            {path: '/country/:id', element: <CountryPage/>}
        ]
    }

])
import {createBrowserRouter} from "react-router-dom";
import {HomePage} from "./pages/HomePage.tsx";
import {CountryPage} from "./pages/CountryPage.tsx";
import App from "./App.tsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {path: '', element: <HomePage/>},
            {path: '/country/:id', element: <CountryPage/>}
        ]
    }

])
import React from 'react'
import ReactDOM from 'react-dom/client'
import './tailwind.scss'
import App from './App.tsx'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import './i18n.ts';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route
                element={<App/>}
                path={'/'}/>
        </>,
    ),
);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
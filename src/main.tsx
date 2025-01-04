import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/tailwind.scss';
import App from './App.tsx';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import './i18n.ts';
import PartyBus from './pages/PartyBus.tsx';
import Springkastelen from './pages/Springkastelen.tsx';
import Tapwagen from './pages/Tapwagen.tsx';
import Contact from './pages/Contact.tsx';
import Error404 from './pages/Error404.tsx';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<App />} path={'/'} />
            <Route element={<PartyBus />} path={'/partybus'} />
            <Route element={<Springkastelen />} path={'/springkastelen'} />
            <Route element={<Tapwagen />} path={'/tapwagen'} />
            <Route element={<Contact />} path={'/contact'} />
            <Route element={<Error404 />} path={'*'} />
        </>,
    ),
);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);

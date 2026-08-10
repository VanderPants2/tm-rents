import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import SiteLayout from './components/layout/SiteLayout.tsx';
import './i18n.ts';
import Contact from './pages/Contact.tsx';
import Error404 from './pages/Error404.tsx';
import Home from './pages/Home.tsx';
import PartyBus from './pages/PartyBus.tsx';
import Springkastelen from './pages/Springkastelen.tsx';
import Tapwagen from './pages/Tapwagen.tsx';
import './styles/app.css';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<SiteLayout />}>
            <Route element={<Home />} path={'/'} />
            <Route element={<PartyBus />} path={'/partybus'} />
            <Route element={<Springkastelen />} path={'/springkastelen'} />
            <Route element={<Tapwagen />} path={'/tapwagen'} />
            <Route element={<Contact />} path={'/contact'} />
            <Route element={<Error404 />} path={'*'} />
        </Route>,
    ),
);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);

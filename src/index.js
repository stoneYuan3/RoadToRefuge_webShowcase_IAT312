import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import {App, NavMain} from './App';

import { Home,Members } from './pages/general';
import Gdd from './pages/gdd';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavMain />}>
          <Route index element={<App content={ <Home /> } />} />
          <Route path="GDD" element={<App content={ <Gdd /> } />} />
          <Route path="members" element={<App content={ <Members /> } />} />

        </Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

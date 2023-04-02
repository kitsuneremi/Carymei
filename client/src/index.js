import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './index.css';
import VariableProvider from './GlobalVariableStorage/Storage'
import StudioValriableProvider from './resources/views/partials/studioSidebar/VariableStorage/Storage'
import Home from './resources/views/pages/home/Home';
import Result from "./resources/views/pages/result/Result";
import Watch from "./resources/views/pages/watch/Watch";
import Login from "./resources/views/pages/Login/Login";
import Up from './resources/views/pages/Upload/Up';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <VariableProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/result/:slug" element={<Result />}></Route>
          <Route path="/watch/:slug" element={<Watch />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/up" element={<StudioValriableProvider><Up /></StudioValriableProvider>}></Route>
        </Routes>
      </VariableProvider>
    </BrowserRouter>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css';
import VariableProvider from './GlobalVariableStorage/Storage'
import Home from './resources/views/pages/home/Home';
import Result from "./resources/views/pages/result/Result";
import Watch from "./resources/views/pages/watch/Watch";
import Login from "./resources/views/pages/Login/Login";
const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}></Route>
  ),
  createRoutesFromElements(
    <Route path="/result" element={<Result />}></Route>
  ),
  createRoutesFromElements(
    <Route path="/watch" element={<Watch />}></Route>
  )

)

root.render(
  // <RouterProvider>
  <React.StrictMode>
    <BrowserRouter>
      <VariableProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/result/:slug" element={<Result />}></Route>
          <Route path="/watch/:slug" element={<Watch />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </VariableProvider>
    </BrowserRouter>
  </React.StrictMode>
  // </RouterProvider>
);

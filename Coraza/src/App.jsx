import { useState, useEffect } from 'react'
import React from 'react';
import './App.css'
import './index.css'
import { Outlet, BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import { useDispatch } from "react-redux";
import Header from "./components//Header"
import Footer from "./components/footer"
// import Logo from "./components/Logo"

function App() {
  return (
    // <div className="min-h-screen flex flex-wrap content-between bg-blue-900">
    <div>
      <div>
        <Header/>
        <main> 
          <Outlet />
        </main>
      </div>
      {/* <div>
        <Footer />
      </div> */}
    </div>
  )
}

export default App
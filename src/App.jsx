
import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import TopNav from "./components/TopNav";
import Featured from "./components/Featured";
import Categories from "./components/Categories";
import Discover from "./components/Discover";
import Explore from "./components/Explore";
import SidePanel from "./components/SidePanel";
import Footer from "./components/Footer";
import AnimatedSplash from "./AnimatedSplash";
import "./App.css";

export default function App() {
  const [search, setSearch] = useState("");
  const [showSplash, setShowSplash] = useState(true);
  const location = useLocation();
  if (showSplash) {
    return <AnimatedSplash onFinish={() => setShowSplash(false)} />;
  }
  return (
    <div className="app">
      <div className="main">
        {location.pathname !== "/explore" && <Navbar onSearch={setSearch} />}
        <TopNav />
        <Routes>
          <Route path="/" element={
            <>
              <Featured />
              <Categories />
              <Discover search={search} />
            </>
          } />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </div>
      <SidePanel />
      <Footer />
    </div>
  );
}

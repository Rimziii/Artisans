import React from "react";
import { NavLink } from "react-router-dom";

export default function TopNav() {
  return (
    <nav className="top-nav">
      <NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>Home</NavLink>
      <NavLink to="/explore" className={({isActive}) => isActive ? "active" : ""}>Explore</NavLink>
      <NavLink to="/categories" className={({isActive}) => isActive ? "active" : ""}>Categories</NavLink>
      <NavLink to="/chat" className={({isActive}) => isActive ? "active" : ""}>Chat</NavLink>
      <NavLink to="/delivery" className={({isActive}) => isActive ? "active" : ""}>Delivery</NavLink>
    </nav>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex gap-6 p-4 bg-[#005f73] shadow-md">
      <Link to="/" className="hover:text-white">Home</Link>
      <Link to="/about" className="hover:text-white">About</Link>
      <Link to="/contact" className="hover:text-white">Contact</Link>
    </nav>
  );
}

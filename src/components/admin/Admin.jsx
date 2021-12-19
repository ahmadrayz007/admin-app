import React from "react";
import Home from "../../pages/home/Home";
import Sidebar from "../sidebar/Sidebar";
import Topbar from "../topbar/Topbar";

export default function Admin() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

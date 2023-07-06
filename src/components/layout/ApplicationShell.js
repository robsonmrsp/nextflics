import { Session } from "inspector";
import React from "react";
import Navbar from "./NavBar";
import Sidebar from "./Sidebar";
import Body from "./Body";

function ApplicationShell({ children }) {
  return (
    <div className="antialiased bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <Sidebar />
      <Body>{children}</Body>
    </div>
  );
}

export default ApplicationShell;

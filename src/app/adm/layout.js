import React from "react";

// components

import AdminNavbar from "@/components/Navbars/AdminNavbar.js";
import Sidebar from "@/components/layout/Sidebar.js";
import HeaderStats from "@/components/Headers/HeaderStats.js";
import FooterAdmin from "@/components/Footers/FooterAdmin.js";

export default function Admin({ children }) {
  return (
    <>
      <div class="grid grid-cols-12">
        <div class="col-span-2  ">
          <Sidebar />
        </div>
        <div class="col-span-10  ">
          <AdminNavbar />
          <HeaderStats />
          <div className="container mx-auto px-4 content-center">
            <div className="px-4 md:px-10 mx-auto mb-24 w-full -m-24 pb-8">
              {children}
              {/* <FooterAdmin /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

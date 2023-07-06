import React from "react";

// components

import AdminNavbar from "@/components/Navbars/AdminNavbar.js";
import ApplicationShell from "@/components/layout/ApplicationShell";
import HeaderStats from "@/components/Headers/HeaderStats.js";
import FooterAdmin from "@/components/Footers/FooterAdmin.js";

export default function Admin({ children }) {
  return (
    <ApplicationShell>
      <div>{children}</div>
    </ApplicationShell>
  );
}

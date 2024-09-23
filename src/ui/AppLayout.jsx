import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
function AppLayout() {
  return (
    <div>
      <Header />
      <main className="grid-col-sidebar-main">
        <Sidebar />
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default AppLayout;

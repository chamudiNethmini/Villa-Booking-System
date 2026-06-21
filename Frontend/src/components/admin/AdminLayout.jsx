import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";

function AdminLayout() {
  return (
    <div className="admin-layout">
      <AdminSidebar />

      <main className="admin-main-content">
        <AdminNavbar />
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
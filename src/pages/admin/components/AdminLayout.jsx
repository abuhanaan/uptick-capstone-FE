import { AdminNavbar } from "../components/AdminNavbar";
import AdminSideBar from "../components/AdminSideBar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <section className="mt-20  bg-fair min-h-[50vh]">
      <div className="min-h-[50vh]">
        <AdminNavbar />

        <div className="flex gap-6">
          <AdminSideBar />
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default AdminLayout;
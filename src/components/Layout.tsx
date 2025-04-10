
import { Outlet } from "react-router-dom";
import { useData } from "../contexts/DataContext";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Loading from "./Loading";

const Layout = () => {
  const { isLoading, currentUser } = useData();

  if (isLoading) {
    return <Loading />;
  }

  if (!currentUser) {
    // Redirect to login if not logged in
    window.location.href = "/login";
    return null;
  }

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;

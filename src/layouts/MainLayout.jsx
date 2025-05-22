import Sidebar from "../components/Sidebar.jsx"
import Header from "../components/Header.jsx"
import { Outlet } from "react-router-dom"

export default function MainLayout() {
    return (
      <div id="app-container" className="bg-gray-100 min-h-screen flex">
        <div id="layout-wrapper" className="flex flex-row flex-1">
          <Sidebar />
          <div className="flex-1 p-4">
            <Header />
            <Outlet />
          </div>
        </div>
      </div>
    );
  }
  
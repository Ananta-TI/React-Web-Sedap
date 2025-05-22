import { MdDashboard, MdPeople, MdAssignment, MdShoppingCart } from "react-icons/md";
import { useBreadcrumb } from "../context/BreadcrumbContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SidebarMenu() {
  const { updateBreadcrumb } = useBreadcrumb();
  const navigate = useNavigate();

  const menuItems = [
    { label: "Dashboard", icon: <MdDashboard size={20} />, path: "/", key: "dashboard" },
    { label: "Users1", icon: <MdPeople size={20} />, path: "/users1", key: "users1" },
    { label: "Customers1", icon: <MdAssignment size={20} />, path: "/customers1", key: "customers1" },
    { label: "Orders", icon: <MdShoppingCart size={20} />, path: "/orders", key: "orders" },
  ];

  const handleClick = (key) => {
    const breadcrumbs = {
      dashboard: ["Dashboard"],
      users1: ["Users1"],
      customers: ["Customers1"],  
      orders: ["Orders"],
    };
    updateBreadcrumb(breadcrumbs[key] || ["Dashboard"]);
  };

  const handleNavigation = (path, key) => {
    handleClick(key);
    navigate(path);
  };

  return (
    <aside className="w-[250px] min-h-screen bg-[#0f0e13] text-white p-4 border-r border-white/10">
      <h1 className="text-xl font-bold mb-6">MyPanel</h1>
      <nav className="flex flex-col gap-2">
        {menuItems.map((item) => (
          <button
            key={item.key}
            onClick={() => handleNavigation(item.path, item.key)}
            className="flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-md hover:bg-blue-600/30 transition"
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}

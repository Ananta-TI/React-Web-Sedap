import { MdDashboard, MdPeople, MdAssignment, MdShoppingCart } from "react-icons/md";
import { useBreadcrumb } from "../context/BreadcrumbContext";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const { updateBreadcrumb } = useBreadcrumb();
  const navigate = useNavigate();

  const menuItems = [
    { label: "Dashboard", icon: <MdDashboard size={20} />, path: "/", key: "dashboard" },
    { label: "Users1", icon: <MdPeople size={20} />, path: "/users1", key: "users1" },
    { label: "Customers1", icon: <MdAssignment size={20} />, path: "/customers1", key: "customers1" },
    { label: "Orders", icon: <MdShoppingCart size={20} />, path: "/orders", key: "orders" },
  ];

  // Fungsi update breadcrumb sesuai key menu
  const handleClick = (key) => {
    const breadcrumbs = {
      dashboard: ["Dashboard"],
      users1: ["Users1"],
      customers1: ["Customers1"],
      orders: ["Orders"],
    };
    updateBreadcrumb(breadcrumbs[key] || ["Dashboard"]);
  };

  // Fungsi navigasi & update breadcrumb
  const handleNavigation = (path, key) => {
    handleClick(key);
    navigate(path);
  };

  return (
    <aside className="flex flex-col w-[250px] min-h-screen bg-white p-10 shadow-lg">
      {/* Logo & Subtitle */}
      <div className="flex flex-col mb-10">
        <h1 className="font-PoppinsBold text-[48px] text-gray-900">
          TAK <span className="text-green-600">Sedap</span><span className="text-red-600">.</span>
        </h1>
        <span className="font-semibold text-gray-400">Modern Admin Dashboard</span>
      </div>

      {/* Menu List */}
      <nav className="flex flex-col gap-2 flex-grow">
        {menuItems.map((item) => (
          <button
            key={item.key}
            onClick={() => handleNavigation(item.path, item.key)}
            className="flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-md hover:bg-blue-600/30 transition text-gray-700"
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className="mt-auto">
        <div className="bg-green-600 px-4 py-2 rounded-md shadow-lg mb-10 flex items-center gap-4">
          <div className="text-white text-sm">
            <span>Please organize your menus through button below!</span>
            <div
              id="add-menu-button"
              className="flex justify-center items-center p-2 mt-3 bg-white rounded-md space-x-2 cursor-pointer"
            >
              <span className="text-gray-600 flex items-center">Add Menus</span>
            </div>
          </div>
          <img
            src="https://avatar.iran.liara.run/public/28"
            alt="avatar"
            className="w-20 rounded-full"
          />
        </div>
        <span className="font-bold text-gray-400">Sedap Restaurant Admin Dashboard</span>
        <p className="font-light text-gray-400">&copy; 2025 All Right Reserved</p>
      </div>
    </aside>
  );
}

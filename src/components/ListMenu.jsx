import { MdDashboard, MdShop, MdExpandMore } from "react-icons/md";
import { useBreadcrumb } from "../context/BreadcrumbContext";
import FlowingMenu from "./FlowingMenu";
import { useState } from "react";

export default function ListMenu() {
  const { updateBreadcrumb } = useBreadcrumb();

  const menuItems = [
{ label: "Home", icon: <MdDashboard />, id: "hero-section" , key: "home" },
    { label: "About Us", icon: <MdShop />, id: "about-section", key: "about" },
    { label: "Top Recipes", icon: <MdShop />, id: "Top Recipes", key: "Recipes" },
    { label: "LiveBidding", icon: <MdShop />, id: "LiveBidding", key: "live" },
    { label: "Services", icon: <MdShop />, id: "Services", key: "services" },
    { label: "Testimonial", icon: <MdShop />, id: "Testi", key: "Testi" },
  ];

  const flowingMenuItems = [
    {
      text: "User",
      link: "/user",
      image: "/img/user.jpg",
    },
    {
      text: "Customers",
      link: "/customers",
      image: "../img/portfolio/portfolio-02.jpg",
    },
    {
      text: "Food",
      link: "/food",
      image: "/img/food.jpg",
    },
    {
      text: "Orders",
      link: "/orders",
      image: "/img/orders.jpg",
    },
  ];

  const [showFlowingMenu, setShowFlowingMenu] = useState(false);

  const handleClick = (key) => {
    const breadcrumbs = {
      about: ["Home", "Collection"],
      live: ["Home", "LiveBidding"],
      services: ["Home", "Services"],
    };

    updateBreadcrumb(breadcrumbs[key] || ["Home"]);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleHomeClick = () => {
    window.location.href = "/guest";
  };

  return (
    <ul className="flex items-center space-x-6 relative">
      {menuItems.map((item) => (
        <li key={item.key}>
          <button
            onClick={() => {
              if (item.key === "home") {
                handleHomeClick();
              } else {
                handleClick(item.key);
                scrollToSection(item.id);
              }}}
            className="text-sm font-semibold hover:text-blue-400 flex items-center space-x-1 focus:outline-none">
            {item.icon}
            <span>{item.label}</span>
          </button>
        </li>
      ))}
      {/* FlowingMenu dropdown */}
      <li className="relative">
        <button
          onClick={() => setShowFlowingMenu(!showFlowingMenu)}
          className="text-sm font-semibold hover:text-blue-400 flex items-center space-x-1 focus:outline-none">
          <MdShop />
          <span>Pages</span>
          <MdExpandMore className={`transition-transform ${showFlowingMenu ? "rotate-180" : ""}`} />
        </button>
        {showFlowingMenu && (
          <div
            className="absolute top-full mt-2 z-20 w-[250px] h-[250px] overflow-hidden bg-white dark:bg-gray-900/40 shadow-lg rounded-lg"
            onMouseLeave={() => setShowFlowingMenu(false)}>
            <FlowingMenu items={flowingMenuItems} />
          </div>
        )}
      </li>
    </ul>
  );}

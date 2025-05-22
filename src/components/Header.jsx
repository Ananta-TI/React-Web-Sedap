import { FaBell, FaSearch } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";

export default function Header({ searchTerm, setSearchTerm }) {
  return (
    <div id="header-container" className="flex justify-between items-center p-4">
      {/* Search Bar */}
      <div id="search-bar" className="relative w-full max-w-lg">
        <input
          id="search-input"
          type="text"
          placeholder="Search Here..."
          className="border border-gray-100 p-2 pr-10 bg-white w-full max-w-lg rounded-md outline-none"
          value={searchTerm}  // Bind input value to searchTerm
          onChange={(e) => setSearchTerm(e.target.value)}  // Update searchTerm on change
        />
        <FaSearch id="search-icon" className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300"/>
      </div>

      {/* Icon & Profile Section */}
      <div id="icons-container" className="flex items-center space-x-4">
        <div id="notification-icon" className="relative p-3 bg-blue-100 rounded-2xl text-blue-500 cursor-pointer">
          <FaBell />
          <span id="notification-badge" className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-blue-200 rounded-full px-2 py-1 text-xs">50</span>
        </div>
        <div id="chart-icon" className="p-3 bg-blue-100 rounded-2xl cursor-pointer">
          <FcAreaChart />
        </div>
        <div id="settings-icon" className="p-3 bg-red-100 rounded-2xl text-red-500 cursor-pointer">
          <SlSettings />
        </div>

        {/* Profile Section */}
        <div id="profile-container" className="flex items-center space-x-4 border-l pl-4 border-gray-300">
          <span id="profile-text">
            Hello, <b>N T A</b>
          </span>
          <img
            id="profile-avatar"
            src="https://avatar.iran.liara.run/public/28"
            className="w-10 h-10 rounded-full"/>
        </div>
      </div>
    </div>
  );
}

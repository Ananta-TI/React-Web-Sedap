import React, { useEffect, useState } from "react";
import { useBreadcrumb } from "../context/BreadcrumbContext";
import { User } from "react-feather";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState("7 Day's");
  const [searchTerm, setSearchTerm] = useState(""); // ✅ Tambahkan untuk search
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 12; // ✅ 4 kolom × 3 baris
  const { breadcrumb } = useBreadcrumb();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();
        setUsers(data.users);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch users:", error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const filterOptions = ["1 Day", "7 Day's", "15 Day's", "30 Day's"];

  // ✅ Filter berdasarkan search term
  const filteredUsers = users.filter((user) => {
    const fullName = `${user.firstName} 
    ${user.lastName}
    ${user.gender}
    ${user.university}
     ${user.role}
    ${user.company.title}
    ${user.email}`
    
    .toLowerCase();
    return fullName.includes(searchTerm.toLowerCase());
  });

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset ke halaman 1 saat cari
  };

  if (loading) {
    return <div className="text-center py-10 text-white">Loading...</div>;
  }

  return (
    <section className="relative min-h-screen bg-[#0f0e13] text-white py-16 px-6 overflow-hidden">
      {/* Background noise */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/img/bg/noise.gif')",
          backgroundSize: "180px",
          backgroundRepeat: "repeat",
          opacity: 0.08,
        }}
      />

      {/* Header: Title, Filter, Search */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <h2 className="text-3xl font-semibold mt-4">
          Top Users in <span className="text-blue-500">{selectedFilter}</span>
        </h2>
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="bg-white/5 text-white/80 text-sm border border-white/10 px-4 py-2 rounded-md backdrop-blur-md"
          >
            {filterOptions.map((option, idx) => (
              <option key={idx} value={option} className="text-black">
                {option}
              </option>
            ))}
          </select>
          {/* ✅ Search Input */}
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="bg-white/5 text-white/80 text-sm border border-white/10 px-4 py-2 rounded-md backdrop-blur-md"
          />
        </div>
      </div>

      {/* Users List */}
      <div className="relative z-10 grid max-w-7xl mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {currentUsers.map((user, index) => (
          <div
            key={user.id}
            className="relative backdrop-blur-md px-4 py-6 rounded-lg border border-white/10 transition hover:scale-[1.02]"
          >
            {/* Rank */}
            <div className="absolute right-3 top-2 text-[64px] font-bold text-white/5 z-0">
              {indexOfFirstUser + index + 1}
            </div>

            {/* Avatar */}
            <div className="relative z-10 flex items-center gap-4 mb-4">
              <img
                src={user.image}
                alt={user.firstName}
                className="w-16 h-16 rounded-full border-2 border-white object-cover"
              />
              <div>
                <h3 className="font-semibold text-lg">
                  {user.firstName} {user.lastName}
                </h3>
                <p className="text-sm text-white/70">{user.company.title} | {user.role}</p>
              </div>
            </div>

            {/* Info */}
            <div className="relative z-10 text-sm space-y-1">
              <p className="text-white/60">University: {user.university}</p>
              <p className="text-white/60">Age: {user.age}</p>
              <p className="text-white/60">Gender: {user.gender}</p>
              <p className="text-white/70 truncate">📧 {user.email}</p>
              <p className="text-white/50">📞 {user.phone}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {filteredUsers.length > 0 && (
        <div className="relative z-10 flex justify-center items-center mt-12 gap-4">
          <button
            onClick={goToPrevPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-md text-sm transition ${
              currentPage === 1
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            } text-white`}
          >
            Previous
          </button>
          <span className="text-white/80 text-sm">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-md text-sm transition ${
              currentPage === totalPages
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            } text-white`}
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
}

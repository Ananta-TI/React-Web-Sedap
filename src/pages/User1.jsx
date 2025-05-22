import React, { useEffect, useState } from "react";
import { useBreadcrumb } from "../context/BreadcrumbContext";
import PageHeader from "../components/PageHeader";

export default function User1() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 12;
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

  // Filter user berdasarkan search term
  const filteredUsers = users.filter((user) => {
    const fullText = `
      ${user.firstName} ${user.lastName}
      ${user.gender} ${user.university}
      ${user.role} ${user.company.title}
      ${user.email} ${user.phone}
    `.toLowerCase();
    return fullText.includes(searchTerm.toLowerCase());
  });

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const startIndex = (currentPage - 1) * usersPerPage;
  const currentUsers = filteredUsers.slice(startIndex, startIndex + usersPerPage);

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-700 text-lg font-semibold">
        Loading users...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="flex justify-center">
        <div className="w-full max-w-7xl">
          {/* Header Section */}
          <PageHeader title="Users" breadcrumb={breadcrumb} />

          {/* Search Input */}
          <div className="mt-6">
            <input
              type="text"
              placeholder="Search name, email, university, or phone..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full sm:w-96 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Empty State */}
          {filteredUsers.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center text-gray-600">
              <img
                src="https://i.imgur.com/qIufhof.png"
                alt="Not Found"
                className="w-64 mb-6"
              />
              <h1 className="text-3xl font-semibold mb-2">No Data Found</h1>
              <p className="mb-4">Sorry, no users matched your search.</p>
              <button
                onClick={() => setSearchTerm("")}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition"
              >
                Clear Search
              </button>
            </div>
          ) : (
            <>
              {/* User List */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
                {currentUsers.map((user) => (
                  <li
                    key={user.id}
                    className="transition-transform transform hover:scale-105 hover:shadow-lg rounded-lg p-6 bg-white shadow-sm border border-gray-200"
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <img
                        src={user.image}
                        alt={`${user.firstName} ${user.lastName}`}
                        className="w-14 h-14 rounded-full border border-gray-300 object-cover"
                      />
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900">
                          {user.firstName} {user.lastName}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {user.company.title} | <span className="italic">{user.role}</span>
                        </p>
                      </div>
                    </div>
                    <div className="space-y-1 text-gray-700 text-sm">
                      <p>🎓 {user.university}</p>
                      <p>👤 {user.gender}</p>
                      <p>🎂 {user.age} years old</p>
                      <p>📧 <a href={`mailto:${user.email}`} className="text-blue-600 underline">{user.email}</a></p>
                      <p>📞 {user.phone}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Pagination */}
              <div className="flex justify-center items-center gap-4 mt-10">
                <button
                  onClick={handlePrev}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-md text-sm transition ${
                    currentPage === 1
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  }`}
                >
                  Previous
                </button>
                <span className="text-gray-600 text-sm">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={handleNext}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-md text-sm transition ${
                    currentPage === totalPages
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  }`}
                >
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

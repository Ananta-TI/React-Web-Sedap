import React, { useState } from "react";
import { useBreadcrumb } from "../context/BreadcrumbContext";
import { FaUserPlus, FaDownload, FaArrowLeft } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Customers1({ customers }) {
  const { breadcrumb } = useBreadcrumb();

  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 12;

  const filteredCustomers = customers.filter((customer) =>
    `${customer["Customer Name"]}
     ${customer["Customer ID"]}
     ${customer.Email}
     ${customer.Loyalty}
     ${customer.Phone}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCustomers = filteredCustomers.slice(startIndex, startIndex + itemsPerPage);

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <div id="Customer-container" className="min-h-screen bg-gray-50 p-6">
      <div className="flex justify-center">
        <div className="w-full">
          {/* Header Section */}
          <PageHeader title="Customers" breadcrumb={breadcrumb}>
            <div className="flex gap-4">
              <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-lg flex items-center space-x-2 transition duration-300">
                <FaUserPlus />
                <span>Add Customer</span>
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg flex items-center space-x-2 transition duration-300">
                <FaDownload />
                <span>Export</span>
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2.5 rounded-lg flex items-center space-x-2 transition duration-300">
                <FaArrowLeft />
                <span>Back</span>
              </button>
            </div>
          </PageHeader>

          {/* Search Input */}
          <div className="mt-6">
            <input
              type="text"
              placeholder="Search name, email, or phone..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full sm:w-96 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Empty State */}
          {filteredCustomers.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center text-gray-600">
              <img
                src="https://i.imgur.com/qIufhof.png"
                alt="Not Found"
                className="w-64 mb-6"
              />
              <h1 className="text-3xl font-semibold mb-2">No Data Found</h1>
              <p className="mb-4">Maaf, data yang kamu cari tidak ditemukan.</p>
              <a
                href="/"
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition"
              >
                Kembali ke Beranda
              </a>
            </div>
          ) : (
            <>
              {/* Customer List */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
                {currentCustomers.map((customer, index) => (
                  <li
                    key={index}
                    className="transition-transform transform hover:scale-105 hover:shadow-lg rounded-lg p-6 bg-white shadow-sm border border-gray-200"
                  >
                    <div className="space-y-2 text-sm text-gray-700">
                      <p className="font-bold text-gray-500">Customer ID:
                        <span className="font-semibold text-gray-900"> {customer["Customer ID"]}</span>
                      </p>
                      <p className="font-bold text-gray-500">Name:
                        <span className="font-semibold text-gray-900"> {customer["Customer Name"]}</span>
                      </p>
                      <p className="font-bold text-gray-500">Email:
                        <span className="text-blue-600"> {customer.Email}</span>
                      </p>
                      <p className="font-bold text-gray-500">Phone:
                        <span className="text-green-600"> {customer.Phone}</span>
                      </p>
                      <p className="font-bold text-gray-500">Loyalty:
                        <span className={`ml-2 px-2 py-1 text-xs rounded-full font-semibold ${
                          customer.Loyalty === "Gold"
                            ? "bg-yellow-100 text-yellow-700"
                            : customer.Loyalty === "Master"
                            ? "bg-red-100 text-red-600"
                            : customer.Loyalty === "Silver"
                            ? "bg-gray-100 text-gray-600"
                            : "bg-orange-100 text-orange-600"
                        }`}>
                          {customer.Loyalty}
                        </span>
                      </p>
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

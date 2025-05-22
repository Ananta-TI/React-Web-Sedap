import React, { useState } from "react";
import { useBreadcrumb } from "../context/BreadcrumbContext";

export default function Customers({ customers }) {
  const { breadcrumb } = useBreadcrumb();

  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 12;

  // Filter customers berdasarkan pencarian
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

      <div className="relative mt-10 z-10 max-w-7xl mx-auto">
        {/* Section Title & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-10 gap-4">
          <h2 className="text-3xl font-semibold">Customer List</h2>
          <input
            type="text"
            placeholder="Search name, email, or phone..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="bg-white/5 border border-white/10 text-sm text-white px-4 py-2 rounded-md w-full sm:w-80 backdrop-blur-md"
          />
        </div>

        {/* Validasi jika tidak ada hasil pencarian */}
        {filteredCustomers.length === 0 ? (
          <div className="text-center text-red-400 text-lg font-semibold my-10">
             <div className="flex flex-col items-center justify-center min-h-screen  text-red-600">
      <img
        src="https://i.imgur.com/qIufhof.png"
        alt="Error Illustration"
        className="w-64 mb-6"
      />
      <h1 className="text-4xl font-bold mb-2">400 - Bad Request</h1>
      <p className="text-lg text-center mb-6">
        Maaf, Data yang kamu cari tidak terdaftar.
      </p>
      <a
        href="/"
        className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300"
      >
        Kembali ke Beranda
      </a>
    </div>
          </div>
        ) : (
          <>
            {/* Customer Cards */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {currentCustomers.map((customer, index) => (
                <li
                  key={index}
                  className="transition-transform transform hover:scale-105 hover:shadow-lg rounded-xl p-6 bg-transparent border border-white/10 backdrop-blur-md"
                >
                  <div className="space-y-2 text-sm text-white">
                    <p className="font-semibold">
                      Customer ID: <span className="text-white/80">{customer["Customer ID"]}</span>
                    </p>
                    <p className="font-semibold">
                      Name: <span className="text-white/80">{customer["Customer Name"]}</span>
                    </p>
                    <p className="font-semibold">
                      Email: <span className="text-blue-400">{customer.Email}</span>
                    </p>
                    <p className="font-semibold">
                      Phone: <span className="text-green-400">{customer.Phone}</span>
                    </p>
                    <p className="font-semibold">
                      Loyalty:{" "}
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-bold ${
                          customer.Loyalty === "Gold"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : customer.Loyalty === "Master"
                            ? "bg-red-500/20 text-red-400"
                            : customer.Loyalty === "Silver"
                            ? "bg-gray-500/20 text-gray-300"
                            : "bg-orange-500/20 text-orange-400"
                        }`}
                      >
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
                onClick={handleNext}
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
          </>
        )}
      </div>
    </section>
  );
}

import React from "react";
import { useBreadcrumb } from "../context/BreadcrumbContext";
import { FaUserPlus, FaDownload, FaArrowLeft } from "react-icons/fa";
import PageHeader from "../components/PageHeader";
export default function Orders({ orders }) {
  const { breadcrumb } = useBreadcrumb();
  return (
    <div id="Order-container" className="min-h-screen bg-gray-50 p-6">
      <div className="flex justify-center">
        <div className="w-full ">
          {/* Header Section */}
          <PageHeader
          title="Orders"
          breadcrumb={breadcrumb}>
          <div className="flex gap-4">
            <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-lg flex items-center space-x-2 transition duration-300">
              <FaUserPlus />
              <span>Add Order</span>
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
            {/* Order List */}
            <div className="mt-6">
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4">
                {orders.map((order, index) => (
                  <li key={index} className="transition-transform transform hover:scale-105 hover:shadow-lg rounded-lg p-6 bg-white shadow-sm border border-gray-200">
                    <div className="space-y-3">
                      <p className="text-sm font-bold text-gray-500">Order ID: 
                        <span className="font-semibold text-gray-900">{order["Order ID"]}</span>
                      </p>
                      <p className="text-sm font-bold text-gray-500">Customer Name: 
                        <span className="font-semibold text-gray-900">{order["Customer Name"]}</span>
                      </p>
                      <p className="text-sm font-bold text-gray-500">Status: 
                        <span className={`font-bold ${order.Status === "Completed" ? "text-green-600 bg-green-200 rounded-full m-2 px-2 py-1" : order.Status === "Pending" ?
                         "text-yellow-600 bg-yellow-200 rounded-full m-2 px-2 py-1" : "text-red-600 bg-red-200 rounded-full m-2 px-2 py-1"}`}>
                          {order.Status}
                        </span>
                      </p>
                      <p className="text-sm font-bold text-gray-500">Total Price: 
                        <span className="font-semibold text-indigo-600">${order["Total Price"].toFixed(2)}</span>
                      </p>
                      <p className="text-sm font-bold text-gray-500">Order Date: 
                        <span className="font-semibold text-gray-900">{order["Order Date"]}</span>
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
        </div>
      </div>
    </div>
  );
}

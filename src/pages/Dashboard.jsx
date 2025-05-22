import PageHeader from "../components/PageHeader.jsx";
import { FaShoppingCart, FaTruck, FaBan, FaDollarSign, FaPlus } from "react-icons/fa";
import { useBreadcrumb } from "../context/BreadcrumbContext"; // Mengimpor context
export default function Dashboard() {
  const { breadcrumb } = useBreadcrumb(); // Mengambil breadcrumb dari context
  return (
    <div id="dashboard-container" className="min-h-screen bg-gray-100 p-6">
      <div className="flex">
        <div>
        </div>
        <div className="w-full">
          <PageHeader
            title="Dashboard"
            breadcrumb={breadcrumb} >
            <div className="flex gap-3">
              <button className="bg-hijau hover:bg-green-800 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition duration-300">
                <FaPlus />
                <span>Add Order</span>
              </button>
              <button className="bg-biru hover:bg-blue-800 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition duration-300">
                <FaPlus />
                <span>Export</span>
              </button>
              <button className="bg-merah hover:bg-red-800 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition duration-300">
                <FaPlus />
                <span>Back</span>
              </button>
            </div>
          </PageHeader>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            {/* Orders */}
            <div className="flex items-center bg-white shadow rounded-xl p-4">
              <div className="bg-green-500 text-white rounded-full p-3 mr-4 text-xl">
                <FaShoppingCart />
              </div>
              <div>
                <div className="text-2xl font-bold">75</div>
                <div className="text-gray-500 text-sm">Total Orders</div>
              </div>
            </div>
            {/* Delivered */}
            <div className="flex items-center bg-white shadow rounded-xl p-4">
              <div className="bg-blue-500 text-white rounded-full p-3 mr-4 text-xl">
                <FaTruck />
              </div>
              <div>
                <div className="text-2xl font-bold">175</div>
                <div className="text-gray-500 text-sm">Total Delivered</div>
              </div>
            </div>
            {/* Canceled */}
            <div className="flex items-center bg-white shadow rounded-xl p-4">
              <div className="bg-red-500 text-white rounded-full p-3 mr-4 text-xl">
                <FaBan />
              </div>
              <div>
                <div className="text-2xl font-bold">40</div>
                <div className="text-gray-500 text-sm">Total Canceled</div>
              </div>
            </div>
            {/* Revenue */}
            <div className="flex items-center bg-white shadow rounded-xl p-4">
              <div className="bg-yellow-500 text-white rounded-full p-3 mr-4 text-xl">
                <FaDollarSign />
              </div>
              <div>
                <div className="text-2xl font-bold">Rp.128</div>
                <div className="text-gray-500 text-sm">Total Revenue</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

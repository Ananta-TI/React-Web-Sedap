import React, { useState } from "react";

const sellers = [
  {
    name: "Brodband",
    image: "/img/client/client-12.png",
    amount: "$2500,000",
    verified: true,
  },
  {
    name: "Ms. Parkline",
    image: "/img/client/client-2.png",
    amount: "$2300,000",
    verified: false,
  },
  {
    name: "Methods",
    image: "/img/client/client-3.png",
    amount: "$2100,000",
    verified: false,
  },
  {
    name: "Jone sone",
    image: "/img/client/client-4.png",
    amount: "$2000,000",
    verified: true,
  },
  {
    name: "Siddhart",
    image: "/img/client/client-5.png",
    amount: "$200,000",
    verified: false,
  },
  {
    name: "Sobuj Mk",
    image: "/img/client/client-6.png",
    amount: "$2000,000",
    verified: true,
  },
  {
    name: "Trodband",
    image: "/img/client/client-7.png",
    amount: "$2500,000",
    verified: true,
  },
  {
    name: "Yash",
    image: "/img/client/client-8.png",
    amount: "$2500,000",
    verified: false,
  },
  {
      name: "YASHKIB",
      image: "/img/client/client-9.png",
    amount: "$2500,000",
    verified: false,
  },
  {
      name: "Brodband",
      image: "/img/client/client-10.png",
    amount: "$2500,000",
    verified: true,
  },
];

const filterOptions = ["1 Day", "7 Day's", "15 Day's", "30 Day's"];

export default function TopSellers() {
  const [selectedFilter, setSelectedFilter] = useState("7 Day's");

  return (
    <section className="relative bg-[#0f0e13] text-white py-16 px-6 overflow-hidden">
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

      {/* Header */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between mb-10 gap-4">
        <h2 className="text-3xl font-semibold">
          Top Seller in{" "}
          <span className="text-blue-500">{selectedFilter}</span>
        </h2>
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
      </div>

      {/* Sellers List */}
      <div className="relative z-10 grid max-w-7xl mx-auto grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {sellers.map((seller, index) => (
         <div key={index} className="relative flex items-center gap-4 backdrop-blur-md px-4 py-3 rounded-lg   transition">
  {/* Rank number background */}
  <div className="absolute right-1 text-[64px] font-bold text-white/5 z-0 hover:scale-80 transition-transform duration-300">
    {index + 1}
  </div>

  {/* Avatar + verified */}
  
  <div className="relative z-10 ">
    <img
      src={seller.image}
      alt={seller.name}
      className="w-14 h-14 rounded-full  hover:scale-120 transition-transform duration-300"
    />
    {seller.verified && (
      <span className="absolute -bottom-1 -right-1 bg-blue-500 text-white text-[10px] px-[6px] py-[2px] rounded-full">
        ✓
      </span>
    )}
  </div>

  {/* Text content */}
  <div className="flex flex-col z-10">
    <h6 className="text-lg font-bold hover:text-blue-600">{seller.name}</h6>
    <span className="text-sm text-white/70">{seller.amount}</span>
  </div>
</div>

        ))}
      </div>
    </section>
  );
}

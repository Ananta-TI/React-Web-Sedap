import React from "react";
import Logo from "../components/logo.jsx"
const Footer = () => {
  return (
    <footer className="bg-[#0f0f13] text-white pt-20 pb-10 mt-[-100px]">
      {/* Brand Images */}
      <div className="border-b border-white/10 pb-10 mb-10">
        <div className="container mx-auto flex flex-wrap justify-center gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
            <img
              key={index}
              src={`assets/images/brand/brand-0${item}.png`}
              alt={`brand-${item}`}
              className="h-10" />
          ))}
        </div>
      </div>
      {/* Footer Content */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-4">
        <div>
          <div className="mb-6">
            <Logo />
          </div>
          <p className="text-white/70 text-sm mb-6">
            Created with the collaboration of over 60 of the world's best Nuron Artists.
          </p>
          <h6 className="text-lg font-semibold mb-2">Get The Latest Nuron Updates</h6>
          <div className="flex gap-2">
            <input
              type="text"
              className="bg-[#1c1c22] px-4 py-2 rounded-md text-sm w-full placeholder:text-white/50"
              placeholder="Your username" />
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-white/50 mt-2">Email is safe. We don't spam.</p>
        </div>
        <div>
          <h6 className="text-lg font-semibold mb-4">Nuron</h6>
          <ul className="space-y-2 text-sm text-white/70">
            {[
              "Protocol Explore",
              "System Token",
              "Otimize Time",
              "Visual Checking",
              "Fadeup System",
              "Activity Log",
              "System Auto Since",
            ].map((item, index) => (
              <li key={index}><a href="#" className="hover:text-white">{item}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h6 className="text-lg font-semibold mb-4">Information</h6>
          <ul className="space-y-2 text-sm text-white/70">
            {[
              "Market Explore",
              "Ready Token",
              "Main Option",
              "Product Checking",
              ["Blog Grid", "blog.html"],
              ["About Us", "about.html"],
              "Fix Bug",
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={Array.isArray(item) ? item[1] : "#"}
                  className="hover:text-white">
                  {Array.isArray(item) ? item[0] : item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h6 className="text-lg font-semibold mb-4">Recent Sold Out</h6>
          <ul className="space-y-4">
            {[
              {
                img: "/img/portfolio/portfolio-01.jpg",
                title: "#21 The Wonder",
                bid: "Highest bid 1/20",
                price: "0.244wETH",
              },
              {
                img: "/img/portfolio/portfolio-02.jpg",
                title: "Diamond Dog",
                bid: "Highest bid 1/20",
                price: "0.022wETH",
              },
              {
                img: "/img/portfolio/portfolio-03.jpg",
                title: "Morgan11",
                bid: "Highest bid 1/20",
                price: "0.892wETH",
              },
            ].map((post, index) => (
              <li key={index} className="flex gap-4 ">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-16 h-16 object-cover rounded-full" />
                <div>
                  <h6 className="text-sm font-medium">
                    <a href="product-details.html" className="hover:text-blue-400">
                      {post.title}
                    </a>
                  </h6>
                  <p className="text-xs text-white/50">{post.bid}</p>
                  <span className="text-xs text-blue-500 font-bold">{post.price}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

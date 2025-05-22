import React from 'react';
const services = [
  {
    step: 'Langkah 1',
    title: 'Buat Menu Makanan',
    description: 'Tentukan daftar makanan dan minuman yang ingin kamu jual, lengkap dengan harga dan deskripsi.',
    icon: '../img/produk/menu.svg',
  },
  {
    step: 'Langkah 2',
    title: 'Ambil Foto Menarik',
    description: 'Ambil gambar makananmu dengan pencahayaan yang bagus agar menggugah selera.',
    icon: '../img/produk/camera.svg',
  },
  {
    step: 'Langkah 3',
    title: 'Upload ke Platform',
    description: 'Pasang menu dan foto makanan ke aplikasi atau website jualan online.',
    icon: '../img/produk/upload.svg',
  },
  {
    step: 'Langkah 4',
    title: 'Terima Pesanan',
    description: 'Pantau pesanan masuk dan siapkan makanan untuk dikirim dengan cepat dan rapi.',
    icon: '../img/produk/delivery.svg',
  },
];


const NFTStepsFancy = () => {
  return (
 <section
      id="Services"
      className="relative bg-[#0f0e13] text-white py-16 px-6 overflow-hidden"
    >
    
      {/* Background noise layer */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/img/bg/noise.gif')",
          backgroundSize: "180px",
          backgroundRepeat: "repeat",
          opacity: 0.08,
        }}
      />
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl text-white md:text-4xl font-bold text-center mb-12">Create and Sell Your Food</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((item, index) => (
          <div key={index} className="flex flex-col gap-5 group mx-2 cursor-pointer">
            <div className="w-44 sm:w-52 aspect-square items-center justify-center flex bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg hover:scale-110 duration-1000 ">
              <img
                src={item.icon}
                alt={item.title}
                className="group-hover:ease-in-out transition duration-700 group-hover:duration-1000 cursor-pointer object-center object-cover group-hover:scale-110 sm:group-hover:scale-150 w-16 sm:w-28 aspect-square rotate-0 group-hover:-rotate-[360deg] group-hover:-translate-y-12 group-hover:-skew-y-12 group-hover:skew-x-12"
              />
            </div>

            <div className="flex flex-row place-items-center place-content-between">
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-lg sm:text-xl relative after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:absolute after:origin-bottom-left after:transform after:ease-in-out after:duration-500 cursor-pointer w-full after:w-full group-hover:after:scale-x-100 group-hover:after:origin-bottom-left after:bg-lime-600 dark:after:bg-purple-300 text-gray-600 dark:text-purple-500">
                  {item.title}
                </p>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>

              <div className="-rotate-45 cursor-pointer">
                <svg
                  clipRule="evenodd"
                  fillRule="evenodd"
                  strokeLinejoin="round"
                  strokeMiterlimit="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-600 font-semibold text-lg sm:text-xl transition-all duration-300 group-hover:text-gray-200 fill-purple-600 group-hover:bg-purple-600 group-hover:fill-white group-hover:rotate-45 p-px rounded-full w-10 group-hover:rounded-full group-hover:animate-pulse"
                >
                  <path
                    d="m12.012 1.995c-5.518 0-9.998 4.48-9.998 9.998s4.48 9.998 9.998 9.998 9.997-4.48 9.997-9.998-4.479-9.998-9.997-9.998zm0 1.5c4.69 0 8.497 3.808 8.497 8.498s-3.807 8.498-8.497 8.498-8.498-3.808-8.498-8.498 3.808-8.498 8.498-8.498zm1.528 4.715s1.502 1.505 3.255 3.259c.146.147.219.339.219.531s-.073.383-.219.53c-1.753 1.754-3.254 3.258-3.254 3.258-.145.145-.336.217-.527.217-.191-.001-.383-.074-.53-.221-.293-.293-.295-.766-.004-1.057l1.978-1.977h-6.694c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.694l-1.979-1.979c-.289-.289-.286-.762.006-1.054.147-.147.339-.221.531-.222.19 0 .38.071.524.215z"
                    fillRule="nonzero"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="text-center mt-10">
  <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300">
    Mulai Jualan Sekarang
  </button>
</div>
    </section>
  );
};

export default NFTStepsFancy;

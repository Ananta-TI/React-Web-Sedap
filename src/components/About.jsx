import React from "react";
import SpotlightCard from './SpotLightCard';
export default function AboutUs() {
  return (
    <section
      id="about-section"
      className="relative bg-[#0f0e13] text-white py-20 px-6 overflow-hidden">
      {/* Background noise */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/img/bg/noise.gif')",
          backgroundSize: "180px",
          backgroundRepeat: "repeat",
          opacity: 0.08,
          }}/>
      <div className="absolute top-0 left-0 w-full h-[60%] bg-gradient-to-b from-[#0f0e13] to-transparent pointer-events-none" />
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">Tentang Kami</h2>
        <p className="text-white/70 text-lg leading-relaxed mb-12">
          Kami adalah platform yang menghadirkan berbagai produk makanan lokal 
          terbaik dari berbagai daerah di Indonesia. Dari camilan tradisional, 
          makanan sehat, hingga makanan kekinian—semua tersedia untuk memanjakan lidah 
          dan mendukung pelaku UMKM kuliner.
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          <SpotlightCard className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md">
            <h3 className="text-xl font-semibold text-white mb-2">🍱 Misi Kami</h3>
            <p className="text-white/60 text-sm">
              Menyediakan makanan berkualitas tinggi, sehat, dan aman, sambil 
              memajukan industri kuliner lokal dengan memberdayakan produsen makanan 
              rumahan dan UMKM di seluruh Indonesia.
            </p>
          </SpotlightCard>
          <SpotlightCard className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md">
            <h3 className="text-xl font-semibold text-white mb-2">🌍 Visi Kami</h3>
            <p className="text-white/60 text-sm">
              Menjadi platform kuliner terpercaya yang mengenalkan kekayaan cita rasa 
              Indonesia ke seluruh penjuru nusantara dan dunia.
            </p>
          </SpotlightCard>
        </div>
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-4 text-white">Produk Unggulan</h3>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[
              { name: "Keripik Pisang Coklat", desc: "Camilan renyah dari pisang asli", img: "/img/produk/keripik.jpg" },
              { name: "Sambal Rumahan", desc: "Sambal khas pedesnya nendang!", img: "/img/produk/sambal.jpg" },
              { name: "Granola Sehat", desc: "Snack sehat tanpa pengawet", img: "/img/produk/granola.jpg" },
            ].map(({ name, desc, img }) => (
              <SpotlightCard
                key={name}
                className="flex flex-col items-center bg-white/5 border border-white/10 p-4 rounded-lg backdrop-blur-md">
                <img
                  src={img}
                  alt={name}
                  className="w-24 h-24 rounded-full border-2 border-white object-cover mb-3"/>
                <h4 className="text-white font-medium text-lg">{name}</h4>
                <p className="text-white/60 text-sm text-center">{desc}</p>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

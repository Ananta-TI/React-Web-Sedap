import { useRef } from "react";
import VariableProximity from "../components/VariableProximity";
import Balatro from "../components/Balatro";

export default function Hero() {
  const containerRef = useRef();
  return (
    <section
      ref={containerRef}
      id="hero-section"
      className="relative min-h-screen text-white flex items-center justify-center text-center px-6 overflow-hidden">
      {/* Balatro Background */}
      <div className="absolute inset-0 z-[-2]">
        <Balatro />
      </div>
      {/* Overlay Gelap */}
      <div className="absolute inset-0 bg-[#0f0e13]/80 z-[-1] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[60%] bg-gradient-to-b from-[#0f0e13] to-transparent z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-[#0f0e13] to-transparent z-0 pointer-events-none" />
      {/* Konten */}
      <div className="z-10 max-w-3xl">
        <h1 className="text-sm uppercase text-yellow-400 font-semibold tracking-widest mb-2">
          Makanan Nusantara
        </h1>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          <VariableProximity
            label="Jelajahi Cita Rasa Lokal dalam Setiap Gigitan"
            fromFontVariationSettings={`"wght" 400, "GRAD" 0, "YTLC" 500`}
            toFontVariationSettings={`"wght" 700, "GRAD" 100, "YTLC" 800`}
            containerRef={containerRef}
            radius={120}
            falloff="gaussian"
            className="inline-block"/>
        </h1>
        <p className="mb-6 text-gray-200">
          Kami mempersembahkan produk makanan lokal terbaik: dari camilan tradisional, 
          makanan sehat, hingga kuliner modern kekinian. Semua tersedia dalam satu tempat.
        </p>
        {/* Ikon Produk */}
        <div className="flex justify-center flex-wrap gap-4 mb-8">
          {[
            { src: "img/produk/keripik.jpg", alt: "Keripik Pisang" },
            { src: "img/produk/sambal.jpg", alt: "Sambal Rumahan" },
            { src: "img/produk/granola.jpg", alt: "Granola Sehat" },
            { src: "img/produk/kopi.jpg", alt: "Kopi Lokal" },
            { src: "img/produk/dodol.jpg", alt: "Dodol Khas" },
            { src: "img/produk/abon.jpg", alt: "Abon Lezat" },
          ].map(({ src, alt }) => (
            <a
              key={alt}
              href="#"
              title={alt}
              className="transition-transform transform hover:scale-110">
              <img
                src={src}
                alt={`${alt} icon`}
                className="h-14 w-14 rounded-full border border-white/20 shadow-md object-cover"/>
            </a>
          ))}
        </div>
        <button  className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-semibold transition duration-300">
          <a href="/food">lihat produk</a>
        </button>
      </div>
    </section>
  );
}

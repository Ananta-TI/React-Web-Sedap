import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { Autoplay, FreeMode } from "swiper/modules";
const testimonials = [
  {
    name: "Adit Pratama",
    review: "Sangat puas dengan kualitas dan pelayanannya. Sangat direkomendasikan!",
    avatar: "https://avatar.iran.liara.run/public/7",
  },
  {
    name: "Nina Kartika",
    review: "Cepat, ramah, dan profesional. Akan kembali lagi!",
    avatar: "https://avatar.iran.liara.run/public/92",
  },
  {
    name: "Rafi Alamsyah",
    review: "Layanan pelanggan sangat membantu. Terima kasih!",
    avatar: "https://avatar.iran.liara.run/public/11",
  },
  {
    name: "Indah Nuraini",
    review: "Produknya keren banget, sesuai dengan ekspektasi saya!",
    avatar: "https://avatar.iran.liara.run/public/95",
  },
  {
    name: "Dimas Yudha",
    review: "Harga bersaing dan pengiriman cepat. Top!",
    avatar: "https://avatar.iran.liara.run/public/3",
  },
];
const TestimonialsSection = () => {
  return (
    <section id="Testi" className="relative bg-[#0f0e13] text-white py-16 px-6 overflow-hidden">
      {/* Background noise */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/img/bg/noise.gif')",
          backgroundSize: "180px",
          backgroundRepeat: "repeat",
          opacity: 0.08,
        }}/>

      {/* Header */}
      <div className="relative z-10 max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-semibold">Apa Kata Mereka?</h2>
        <p className="text-white/60 mt-2 text-sm">
          Testimoni nyata dari pengguna kami yang puas dengan layanan & produk.
        </p>
      </div>
      {/* Smooth continuous scroll swiper */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <Swiper
          modules={[Autoplay, FreeMode]}
          loop={true}
          freeMode={true}
          grabCursor={true}
          slidesPerView="auto"
          spaceBetween={20}
          speed={7000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}>
          {testimonials.map((user, index) => (
            <SwiperSlide
              key={index}
              className="!w-[300px]" >
              <div className="relative flex items-start gap-4 backdrop-blur-md px-4 py-5 rounded-lg border border-white/10 bg-white/5 h-full">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-14 h-14 rounded-full object-cover"/>
                <div className="flex flex-col z-10">
                  <h6 className="text-lg font-bold mb-1">{user.name}</h6>
                  <p className="text-sm text-white/70 italic">"{user.review}"</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default TestimonialsSection;

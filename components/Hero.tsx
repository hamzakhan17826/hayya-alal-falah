"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const slideColors = ["#800000", "#6e502d"];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animateKey, setAnimateKey] = useState(0);
  const [triggerAnimation, setTriggerAnimation] = useState(true);

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background with radial gradient on left */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute left-0 top-0 w-full h-full transition-colors duration-500"
          style={{
            background: `linear-gradient(to right, ${slideColors[activeIndex]} 0%, transparent 110%)`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          // autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
            setAnimateKey(swiper.activeIndex);
            setTriggerAnimation(false);
            setTimeout(() => setTriggerAnimation(true), 10);
          }}
          className="h-[80vh]"
        >
          <SwiperSlide>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
              {/* Left side - Book Image Placeholder */}
              <div className="flex justify-center lg:justify-start">
                <div
                  className="animate-slide-from-right w-96 h-[450px] relative transform-[perspective(1000px)_rotateY(30deg)_rotateZ(-5deg)] transform-3d"
                  key={animateKey}
                >
                  <Image
                    src="/images/subah-o-sham-duain.jpg"
                    alt="Book Cover"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Right side - Text */}
              <div className="text-center lg:text-right flex flex-col gap-10 justify-center lg:justify-end">
                <h1
                  className={`text-4xl lg:text-7xl text-foreground mb-4 font-alvi ${
                    triggerAnimation ? "animate-from-top" : ""
                  }`}
                >
                  صبح و شام کی مسنون دعائیں
                </h1>
                <p
                  className={`text-2xl mb-6 font-alvi ${
                    triggerAnimation ? "animate-from-bottom" : ""
                  }`}
                >
                  یہ کتاب روز و شب کی مستند اور مسنون دعاؤں کا ایک قیمتی مجموعہ
                  ہے، جس میں رسولِ اکرم ﷺ سے منقول وہ تمام دعائیں شامل کی گئی
                  ہیں جو انسان کی دنیا و آخرت کی بھلائی کا ذریعہ ہیں۔
                </p>
                <button
                  className={`btn ${
                    triggerAnimation ? "animate-from-right" : ""
                  }`}
                >
                  Learn More
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
              {/* Left side - Book Image Placeholder */}
              <div className="flex justify-center lg:justify-start">
                <div
                  className="animate-slide-from-right w-96 h-[450px] relative transform-[perspective(1000px)_rotateY(30deg)_rotateZ(-5deg)] transform-3d"
                  key={animateKey + 1}
                >
                  <Image
                    src="/images/subah-o-sham-duain.jpg"
                    alt="Book Cover"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Right side - Text */}
              <div className="text-center lg:text-right flex flex-col gap-10 justify-center lg:justify-end">
                <h2
                  className={`text-3xl lg:text-5xl font-bold text-foreground mb-4 ${
                    triggerAnimation ? "animate-from-top" : ""
                  }`}
                >
                  Islamic Knowledge
                </h2>
                <p
                  className={`text-lg text-secondary mb-6 ${
                    triggerAnimation ? "animate-from-bottom" : ""
                  }`}
                >
                  Explore our collection of books and teachings to deepen your
                  understanding of Islam.
                </p>
                <button
                  className={`btn ${
                    triggerAnimation ? "animate-from-right" : ""
                  }`}
                >
                  Explore Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;

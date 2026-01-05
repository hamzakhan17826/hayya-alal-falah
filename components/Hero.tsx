"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slideColors = ["#6e502d", "#800000"];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background with radial gradient on left */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute left-0 top-0 w-full h-full transition-colors duration-500"
          style={{
            background: `radial-gradient(circle at left, ${slideColors[activeIndex]}80 0%, transparent 70%)`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="h-[80vh]"
        >
          <SwiperSlide>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
              {/* Left side - Book Image Placeholder */}
              <div className="flex justify-center lg:justify-end">
                <div
                  key={activeIndex}
                  className="w-80 h-96 bg-muted rounded-lg flex items-center justify-center text-secondary shadow-lg animate-slide-from-left"
                >
                  Book Image Here
                </div>
              </div>

              {/* Right side - Text */}
              <div className="text-center lg:text-left">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-4">
                  Hayya Alal Falah
                </h1>
                <p className="text-lg text-secondary mb-6">
                  Discover the path to success and righteousness through our
                  comprehensive Islamic teachings and resources.
                </p>
                <button className="btn">Learn More</button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
              {/* Left side - Book Image Placeholder */}
              <div className="flex justify-center lg:justify-end">
                <div
                  key={activeIndex + 1}
                  className="w-80 h-96 bg-muted rounded-lg flex items-center justify-center text-secondary shadow-lg animate-slide-from-left"
                >
                  Another Book Image
                </div>
              </div>

              {/* Right side - Text */}
              <div className="text-center lg:text-left">
                <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
                  Islamic Knowledge
                </h2>
                <p className="text-lg text-secondary mb-6">
                  Explore our collection of books and teachings to deepen your
                  understanding of Islam.
                </p>
                <button className="btn">Explore Now</button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;

"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { FloralIcon } from "./icons";

const slideColors = [
  "linear-gradient(to right, #515c1a, #2b2f13)",
  "linear-gradient(to right, #800000, #4b0000)",
  "linear-gradient(to right, #542705 , #301603)",
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animateKey, setAnimateKey] = useState(0);
  const [triggerAnimation, setTriggerAnimation] = useState(true);
  const [selectedImage, setSelectedImage] = useState(
    "/images/istikhara-ki-duain.jpg"
  );

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background with radial gradient on left */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute left-0 top-0 w-full h-full transition-colors duration-500"
          style={{
            background: slideColors[activeIndex],
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
            // Set selected image to first thumbnail of the slide
            if (swiper.activeIndex === 0) {
              setSelectedImage("/images/istikhara-ki-duain.jpg");
            } else if (swiper.activeIndex === 1) {
              setSelectedImage("/images/subah-o-sham-ki-duain.jpg");
            } else if (swiper.activeIndex === 2) {
              setSelectedImage("/images/toba-or-magfirat-ki-duain.jpg");
            }
          }}
          className="h-[80vh]"
        >
          <SwiperSlide>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
              {/* Left side - Book Image Placeholder */}
              <div className="flex justify-center lg:justify-start">
                <div className="flex items-center gap-4">
                  <div
                    className="animate-slide-from-right w-96 m-20 h-[450px] relative transform-[perspective(1000px)_rotateY(30deg)_rotateZ(-5deg)] transform-3d"
                    key={animateKey}
                  >
                    <Image
                      src={selectedImage}
                      alt="Istikhara ki masnoon duain"
                      fill
                      className="object-cover shadow-black/70 shadow-2xl rounded-xl"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div
                      className="w-30 h-30 relative cursor-pointer border-2 border-white rounded-lg overflow-hidden animate-from-top"
                      onClick={() =>
                        setSelectedImage("/images/istikhara-ki-duain.jpg")
                      }
                    >
                      <Image
                        src="/images/istikhara-ki-duain.jpg"
                        alt="Thumbnail 1"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div
                      className="w-30 h-30 relative cursor-pointer border-2 border-white rounded-lg overflow-hidden animate-from-top"
                      onClick={() =>
                        setSelectedImage("/images/amal-qaleel-ajar-kaseer.jpg")
                      }
                    >
                      <Image
                        src="/images/amal-qaleel-ajar-kaseer.jpg"
                        alt="Thumbnail 2"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div
                      className="w-30 h-30 relative cursor-pointer border-2 border-white rounded-lg overflow-hidden animate-from-top"
                      onClick={() =>
                        setSelectedImage("/images/satro-hijab-sharmo-haya.jpg")
                      }
                    >
                      <Image
                        src="/images/satro-hijab-sharmo-haya.jpg"
                        alt="Thumbnail 3"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Text */}
              <div className="text-center lg:text-right flex flex-col justify-center lg:justify-end relative z-20">
                <h1
                  className={`text-4xl lg:text-8xl text-foreground mb-14 font-jameel ${
                    triggerAnimation ? "animate-from-top" : ""
                  }`}
                >
                  استخارہ کی دعائیں
                </h1>
                <p
                  className={`text-2xl mb-6 font-alvi leading-relaxed ${
                    triggerAnimation ? "animate-from-bottom" : ""
                  }`}
                >
                  استخارہ کی دعا اسلام میں ایک اہم عبادت ہے جو کسی کام کے بارے
                  میں اللہ تعالیٰ سے رہنمائی طلب کرنے کے لیے کی جاتی ہے۔ یہ دعا
                  نبی کریم ﷺ سے روایت ہے اور زندگی کے اہم فیصلوں میں مدد دیتی
                  ہے۔
                </p>
                <div
                  className="flex gap-5 items-center"
                  style={{ direction: "rtl", textAlign: "right" }}
                >
                  <ul
                    className={`text-2xl mb-6 font-alvi leading-relaxed list-none ${
                      triggerAnimation ? "animate-from-bottom" : ""
                    }`}
                    style={{ direction: "rtl", textAlign: "right" }}
                  >
                    <li
                      className="flex gap-4 items-center p-4 relative overflow-hidden"
                      style={{}}
                    >
                      <div className="w-7 h-7 relative z-10">
                        <FloralIcon className="w-7 h-7" fill="#e7d995" />
                      </div>
                      <div className="relative z-10">
                        گناہوں سے بچاؤ اور پاکیزگی قلب
                      </div>
                    </li>
                    <li
                      className="flex gap-4 items-center p-4 relative overflow-hidden"
                      style={{}}
                    >
                      <div className="w-7 h-7 relative z-10">
                        <FloralIcon className="w-7 h-7" fill="#e7d995" />
                      </div>
                      <div className="relative z-10">
                        اللہ کی رہنمائی اور برکت حاصل کرنا
                      </div>
                    </li>
                  </ul>

                  <ul
                    className={`text-2xl mb-6 font-alvi leading-relaxed list-none ${
                      triggerAnimation ? "animate-from-bottom" : ""
                    }`}
                    style={{ direction: "rtl", textAlign: "right" }}
                  >
                    <li
                      className="flex gap-4 items-center p-4 relative overflow-hidden"
                      style={{}}
                    >
                      <div className="w-7 h-7 relative z-10">
                        <FloralIcon className="w-7 h-7" fill="#e7d995" />
                      </div>
                      <div className="relative z-10">
                        زندگی کے اہم فیصلوں میں اطمینان اور سکون
                      </div>
                    </li>
                    <li
                      className="flex gap-4 items-center p-4 relative overflow-hidden"
                      style={{}}
                    >
                      <div className="w-7 h-7 relative z-10">
                        <FloralIcon className="w-7 h-7" fill="#e7d995" />
                      </div>
                      <div className="relative z-10">
                        اللہ کی رہنمائی کے ذریعے صحیح راستہ تلاش کرنا
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 justify-end items-start">
                  <button
                    className={`px-7 py-3 rounded-full text-xl font-semibold border-2 border-white text-white hover:bg-white hover:text-black shadow-lg cursor-pointer ${
                      triggerAnimation ? "animate-from-left" : ""
                    } `}
                  >
                    <span className="font-alvi">استخارہ سیکھیں</span>
                  </button>
                  <button
                    className={`px-7 py-3 rounded-full text-xl font-semibold bg-white text-black shadow-lg hover:shadow-xl font-alvi cursor-pointer ${
                      triggerAnimation ? "animate-from-left" : ""
                    }`}
                  >
                    کتاب حاصل کریں
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
              {/* Left side - Book Image Placeholder */}
              <div className="flex justify-center lg:justify-start">
                <div className="flex items-center gap-4">
                  <div
                    className="animate-slide-from-right w-96 m-20 h-[450px] relative transform-[perspective(1000px)_rotateY(30deg)_rotateZ(-5deg)] transform-3d"
                    key={animateKey}
                  >
                    <Image
                      src={selectedImage}
                      alt="Istikhara ki masnoon duain"
                      fill
                      className="object-cover shadow-black/70 shadow-2xl rounded-xl"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div
                      className="w-30 h-30 relative cursor-pointer border-2 border-white rounded-lg overflow-hidden animate-from-top"
                      onClick={() =>
                        setSelectedImage("/images/subah-o-sham-ki-duain.jpg")
                      }
                    >
                      <Image
                        src="/images/subah-o-sham-ki-duain.jpg"
                        alt="Thumbnail 1"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div
                      className="w-30 h-30 relative cursor-pointer border-2 border-white rounded-lg overflow-hidden animate-from-top"
                      onClick={() =>
                        setSelectedImage("/images/amal-qaleel-ajar-kaseer.jpg")
                      }
                    >
                      <Image
                        src="/images/amal-qaleel-ajar-kaseer.jpg"
                        alt="Thumbnail 2"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div
                      className="w-30 h-30 relative cursor-pointer border-2 border-white rounded-lg overflow-hidden animate-from-top"
                      onClick={() =>
                        setSelectedImage("/images/satro-hijab-sharmo-haya.jpg")
                      }
                    >
                      <Image
                        src="/images/satro-hijab-sharmo-haya.jpg"
                        alt="Thumbnail 3"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Text */}
              <div className="text-center lg:text-right flex flex-col justify-center lg:justify-end relative z-20">
                <h1
                  className={`text-4xl lg:text-8xl text-foreground mb-14 font-jameel ${
                    triggerAnimation ? "animate-from-top" : ""
                  }`}
                >
                  صبح و شام کی دعائیں
                </h1>
                <p
                  className={`text-2xl mb-6 font-alvi leading-relaxed ${
                    triggerAnimation ? "animate-from-bottom" : ""
                  }`}
                >
                  قرآن و حدیث سے منتخب صبح و شام کی حفاظتی، برکت والی اور
                  پریشانی دور کرنے والی دعائیں۔ روزانہ پڑھنے سے دل کو سکون اور
                  اللہ کی پناہ ملتی ہے۔
                </p>
                <div
                  className="flex gap-5 items-center"
                  style={{ direction: "rtl", textAlign: "right" }}
                >
                  <ul
                    className={`text-2xl mb-6 font-alvi leading-relaxed list-none ${
                      triggerAnimation ? "animate-from-bottom" : ""
                    }`}
                    style={{ direction: "rtl", textAlign: "right" }}
                  >
                    <li
                      className="flex gap-4 items-center p-4 relative overflow-hidden"
                      style={{}}
                    >
                      <div className="w-7 h-7 relative z-10">
                        <FloralIcon className="w-7 h-7" fill="#ff7575 " />
                      </div>
                      <div className="relative z-10">مستند مسنون دعائیں</div>
                    </li>
                    <li
                      className="flex gap-4 items-center p-4 relative overflow-hidden"
                      style={{}}
                    >
                      <div className="w-7 h-7 relative z-10">
                        <FloralIcon className="w-7 h-7" fill="#ff7575 " />
                      </div>
                      <div className="relative z-10">
                        حفاظت، سکون اور برکت کے لیے
                      </div>
                    </li>
                  </ul>

                  <ul
                    className={`text-2xl mb-6 font-alvi leading-relaxed list-none ${
                      triggerAnimation ? "animate-from-bottom" : ""
                    }`}
                    style={{ direction: "rtl", textAlign: "right" }}
                  >
                    <li
                      className="flex gap-4 items-center p-4 relative overflow-hidden"
                      style={{}}
                    >
                      <div className="w-7 h-7 relative z-10">
                        <FloralIcon className="w-7 h-7" fill="#ff7575 " />
                      </div>
                      <div className="relative z-10">
                        پریشانی اور مشکل کے حل کے لیے
                      </div>
                    </li>
                    <li
                      className="flex gap-4 items-center p-4 relative overflow-hidden"
                      style={{}}
                    >
                      <div className="w-7 h-7 relative z-10">
                        <FloralIcon className="w-7 h-7" fill="#ff7575 " />
                      </div>
                      <div className="relative z-10">
                        صبح شام کے حفاظت کی دعائیں
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 justify-end items-start">
                  <button
                    className={`px-7 py-3 rounded-full text-xl font-semibold border-2 border-white text-white hover:bg-white hover:text-black shadow-lg cursor-pointer ${
                      triggerAnimation ? "animate-from-left" : ""
                    } `}
                  >
                    <span className="font-alvi">استخارہ سیکھیں</span>
                  </button>
                  <button
                    className={`px-7 py-3 rounded-full text-xl font-semibold bg-white text-black shadow-lg hover:shadow-xl font-alvi cursor-pointer ${
                      triggerAnimation ? "animate-from-left" : ""
                    }`}
                  >
                    کتاب حاصل کریں
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
              {/* Left side - Book Image Placeholder */}
              <div className="flex justify-center lg:justify-start">
                <div className="flex items-center gap-4">
                  <div
                    className="animate-slide-from-right w-96 m-20 h-[450px] relative transform-[perspective(1000px)_rotateY(30deg)_rotateZ(-5deg)] transform-3d"
                    key={animateKey}
                  >
                    <Image
                      src={selectedImage}
                      alt="Istikhara ki masnoon duain"
                      fill
                      className="object-cover shadow-black/70 shadow-2xl rounded-xl"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div
                      className="w-30 h-30 relative cursor-pointer border-2 border-white rounded-lg overflow-hidden animate-from-top"
                      onClick={() =>
                        setSelectedImage(
                          "/images/toba-or-magfirat-ki-duain.jpg"
                        )
                      }
                    >
                      <Image
                        src="/images/toba-or-magfirat-ki-duain.jpg"
                        alt="Thumbnail 1"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div
                      className="w-30 h-30 relative cursor-pointer border-2 border-white rounded-lg overflow-hidden animate-from-top"
                      onClick={() =>
                        setSelectedImage("/images/amal-qaleel-ajar-kaseer.jpg")
                      }
                    >
                      <Image
                        src="/images/amal-qaleel-ajar-kaseer.jpg"
                        alt="Thumbnail 2"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div
                      className="w-30 h-30 relative cursor-pointer border-2 border-white rounded-lg overflow-hidden animate-from-top"
                      onClick={() =>
                        setSelectedImage("/images/satro-hijab-sharmo-haya.jpg")
                      }
                    >
                      <Image
                        src="/images/satro-hijab-sharmo-haya.jpg"
                        alt="Thumbnail 3"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Text */}
              <div className="text-center lg:text-right flex flex-col justify-center lg:justify-end relative z-20">
                <h1
                  className={`text-4xl lg:text-8xl text-foreground mb-14 font-jameel ${
                    triggerAnimation ? "animate-from-top" : ""
                  }`}
                >
                  توبہ اور مغفرت
                </h1>
                <p
                  className={`text-2xl mb-6 font-alvi leading-relaxed ${
                    triggerAnimation ? "animate-from-bottom" : ""
                  }`}
                >
                  توبہ اور مغفرت اللہ تعالیٰ کی عظیم رحمت ہے جو انسان کو گناہوں
                  سے پاک کر کے سکون اور ہدایت کی راہ دکھاتی ہے۔ سچی توبہ دل کی
                  اصلاح، اعمال کی درستگی اور اللہ کی قربت کا ذریعہ بنتی ہے۔
                </p>
                <div
                  className="flex gap-5 items-center"
                  style={{ direction: "rtl", textAlign: "right" }}
                >
                  <ul
                    className={`text-2xl mb-6 font-alvi leading-relaxed list-none ${
                      triggerAnimation ? "animate-from-bottom" : ""
                    }`}
                    style={{ direction: "rtl", textAlign: "right" }}
                  >
                    <li
                      className="flex gap-4 items-center p-4 relative overflow-hidden"
                      style={{}}
                    >
                      <div className="w-7 h-7 relative z-10">
                        <FloralIcon className="w-7 h-7" fill="#f38938 " />
                      </div>
                      <div className="relative z-10">
                        توبہ کی اہمیت اور اس کے روحانی فوائد
                      </div>
                    </li>
                    <li
                      className="flex gap-4 items-center p-4 relative overflow-hidden"
                      style={{}}
                    >
                      <div className="w-7 h-7 relative z-10">
                        <FloralIcon className="w-7 h-7" fill="#f38938 " />
                      </div>
                      <div className="relative z-10">
                        قرآن و حدیث کی روشنی میں مغفرت کا تصور
                      </div>
                    </li>
                  </ul>

                  <ul
                    className={`text-2xl mb-6 font-alvi leading-relaxed list-none ${
                      triggerAnimation ? "animate-from-bottom" : ""
                    }`}
                    style={{ direction: "rtl", textAlign: "right" }}
                  >
                    <li
                      className="flex gap-4 items-center p-4 relative overflow-hidden"
                      style={{}}
                    >
                      <div className="w-7 h-7 relative z-10">
                        <FloralIcon className="w-7 h-7" fill="#f38938 " />
                      </div>
                      <div className="relative z-10">
                        سچی توبہ کی شرائط اور طریقہ
                      </div>
                    </li>
                    <li
                      className="flex gap-4 items-center p-4 relative overflow-hidden"
                      style={{}}
                    >
                      <div className="w-7 h-7 relative z-10">
                        <FloralIcon className="w-7 h-7" fill="#f38938 " />
                      </div>
                      <div className="relative z-10">
                        گناہوں سے نجات اور دل کے سکون کا راستہ
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 justify-end items-start">
                  <button
                    className={`px-7 py-3 rounded-full text-xl font-semibold border-2 border-white text-white hover:bg-white hover:text-black shadow-lg cursor-pointer ${
                      triggerAnimation ? "animate-from-left" : ""
                    } `}
                  >
                    <span className="font-alvi">استخارہ سیکھیں</span>
                  </button>
                  <button
                    className={`px-7 py-3 rounded-full text-xl font-semibold bg-white text-black shadow-lg hover:shadow-xl font-alvi cursor-pointer ${
                      triggerAnimation ? "animate-from-left" : ""
                    }`}
                  >
                    کتاب حاصل کریں
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;

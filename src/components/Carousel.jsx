import { Parallax, Pagination, Navigation, Autoplay } from "swiper/modules";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

const Carousel = () => {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Parallax, Pagination, Navigation]}
        className="my-28 relative h-[400px]"
      >
        <div
          slot="container-start"
          className="parallax-bg absolute left-0 top-0 w-[130%] bg-cover bg-center h-full bg-[url(https://wowslider.com/sliders/demo-93/data1/images/sunset.jpg)]"
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide className="text-lg text-white box-border px-16 py-10">
          <div className="text-5xl font-light" data-swiper-parallax="-300">
            Slide 1
          </div>
          <div className="text-xl" data-swiper-parallax="-200">
            Subtitle
          </div>
          <div
            className="text-sm max-w-96 leading-5"
            data-swiper-parallax="-100"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-lg text-white box-border px-16 py-10">
          <div className="text-5xl font-light" data-swiper-parallax="-300">
            Slide 2
          </div>
          <div className="text-xl" data-swiper-parallax="-200">
            Subtitle
          </div>
          <div
            className="text-sm max-w-96 leading-5"
            data-swiper-parallax="-100"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-lg text-white box-border px-16 py-10">
          <div className="text-5xl font-light" data-swiper-parallax="-300">
            Slide 3
          </div>
          <div className="text-xl" data-swiper-parallax="-200">
            Subtitle
          </div>
          <div
            className="text-sm max-w-96 leading-5"
            data-swiper-parallax="-100"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-lg text-white box-border px-16 py-10">
          <div className="text-5xl font-light" data-swiper-parallax="-300">
            Slide 4
          </div>
          <div className="text-xl" data-swiper-parallax="-200">
            Subtitle
          </div>
          <div
            className="text-sm max-w-96 leading-5"
            data-swiper-parallax="-100"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;

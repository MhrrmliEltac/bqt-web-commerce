import { Swiper } from "swiper/react";
import "swiper/css";
import { SwiperSlide } from "swiper/react";
import slider1 from "../../assets/d887d6157705035.637e007b786ee.png";
import slider2 from "../../assets/no-fixed-address-doordash-mcdona.format-webp.width-1440_oVvmxzvUj3Q4o07F.webp";
import slider3 from "../../assets/qyan26djmaozmc7kegrn45akfibb.jpg";
import { motion } from "framer-motion";
import "swiper/css/pagination";
import { useRef } from "react";
import { Swiper as SwiperClass } from "swiper";
import { Pagination } from "swiper/modules";

interface sliderType {
  id: number;
  image: string;
}

const slider: sliderType[] = [
  {
    id: 1,
    image: slider1,
  },
  {
    id: 2,
    image: slider2,
  },
  {
    id: 3,
    image: slider3,
  },
];

const sliderMotion = {
  hidden: { opacity: 0, transition: { duration: 1 } },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const Slider = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <motion.div
      variants={sliderMotion}
      initial="hidden"
      animate="visible"
      className="swiper-container swiper-wrapper"
    >
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {slider.map((slide: sliderType) => (
          <SwiperSlide key={slide.id}>
            <img
              src={slide.image}
              alt="slider"
              className="w-full swiper-image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default Slider;

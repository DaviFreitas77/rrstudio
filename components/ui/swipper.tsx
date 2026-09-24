import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, FreeMode } from "swiper/modules";

import { cn } from "@/lib/utils";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface SwipperProps {
  children?: React.ReactNode;
  breakpoints: {
    [key: number]: {
      slidesPerView: number;
    };
  };
  loop?: boolean;
  className?: string;
  direction: "horizontal" | "vertical";
  autoplay?: boolean;
  freeMode?: {
    enabled: boolean;
    momentum: boolean;
  };
  speed?: number;
  allowTouchMove?: boolean;
  simulateTouch?: boolean;
  pagination?: boolean;
}

export default function Swipper({
  children,
  breakpoints,
  loop,
  className,
  direction,
  autoplay,
  freeMode,
  speed,
  allowTouchMove,
  simulateTouch,
  pagination = false,
}: SwipperProps) {
  const isVertical = direction === "vertical";

  return (
    <Swiper
      autoplay={
        autoplay
          ? {
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
          
            }
          : false
      }
      allowTouchMove={allowTouchMove} // Desativa o arraste manual por toque (touch)
      simulateTouch={simulateTouch} // Desativa o arraste manual por clique do mouse
      preventInteractionOnTransition={true}
      speed={speed}
      direction={direction}
      modules={[Autoplay, FreeMode,Pagination]}
      freeMode={freeMode}
      className={cn(
        " swiper-continuous mt-20 w-full px-4",
        isVertical && "h-[36rem] sm:h-[40rem] md:h-[46rem] lg:h-[52rem]",
        className,
      )}
      spaceBetween={10}
      slidesPerView={1.1}
      loop={loop}
      navigation
      pagination={pagination ? { clickable: true } : undefined}
      breakpoints={breakpoints}
    >
      {children}
    </Swiper>
  );
}
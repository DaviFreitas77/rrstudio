'use client'

import { Marquee } from "@/components/ui/marquee";
import CircularText from "@/components/ui/circularText";
import ScrollVelocity from "@/components/ui/scroll-velocity";
import { Hero } from "@/src/sections/hero";
import { Services } from "@/src/sections/services";
import Image from "next/image";

import 'swiper/css';
import { Check, MessageCircle, PanelsTopLeft, Rocket } from "lucide-react";
import { SwiperSlide } from "swiper/react";
import Swipper from "@/components/ui/swipper";

export default function Home() {
  const metrics = [
    {
      metric: 10,
      title: "anos de experiência",
      description: "Experiência e aperfeiçoamento para cuidar de cada detalhe.",
      icon: MessageCircle,
    },
    {
      metric: 300,
      title: "clientes atendidos",
      description: "Pessoas que confiaram em nosso trabalho e cuidado.",
      icon: PanelsTopLeft,
    },
    {
      metric: 200,
      title: "avaliações positivas",
      description: "A satisfação de quem já viveu nossa experiência.",
      icon: Check,
    },
    {
      metric: 1,
      title: "Publicamos",
      description: "Colocamos no ar e configuramos o SEO para busca.",
      icon: Rocket,
    },
  ];

  const comparisons = [
    {
      image1: "/images/comparations/1.jpg",
      image2: "/images/comparations/2.jpg",
      alt1: "Serviço de Cabelos",
      alt2: "Serviço de Sobrancelhas",
    },
    {
      image1: "/images/comparations/3.jpg",
      image2: "/images/comparations/4.jpg",
      alt1: "Serviço de Manicure",
      alt2: "Serviço de Pedicure",
    },
    {
      image1: "/images/comparations/5.jpg",
      image2: "/images/comparations/6.jpg",
      alt1: "Serviço de Manicure",
      alt2: "Serviço de Pedicure",
    },
    {
      image1: "/images/comparations/7.jpg",
      image2: "/images/comparations/8.jpg",
      alt1: "Serviço de Manicure",
      alt2: "Serviço de Pedicure",
    },

    {
      image1: "/images/comparations/8.png",
      image2: "/images/comparations/9.png",
      alt1: "Serviço de Manicure",
      alt2: "Serviço de Pedicure",
    },

  ]

  const cardMetrics = (index: number, metric: number, title: string, description: string) => {
    return (
      <div
        key={index}
        className="
                group relative flex  h-full w-full
                max-w-80
                flex-col items-start justify-start
                gap-8
                bg-[#F6F3EF]
                px-5 py-12
                sm:min-h-50
                lg:gap-10
                lg:py-14
              "
      >
        {/* Cantos */}
        <span className="absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-[#C9A24D]" />
        <span className="absolute right-0 top-0  h-3 w-3 border-r-2 border-t-2 border-[#C9A24D]" />
        <span className="absolute bottom-0 left-0  h-3 w-3 border-b-2 border-l-2 border-[#C9A24D]" />
        <span className="absolute bottom-0 right-0  h-3 w-3 border-b-2 border-r-2 border-[#C9A24D]" />

        <p className="text-5xl font-light leading-none text-[#C9A24D] sm:text-6xl">
          <span className="text-2xl sm:text-3xl">+</span>
          {metric}
        </p>

        <div className="flex flex-col items-start space-y-3">
          <h3 className="text-center text-base font-semibold uppercase tracking-wide text-gray-900 sm:text-lg">
            {title}
          </h3>

          <p className="max-w-xs text-start text-sm font-light leading-relaxed text-gray-500">
            {description}
          </p>
        </div>
      </div>
    )
  }

  return (
    <main className="bg-[#F2EDE7]">
      <Hero />
      <div className="py-4 bg-gradient-to-r from-black to-gray-700 pb-40">
        <Marquee pauseOnHover className="[--duration:20s]">
          {comparisons.map((review) => (
            <div key={review.image1} className="flex items-center justify-center gap-4">
              <div className="relative w-40 h-60  xl:w-80 xl:h-100">
                <Image
                  src={review.image1}
                  alt={review.alt1}
                  fill
                  className="object-cover rounded-sm"
                />
              </div>
              <div className="relative w-40 h-60 xl:w-80 xl:h-100">
                <Image
                  src={review.image2}
                  alt={review.alt2}
                  fill
                  className="object-cover rounded-sm"
                />
              </div>
            </div>
          ))}
        </Marquee>

      </div>

      <Services />

      <section className="mt-30 flex flex-col items-center px-4 pb-30 sm:pb-40 lg:px-10 xl:px-20 2xl:px-40">
        {/* Título */}
        <div className="mb-12 text-center md:mb-16">
          <span className="mb-4 block text-xs font-medium uppercase tracking-[0.2em] text-[#c08815]">
            Detalhes que importam
          </span>

          <h2 className="mb-4 text-3xl font-light tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Resultados que falam por si
          </h2>

          <div className="mx-auto mb-4 h-px w-12 bg-[#c08815]/40" />
        </div>


        <div className="hidden md:grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) =>
            cardMetrics(
              index,
              metric.metric,
              metric.title,
              metric.description
            )
          )}
        </div>




        <div className="md:hidden w-full">
          <Swipper
            direction="horizontal"
            loop={false}
            autoplay={false}

            freeMode={{ enabled: false, momentum: false }}

            allowTouchMove={true}
            simulateTouch={true}
            pagination={true}
            breakpoints={{
              640: {
                slidesPerView: 2,

              },
              768: {
                slidesPerView: 3,

              },
            }}
          >
            {metrics.map((step, index) => (
              <SwiperSlide>
                {cardMetrics(
                  index,
                  step.metric,
                  step.title,
                  step.description
                )}
              </SwiperSlide>
            ))}



          </Swipper>
        </div>
      </section>

    </main >
  );
}
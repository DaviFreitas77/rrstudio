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
  const steps = [
    {
      metric: "10",
      title: "anos de experiência",
      description: "Experiência e aperfeiçoamento para cuidar de cada detalhe.",
      icon: MessageCircle,
    },
    {
      metric: "300",
      title: "clientes atendidos",
      description: "Pessoas que confiaram em nosso trabalho e cuidado.",
      icon: PanelsTopLeft,
    },
    {
      metric: "200",
      title: "avaliações positivas",
      description: "A satisfação de quem já viveu nossa experiência.",
      icon: Check,
    },
    {
      metric: "1",
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
            Experiência Exclusiva
          </span>

          <h2 className="mb-4 text-3xl font-light tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Resultados que falam por si
          </h2>

          <div className="mx-auto mb-4 h-px w-12 bg-[#c08815]/40" />
        </div>

        {/* Cards */}
        <div className="grid w-full max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="
    group relative flex min-h-80 w-full
    flex-col items-center justify-center
    gap-8
    bg-[#F9F6F1]
    px-5 py-12
    transition-all duration-500
    hover:-translate-y-2
    hover:shadow-[0_15px_40px_rgba(201,162,77,0.08)]
    sm:min-h-85
    lg:gap-10
    lg:py-14
  "
            >
              {/* Cantos */}
              <span className="absolute left-0 top-0 h-7 w-7 border-l-2 border-t-2 border-[#C9A24D]" />
              <span className="absolute right-0 top-0 h-7 w-7 border-r-2 border-t-2 border-[#C9A24D]" />
              <span className="absolute bottom-0 left-0 h-7 w-7 border-b-2 border-l-2 border-[#C9A24D]" />
              <span className="absolute bottom-0 right-0 h-7 w-7 border-b-2 border-r-2 border-[#C9A24D]" />

              <p className="text-5xl font-light leading-none text-[#C9A24D] sm:text-6xl">
                <span className="text-2xl sm:text-3xl">+</span>
                {step.metric}
              </p>

              <div className="flex flex-col items-center space-y-3">
                <h3 className="text-center text-base font-semibold uppercase tracking-wide text-gray-900 sm:text-lg">
                  {step.title}
                </h3>

                <p className="max-w-xs text-center text-sm font-light leading-relaxed text-gray-500">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
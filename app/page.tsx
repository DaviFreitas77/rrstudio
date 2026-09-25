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
import { Button } from "@/components/ui/button";

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


  const feedbacks = [
    {
      name: "Kiim viih",
      feedback: "Perfeito !!! Eu amei , um ótimo profissional  faz um  trabalho impecável  , e te deixa com q autoestima lá em cima !! ",
      image: "/images/comparations/4.jpg",
    },
    {
      name: "Amanda Oliveria",
      feedback: "Super indico, profissional excelente, atencioso , educado, entrega muito mais que o esperado",
      image: "/images/comparations/4.jpg",
    },
    {
      name: "Jenny Santos",
      feedback: "Ótimo profissional, super atencioso e delicado, procurando sempre o melhor produto e melhor atendimento, recomendo.",
      image: "/images/comparations/4.jpg",
    },
    {
      name: "Suzana Benvinda",
      feedback: "Um ótimo profissional,e faz tudo com amor ,super simpático.",
      image: "/images/comparations/4.jpg",
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
                md:max-w-90
                flex-col items-start justify-start
                gap-8
                bg-[#F6F3EF]
                px-5 py-12
                min-h-80
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
          <span className="text-3xl ">+</span>
          {metric}
        </p>

        <div className="flex flex-col items-start space-y-3">
          <h3 className="text-center text-base font-semibold uppercase tracking-wide text-gray-900 sm:text-lg">
            {title}
          </h3>

          <p className="max-w-70 md:max-w-60 text-start text-sm font-light leading-relaxed text-gray-500">
            {description}
          </p>
        </div>
      </div>
    )
  }



  const cardsFeedback = (name: string, feedback: string, image: string) => {
    return (
      <div
        key={name}
        className="relative border h-60 lg:h-full border-[#c08815]/15 bg-white/30 p-5 flex flex-col"
      >
        {/* Estrelas */}
        <div className="flex gap-1 text-[#C9A24D] text-base">
          ★ ★ ★ ★ ★
        </div>

        {/* Feedback */}
        <p className="mt-4 text-sm text-gray-700 leading-relaxed">
          {feedback}
        </p>

        {/* Cliente - sempre embaixo à esquerda */}
        <div className="flex items-center gap-3 mt-auto pt-5">
          <Image
            width={1920}
            height={1080}
            alt=""
            src={image}
            className="w-9 h-9 rounded-full object-cover"
          />

          <p className="font-medium text-sm text-gray-800">
            {name}
          </p>
        </div>

        {/* Aspas */}
        <span className="absolute bottom-1 right-4 text-6xl leading-none text-[#C9A24D]/20 font-serif">
          ”
        </span>
      </div>
    )
  }

  return (
    <main className="bg-[#F2EDE7]">
      <Hero />
      <Services />
      <div className="py-20 border-b   border-[#c08815]/10">
        <div className="mb-12 text-center md:mb-20 px-6">
          <span className="mb-4 block text-xs font-medium uppercase tracking-[0.2em] text-[#c08815]">
            Cada resultado conta uma história.
          </span>

          <h2 className="mb-4 text-3xl font-light tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Resultados que falam por si
          </h2>
          <div className="mx-auto mb-4 h-px w-12 bg-[#c08815]/40" />
          <p className="text-gray-600 font-light text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Descubra os nossos serviços exclusivos e transforme a sua aparência com um toque de elegância e cuidado.
          </p>

        </div>

        <div className="flex items-center justify-center gap-8 px-6 flex-col lg:flex-row">

          {/* Comparação 1 */}
          <div className="grid grid-cols-2 gap-2 w-full max-w-xl lg:max-w-2xl">
            <Image
              src="/images/comparations/8.png"
              alt="Antes do serviço de manicure"
              width={800}
              height={600}
              className="w-full aspect-[5/6] object-cover rounded-sm"
            />

            <Image
              src="/images/comparations/9.png"
              alt="Depois do serviço de manicure"
              width={800}
              height={600}
              className="w-full aspect-[5/6] object-cover rounded-sm"
            />
          </div>

          {/* Comparação 2 */}
          <div className="grid grid-cols-2 gap-2 w-full max-w-xl lg:max-w-2xl">
            <Image
              src="/images/comparations/3.jpg"
              alt="Antes do serviço"
              width={800}
              height={600}
              className="w-full aspect-[5/6] object-cover rounded-sm"
            />

            <Image
              src="/images/comparations/4.jpg"
              alt="Depois do serviço"
              width={800}
              height={600}
              className="w-full aspect-[5/6] object-cover rounded-sm"
            />
          </div>

        </div>
        <div className="mt-6 bg-gradient-to-r from-white to-[#EADABC]">
          <Marquee pauseOnHover className="[--duration:20s]">
            {comparisons.map((review) => (
              <div key={review.image1} className="flex items-center justify-center gap-4">
                <div className="relative w-40 h-50 sm:w-60 sm:h-70  xl:w-70 xl:h-90">
                  <Image
                    src={review.image1}
                    alt={review.alt1}
                    fill
                    className="object-cover rounded-sm"
                  />
                </div>
                <div className="relative  w-40 h-50 sm:w-60 sm:h-70  xl:w-70 xl:h-90 ">
                  <Image
                    src={review.image2}
                    alt={review.alt2}
                    fill
                    className="object-cover rounded-sm "
                  />
                </div>
              </div>
            ))}
          </Marquee>
        </div>

      </div>

      <section className=" flex flex-col items-center px-4 py-20 border-b   border-[#c08815]/10">
        {/* Título */}
        <div className="mb-12 text-center md:mb-16">
          <span className="mb-4 block text-xs font-medium uppercase tracking-[0.2em] text-[#c08815]">
            Detalhes que importam
          </span>

          <h2 className="mb-4 text-3xl font-light tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Mais que números, experiências
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
              <SwiperSlide
                className="!flex !items-center !justify-center"
              >
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

      {/* feedback */}

      <section className="flex flex-col items-center justify-center px-4 py-20 border-b border-[#c08815]/10">

        <div className="mb-12 text-center md:mb-16">
          <span className="mb-4 block text-xs font-medium uppercase tracking-[0.2em] text-[#c08815]">
            Feedbacks
          </span>

          <h2 className="mb-4 text-3xl font-light tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            A experiência de quem confia
          </h2>

          <div className="mx-auto mb-4 h-px w-12 bg-[#c08815]/40" />

        </div>

        <div className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-[0.8fr_1.5fr] gap-5">

          {/* IMAGEM */}
          <div className="relative h-[460px] overflow-hidden rounded-sm">
            <Image

              width={1920}
              height={1080}
              alt=""
              src="/images/feedback.jpg"
              className="object-cover rounded-sm h-full"
            />

            <div className="absolute inset-0 flex flex-col justify-end p-7">
              {/* Sombra vindo de baixo */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 via-black/90 to-transparent" />

              <p className="relative z-10 text-white text-lg max-w-sm leading-relaxed">
                Acompanhe de perto a experiência de quem já confiou em nossos serviços e veja como transformamos cada visita em momentos memoráveis.
              </p>
            </div>
          </div>

          {/* FEEDBACKS */}
          <div className="hidden  lg:grid grid-cols-2 gap-4">

            {feedbacks.map((feedback) =>
              cardsFeedback(
                feedback.name,
                feedback.feedback,
                feedback.image
              )
            )}
          </div>

          <div className="lg:hidden w-full">
            <Swipper
              direction="horizontal"
              autoplay={false}
              freeMode={{ enabled: false, momentum: false }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
              }}
              allowTouchMove={true}
              simulateTouch={true}
              pagination={true}
            >
              {feedbacks.map((feedback) =>
                <SwiperSlide
                  className="!flex !items-center !justify-center"
                  key={feedback.name}
                >
                  {cardsFeedback(
                    feedback.name,
                    feedback.feedback,
                    feedback.image
                  )}
                </SwiperSlide>
              )}




            </Swipper>
          </div>
        </div>
        <button
          onClick={() => window.open("https://www.google.com/maps/place/RRSTUDIO+SAL%C3%83O+DE+BELEZA/@-23.5808224,-46.4015609,17z/data=!4m8!3m7!1s0x94ce657ce9ee060f:0x2be0ee1c765a193e!8m2!3d-23.5808224!4d-46.4015609!9m1!1b1!16s%2Fg%2F11txrwslp6!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMi4wIKXMDSoASAFQAw%3D%3D", "_blank")}
          className="mt-10 px-14 cursor-pointer py-3 bg-[#C9A24D] text-white font-medium rounded-md hover:bg-[#b38f3c] transition-colors">
          Ver mais feedbacks
        </button>
      </section>

    </main >
  );
}
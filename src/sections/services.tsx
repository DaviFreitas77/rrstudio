import Swipper from "@/components/ui/swipper";
import { SectionHeading } from "@/components/ui/section-heading";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";

export function Services() {
  const services = [
    {
      title: "Cabelos",
      description: "Cortes, tratamentos e cuidados para seus fios.",
      alt: "Serviço de Cabelos",
      src: "/images/services/cabelo.png",
    },
    {
      title: "Sobrancelhas",
      description: "Design para valorizar e harmonizar seu olhar.",
      alt: "Serviço de Sobrancelhas",
      src: "/images/services/sobrancelha.png",
    },
    {
      title: "Manicure",
      description: "Cuidados especiais para mãos sempre impecáveis.",
      alt: "Serviço de Manicure",
      src: "/images/services/mao.png",
    },
    {
      title: "Pedicure",
      description: "Cuidado e beleza para deixar seus pés perfeitos.",
      alt: "Serviço de Pedicure",
      src: "/images/services/pe.png",
    },
    {
      title: "Estética",
      description: "Cuidados faciais e corporais para realçar sua beleza.",
      alt: "Serviço de Estética",
      src: "/images/services/sobrancelha.png",
    },
    {
      title: "Bronzeamento Artificial",
      description: "Um bronzeado uniforme para iluminar sua pele.",
      alt: "Serviço de Bronzeamento Artificial",
      src: "/images/services/sobrancelha.png",
    },
    {
      title: "Depilação",
      description: "Pele macia com cuidado, conforto e delicadeza.",
      alt: "Serviço de Depilação",
      src: "/images/services/mao.png",
    },
    {
      title: "Maquiadora",
      description: "Produções personalizadas para todos os seus momentos.",
      alt: "Serviço de Maquiadora",
      src: "/images/services/mao.png",
    },
  ];
  return (
    <section
      id="servicos"
      className="  px-4 lg:px-40 pb-10 md:pb-20 pt-12 mt-12 xl:mt-12 border-b border-muted"
    >
      <div className=" z-10 max-w-88xl mx-auto">
        <SectionHeading
          eyebrow="Experiência Exclusiva"
          title="Confira Nossos Serviços"
          description="Descubra os nossos serviços exclusivos e transforme a sua aparência com um toque de elegância e cuidado."
        />

        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col group cursor-pointer">
              <div className="w-full aspect-[3/4] rounded-sm overflow-hidden relative bg-gray-200/50 shadow-sm group-hover:shadow-md transition-all duration-500">
                <Image
                  fill
                  alt={service.alt}
                  src={service.src}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/30 to-transparent" />
                {/* Gradiente */}
                <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black via-black/30 to-transparent" />

                {/* Conteúdo */}
                <div className="absolute bottom-6 left-5 right-5 flex items-end justify-between">
                  <div className="max-w-[80%]">
                    <h3 className="text-xl font-medium tracking-wide text-white">
                      {service.title}
                    </h3>

                    <p className="mt-1 text-xs tracking-wide text-white/75">
                      {service.description}
                    </p>
                  </div>

                  {/* Seta */}
                  <button
                    className="text-white transition-transform duration-300 group-hover:translate-x-1"
                    aria-label={`Agendar ${service.title}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:hidden">
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
            {services.map((service, index) => (
              <SwiperSlide key={index} className="px-2">
                <div key={index} className="flex flex-col group cursor-pointer">
                  <div className="w-full aspect-[6/7] sm:aspect-[2/3] rounded-sm overflow-hidden relative bg-gray-200/50 shadow-sm group-hover:shadow-md transition-all duration-500">
                    <Image
                      fill
                      alt={service.alt}
                      src={service.src}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
                    {/* Gradiente */}
                    <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Conteúdo */}
                    <div className="absolute bottom-6 left-5 right-5 flex items-end justify-between">
                      <div className="max-w-[80%]">
                        <h3 className="text-xl font-medium tracking-wide text-white">
                          {service.title}
                        </h3>

                        <p className="mt-1 text-xs tracking-wide text-white/75">
                          {service.description}
                        </p>
                      </div>

                      {/* Seta */}
                      <button
                        className="text-white transition-transform duration-300 group-hover:translate-x-1"
                        aria-label={`Agendar ${service.title}`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swipper>
        </div>
      </div>
    </section>
  );
}

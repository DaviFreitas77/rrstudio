import CountUp from "@/components/ui/countUp";
import Swipper from "@/components/ui/swipper";
import { Check, MessageCircle, PanelsTopLeft, Rocket } from "lucide-react";
import { SwiperSlide } from "swiper/react";

export function Journey() {
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
            metric: 4,
            title: "Especializações",
            description: "Especialistas em diferentes áreas para atender todas as suas necessidades.",
            icon: Rocket,
        },
    ];


    const cardMetrics = (
        index: number,
        metric: number,
        title: string,
        description: string
    ) => {
        return (
            <div
                key={index}
                className="
        group relative flex h-full w-full
        max-w-80
        md:max-w-90
        flex-col items-start justify-start
        gap-8
        overflow-hidden
        bg-white/30
        px-5 py-12
        min-h-80
        lg:gap-10
        lg:py-14
      "
            >
                {/* Número no desktop */}
                <span className="pointer-events-none absolute bottom-1 right-2 hidden select-none text-[5rem] font-light leading-none text-[#C9A24D]/5 sm:block">
                    {String(index + 1).padStart(2, "0")}
                </span>

                {/* Seta no mobile */}
                <span className="pointer-events-none absolute bottom-3 right-4 select-none text-7xl font-extralight leading-none text-[#C9A24D]/20 sm:hidden">
                    <svg
                        className="absolute bottom-4 right-4 h-10 w-14 text-[#C9A24D]/30 sm:hidden"
                        viewBox="0 0 60 40"
                        fill="none"
                    >
                        <path
                            d="M2 20H48"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />

                        <path
                            d="M38 10L48 20L38 30"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </span>

                {/* Cantos */}
                <span className="absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-[#C9A24D]" />

                <span className="absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-[#C9A24D]" />

                <span className="absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-[#C9A24D]" />

                <span className="absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-[#C9A24D]" />

                {/* Métrica */}
                <div className="relative z-10">
                    <p className="text-5xl font-light leading-none text-[#C9A24D] sm:text-6xl">
                        <span className="text-3xl">+</span>
                        <CountUp
                            from={0}
                            to={metric}
                            separator=","
                            direction="up"
                            duration={1}
                            className="count-up-text"
                            delay={0}
                        />
                       
                    </p>
                </div>

                {/* Conteúdo */}
                <div className="relative z-10 flex flex-col items-start space-y-2">
                    <h3 className="text-center text-base font-semibold uppercase tracking-wide text-gray-900 sm:text-lg">
                        {title}
                    </h3>

                    <p className="max-w-70 text-start text-sm font-light leading-relaxed text-gray-500 md:max-w-60">
                        {description}
                    </p>
                </div>
            </div>
        );
    };

    return (
        <section className=" flex flex-col items-center px-4 py-20 border-b   border-[#c08815]/10">
            {/* Título */}
            <div className="mb-12 text-center md:mb-16">
                <span className="mb-4 block text-xs font-medium uppercase tracking-[0.2em] text-[#c08815]">
                    Detalhes que importam
                </span>

                <h2 className="mb-4 text-3xl font-light tracking-tight text-gray-900 sm:text-4xl ">
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
    )
}
import Swipper from "@/components/ui/swipper";
import { SectionHeading } from "@/components/ui/section-heading";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SwiperSlide } from "swiper/react";

const professionals = [
    {
        name: "Ana Carolina",
        role: "Hair stylist",
        src: "/images/services/service.jpg",
    },
    {
        name: "Marina Alves",
        role: "Brow artist",
        src: "/images/feedback.jpg",
    },
    {
        name: "Lucas Mendes",
        role: "Beauty specialist",
        src: "/images/services/cabelo.png",
    },
    {
        name: "Julia Santos",
        role: "Makeup artist",
        src: "/images/services/sobrancelha.png",
    },
];

export function Professionals() {
    return (
        <section
            id="profissionais"
            className="overflow-x-clip border-b border-muted bg-background px-4 py-16 md:py-24 lg:px-40"
        >
            <div className="mx-auto max-w-88xl">
                <div className="grid gap-10 lg:grid-cols-[0.8fr_1.8fr] lg:items-stretch">
                    <div className="flex flex-col">
                        <SectionHeading
                            eyebrow="Nossa equipe"
                            title="Profissionais que cuidam de você"
                            description="Conheça quem transforma técnica, cuidado e experiência em um atendimento feito para você."
                            align="center-mobile-left"
                        />

                        <Link
                            href="#agendamento"
                            className="mx-auto mt-6 inline-flex w-fit items-center gap-8 border border-primaryy px-7 py-4 text-xs font-medium uppercase tracking-[0.16em] text-primaryy transition-colors hover:bg-primaryy hover:text-white lg:mx-0"
                        >
                            Agendar horário
                            <ArrowRight size={19} aria-hidden="true" />
                        </Link>
                    </div>

                    <div className="professionals-swiper relative min-w-0 overflow-hidden pb-12">
                        <Swipper
                            direction="horizontal"
                            loop={false}
                            autoplay={false}
                            allowTouchMove={true}
                            simulateTouch={true}
                            pagination={false}
                            navigation={{
                                prevEl: ".professionals-swiper-prev",
                                nextEl: ".professionals-swiper-next",
                            }}
                            breakpoints={{
                                0: { slidesPerView: 1.15 },
                                640: { slidesPerView: 2 },
                                1024: { slidesPerView: 2.5 },
                                1280: { slidesPerView: 3 },
                            }}
                        >
                            {professionals.map((professional) => (
                                <SwiperSlide key={professional.name} className="px-2">
                                    <article className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-primaryy">
                                        <Image
                                            fill
                                            alt={professional.name}
                                            src={professional.src}
                                            sizes="(max-width: 640px) 87vw, (max-width: 1024px) 45vw, 30vw"
                                            className="object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                                        <div className="absolute right-5 bottom-5 left-5 text-white">
                                            <h3 className="text-xl font-medium tracking-wide">
                                                {professional.name}
                                            </h3>
                                            <p className="mt-1 text-sm text-white/75">
                                                {professional.role}
                                            </p>
                                        </div>

                                        <span className="absolute right-5 bottom-5 flex size-10 items-center justify-center rounded-full border border-white/80 text-white transition-transform duration-300 group-hover:translate-x-1">
                                            <ArrowRight size={18} aria-hidden="true" />
                                        </span>
                                    </article>
                                </SwiperSlide>
                            ))}
                        </Swipper>

                        <button
                            type="button"
                            className="professionals-swiper-prev absolute top-1/2 left-3 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-primaryy bg-background text-primaryy transition-colors hover:bg-primaryy hover:text-white"
                            aria-label="Profissional anterior"
                        >
                            <ArrowLeft size={19} strokeWidth={1.5} />
                        </button>
                        <button
                            type="button"
                            className="professionals-swiper-next absolute top-1/2 right-3 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-primaryy bg-background text-primaryy transition-colors hover:bg-primaryy hover:text-white"
                            aria-label="Próximo profissional"
                        >
                            <ArrowRight size={19} strokeWidth={1.5} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
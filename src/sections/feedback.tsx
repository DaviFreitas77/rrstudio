import Swipper from "@/components/ui/swipper";
import Image from "next/image"
import { SwiperSlide } from "swiper/react";

export function Feedback() {
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
                <span className="absolute -bottom-2 right-4 text-6xl  text-[#C9A24D]/20 font-serif">
                    ”
                </span>
            </div>
        )
    }


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
    return (
        <section className="flex flex-col items-center justify-center px-4 py-20 border-b border-[#c08815]/10">

            <div className="mb-12 text-center md:mb-16">
                <span className="mb-4 block text-xs font-medium uppercase tracking-[0.2em] text-[#c08815]">
                    Feedbacks
                </span>

                <h2 className="mb-4 text-3xl font-light tracking-tight text-gray-900 sm:text-4xl ">
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
                className="mt-20 px-14 cursor-pointer py-3 bg-[#C9A24D] text-white font-medium rounded-md hover:bg-[#b38f3c] transition-colors">
                Ver mais feedbacks
            </button>
        </section>
    )
}
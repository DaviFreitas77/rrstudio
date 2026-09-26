import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";

export function Results() {


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
        <div className="py-20 border-b   border-[#c08815]/10">
            <div className="mb-12 text-center md:mb-16 px-6">
                <span className="mb-4 block text-xs font-medium uppercase tracking-[0.2em] text-[#c08815]">
                    Cada resultado conta uma história.
                </span>

                <h2 className="mb-4 text-3xl font-light tracking-tight text-gray-900 sm:text-4xl ">
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
    )
}
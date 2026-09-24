import Image from "next/image";

export function Services() {

    const services = [
        { title: "Cabelos", alt: "Serviço de Cabelos", src: "/cabeloo.jpg" },
        { title: "Sobrancelhas", alt: "Serviço de Sobrancelhas", src: "/sobrancelha.jpg" },
        { title: "Manicure", alt: "Serviço de Manicure", src: "/mao.jpg" },
        { title: "Pedicure", alt: "Serviço de Pedicure", src: "/pe.jpg" },
    ];
    return (
        <section className="relative bg-[#F2EDE7] px-4  lg:px-40 pb-20 pt-12 -mt-12 xl:mt-12 border-b  border-[#c08815]/10">

            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-[98%] pointer-events-none">
                <svg
                    className="relative block w-full h-12 sm:h-20 md:h-28 lg:h-36"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,40 L1200,120 L0,120 Z"
                        fill="#F2EDE7"
                    ></path>
                </svg>
            </div>


            <div className="relative z-10 max-w-7xl mx-auto">

                <div className="text-center mb-12 md:mb-16">
                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#c08815] mb-4 block">
                        Experiência Exclusiva
                    </span>
                    <h2 className="text-3xl md:text-5xl font-light tracking-tight text-gray-900 mb-4">
                        Confira Nossos Serviços
                    </h2>
                    <div className="w-12 h-[1px] bg-[#c08815]/40 mx-auto mb-4" />
                    <p className="text-gray-600 font-light text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                        Descubra os nossos serviços exclusivos e transforme a sua aparência com um toque de elegância e cuidado.
                    </p>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="flex flex-col group cursor-pointer"
                        >

                            <div className="w-full aspect-[3/4] rounded-sm overflow-hidden relative bg-gray-200/50 shadow-sm group-hover:shadow-md transition-all duration-500">
                                <Image
                                    fill
                                    alt={service.alt}
                                    src={service.src}
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                            </div>

                            {/* Informações e Ação */}
                            <div className="mt-5 flex flex-col items-center text-center">
                                <h3 className="text-xl font-medium tracking-wide text-gray-800 group-hover:text-[#c08815] transition-colors duration-300">
                                    {service.title}
                                </h3>

                                <button className="mt-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#c08815] transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#c08815] after:origin-right group-hover:after:origin-left group-hover:after:scale-x-100 after:scale-x-0 after:transition-transform after:duration-300">
                                    Agendar serviço
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
import { Marquee } from "@/components/ui/marquee";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Results() {
  const comparisons = [
    {
      image1: "/images/comparations/1.png",
      image2: "/images/comparations/2.png",
      alt1: "Serviço de Cabelos",
      alt2: "Serviço de Sobrancelhas",
    },

    {
      image1: "/images/comparations/3.png",
      image2: "/images/comparations/4.png",
      alt1: "Serviço de Manicure",
      alt2: "Serviço de Pedicure",
    },
    {
      image1: "/images/comparations/5.png",
      image2: "/images/comparations/6.png",
      alt1: "Serviço de Manicure",
      alt2: "Serviço de Pedicure",
    },
    {
      image1: "/images/comparations/7.png",
      image2: "/images/comparations/8.png",
      alt1: "Serviço de Manicure",
      alt2: "Serviço de Pedicure",
    },
    {
      image1: "/images/comparations/13.png",
      image2: "/images/comparations/14.png",
      alt1: "Serviço de Manicure",
      alt2: "Serviço de Pedicure",
    },
  ];

  return (
    <div id="resultados" className="py-20 border-b border-muted">
      <SectionHeading
        className="px-6"
        eyebrow="Cada resultado conta uma história."
        title="Resultados que falam por si"
        description="Descubra os nossos serviços exclusivos e transforme a sua aparência com um toque de elegância e cuidado."
      />

      <div className="flex items-center justify-center gap-8 px-6 flex-col lg:flex-row">
        {/* Comparação 1 */}
        <div className="relative grid w-full max-w-xl grid-cols-2 gap-2 lg:max-w-2xl">
          <div className="pointer-events-none absolute top-1/2 left-1/2 z-10 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-black/20 text-white backdrop-blur-sm">
            <ArrowRight size={18} aria-hidden="true" />
          </div>

          <div className="relative">
            <Image
              src="/images/comparations/8.png"
              alt="Antes do serviço de manicure"
              width={800}
              height={600}
              className="aspect-[5/6] w-full rounded-sm object-cover"
            />
          </div>

          <div className="relative">
            <Image
              src="/images/comparations/9.png"
              alt="Depois do serviço de manicure"
              width={800}
              height={600}
              className="aspect-[5/6] w-full rounded-sm object-cover"
            />
          </div>
        </div>

        {/* Comparação 2 */}
        <div className="relative grid w-full max-w-xl grid-cols-2 gap-2 lg:max-w-2xl">
          <div className="pointer-events-none absolute top-1/2 left-1/2 z-10 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-black/20 text-white backdrop-blur-sm">
            <ArrowRight size={18} aria-hidden="true" />
          </div>

          <div className="relative">
            <Image
              src="/images/comparations/3.jpg"
              alt="Antes do serviço"
              width={800}
              height={600}
              className="aspect-[5/6] w-full rounded-sm object-cover"
            />
          </div>

          <div className="relative">
            <Image
              src="/images/comparations/4.jpg"
              alt="Depois do serviço"
              width={800}
              height={600}
              className="aspect-[5/6] w-full rounded-sm object-cover"
            />
          </div>
        </div>
      </div>
      <div className="mt-6 bg-gradient-to-r from-white to-black">
        <Marquee pauseOnHover className="[--duration:20s]">
          {comparisons.map((review) => (
            <div
              key={review.image1}
              className="flex items-center justify-center gap-4"
            >
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
  );
}

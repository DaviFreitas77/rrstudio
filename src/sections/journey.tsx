import CountUp from "@/components/ui/countUp";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Journey() {
  return (
    <section
      id="jornada"
      className="overflow-hidden border-b border-muted bg-background px-4 py-16 lg:px-10 lg:py-24"
    >
      <div className="mx-auto grid max-w-88xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="order-2 text-left lg:order-1">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-destaque">
            Nossa experiência
          </span>

          <h2 className="mt-5 max-w-xl text-4xl leading-[0.98] text-ink sm:text-5xl lg:text-6xl">
            Cuidado que transforma cada visita.
          </h2>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-ink/70 sm:text-lg">
            Cada atendimento é pensado para valorizar sua beleza com técnica,
            escuta e um cuidado que continua depois do espelho.
          </p>

          <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 border-y border-ink/15 py-6 lg:mx-0">
            <div className="border-r border-b border-ink/15 pr-5 pb-5">
              <p className="text-4xl leading-none text-destaque sm:text-5xl">
                +
                <CountUp
                  from={0}
                  to={1000}
                  separator="."
                  duration={1.4}
                  className="count-up-text"
                />
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.15em] text-ink/60">
                Clientes atendidos
              </p>
            </div>

            <div className="border-b border-ink/15 pl-5 pb-5">
              <p className="text-4xl leading-none text-destaque sm:text-5xl">
                +
                <CountUp
                  from={0}
                  to={10}
                  duration={1.2}
                  className="count-up-text"
                />
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.15em] text-ink/60">
                Anos de experiência
              </p>
            </div>

            <div className="border-r border-ink/15 pr-5 pt-5">
              <p className="text-4xl leading-none text-destaque sm:text-5xl">
                +
                <CountUp
                  from={0}
                  to={8}
                  duration={1.2}
                  className="count-up-text"
                />
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.15em] text-ink/60">
                Profissionais
              </p>
            </div>

            <div className="pl-5 pt-5">
              <p className="text-4xl leading-none text-destaque sm:text-5xl">
                +
                <CountUp
                  from={0}
                  to={8}
                  duration={1.2}
                  className="count-up-text"
                />
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.15em] text-ink/60">
                Serviços disponíveis
              </p>
            </div>
          </div>

          <Button
            text="Agende seu horário"
            className="!mt-8 !justify-center bg-white text-primaryy lg:!justify-start"
          />
        </div>

        <div className="relative order-1 min-h-[420px] overflow-hidden rounded-[1.5rem] bg-primaryy sm:min-h-[560px] lg:order-2 lg:min-h-[680px]">
          <Image
            src="/salon.jpg"
            alt="Profissional cuidando da beleza de uma cliente"
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}

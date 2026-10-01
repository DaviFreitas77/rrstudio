"use client";

import { Hero } from "@/src/sections/hero";
import { Services } from "@/src/sections/services";
import "swiper/css";

import { Feedback } from "@/src/sections/feedback";
import { Results } from "@/src/sections/results";
import { Journey } from "@/src/sections/journey";
import { Button } from "@/components/ui/button";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { SiteHeader } from "@/components/ui/site-header";

export default function Home() {
  return (
    <main className="bg-page">
      <SiteHeader />
      <div id="inicio">
        <Hero />
      </div>
      <Services />
      <Results />
      <Journey />
      <Feedback />
      <section className="flex justify-center px-4 py-20">
        <div className="cta relative flex min-h-[420px] w-full max-w-[1400px] flex-col items-center justify-center overflow-hidden rounded-[2rem] bg-cover bg-center p-8 text-center md:items-start md:p-14 md:text-left lg:p-20">
         

          <div className="relative z-10 flex max-w-xl flex-col items-center text-white md:items-start">
            <span
              className="
                        mb-6
                        flex items-center gap-4
                        text-xs font-medium uppercase
                        tracking-[0.2em] text-white
                    "
            >
              UM MOMENTO SÓ SEU
            </span>

            <h3 className="max-w-lg text-4xl leading-tight md:text-5xl lg:text-6xl">
              Sua beleza merece esse cuidado.
            </h3>

            <p className="mt-5 max-w-md text-base leading-relaxed text-white/80 md:text-lg">
              Reserve seu momento e viva uma experiência pensada para você, no
              salão ou no conforto da sua casa.
            </p>

            <div className="w-full">
              <Button text="Agendar agora" />
            </div>
          </div>
        </div>
      </section>

      <footer className="relative bg-surface px-6 pt-20 pb-10 text-ink">
        <div className="mx-auto max-w-[1215px]">
          {/* Conteúdo principal */}
          <div className="flex flex-col justify-between gap-12 md:flex-row">
            {/* Logo + descrição */}
            <div className="max-w-[330px]">
              <div className="mb-8 flex items-center gap-3">
                {/* Troque pelo seu logo */}
                <div className="flex h-8 w-8 items-center justify-center border border-ink">
                  <span className="text-sm font-semibold">L</span>
                </div>

                <span className="text-lg font-medium tracking-tight">logo</span>
              </div>

              <p className="max-w-[300px] font-mono text-sm leading-relaxed text-muted">
                Realçando sua beleza com
                <br />
                cuidado, técnica e sofisticação.
              </p>
            </div>

            {/* Links */}
            <div className="flex items-start gap-10 text-xs tracking-wide text-muted">
              <a href="#instagram" className="transition-colors hover:text-ink">
                INSTAGRAM
              </a>

              <a href="#whatsapp" className="transition-colors hover:text-ink">
                WHATSAPP
              </a>
            </div>
          </div>

          {/* Linha */}
          <div className="mt-20 border-t border-ink/10" />

          {/* Rodapé inferior */}
          <div className="flex flex-col justify-between gap-5 pt-8 font-mono text-xs text-muted/70 sm:flex-row">
            <p>© 2026 RRSTUDIO.</p>

            <p>São Paulo — SP</p>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </main>
  );
}

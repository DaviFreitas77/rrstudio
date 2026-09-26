'use client'


import { Hero } from "@/src/sections/hero";
import { Services } from "@/src/sections/services";
import 'swiper/css';

import { Feedback } from "@/src/sections/feedback";
import { Results } from "@/src/sections/results";
import { Journey } from "@/src/sections/journey";

export default function Home() {

  return (
    <main className="bg-[#F2EDE7]">
      <Hero />
      <Services />
      <Results />
      <Journey />
      <Feedback />
      <footer className="relative bg-white px-6 pt-20 pb-10 text-black">
        <div className="mx-auto max-w-[1215px]">

          {/* Conteúdo principal */}
          <div className="flex flex-col justify-between gap-12 md:flex-row">

            {/* Logo + descrição */}
            <div className="max-w-[330px]">
              <div className="mb-8 flex items-center gap-3">
                {/* Troque pelo seu logo */}
                <div className="flex h-8 w-8 items-center justify-center border border-black">
                  <span className="text-sm font-semibold">L</span>
                </div>

                <span className="text-lg font-medium tracking-tight">
                  logo
                </span>
              </div>

              <p className="max-w-[300px] font-mono text-sm leading-relaxed text-gray-500">
                Realçando sua beleza com
                <br />
                cuidado, técnica e sofisticação.
              </p>
            </div>

            {/* Links */}
            <div className="flex items-start gap-10 text-xs tracking-wide text-gray-500">
              <a
                href="#instagram"
                className="transition-colors hover:text-black"
              >
                INSTAGRAM
              </a>

              <a
                href="#whatsapp"
                className="transition-colors hover:text-black"
              >
                WHATSAPP
              </a>
            </div>
          </div>

          {/* Linha */}
          <div className="mt-20 border-t border-black/10" />

          {/* Rodapé inferior */}
          <div className="flex flex-col justify-between gap-5 pt-8 font-mono text-xs text-gray-400 sm:flex-row">
            <p>
              © 2026 RRSTUDIO.
            </p>

            <p>
              São Paulo — SP
            </p>
          </div>
        </div>
  
      </footer>

    </main >
  );
}
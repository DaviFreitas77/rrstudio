import Link from "next/link";
import { ArrowRight } from "lucide-react";

const navigation = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Resultados", href: "#resultados" },
  { label: "Jornada", href: "#jornada" },
  { label: "Feedback", href: "#feedback" },
];

export function SiteHeader() {
  return (
    <header className="absolute top-0 right-0 left-0 z-50 mx-auto w-full max-w-[1550px] px-5 pt-6 text-white sm:px-10 md:px-20 2xl:px-0">
      <div className="flex items-center justify-between  pb-5">
        <Link
          href="#inicio"
          className="shrink-0 text-sm font-semibold tracking-[0.28em] transition-colors hover:text-primary"
        >
          Logo
        </Link>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-7 md:flex lg:gap-10"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[10px] uppercase tracking-[0.18em] text-white/75 transition-colors hover:text-primary lg:text-xs"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#agendamento"
          className="inline-flex items-center gap-2 border border-primary bg-primary px-6 py-2 text-[10px] uppercase tracking-[0.16em] text-white transition-colors hover:bg-primary-dark sm:px-4"
        >
          Agendar agora
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </header>
  );
}

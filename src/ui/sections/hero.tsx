import { TbSparkle } from "react-icons/tb";
import { Button } from "../button";

export function Hero() {
    return (
        <section className="hero relative flex min-h-screen py-50  lg:items-center justify-center px-6 text-white sm:px-10 md:px-20 lg:justify-start 2xl:px-45">
            <div className="relative z-10 w-full max-w-md text-center lg:max-w-xl lg:text-start 2xl:max-w-2xl">

                <h1 className="text-4xl font-medium leading-tight sm:text-5xl md:text-6xl lg:leading-18 2xl:text-7xl 2xl:leading-20">
                    A arte de cuidar da{" "}
                    <span className="text-[#C9A24D]">sua beleza</span>
                </h1>

                <p className="mx-auto mt-5 max-w-sm text-sm leading-relaxed text-[#F2EDE9]/80 sm:text-base md:max-w-xl md:text-lg lg:mx-0">
                    Cabelo, sobrancelhas e unhas para realçar sua beleza e expressar
                    seu estilo. Atendimento no salão ou no conforto da sua casa.
                </p>

                <div className="mt-5 flex items-center justify-center gap-2 lg:justify-start">
                    <div className="h-0.5 w-full max-w-70 rounded-full bg-[#8b6d1f] sm:max-w-90 lg:w-110" />

                    <TbSparkle
                        size={18}
                        color="#8b6d1f"
                        className="shrink-0"
                    />
                </div>

                <Button text="Agende seu horário" className="mt-8" onClick={() => alert("a")} />

            </div>


        </section>
    )
}
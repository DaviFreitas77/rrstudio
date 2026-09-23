import { TbSparkle } from "react-icons/tb";
import { Button } from "../button";
import CircularText from "../circularText";

export function Hero() {
    return (
        <section className="hero relative flex min-h-screen py-50  lg:items-center  px-4 text-white sm:px-10 md:px-20 justify-start 2xl:px-45">


            <div className="relative z-10 w-full max-w-80 lg:max-w-xl text-start 2xl:max-w-2xl">
                <span className="mb-6 ml-4 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.2em] text-white">
                    <span className="h-px w-8 bg-[#C9A24D]" />
                    UM MOMENTO SÓ SEU

                </span>
                <h1 className="text-4xl font-medium  sm:text-5xl md:text-6xl lg:leading-18 2xl:text-7xl 2xl:leading-20">
                    A arte de cuidar da{" "}
                    <span className="text-[#C9A24D]">sua beleza</span>
                </h1>

                <p className="mx-auto mt-5 max-w-sm text-sm leading-relaxed text-[#F2EDE9]/80 sm:text-base md:max-w-xl md:text-lg lg:mx-0">
                    Cabelo, sobrancelhas e unhas para realçar sua beleza e expressar
                    seu estilo. Atendimento no salão ou no conforto da sua casa.
                </p>

                <div className="hidden lg:flex mt-5  items-center  gap-2 justify-start">
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
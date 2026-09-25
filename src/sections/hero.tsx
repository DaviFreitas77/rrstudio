import { TbSparkle } from "react-icons/tb";
import { Button } from "../../components/ui/button";
import CircularText from "../../components/ui/circularText";

export function Hero() {
    return (
        <section
            className="
                hero relative flex h-svh
                items-end justify-start
                px-5 pb-16
                text-white
                sm:px-10 sm:pb-20
                md:items-center md:px-20 md:pb-0
                lg:justify-start
                2xl:px-45
            "
        >
            <div
                className="
                    relative z-10 w-full
                    max-w-[340px]
                    text-left
                    sm:max-w-lg
                    md:max-w-140
                    lg:max-w-xl
                    2xl:max-w-2xl
                "
            >
                <span
                    className="
                        mb-6
                        flex items-center gap-4
                        text-xs font-medium uppercase
                        tracking-[0.2em] text-white
                    "
                >
                    <span className="hidden h-px w-8 bg-[#C9A24D] lg:block" />
                    UM MOMENTO SÓ SEU
                </span>

                <h1
                    className="
                        text-4xl font-medium
                        sm:text-5xl
                        md:text-6xl
                        lg:leading-18
                        2xl:text-7xl 2xl:leading-20
                    "
                >
                    A arte de cuidar da{" "}
                    <span className="text-[#C9A24D]">
                        sua beleza
                    </span>
                </h1>

                <p
                    className="
                        mt-5 max-w-sm
                        text-sm leading-relaxed
                        text-[#F2EDE9]/80
                        sm:text-base
                        md:text-lg
                    "
                >
                    Cabelo, sobrancelhas e unhas para realçar
                    sua beleza e expressar seu estilo. Atendimento
                    no salão ou no conforto da sua casa.
                </p>

                <div className="mt-5 hidden items-center gap-2 lg:flex">
                    <div className="h-0.5 w-full max-w-70 rounded-full bg-[#8b6d1f] sm:max-w-90 lg:w-110" />

                    <TbSparkle
                        size={18}
                        color="#8b6d1f"
                        className="shrink-0"
                    />
                </div>

                <Button
                    text="Agende seu horário"
                    className="mt-8"
                    onClick={() => alert("a")}
                />
            </div>
        </section>
    );
}
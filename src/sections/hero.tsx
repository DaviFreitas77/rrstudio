import { TbSparkle } from "react-icons/tb";
import { Button } from "../../components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      className="
        hero relative flex h-svh items-end justify-start px-5 pb-14 text-white
        lg:items-center lg:px-20 lg:pb-0
        2xl:px-45
      "
    >
      <div
        className="
          relative z-10 w-full max-w-[300px] text-left
          md:max-w-[500px]
          2xl:max-w-xl
        "
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span
            className="
              mb-5 hidden items-center gap-4 text-xs font-medium uppercase
              tracking-[0.2em] text-white lg:flex
            "
          >
            <span className="hidden h-px w-8 bg-muted lg:block" />
            STUDIO JF | BELEZA & ESTÉTICA
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1
            className="
              text-4xl  font-medium leading-[1.05]
              md:text-6xl lg:leading-18
              2xl:text-8xl 2xl:leading-24
            "
          >
            O <span className="text-destaque">maior </span> complexo de{" "}
            <span className="text-destaque">beleza</span> da <br></br>
            <span className="text-destaque">zona leste</span>
          </h1>
        </motion.div>
        <div className=" mt-4 h-0.5 w-full max-w-10 lg:max-w-40 rounded-full bg-muted lg:w-110" />

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p
            className="
              mt-5 max-w-lg text-sm leading-relaxed text-background/80
              md:text-lg
            "
          >
            Um espaço para cuidar de você, valorizar sua beleza e tornar cada
            momento especial.
          </p>
        </motion.div>

        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button
            text="Agende seu horário"
            className="mt-8"
            onClick={() => alert("a")}
          />
        </motion.div>
      </div>
    </section>
  );
}

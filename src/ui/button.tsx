
"use client";
interface ButtonProps {
    text: string;
    className?: string;
    onClick?: () => void;
}
export function Button({ text, className, onClick }: ButtonProps) {
  return (
       <div className="relative mt-8 flex justify-center lg:justify-start">
          <button className="relative z-20 w-full max-w-70 cursor-pointer bg-[#C9A24D] px-8 py-3 font-bold text-black transition hover:bg-[#b9913e]" onClick={onClick}>
            {text}
          </button>

          {/* Rabisco */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 600 220"
            className="pointer-events-none absolute left-1/2 top-10 z-10 h-14 w-50 -translate-x-1/2 sm:left-35 sm:translate-x-0"
            fill="none"
          >
            <g
              stroke="#ffffff"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                d="M78 164 C148 146 245 126 354 111 C420 102 478 92 535 76"
                strokeWidth="3.2"
              />
              <path
                d="M82 168 C171 151 257 139 345 127 C421 117 481 107 544 91"
                strokeWidth="2.1"
                opacity="0.9"
              />
              <path
                d="M274 151 C337 135 406 123 477 112 C508 107 531 101 553 94"
                strokeWidth="2.5"
                opacity="0.92"
              />
              <path
                d="M365 126 C421 116 475 106 522 96"
                strokeWidth="1.25"
                opacity="0.7"
              />
            </g>
          </svg>
        </div>
  );
}
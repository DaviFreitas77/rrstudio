import { cn } from "@/lib/utils";

type SectionHeadingProps = {
    eyebrow: string;
    title: string;
    description?: string;
    className?: string;
    align?: "center" | "left" | "center-mobile-left";
};

export function SectionHeading({
    eyebrow,
    title,
    description,
    className,
    align = "center",
}: SectionHeadingProps) {
    const isLeftAligned = align === "left";
    const isCenteredOnMobile = align === "center-mobile-left";

    return (
        <div
            className={cn(
                "mb-5 md:mb-16",
                                isLeftAligned || isCenteredOnMobile
                                    ? "text-left"
                                    : "text-left lg:text-center",
                className
            )}
        >
            <span className="mb-4 block text-xs font-medium uppercase tracking-[0.2em] text-secondary">
                {eyebrow}
            </span>

            <h2 className="mb-4 text-3xl font-light tracking-tight text-primaryy sm:text-4xl">
                {title}
            </h2>

            <div
                className={cn(
                    "mb-4 h-px w-12 bg-muted",
                    !isLeftAligned && !isCenteredOnMobile && "lg:mx-auto"
                )}
            />

            {description && (
                <p
                    className={cn(
                        "max-w-xl text-sm font-light leading-relaxed text-tertiary md:text-base",
                                                isLeftAligned || isCenteredOnMobile
                                                    ? "mr-0"
                                                    : "lg:mx-auto"
                    )}
                >
                    {description}
                </p>
            )}
        </div>
    );
}

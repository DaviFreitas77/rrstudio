import { cn } from "@/lib/utils";

type SectionHeadingProps = {
    eyebrow: string;
    title: string;
    description?: string;
    className?: string;
};

export function SectionHeading({
    eyebrow,
    title,
    description,
    className,
}: SectionHeadingProps) {
    return (
        <div className={cn("mb-12 text-center md:mb-16", className)}>
            <span className="mb-4 block text-xs font-medium uppercase tracking-[0.2em] text-primary-border">
                {eyebrow}
            </span>

            <h2 className="mb-4 text-3xl font-light tracking-tight text-gray-900 sm:text-4xl">
                {title}
            </h2>

            <div className="mx-auto mb-4 h-px w-12 bg-primary-border/40" />

            {description && (
                <p className="mx-auto max-w-xl text-sm font-light leading-relaxed text-gray-600 md:text-base">
                    {description}
                </p>
            )}
        </div>
    );
}

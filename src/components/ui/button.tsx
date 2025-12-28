import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 disabled:pointer-events-none disabled:opacity-50",
                    {
                        "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-purple-500/25":
                            variant === "primary",
                        "bg-secondary text-secondary-foreground hover:bg-secondary/80":
                            variant === "secondary",
                        "border border-white/10 bg-transparent hover:bg-white/5":
                            variant === "outline",
                        "hover:bg-white/5": variant === "ghost",
                        "h-9 px-4 text-sm": size === "sm",
                        "h-11 px-8 text-base": size === "md",
                        "h-14 px-10 text-lg": size === "lg",
                    },
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };

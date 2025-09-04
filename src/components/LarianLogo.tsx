import { cn } from "@/lib/utils";

interface LarianLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const LarianLogo = ({ className, size = "md" }: LarianLogoProps) => {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl"
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative">
        <span className={cn(
          "font-bold tracking-wide text-larian-purple",
          sizeClasses[size]
        )}>
          LARIAN
        </span>
        <span className={cn(
          "font-light tracking-wide text-larian-purple ml-1",
          sizeClasses[size]
        )}>
          PAY
        </span>
        {/* Decorative sparkles */}
        <div className="absolute -top-1 -right-2 text-larian-purple-light">
          <span className="text-xs">✦</span>
        </div>
        <div className="absolute top-1 -right-4 text-larian-purple-light">
          <span className="text-[8px]">✦</span>
        </div>
      </div>
    </div>
  );
};
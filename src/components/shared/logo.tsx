import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  variant?: "full" | "mark";
};

export function Logo({ className, variant = "full" }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <svg
        width="52"
        height="52"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
        className="h-12 w-12 shrink-0 sm:h-14 sm:w-14"
      >
        <rect width="40" height="40" rx="10" fill="#0B3C6D" />
        <path
          d="M8 26h24v3.5a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V26Z"
          fill="#1E8E3E"
        />
        <path d="M10 18h6v8h-6v-8Zm7 0h6v8h-6v-8Zm7 0h6v8h-6v-8Z" fill="#3B82F6" />
        <circle cx="28" cy="12" r="5" fill="#FDB813" />
        <path
          d="M14 31c1.2-2.5 3.2-3.5 6-3.5S24.8 28.5 26 31"
          stroke="#86EFAC"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      {variant === "full" && (
        <div className="leading-none">
          <span className="block text-2xl font-extrabold tracking-tight text-navy sm:text-3xl md:text-4xl">
            AMMA <span className="text-green">SOLAR</span>
          </span>
          <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.16em] text-muted sm:text-sm">
            Nashik
          </span>
        </div>
      )}
    </div>
  );
}

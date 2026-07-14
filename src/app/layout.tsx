import type { ReactNode } from "react";

/** Pass-through — html/body live in `[locale]/layout.tsx` */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}

import { cn } from "@/lib/utils";

export function Footer({ className }: { className?: string }) {
  return (
    <footer className={cn("py-10 text-center text-sm opacity-75", className)}>
      <p>&copy; 2026 Smile Loft Dental LLC &middot; Maryland</p>
    </footer>
  );
}

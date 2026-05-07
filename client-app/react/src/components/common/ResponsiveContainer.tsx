import { cn } from "@/lib/utils";

export const DesktopOnly = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={cn("hidden lg:block", className)}>{children}</div>
);

export const MobileOnly = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={cn("block lg:hidden", className)}>{children}</div>
);
export const DesktopOnly = ({ children }: { children: React.ReactNode }) => (
  <div className="hidden lg:block">{children}</div>
);

export const MobileOnly = ({ children }: { children: React.ReactNode }) => (
  <div className="block md:hidden">{children}</div>
);
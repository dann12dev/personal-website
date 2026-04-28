import { Button } from "@/components/ui/button";
import useDarkMode from "@/hooks/useDarkMode";
import { useState } from "react";
import { cn } from "@/lib/utils";

type HeaderProps = {
  className?: string;
};

const Header = ({ className }: HeaderProps) => {
  const [isDark, setIsDark] = useState(false);
  useDarkMode(isDark);

  return (
    <>
      <header className={cn("flex items-center px-4 border-2 top-0 left-0 z-50 app-region-drag", className)}>   
      </header>
    </>
  );
};

export default Header;
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
      <header className={cn("px-8 items-center top-0 left-0 h-20", className)}>   
        <div>Header</div>
      </header>
    </>
  );
};

export default Header;
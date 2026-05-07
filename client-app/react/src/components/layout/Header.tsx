import { Button } from "@/components/ui/button";
import useDarkMode from "@/hooks/useDarkMode";
import { useState } from "react";
import { cn } from "@/lib/utils";
import NavMenu from "./NavMenu";
import { Link } from "react-router-dom";

type HeaderProps = {
  className?: string;
  isScrolled?: boolean;
  isHeaderMode?: boolean;
};

const Header = ({ className, isScrolled, isHeaderMode }: HeaderProps) => {
  const [isDark, setIsDark] = useState(false);
  useDarkMode(isDark);

  const bgClass = isHeaderMode && !isScrolled
    ? "bg-transparent"
    : "bg-background";
  const textClass = isHeaderMode && !isScrolled 
    ? "text-background" 
    : "text-foreground";

  return (
    <>
      <header
        className={cn(
          "bg-background px-8 top-0 left-0 h-20 flex items-center transition-all duration-400",
          bgClass,
          textClass,
          className,
        )}
      >
        <div className="mx-2">
          <Link to="/home">Home</Link>
        </div>
        <NavMenu></NavMenu>
      </header>
    </>
  );
};

export default Header;

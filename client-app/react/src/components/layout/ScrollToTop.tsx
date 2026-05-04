import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // 監聽捲動事件
  useEffect(() => {
    const toggleVisibility = () => {
      // 捲動超過 300px 則顯示
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 平滑捲動
    });
  };

  return (
    <div
      className={cn(
        "fixed bottom-8 right-8 z-[60] transition-opacity duration-300",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none",
      )}
    >
      <Button
        variant="secondary"
        size="icon"
        onClick={scrollToTop}
        className="rounded-full shadow-lg hover:shadow-xl border bg-background"
      >
        <ChevronUp className="h-5 w-5" />
        <span className="sr-only">TOP</span>
      </Button>
    </div>
  );
};

export default ScrollToTop;

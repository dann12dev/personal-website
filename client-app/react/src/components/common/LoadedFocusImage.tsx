import { useState } from "react";
import { cn } from "@/lib/utils";

type LoadedFocusImageProps = {
  src: string;
  alt: string;
  className?: string;
  isSelected: boolean;
};

const LoadedFocusImage = ({ src, alt, className, isSelected }: LoadedFocusImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        // style={{ transformOrigin: focusPoint }}
        className={cn(
          "transition-all duration-[2000ms] ease-out",
          className,
          // 初始狀態：縮放 1.2 倍（預備縮小聚焦）或 1.0 倍（準備放大）
          // 這裡示範：載入後從 1.2 倍 縮小到 1.05 倍，產生一種從遠處聚焦的視覺感
          isLoaded && isSelected
            ? "scale-105 opacity-100 blur-0"
            : "scale-125 opacity-0 blur-md",
        )}
      />
    </>
  );
};

export default LoadedFocusImage;

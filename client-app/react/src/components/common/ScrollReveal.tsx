import { useEffect, useRef, useState } from "react";

type ScrollRevealProps = {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
};

// 設定方向位移
const directions = {
  up: "translate-y-10",
  down: "-translate-y-10",
  left: "translate-x-10",
  right: "-translate-x-10",
};

const ScrollReveal = ({
  children,
  direction = "up",
  delay = 0,
}: ScrollRevealProps) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target); // 觸發後停止觀察
          }
        });
      },
      { threshold: 0.1 }, // 進入 10% 視窗時觸發
    );

    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div
        ref={domRef}
        style={{ transitionDelay: `${delay}ms` }}
        className={`transition-all duration-1000 ease-out transform ${
          isVisible
            ? "opacity-100 translate-x-0 translate-y-0"
            : `opacity-0 ${directions[direction]}`
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default ScrollReveal;

import { useEffect, RefObject } from "react";
import { useOutletContext } from "react-router-dom";

export function useHeaderMode(ref: RefObject<HTMLElement>, margin = "-80px") {
  const { setIsScrolled } = useOutletContext<{ setIsScrolled: (v: boolean) => void }>();

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsScrolled(!entry.isIntersecting),
      { rootMargin: `${margin} 0px 0px 0px` }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      setIsScrolled(false); // 頁面切換時重置
    };
  }, [ref, margin, setIsScrolled]);
}
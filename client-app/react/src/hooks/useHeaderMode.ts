import { useEffect, RefObject } from "react";
import { useOutletContext } from "react-router-dom";

export function useHeaderMode(ref: RefObject<HTMLElement>, margin = "-80px") {
  const context = useOutletContext<{
    setIsScrolled: (v: boolean) => void;
    setIsHeaderMode: (v: boolean) => void;
  }>();

  const { setIsScrolled, setIsHeaderMode } = context;

  useEffect(() => {
    // 檢查確保 context 存在（避免在沒有配置的 Layout 中崩潰）
    if (!context) {
      return;
    }
    
    setIsHeaderMode(true);

    const node = ref.current;
    if (!node) {
      return () => {
        setIsHeaderMode(false);
        setIsScrolled(false);
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsScrolled(!entry.isIntersecting),
      { rootMargin: `${margin} 0px 0px 0px` }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      setIsHeaderMode(false);
      setIsScrolled(false); // 頁面切換時重置
    };
  }, [ref, margin, setIsScrolled, setIsHeaderMode]);
}
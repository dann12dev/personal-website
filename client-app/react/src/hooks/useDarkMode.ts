import { useEffect } from "react";

function useDarkMode(isDark: boolean) {
  useEffect(() => {
    // 切換 Tailwind dark class
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDark]);
}

export default useDarkMode;
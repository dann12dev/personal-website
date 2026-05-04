import { useEffect } from "react";
import { useSidebar } from "../ui/sidebar";

const SidebarOverlay = () => {
  const { open, setOpen } = useSidebar();

  useEffect(() => {
    if (open) {
      // 當選單開啟時，鎖定 body 捲動
      document.body.style.overflow = "hidden";
    } else {
      // 當選單關閉時，恢復 body 捲動
      document.body.style.overflow = "";
    }

    // 清理函數：確保組件卸載時恢復捲動，避免頁面永久鎖定
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-45 bg-black/30 backdrop-blur-sm md:block hidden" onClick={() => setOpen(!open)}/>
  );
};

export default SidebarOverlay;

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  SidebarGroup,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

import {
  DesktopOnly,
  MobileOnly,
} from "@/components/layout/ResponsiveContainer";
import { useEffect } from "react";
import MOBILE_BREAKPOINT from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";

import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

// 測試用資料陣列
const listItems: NavItem[] = [
  {
    href: "/personal-website/example",
    title: "Introduction",
    description: "Re-usable components built with Tailwind CSS.",
  },
  {
    href: "/personal-website/example",
    title: "Installation",
    description: "How to install dependencies and structure your app.",
  },
  {
    href: "/personal-website/example",
    title: "Typography",
    description: "Styles for headings, paragraphs, lists...etc",
  },
];

type NavItem = {
  href: string;
  title: string;
  description?: string;
};

const CustomSidebarTrigger = ({ menuType }: { menuType: "open" | "close" }) => {
  const { toggleSidebar } = useSidebar();

  return (
    <Button variant="ghost" size="icon" onClick={toggleSidebar}>
      {/* 這裡可以根據開關狀態切換圖示，或是固定使用一個 */}
      {menuType === "open" ? (
        <Menu className="h-6 w-6" />
      ) : (
        <X className="h-6 w-6" />
      )}
    </Button>
  );
};

const NavMenu = () => {
  const { setOpen, setOpenMobile } = useSidebar();
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= MOBILE_BREAKPOINT) {
        // 當視窗變大，不再是手機版時，強制關閉所有選單狀態
        setOpen(false);
        setOpenMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setOpen, setOpenMobile]);
  return (
    <>
      {/* 大版樣式 */}
      <DesktopOnly>
        <NavigationMenu>
          <NavigationMenuList>
            {listItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  asChild
                  className={cn(navigationMenuTriggerStyle(), "group/item bg-transparent hover:bg-transparent focus:bg-transparent relative")}
                >
                  <Link to={item.href}>
                    {item.title}
                    <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-primary scale-x-0 transition-transform duration-300 group-hover/item:scale-x-100" />
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </DesktopOnly>

      {/* 小版樣式 */}
      <MobileOnly className="ml-auto">
        <CustomSidebarTrigger menuType="open"></CustomSidebarTrigger>
        {/* <SidebarTrigger className="flex justify-end"></SidebarTrigger> */}
        <Sidebar
          side="right"
          collapsible="offcanvas"
          variant="sidebar"
          className="z-50 h-full bg-background"
        >
          <SidebarHeader className="bg-background">
            <SidebarMenu>
              <SidebarMenuItem className="ml-auto pr-6 pt-4">
                <SidebarMenuButton asChild isActive>
                  <CustomSidebarTrigger menuType="close"></CustomSidebarTrigger>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>
          <SidebarContent className="bg-background">
            <SidebarGroup>
              <SidebarMenu>
                <SidebarMenuItem>
                  <ul>
                    {listItems.map((item, index) => (
                      <li key={index}>
                        <a
                          href={item.href}
                          className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{item.title}</div>
                          {item.description && (
                            <p className="text-sm text-muted-foreground mt-1">
                              {item.description}
                            </p>
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </MobileOnly>
    </>
  );
};

export default NavMenu;

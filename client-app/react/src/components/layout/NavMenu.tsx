import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
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

// 測試用資料陣列
const listItems: NavItem[] = [
  {
    href: "/docs",
    title: "Introduction",
    description: "Re-usable components built with Tailwind CSS.",
  },
  {
    href: "/docs/installation",
    title: "Installation",
    description: "How to install dependencies and structure your app.",
  },
  {
    href: "/docs/primitives/typography",
    title: "Typography",
    description: "Styles for headings, paragraphs, lists...etc",
  },
];

type NavItem = {
  href: string;
  title: string;
  description?: string;
};

type ListItemProps = {
  items: NavItem[];
  className?: string;
};

const ListItem = ({ items, className = "" }: ListItemProps) => {
  return (
    <ul className={`grid ${className}`}>
      {items.map((item, index) => (
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
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ListItem items={listItems} className="w-96 p-4"></ListItem>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ListItem items={listItems} className="w-96 p-4"></ListItem>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ListItem items={listItems} className="w-96 p-4"></ListItem>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ListItem items={listItems} className="w-96 p-4"></ListItem>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </DesktopOnly>

      {/* 小版樣式 */}
      <MobileOnly>
        <SidebarTrigger></SidebarTrigger>
        <Sidebar
          side="right"
          collapsible="offcanvas"
          variant="sidebar"
          className="z-50 h-full bg-background"
        >
          <SidebarHeader className="bg-background">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive>
                  <a href="#">Home</a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>
          <SidebarContent className="bg-background">
            <SidebarGroup>
              <SidebarMenu>
                <SidebarMenuItem>
                  <ListItem items={listItems} className="w-full p-2"></ListItem>
                  <ListItem items={listItems} className="w-full p-2"></ListItem>
                  <ListItem items={listItems} className="w-full p-2"></ListItem>
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

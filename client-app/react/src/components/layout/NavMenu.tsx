import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import {
    SidebarProvider,
    Sidebar,
    SidebarHeader,
    SidebarContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarTrigger
} from "@/components/ui/sidebar"

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
//   const {toggleSidebar}= useSidebar()
  return (
    <>
        {/* 大版樣式 */}
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

        {/* 小版樣式 */}       
        <SidebarProvider open={false}>
            <SidebarTrigger></SidebarTrigger>
            <Sidebar side="right">
                <SidebarHeader>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <ListItem items={listItems} className="w-full p-2"></ListItem>
                            <SidebarMenuButton asChild isActive>
                                <a href="#">Home</a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarHeader>
                <SidebarContent>

                </SidebarContent>
            </Sidebar>
        </SidebarProvider>
    </>
  );
};

export default NavMenu;
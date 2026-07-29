"use client";

import { usePathname } from "next/navigation";
import { SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";

const data = [
  {
    title: "Installation",
    url: "#",
  },
  {
    title: "Profile",
    url: "/dashboard/profile",
  },
];

export default function DashboardNav() {
  const pathname = usePathname();
  return (
    <>
      {data.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton asChild isActive={pathname === item.url}>
            <a href={item.url}>{item.title}</a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </>
  );
}

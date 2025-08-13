import type { JSX } from "react/jsx-runtime";
import {  Sheet, IdCardLanyard, FolderGit2, Home ,Hotel} from "lucide-react";

export interface sidebardata {
  label: string;
  icon: JSX.Element;
  path: string;
}

export const Hamburgerdata: sidebardata[] = [
  { label: "home", icon: <Home />, path: "/dashboard" },
  { label: "dashboard", icon: <Sheet />, path: "/dashboard/dashdata" },
  { label: "employees", icon: <IdCardLanyard />, path: "/dashboard/employees" },
  { label: "projects", icon: <FolderGit2 />, path: "/dashboard/projects" },
  {label:"hotelData", icon:<Hotel/>,path:"/dashboard/hotelData"}
  
];


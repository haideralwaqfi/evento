"use client";

import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
export default function Header() {
  const activePathname = usePathname();
  const routes = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/events/all",
      label: "All Events",
    },
    // Add more routes here...
  ];

  return (
    <header className="flex justify-between items-center border-b border-white/10 h-14 px-3 sm:px-9 ">
      <Logo />
      <nav className="h-full">
        <ul className="flex gap-x-6 h-full text-sm">
          {routes.map(({ path, label }) => (
            <li
              key={path}
              className={cn(
                "hover:text-white flex items-center relative transition",
                {
                  "text-white": activePathname === path,
                  "text-white/50": activePathname !== path,
                }
              )}>
              <Link className="" href={path}>
                {label}
              </Link>
              {activePathname === path && (
                <motion.div
                  layoutId="header-active-link"
                  className="bg-accent h-1 w-full absolute bottom-0 rounded-md"></motion.div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

import React from "react";

export default function Footer() {
  const routes = [
    {
      path: "/terms-conditions",
      label: "Terms & Conditions",
    },
    {
      path: "/privacy-policy",
      label: "Privacy Policy",
    },
    // Add more routes here...
  ];

  return (
    <footer className="mt-auto flex justify-between items-center px-3 h-16 border-t border-white/10 sm:px-9 text-xs text-white/25">
      <small className="text-xs">
        &copy; 2024 Haider Alwaqfi. All rights reserved.
      </small>
      <ul className="flex gap-x-3 sm:gap-x-8">
        {routes.map(({ path, label }) => (
          <li key={path}>
            <a href={path} className="text-white/50 hover:text-white">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}

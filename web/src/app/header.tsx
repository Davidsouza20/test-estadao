"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getCookie } from "@/lib/utils";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isAuth = !!getCookie("token");

  const menuItems = [
    { name: "Feed", href: "/feed" },
    { name: "Admin", href: "/admin" },
    { name: isAuth ? "Logout" : "Login", href: isAuth ? "/logout" : "/login" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Image
            src="/images/logo.png"
            alt="Logo Estadão"
            className="h-8"
            width={250}
            height={60}
          />

          <nav className="hidden lg:flex lg:items-center lg:space-x-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-2 lg:p-0 rounded-lg transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-blue-600 font-semibold"
                    : "text-gray-600"
                } hover:text-blue-500 hover:bg-gray-100`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-500 focus:outline-none lg:hidden ml-auto"
            aria-label="Toggle navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="flex flex-col lg:hidden text-center mt-2 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-2 rounded-lg transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-blue-600 font-semibold"
                    : "text-gray-600"
                } hover:text-blue-500 hover:bg-gray-100`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

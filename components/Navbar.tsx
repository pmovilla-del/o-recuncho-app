"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Inicio" },
    { href: "/entorno", label: "Entorno" },
    { href: "/restaurantes", label: "Dónde comer" },
    { href: "/compras", label: "Compras" },
    { href: "/servicios", label: "Servicios" },
    { href: "/excursiones", label: "Excursiones" },
    { href: "/tradiciones", label: "Tradiciones" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/70 bg-white/85 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-green-900 transition-colors duration-300 hover:text-green-700"
        >
          O Recuncho
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative font-medium text-gray-700 transition-all duration-300 hover:text-green-800 after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-green-700 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-full p-2 transition-colors duration-300 hover:bg-stone-100 lg:hidden"
          aria-label="Abrir menú"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {open && (
        <nav className="border-t border-stone-200 bg-white/95 backdrop-blur-md lg:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b border-stone-100 px-6 py-4 text-gray-700 transition-colors duration-300 hover:bg-stone-50 hover:text-green-800"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
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
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link
          href="/"
          className="text-2xl font-bold text-green-900"
        >
          O Recuncho
        </Link>

        <nav className="hidden gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-medium text-gray-700 hover:text-green-700 transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {open && (
        <nav className="border-t bg-white md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b px-6 py-4 hover:bg-stone-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
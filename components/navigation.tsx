"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Pill } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Accueil" },
    { href: "/medicines", label: "Catalogue" },
    { href: "/pharmacies", label: "Réseau" },
    { href: "/chat", label: "Assistant IA" },
    { href: "/pharmacy", label: "Espace Pharmacien" },
    { href: "/admin", label: "Admin" },
  ]

  return (
    <nav className="border-b border-border bg-card sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center group-hover:bg-primary/90 transition shadow-lg shadow-primary/20">
              <Pill className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground tracking-tight">MediConnect</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-sm font-medium transition-colors py-2 ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ type: "spring", stiffness: 350, damping: 20 }}
                      style={{ originX: 0.5 }}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-2 rounded-lg transition-colors ${pathname === item.href
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

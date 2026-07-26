"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

import { navigationItems } from "@/data/navigation";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button
        ref={toggleButtonRef}
        type="button"
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm border border-border bg-surface text-brand-dark transition-colors hover:border-accent-dark hover:bg-canvas"
        aria-expanded={isOpen}
        aria-controls={menuId}
        aria-label={isOpen ? "Mobil menüyü kapat" : "Mobil menüyü aç"}
        onClick={() => setIsOpen((currentValue) => !currentValue)}
      >
        {isOpen ? (
          <svg
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 24 24"
            className="size-6"
          >
            <path
              d="M6 6l12 12M18 6L6 18"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="1.75"
            />
          </svg>
        ) : (
          <svg
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 24 24"
            className="size-6"
          >
            <path
              d="M4 7h16M4 12h16M4 17h16"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="1.75"
            />
          </svg>
        )}
      </button>

      {isOpen ? (
        <div
          id={menuId}
          className="absolute inset-x-0 top-full border-b border-border bg-canvas motion-safe:animate-[mobile-menu-enter_160ms_ease-out]"
        >
          <nav
            aria-label="Mobil navigasyon"
            className="mx-auto w-full max-w-7xl px-5 py-4 sm:px-6"
          >
            <ul className="grid gap-1">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex min-h-12 items-center rounded-sm px-3 font-medium text-brand-dark no-underline transition-colors hover:bg-surface hover:text-accent-dark"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ) : null}
    </div>
  );
}

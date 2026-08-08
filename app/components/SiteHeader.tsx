"use client";

import { useEffect, useState } from "react";

export function SiteHeader({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!transparent) {
      return;
    }

    const updateNav = () => setScrolled(window.scrollY > 24);

    updateNav();
    window.addEventListener("scroll", updateNav, { passive: true });

    return () => window.removeEventListener("scroll", updateNav);
  }, [transparent]);

  return (
    <header
      className={[
        "main-header-sas",
        transparent ? "main-header-sas-transparent" : "main-header-sas-solid",
        scrolled ? "nav-scrolled" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div
        className={[
          "nav",
          "site-header",
          transparent ? "site-header-transparent" : "site-header-solid",
          scrolled ? "nav-scrolled" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <a className="wordmark wordmark-icon" href="/" aria-label="Script & Soul home">
          <span aria-hidden="true" />
        </a>
        <nav aria-label="Primary navigation">
          <a href="/#shop">Shop</a>
          <a href="/#story">Story</a>
          <a href="/#persona">Find Your Scent</a>
          <a href="/#craft">Craft</a>
          <a href="/home-2">Home 2</a>
        </nav>
        <div className="nav-actions" aria-label="Store actions">
          <button aria-label="Search">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="10.5" cy="10.5" r="6.5" />
              <path d="m15.5 15.5 5 5" />
            </svg>
          </button>
          <button aria-label="Account">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="7.5" r="3" />
              <path d="M6.5 20c.7-3.3 2.6-5 5.5-5s4.8 1.7 5.5 5" />
            </svg>
          </button>
          <button className="cart-button" aria-label="Cart">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 8.5h10l-.8 11H7.8L7 8.5Z" />
              <path d="M9.5 8.5V6.8A2.5 2.5 0 0 1 12 4.3v0a2.5 2.5 0 0 1 2.5 2.5v1.7" />
            </svg>
            <span>2</span>
          </button>
        </div>
      </div>
    </header>
  );
}

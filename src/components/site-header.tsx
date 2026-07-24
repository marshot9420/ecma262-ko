import { Link } from "react-router";

import { SITE_URLS } from "../config/documents";

interface SiteHeaderProps {
  isMenuOpen: boolean;
  onMenuToggle: () => void;
}

export default function SiteHeader({
  isMenuOpen,
  onMenuToggle,
}: SiteHeaderProps) {
  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-30",
        "flex h-(--header-height) items-center gap-4",
        "border-b border-border",
        "bg-background/90 px-5 backdrop-blur-xl",
      ].join(" ")}
    >
      <button
        type="button"
        className={[
          "inline-flex size-10 items-center justify-center",
          "rounded-md border border-border",
          "bg-background text-foreground",
          "transition-colors hover:bg-surface",
          "min-[52rem]:hidden",
        ].join(" ")}
        aria-label={isMenuOpen ? "목차 닫기" : "목차 열기"}
        aria-controls="site-sidebar"
        aria-expanded={isMenuOpen}
        onClick={onMenuToggle}
      >
        <svg
          aria-hidden="true"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M4 6h16" />
          <path d="M4 12h16" />
          <path d="M4 18h16" />
        </svg>
      </button>

      <p className="m-0 text-base font-bold">
        <Link to={SITE_URLS.HOME} className="text-foreground no-underline">
          ECMAScript® 2027{" "}
          <span className="font-medium text-muted-foreground">언어 명세</span>
        </Link>
      </p>
    </header>
  );
}

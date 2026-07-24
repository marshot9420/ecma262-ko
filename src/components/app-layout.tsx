import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigation } from "react-router";

import { useDelayedBoolean } from "../hooks/use-delayed-boolean";
import DocumentSkeleton from "./document-skeleton";
import Sidebar from "./sidebar";
import SiteHeader from "./site-header";

const DESKTOP_MEDIA_QUERY = "(min-width: 52rem)";

export default function AppLayout() {
  const location = useLocation();
  const navigation = useNavigation();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const isRouteLoading = navigation.state === "loading";
  const showDocumentSkeleton = useDelayedBoolean(isRouteLoading, 120);

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isSidebarOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isSidebarOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia(DESKTOP_MEDIA_QUERY);

    const handleChange = () => {
      if (mediaQuery.matches) {
        setIsSidebarOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    if (location.hash) {
      const elementId = decodeURIComponent(location.hash.slice(1));

      requestAnimationFrame(() => {
        document.getElementById(elementId)?.scrollIntoView();
      });

      return;
    }

    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, [location.pathname, location.hash]);

  return (
    <>
      <SiteHeader
        isMenuOpen={isSidebarOpen}
        onMenuToggle={() => {
          setIsSidebarOpen((current) => !current);
        }}
      />

      <Sidebar
        isOpen={isSidebarOpen}
        onNavigate={() => {
          setIsSidebarOpen(false);
        }}
      />

      <button
        type="button"
        aria-label="목차 닫기"
        tabIndex={isSidebarOpen ? 0 : -1}
        onClick={() => {
          setIsSidebarOpen(false);
        }}
        className={[
          "fixed inset-x-0 bottom-0 top-(--header-height)",
          "z-30 bg-black/35",
          "transition-opacity duration-200",
          "min-[52rem]:hidden",
          isSidebarOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        ].join(" ")}
      />

      <div
        className={[
          "min-h-screen pt-(--header-height)",
          "min-[52rem]:pl-(--sidebar-width)",
        ].join(" ")}
      >
        <main
          id="main-content"
          className="min-w-0"
          aria-busy={showDocumentSkeleton}
        >
          <div
            className={[
              "mx-auto w-full max-w-248",
              "px-5 py-10",
              "sm:px-8",
              "min-[52rem]:px-16 min-[52rem]:py-12",
              "lg:pb-32",
            ].join(" ")}
          >
            {showDocumentSkeleton ? <DocumentSkeleton /> : <Outlet />}
          </div>
        </main>
      </div>
    </>
  );
}

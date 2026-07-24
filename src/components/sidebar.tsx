import { useEffect, useState, type ReactNode } from "react";
import { NavLink, useLocation } from "react-router";

import {
  DOCUMENT_NAVIGATION,
  getDocumentById,
  type DocumentNavigationGroup,
  type DocumentNavigationItem,
  type DocumentNavigationNode,
} from "../config/documents";

interface SidebarProps {
  isOpen: boolean;
  onNavigate: () => void;
}

interface NavigationGroupProps {
  group: DocumentNavigationGroup;
  pathname: string;
  onNavigate: () => void;
}

const NAVIGATION_LINK_CLASS_NAME = [
  "block rounded-md px-3 py-2",
  "text-sm leading-5 no-underline",
  "transition-colors",
].join(" ");

function NavigationLink({
  item,
  onNavigate,
}: {
  item: DocumentNavigationItem;
  onNavigate: () => void;
}) {
  const document = getDocumentById(item.documentId);

  return (
    <li>
      <NavLink
        to={document.path}
        onClick={onNavigate}
        className={({ isActive }) =>
          [
            NAVIGATION_LINK_CLASS_NAME,
            isActive
              ? "bg-primary-soft font-semibold text-primary"
              : "text-muted-foreground hover:bg-surface-hover hover:text-foreground",
          ].join(" ")
        }
      >
        {document.navigationLabel}
      </NavLink>
    </li>
  );
}

function NavigationGroup({
  group,
  pathname,
  onNavigate,
}: NavigationGroupProps) {
  const containsActiveDocument = group.children.some((child) => {
    return getDocumentById(child.documentId).path === pathname;
  });

  const [isOpen, setIsOpen] = useState(
    Boolean(group.defaultOpen || containsActiveDocument),
  );

  useEffect(() => {
    if (containsActiveDocument) {
      setIsOpen(true);
    }
  }, [containsActiveDocument]);

  return (
    <li>
      <details
        className="mt-1"
        open={isOpen}
        onToggle={(event) => {
          setIsOpen(event.currentTarget.open);
        }}
      >
        <summary
          className={[
            "cursor-pointer select-none rounded-md",
            "px-3 py-2 text-sm font-semibold text-foreground",
            "hover:bg-surface-hover",
          ].join(" ")}
        >
          {group.label}
        </summary>

        <ol className="mt-0.5 grid list-none gap-0.5 pl-3">
          {group.children.map((child) => (
            <NavigationLink
              key={child.documentId}
              item={child}
              onNavigate={onNavigate}
            />
          ))}
        </ol>
      </details>
    </li>
  );
}

function renderNavigationNode(
  node: DocumentNavigationNode,
  pathname: string,
  onNavigate: () => void,
): ReactNode {
  if (node.type === "document") {
    return (
      <NavigationLink
        key={node.documentId}
        item={node}
        onNavigate={onNavigate}
      />
    );
  }

  return (
    <NavigationGroup
      key={node.id}
      group={node}
      pathname={pathname}
      onNavigate={onNavigate}
    />
  );
}

export default function Sidebar({ isOpen, onNavigate }: SidebarProps) {
  const location = useLocation();

  return (
    <aside
      id="site-sidebar"
      className={[
        "fixed bottom-0 left-0 top-(--header-height) z-40",
        "w-(--sidebar-width) overflow-y-auto",
        "border-r border-border bg-surface",
        "shadow-xl transition-transform duration-200",
        "min-[52rem]:z-20 min-[52rem]:translate-x-0",
        "min-[52rem]:shadow-none",
        isOpen ? "translate-x-0" : "-translate-x-full",
      ].join(" ")}
    >
      <div className="px-4 pb-12 pt-5">
        <nav aria-label="문서 목차">
          <p
            className={[
              "mb-3 px-3",
              "text-xs font-bold uppercase",
              "tracking-[0.08em] text-muted-foreground",
            ].join(" ")}
          >
            목차
          </p>

          <ol className="grid list-none gap-1 p-0">
            {DOCUMENT_NAVIGATION.map((node) =>
              renderNavigationNode(node, location.pathname, onNavigate),
            )}
          </ol>
        </nav>
      </div>
    </aside>
  );
}

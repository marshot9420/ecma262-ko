import { Link } from "react-router";

import { getAdjacentDocuments, type DocumentId } from "../config/documents";

interface PageNavigationProps {
  documentId: DocumentId;
}

export default function PageNavigation({ documentId }: PageNavigationProps) {
  const { previous, next } = getAdjacentDocuments(documentId);

  if (!previous && !next) {
    return null;
  }

  return (
    <nav
      className={[
        "mt-16 grid gap-4 border-t border-border pt-8",
        "sm:grid-cols-2",
      ].join(" ")}
      aria-label="이전 및 다음 문서"
    >
      {previous ? (
        <Link
          to={previous.path}
          className={[
            "flex min-h-24 flex-col gap-1 rounded-lg",
            "border border-border p-4 no-underline",
            "text-foreground transition-colors",
            "hover:border-primary hover:bg-primary-soft",
          ].join(" ")}
        >
          <small className="text-muted-foreground">이전</small>
          <span className="font-medium">{previous.navigationLabel}</span>
        </Link>
      ) : (
        <span aria-hidden="true" />
      )}

      {next ? (
        <Link
          to={next.path}
          className={[
            "flex min-h-24 flex-col items-end gap-1",
            "rounded-lg border border-border p-4",
            "text-right text-foreground no-underline",
            "transition-colors",
            "hover:border-primary hover:bg-primary-soft",
          ].join(" ")}
        >
          <small className="text-muted-foreground">다음</small>
          <span className="font-medium">{next.navigationLabel}</span>
        </Link>
      ) : null}
    </nav>
  );
}

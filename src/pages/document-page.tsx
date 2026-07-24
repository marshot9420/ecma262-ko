import { useEffect } from "react";
import { useLoaderData } from "react-router";

import MarkdownContent from "../components/markdown-content";
import PageNavigation from "../components/page-navigation";
import type { Document } from "../config/documents";

export interface DocumentLoaderData {
  document: Document;
  content: string;
}

export default function DocumentPage() {
  const { document: currentDocument, content } =
    useLoaderData() as DocumentLoaderData;

  useEffect(() => {
    window.document.title = `${currentDocument.title} | ECMAScript® 2027 언어 명세`;
  }, [currentDocument.title]);

  return (
    <>
      <header className="mb-12 border-b border-border pb-8">
        <p className="mb-3 text-sm font-bold text-primary">
          {currentDocument.kicker}
        </p>

        <h1
          id="page-title"
          className={[
            "m-0 text-4xl font-bold leading-tight",
            "tracking-tight text-foreground",
            "sm:text-5xl",
          ].join(" ")}
        >
          {currentDocument.title}
        </h1>
      </header>

      <MarkdownContent content={content} />

      <PageNavigation documentId={currentDocument.id} />
    </>
  );
}

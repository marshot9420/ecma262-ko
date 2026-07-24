import { Link } from "react-router";
import Markdown, { defaultUrlTransform, type Components } from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import { getDocumentById, isDocumentId } from "../config/documents";

interface MarkdownContentProps {
  content: string;
}

const DOCUMENT_PROTOCOL = "doc:";

function resolveDocumentLink(href: string): string | null {
  if (!href.startsWith(DOCUMENT_PROTOCOL)) {
    return null;
  }

  const reference = href.slice(DOCUMENT_PROTOCOL.length);
  const hashIndex = reference.indexOf("#");

  const documentId =
    hashIndex === -1 ? reference : reference.slice(0, hashIndex);

  const hash = hashIndex === -1 ? "" : reference.slice(hashIndex);

  if (!isDocumentId(documentId)) {
    return null;
  }

  return `${getDocumentById(documentId).path}${hash}`;
}

function transformMarkdownUrl(url: string): string {
  if (url.startsWith(DOCUMENT_PROTOCOL)) {
    return url;
  }

  return defaultUrlTransform(url);
}

const markdownComponents: Components = {
  a({ href, children, title }) {
    if (!href) {
      return <span>{children}</span>;
    }

    if (href.startsWith(DOCUMENT_PROTOCOL)) {
      const resolvedPath = resolveDocumentLink(href);

      if (!resolvedPath) {
        console.error(`존재하지 않는 문서 링크입니다: ${href}`);

        return (
          <span
            className="text-destructive underline decoration-wavy"
            title={`존재하지 않는 문서 링크: ${href}`}
          >
            {children}
          </span>
        );
      }

      return (
        <Link to={resolvedPath} title={title}>
          {children}
        </Link>
      );
    }

    if (href.startsWith("/")) {
      return (
        <Link to={href} title={title}>
          {children}
        </Link>
      );
    }

    if (href.startsWith("#")) {
      return (
        <a href={href} title={title}>
          {children}
        </a>
      );
    }

    return (
      <a href={href} title={title} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  },
};

export default function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <article
      className={[
        "prose prose-neutral max-w-none",
        "prose-headings:scroll-mt-24",
        "prose-headings:text-foreground",
        "prose-headings:font-semibold",
        "prose-h2:mt-12",
        "prose-h2:text-2xl",
        "prose-h3:mt-10",
        "prose-h3:text-xl",
        "prose-p:text-foreground",
        "prose-p:leading-8",
        "prose-li:text-foreground",
        "prose-li:leading-8",
        "prose-a:text-primary",
        "prose-a:font-medium",
        "prose-a:underline",
        "prose-a:decoration-primary/40",
        "prose-a:underline-offset-4",
        "hover:prose-a:decoration-primary",
        "prose-strong:text-foreground",
        "prose-code:rounded",
        "prose-code:bg-surface",
        "prose-code:px-1.5",
        "prose-code:py-0.5",
        "prose-code:font-mono",
        "prose-code:text-foreground",
        "prose-code:before:content-none",
        "prose-code:after:content-none",
        "prose-pre:border",
        "prose-pre:border-border",
        "prose-pre:bg-surface",
        "prose-pre:text-foreground",
        "prose-blockquote:border-primary",
        "prose-blockquote:text-muted-foreground",
        "prose-hr:border-border",
        "prose-table:text-sm",
        "prose-th:text-foreground",
        "prose-td:text-foreground",
      ].join(" ")}
    >
      <Markdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSlug]}
        components={markdownComponents}
        urlTransform={transformMarkdownUrl}
      >
        {content}
      </Markdown>
    </article>
  );
}

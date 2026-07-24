import type { Document } from "../config/documents";

const markdownLoaders = import.meta.glob<string>("/src/content/**/*.md", {
  query: "?raw",
  import: "default",
});

export async function loadDocumentContent(document: Document): Promise<string> {
  const loader = markdownLoaders[document.source];

  if (!loader) {
    throw new Error(
      [
        `Markdown 파일을 찾을 수 없습니다.`,
        `문서: ${document.id}`,
        `경로: ${document.source}`,
      ].join("\n"),
    );
  }

  return loader();
}

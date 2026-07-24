import { createBrowserRouter } from "react-router";

import AppLayout from "../components/app-layout";
import { DOCUMENTS } from "../config/documents";
import { loadDocumentContent } from "../lib/document-content";
import DocumentPage, { type DocumentLoaderData } from "../pages/document-page";
import HomePage from "../pages/home-page";
import NotFoundPage from "../pages/not-found-page";

const documentRoutes = DOCUMENTS.map((document) => {
  return {
    id: `document:${document.id}`,
    path: document.path.replace(/^\//, ""),
    loader: async (): Promise<DocumentLoaderData> => {
      return {
        document,
        content: await loadDocumentContent(document),
      };
    },
    Component: DocumentPage,
  };
});

const basename =
  import.meta.env.BASE_URL === "/"
    ? "/"
    : import.meta.env.BASE_URL.replace(/\/$/, "");

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: AppLayout,
      children: [
        {
          index: true,
          Component: HomePage,
        },
        ...documentRoutes,
        {
          path: "*",
          Component: NotFoundPage,
        },
      ],
    },
  ],
  {
    basename,
  },
);

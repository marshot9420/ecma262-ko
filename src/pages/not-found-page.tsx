import { Link } from "react-router";

import { SITE_URLS } from "../config/documents";

export default function NotFoundPage() {
  return (
    <section className="py-16 text-center">
      <p className="text-sm font-bold text-primary">404</p>

      <h1 className="mt-3 text-3xl font-bold text-foreground">
        문서를 찾을 수 없습니다
      </h1>

      <p className="mt-4 leading-7 text-muted-foreground">
        요청한 문서가 없거나 문서 경로가 변경되었습니다.
      </p>

      <Link
        to={SITE_URLS.HOME}
        className={[
          "mt-8 inline-flex rounded-md",
          "border border-border px-4 py-2.5",
          "font-medium text-foreground no-underline",
          "hover:border-primary hover:bg-primary-soft",
        ].join(" ")}
      >
        처음으로 돌아가기
      </Link>
    </section>
  );
}

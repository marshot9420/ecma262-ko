import { useEffect } from "react";
import { Link } from "react-router";

import { getDocumentById } from "../config/documents";

const firstDocument = getDocumentById("about-this-specification");

export default function HomePage() {
  useEffect(() => {
    window.document.title = "ECMAScript® 2027 언어 명세";
  }, []);

  return (
    <>
      <header className="mb-12 border-b border-border pb-8">
        <p className="mb-3 text-sm font-bold text-primary">
          ECMA-262 비공식 한국어 번역
        </p>

        <h1
          className={[
            "m-0 text-4xl font-bold leading-tight",
            "tracking-tight text-foreground",
            "sm:text-5xl",
          ].join(" ")}
        >
          ECMAScript® 2027 언어 명세
        </h1>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
          ECMAScript 언어의 구문과 실행 의미를 정의하는 ECMA-262 명세의 비공식
          한국어 번역본입니다.
        </p>
      </header>

      <aside
        className={[
          "my-8 border-l-4 border-primary",
          "bg-primary-soft px-5 py-4",
          "leading-7 text-muted-foreground",
        ].join(" ")}
      >
        공식 문서와 번역본의 내용이 다른 경우 공식 영문 문서를 기준으로 합니다.
      </aside>

      <section aria-labelledby="document-start-heading">
        <h2
          id="document-start-heading"
          className="text-2xl font-semibold text-foreground"
        >
          문서 보기
        </h2>

        <p className="mt-4 leading-8 text-foreground">
          왼쪽 목차에서 읽으려는 문서를 선택할 수 있습니다.
        </p>

        <Link
          to={firstDocument.path}
          className={[
            "mt-5 inline-flex rounded-md",
            "bg-primary px-4 py-2.5",
            "font-medium text-white no-underline",
            "transition-opacity hover:opacity-90",
          ].join(" ")}
        >
          처음부터 읽기
        </Link>
      </section>
    </>
  );
}

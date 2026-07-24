# ECMAScript 2027 한국어 번역

ECMA-262 ECMAScript 2027 언어 명세를 한국어로 번역하고 웹 문서 형태로 제공하는 프로젝트입니다.

이 프로젝트는 비공식 번역본입니다. 번역문과 공식 명세의 내용이 다른 경우 [TC39의 공식 ECMAScript 명세](https://tc39.es/ecma262/)를 기준으로 합니다.

## 기술 스택

- React
- TypeScript
- Vite
- React Router
- Tailwind CSS
- React Markdown
- Remark GFM
- Rehype

문서 본문은 Markdown으로 관리하며, React 애플리케이션은 레이아웃, 사이드바, 라우팅과 문서 탐색을 담당합니다.

## 설치 및 실행

```bash
pnpm install
pnpm dev
```

개발 서버가 실행되면 터미널에 표시되는 주소로 접속합니다.

프로덕션 빌드는 다음 명령으로 생성합니다.

```bash
pnpm build
```

빌드 결과를 로컬에서 확인하려면 다음 명령을 사용합니다.

```bash
pnpm preview
```

타입 검사만 실행할 수도 있습니다.

```bash
pnpm check-types
```

## 주요 구조

```text
ecma262-ko/
├─ src/
│  ├─ app/
│  │  ├─ App.tsx
│  │  └─ router.tsx
│  ├─ components/
│  ├─ config/
│  │  └─ documents.ts
│  ├─ content/
│  │  ├─ 00-preface/
│  │  ├─ 01-scope/
│  │  ├─ 02-conformance/
│  │  ├─ ...
│  │  ├─ 29-memory-model/
│  │  └─ annex-a/
│  ├─ hooks/
│  ├─ lib/
│  ├─ pages/
│  ├─ styles/
│  └─ main.tsx
├─ index.html
├─ package.json
├─ tsconfig.json
└─ vite.config.ts
```

## 문서 관리

번역문은 `src/content`에서 ECMAScript 명세의 목차 순서에 따라 관리합니다.

```text
src/content/
├─ 00-preface/
├─ 01-scope/
├─ 02-conformance/
├─ 03-normative-references/
├─ ...
├─ 29-memory-model/
├─ annex-a/
├─ annex-b/
└─ annex-f/
```

각 Markdown 파일의 경로, 페이지 URL, 제목과 사이드바 표시는 `src/config/documents.ts`에서 관리합니다.

### `DOCUMENTS`

`DOCUMENTS`는 각 문서의 기본 정보를 정의합니다.

```ts
{
  id: "conformance",
  title: "2. 준수성",
  navigationLabel: "2. 준수성",
  path: "/conformance",
  source: "/src/content/02-conformance/index.md",
  kicker: "ECMA-262 비공식 한국어 번역",
}
```

이 정보를 바탕으로 다음 항목이 생성됩니다.

- 페이지 URL
- Markdown 파일 로딩
- 문서 제목
- 사이드바 링크
- 이전 문서와 다음 문서 링크

### `DOCUMENT_NAVIGATION`

`DOCUMENT_NAVIGATION`은 사이드바의 그룹과 표시 순서를 정의합니다.

새 문서를 추가할 때는 다음 작업을 수행합니다.

1. `src/content`에 Markdown 파일을 추가합니다.
2. `DOCUMENTS`에 문서 정보를 등록합니다.
3. 사이드바에 표시할 문서라면 `DOCUMENT_NAVIGATION`에도 추가합니다.

## Markdown 작성 규칙

문서의 최상위 제목은 Markdown에 작성하지 않습니다.

```md
# 2. 준수성
```

페이지 제목은 `DOCUMENTS`의 `title`을 사용해 공통 문서 컴포넌트가 렌더링합니다. Markdown에는 본문과 하위 제목만 작성합니다.

문서 사이의 링크에는 실제 URL 대신 문서 ID를 사용합니다.

```md
[금지된 확장](doc:forbidden-extensions)
```

특정 문서 내부의 제목으로 연결할 수도 있습니다.

```md
[관련 절](doc:conformance#example-heading)
```

이 방식을 사용하면 문서 URL이 변경되어도 Markdown의 내부 링크를 함께 수정할 필요가 없습니다.

외부 링크는 일반 Markdown 링크로 작성합니다.

```md
[공식 ECMAScript 명세](https://tc39.es/ecma262/)
```

표, 취소선과 작업 목록 등 GitHub Flavored Markdown 문법도 사용할 수 있습니다.

필요한 경우 로컬에서 관리하는 신뢰할 수 있는 문서에 한해 HTML을 사용할 수 있습니다.

## 문서 로딩

Markdown 파일은 Vite의 `import.meta.glob`을 통해 페이지별로 불러옵니다.

문서 전환이 일정 시간 이상 걸리는 경우 문서 영역에 스켈레톤 UI를 표시합니다. 헤더와 사이드바는 유지되므로 문서 이동 중에도 전체 레이아웃은 바뀌지 않습니다.

## 원문

- [ECMAScript 공식 명세](https://tc39.es/ecma262/)
- [ECMA-262 표준 페이지](https://ecma-international.org/publications-and-standards/standards/ecma-262/)
- [TC39 ECMA-262 GitHub 저장소](https://github.com/tc39/ecma262)

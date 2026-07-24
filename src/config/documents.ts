export interface DocumentDefinition {
  id: string;
  title: string;
  navigationLabel: string;
  path: `/${string}`;
  source: `/src/content/${string}.md`;
  kicker: string;
}

export const DOCUMENTS = [
  {
    id: "about-this-specification",
    title: "이 명세에 관하여",
    navigationLabel: "이 명세에 관하여",
    path: "/about-this-specification",
    source: "/src/content/00-preface/01-about-this-specification.md",
    kicker: "ECMA-262 비공식 한국어 번역",
  },
  {
    id: "contributing-to-this-specification",
    title: "이 명세에 기여하기",
    navigationLabel: "이 명세에 기여하기",
    path: "/contributing-to-this-specification",
    source: "/src/content/00-preface/02-contributing-to-this-specification.md",
    kicker: "ECMA-262 비공식 한국어 번역",
  },
  {
    id: "introduction",
    title: "소개",
    navigationLabel: "소개",
    path: "/introduction",
    source: "/src/content/00-preface/03-introduction.md",
    kicker: "ECMA-262 비공식 한국어 번역",
  },
  {
    id: "scope",
    title: "1. 범위",
    navigationLabel: "1. 범위",
    path: "/scope",
    source: "/src/content/01-scope.md",
    kicker: "ECMA-262 비공식 한국어 번역",
  },
  {
    id: "conformance",
    title: "2. 준수성",
    navigationLabel: "2. 준수성",
    path: "/conformance",
    source: "/src/content/02-conformance.md",
    kicker: "ECMA-262 비공식 한국어 번역",
  },
  {
    id: "normative-references",
    title: "3. 규범적 참조",
    navigationLabel: "3. 규범적 참조",
    path: "/normative-references",
    source: "/src/content/03-normative-references.md",
    kicker: "ECMA-262 비공식 한국어 번역",
  },
  {
    id: "web-scripting",
    title: "4.1 웹 스크립팅",
    navigationLabel: "4.1 웹 스크립팅",
    path: "/overview/web-scripting",
    source: "/src/content/04-overview/01-web-scripting.md",
    kicker: "4. 개요",
  },
  {
    id: "hosts-and-implementations",
    title: "4.2 호스트와 구현체",
    navigationLabel: "4.2 호스트와 구현체",
    path: "/overview/hosts-and-implementations",
    source: "/src/content/04-overview/02-hosts-and-implementations.md",
    kicker: "4. 개요",
  },
  {
    id: "ecmascript-overview",
    title: "4.3 ECMAScript 개요",
    navigationLabel: "4.3 ECMAScript 개요",
    path: "/overview/ecmascript-overview",
    source: "/src/content/04-overview/03-ecmascript-overview.md",
    kicker: "4. 개요",
  },
  {
    id: "terms-and-definitions",
    title: "4.4 용어와 정의",
    navigationLabel: "4.4 용어와 정의",
    path: "/overview/terms-and-definitions",
    source: "/src/content/04-overview/04-terms-and-definitions.md",
    kicker: "4. 개요",
  },
  {
    id: "organization-of-this-specification",
    title: "4.5 본 명세의 구성",
    navigationLabel: "4.5 본 명세의 구성",
    path: "/overview/organization-of-this-specification",
    source: "/src/content/04-overview/05-organization-of-this-specification.md",
    kicker: "4. 개요",
  },
  {
    id: "grammar-notation",
    title: "5.1 문법 표기법",
    navigationLabel: "5.1 문법 표기법",
    path: "/notational-conventions/grammar-notation",
    source: "/src/content/05-notational-conventions/01-grammar-notation.md",
    kicker: "5. 표기 규칙",
  },
  {
    id: "algorithm-conventions",
    title: "5.2 알고리즘 표기법",
    navigationLabel: "5.2 알고리즘 표기법",
    path: "/notational-conventions/algorithm-conventions",
    source:
      "/src/content/05-notational-conventions/02-algorithm-conventions.md",
    kicker: "5. 표기 규칙",
  },
  {
    id: "ecmascript-language-types",
    title: "6.1 ECMAScript 언어 타입",
    navigationLabel: "6.1 ECMAScript 언어 타입",
    path: "/ecmascript-data-types-and-values/ecmascript-language-types",
    source:
      "/src/content/06-ecmascript-data-types-and-values/01-ecmascript-language-types.md",
    kicker: "6. ECMAScript 데이터 타입과 값",
  },
  {
    id: "ecmascript-specification-types",
    title: "6.2 ECMAScript 명세 타입",
    navigationLabel: "6.2 ECMAScript 명세 타입",
    path: "/ecmascript-data-types-and-values/ecmascript-specification-types",
    source:
      "/src/content/06-ecmascript-data-types-and-values/02-ecmascript-specification-types.md",
    kicker: "6. ECMAScript 데이터 타입과 값",
  },
  {
    id: "type-conversion",
    title: "7.1 타입 변환",
    navigationLabel: "7.1 타입 변환",
    path: "/abstract-operations/type-conversion",
    source: "/src/content/07-abstract-operations/01-type-conversion.md",
    kicker: "7. 추상 연산",
  },
  {
    id: "testing-and-comparison-operations",
    title: "7.2 검사와 비교 연산",
    navigationLabel: "7.2 검사와 비교 연산",
    path: "/abstract-operations/testing-and-comparison-operations",
    source:
      "/src/content/07-abstract-operations/02-testing-and-comparison-operations.md",
    kicker: "7. 추상 연산",
  },
  {
    id: "operations-on-objects",
    title: "7.3 객체에 대한 연산",
    navigationLabel: "7.3 객체에 대한 연산",
    path: "/abstract-operations/operations-on-objects",
    source: "/src/content/07-abstract-operations/03-operations-on-objects.md",
    kicker: "7. 추상 연산",
  },
  {
    id: "operations-on-iterator-objects",
    title: "7.4 이터레이터 객체에 대한 연산",
    navigationLabel: "7.4 이터레이터 객체에 대한 연산",
    path: "/abstract-operations/operations-on-iterator-objects",
    source:
      "/src/content/07-abstract-operations/04-operations-on-iterator-objects.md",
    kicker: "7. 추상 연산",
  },
  {
    id: "operations-on-disposable-objects",
    title: "7.5 폐기 가능 객체에 대한 연산",
    navigationLabel: "7.5 폐기 가능 객체에 대한 연산",
    path: "/abstract-operations/operations-on-disposable-objects",
    source:
      "/src/content/07-abstract-operations/05-operations-on-disposable-objects.md",
    kicker: "7. 추상 연산",
  },

  // 현재는 다른 문서에서 연결하기 위해서만 등록합니다.
  {
    id: "keywords-and-reserved-words",
    title: "12.7.2 키워드와 예약어",
    navigationLabel: "12.7.2 키워드와 예약어",
    path: "/ecmascript-language/lexical-grammar/names-and-keywords/keywords-and-reserved-words",
    source:
      "/src/content/12-ecmascript-language/07-names-and-keywords/02-keywords-and-reserved-words.md",
    kicker: "12. ECMAScript 언어: 어휘 문법",
  },
  {
    id: "forbidden-extensions",
    title: "17.1 금지된 확장",
    navigationLabel: "17.1 금지된 확장",
    path: "/error-handling-and-language-extensions/forbidden-extensions",
    source:
      "/src/content/17-error-handling-and-language-extensions/01-forbidden-extensions.md",
    kicker: "17. 오류 처리와 언어 확장",
  },
  {
    id: "additional-ecmascript-features-for-web-browsers",
    title: "부록 B 웹 브라우저를 위한 추가 ECMAScript 기능",
    navigationLabel: "부록 B 웹 브라우저를 위한 추가 기능",
    path: "/annex-b/additional-ecmascript-features-for-web-browsers",
    source:
      "/src/content/annex-b/additional-ecmascript-features-for-web-browsers.md",
    kicker: "부록 B · 규범적",
  },
] as const satisfies readonly DocumentDefinition[];

export type DocumentId = (typeof DOCUMENTS)[number]["id"];
export type Document = (typeof DOCUMENTS)[number];

export interface DocumentNavigationItem {
  type: "document";
  documentId: DocumentId;
}

export interface DocumentNavigationGroup {
  type: "group";
  id: string;
  label: string;
  defaultOpen?: boolean;
  children: readonly DocumentNavigationItem[];
}

export type DocumentNavigationNode =
  | DocumentNavigationItem
  | DocumentNavigationGroup;

export const DOCUMENT_NAVIGATION = [
  {
    type: "document",
    documentId: "about-this-specification",
  },
  {
    type: "document",
    documentId: "contributing-to-this-specification",
  },
  {
    type: "document",
    documentId: "introduction",
  },
  {
    type: "document",
    documentId: "scope",
  },
  {
    type: "document",
    documentId: "conformance",
  },
  {
    type: "document",
    documentId: "normative-references",
  },
  {
    type: "group",
    id: "overview",
    label: "4. 개요",
    defaultOpen: true,
    children: [
      {
        type: "document",
        documentId: "web-scripting",
      },
      {
        type: "document",
        documentId: "hosts-and-implementations",
      },
      {
        type: "document",
        documentId: "ecmascript-overview",
      },
      {
        type: "document",
        documentId: "terms-and-definitions",
      },
      {
        type: "document",
        documentId: "organization-of-this-specification",
      },
    ],
  },
  {
    type: "group",
    id: "notational-conventions",
    label: "5. 표기 규칙",
    defaultOpen: true,
    children: [
      {
        type: "document",
        documentId: "grammar-notation",
      },
      {
        type: "document",
        documentId: "algorithm-conventions",
      },
    ],
  },
  {
    type: "group",
    id: "ecmascript-data-types-and-values",
    label: "6. ECMAScript 데이터 타입과 값",
    children: [
      {
        type: "document",
        documentId: "ecmascript-language-types",
      },
      {
        type: "document",
        documentId: "ecmascript-specification-types",
      },
    ],
  },
  {
    type: "group",
    id: "abstract-operations",
    label: "7. 추상 연산",
    children: [
      {
        type: "document",
        documentId: "type-conversion",
      },
      {
        type: "document",
        documentId: "testing-and-comparison-operations",
      },
      {
        type: "document",
        documentId: "operations-on-objects",
      },
      {
        type: "document",
        documentId: "operations-on-iterator-objects",
      },
      {
        type: "document",
        documentId: "operations-on-disposable-objects",
      },
    ],
  },
] as const satisfies readonly DocumentNavigationNode[];

export const SITE_URLS = {
  HOME: "/",
} as const;

export const DOCUMENT_URLS = Object.freeze(
  Object.fromEntries(DOCUMENTS.map((document) => [document.id, document.path])),
) as Readonly<Record<DocumentId, Document["path"]>>;

const documentsById = new Map<DocumentId, Document>(
  DOCUMENTS.map((document) => [document.id, document]),
);

export function isDocumentId(value: string): value is DocumentId {
  return documentsById.has(value as DocumentId);
}

export function getDocumentById(documentId: DocumentId): Document {
  const document = documentsById.get(documentId);

  if (!document) {
    throw new Error(`문서 정의를 찾을 수 없습니다: ${documentId}`);
  }

  return document;
}

function flattenNavigationDocumentIds(
  nodes: readonly DocumentNavigationNode[],
): DocumentId[] {
  return nodes.flatMap((node) => {
    if (node.type === "document") {
      return [node.documentId];
    }

    return node.children.map((child) => child.documentId);
  });
}

export const NAVIGABLE_DOCUMENT_IDS =
  flattenNavigationDocumentIds(DOCUMENT_NAVIGATION);

export const NAVIGABLE_DOCUMENTS = NAVIGABLE_DOCUMENT_IDS.map(getDocumentById);

export function getAdjacentDocuments(documentId: DocumentId): {
  previous: Document | null;
  next: Document | null;
} {
  const currentIndex = NAVIGABLE_DOCUMENT_IDS.indexOf(documentId);

  if (currentIndex === -1) {
    return {
      previous: null,
      next: null,
    };
  }

  const previousId = NAVIGABLE_DOCUMENT_IDS[currentIndex - 1];
  const nextId = NAVIGABLE_DOCUMENT_IDS[currentIndex + 1];

  return {
    previous: previousId ? getDocumentById(previousId) : null,
    next: nextId ? getDocumentById(nextId) : null,
  };
}

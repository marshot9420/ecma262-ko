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
    source: "/src/content/01-scope/index.md",
    kicker: "ECMA-262 비공식 한국어 번역",
  },
  {
    id: "conformance",
    title: "2. 준수성",
    navigationLabel: "2. 준수성",
    path: "/conformance",
    source: "/src/content/02-conformance/index.md",
    kicker: "ECMA-262 비공식 한국어 번역",
  },
  {
    id: "normative-references",
    title: "3. 규범적 참조",
    navigationLabel: "3. 규범적 참조",
    path: "/normative-references",
    source: "/src/content/03-normative-references/index.md",
    kicker: "ECMA-262 비공식 한국어 번역",
  },
  {
    id: "overview-introduction",
    title: "4. 개요",
    navigationLabel: "4. 개요",
    path: "/overview",
    source: "/src/content/04-overview/index.md",
    kicker: "4. 개요",
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
    title: "4.5 이 명세의 구성",
    navigationLabel: "4.5 이 명세의 구성",
    path: "/overview/organization-of-this-specification",
    source: "/src/content/04-overview/05-organization-of-this-specification.md",
    kicker: "4. 개요",
  },
  {
    id: "syntactic-and-lexical-grammars",
    title: "5.1 구문 문법과 어휘 문법",
    navigationLabel: "5.1 구문 문법과 어휘 문법",
    path: "/notational-conventions/syntactic-and-lexical-grammars",
    source:
      "/src/content/05-notational-conventions/01-syntactic-and-lexical-grammars.md",
    kicker: "5. 표기 규칙",
  },
  {
    id: "algorithm-conventions",
    title: "5.2 알고리즘 표기 규칙",
    navigationLabel: "5.2 알고리즘 표기 규칙",
    path: "/notational-conventions/algorithm-conventions",
    source:
      "/src/content/05-notational-conventions/02-algorithm-conventions.md",
    kicker: "5. 표기 규칙",
  },
  {
    id: "ecmascript-data-types-and-values-introduction",
    title: "6. ECMAScript 데이터 타입과 값",
    navigationLabel: "6. ECMAScript 데이터 타입과 값",
    path: "/ecmascript-data-types-and-values",
    source: "/src/content/06-ecmascript-data-types-and-values/index.md",
    kicker: "6. ECMAScript 데이터 타입과 값",
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
  {
    id: "evaluation",
    title: "8.1 런타임 의미론: Evaluation",
    navigationLabel: "8.1 런타임 의미론: Evaluation",
    path: "/syntax-directed-operations/evaluation",
    source: "/src/content/08-syntax-directed-operations/01-evaluation.md",
    kicker: "8. 구문 지향 연산",
  },
  {
    id: "syntax-directed-operations-scope-analysis",
    title: "8.2 스코프 분석",
    navigationLabel: "8.2 스코프 분석",
    path: "/syntax-directed-operations/syntax-directed-operations-scope-analysis",
    source:
      "/src/content/08-syntax-directed-operations/02-syntax-directed-operations-scope-analysis.md",
    kicker: "8. 구문 지향 연산",
  },
  {
    id: "syntax-directed-operations-labels",
    title: "8.3 레이블",
    navigationLabel: "8.3 레이블",
    path: "/syntax-directed-operations/syntax-directed-operations-labels",
    source:
      "/src/content/08-syntax-directed-operations/03-syntax-directed-operations-labels.md",
    kicker: "8. 구문 지향 연산",
  },
  {
    id: "syntax-directed-operations-function-name-inference",
    title: "8.4 함수 이름 추론",
    navigationLabel: "8.4 함수 이름 추론",
    path: "/syntax-directed-operations/syntax-directed-operations-function-name-inference",
    source:
      "/src/content/08-syntax-directed-operations/04-syntax-directed-operations-function-name-inference.md",
    kicker: "8. 구문 지향 연산",
  },
  {
    id: "syntax-directed-operations-contains",
    title: "8.5 Contains",
    navigationLabel: "8.5 Contains",
    path: "/syntax-directed-operations/syntax-directed-operations-contains",
    source:
      "/src/content/08-syntax-directed-operations/05-syntax-directed-operations-contains.md",
    kicker: "8. 구문 지향 연산",
  },
  {
    id: "syntax-directed-operations-miscellaneous",
    title: "8.6 기타",
    navigationLabel: "8.6 기타",
    path: "/syntax-directed-operations/syntax-directed-operations-miscellaneous",
    source:
      "/src/content/08-syntax-directed-operations/06-syntax-directed-operations-miscellaneous.md",
    kicker: "8. 구문 지향 연산",
  },
  {
    id: "environment-records",
    title: "9.1 환경 레코드",
    navigationLabel: "9.1 환경 레코드",
    path: "/executable-code-and-execution-contexts/environment-records",
    source:
      "/src/content/09-executable-code-and-execution-contexts/01-environment-records.md",
    kicker: "9. 실행 가능 코드와 실행 컨텍스트",
  },
  {
    id: "privateenvironment-records",
    title: "9.2 PrivateEnvironment 레코드",
    navigationLabel: "9.2 PrivateEnvironment 레코드",
    path: "/executable-code-and-execution-contexts/privateenvironment-records",
    source:
      "/src/content/09-executable-code-and-execution-contexts/02-privateenvironment-records.md",
    kicker: "9. 실행 가능 코드와 실행 컨텍스트",
  },
  {
    id: "code-realms",
    title: "9.3 Realm",
    navigationLabel: "9.3 Realm",
    path: "/executable-code-and-execution-contexts/code-realms",
    source:
      "/src/content/09-executable-code-and-execution-contexts/03-code-realms.md",
    kicker: "9. 실행 가능 코드와 실행 컨텍스트",
  },
  {
    id: "execution-contexts",
    title: "9.4 실행 컨텍스트",
    navigationLabel: "9.4 실행 컨텍스트",
    path: "/executable-code-and-execution-contexts/execution-contexts",
    source:
      "/src/content/09-executable-code-and-execution-contexts/04-execution-contexts.md",
    kicker: "9. 실행 가능 코드와 실행 컨텍스트",
  },
  {
    id: "jobs",
    title: "9.5 Job과 Job을 큐에 추가하는 호스트 연산",
    navigationLabel: "9.5 Job과 Job을 큐에 추가하는 호스트 연산",
    path: "/executable-code-and-execution-contexts/jobs",
    source: "/src/content/09-executable-code-and-execution-contexts/05-jobs.md",
    kicker: "9. 실행 가능 코드와 실행 컨텍스트",
  },
  {
    id: "agents",
    title: "9.6 에이전트",
    navigationLabel: "9.6 에이전트",
    path: "/executable-code-and-execution-contexts/agents",
    source:
      "/src/content/09-executable-code-and-execution-contexts/06-agents.md",
    kicker: "9. 실행 가능 코드와 실행 컨텍스트",
  },
  {
    id: "agent-clusters",
    title: "9.7 에이전트 클러스터",
    navigationLabel: "9.7 에이전트 클러스터",
    path: "/executable-code-and-execution-contexts/agent-clusters",
    source:
      "/src/content/09-executable-code-and-execution-contexts/07-agent-clusters.md",
    kicker: "9. 실행 가능 코드와 실행 컨텍스트",
  },
  {
    id: "forward-progress",
    title: "9.8 진행 보장",
    navigationLabel: "9.8 진행 보장",
    path: "/executable-code-and-execution-contexts/forward-progress",
    source:
      "/src/content/09-executable-code-and-execution-contexts/08-forward-progress.md",
    kicker: "9. 실행 가능 코드와 실행 컨텍스트",
  },
  {
    id: "weakref-processing-model",
    title: "9.9 WeakRef 및 FinalizationRegistry 대상의 처리 모델",
    navigationLabel: "9.9 WeakRef 및 FinalizationRegistry 대상의 처리 모델",
    path: "/executable-code-and-execution-contexts/weakref-processing-model",
    source:
      "/src/content/09-executable-code-and-execution-contexts/09-weakref-processing-model.md",
    kicker: "9. 실행 가능 코드와 실행 컨텍스트",
  },
  {
    id: "clear-kept-objects",
    title: "9.10 ClearKeptObjects ( )",
    navigationLabel: "9.10 ClearKeptObjects ( )",
    path: "/executable-code-and-execution-contexts/clear-kept-objects",
    source:
      "/src/content/09-executable-code-and-execution-contexts/10-clear-kept-objects.md",
    kicker: "9. 실행 가능 코드와 실행 컨텍스트",
  },
  {
    id: "addtokeptobjects",
    title: "9.11 AddToKeptObjects ( value )",
    navigationLabel: "9.11 AddToKeptObjects ( value )",
    path: "/executable-code-and-execution-contexts/addtokeptobjects",
    source:
      "/src/content/09-executable-code-and-execution-contexts/11-addtokeptobjects.md",
    kicker: "9. 실행 가능 코드와 실행 컨텍스트",
  },
  {
    id: "cleanup-finalization-registry",
    title: "9.12 CleanupFinalizationRegistry ( finalizationRegistry )",
    navigationLabel:
      "9.12 CleanupFinalizationRegistry ( finalizationRegistry )",
    path: "/executable-code-and-execution-contexts/cleanup-finalization-registry",
    source:
      "/src/content/09-executable-code-and-execution-contexts/12-cleanup-finalization-registry.md",
    kicker: "9. 실행 가능 코드와 실행 컨텍스트",
  },
  {
    id: "canbeheldweakly",
    title: "9.13 CanBeHeldWeakly ( arg )",
    navigationLabel: "9.13 CanBeHeldWeakly ( arg )",
    path: "/executable-code-and-execution-contexts/canbeheldweakly",
    source:
      "/src/content/09-executable-code-and-execution-contexts/13-canbeheldweakly.md",
    kicker: "9. 실행 가능 코드와 실행 컨텍스트",
  },
  {
    id: "ordinary-object-internal-methods-and-internal-slots",
    title: "10.1 일반 객체의 내부 메서드와 내부 슬롯",
    navigationLabel: "10.1 일반 객체의 내부 메서드와 내부 슬롯",
    path: "/ordinary-and-exotic-objects-behaviours/ordinary-object-internal-methods-and-internal-slots",
    source:
      "/src/content/10-ordinary-and-exotic-objects-behaviours/01-ordinary-object-internal-methods-and-internal-slots.md",
    kicker: "10. 일반 객체와 특수 객체의 동작",
  },
  {
    id: "ecmascript-function-objects",
    title: "10.2 ECMAScript 함수 객체",
    navigationLabel: "10.2 ECMAScript 함수 객체",
    path: "/ordinary-and-exotic-objects-behaviours/ecmascript-function-objects",
    source:
      "/src/content/10-ordinary-and-exotic-objects-behaviours/02-ecmascript-function-objects.md",
    kicker: "10. 일반 객체와 특수 객체의 동작",
  },
  {
    id: "built-in-function-objects",
    title: "10.3 내장 함수 객체",
    navigationLabel: "10.3 내장 함수 객체",
    path: "/ordinary-and-exotic-objects-behaviours/built-in-function-objects",
    source:
      "/src/content/10-ordinary-and-exotic-objects-behaviours/03-built-in-function-objects.md",
    kicker: "10. 일반 객체와 특수 객체의 동작",
  },
  {
    id: "built-in-exotic-object-internal-methods-and-slots",
    title: "10.4 내장 특수 객체의 내부 메서드와 슬롯",
    navigationLabel: "10.4 내장 특수 객체의 내부 메서드와 슬롯",
    path: "/ordinary-and-exotic-objects-behaviours/built-in-exotic-object-internal-methods-and-slots",
    source:
      "/src/content/10-ordinary-and-exotic-objects-behaviours/04-built-in-exotic-object-internal-methods-and-slots.md",
    kicker: "10. 일반 객체와 특수 객체의 동작",
  },
  {
    id: "proxy-object-internal-methods-and-internal-slots",
    title: "10.5 Proxy 객체의 내부 메서드와 내부 슬롯",
    navigationLabel: "10.5 Proxy 객체의 내부 메서드와 내부 슬롯",
    path: "/ordinary-and-exotic-objects-behaviours/proxy-object-internal-methods-and-internal-slots",
    source:
      "/src/content/10-ordinary-and-exotic-objects-behaviours/05-proxy-object-internal-methods-and-internal-slots.md",
    kicker: "10. 일반 객체와 특수 객체의 동작",
  },
  {
    id: "source-text",
    title: "11.1 소스 텍스트",
    navigationLabel: "11.1 소스 텍스트",
    path: "/ecmascript-language-source-code/source-text",
    source: "/src/content/11-ecmascript-language-source-code/01-source-text.md",
    kicker: "11. ECMAScript 언어: 소스 텍스트",
  },
  {
    id: "types-of-source-code",
    title: "11.2 소스 코드의 유형",
    navigationLabel: "11.2 소스 코드의 유형",
    path: "/ecmascript-language-source-code/types-of-source-code",
    source:
      "/src/content/11-ecmascript-language-source-code/02-types-of-source-code.md",
    kicker: "11. ECMAScript 언어: 소스 텍스트",
  },
  {
    id: "unicode-format-control-characters",
    title: "12.1 유니코드 형식 제어 문자",
    navigationLabel: "12.1 유니코드 형식 제어 문자",
    path: "/ecmascript-language-lexical-grammar/unicode-format-control-characters",
    source:
      "/src/content/12-ecmascript-language-lexical-grammar/01-unicode-format-control-characters.md",
    kicker: "12. ECMAScript 언어: 어휘 문법",
  },
  {
    id: "white-space",
    title: "12.2 공백",
    navigationLabel: "12.2 공백",
    path: "/ecmascript-language-lexical-grammar/white-space",
    source:
      "/src/content/12-ecmascript-language-lexical-grammar/02-white-space.md",
    kicker: "12. ECMAScript 언어: 어휘 문법",
  },
  {
    id: "line-terminators",
    title: "12.3 줄 종결자",
    navigationLabel: "12.3 줄 종결자",
    path: "/ecmascript-language-lexical-grammar/line-terminators",
    source:
      "/src/content/12-ecmascript-language-lexical-grammar/03-line-terminators.md",
    kicker: "12. ECMAScript 언어: 어휘 문법",
  },
  {
    id: "comments",
    title: "12.4 주석",
    navigationLabel: "12.4 주석",
    path: "/ecmascript-language-lexical-grammar/comments",
    source:
      "/src/content/12-ecmascript-language-lexical-grammar/04-comments.md",
    kicker: "12. ECMAScript 언어: 어휘 문법",
  },
  {
    id: "hashbang",
    title: "12.5 해시뱅 주석",
    navigationLabel: "12.5 해시뱅 주석",
    path: "/ecmascript-language-lexical-grammar/hashbang",
    source:
      "/src/content/12-ecmascript-language-lexical-grammar/05-hashbang.md",
    kicker: "12. ECMAScript 언어: 어휘 문법",
  },
  {
    id: "tokens",
    title: "12.6 토큰",
    navigationLabel: "12.6 토큰",
    path: "/ecmascript-language-lexical-grammar/tokens",
    source: "/src/content/12-ecmascript-language-lexical-grammar/06-tokens.md",
    kicker: "12. ECMAScript 언어: 어휘 문법",
  },
  {
    id: "names-and-keywords",
    title: "12.7 이름과 키워드",
    navigationLabel: "12.7 이름과 키워드",
    path: "/ecmascript-language-lexical-grammar/names-and-keywords",
    source:
      "/src/content/12-ecmascript-language-lexical-grammar/07-names-and-keywords.md",
    kicker: "12. ECMAScript 언어: 어휘 문법",
  },
  {
    id: "punctuators",
    title: "12.8 구두점",
    navigationLabel: "12.8 구두점",
    path: "/ecmascript-language-lexical-grammar/punctuators",
    source:
      "/src/content/12-ecmascript-language-lexical-grammar/08-punctuators.md",
    kicker: "12. ECMAScript 언어: 어휘 문법",
  },
  {
    id: "ecmascript-language-lexical-grammar-literals",
    title: "12.9 리터럴",
    navigationLabel: "12.9 리터럴",
    path: "/ecmascript-language-lexical-grammar/ecmascript-language-lexical-grammar-literals",
    source:
      "/src/content/12-ecmascript-language-lexical-grammar/09-ecmascript-language-lexical-grammar-literals.md",
    kicker: "12. ECMAScript 언어: 어휘 문법",
  },
  {
    id: "automatic-semicolon-insertion",
    title: "12.10 세미콜론 자동 삽입",
    navigationLabel: "12.10 세미콜론 자동 삽입",
    path: "/ecmascript-language-lexical-grammar/automatic-semicolon-insertion",
    source:
      "/src/content/12-ecmascript-language-lexical-grammar/10-automatic-semicolon-insertion.md",
    kicker: "12. ECMAScript 언어: 어휘 문법",
  },
  {
    id: "identifiers",
    title: "13.1 식별자",
    navigationLabel: "13.1 식별자",
    path: "/ecmascript-language-expressions/identifiers",
    source: "/src/content/13-ecmascript-language-expressions/01-identifiers.md",
    kicker: "13. ECMAScript 언어: 표현식",
  },
  {
    id: "primary-expression",
    title: "13.2 기본 표현식",
    navigationLabel: "13.2 기본 표현식",
    path: "/ecmascript-language-expressions/primary-expression",
    source:
      "/src/content/13-ecmascript-language-expressions/02-primary-expression.md",
    kicker: "13. ECMAScript 언어: 표현식",
  },
  {
    id: "left-hand-side-expressions",
    title: "13.3 좌변 표현식",
    navigationLabel: "13.3 좌변 표현식",
    path: "/ecmascript-language-expressions/left-hand-side-expressions",
    source:
      "/src/content/13-ecmascript-language-expressions/03-left-hand-side-expressions.md",
    kicker: "13. ECMAScript 언어: 표현식",
  },
  {
    id: "update-expressions",
    title: "13.4 갱신 표현식",
    navigationLabel: "13.4 갱신 표현식",
    path: "/ecmascript-language-expressions/update-expressions",
    source:
      "/src/content/13-ecmascript-language-expressions/04-update-expressions.md",
    kicker: "13. ECMAScript 언어: 표현식",
  },
  {
    id: "unary-operators",
    title: "13.5 단항 연산자",
    navigationLabel: "13.5 단항 연산자",
    path: "/ecmascript-language-expressions/unary-operators",
    source:
      "/src/content/13-ecmascript-language-expressions/05-unary-operators.md",
    kicker: "13. ECMAScript 언어: 표현식",
  },
  {
    id: "exp-operator",
    title: "13.6 지수 연산자",
    navigationLabel: "13.6 지수 연산자",
    path: "/ecmascript-language-expressions/exp-operator",
    source:
      "/src/content/13-ecmascript-language-expressions/06-exp-operator.md",
    kicker: "13. ECMAScript 언어: 표현식",
  },
  {
    id: "multiplicative-operators",
    title: "13.7 곱셈 연산자",
    navigationLabel: "13.7 곱셈 연산자",
    path: "/ecmascript-language-expressions/multiplicative-operators",
    source:
      "/src/content/13-ecmascript-language-expressions/07-multiplicative-operators.md",
    kicker: "13. ECMAScript 언어: 표현식",
  },
  {
    id: "additive-operators",
    title: "13.8 덧셈 연산자",
    navigationLabel: "13.8 덧셈 연산자",
    path: "/ecmascript-language-expressions/additive-operators",
    source:
      "/src/content/13-ecmascript-language-expressions/08-additive-operators.md",
    kicker: "13. ECMAScript 언어: 표현식",
  },
  {
    id: "bitwise-shift-operators",
    title: "13.9 비트 시프트 연산자",
    navigationLabel: "13.9 비트 시프트 연산자",
    path: "/ecmascript-language-expressions/bitwise-shift-operators",
    source:
      "/src/content/13-ecmascript-language-expressions/09-bitwise-shift-operators.md",
    kicker: "13. ECMAScript 언어: 표현식",
  },
  {
    id: "relational-operators",
    title: "13.10 관계 연산자",
    navigationLabel: "13.10 관계 연산자",
    path: "/ecmascript-language-expressions/relational-operators",
    source:
      "/src/content/13-ecmascript-language-expressions/10-relational-operators.md",
    kicker: "13. ECMAScript 언어: 표현식",
  },
  {
    id: "equality-operators",
    title: "13.11 동등성 연산자",
    navigationLabel: "13.11 동등성 연산자",
    path: "/ecmascript-language-expressions/equality-operators",
    source:
      "/src/content/13-ecmascript-language-expressions/11-equality-operators.md",
    kicker: "13. ECMAScript 언어: 표현식",
  },
  {
    id: "binary-bitwise-operators",
    title: "13.12 이항 비트 연산자",
    navigationLabel: "13.12 이항 비트 연산자",
    path: "/ecmascript-language-expressions/binary-bitwise-operators",
    source:
      "/src/content/13-ecmascript-language-expressions/12-binary-bitwise-operators.md",
    kicker: "13. ECMAScript 언어: 표현식",
  },
  {
    id: "binary-logical-operators",
    title: "13.13 이항 논리 연산자",
    navigationLabel: "13.13 이항 논리 연산자",
    path: "/ecmascript-language-expressions/binary-logical-operators",
    source:
      "/src/content/13-ecmascript-language-expressions/13-binary-logical-operators.md",
    kicker: "13. ECMAScript 언어: 표현식",
  },
  {
    id: "conditional-operator",
    title: "13.14 조건 연산자 ( ? : )",
    navigationLabel: "13.14 조건 연산자 ( ? : )",
    path: "/ecmascript-language-expressions/conditional-operator",
    source:
      "/src/content/13-ecmascript-language-expressions/14-conditional-operator.md",
    kicker: "13. ECMAScript 언어: 표현식",
  },
  {
    id: "assignment-operators",
    title: "13.15 할당 연산자",
    navigationLabel: "13.15 할당 연산자",
    path: "/ecmascript-language-expressions/assignment-operators",
    source:
      "/src/content/13-ecmascript-language-expressions/15-assignment-operators.md",
    kicker: "13. ECMAScript 언어: 표현식",
  },
  {
    id: "comma-operator",
    title: "13.16 쉼표 연산자 ( , )",
    navigationLabel: "13.16 쉼표 연산자 ( , )",
    path: "/ecmascript-language-expressions/comma-operator",
    source:
      "/src/content/13-ecmascript-language-expressions/16-comma-operator.md",
    kicker: "13. ECMAScript 언어: 표현식",
  },
  {
    id: "statement-semantics",
    title: "14.1 문의 의미론",
    navigationLabel: "14.1 문의 의미론",
    path: "/ecmascript-language-statements-and-declarations/statement-semantics",
    source:
      "/src/content/14-ecmascript-language-statements-and-declarations/01-statement-semantics.md",
    kicker: "14. ECMAScript 언어: 문과 선언",
  },
  {
    id: "block",
    title: "14.2 블록",
    navigationLabel: "14.2 블록",
    path: "/ecmascript-language-statements-and-declarations/block",
    source:
      "/src/content/14-ecmascript-language-statements-and-declarations/02-block.md",
    kicker: "14. ECMAScript 언어: 문과 선언",
  },
  {
    id: "declarations-and-the-variable-statement",
    title: "14.3 선언과 변수 문",
    navigationLabel: "14.3 선언과 변수 문",
    path: "/ecmascript-language-statements-and-declarations/declarations-and-the-variable-statement",
    source:
      "/src/content/14-ecmascript-language-statements-and-declarations/03-declarations-and-the-variable-statement.md",
    kicker: "14. ECMAScript 언어: 문과 선언",
  },
  {
    id: "empty-statement",
    title: "14.4 빈 문",
    navigationLabel: "14.4 빈 문",
    path: "/ecmascript-language-statements-and-declarations/empty-statement",
    source:
      "/src/content/14-ecmascript-language-statements-and-declarations/04-empty-statement.md",
    kicker: "14. ECMAScript 언어: 문과 선언",
  },
  {
    id: "expression-statement",
    title: "14.5 표현식 문",
    navigationLabel: "14.5 표현식 문",
    path: "/ecmascript-language-statements-and-declarations/expression-statement",
    source:
      "/src/content/14-ecmascript-language-statements-and-declarations/05-expression-statement.md",
    kicker: "14. ECMAScript 언어: 문과 선언",
  },
  {
    id: "if-statement",
    title: "14.6 if 문",
    navigationLabel: "14.6 if 문",
    path: "/ecmascript-language-statements-and-declarations/if-statement",
    source:
      "/src/content/14-ecmascript-language-statements-and-declarations/06-if-statement.md",
    kicker: "14. ECMAScript 언어: 문과 선언",
  },
  {
    id: "iteration-statements",
    title: "14.7 반복 문",
    navigationLabel: "14.7 반복 문",
    path: "/ecmascript-language-statements-and-declarations/iteration-statements",
    source:
      "/src/content/14-ecmascript-language-statements-and-declarations/07-iteration-statements.md",
    kicker: "14. ECMAScript 언어: 문과 선언",
  },
  {
    id: "continue-statement",
    title: "14.8 continue 문",
    navigationLabel: "14.8 continue 문",
    path: "/ecmascript-language-statements-and-declarations/continue-statement",
    source:
      "/src/content/14-ecmascript-language-statements-and-declarations/08-continue-statement.md",
    kicker: "14. ECMAScript 언어: 문과 선언",
  },
  {
    id: "break-statement",
    title: "14.9 break 문",
    navigationLabel: "14.9 break 문",
    path: "/ecmascript-language-statements-and-declarations/break-statement",
    source:
      "/src/content/14-ecmascript-language-statements-and-declarations/09-break-statement.md",
    kicker: "14. ECMAScript 언어: 문과 선언",
  },
  {
    id: "return-statement",
    title: "14.10 return 문",
    navigationLabel: "14.10 return 문",
    path: "/ecmascript-language-statements-and-declarations/return-statement",
    source:
      "/src/content/14-ecmascript-language-statements-and-declarations/10-return-statement.md",
    kicker: "14. ECMAScript 언어: 문과 선언",
  },
  {
    id: "with-statement",
    title: "14.11 with 문",
    navigationLabel: "14.11 with 문",
    path: "/ecmascript-language-statements-and-declarations/with-statement",
    source:
      "/src/content/14-ecmascript-language-statements-and-declarations/11-with-statement.md",
    kicker: "14. ECMAScript 언어: 문과 선언",
  },
  {
    id: "switch-statement",
    title: "14.12 switch 문",
    navigationLabel: "14.12 switch 문",
    path: "/ecmascript-language-statements-and-declarations/switch-statement",
    source:
      "/src/content/14-ecmascript-language-statements-and-declarations/12-switch-statement.md",
    kicker: "14. ECMAScript 언어: 문과 선언",
  },
  {
    id: "labelled-statements",
    title: "14.13 레이블 문",
    navigationLabel: "14.13 레이블 문",
    path: "/ecmascript-language-statements-and-declarations/labelled-statements",
    source:
      "/src/content/14-ecmascript-language-statements-and-declarations/13-labelled-statements.md",
    kicker: "14. ECMAScript 언어: 문과 선언",
  },
  {
    id: "throw-statement",
    title: "14.14 throw 문",
    navigationLabel: "14.14 throw 문",
    path: "/ecmascript-language-statements-and-declarations/throw-statement",
    source:
      "/src/content/14-ecmascript-language-statements-and-declarations/14-throw-statement.md",
    kicker: "14. ECMAScript 언어: 문과 선언",
  },
  {
    id: "try-statement",
    title: "14.15 try 문",
    navigationLabel: "14.15 try 문",
    path: "/ecmascript-language-statements-and-declarations/try-statement",
    source:
      "/src/content/14-ecmascript-language-statements-and-declarations/15-try-statement.md",
    kicker: "14. ECMAScript 언어: 문과 선언",
  },
  {
    id: "debugger-statement",
    title: "14.16 debugger 문",
    navigationLabel: "14.16 debugger 문",
    path: "/ecmascript-language-statements-and-declarations/debugger-statement",
    source:
      "/src/content/14-ecmascript-language-statements-and-declarations/16-debugger-statement.md",
    kicker: "14. ECMAScript 언어: 문과 선언",
  },
  {
    id: "parameter-lists",
    title: "15.1 매개변수 목록",
    navigationLabel: "15.1 매개변수 목록",
    path: "/ecmascript-language-functions-and-classes/parameter-lists",
    source:
      "/src/content/15-ecmascript-language-functions-and-classes/01-parameter-lists.md",
    kicker: "15. ECMAScript 언어: 함수와 클래스",
  },
  {
    id: "function-definitions",
    title: "15.2 함수 정의",
    navigationLabel: "15.2 함수 정의",
    path: "/ecmascript-language-functions-and-classes/function-definitions",
    source:
      "/src/content/15-ecmascript-language-functions-and-classes/02-function-definitions.md",
    kicker: "15. ECMAScript 언어: 함수와 클래스",
  },
  {
    id: "arrow-function-definitions",
    title: "15.3 화살표 함수 정의",
    navigationLabel: "15.3 화살표 함수 정의",
    path: "/ecmascript-language-functions-and-classes/arrow-function-definitions",
    source:
      "/src/content/15-ecmascript-language-functions-and-classes/03-arrow-function-definitions.md",
    kicker: "15. ECMAScript 언어: 함수와 클래스",
  },
  {
    id: "method-definitions",
    title: "15.4 메서드 정의",
    navigationLabel: "15.4 메서드 정의",
    path: "/ecmascript-language-functions-and-classes/method-definitions",
    source:
      "/src/content/15-ecmascript-language-functions-and-classes/04-method-definitions.md",
    kicker: "15. ECMAScript 언어: 함수와 클래스",
  },
  {
    id: "generator-function-definitions",
    title: "15.5 제너레이터 함수 정의",
    navigationLabel: "15.5 제너레이터 함수 정의",
    path: "/ecmascript-language-functions-and-classes/generator-function-definitions",
    source:
      "/src/content/15-ecmascript-language-functions-and-classes/05-generator-function-definitions.md",
    kicker: "15. ECMAScript 언어: 함수와 클래스",
  },
  {
    id: "async-generator-function-definitions",
    title: "15.6 비동기 제너레이터 함수 정의",
    navigationLabel: "15.6 비동기 제너레이터 함수 정의",
    path: "/ecmascript-language-functions-and-classes/async-generator-function-definitions",
    source:
      "/src/content/15-ecmascript-language-functions-and-classes/06-async-generator-function-definitions.md",
    kicker: "15. ECMAScript 언어: 함수와 클래스",
  },
  {
    id: "class-definitions",
    title: "15.7 클래스 정의",
    navigationLabel: "15.7 클래스 정의",
    path: "/ecmascript-language-functions-and-classes/class-definitions",
    source:
      "/src/content/15-ecmascript-language-functions-and-classes/07-class-definitions.md",
    kicker: "15. ECMAScript 언어: 함수와 클래스",
  },
  {
    id: "async-function-definitions",
    title: "15.8 비동기 함수 정의",
    navigationLabel: "15.8 비동기 함수 정의",
    path: "/ecmascript-language-functions-and-classes/async-function-definitions",
    source:
      "/src/content/15-ecmascript-language-functions-and-classes/08-async-function-definitions.md",
    kicker: "15. ECMAScript 언어: 함수와 클래스",
  },
  {
    id: "async-arrow-function-definitions",
    title: "15.9 비동기 화살표 함수 정의",
    navigationLabel: "15.9 비동기 화살표 함수 정의",
    path: "/ecmascript-language-functions-and-classes/async-arrow-function-definitions",
    source:
      "/src/content/15-ecmascript-language-functions-and-classes/09-async-arrow-function-definitions.md",
    kicker: "15. ECMAScript 언어: 함수와 클래스",
  },
  {
    id: "tail-position-calls",
    title: "15.10 꼬리 위치 호출",
    navigationLabel: "15.10 꼬리 위치 호출",
    path: "/ecmascript-language-functions-and-classes/tail-position-calls",
    source:
      "/src/content/15-ecmascript-language-functions-and-classes/10-tail-position-calls.md",
    kicker: "15. ECMAScript 언어: 함수와 클래스",
  },
  {
    id: "scripts",
    title: "16.1 스크립트",
    navigationLabel: "16.1 스크립트",
    path: "/ecmascript-language-scripts-and-modules/scripts",
    source:
      "/src/content/16-ecmascript-language-scripts-and-modules/01-scripts.md",
    kicker: "16. ECMAScript 언어: 스크립트와 모듈",
  },
  {
    id: "modules",
    title: "16.2 모듈",
    navigationLabel: "16.2 모듈",
    path: "/ecmascript-language-scripts-and-modules/modules",
    source:
      "/src/content/16-ecmascript-language-scripts-and-modules/02-modules.md",
    kicker: "16. ECMAScript 언어: 스크립트와 모듈",
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
    id: "ecmascript-standard-built-in-objects",
    title: "18. ECMAScript 표준 내장 객체",
    navigationLabel: "18. ECMAScript 표준 내장 객체",
    path: "/ecmascript-standard-built-in-objects",
    source: "/src/content/18-ecmascript-standard-built-in-objects/index.md",
    kicker: "ECMA-262 비공식 한국어 번역",
  },
  {
    id: "value-properties-of-the-global-object",
    title: "19.1 전역 객체의 값 속성",
    navigationLabel: "19.1 전역 객체의 값 속성",
    path: "/global-object/value-properties-of-the-global-object",
    source:
      "/src/content/19-global-object/01-value-properties-of-the-global-object.md",
    kicker: "19. 전역 객체",
  },
  {
    id: "function-properties-of-the-global-object",
    title: "19.2 전역 객체의 함수 속성",
    navigationLabel: "19.2 전역 객체의 함수 속성",
    path: "/global-object/function-properties-of-the-global-object",
    source:
      "/src/content/19-global-object/02-function-properties-of-the-global-object.md",
    kicker: "19. 전역 객체",
  },
  {
    id: "constructor-properties-of-the-global-object",
    title: "19.3 전역 객체의 생성자 속성",
    navigationLabel: "19.3 전역 객체의 생성자 속성",
    path: "/global-object/constructor-properties-of-the-global-object",
    source:
      "/src/content/19-global-object/03-constructor-properties-of-the-global-object.md",
    kicker: "19. 전역 객체",
  },
  {
    id: "other-properties-of-the-global-object",
    title: "19.4 전역 객체의 기타 속성",
    navigationLabel: "19.4 전역 객체의 기타 속성",
    path: "/global-object/other-properties-of-the-global-object",
    source:
      "/src/content/19-global-object/04-other-properties-of-the-global-object.md",
    kicker: "19. 전역 객체",
  },
  {
    id: "object-objects",
    title: "20.1 Object 객체",
    navigationLabel: "20.1 Object 객체",
    path: "/fundamental-objects/object-objects",
    source: "/src/content/20-fundamental-objects/01-object-objects.md",
    kicker: "20. 기본 객체",
  },
  {
    id: "function-objects",
    title: "20.2 Function 객체",
    navigationLabel: "20.2 Function 객체",
    path: "/fundamental-objects/function-objects",
    source: "/src/content/20-fundamental-objects/02-function-objects.md",
    kicker: "20. 기본 객체",
  },
  {
    id: "boolean-objects",
    title: "20.3 Boolean 객체",
    navigationLabel: "20.3 Boolean 객체",
    path: "/fundamental-objects/boolean-objects",
    source: "/src/content/20-fundamental-objects/03-boolean-objects.md",
    kicker: "20. 기본 객체",
  },
  {
    id: "symbol-objects",
    title: "20.4 Symbol 객체",
    navigationLabel: "20.4 Symbol 객체",
    path: "/fundamental-objects/symbol-objects",
    source: "/src/content/20-fundamental-objects/04-symbol-objects.md",
    kicker: "20. 기본 객체",
  },
  {
    id: "error-objects",
    title: "20.5 Error 객체",
    navigationLabel: "20.5 Error 객체",
    path: "/fundamental-objects/error-objects",
    source: "/src/content/20-fundamental-objects/05-error-objects.md",
    kicker: "20. 기본 객체",
  },
  {
    id: "number-objects",
    title: "21.1 Number 객체",
    navigationLabel: "21.1 Number 객체",
    path: "/numbers-and-dates/number-objects",
    source: "/src/content/21-numbers-and-dates/01-number-objects.md",
    kicker: "21. 숫자와 날짜",
  },
  {
    id: "bigint-objects",
    title: "21.2 BigInt 객체",
    navigationLabel: "21.2 BigInt 객체",
    path: "/numbers-and-dates/bigint-objects",
    source: "/src/content/21-numbers-and-dates/02-bigint-objects.md",
    kicker: "21. 숫자와 날짜",
  },
  {
    id: "math-object",
    title: "21.3 Math 객체",
    navigationLabel: "21.3 Math 객체",
    path: "/numbers-and-dates/math-object",
    source: "/src/content/21-numbers-and-dates/03-math-object.md",
    kicker: "21. 숫자와 날짜",
  },
  {
    id: "date-objects",
    title: "21.4 Date 객체",
    navigationLabel: "21.4 Date 객체",
    path: "/numbers-and-dates/date-objects",
    source: "/src/content/21-numbers-and-dates/04-date-objects.md",
    kicker: "21. 숫자와 날짜",
  },
  {
    id: "string-objects",
    title: "22.1 String 객체",
    navigationLabel: "22.1 String 객체",
    path: "/text-processing/string-objects",
    source: "/src/content/22-text-processing/01-string-objects.md",
    kicker: "22. 텍스트 처리",
  },
  {
    id: "regexp-regular-expression-objects",
    title: "22.2 RegExp(정규 표현식) 객체",
    navigationLabel: "22.2 RegExp(정규 표현식) 객체",
    path: "/text-processing/regexp-regular-expression-objects",
    source:
      "/src/content/22-text-processing/02-regexp-regular-expression-objects.md",
    kicker: "22. 텍스트 처리",
  },
  {
    id: "array-objects",
    title: "23.1 Array 객체",
    navigationLabel: "23.1 Array 객체",
    path: "/indexed-collections/array-objects",
    source: "/src/content/23-indexed-collections/01-array-objects.md",
    kicker: "23. 인덱스 기반 컬렉션",
  },
  {
    id: "typedarray-objects",
    title: "23.2 TypedArray 객체",
    navigationLabel: "23.2 TypedArray 객체",
    path: "/indexed-collections/typedarray-objects",
    source: "/src/content/23-indexed-collections/02-typedarray-objects.md",
    kicker: "23. 인덱스 기반 컬렉션",
  },
  {
    id: "uint8array",
    title: "23.3 Uint8Array 객체",
    navigationLabel: "23.3 Uint8Array 객체",
    path: "/indexed-collections/uint8array",
    source: "/src/content/23-indexed-collections/03-uint8array.md",
    kicker: "23. 인덱스 기반 컬렉션",
  },
  {
    id: "map-objects",
    title: "24.1 Map 객체",
    navigationLabel: "24.1 Map 객체",
    path: "/keyed-collections/map-objects",
    source: "/src/content/24-keyed-collections/01-map-objects.md",
    kicker: "24. 키 기반 컬렉션",
  },
  {
    id: "set-objects",
    title: "24.2 Set 객체",
    navigationLabel: "24.2 Set 객체",
    path: "/keyed-collections/set-objects",
    source: "/src/content/24-keyed-collections/02-set-objects.md",
    kicker: "24. 키 기반 컬렉션",
  },
  {
    id: "weakmap-objects",
    title: "24.3 WeakMap 객체",
    navigationLabel: "24.3 WeakMap 객체",
    path: "/keyed-collections/weakmap-objects",
    source: "/src/content/24-keyed-collections/03-weakmap-objects.md",
    kicker: "24. 키 기반 컬렉션",
  },
  {
    id: "weakset-objects",
    title: "24.4 WeakSet 객체",
    navigationLabel: "24.4 WeakSet 객체",
    path: "/keyed-collections/weakset-objects",
    source: "/src/content/24-keyed-collections/04-weakset-objects.md",
    kicker: "24. 키 기반 컬렉션",
  },
  {
    id: "abstract-operations-for-keyed-collections",
    title: "24.5 키 기반 컬렉션을 위한 추상 연산",
    navigationLabel: "24.5 키 기반 컬렉션을 위한 추상 연산",
    path: "/keyed-collections/abstract-operations-for-keyed-collections",
    source:
      "/src/content/24-keyed-collections/05-abstract-operations-for-keyed-collections.md",
    kicker: "24. 키 기반 컬렉션",
  },
  {
    id: "arraybuffer-objects",
    title: "25.1 ArrayBuffer 객체",
    navigationLabel: "25.1 ArrayBuffer 객체",
    path: "/structured-data/arraybuffer-objects",
    source: "/src/content/25-structured-data/01-arraybuffer-objects.md",
    kicker: "25. 구조화된 데이터",
  },
  {
    id: "sharedarraybuffer-objects",
    title: "25.2 SharedArrayBuffer 객체",
    navigationLabel: "25.2 SharedArrayBuffer 객체",
    path: "/structured-data/sharedarraybuffer-objects",
    source: "/src/content/25-structured-data/02-sharedarraybuffer-objects.md",
    kicker: "25. 구조화된 데이터",
  },
  {
    id: "dataview-objects",
    title: "25.3 DataView 객체",
    navigationLabel: "25.3 DataView 객체",
    path: "/structured-data/dataview-objects",
    source: "/src/content/25-structured-data/03-dataview-objects.md",
    kicker: "25. 구조화된 데이터",
  },
  {
    id: "atomics-object",
    title: "25.4 Atomics 객체",
    navigationLabel: "25.4 Atomics 객체",
    path: "/structured-data/atomics-object",
    source: "/src/content/25-structured-data/04-atomics-object.md",
    kicker: "25. 구조화된 데이터",
  },
  {
    id: "json-object",
    title: "25.5 JSON 객체",
    navigationLabel: "25.5 JSON 객체",
    path: "/structured-data/json-object",
    source: "/src/content/25-structured-data/05-json-object.md",
    kicker: "25. 구조화된 데이터",
  },
  {
    id: "weak-ref-objects",
    title: "26.1 WeakRef 객체",
    navigationLabel: "26.1 WeakRef 객체",
    path: "/managing-memory/weak-ref-objects",
    source: "/src/content/26-managing-memory/01-weak-ref-objects.md",
    kicker: "26. 메모리 관리",
  },
  {
    id: "finalization-registry-objects",
    title: "26.2 FinalizationRegistry 객체",
    navigationLabel: "26.2 FinalizationRegistry 객체",
    path: "/managing-memory/finalization-registry-objects",
    source:
      "/src/content/26-managing-memory/02-finalization-registry-objects.md",
    kicker: "26. 메모리 관리",
  },
  {
    id: "iteration",
    title: "27.1 반복",
    navigationLabel: "27.1 반복",
    path: "/control-abstraction-objects/iteration",
    source: "/src/content/27-control-abstraction-objects/01-iteration.md",
    kicker: "27. 제어 추상화 객체",
  },
  {
    id: "resource-management",
    title: "27.2 리소스 관리",
    navigationLabel: "27.2 리소스 관리",
    path: "/control-abstraction-objects/resource-management",
    source:
      "/src/content/27-control-abstraction-objects/02-resource-management.md",
    kicker: "27. 제어 추상화 객체",
  },
  {
    id: "disposablestack-objects",
    title: "27.3 DisposableStack 객체",
    navigationLabel: "27.3 DisposableStack 객체",
    path: "/control-abstraction-objects/disposablestack-objects",
    source:
      "/src/content/27-control-abstraction-objects/03-disposablestack-objects.md",
    kicker: "27. 제어 추상화 객체",
  },
  {
    id: "asyncdisposablestack-objects",
    title: "27.4 AsyncDisposableStack 객체",
    navigationLabel: "27.4 AsyncDisposableStack 객체",
    path: "/control-abstraction-objects/asyncdisposablestack-objects",
    source:
      "/src/content/27-control-abstraction-objects/04-asyncdisposablestack-objects.md",
    kicker: "27. 제어 추상화 객체",
  },
  {
    id: "promise-objects",
    title: "27.5 Promise 객체",
    navigationLabel: "27.5 Promise 객체",
    path: "/control-abstraction-objects/promise-objects",
    source: "/src/content/27-control-abstraction-objects/05-promise-objects.md",
    kicker: "27. 제어 추상화 객체",
  },
  {
    id: "generatorfunction-objects",
    title: "27.6 GeneratorFunction 객체",
    navigationLabel: "27.6 GeneratorFunction 객체",
    path: "/control-abstraction-objects/generatorfunction-objects",
    source:
      "/src/content/27-control-abstraction-objects/06-generatorfunction-objects.md",
    kicker: "27. 제어 추상화 객체",
  },
  {
    id: "asyncgeneratorfunction-objects",
    title: "27.7 AsyncGeneratorFunction 객체",
    navigationLabel: "27.7 AsyncGeneratorFunction 객체",
    path: "/control-abstraction-objects/asyncgeneratorfunction-objects",
    source:
      "/src/content/27-control-abstraction-objects/07-asyncgeneratorfunction-objects.md",
    kicker: "27. 제어 추상화 객체",
  },
  {
    id: "generator-objects",
    title: "27.8 Generator 객체",
    navigationLabel: "27.8 Generator 객체",
    path: "/control-abstraction-objects/generator-objects",
    source:
      "/src/content/27-control-abstraction-objects/08-generator-objects.md",
    kicker: "27. 제어 추상화 객체",
  },
  {
    id: "asyncgenerator-objects",
    title: "27.9 AsyncGenerator 객체",
    navigationLabel: "27.9 AsyncGenerator 객체",
    path: "/control-abstraction-objects/asyncgenerator-objects",
    source:
      "/src/content/27-control-abstraction-objects/09-asyncgenerator-objects.md",
    kicker: "27. 제어 추상화 객체",
  },
  {
    id: "async-function-objects",
    title: "27.10 AsyncFunction 객체",
    navigationLabel: "27.10 AsyncFunction 객체",
    path: "/control-abstraction-objects/async-function-objects",
    source:
      "/src/content/27-control-abstraction-objects/10-async-function-objects.md",
    kicker: "27. 제어 추상화 객체",
  },
  {
    id: "reflect-object",
    title: "28.1 Reflect 객체",
    navigationLabel: "28.1 Reflect 객체",
    path: "/reflection/reflect-object",
    source: "/src/content/28-reflection/01-reflect-object.md",
    kicker: "28. 리플렉션",
  },
  {
    id: "proxy-objects",
    title: "28.2 Proxy 객체",
    navigationLabel: "28.2 Proxy 객체",
    path: "/reflection/proxy-objects",
    source: "/src/content/28-reflection/02-proxy-objects.md",
    kicker: "28. 리플렉션",
  },
  {
    id: "module-namespace-objects",
    title: "28.3 모듈 네임스페이스 객체",
    navigationLabel: "28.3 모듈 네임스페이스 객체",
    path: "/reflection/module-namespace-objects",
    source: "/src/content/28-reflection/03-module-namespace-objects.md",
    kicker: "28. 리플렉션",
  },
  {
    id: "memory-model-fundamentals",
    title: "29.1 메모리 모델의 기초",
    navigationLabel: "29.1 메모리 모델의 기초",
    path: "/memory-model/memory-model-fundamentals",
    source: "/src/content/29-memory-model/01-memory-model-fundamentals.md",
    kicker: "29. 메모리 모델",
  },
  {
    id: "agent-event-records",
    title: "29.2 에이전트 이벤트 레코드",
    navigationLabel: "29.2 에이전트 이벤트 레코드",
    path: "/memory-model/agent-event-records",
    source: "/src/content/29-memory-model/02-agent-event-records.md",
    kicker: "29. 메모리 모델",
  },
  {
    id: "chosen-value-records",
    title: "29.3 선택된 값 레코드",
    navigationLabel: "29.3 선택된 값 레코드",
    path: "/memory-model/chosen-value-records",
    source: "/src/content/29-memory-model/03-chosen-value-records.md",
    kicker: "29. 메모리 모델",
  },
  {
    id: "candidate-executions",
    title: "29.4 후보 실행",
    navigationLabel: "29.4 후보 실행",
    path: "/memory-model/candidate-executions",
    source: "/src/content/29-memory-model/04-candidate-executions.md",
    kicker: "29. 메모리 모델",
  },
  {
    id: "abstract-operations-for-the-memory-model",
    title: "29.5 메모리 모델을 위한 추상 연산",
    navigationLabel: "29.5 메모리 모델을 위한 추상 연산",
    path: "/memory-model/abstract-operations-for-the-memory-model",
    source:
      "/src/content/29-memory-model/05-abstract-operations-for-the-memory-model.md",
    kicker: "29. 메모리 모델",
  },
  {
    id: "relations-of-candidate-executions",
    title: "29.6 후보 실행의 관계",
    navigationLabel: "29.6 후보 실행의 관계",
    path: "/memory-model/relations-of-candidate-executions",
    source:
      "/src/content/29-memory-model/06-relations-of-candidate-executions.md",
    kicker: "29. 메모리 모델",
  },
  {
    id: "properties-of-valid-executions",
    title: "29.7 유효한 실행의 속성",
    navigationLabel: "29.7 유효한 실행의 속성",
    path: "/memory-model/properties-of-valid-executions",
    source: "/src/content/29-memory-model/07-properties-of-valid-executions.md",
    kicker: "29. 메모리 모델",
  },
  {
    id: "races",
    title: "29.8 경합",
    navigationLabel: "29.8 경합",
    path: "/memory-model/races",
    source: "/src/content/29-memory-model/08-races.md",
    kicker: "29. 메모리 모델",
  },
  {
    id: "data-races",
    title: "29.9 데이터 경합",
    navigationLabel: "29.9 데이터 경합",
    path: "/memory-model/data-races",
    source: "/src/content/29-memory-model/09-data-races.md",
    kicker: "29. 메모리 모델",
  },
  {
    id: "data-race-freedom",
    title: "29.10 데이터 경합 부재",
    navigationLabel: "29.10 데이터 경합 부재",
    path: "/memory-model/data-race-freedom",
    source: "/src/content/29-memory-model/10-data-race-freedom.md",
    kicker: "29. 메모리 모델",
  },
  {
    id: "shared-memory-guidelines",
    title: "29.11 공유 메모리 지침",
    navigationLabel: "29.11 공유 메모리 지침",
    path: "/memory-model/shared-memory-guidelines",
    source: "/src/content/29-memory-model/11-shared-memory-guidelines.md",
    kicker: "29. 메모리 모델",
  },
  {
    id: "lexical-grammar",
    title: "A.1 어휘 문법",
    navigationLabel: "A.1 어휘 문법",
    path: "/annex-a/lexical-grammar",
    source: "/src/content/annex-a/01-lexical-grammar.md",
    kicker: "부록 A (참고) 문법 요약",
  },
  {
    id: "expressions",
    title: "A.2 표현식",
    navigationLabel: "A.2 표현식",
    path: "/annex-a/expressions",
    source: "/src/content/annex-a/02-expressions.md",
    kicker: "부록 A (참고) 문법 요약",
  },
  {
    id: "statements",
    title: "A.3 문",
    navigationLabel: "A.3 문",
    path: "/annex-a/statements",
    source: "/src/content/annex-a/03-statements.md",
    kicker: "부록 A (참고) 문법 요약",
  },
  {
    id: "functions-and-classes",
    title: "A.4 함수와 클래스",
    navigationLabel: "A.4 함수와 클래스",
    path: "/annex-a/functions-and-classes",
    source: "/src/content/annex-a/04-functions-and-classes.md",
    kicker: "부록 A (참고) 문법 요약",
  },
  {
    id: "scripts-and-modules",
    title: "A.5 스크립트와 모듈",
    navigationLabel: "A.5 스크립트와 모듈",
    path: "/annex-a/scripts-and-modules",
    source: "/src/content/annex-a/05-scripts-and-modules.md",
    kicker: "부록 A (참고) 문법 요약",
  },
  {
    id: "number-conversions",
    title: "A.6 숫자 변환",
    navigationLabel: "A.6 숫자 변환",
    path: "/annex-a/number-conversions",
    source: "/src/content/annex-a/06-number-conversions.md",
    kicker: "부록 A (참고) 문법 요약",
  },
  {
    id: "time-zone-offset-string-format",
    title: "A.7 시간대 오프셋 문자열 형식",
    navigationLabel: "A.7 시간대 오프셋 문자열 형식",
    path: "/annex-a/time-zone-offset-string-format",
    source: "/src/content/annex-a/07-time-zone-offset-string-format.md",
    kicker: "부록 A (참고) 문법 요약",
  },
  {
    id: "regular-expressions",
    title: "A.8 정규 표현식",
    navigationLabel: "A.8 정규 표현식",
    path: "/annex-a/regular-expressions",
    source: "/src/content/annex-a/08-regular-expressions.md",
    kicker: "부록 A (참고) 문법 요약",
  },
  {
    id: "additional-syntax",
    title: "B.1 추가 구문",
    navigationLabel: "B.1 추가 구문",
    path: "/annex-b/additional-syntax",
    source: "/src/content/annex-b/01-additional-syntax.md",
    kicker: "부록 B (규범) 웹 브라우저를 위한 추가 ECMAScript 기능",
  },
  {
    id: "additional-built-in-properties",
    title: "B.2 추가 내장 속성",
    navigationLabel: "B.2 추가 내장 속성",
    path: "/annex-b/additional-built-in-properties",
    source: "/src/content/annex-b/02-additional-built-in-properties.md",
    kicker: "부록 B (규범) 웹 브라우저를 위한 추가 ECMAScript 기능",
  },
  {
    id: "other-additional-features",
    title: "B.3 기타 추가 기능",
    navigationLabel: "B.3 기타 추가 기능",
    path: "/annex-b/other-additional-features",
    source: "/src/content/annex-b/03-other-additional-features.md",
    kicker: "부록 B (규범) 웹 브라우저를 위한 추가 ECMAScript 기능",
  },
  {
    id: "strict-mode-of-ecmascript",
    title: "부록 C (참고) ECMAScript 엄격 모드",
    navigationLabel: "부록 C (참고) ECMAScript 엄격 모드",
    path: "/annex-c",
    source: "/src/content/annex-c/index.md",
    kicker: "부록 C (참고) ECMAScript 엄격 모드",
  },
  {
    id: "host-layering-points-introduction",
    title: "부록 D (참고) 호스트 계층화 지점",
    navigationLabel: "부록 D (참고) 호스트 계층화 지점",
    path: "/annex-d",
    source: "/src/content/annex-d/index.md",
    kicker: "부록 D (참고) 호스트 계층화 지점",
  },
  {
    id: "host-hooks-summary",
    title: "D.1 호스트 훅",
    navigationLabel: "D.1 호스트 훅",
    path: "/annex-d/host-hooks-summary",
    source: "/src/content/annex-d/01-host-hooks-summary.md",
    kicker: "부록 D (참고) 호스트 계층화 지점",
  },
  {
    id: "host-defined-fields-summary",
    title: "D.2 호스트 정의 필드",
    navigationLabel: "D.2 호스트 정의 필드",
    path: "/annex-d/host-defined-fields-summary",
    source: "/src/content/annex-d/02-host-defined-fields-summary.md",
    kicker: "부록 D (참고) 호스트 계층화 지점",
  },
  {
    id: "host-defined-objects-summary",
    title: "D.3 호스트 정의 객체",
    navigationLabel: "D.3 호스트 정의 객체",
    path: "/annex-d/host-defined-objects-summary",
    source: "/src/content/annex-d/03-host-defined-objects-summary.md",
    kicker: "부록 D (참고) 호스트 계층화 지점",
  },
  {
    id: "host-running-jobs",
    title: "D.4 Job 실행",
    navigationLabel: "D.4 Job 실행",
    path: "/annex-d/host-running-jobs",
    source: "/src/content/annex-d/04-host-running-jobs.md",
    kicker: "부록 D (참고) 호스트 계층화 지점",
  },
  {
    id: "host-internal-methods-of-exotic-objects",
    title: "D.5 특수 객체의 내부 메서드",
    navigationLabel: "D.5 특수 객체의 내부 메서드",
    path: "/annex-d/host-internal-methods-of-exotic-objects",
    source:
      "/src/content/annex-d/05-host-internal-methods-of-exotic-objects.md",
    kicker: "부록 D (참고) 호스트 계층화 지점",
  },
  {
    id: "host-built-in-objects-and-methods",
    title: "D.6 내장 객체와 메서드",
    navigationLabel: "D.6 내장 객체와 메서드",
    path: "/annex-d/host-built-in-objects-and-methods",
    source: "/src/content/annex-d/06-host-built-in-objects-and-methods.md",
    kicker: "부록 D (참고) 호스트 계층화 지점",
  },
  {
    id: "corrections-and-clarifications-in-ecmascript-2015-with-possible-compatibility-impact",
    title:
      "부록 E (참고) 호환성에 영향을 줄 수 있는 ECMAScript 2015의 정정 및 명확화",
    navigationLabel:
      "부록 E (참고) 호환성에 영향을 줄 수 있는 ECMAScript 2015의 정정 및 명확화",
    path: "/annex-e",
    source: "/src/content/annex-e/index.md",
    kicker:
      "부록 E (참고) 호환성에 영향을 줄 수 있는 ECMAScript 2015의 정정 및 명확화",
  },
  {
    id: "additions-and-changes-that-introduce-incompatibilities-with-prior-editions",
    title:
      "부록 F (참고) 이전 판과의 비호환성을 유발하는 추가 사항과 변경 사항",
    navigationLabel:
      "부록 F (참고) 이전 판과의 비호환성을 유발하는 추가 사항과 변경 사항",
    path: "/annex-f",
    source: "/src/content/annex-f/index.md",
    kicker:
      "부록 F (참고) 이전 판과의 비호환성을 유발하는 추가 사항과 변경 사항",
  },
  {
    id: "bibliography",
    title: "참고 문헌",
    navigationLabel: "참고 문헌",
    path: "/bibliography",
    source: "/src/content/bibliography/index.md",
    kicker: "ECMA-262 비공식 한국어 번역",
  },
  {
    id: "colophon",
    title: "판권 및 제작 정보",
    navigationLabel: "판권 및 제작 정보",
    path: "/colophon",
    source: "/src/content/colophon/index.md",
    kicker: "ECMA-262 비공식 한국어 번역",
  },
  {
    id: "copyright-and-software-license",
    title: "저작권 및 소프트웨어 라이선스",
    navigationLabel: "저작권 및 소프트웨어 라이선스",
    path: "/copyright-and-software-license",
    source: "/src/content/copyright-and-software-license/index.md",
    kicker: "ECMA-262 비공식 한국어 번역",
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
    children: [
      {
        type: "document",
        documentId: "overview-introduction",
      },
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
    children: [
      {
        type: "document",
        documentId: "syntactic-and-lexical-grammars",
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
        documentId: "ecmascript-data-types-and-values-introduction",
      },
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
  {
    type: "group",
    id: "syntax-directed-operations",
    label: "8. 구문 지향 연산",
    children: [
      {
        type: "document",
        documentId: "evaluation",
      },
      {
        type: "document",
        documentId: "syntax-directed-operations-scope-analysis",
      },
      {
        type: "document",
        documentId: "syntax-directed-operations-labels",
      },
      {
        type: "document",
        documentId: "syntax-directed-operations-function-name-inference",
      },
      {
        type: "document",
        documentId: "syntax-directed-operations-contains",
      },
      {
        type: "document",
        documentId: "syntax-directed-operations-miscellaneous",
      },
    ],
  },
  {
    type: "group",
    id: "executable-code-and-execution-contexts",
    label: "9. 실행 가능 코드와 실행 컨텍스트",
    children: [
      {
        type: "document",
        documentId: "environment-records",
      },
      {
        type: "document",
        documentId: "privateenvironment-records",
      },
      {
        type: "document",
        documentId: "code-realms",
      },
      {
        type: "document",
        documentId: "execution-contexts",
      },
      {
        type: "document",
        documentId: "jobs",
      },
      {
        type: "document",
        documentId: "agents",
      },
      {
        type: "document",
        documentId: "agent-clusters",
      },
      {
        type: "document",
        documentId: "forward-progress",
      },
      {
        type: "document",
        documentId: "weakref-processing-model",
      },
      {
        type: "document",
        documentId: "clear-kept-objects",
      },
      {
        type: "document",
        documentId: "addtokeptobjects",
      },
      {
        type: "document",
        documentId: "cleanup-finalization-registry",
      },
      {
        type: "document",
        documentId: "canbeheldweakly",
      },
    ],
  },
  {
    type: "group",
    id: "ordinary-and-exotic-objects-behaviours",
    label: "10. 일반 객체와 특수 객체의 동작",
    children: [
      {
        type: "document",
        documentId: "ordinary-object-internal-methods-and-internal-slots",
      },
      {
        type: "document",
        documentId: "ecmascript-function-objects",
      },
      {
        type: "document",
        documentId: "built-in-function-objects",
      },
      {
        type: "document",
        documentId: "built-in-exotic-object-internal-methods-and-slots",
      },
      {
        type: "document",
        documentId: "proxy-object-internal-methods-and-internal-slots",
      },
    ],
  },
  {
    type: "group",
    id: "ecmascript-language-source-code",
    label: "11. ECMAScript 언어: 소스 텍스트",
    children: [
      {
        type: "document",
        documentId: "source-text",
      },
      {
        type: "document",
        documentId: "types-of-source-code",
      },
    ],
  },
  {
    type: "group",
    id: "ecmascript-language-lexical-grammar",
    label: "12. ECMAScript 언어: 어휘 문법",
    children: [
      {
        type: "document",
        documentId: "unicode-format-control-characters",
      },
      {
        type: "document",
        documentId: "white-space",
      },
      {
        type: "document",
        documentId: "line-terminators",
      },
      {
        type: "document",
        documentId: "comments",
      },
      {
        type: "document",
        documentId: "hashbang",
      },
      {
        type: "document",
        documentId: "tokens",
      },
      {
        type: "document",
        documentId: "names-and-keywords",
      },
      {
        type: "document",
        documentId: "punctuators",
      },
      {
        type: "document",
        documentId: "ecmascript-language-lexical-grammar-literals",
      },
      {
        type: "document",
        documentId: "automatic-semicolon-insertion",
      },
    ],
  },
  {
    type: "group",
    id: "ecmascript-language-expressions",
    label: "13. ECMAScript 언어: 표현식",
    children: [
      {
        type: "document",
        documentId: "identifiers",
      },
      {
        type: "document",
        documentId: "primary-expression",
      },
      {
        type: "document",
        documentId: "left-hand-side-expressions",
      },
      {
        type: "document",
        documentId: "update-expressions",
      },
      {
        type: "document",
        documentId: "unary-operators",
      },
      {
        type: "document",
        documentId: "exp-operator",
      },
      {
        type: "document",
        documentId: "multiplicative-operators",
      },
      {
        type: "document",
        documentId: "additive-operators",
      },
      {
        type: "document",
        documentId: "bitwise-shift-operators",
      },
      {
        type: "document",
        documentId: "relational-operators",
      },
      {
        type: "document",
        documentId: "equality-operators",
      },
      {
        type: "document",
        documentId: "binary-bitwise-operators",
      },
      {
        type: "document",
        documentId: "binary-logical-operators",
      },
      {
        type: "document",
        documentId: "conditional-operator",
      },
      {
        type: "document",
        documentId: "assignment-operators",
      },
      {
        type: "document",
        documentId: "comma-operator",
      },
    ],
  },
  {
    type: "group",
    id: "ecmascript-language-statements-and-declarations",
    label: "14. ECMAScript 언어: 문과 선언",
    children: [
      {
        type: "document",
        documentId: "statement-semantics",
      },
      {
        type: "document",
        documentId: "block",
      },
      {
        type: "document",
        documentId: "declarations-and-the-variable-statement",
      },
      {
        type: "document",
        documentId: "empty-statement",
      },
      {
        type: "document",
        documentId: "expression-statement",
      },
      {
        type: "document",
        documentId: "if-statement",
      },
      {
        type: "document",
        documentId: "iteration-statements",
      },
      {
        type: "document",
        documentId: "continue-statement",
      },
      {
        type: "document",
        documentId: "break-statement",
      },
      {
        type: "document",
        documentId: "return-statement",
      },
      {
        type: "document",
        documentId: "with-statement",
      },
      {
        type: "document",
        documentId: "switch-statement",
      },
      {
        type: "document",
        documentId: "labelled-statements",
      },
      {
        type: "document",
        documentId: "throw-statement",
      },
      {
        type: "document",
        documentId: "try-statement",
      },
      {
        type: "document",
        documentId: "debugger-statement",
      },
    ],
  },
  {
    type: "group",
    id: "ecmascript-language-functions-and-classes",
    label: "15. ECMAScript 언어: 함수와 클래스",
    children: [
      {
        type: "document",
        documentId: "parameter-lists",
      },
      {
        type: "document",
        documentId: "function-definitions",
      },
      {
        type: "document",
        documentId: "arrow-function-definitions",
      },
      {
        type: "document",
        documentId: "method-definitions",
      },
      {
        type: "document",
        documentId: "generator-function-definitions",
      },
      {
        type: "document",
        documentId: "async-generator-function-definitions",
      },
      {
        type: "document",
        documentId: "class-definitions",
      },
      {
        type: "document",
        documentId: "async-function-definitions",
      },
      {
        type: "document",
        documentId: "async-arrow-function-definitions",
      },
      {
        type: "document",
        documentId: "tail-position-calls",
      },
    ],
  },
  {
    type: "group",
    id: "ecmascript-language-scripts-and-modules",
    label: "16. ECMAScript 언어: 스크립트와 모듈",
    children: [
      {
        type: "document",
        documentId: "scripts",
      },
      {
        type: "document",
        documentId: "modules",
      },
    ],
  },
  {
    type: "group",
    id: "error-handling-and-language-extensions",
    label: "17. 오류 처리와 언어 확장",
    children: [
      {
        type: "document",
        documentId: "forbidden-extensions",
      },
    ],
  },
  {
    type: "document",
    documentId: "ecmascript-standard-built-in-objects",
  },
  {
    type: "group",
    id: "global-object",
    label: "19. 전역 객체",
    children: [
      {
        type: "document",
        documentId: "value-properties-of-the-global-object",
      },
      {
        type: "document",
        documentId: "function-properties-of-the-global-object",
      },
      {
        type: "document",
        documentId: "constructor-properties-of-the-global-object",
      },
      {
        type: "document",
        documentId: "other-properties-of-the-global-object",
      },
    ],
  },
  {
    type: "group",
    id: "fundamental-objects",
    label: "20. 기본 객체",
    children: [
      {
        type: "document",
        documentId: "object-objects",
      },
      {
        type: "document",
        documentId: "function-objects",
      },
      {
        type: "document",
        documentId: "boolean-objects",
      },
      {
        type: "document",
        documentId: "symbol-objects",
      },
      {
        type: "document",
        documentId: "error-objects",
      },
    ],
  },
  {
    type: "group",
    id: "numbers-and-dates",
    label: "21. 숫자와 날짜",
    children: [
      {
        type: "document",
        documentId: "number-objects",
      },
      {
        type: "document",
        documentId: "bigint-objects",
      },
      {
        type: "document",
        documentId: "math-object",
      },
      {
        type: "document",
        documentId: "date-objects",
      },
    ],
  },
  {
    type: "group",
    id: "text-processing",
    label: "22. 텍스트 처리",
    children: [
      {
        type: "document",
        documentId: "string-objects",
      },
      {
        type: "document",
        documentId: "regexp-regular-expression-objects",
      },
    ],
  },
  {
    type: "group",
    id: "indexed-collections",
    label: "23. 인덱스 기반 컬렉션",
    children: [
      {
        type: "document",
        documentId: "array-objects",
      },
      {
        type: "document",
        documentId: "typedarray-objects",
      },
      {
        type: "document",
        documentId: "uint8array",
      },
    ],
  },
  {
    type: "group",
    id: "keyed-collections",
    label: "24. 키 기반 컬렉션",
    children: [
      {
        type: "document",
        documentId: "map-objects",
      },
      {
        type: "document",
        documentId: "set-objects",
      },
      {
        type: "document",
        documentId: "weakmap-objects",
      },
      {
        type: "document",
        documentId: "weakset-objects",
      },
      {
        type: "document",
        documentId: "abstract-operations-for-keyed-collections",
      },
    ],
  },
  {
    type: "group",
    id: "structured-data",
    label: "25. 구조화된 데이터",
    children: [
      {
        type: "document",
        documentId: "arraybuffer-objects",
      },
      {
        type: "document",
        documentId: "sharedarraybuffer-objects",
      },
      {
        type: "document",
        documentId: "dataview-objects",
      },
      {
        type: "document",
        documentId: "atomics-object",
      },
      {
        type: "document",
        documentId: "json-object",
      },
    ],
  },
  {
    type: "group",
    id: "managing-memory",
    label: "26. 메모리 관리",
    children: [
      {
        type: "document",
        documentId: "weak-ref-objects",
      },
      {
        type: "document",
        documentId: "finalization-registry-objects",
      },
    ],
  },
  {
    type: "group",
    id: "control-abstraction-objects",
    label: "27. 제어 추상화 객체",
    children: [
      {
        type: "document",
        documentId: "iteration",
      },
      {
        type: "document",
        documentId: "resource-management",
      },
      {
        type: "document",
        documentId: "disposablestack-objects",
      },
      {
        type: "document",
        documentId: "asyncdisposablestack-objects",
      },
      {
        type: "document",
        documentId: "promise-objects",
      },
      {
        type: "document",
        documentId: "generatorfunction-objects",
      },
      {
        type: "document",
        documentId: "asyncgeneratorfunction-objects",
      },
      {
        type: "document",
        documentId: "generator-objects",
      },
      {
        type: "document",
        documentId: "asyncgenerator-objects",
      },
      {
        type: "document",
        documentId: "async-function-objects",
      },
    ],
  },
  {
    type: "group",
    id: "reflection",
    label: "28. 리플렉션",
    children: [
      {
        type: "document",
        documentId: "reflect-object",
      },
      {
        type: "document",
        documentId: "proxy-objects",
      },
      {
        type: "document",
        documentId: "module-namespace-objects",
      },
    ],
  },
  {
    type: "group",
    id: "memory-model",
    label: "29. 메모리 모델",
    children: [
      {
        type: "document",
        documentId: "memory-model-fundamentals",
      },
      {
        type: "document",
        documentId: "agent-event-records",
      },
      {
        type: "document",
        documentId: "chosen-value-records",
      },
      {
        type: "document",
        documentId: "candidate-executions",
      },
      {
        type: "document",
        documentId: "abstract-operations-for-the-memory-model",
      },
      {
        type: "document",
        documentId: "relations-of-candidate-executions",
      },
      {
        type: "document",
        documentId: "properties-of-valid-executions",
      },
      {
        type: "document",
        documentId: "races",
      },
      {
        type: "document",
        documentId: "data-races",
      },
      {
        type: "document",
        documentId: "data-race-freedom",
      },
      {
        type: "document",
        documentId: "shared-memory-guidelines",
      },
    ],
  },
  {
    type: "group",
    id: "grammar-summary",
    label: "부록 A (참고) 문법 요약",
    children: [
      {
        type: "document",
        documentId: "lexical-grammar",
      },
      {
        type: "document",
        documentId: "expressions",
      },
      {
        type: "document",
        documentId: "statements",
      },
      {
        type: "document",
        documentId: "functions-and-classes",
      },
      {
        type: "document",
        documentId: "scripts-and-modules",
      },
      {
        type: "document",
        documentId: "number-conversions",
      },
      {
        type: "document",
        documentId: "time-zone-offset-string-format",
      },
      {
        type: "document",
        documentId: "regular-expressions",
      },
    ],
  },
  {
    type: "group",
    id: "additional-ecmascript-features-for-web-browsers",
    label: "부록 B (규범) 웹 브라우저를 위한 추가 ECMAScript 기능",
    children: [
      {
        type: "document",
        documentId: "additional-syntax",
      },
      {
        type: "document",
        documentId: "additional-built-in-properties",
      },
      {
        type: "document",
        documentId: "other-additional-features",
      },
    ],
  },
  {
    type: "document",
    documentId: "strict-mode-of-ecmascript",
  },
  {
    type: "group",
    id: "host-layering-points",
    label: "부록 D (참고) 호스트 계층화 지점",
    children: [
      {
        type: "document",
        documentId: "host-layering-points-introduction",
      },
      {
        type: "document",
        documentId: "host-hooks-summary",
      },
      {
        type: "document",
        documentId: "host-defined-fields-summary",
      },
      {
        type: "document",
        documentId: "host-defined-objects-summary",
      },
      {
        type: "document",
        documentId: "host-running-jobs",
      },
      {
        type: "document",
        documentId: "host-internal-methods-of-exotic-objects",
      },
      {
        type: "document",
        documentId: "host-built-in-objects-and-methods",
      },
    ],
  },
  {
    type: "document",
    documentId:
      "corrections-and-clarifications-in-ecmascript-2015-with-possible-compatibility-impact",
  },
  {
    type: "document",
    documentId:
      "additions-and-changes-that-introduce-incompatibilities-with-prior-editions",
  },
  {
    type: "document",
    documentId: "bibliography",
  },
  {
    type: "document",
    documentId: "colophon",
  },
  {
    type: "document",
    documentId: "copyright-and-software-license",
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
    return { previous: null, next: null };
  }

  const previousId = NAVIGABLE_DOCUMENT_IDS[currentIndex - 1];
  const nextId = NAVIGABLE_DOCUMENT_IDS[currentIndex + 1];

  return {
    previous: previousId ? getDocumentById(previousId) : null,
    next: nextId ? getDocumentById(nextId) : null,
  };
}

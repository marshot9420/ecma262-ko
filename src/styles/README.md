# ECMAScript 목차 변환 결과

첨부된 `ecma262-toc.md`의 2,337개 항목을 기준으로 생성한 초안입니다.

## 파일

- `documents.generated.ts`
  - 현재 프로젝트의 `DocumentDefinition` 형식을 유지한 문서 단위 목록입니다.
  - 장 자체가 콘텐츠인 항목과 각 장의 직계 하위 절을 문서 단위로 선택했습니다.
  - 총 179개 `DocumentDefinition`과 28개 내비게이션 그룹이 있습니다.
  - 아직 생성되지 않은 Markdown 파일의 `source` 경로도 포함하므로 즉시 기존 파일을 덮어쓰면 안 됩니다.
- `ecma262-toc.generated.ts`
  - 2,337개 전체 목차의 계층형 초벌 번역입니다.
  - 알고리즘명, 내부 메서드명, 내장 API 식별자는 원문의 규범적 이름을 유지했습니다.
- `ecma262-toc.translated.json`
  - 위 전체 목차를 도구에서 처리하기 쉬운 JSON으로 저장한 파일입니다.
- `generate_ecma_documents.py`
  - 같은 입력 Markdown에서 결과물을 다시 생성하는 스크립트입니다.
- `generation-report.json`
  - 항목 수와 중복 검사 결과입니다.

## 적용 전 주의사항

현재 `DOCUMENTS`는 실제 Markdown 파일을 로드하는 런타임 설정입니다. 따라서 존재하지 않는 `source`까지 한 번에 등록하면 문서 로더의 구현에 따라 빌드 또는 런타임 오류가 발생할 수 있습니다.

안전한 적용 순서는 다음과 같습니다.

1. `documents.generated.ts`에서 이미 번역 파일이 존재하는 항목만 기존 `DOCUMENTS`에 병합합니다.
2. 새 번역 파일을 추가할 때 해당 정의를 함께 활성화합니다.
3. 2,337개 전체 계층은 `ecma262-toc.generated.ts`를 사이드바 또는 문서 내부 목차의 원본 데이터로 사용합니다.
4. 번역 용어는 실제 본문 번역 과정에서 최종 검수합니다.

## 생성 규칙

- `DOCUMENTS`에는 문서 파일 단위만 넣었습니다.
- `Runtime Semantics: Evaluation`, 개별 추상 연산, 내장 메서드 등은 대부분 상위 Markdown 문서 안의 제목/앵커이므로 전체 목차 트리에만 포함했습니다.
- 원문 절 번호가 정수인 장 제목은 `4. 개요`처럼 표기하고, 하위 절은 `4.1 웹 스크립팅`처럼 표기했습니다.

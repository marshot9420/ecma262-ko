# ECMAScript 한국어 번역 정적 사이트

## 실행

별도의 빌드 과정이 없습니다. `index.html`을 브라우저에서 열거나 VS Code의
Live Server 같은 정적 파일 서버로 실행하면 됩니다.

## 구조

```text
ecmascript-ko-site/
├─ index.html
├─ styles.css
├─ main.js
└─ pages/
   ├─ about-this-specification.html
   ├─ contributing-to-this-specification.html
   ├─ introduction.html
   └─ ...
```

사이드바 항목은 `main.js`의 `navigation` 배열에서 관리합니다. 새 페이지를
추가할 때는 다음 두 작업을 함께 수행합니다.

1. `pages/`에 HTML 파일 추가
2. `main.js`의 `navigation` 배열에 페이지 정보 추가

각 페이지의 `<body>`에는 현재 페이지를 식별하는 `data-page`와 공통 파일의
상대 경로를 나타내는 `data-root-path`가 들어 있습니다.

```html
<body data-page="introduction" data-root-path=".."></body>
```

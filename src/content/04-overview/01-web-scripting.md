<!--
이 파일은 ecma262-toc.translated.json으로부터 생성된 번역 뼈대입니다.
절: 4.1 웹 스크립팅
원문 제목: Web Scripting
원문: https://tc39.es/ecma262/multipage/overview.html#sec-web-scripting
-->

<span id="sec-web-scripting"></span>

웹 브라우저는 클라이언트 측 계산을 위한 ECMAScript [호스트 환경](doc:hosts-and-implementations)을 제공한다. 이 환경에는 예를 들어 창, 메뉴, 팝업, 대화 상자, 텍스트 영역, 앵커, 프레임, 방문 기록, 쿠키 및 입출력을 나타내는 객체가 포함된다. 또한 [호스트 환경](doc:hosts-and-implementations)은 포커스 변경, 페이지와 이미지의 로드, 언로드, 오류와 중단, 선택, 폼 제출 및 마우스 동작과 같은 이벤트에 스크립팅 코드를 연결할 수 있는 수단을 제공한다. 스크립팅 코드는 HTML 안에 나타나며, 표시되는 페이지는 사용자 인터페이스 요소와 고정되거나 계산으로 생성된 텍스트 및 이미지의 조합이다. 스크립팅 코드는 사용자의 상호작용에 반응하므로 메인 프로그램이 필요하지 않다.

웹 서버는 서버 측 계산을 위한 다른 종류의 [호스트 환경](doc:hosts-and-implementations)을 제공한다. 이 환경에는 요청, 클라이언트 및 파일을 나타내는 객체와 데이터를 잠그고 공유하기 위한 메커니즘이 포함된다. 브라우저 측 스크립팅과 서버 측 스크립팅을 함께 사용하면 웹 기반 애플리케이션에 맞춤형 사용자 인터페이스를 제공하면서 계산을 클라이언트와 서버 사이에 분산할 수 있다.

ECMAScript를 지원하는 각 웹 브라우저와 서버는 자체 [호스트 환경](doc:hosts-and-implementations)을 제공하여 ECMAScript 실행 환경을 완성한다.

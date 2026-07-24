<!--
이 파일은 ecma262-toc.translated.json으로부터 생성된 번역 뼈대입니다.
절: 4.2 호스트와 구현체
원문 제목: Hosts and Implementations
원문: https://tc39.es/ecma262/multipage/overview.html#sec-hosts-and-implementations
-->

<span id="sec-hosts-and-implementations"></span>

ECMAScript를 [호스트 환경](#sec-host-environment)에 통합하는 데 도움을 주기 위해, 이 명세는 특정 기능의 정의를 전체적으로 또는 부분적으로 이 명세 외부의 출처에 맡긴다. 이러한 기능에는 예를 들어 [추상 연산](doc:algorithm-conventions#sec-algorithm-conventions-abstract-operations)이 포함된다. 편집상의 관점에서 이 명세는 다음과 같은 정의 위임의 종류를 구분한다.

<span id="sec-implementation"></span>

구현체는 [부록 D](doc:host-layering-points-introduction)에 열거된 기능이나 [구현체 정의](doc:terms-and-definitions#sec-implementation-defined) 또는 [구현체 근사](doc:terms-and-definitions#sec-implementation-approximated)로 표시된 기능을 더 구체적으로 정의하는 외부 출처다. 비형식적인 용법에서 구현체는 특정 웹 브라우저와 같은 구체적인 산출물을 가리킨다.

구현체 정의 기능은 별도의 추가 조건 없이 그 정의를 외부 출처에 맡기는 기능이다. 이 명세는 특정한 동작을 권고하지 않으며, 이 명세를 준수하는 구현체는 이 명세가 제시하는 제약 안에서 어떤 동작이든 자유롭게 선택할 수 있다.

구현체 근사 기능은 이상적인 동작을 권고하면서 그 정의를 외부 출처에 맡기는 기능이다. 이 명세를 준수하는 구현체는 이 명세가 제시하는 제약 안에서 어떤 동작이든 자유롭게 선택할 수 있지만, 권고된 이상에 가깝게 구현하도록 노력할 것이 권장된다. [`Math.exp`](doc:math-object#sec-math.exp)와 같은 일부 수학 연산은 [구현체 근사](doc:terms-and-definitions#sec-implementation-approximated) 기능이다.

<span id="sec-host"></span>

호스트는 [부록 D](doc:host-layering-points-introduction)에 나열된 기능을 더 구체적으로 정의하지만, 그 밖의 [구현체 정의](doc:terms-and-definitions#sec-implementation-defined) 또는 [구현체 근사](doc:terms-and-definitions#sec-implementation-approximated) 기능은 더 구체적으로 정의하지 않는 외부 출처다. 비형식적인 용법에서 [호스트](#sec-host)는 [부록 D](doc:host-layering-points-introduction)를 통해 이 명세와 동일한 방식으로 상호작용하는 모든 구현체의 집합을 가리킨다. 예를 들어 모든 웹 브라우저의 집합을 하나의 호스트라고 할 수 있다.

[호스트](#sec-host)는 [WHATWG HTML](https://html.spec.whatwg.org/)과 같은 외부 명세인 경우가 많다. 다시 말해 [호스트 정의](doc:terms-and-definitions#sec-host-defined) 기능은 외부 명세에서 더 구체적으로 정의되는 경우가 많다.

<span id="sec-host-hook"></span>

호스트 훅은 외부 출처에서 전체적으로 또는 부분적으로 정의하는 [추상 연산](doc:algorithm-conventions#sec-algorithm-conventions-abstract-operations)이다. 모든 [호스트 훅](#sec-host-hook)은 [부록 D](doc:host-layering-points-introduction)에 나열되어야 한다. [호스트 훅](#sec-host-hook)은 적어도 다음 요구 사항을 준수해야 한다.

- [정상 완료](doc:ecmascript-specification-types#sec-normalcompletion) 또는 [throw 완료](doc:ecmascript-specification-types#sec-throwcompletion)를 반환해야 한다.

호스트 정의 기능은 별도의 추가 조건 없이 그 정의를 외부 출처에 맡기며 [부록 D](doc:host-layering-points-introduction)에 나열되는 기능이다. [호스트](#sec-host)가 아닌 구현체도 [호스트 정의](doc:terms-and-definitions#sec-host-defined) 기능에 대한 정의를 제공할 수 있다.

<span id="sec-host-environment"></span>

호스트 환경은 모든 [호스트 정의](doc:terms-and-definitions#sec-host-defined) 기능에 대해 선택된 특정한 정의의 집합이다. [호스트 환경](#sec-host-environment)은 일반적으로 [전역 객체](doc:value-properties-of-the-global-object#sec-value-properties-of-the-global-object)의 [호스트 정의](doc:terms-and-definitions#sec-host-defined) 속성을 통해 입력을 얻고 출력을 제공할 수 있게 하는 객체나 함수를 포함한다.

이 명세는 항상 가장 구체적인 용어를 사용한다는 편집상의 관례를 따른다. 예를 들어 어떤 기능이 [호스트 정의](doc:terms-and-definitions#sec-host-defined) 기능이라면 이를 [구현체 정의](doc:terms-and-definitions#sec-implementation-defined) 기능이라고 부르지 않아야 한다.

[호스트](#sec-host)와 구현체는 모두 이 명세에서 정의하는 언어 타입, 명세 타입, [추상 연산](doc:algorithm-conventions#sec-algorithm-conventions-abstract-operations), 문법 생성 규칙, 고유 객체 및 고유 심벌을 통해 이 명세와 상호작용할 수 있다.

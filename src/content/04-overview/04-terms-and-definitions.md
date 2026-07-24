<!--
이 파일은 ecma262-toc.translated.json으로부터 생성된 번역 뼈대입니다.
절: 4.4 용어와 정의
원문 제목: Terms and Definitions
원문: https://tc39.es/ecma262/multipage/overview.html#sec-terms-and-definitions
-->

<span id="sec-terms-and-definitions"></span>

이 문서에서는 다음 용어와 정의를 적용한다.

<h2 id="sec-terms-and-definitions-implementation-approximated">
  4.4.1 구현체 근사
</h2>

<!-- 원문 제목: implementation-approximated -->

<!-- 원문: https://tc39.es/ecma262/multipage/overview.html#sec-terms-and-definitions-implementation-approximated -->

전체 또는 일부가 외부 출처에서 정의되지만, 이 명세에서 권장하는 이상적인 동작이 제시된 기능

<h2 id="sec-terms-and-definitions-implementation-defined">
  4.4.2 구현체 정의
</h2>

<!-- 원문 제목: implementation-defined -->

<!-- 원문: https://tc39.es/ecma262/multipage/overview.html#sec-terms-and-definitions-implementation-defined -->

전체 또는 일부가 이 명세 외부의 출처에서 정의되는 기능

<h2 id="sec-terms-and-definitions-host-defined">
  4.4.3 호스트 정의
</h2>

<!-- 원문 제목: host-defined -->

<!-- 원문: https://tc39.es/ecma262/multipage/overview.html#sec-terms-and-definitions-host-defined -->

[구현체 정의](#sec-terms-and-definitions-implementation-defined)와 같음

> **참고**
>
> 편집상의 구분에 관해서는 [4.2절](doc:hosts-and-implementations)을 참고한다.

<h2 id="sec-type">
  4.4.4 타입
</h2>

<!-- 원문 제목: type -->

<!-- 원문: https://tc39.es/ecma262/multipage/overview.html#sec-type -->

[6절](doc:ecmascript-data-types-and-values-introduction)에서 정의하는 데이터 값의 집합

<h2 id="sec-primitive-value">
  4.4.5 원시 값
</h2>

<!-- 원문 제목: primitive value -->

<!-- 원문: https://tc39.es/ecma262/multipage/overview.html#sec-primitive-value -->

[6절](doc:ecmascript-data-types-and-values-introduction)에서 정의하는 `Undefined`, `Null`, `Boolean`, `Number`, `BigInt`, `Symbol` 또는 `String` 타입 중 하나의 구성원

> **참고**
>
> 원시 값은 언어 구현의 가장 낮은 수준에서 직접 표현되는 데이터다.

<h2 id="sec-terms-and-definitions-object">
  4.4.6 객체
</h2>

<!-- 원문 제목: object -->

<!-- 원문: https://tc39.es/ecma262/multipage/overview.html#sec-terms-and-definitions-object -->

[`Object` 타입](doc:ecmascript-language-types#sec-object-type)의 구성원

> **참고**
>
> 객체는 속성들의 컬렉션이며 하나의 프로토타입 객체를 가진다. 프로토타입은 `null`일 수 있다.

<h2 id="sec-constructor">
  4.4.7 생성자
</h2>

<!-- 원문 제목: constructor -->

<!-- 원문: https://tc39.es/ecma262/multipage/overview.html#sec-constructor -->

객체를 생성하고 초기화하는 함수 객체

> **참고**
>
> 생성자의 `"prototype"` 속성값은 상속과 공유 속성을 구현하는 데 사용되는 프로토타입 객체다.

<h2 id="sec-terms-and-definitions-prototype">
  4.4.8 프로토타입
</h2>

<!-- 원문 제목: prototype -->

<!-- 원문: https://tc39.es/ecma262/multipage/overview.html#sec-terms-and-definitions-prototype -->

다른 객체에 공유 속성을 제공하는 객체

> **참고**
>
> 생성자가 객체를 생성하면 그 객체는 속성 참조를 해석하기 위해 생성자의 `"prototype"` 속성을 암묵적으로 참조한다. 생성자의 `"prototype"` 속성은 프로그램 표현식 `constructor.prototype`으로 참조할 수 있다. 객체의 프로토타입에 추가된 속성은 상속을 통해 그 프로토타입을 공유하는 모든 객체에 공유된다. 또는 `Object.create` 내장 함수를 사용하여 프로토타입을 명시적으로 지정한 새 객체를 생성할 수 있다.

<h2 id="sec-ordinary-object">
  4.4.9 일반 객체
</h2>

<!-- 원문 제목: ordinary object -->

<!-- 원문: https://tc39.es/ecma262/multipage/overview.html#sec-ordinary-object -->

모든 객체가 지원해야 하는 필수 내부 메서드에 대해 기본 동작을 갖는 객체

<h2 id="sec-exotic-object">
  4.4.10 특수 객체
</h2>

<!-- 원문 제목: exotic object -->

<!-- 원문: https://tc39.es/ecma262/multipage/overview.html#sec-exotic-object -->

하나 이상의 필수 내부 메서드에 대해 기본 동작을 갖지 않는 객체

> **참고**
>
> 일반 객체가 아닌 모든 객체는 특수 객체다.

<h2 id="sec-standard-object">
  4.4.11 표준 객체
</h2>

<!-- 원문 제목: standard object -->

<!-- 원문: https://tc39.es/ecma262/multipage/overview.html#sec-standard-object -->

의미론이 이 명세에서 정의되는 객체

<h2 id="sec-built-in-object">
  4.4.12 내장 객체
</h2>

<!-- 원문 제목: built-in object -->

<!-- 원문: https://tc39.es/ecma262/multipage/overview.html#sec-built-in-object -->

ECMAScript 구현체가 명세하고 제공하는 객체

> **참고**
>
> 표준 내장 객체는 이 명세에서 정의된다. ECMAScript 구현체는 이 명세에서 정의하지 않은 추가적인 종류의 내장 객체를 명세하고 제공할 수 있다.

<h2 id="sec-undefined-value">
  4.4.13 undefined 값
</h2>

<!-- 원문 제목: undefined value -->

<!-- 원문: https://tc39.es/ecma262/multipage/overview.html#sec-undefined-value -->

변수에 값이 할당되지 않았을 때 사용되는 원시 값

<h2 id="sec-terms-and-definitions-undefined-type">
  4.4.14 Undefined 타입
</h2>

<!-- 원문 제목: Undefined type -->

<!-- 원문: https://tc39.es/ecma262/multipage/overview.html#sec-terms-and-definitions-undefined-type -->

유일한 값으로 `undefined` 값을 갖는 타입

<h2 id="sec-null-value">
  4.4.15 null 값
</h2>

<!-- 원문 제목: null value -->

<!-- 원문: https://tc39.es/ecma262/multipage/overview.html#sec-null-value -->

어떠한 객체 값도 의도적으로 존재하지 않음을 나타내는 원시 값

<h2 id="sec-terms-and-definitions-null-type">
  4.4.16 Null 타입
</h2>

<!-- 원문 제목: Null type -->

<!-- 원문: https://tc39.es/ecma262/multipage/overview.html#sec-terms-and-definitions-null-type -->

유일한 값으로 `null` 값을 갖는 타입

<h2 id="sec-terms-and-definitions-boolean-value">
  4.4.17 Boolean 값
</h2>

<!-- 원문 제목: Boolean value -->

<!-- 원문: https://tc39.es/ecma262/multipage/overview.html#sec-terms-and-definitions-boolean-value -->

[`Boolean` 타입](doc:ecmascript-language-types#sec-ecmascript-language-types-boolean-type)의 구성원

> **참고**
>
> Boolean 값은 `true`와 `false` 두 개뿐이다.

<h2 id="sec-terms-and-definitions-boolean-type">
  4.4.18 Boolean 타입
</h2>

<!-- 원문 제목: Boolean type -->

<!-- 원문: https://tc39.es/ecma262/multipage/overview.html#sec-terms-and-definitions-boolean-type -->

원시 값 `true`와 `false`로 이루어진 타입

<h2 id="sec-boolean-object">
  4.4.19 Boolean 객체
</h2>

<!-- 원문 제목: Boolean object -->

<!-- 원문: https://tc39.es/ecma262/multipage/overview.html#sec-boolean-object -->

표준 내장 `Boolean` 생성자의 인스턴스인 [`Object` 타입](doc:ecmascript-language-types#sec-object-type)의 구성원

> **참고**
>
> Boolean 객체는 `new` 표현식에서 Boolean 값을 인수로 제공하여 `Boolean` 생성자를 사용함으로써 생성된다. 생성된 객체에는 Boolean 값을 값으로 갖는 내부 슬롯이 있다. Boolean 객체는 Boolean 값으로 강제 변환될 수 있다.

<h2 id="sec-terms-and-definitions-string-value">
  4.4.20 String 값
</h2>

<!-- 원문 제목: String value -->

<!-- 원문: https://tc39.es/ecma262/multipage/overview.html#sec-terms-and-definitions-string-value -->

0개 이상의 16비트 부호 없는 정수 값으로 이루어진 유한하고 순서가 있는 나열인 원시 값

> **참고**
>
> String 값은 [`String` 타입](doc:ecmascript-language-types#sec-ecmascript-language-types-string-type)의 구성원이다. 나열의 각 정수 값은 일반적으로 UTF-16 텍스트의 단일 16비트 코드 단위를 나타낸다. 다만 ECMAScript는 각 값이 16비트 부호 없는 정수여야 한다는 점을 제외하면 그 값에 어떠한 제약이나 요구 사항도 두지 않는다.

<h2 id="sec-terms-and-definitions-string-type">
  4.4.21 String 타입
</h2>

<!-- 원문 제목: String type -->

<!-- 원문: https://tc39.es/ecma262/multipage/overview.html#sec-terms-and-definitions-string-type -->

가능한 모든 String 값의 집합

<h2 id="sec-string-object">
  4.4.22 String 객체
</h2>

<!-- 원문 제목: String object -->

<!-- 원문: https://tc39.es/ecma262/multipage/overview.html#sec-string-object -->

표준 내장 `String` 생성자의 인스턴스인 [`Object` 타입](doc:ecmascript-language-types#sec-object-type)의 구성원

> **참고**
>
> String 객체는 `new` 표현식에서 String 값을 인수로 제공하여 `String` 생성자를 사용함으로써 생성된다. 생성된 객체에는 String 값을 값으로 갖는 내부 슬롯이 있다. String 객체는 [`String` 생성자를 함수로 호출](doc:string-objects#sec-string-constructor-string-value)하여 String 값으로 강제 변환될 수 있다.

<h2 id="sec-terms-and-definitions-number-value">
  4.4.23 Number 값
</h2>

<!-- 원문 제목: Number value -->

<!-- 원문: https://tc39.es/ecma262/multipage/overview.html#sec-terms-and-definitions-number-value -->

[IEEE 754-2019](doc:bibliography)의 배정밀도 64비트 이진 형식 값에 대응하는 원시 값

> **참고**
>
> Number 값은 [`Number` 타입](doc:ecmascript-language-types#sec-ecmascript-language-types-number-type)의 구성원이며 숫자를 직접 표현한다.

<h2 id="sec-terms-and-definitions-number-type">
  4.4.24 Number 타입
</h2>

<!-- 원문 제목: Number type -->

<!-- 원문: https://tc39.es/ecma262/multipage/overview.html#sec-terms-and-definitions-number-type -->

`NaN`(“숫자가 아님”), `+∞𝔽`(양의 무한대) 및 `-∞𝔽`(음의 무한대)를 포함하는 가능한 모든 Number 값의 집합

<h2 id="sec-number-object">
  4.4.25 Number 객체
</h2>

<!-- 원문 제목: Number object -->

<!-- 원문: https://tc39.es/ecma262/multipage/overview.html#sec-number-object -->

표준 내장 `Number` 생성자의 인스턴스인 [`Object` 타입](doc:ecmascript-language-types#sec-object-type)의 구성원

> **참고**
>
> Number 객체는 `new` 표현식에서 Number 값을 인수로 제공하여 `Number` 생성자를 사용함으로써 생성된다. 생성된 객체에는 Number 값을 값으로 갖는 내부 슬롯이 있다. Number 객체는 [`Number` 생성자를 함수로 호출](doc:number-objects#sec-number-constructor-number-value)하여 Number 값으로 강제 변환될 수 있다.

<h2 id="sec-terms-and-definitions-infinity">
  4.4.26 Infinity
</h2>

<!-- 원문 제목: Infinity -->

<!-- 원문: https://tc39.es/ecma262/multipage/overview.html#sec-terms-and-definitions-infinity -->

양의 무한대 Number 값

<h2 id="sec-terms-and-definitions-nan">
  4.4.27 NaN
</h2>

<!-- 원문 제목: NaN -->

<!-- 원문: https://tc39.es/ecma262/multipage/overview.html#sec-terms-and-definitions-nan -->

[IEEE 754-2019](doc:bibliography)의 NaN(“숫자가 아님”) 값인 Number 값

<h2 id="sec-terms-and-definitions-bigint-value">
  4.4.28 BigInt 값
</h2>

<!-- 원문 제목: BigInt value -->

<!-- 원문: https://tc39.es/ecma262/multipage/overview.html#sec-terms-and-definitions-bigint-value -->

임의 정밀도 정숫값에 대응하는 원시 값

<h2 id="sec-terms-and-definitions-bigint-type">
  4.4.29 BigInt 타입
</h2>

<!-- 원문 제목: BigInt type -->

<!-- 원문: https://tc39.es/ecma262/multipage/overview.html#sec-terms-and-definitions-bigint-type -->

가능한 모든 BigInt 값의 집합

<h2 id="sec-bigint-object">
  4.4.30 BigInt 객체
</h2>

<!-- 원문 제목: BigInt object -->

<!-- 원문: https://tc39.es/ecma262/multipage/overview.html#sec-bigint-object -->

표준 내장 `BigInt` 생성자의 인스턴스인 [`Object` 타입](doc:ecmascript-language-types#sec-object-type)의 구성원

<h2 id="sec-symbol-value">
  4.4.31 Symbol 값
</h2>

<!-- 원문 제목: Symbol value -->

<!-- 원문: https://tc39.es/ecma262/multipage/overview.html#sec-symbol-value -->

String이 아닌 고유한 Object 속성 키를 나타내는 원시 값

<h2 id="sec-terms-and-definitions-symbol-type">
  4.4.32 Symbol 타입
</h2>

<!-- 원문 제목: Symbol type -->

<!-- 원문: https://tc39.es/ecma262/multipage/overview.html#sec-terms-and-definitions-symbol-type -->

가능한 모든 Symbol 값의 집합

<h2 id="sec-symbol-object">
  4.4.33 Symbol 객체
</h2>

<!-- 원문 제목: Symbol object -->

<!-- 원문: https://tc39.es/ecma262/multipage/overview.html#sec-symbol-object -->

표준 내장 `Symbol` 생성자의 인스턴스인 [`Object` 타입](doc:ecmascript-language-types#sec-object-type)의 구성원

<h2 id="sec-terms-and-definitions-function">
  4.4.34 함수
</h2>

<!-- 원문 제목: function -->

<!-- 원문: https://tc39.es/ecma262/multipage/overview.html#sec-terms-and-definitions-function -->

서브루틴으로 호출할 수 있는 [`Object` 타입](doc:ecmascript-language-types#sec-object-type)의 구성원

> **참고**
>
> 함수는 속성뿐 아니라 호출되었을 때의 동작을 결정하는 실행 가능 코드와 상태도 포함한다. 함수의 코드는 ECMAScript로 작성되었을 수도 있고 그렇지 않을 수도 있다.

<h2 id="sec-built-in-function">
  4.4.35 내장 함수
</h2>

<!-- 원문 제목: built-in function -->

<!-- 원문: https://tc39.es/ecma262/multipage/overview.html#sec-built-in-function -->

함수인 내장 객체

> **참고**
>
> 내장 함수의 예로는 `parseInt`와 `Math.exp`가 있다. 호스트 또는 구현체는 이 명세에서 설명하지 않는 추가적인 내장 함수를 제공할 수 있다.

<h2 id="sec-built-in-constructor">
  4.4.36 내장 생성자
</h2>

<!-- 원문 제목: built-in constructor -->

<!-- 원문: https://tc39.es/ecma262/multipage/overview.html#sec-built-in-constructor -->

생성자인 내장 함수

> **참고**
>
> 내장 생성자의 예로는 `Object`와 `Function`이 있다. 호스트 또는 구현체는 이 명세에서 설명하지 않는 추가적인 내장 생성자를 제공할 수 있다.

<h2 id="sec-property">
  4.4.37 속성
</h2>

<!-- 원문 제목: property -->

<!-- 원문: https://tc39.es/ecma262/multipage/overview.html#sec-property -->

키와 값을 연관 짓는 객체의 구성 부분. 키는 String 값 또는 Symbol 값이다.

> **참고**
>
> 속성의 형식에 따라 값은 데이터 값인 원시 값, 객체 또는 함수 객체로 직접 표현될 수도 있고, 접근자 함수 쌍으로 간접적으로 표현될 수도 있다.

<h2 id="sec-method">
  4.4.38 메서드
</h2>

<!-- 원문 제목: method -->

<!-- 원문: https://tc39.es/ecma262/multipage/overview.html#sec-method -->

속성값인 함수

> **참고**
>
> 함수가 객체의 메서드로 호출되면 해당 객체가 함수의 `this` 값으로 전달된다.

<h2 id="sec-built-in-method">
  4.4.39 내장 메서드
</h2>

<!-- 원문 제목: built-in method -->

<!-- 원문: https://tc39.es/ecma262/multipage/overview.html#sec-built-in-method -->

내장 함수인 메서드

> **참고**
>
> 표준 내장 메서드는 이 명세에서 정의된다. 호스트 또는 구현체는 이 명세에서 설명하지 않는 추가적인 내장 메서드를 제공할 수 있다.

<h2 id="sec-attribute">
  4.4.40 특성
</h2>

<!-- 원문 제목: attribute -->

<!-- 원문: https://tc39.es/ecma262/multipage/overview.html#sec-attribute -->

속성의 특정한 성질을 정의하는 내부 값

<h2 id="sec-own-property">
  4.4.41 자체 속성
</h2>

<!-- 원문 제목: own property -->

<!-- 원문: https://tc39.es/ecma262/multipage/overview.html#sec-own-property -->

해당 객체에 직접 포함된 속성

<h2 id="sec-inherited-property">
  4.4.42 상속된 속성
</h2>

<!-- 원문 제목: inherited property -->

<!-- 원문: https://tc39.es/ecma262/multipage/overview.html#sec-inherited-property -->

객체의 자체 속성은 아니지만, 그 객체의 프로토타입이 자체 속성 또는 상속된 속성으로 가지고 있는 속성

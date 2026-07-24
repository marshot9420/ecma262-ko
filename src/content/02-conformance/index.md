ECMAScript 준수 구현체는 이 명세에서 설명하는 모든 타입, 값, 객체, 프로퍼티, 함수와 프로그램의 구문 및 의미론을 제공하고 지원해야 합니다.

ECMAScript 준수 구현체는 최신 버전의 유니코드 표준과 ISO/IEC 10646을 준수하여 소스 텍스트 입력을 해석해야 합니다.

서로 다른 인간 언어와 국가에서 사용하는 언어적·문화적 관습에 프로그램이 적응할 수 있도록 지원하는 애플리케이션 프로그래밍 인터페이스(API)를 제공하는 ECMAScript 준수 구현체는, 이 명세와 호환되는 최신판 ECMA-402에서 정의한 인터페이스를 구현해야 합니다.

ECMAScript 준수 구현체는 이 명세에서 설명하는 것 이외의 추가적인 타입, 값, 객체, 프로퍼티 및 함수를 제공할 수 있습니다. 특히 ECMAScript 준수 구현체는 이 명세에서 설명하는 객체에 대해, 이 명세에서 설명하지 않은 프로퍼티와 그 프로퍼티의 값을 제공할 수 있습니다.

ECMAScript 준수 구현체는 이 명세에서 설명하지 않은 프로그램 구문과 정규 표현식 구문을 지원할 수 있습니다. 특히 ECMAScript 준수 구현체는 이 명세의 [12.7.2절](doc:keywords-and-reserved-words)에서 언급하는 어떠한 [“미래 예약어”](doc:keywords-and-reserved-words)라도 사용하는 프로그램 구문을 지원할 수 있습니다.

ECMAScript 준수 구현체는 [17.1절](doc:forbidden-extensions)에서 [금지된 확장](doc:forbidden-extensions)으로 열거된 확장을 구현해서는 안 됩니다.

ECMAScript 준수 구현체는 [구현 정의](doc:hosts-and-implementations), [구현 근사](doc:hosts-and-implementations) 또는 [호스트 정의](doc:ecmascript-overview)로 지정되지 않은 어떠한 기능도 다시 정의해서는 안 됩니다.

별도의 지시가 없는 한, ECMAScript 준수 구현체는 **규범적 선택 사항**으로 지정된 하위 절을 구현할 수도 있고 구현하지 않을 수도 있습니다. 일반적으로 웹 브라우저는 모든 규범적 선택 사항 하위 절을 구현해야 합니다. [부록 B](doc:additional-ecmascript-features-for-web-browsers)를 참고하십시오.

규범적 선택 사항으로 지정된 동작 가운데 하나라도 구현한다면, 해당 동작을 포함하는 규범적 선택 사항 절에 명시된 모든 동작을 구현해야 합니다. 규범적 선택 사항 절은 아래 예시와 같이 색상이 있는 상자 안에 **“규범적 선택 사항”**이라는 문구를 표시하여 나타냅니다.

<section
  class="example-clause example-clause--normative-optional"
  aria-labelledby="normative-optional-example-heading"
>
  <p class="example-clause-label">규범적 선택 사항</p>

  <h2 id="normative-optional-example-heading">
    2.1 규범적 선택 사항 절 제목 예시
  </h2>

  <p>절 내용 예시입니다.</p>
</section>

ECMAScript 준수 구현체는 레거시 하위 절을 구현해야 합니다. 단, 해당 하위 절이 규범적 선택 사항으로도 표시되어 있는 경우는 예외입니다.

레거시 하위 절에 명시된 모든 언어 기능과 동작에는 하나 이상의 바람직하지 않은 특성이 있습니다. 그러나 기존 애플리케이션에서 이러한 기능과 동작이 계속 사용되고 있으므로 이 명세에서 제거할 수 없습니다. 이러한 기능은 핵심 ECMAScript 언어의 일부로 간주되지 않습니다.

프로그래머는 새로운 ECMAScript 코드를 작성할 때 이러한 기능과 동작을 사용하거나, 이러한 기능과 동작이 존재한다고 가정해서는 안 됩니다.

<section
  class="example-clause example-clause--legacy"
  aria-labelledby="legacy-example-heading"
>
  <p class="example-clause-label">레거시</p>

  <h2 id="legacy-example-heading">
    2.2 레거시 절 제목 예시
  </h2>

  <p>절 내용 예시입니다.</p>
</section>

<section
  class="example-clause example-clause--normative-optional-legacy"
  aria-labelledby="normative-optional-legacy-example-heading"
>
  <p class="example-clause-label">규범적 선택 사항, 레거시</p>

  <h2 id="normative-optional-legacy-example-heading">
    2.3 레거시 규범적 선택 사항 절 제목 예시
  </h2>

  <p>절 내용 예시입니다.</p>
</section>

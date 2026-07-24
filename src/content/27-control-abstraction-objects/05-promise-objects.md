<!--
이 파일은 ecma262-toc.translated.json으로부터 생성된 번역 뼈대입니다.
절: 27.5 Promise 객체
원문 제목: Promise Objects
원문: https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise-objects
-->

<span id="sec-promise-objects"></span>

<!-- TODO: 이 문서의 본문을 번역하십시오. -->

<h2 id="sec-promise-abstract-operations">
  27.5.1 Promise 추상 연산
</h2>

<!-- 원문 제목: Promise Abstract Operations -->
<!-- 원문: https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise-abstract-operations -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-promisecapability-records">
  27.5.1.1 PromiseCapability 레코드
</h3>

<!-- 원문 제목: PromiseCapability Records -->
<!-- 원문: https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promisecapability-records -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h4 id="sec-ifabruptrejectpromise">
  27.5.1.1.1 IfAbruptRejectPromise ( value, capability )
</h4>

<!-- 원문 제목: IfAbruptRejectPromise ( value, capability ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-ifabruptrejectpromise -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-promisereaction-records">
  27.5.1.2 PromiseReaction 레코드
</h3>

<!-- 원문 제목: PromiseReaction Records -->
<!-- 원문: https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promisereaction-records -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-createresolvingfunctions">
  27.5.1.3 CreateResolvingFunctions ( toResolve )
</h3>

<!-- 원문 제목: CreateResolvingFunctions ( toResolve ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-createresolvingfunctions -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-fulfillpromise">
  27.5.1.4 FulfillPromise ( promise, value )
</h3>

<!-- 원문 제목: FulfillPromise ( promise, value ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-fulfillpromise -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-newpromisecapability">
  27.5.1.5 NewPromiseCapability ( ctor )
</h3>

<!-- 원문 제목: NewPromiseCapability ( ctor ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-newpromisecapability -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-ispromise">
  27.5.1.6 IsPromise ( arg )
</h3>

<!-- 원문 제목: IsPromise ( arg ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-ispromise -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-rejectpromise">
  27.5.1.7 RejectPromise ( promise, reason )
</h3>

<!-- 원문 제목: RejectPromise ( promise, reason ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-rejectpromise -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-triggerpromisereactions">
  27.5.1.8 TriggerPromiseReactions ( reactions, arg )
</h3>

<!-- 원문 제목: TriggerPromiseReactions ( reactions, arg ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-triggerpromisereactions -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-host-promise-rejection-tracker">
  27.5.1.9 HostPromiseRejectionTracker ( promise, operation )
</h3>

<!-- 원문 제목: HostPromiseRejectionTracker ( promise, operation ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-host-promise-rejection-tracker -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h2 id="sec-promise-jobs">
  27.5.2 Promise Job
</h2>

<!-- 원문 제목: Promise Jobs -->
<!-- 원문: https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise-jobs -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-newpromisereactionjob">
  27.5.2.1 NewPromiseReactionJob ( reaction, arg )
</h3>

<!-- 원문 제목: NewPromiseReactionJob ( reaction, arg ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-newpromisereactionjob -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-newpromiseresolvethenablejob">
  27.5.2.2 NewPromiseResolveThenableJob ( promiseToResolve, thenable, then )
</h3>

<!-- 원문 제목: NewPromiseResolveThenableJob ( promiseToResolve, thenable, then ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-newpromiseresolvethenablejob -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h2 id="sec-promise-constructor">
  27.5.3 Promise 생성자
</h2>

<!-- 원문 제목: The Promise Constructor -->
<!-- 원문: https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise-constructor -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-promise-executor">
  27.5.3.1 Promise ( executor )
</h3>

<!-- 원문 제목: Promise ( executor ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise-executor -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h2 id="sec-properties-of-the-promise-constructor">
  27.5.4 Promise 생성자의 속성
</h2>

<!-- 원문 제목: Properties of the Promise Constructor -->
<!-- 원문: https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-properties-of-the-promise-constructor -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-promise.all">
  27.5.4.1 Promise.all ( iterable )
</h3>

<!-- 원문 제목: Promise.all ( iterable ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.all -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h4 id="sec-getpromiseresolve">
  27.5.4.1.1 GetPromiseResolve ( promiseCtor )
</h4>

<!-- 원문 제목: GetPromiseResolve ( promiseCtor ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-getpromiseresolve -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h4 id="sec-performpromiseall">
  27.5.4.1.2 PerformPromiseAll ( iteratorRecord, ctor, resultCapability, promiseResolve )
</h4>

<!-- 원문 제목: PerformPromiseAll ( iteratorRecord, ctor, resultCapability, promiseResolve ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-performpromiseall -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-promise.allsettled">
  27.5.4.2 Promise.allSettled ( iterable )
</h3>

<!-- 원문 제목: Promise.allSettled ( iterable ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.allsettled -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h4 id="sec-performpromiseallsettled">
  27.5.4.2.1 PerformPromiseAllSettled ( iteratorRecord, ctor, resultCapability, promiseResolve )
</h4>

<!-- 원문 제목: PerformPromiseAllSettled ( iteratorRecord, ctor, resultCapability, promiseResolve ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-performpromiseallsettled -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-promise.any">
  27.5.4.3 Promise.any ( iterable )
</h3>

<!-- 원문 제목: Promise.any ( iterable ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.any -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h4 id="sec-performpromiseany">
  27.5.4.3.1 PerformPromiseAny ( iteratorRecord, ctor, resultCapability, promiseResolve )
</h4>

<!-- 원문 제목: PerformPromiseAny ( iteratorRecord, ctor, resultCapability, promiseResolve ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-performpromiseany -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-promise.prototype">
  27.5.4.4 Promise.prototype
</h3>

<!-- 원문 제목: Promise.prototype -->
<!-- 원문: https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.prototype -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-promise.race">
  27.5.4.5 Promise.race ( iterable )
</h3>

<!-- 원문 제목: Promise.race ( iterable ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.race -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h4 id="sec-performpromiserace">
  27.5.4.5.1 PerformPromiseRace ( iteratorRecord, ctor, resultCapability, promiseResolve )
</h4>

<!-- 원문 제목: PerformPromiseRace ( iteratorRecord, ctor, resultCapability, promiseResolve ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-performpromiserace -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-promise.reject">
  27.5.4.6 Promise.reject ( reason )
</h3>

<!-- 원문 제목: Promise.reject ( reason ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.reject -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-promise.resolve">
  27.5.4.7 Promise.resolve ( resolution )
</h3>

<!-- 원문 제목: Promise.resolve ( resolution ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.resolve -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h4 id="sec-promise-resolve">
  27.5.4.7.1 PromiseResolve ( ctor, resolution )
</h4>

<!-- 원문 제목: PromiseResolve ( ctor, resolution ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise-resolve -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-promise.try">
  27.5.4.8 Promise.try ( callback, ...args )
</h3>

<!-- 원문 제목: Promise.try ( callback, ...args ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.try -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-promise.withResolvers">
  27.5.4.9 Promise.withResolvers ( )
</h3>

<!-- 원문 제목: Promise.withResolvers ( ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.withResolvers -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-get-promise-%symbol.species%">
  27.5.4.10 get Promise [ %Symbol.species% ]
</h3>

<!-- 원문 제목: get Promise [ %Symbol.species% ] -->
<!-- 원문: https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-get-promise-%symbol.species% -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h2 id="sec-properties-of-the-promise-prototype-object">
  27.5.5 Promise 프로토타입 객체의 속성
</h2>

<!-- 원문 제목: Properties of the Promise Prototype Object -->
<!-- 원문: https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-properties-of-the-promise-prototype-object -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-promise.prototype.catch">
  27.5.5.1 Promise.prototype.catch ( onRejected )
</h3>

<!-- 원문 제목: Promise.prototype.catch ( onRejected ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.prototype.catch -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-promise.prototype.constructor">
  27.5.5.2 Promise.prototype.constructor
</h3>

<!-- 원문 제목: Promise.prototype.constructor -->
<!-- 원문: https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.prototype.constructor -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-promise.prototype.finally">
  27.5.5.3 Promise.prototype.finally ( onFinally )
</h3>

<!-- 원문 제목: Promise.prototype.finally ( onFinally ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.prototype.finally -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-promise.prototype.then">
  27.5.5.4 Promise.prototype.then ( onFulfilled, onRejected )
</h3>

<!-- 원문 제목: Promise.prototype.then ( onFulfilled, onRejected ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.prototype.then -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h4 id="sec-performpromisethen">
  27.5.5.4.1 PerformPromiseThen ( promise, onFulfilled, onRejected [ , resultCapability ] )
</h4>

<!-- 원문 제목: PerformPromiseThen ( promise, onFulfilled, onRejected [ , resultCapability ] ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-performpromisethen -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-promise.prototype-%symbol.tostringtag%">
  27.5.5.5 Promise.prototype [ %Symbol.toStringTag% ]
</h3>

<!-- 원문 제목: Promise.prototype [ %Symbol.toStringTag% ] -->
<!-- 원문: https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-promise.prototype-%symbol.tostringtag% -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h2 id="sec-properties-of-promise-instances">
  27.5.6 Promise 인스턴스의 속성
</h2>

<!-- 원문 제목: Properties of Promise Instances -->
<!-- 원문: https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-properties-of-promise-instances -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<!--
이 파일은 ecma262-toc.translated.json으로부터 생성된 번역 뼈대입니다.
절: 25.4 Atomics 객체
원문 제목: The Atomics Object
원문: https://tc39.es/ecma262/multipage/structured-data.html#sec-atomics-object
-->

<span id="sec-atomics-object"></span>

<!-- TODO: 이 문서의 본문을 번역하십시오. -->

<h2 id="sec-waiter-record">
  25.4.1 Waiter 레코드
</h2>

<!-- 원문 제목: Waiter Record -->
<!-- 원문: https://tc39.es/ecma262/multipage/structured-data.html#sec-waiter-record -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h2 id="sec-waiterlist-records">
  25.4.2 WaiterList 레코드
</h2>

<!-- 원문 제목: WaiterList Records -->
<!-- 원문: https://tc39.es/ecma262/multipage/structured-data.html#sec-waiterlist-records -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h2 id="sec-abstract-operations-for-atomics">
  25.4.3 Atomics을 위한 추상 연산
</h2>

<!-- 원문 제목: Abstract Operations for Atomics -->
<!-- 원문: https://tc39.es/ecma262/multipage/structured-data.html#sec-abstract-operations-for-atomics -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-validateintegertypedarray">
  25.4.3.1 ValidateIntegerTypedArray ( ta, waitable )
</h3>

<!-- 원문 제목: ValidateIntegerTypedArray ( ta, waitable ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/structured-data.html#sec-validateintegertypedarray -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-validateatomicaccess">
  25.4.3.2 ValidateAtomicAccess ( taRecord, requestIndex )
</h3>

<!-- 원문 제목: ValidateAtomicAccess ( taRecord, requestIndex ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/structured-data.html#sec-validateatomicaccess -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-validateatomicaccessonintegertypedarray">
  25.4.3.3 ValidateAtomicAccessOnIntegerTypedArray ( ta, requestIndex )
</h3>

<!-- 원문 제목: ValidateAtomicAccessOnIntegerTypedArray ( ta, requestIndex ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/structured-data.html#sec-validateatomicaccessonintegertypedarray -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-revalidateatomicaccess">
  25.4.3.4 RevalidateAtomicAccess ( ta, byteIndexInBuffer )
</h3>

<!-- 원문 제목: RevalidateAtomicAccess ( ta, byteIndexInBuffer ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/structured-data.html#sec-revalidateatomicaccess -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-getwaiterlist">
  25.4.3.5 GetWaiterList ( block, i )
</h3>

<!-- 원문 제목: GetWaiterList ( block, i ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/structured-data.html#sec-getwaiterlist -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-entercriticalsection">
  25.4.3.6 EnterCriticalSection ( waiterList )
</h3>

<!-- 원문 제목: EnterCriticalSection ( waiterList ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/structured-data.html#sec-entercriticalsection -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-leavecriticalsection">
  25.4.3.7 LeaveCriticalSection ( waiterList )
</h3>

<!-- 원문 제목: LeaveCriticalSection ( waiterList ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/structured-data.html#sec-leavecriticalsection -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-addwaiter">
  25.4.3.8 AddWaiter ( waiterList, waiterRecord )
</h3>

<!-- 원문 제목: AddWaiter ( waiterList, waiterRecord ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/structured-data.html#sec-addwaiter -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-removewaiter">
  25.4.3.9 RemoveWaiter ( waiterList, waiterRecord )
</h3>

<!-- 원문 제목: RemoveWaiter ( waiterList, waiterRecord ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/structured-data.html#sec-removewaiter -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-removewaiters">
  25.4.3.10 RemoveWaiters ( waiterList, count )
</h3>

<!-- 원문 제목: RemoveWaiters ( waiterList, count ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/structured-data.html#sec-removewaiters -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-suspendthisagent">
  25.4.3.11 SuspendThisAgent ( waiterList, waiterRecord )
</h3>

<!-- 원문 제목: SuspendThisAgent ( waiterList, waiterRecord ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/structured-data.html#sec-suspendthisagent -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-notifywaiter">
  25.4.3.12 NotifyWaiter ( waiterList, waiterRecord )
</h3>

<!-- 원문 제목: NotifyWaiter ( waiterList, waiterRecord ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/structured-data.html#sec-notifywaiter -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-enqueueresolveinagentjob">
  25.4.3.13 EnqueueResolveInAgentJob ( agentSignifier, promiseCapability, resolution )
</h3>

<!-- 원문 제목: EnqueueResolveInAgentJob ( agentSignifier, promiseCapability, resolution ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/structured-data.html#sec-enqueueresolveinagentjob -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-dowait">
  25.4.3.14 DoWait ( mode, ta, index, value, timeout )
</h3>

<!-- 원문 제목: DoWait ( mode, ta, index, value, timeout ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/structured-data.html#sec-dowait -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-enqueueatomicswaitasynctimeoutjob">
  25.4.3.15 EnqueueAtomicsWaitAsyncTimeoutJob ( waiterList, waiterRecord )
</h3>

<!-- 원문 제목: EnqueueAtomicsWaitAsyncTimeoutJob ( waiterList, waiterRecord ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/structured-data.html#sec-enqueueatomicswaitasynctimeoutjob -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-atomiccompareexchangeinsharedblock">
  25.4.3.16 AtomicCompareExchangeInSharedBlock ( block, byteIndexInBuffer, elementSize, expectedBytes, replacementBytes )
</h3>

<!-- 원문 제목: AtomicCompareExchangeInSharedBlock ( block, byteIndexInBuffer, elementSize, expectedBytes, replacementBytes ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/structured-data.html#sec-atomiccompareexchangeinsharedblock -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-atomicreadmodifywrite">
  25.4.3.17 AtomicReadModifyWrite ( ta, index, value, op )
</h3>

<!-- 원문 제목: AtomicReadModifyWrite ( ta, index, value, op ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/structured-data.html#sec-atomicreadmodifywrite -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-bytelistbitwiseop">
  25.4.3.18 ByteListBitwiseOp ( op, xBytes, yBytes )
</h3>

<!-- 원문 제목: ByteListBitwiseOp ( op, xBytes, yBytes ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/structured-data.html#sec-bytelistbitwiseop -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-bytelistequal">
  25.4.3.19 ByteListEqual ( xBytes, yBytes )
</h3>

<!-- 원문 제목: ByteListEqual ( xBytes, yBytes ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/structured-data.html#sec-bytelistequal -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h2 id="sec-atomics.add">
  25.4.4 Atomics.add ( ta, index, value )
</h2>

<!-- 원문 제목: Atomics.add ( ta, index, value ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/structured-data.html#sec-atomics.add -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h2 id="sec-atomics.and">
  25.4.5 Atomics.and ( ta, index, value )
</h2>

<!-- 원문 제목: Atomics.and ( ta, index, value ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/structured-data.html#sec-atomics.and -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h2 id="sec-atomics.compareexchange">
  25.4.6 Atomics.compareExchange ( ta, index, expectedValue, replacementValue )
</h2>

<!-- 원문 제목: Atomics.compareExchange ( ta, index, expectedValue, replacementValue ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/structured-data.html#sec-atomics.compareexchange -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h2 id="sec-atomics.exchange">
  25.4.7 Atomics.exchange ( ta, index, value )
</h2>

<!-- 원문 제목: Atomics.exchange ( ta, index, value ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/structured-data.html#sec-atomics.exchange -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h2 id="sec-atomics.islockfree">
  25.4.8 Atomics.isLockFree ( size )
</h2>

<!-- 원문 제목: Atomics.isLockFree ( size ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/structured-data.html#sec-atomics.islockfree -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h2 id="sec-atomics.load">
  25.4.9 Atomics.load ( ta, index )
</h2>

<!-- 원문 제목: Atomics.load ( ta, index ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/structured-data.html#sec-atomics.load -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h2 id="sec-atomics.notify">
  25.4.10 Atomics.notify ( ta, index, count )
</h2>

<!-- 원문 제목: Atomics.notify ( ta, index, count ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/structured-data.html#sec-atomics.notify -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h2 id="sec-atomics.or">
  25.4.11 Atomics.or ( ta, index, value )
</h2>

<!-- 원문 제목: Atomics.or ( ta, index, value ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/structured-data.html#sec-atomics.or -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h2 id="sec-atomics.pause">
  25.4.12 Atomics.pause ( )
</h2>

<!-- 원문 제목: Atomics.pause ( ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/structured-data.html#sec-atomics.pause -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h2 id="sec-atomics.store">
  25.4.13 Atomics.store ( ta, index, value )
</h2>

<!-- 원문 제목: Atomics.store ( ta, index, value ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/structured-data.html#sec-atomics.store -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h2 id="sec-atomics.sub">
  25.4.14 Atomics.sub ( ta, index, value )
</h2>

<!-- 원문 제목: Atomics.sub ( ta, index, value ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/structured-data.html#sec-atomics.sub -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h2 id="sec-atomics.wait">
  25.4.15 Atomics.wait ( ta, index, value, timeout )
</h2>

<!-- 원문 제목: Atomics.wait ( ta, index, value, timeout ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/structured-data.html#sec-atomics.wait -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h2 id="sec-atomics.waitasync">
  25.4.16 Atomics.waitAsync ( ta, index, value, timeout )
</h2>

<!-- 원문 제목: Atomics.waitAsync ( ta, index, value, timeout ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/structured-data.html#sec-atomics.waitasync -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h2 id="sec-atomics.xor">
  25.4.17 Atomics.xor ( ta, index, value )
</h2>

<!-- 원문 제목: Atomics.xor ( ta, index, value ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/structured-data.html#sec-atomics.xor -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h2 id="sec-atomics-%symbol.tostringtag%">
  25.4.18 Atomics [ %Symbol.toStringTag% ]
</h2>

<!-- 원문 제목: Atomics [ %Symbol.toStringTag% ] -->
<!-- 원문: https://tc39.es/ecma262/multipage/structured-data.html#sec-atomics-%symbol.tostringtag% -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

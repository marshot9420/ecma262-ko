<!--
이 파일은 ecma262-toc.translated.json으로부터 생성된 번역 뼈대입니다.
절: 16.2 모듈
원문 제목: Modules
원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-modules
-->

<span id="sec-modules"></span>

<!-- TODO: 이 문서의 본문을 번역하십시오. -->

<h2 id="sec-module-semantics">
  16.2.1 모듈 의미론
</h2>

<!-- 원문 제목: Module Semantics -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-module-semantics -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-module-semantics-static-semantics-early-errors">
  16.2.1.1 정적 의미론: Early Errors
</h3>

<!-- 원문 제목: Static Semantics: Early Errors -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-module-semantics-static-semantics-early-errors -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-importedlocalnames">
  16.2.1.2 정적 의미론: ImportedLocalNames ( importEntries )
</h3>

<!-- 원문 제목: Static Semantics: ImportedLocalNames ( importEntries ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-importedlocalnames -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-modulerequest-record">
  16.2.1.3 ModuleRequest 레코드
</h3>

<!-- 원문 제목: ModuleRequest Records -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-modulerequest-record -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h4 id="sec-ModuleRequestsEqual">
  16.2.1.3.1 ModuleRequestsEqual ( x, y )
</h4>

<!-- 원문 제목: ModuleRequestsEqual ( x, y ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-ModuleRequestsEqual -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-static-semantics-modulerequests">
  16.2.1.4 정적 의미론: ModuleRequests
</h3>

<!-- 원문 제목: Static Semantics: ModuleRequests -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-static-semantics-modulerequests -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-abstract-module-records">
  16.2.1.5 추상 Module Record
</h3>

<!-- 원문 제목: Abstract Module Records -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-abstract-module-records -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h4 id="sec-EvaluateModuleSync">
  16.2.1.5.1 EvaluateModuleSync ( module )
</h4>

<!-- 원문 제목: EvaluateModuleSync ( module ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-EvaluateModuleSync -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-cyclic-module-records">
  16.2.1.6 순환 Module Record
</h3>

<!-- 원문 제목: Cyclic Module Records -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-cyclic-module-records -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h4 id="sec-cyclic-module-record-module-record-methods">
  16.2.1.6.1 Module Record 추상 메서드의 구현
</h4>

<!-- 원문 제목: Implementation of Module Record Abstract Methods -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-cyclic-module-record-module-record-methods -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h5 id="sec-LoadRequestedModules">
  16.2.1.6.1.1 LoadRequestedModules ( [ hostDefined ] )
</h5>

<!-- 원문 제목: LoadRequestedModules ( [ hostDefined ] ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-LoadRequestedModules -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h6 id="sec-InnerModuleLoading">
  16.2.1.6.1.1.1 InnerModuleLoading ( state, module )
</h6>

<!-- 원문 제목: InnerModuleLoading ( state, module ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-InnerModuleLoading -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h6 id="sec-ContinueModuleLoading">
  16.2.1.6.1.1.2 ContinueModuleLoading ( state, moduleCompletion )
</h6>

<!-- 원문 제목: ContinueModuleLoading ( state, moduleCompletion ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-ContinueModuleLoading -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h5 id="sec-moduledeclarationlinking">
  16.2.1.6.1.2 Link ( )
</h5>

<!-- 원문 제목: Link ( ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-moduledeclarationlinking -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h6 id="sec-InnerModuleLinking">
  16.2.1.6.1.2.1 InnerModuleLinking ( module, stack, index )
</h6>

<!-- 원문 제목: InnerModuleLinking ( module, stack, index ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-InnerModuleLinking -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h5 id="sec-moduleevaluation">
  16.2.1.6.1.3 Evaluate ( )
</h5>

<!-- 원문 제목: Evaluate ( ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-moduleevaluation -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h6 id="sec-innermoduleevaluation">
  16.2.1.6.1.3.1 InnerModuleEvaluation ( module, stack, index )
</h6>

<!-- 원문 제목: InnerModuleEvaluation ( module, stack, index ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-innermoduleevaluation -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h6 id="sec-execute-async-module">
  16.2.1.6.1.3.2 ExecuteAsyncModule ( module )
</h6>

<!-- 원문 제목: ExecuteAsyncModule ( module ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-execute-async-module -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h6 id="sec-gather-available-ancestors">
  16.2.1.6.1.3.3 GatherAvailableAncestors ( module, execList )
</h6>

<!-- 원문 제목: GatherAvailableAncestors ( module, execList ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-gather-available-ancestors -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h6 id="sec-async-module-execution-fulfilled">
  16.2.1.6.1.3.4 AsyncModuleExecutionFulfilled ( module )
</h6>

<!-- 원문 제목: AsyncModuleExecutionFulfilled ( module ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-async-module-execution-fulfilled -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h6 id="sec-async-module-execution-rejected">
  16.2.1.6.1.3.5 AsyncModuleExecutionRejected ( module, error )
</h6>

<!-- 원문 제목: AsyncModuleExecutionRejected ( module, error ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-async-module-execution-rejected -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h4 id="sec-example-cyclic-module-record-graphs">
  16.2.1.6.2 순환 Module Record 그래프 예시
</h4>

<!-- 원문 제목: Example Cyclic Module Record Graphs -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-example-cyclic-module-record-graphs -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-source-text-module-records">
  16.2.1.7 소스 텍스트 Module Record
</h3>

<!-- 원문 제목: Source Text Module Records -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-source-text-module-records -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h4 id="sec-parsemodule">
  16.2.1.7.1 ParseModule ( sourceText, realm, hostDefined )
</h4>

<!-- 원문 제목: ParseModule ( sourceText, realm, hostDefined ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-parsemodule -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h4 id="sec-source-text-module-record-module-record-methods">
  16.2.1.7.2 Module Record 추상 메서드의 구현
</h4>

<!-- 원문 제목: Implementation of Module Record Abstract Methods -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-source-text-module-record-module-record-methods -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h5 id="sec-getexportednames">
  16.2.1.7.2.1 GetExportedNames ( [ exportStarSet ] )
</h5>

<!-- 원문 제목: GetExportedNames ( [ exportStarSet ] ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-getexportednames -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h5 id="sec-resolveexport">
  16.2.1.7.2.2 ResolveExport ( exportName [ , resolveSet ] )
</h5>

<!-- 원문 제목: ResolveExport ( exportName [ , resolveSet ] ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-resolveexport -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h4 id="sec-source-text-module-record-cyclic-module-record-methods">
  16.2.1.7.3 순환 Module Record 추상 메서드의 구현
</h4>

<!-- 원문 제목: Implementation of Cyclic Module Record Abstract Methods -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-source-text-module-record-cyclic-module-record-methods -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h5 id="sec-source-text-module-record-initialize-environment">
  16.2.1.7.3.1 InitializeEnvironment ( )
</h5>

<!-- 원문 제목: InitializeEnvironment ( ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-source-text-module-record-initialize-environment -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h5 id="sec-source-text-module-record-execute-module">
  16.2.1.7.3.2 ExecuteModule ( [ capability ] )
</h5>

<!-- 원문 제목: ExecuteModule ( [ capability ] ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-source-text-module-record-execute-module -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-synthetic-module-records">
  16.2.1.8 합성 Module Record
</h3>

<!-- 원문 제목: Synthetic Module Records -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-synthetic-module-records -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h4 id="sec-create-default-export-synthetic-module">
  16.2.1.8.1 CreateDefaultExportSyntheticModule ( defaultExport )
</h4>

<!-- 원문 제목: CreateDefaultExportSyntheticModule ( defaultExport ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-create-default-export-synthetic-module -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h4 id="sec-parse-json-module">
  16.2.1.8.2 ParseJSONModule ( source )
</h4>

<!-- 원문 제목: ParseJSONModule ( source ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-parse-json-module -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h4 id="sec-setsyntheticmoduleexport">
  16.2.1.8.3 SetSyntheticModuleExport ( module, exportName, exportValue )
</h4>

<!-- 원문 제목: SetSyntheticModuleExport ( module, exportName, exportValue ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-setsyntheticmoduleexport -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h4 id="sec-smr-module-record-methods">
  16.2.1.8.4 Module Record 추상 메서드의 구현
</h4>

<!-- 원문 제목: Implementation of Module Record Abstract Methods -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-smr-module-record-methods -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h5 id="sec-smr-LoadRequestedModules">
  16.2.1.8.4.1 LoadRequestedModules ( [ hostDefined ] )
</h5>

<!-- 원문 제목: LoadRequestedModules ( [ hostDefined ] ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-smr-LoadRequestedModules -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h5 id="sec-smr-getexportednames">
  16.2.1.8.4.2 GetExportedNames ( [ exportStarSet ] )
</h5>

<!-- 원문 제목: GetExportedNames ( [ exportStarSet ] ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-smr-getexportednames -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h5 id="sec-smr-resolveexport">
  16.2.1.8.4.3 ResolveExport ( exportName [ , resolveSet ] )
</h5>

<!-- 원문 제목: ResolveExport ( exportName [ , resolveSet ] ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-smr-resolveexport -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h5 id="sec-smr-Link">
  16.2.1.8.4.4 Link ( )
</h5>

<!-- 원문 제목: Link ( ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-smr-Link -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h5 id="sec-smr-Evaluate">
  16.2.1.8.4.5 Evaluate ( )
</h5>

<!-- 원문 제목: Evaluate ( ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-smr-Evaluate -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-GetImportedModule">
  16.2.1.9 GetImportedModule ( referrer, request )
</h3>

<!-- 원문 제목: GetImportedModule ( referrer, request ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-GetImportedModule -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-HostLoadImportedModule">
  16.2.1.10 HostLoadImportedModule ( referrer, moduleRequest, hostDefined, payload )
</h3>

<!-- 원문 제목: HostLoadImportedModule ( referrer, moduleRequest, hostDefined, payload ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-HostLoadImportedModule -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-FinishLoadingImportedModule">
  16.2.1.11 FinishLoadingImportedModule ( referrer, moduleRequest, payload, result )
</h3>

<!-- 원문 제목: FinishLoadingImportedModule ( referrer, moduleRequest, payload, result ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-FinishLoadingImportedModule -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-AllImportAttributesSupported">
  16.2.1.12 AllImportAttributesSupported ( attrs )
</h3>

<!-- 원문 제목: AllImportAttributesSupported ( attrs ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-AllImportAttributesSupported -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h4 id="sec-hostgetsupportedimportattributes">
  16.2.1.12.1 HostGetSupportedImportAttributes ( )
</h4>

<!-- 원문 제목: HostGetSupportedImportAttributes ( ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-hostgetsupportedimportattributes -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-getmodulenamespace">
  16.2.1.13 GetModuleNamespace ( module )
</h3>

<!-- 원문 제목: GetModuleNamespace ( module ) -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-getmodulenamespace -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-module-semantics-runtime-semantics-evaluation">
  16.2.1.14 런타임 의미론: Evaluation
</h3>

<!-- 원문 제목: Runtime Semantics: Evaluation -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-module-semantics-runtime-semantics-evaluation -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h2 id="sec-imports">
  16.2.2 Imports
</h2>

<!-- 원문 제목: Imports -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-imports -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-imports-static-semantics-early-errors">
  16.2.2.1 정적 의미론: Early Errors
</h3>

<!-- 원문 제목: Static Semantics: Early Errors -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-imports-static-semantics-early-errors -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-static-semantics-importentries">
  16.2.2.2 정적 의미론: ImportEntries
</h3>

<!-- 원문 제목: Static Semantics: ImportEntries -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-static-semantics-importentries -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-static-semantics-importentriesformodule">
  16.2.2.3 정적 의미론: ImportEntriesForModule
</h3>

<!-- 원문 제목: Static Semantics: ImportEntriesForModule -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-static-semantics-importentriesformodule -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-withclausetoattributes">
  16.2.2.4 정적 의미론: WithClauseToAttributes
</h3>

<!-- 원문 제목: Static Semantics: WithClauseToAttributes -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-withclausetoattributes -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h2 id="sec-exports">
  16.2.3 Exports
</h2>

<!-- 원문 제목: Exports -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-exports -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-exports-static-semantics-early-errors">
  16.2.3.1 정적 의미론: Early Errors
</h3>

<!-- 원문 제목: Static Semantics: Early Errors -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-exports-static-semantics-early-errors -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-static-semantics-exportedbindings">
  16.2.3.2 정적 의미론: ExportedBindings
</h3>

<!-- 원문 제목: Static Semantics: ExportedBindings -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-static-semantics-exportedbindings -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-static-semantics-exportednames">
  16.2.3.3 정적 의미론: ExportedNames
</h3>

<!-- 원문 제목: Static Semantics: ExportedNames -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-static-semantics-exportednames -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-static-semantics-exportentries">
  16.2.3.4 정적 의미론: ExportEntries
</h3>

<!-- 원문 제목: Static Semantics: ExportEntries -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-static-semantics-exportentries -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-static-semantics-exportentriesformodule">
  16.2.3.5 정적 의미론: ExportEntriesForModule
</h3>

<!-- 원문 제목: Static Semantics: ExportEntriesForModule -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-static-semantics-exportentriesformodule -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-static-semantics-referencedbindings">
  16.2.3.6 정적 의미론: ReferencedBindings
</h3>

<!-- 원문 제목: Static Semantics: ReferencedBindings -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-static-semantics-referencedbindings -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

<h3 id="sec-exports-runtime-semantics-evaluation">
  16.2.3.7 런타임 의미론: Evaluation
</h3>

<!-- 원문 제목: Runtime Semantics: Evaluation -->
<!-- 원문: https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html#sec-exports-runtime-semantics-evaluation -->
<!-- TODO: 이 절의 번역문을 작성하십시오. -->

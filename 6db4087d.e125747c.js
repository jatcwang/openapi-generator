(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{195:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(9),i=(n(0),n(307)),o={id:"faq-generators",title:"FAQ: Generators"},c={id:"faq-generators",title:"FAQ: Generators",description:"### What are some server generator use cases?",source:"@site/../docs/faq-generators.md",permalink:"/docs/faq-generators",editUrl:"https://github.com/OpenAPITools/openapi-generator/edit/master/website/../docs/faq-generators.md",lastUpdatedBy:"Aanisha Mishra",lastUpdatedAt:1608516932,sidebar:"faq-sidebar",previous:{title:"FAQ: Contributing",permalink:"/docs/faq-contributing"}},l=[{value:"What are some server generator use cases?",id:"what-are-some-server-generator-use-cases",children:[]},{value:"Java",id:"java",children:[{value:"The API client has SSL errors due to an invalid certificate. Is there a way to bypass that?",id:"the-api-client-has-ssl-errors-due-to-an-invalid-certificate-is-there-a-way-to-bypass-that",children:[]},{value:"How can I customize the Feign client templates?",id:"how-can-i-customize-the-feign-client-templates",children:[]}]},{value:"Android",id:"android",children:[{value:"How can I generate an Android SDK?",id:"how-can-i-generate-an-android-sdk",children:[]}]},{value:"C-Sharp",id:"c-sharp",children:[{value:"How do I fix <code>CSC:  warning CS2002</code> in Xamarin?",id:"how-do-i-fix-csc--warning-cs2002-in-xamarin",children:[]}]},{value:"Objective-C",id:"objective-c",children:[{value:"How do I run integration test with Petstore ObjC API client?",id:"how-do-i-run-integration-test-with-petstore-objc-api-client",children:[]}]},{value:"Swift",id:"swift",children:[{value:"How do I run integration test with Petstore Swift API client?",id:"how-do-i-run-integration-test-with-petstore-swift-api-client",children:[]},{value:"Is Swift (2.x) generator still actively maintained?",id:"is-swift-2x-generator-still-actively-maintained",children:[]}]},{value:"TypeScript",id:"typescript",children:[{value:"The JSON response fails to deserialize due to change in variable naming (snake_case to camelCase). Is there any way to keep the original naming?",id:"the-json-response-fails-to-deserialize-due-to-change-in-variable-naming-snake_case-to-camelcase-is-there-any-way-to-keep-the-original-naming",children:[]}]}],s={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"what-are-some-server-generator-use-cases"},"What are some server generator use cases?"),Object(i.b)("p",null,"We have around 40+ server generators, with more added regularly. Some of these include Spring in your choice of Java or Kotlin, the Finch and Scalatra frameworks using Scala, and C# generators for NancyFX and WebAPI (to name only a few)."),Object(i.b)("p",null,"Besides generating the server code as a starting point to implement the API backend, here are some use cases of the server generators:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"prototyping")," - one can generate the server code and have a functional API backend very quickly to try different things or features."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"mocking")," - easily provide an API backend for mocking based on the examples field defined in the response object."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"migration")," - let's say one wants to migrate an API backend from Ruby on Rails to Java Spring. The server generator can save a lot of time in implementing and verify each endpoint in the new API backend."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"evaluating"),' - when you want to try a new language or framework, and a typical "Hello, World" is too trivial.')),Object(i.b)("h2",{id:"java"},"Java"),Object(i.b)("h3",{id:"the-api-client-has-ssl-errors-due-to-an-invalid-certificate-is-there-a-way-to-bypass-that"},"The API client has SSL errors due to an invalid certificate. Is there a way to bypass that?"),Object(i.b)("p",null,"Yes, please refer to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://stackoverflow.com/a/6055903/677735"}),"http://stackoverflow.com/a/6055903/677735")),Object(i.b)("h3",{id:"how-can-i-customize-the-feign-client-templates"},"How can I customize the Feign client templates?"),Object(i.b)("p",null,"You will need to provide customized files in ",Object(i.b)("inlineCode",{parentName:"p"},"Java/libraries/feign")," under the resources folder and pass the location via the ",Object(i.b)("inlineCode",{parentName:"p"},"-t")," option."),Object(i.b)("p",null,"In your Gradle build script, please add the following (example):"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"config.templateDir = 'src/openapi-generator-templates/Java/libraries/feign\n")),Object(i.b)("h2",{id:"android"},"Android"),Object(i.b)("h3",{id:"how-can-i-generate-an-android-sdk"},"How can I generate an Android SDK?"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"The Java SDK is also compatible with Android.")),Object(i.b)("p",null,"[RECOMMENDED]"," To generate the Java SDK with ",Object(i.b)("inlineCode",{parentName:"p"},"okhttp")," and ",Object(i.b)("inlineCode",{parentName:"p"},"gson")," libraries, run the following:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"mvn clean package\njava -jar modules/openapi-generator-cli/target/openapi-generator-cli.jar generate \\\n  -i https://raw.githubusercontent.com/OpenAPITools/openapi-generator/master/modules/openapi-generator/src/test/resources/3_0/petstore.json \\\n  -l java --library=okhttp-gson \\\n  --additional-properties hideGenerationTimestamp=true \\\n  -o /var/tmp/java/okhttp-gson/ \n")),Object(i.b)("p",null,"You can also generate the Java SDK with other HTTP libraries by replacing ",Object(i.b)("inlineCode",{parentName:"p"},"okhttp-gson")," with ",Object(i.b)("inlineCode",{parentName:"p"},"retrofit")," for example. For a list of support libraries, please run"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"java -jar modules/openapi-generator-cli/target/openapi-generator-cli.jar config-help -l java\n")),Object(i.b)("p",null,"To generate the Android SDK with ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mcxiaoke/android-volley"}),Object(i.b)("inlineCode",{parentName:"a"},"volley")),", please run"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"mvn clean package\njava -jar modules/openapi-generator-cli/target/openapi-generator-cli.jar generate \\\n  -i https://raw.githubusercontent.com/OpenAPITools/openapi-generator/master/modules/openapi-generator/src/test/resources/3_0/petstore.json \\\n  -l android --library=volley \\\n  -o /var/tmp/android/volley/ \n")),Object(i.b)("p",null,"We do ",Object(i.b)("strong",{parentName:"p"},"not")," recommend using the default HTTP library (Apache HttpClient) with ",Object(i.b)("inlineCode",{parentName:"p"},"android")," as it's not actively maintained."),Object(i.b)("h2",{id:"c-sharp"},"C-Sharp"),Object(i.b)("h3",{id:"how-do-i-fix-csc--warning-cs2002-in-xamarin"},"How do I fix ",Object(i.b)("inlineCode",{parentName:"h3"},"CSC:  warning CS2002")," in Xamarin?"),Object(i.b)("p",null,"The full warning might look like this: ",Object(i.b)("inlineCode",{parentName:"p"},"CSC:  warning CS2002: Source file 'Api/FakeApi.cs' specified multiple times")),Object(i.b)("p",null,"The warning has no impact on the build process so you should be able to build the solution without issue. The warning should be addressed in the upcoming stable release of Xamarin. "),Object(i.b)("h2",{id:"objective-c"},"Objective-C"),Object(i.b)("h3",{id:"how-do-i-run-integration-test-with-petstore-objc-api-client"},"How do I run integration test with Petstore ObjC API client?"),Object(i.b)("p",null,"Here are the steps:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"git clone https://github.com/openapitools/openapi-generator.git\ncd openapi-generator/samples/client/petstore/objc/default/OpenAPIClientTests\nmvn integration-test\n")),Object(i.b)("p",null,"Besides ",Object(i.b)("inlineCode",{parentName:"p"},"default")," (folder) ObjC API client, there's also ",Object(i.b)("inlineCode",{parentName:"p"},"core-data")," for another ObjC API client with ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Core_Data"}),"Core Data support"),"."),Object(i.b)("h2",{id:"swift"},"Swift"),Object(i.b)("h3",{id:"how-do-i-run-integration-test-with-petstore-swift-api-client"},"How do I run integration test with Petstore Swift API client?"),Object(i.b)("p",null,"Here are the steps:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"git clone https://github.com/openapitools/openapi-generator.git\ncd openapi-generator/samples/client/petstore/swift/default/OpenAPIClientTests\nmvn integration-test\n")),Object(i.b)("p",null,"Besides ",Object(i.b)("inlineCode",{parentName:"p"},"default")," (folder), there's another folder ",Object(i.b)("inlineCode",{parentName:"p"},"promisekit")," for Swift API client with ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mxcl/PromiseKit"}),"PromiseKit support")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"git clone https://github.com/openapitools/openapi-generator.git\ncd openapi-generator/samples/client/petstore/swift/promisekit/OpenAPIClientTests\nmvn integration-test\n")),Object(i.b)("h3",{id:"is-swift-2x-generator-still-actively-maintained"},"Is Swift (2.x) generator still actively maintained?"),Object(i.b)("p",null,"No, please use ",Object(i.b)("inlineCode",{parentName:"p"},"swift3")," or ",Object(i.b)("inlineCode",{parentName:"p"},"swift4")," generator instead as we want to focus on Swift 3.x, 4.x."),Object(i.b)("h2",{id:"typescript"},"TypeScript"),Object(i.b)("h3",{id:"the-json-response-fails-to-deserialize-due-to-change-in-variable-naming-snake_case-to-camelcase-is-there-any-way-to-keep-the-original-naming"},"The JSON response fails to deserialize due to change in variable naming (snake_case to camelCase). Is there any way to keep the original naming?"),Object(i.b)("p",null,"Yes, please use the following option when generating TypeScript clients:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"    modelPropertyNaming\n        Naming convention for the property: 'camelCase', 'PascalCase', 'snake_case' and 'original', which keeps the original name (Default: camelCase)\n")))}p.isMDXComponent=!0},307:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,h=b["".concat(o,".").concat(u)]||b[u]||d[u]||i;return n?r.a.createElement(h,c({ref:t},s,{components:n})):r.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);
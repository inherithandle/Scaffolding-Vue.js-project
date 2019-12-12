# Scaffolding Vue.js project with Webpack
Webpack을 이용하여 간단하게 Vue.js 프로젝트 구조를 잡을 때 참고할 수 있다.

### 소스코드가 포함하고 있는 기능
* Multiple entries를 선언하여 Multi pages application을 만든다.
  * print.js는 번들링만하고 사용하지 않음.
  * pages.json을 만들어서 entry 선언을 webpack.config.js와 분리
* 모든 `.vue` 파일들은 [SFC](https://vuejs.org/v2/guide/single-file-components.html)(Single File Components) 포맷을 따른다.
* App.vue 인스턴스가 `Button1.vue`, `Button2.vue`, `Button3.vue`를 import한다. `Button[1-3].vue`는 <button> 태그와 button을 꾸며주는 scoped SASS(SCSS)를 가지고 있다. Button1.vue의 SASS는 Button2.vue의 SASS의 영향을 주지 않는다.
* src/html 디렉토리에 있는 html 파일들을 dist/html로 복사, CopyPlugin
* Webpack dev server를 사용. HMR(Hot Module Reloading)을 지원함.
* `inline-source-map`를 사용하여 개발 서버에서는 output 파일들이 난독화되게 하지 않게. 디버깅 편하게.

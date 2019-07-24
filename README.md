# Scaffolding Vue.js project with Webpack
Webpack을 이용하여 간단하게 Vue.js 프로젝트 구조를 잡을 때 참고할 수 있다.

### 소스코드가 포함하고 있는 기능
* Multiple entries를 선언하여 Multi pages application을 만든다.
  * print.js는 번들링만하고 사용하지 않음.
  * pages.json을 만들어서 entry 선언을 webpack.config.js와 분리
* Vue 인스턴스가 다른 Vue 인스턴스를 컴포넌트로 포함, Composing with Components
* 모든 `.vue` 파일들은 [SFC](https://vuejs.org/v2/guide/single-file-components.html)(Single File Components) 포맷을 따른다.
* 각 버튼 인스턴스들은 자신만의 css를 가지고 있는데, 모두 button selctor를 가지고 있다. scoped선언을 통해 다른 버튼의 css를 침범 하지 않는다.
* src/html 디렉토리에 있는 html 파일들을 dist/html로 복사, CopyPlugin
* Webpack dev server를 사용. HMR(Hot Module Reloading)을 지원함.
* `inline-source-map`를 사용하여 output 파일들이 난독화되게 하지 않게

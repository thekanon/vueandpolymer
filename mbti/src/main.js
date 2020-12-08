import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld';
import VoteList from './components/Vote/VoteList';
import gridSelect from './components/gridSelect'
import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-boost'


Vue.use(VueApollo)
Vue.use(VueRouter)
Vue.config.productionTip = false


const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: 'http://localhost:4000'
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})
// 0. 모듈 시스템 (예: vue-cli)을 이용하고 있다면, Vue와 Vue 라우터를 import 하세요
// 그리고 `Vue.use(VueRouter)`를 호출하세요


// 1. 라우트 컴포넌트를 정의하세요.
// 아래 내용들은 다른 파일로부터 가져올 수 있습니다.
const Foo = VoteList
const Bar = HelloWorld
const Test = gridSelect
// 2. 라우트를 정의하세요.
// Each route should map to a component. The "component" can
// 각 라우트는 반드시 컴포넌트와 매핑되어야 합니다.
// "component"는 `Vue.extend()`를 통해 만들어진
// 실제 컴포넌트 생성자이거나 컴포넌트 옵션 객체입니다.
const routes = [
  { path: '/foo', component: Foo },
  { path: '/test', component: Test },
  { path: '/bar', component: Bar }
]

// 3. `routes` 옵션과 함께 router 인스턴스를 만드세요.
// 추가 옵션을 여기서 전달해야합니다.
// 지금은 간단하게 유지하겠습니다.
const router = new VueRouter({
  routes // `routes: routes`의 줄임
})

// 4. 루트 인스턴스를 만들고 mount 하세요.
// router와 router 옵션을 전체 앱에 주입합니다.
// 이제 앱이 시작됩니다!
new Vue({
  vuetify,
  apolloProvider,
  router,
  render: h => h(App)
}).$mount('#app')

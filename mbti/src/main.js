import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-boost'

import {Menu} from './components/menu/menu'
// 0. 모듈 시스템 (예: vue-cli)을 이용하고 있다면, Vue와 Vue 라우터를 import
// 그리고 `Vue.use(VueRouter)`를 호출
Vue.use(VueApollo)
Vue.use(VueRouter)
Vue.config.productionTip = false



const apolloClient = new ApolloClient({
  uri: 'http://localhost:4000'
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})


// 1. 라우트 컴포넌트 경로 및 실제 파일 경로 json으로 생성
let menu = new Menu()
// const menuJSON = menu.menuJSON
// console.log(menuJSON)
// 2. 라우트 정의
// 각 라우트는 반드시 컴포넌트와 매핑되어야 함.
// "component"는 `Vue.extend()`를 통해 만들어진
// 실제 컴포넌트 생성자이거나 컴포넌트 옵션 객체여야함.
const menuJSON = menu.menuJSON;
async function load(){
  const routes=[]
  
  //ncrm처럼 json을 받아 직접 컨버팅함
  menuJSON.forEach(element => {
    routes.push(
      {
        path:element.path,
        component:() => import(`${element.component}`)
      }
    )
  });
  // 3. `routes` 옵션과 함께 router 인스턴스 생성.
  // 추가 옵션을 여기서 전달
  const router = new VueRouter({
    routes // `routes: routes`의 줄임
  })
  
  // 4. 루트 인스턴스를 만들고 mount
  
  // router와 router 옵션을 전체 앱에 주입.
  new Vue({
    vuetify,
    apolloProvider,
    router,
    render: h => h(App)
  }).$mount('#app')
}
load();
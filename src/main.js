//뷰라이브러리 기능추가
import Vue from 'vue'

//최상위 컴포넌트 추가
import App from './App.vue'

//뷰라우터 라이브러리 기능추가
import VueRouter from 'vue-router'

//라우팅 파일을 이용해 라우팅 배열정보 불러오기
import Routes from './router/routes.js'
// axios 추가
import axios from 'axios'

// 웹소켓 추가
// import io from 'vue-socket.io';
// const socket = io('http://localhost:3000');

// import io from 'socket.io-client'
// const socket = io('http://localhost:3001');

//Vuex
// import store from './store';

//웹소켓 전역객체에 달기
// Vue.prototype.$socket = socket;

//뷰라이브러리에서 라우팅 사용할수 있게 설정
Vue.use(VueRouter)
Vue.prototype.$http = axios;
Vue.prototype.$url = 'http://localhost:8080';
Vue.prototype.$serverUrl = 'http://localhost:3000';

//로그인 성공하면, userId를 전역객체에 담고 쓰면 어떨까?
Vue.prototype.$userId = '5dee0137aa583a45f98dd628';
//dummy data의 main사용자
//userId는 'haru'

const router = new VueRouter({
  mode: 'history',
  routes:Routes
})


Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router:router,
  // store
}).$mount('#app')
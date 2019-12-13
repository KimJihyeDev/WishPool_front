<template>
  <div id="app">
    <!--헤더공통컴포넌트-->
    <Header/>
    <!--본문 컨텐츠 출력 영역 -->
    <router-view></router-view>
    <!-- 하단 공통컴포넌트 -->
    <Footer/>

  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'app',
  created: function () {
    this.$http.interceptors.response.use(undefined, function (err) {
      return new Promise(function (){
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch(logout)
          //로그아웃처리
        }
        throw err;
      });
    });
  },
  components: {
    Header,
    Footer,
  },
 
}
</script>
<style scoped>
#app{
  width:100%;
}
</style>

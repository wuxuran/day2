<template>
  <div id="app">
    <Header></Header>
    <main>
      <!-- 路由出口 -->
      <router-view></router-view>
    </main>
    <div class="footer">
      <router-link to='/index'>首页</router-link>
      <router-link to='/list'>列表</router-link>
      <router-link to='/car'>购物车</router-link>
      <router-link to='/my'>我的</router-link>
    </div>
  </div>
</template>
<script>
import Header from './components/Header'

export default {
  components:{
    Header
  }
}
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
html,body{
  width: 100%;
  height: 100%;
}
  #app{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  main{
    flex: 1;
    overflow-y: scroll;
  }
  .footer{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
</style>

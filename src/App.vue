<template>
  <div id="app">
    <Header/>
    <div class="page-header-main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header';
// import mainList from '@/components/main-list';
export default {
  name: 'App',
  data(){
    return{
      popupVisible:false,
    }
  },
  components:{
    Header,
  }
}
</script>

<style>
.page-header-main {
  height:100vh;
  padding-top: 40px;
  box-sizing: border-box;
}
</style>

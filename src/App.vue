<template>
  <div id="app">
    <Header/>
    <mt-popup v-model="popupVisible" position="top"> 123424234234234</mt-popup>
    <div class="page-header-main">
      <main-list/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import mainList from '@/components/main-list.vue';
export default {
  name: 'App',
  data(){
    return{
      popupVisible:false,
    }
  },
  components:{
    Header,
    mainList
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

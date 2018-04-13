<template>
  <div id="app">
    <Header></Header>
    <mt-popup v-model="popupVisible" position="top"> 123424234234234</mt-popup>
    <div class="page-header-main">
      <mt-index-list>
        <mt-index-section index="A">
          <mt-cell title="Aaron"></mt-cell>
          <mt-cell title="Alden"></mt-cell>
          <mt-cell title="Austin"></mt-cell>
        </mt-index-section>
        <mt-index-section index="B">
          <mt-cell title="Baldwin"></mt-cell>
          <mt-cell title="Braden"></mt-cell>
        </mt-index-section>
        <mt-index-section index="C">
          <mt-cell title="Baldwin"></mt-cell>
          <mt-cell title="Braden"></mt-cell>
        </mt-index-section>
        <mt-index-section index="D">
          <mt-cell title="Baldwin"></mt-cell>
          <mt-cell title="Braden"></mt-cell>
        </mt-index-section>
        <mt-index-section index="E">
          <mt-cell title="Baldwin"></mt-cell>
          <mt-cell title="Braden"></mt-cell>
        </mt-index-section>
        <mt-index-section index="F">
          <mt-cell title="Baldwin"></mt-cell>
          <mt-cell title="Braden"></mt-cell>
        </mt-index-section>
        <mt-index-section index="G">
          <mt-cell title="Baldwin"></mt-cell>
          <mt-cell title="Braden"></mt-cell>
        </mt-index-section>
        <mt-index-section index="H">
          <mt-cell title="Baldwin"></mt-cell>
          <mt-cell title="Braden"></mt-cell>
        </mt-index-section>
        <mt-index-section index="Z">
          <mt-cell title="Zack"></mt-cell>
          <mt-cell title="Zane"></mt-cell>
        </mt-index-section>
      </mt-index-list>
      
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
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
  box-sizing: border-box;
}
</style>

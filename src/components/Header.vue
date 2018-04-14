<template>
  <div>
     <mt-header fixed title="通讯录">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
  </div>
</template>

<script>
  export default {
    name:'Header',
  }
</script>

<style scoped>

</style>
<template>
  <div>
     <mt-header fixed title="通讯录">
        <mt-button slot="left" icon="back" @click.native ="goBack()">返回</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
  </div>
</template>

<script>
  export default {
    name:'Header',
    methods:{
      goBack(){
        this.$router.go(-1);
      },
    }
  }
</script>

<style scoped>

</style>
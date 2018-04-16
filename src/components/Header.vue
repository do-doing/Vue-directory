<template>
  <div>
     <mt-header fixed :title="headertitle">
        <mt-button slot="left" icon="back" @click.native ="goBack()">返回</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
  </div>
</template>

<script>
  export default {
    name:'Header',
    data(){
      return{
        headertitle:'通讯录',
      }
    },
    methods:{
      goBack(){
        this.$router.go(-1);
      },
    },
    watch: {
    '$route' (to, from) {
      if (to.name === 'mainList') {
        this.headertitle = '通讯录'
      } else if (to.name === 'msgModel') { 
        this.headertitle = '送短信'
      }
    }
    }
  }
</script>

<style scoped>

</style>
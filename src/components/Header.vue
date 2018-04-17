<template>
  <div>
     <mt-header fixed :title="headertitle">
        <mt-button v-if="showflag" slot="left" icon="back" @click.native ="goBack()">返回</mt-button>
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
        showflag:false,
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
          this.showflag = false
        } else if (to.name === 'msgModel') { 
          this.headertitle = '送短信'
          this.showflag = true
        }
      }
    }
  }
</script>

<style scoped>

</style>
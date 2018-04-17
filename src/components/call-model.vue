<template>
  <div>
    <div class="container">
      <div class="box">
        <h1>{{message.tel}}</h1>        
        <h2>{{message.name}}</h2>        
        <button class="cancelbtn" @click="hideModel">关闭</button>
        <div @click="showMes(message)">还是发短信吧</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:["message"],
    methods:{
      hideModel:function(){
        this.$emit("listen",false)
      },
      showMes:function(){
        this.$router.push({
          name: "msgModel",
          params: { parentMsg: this.message }
        });
      }
    }
  }
</script>

<style scoped>
.container{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  line-height: 1.6;
  color: #fff;
  /* background-image: -webkit-linear-gradient( 90deg, rgb(12,19,35) 0%, rgb(8,51,68) 100%); */
  background-image: -webkit-radial-gradient(top, circle cover, #3c3b52 0%, #252233 80%);

}
.container h1{
  font-size: 50px;
  color: #fff;
}
.container h2{
  font-size: 30px;
  color: #fff;
}
.container .box{
  text-align: center;
  height: 70vh;
}
.cancelbtn{
  background: #ff3333;
  color: #fff;
  margin: 100px 0 50px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  text-align: center;
  outline: none;
  border:none;
}
</style>
<template>
  <div class="msg-page">
    <mt-field label="收件人" placeholder="请输入用户名" v-model="message.name" state="success" disabled></mt-field>
    <mt-field label="电话" v-model="message.tel" state="success" disabled></mt-field>
    <mt-field label="内容" placeholder="内容" type="textarea" rows="4" v-model="message.contant"></mt-field>
    <mt-button @click.native="sendMessage()" type="primary" size="large">发送</mt-button>
    <p class="tips"><span>以下为信息记录</span></p>
    <div class="message-list">
      <div v-for="(item,index) in messageList" :key="index">
        <div v-if="item.type =='send'" class="send">
          {{item.content}}
        </div>
        <div v-else class="collect">
          {{item.content}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name:'msgModel',
    data(){
      return{
        message:{
          name:this.$route.params.parentMsg.name,
          tel:this.$route.params.parentMsg.tel,
          contant:''
        },
        messageList:[]
      }
    },
    methods:{
      sendMessage(){
        if(this.message.contant!=''){
          let ap ={
            type:'send',
            content:this.message.contant
          }
          this.messageList.push(ap);  
          if(this.messageList.length>1){
            let ap2 = {
              type:'collect',
              content:'你在烦我试试看!!'
            }
            this.messageList.push(ap2)
          }
          this.message.contant = '';
        }
      }
    }
  }
</script>

<style scoped>
.msg-page{
  padding: 0 15px;
}
.tips{
  position: relative;
 
  margin: 10px auto;
  text-align: center;
}
.tips span{
   font-size: 14px;
  color: #ccc;
  background: #fff;
  padding: 0 20px;
}
.tips::after{
  position: absolute;
  content: '';
  height: 1px;
  width: 100%;
  border-bottom: 1px dashed #ccc;
  left: 0px;
  top: 50%;
  z-index: -1;
}
.send {
  position:relative;
  max-width:200px;
  padding:10px;
  margin-bottom: 10px;
  background:rgb(152,225,101);
  border-radius:5px; /* 圆角 */
}

.send::after{
  content: '';
  position:absolute;
  top:5px;
  right:-16px; /* 圆角的位置需要细心调试哦 */
  width:0;
  height:0;
  font-size:0;
  border:solid 8px;
  border-color:transparent transparent transparent rgb(152,225,101);
}
.message-list{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
   background: rgb(245,245,245);
   margin: 0 -15px;
   padding:15px;
}
.collect{
   position:relative;
   align-self: flex-start;
  max-width:200px;
  padding:10px;
  margin-bottom: 10px;
  background:rgb(255,255,255);
  border-radius:5px; /* 圆角 */
}
.collect::after{
  content: '';
  position:absolute;
  top:5px;
  left:-16px; /* 圆角的位置需要细心调试哦 */
  width:0;
  height:0;
  font-size:0;
  border:solid 8px;
  border-color:transparent rgb(255,255,255) transparent transparent;
}
</style>
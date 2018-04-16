<template>
  <div class="msg-page">
    <mt-field label="收件人" placeholder="请输入用户名" v-model="message.name" state="success" disabled></mt-field>
    <mt-field label="电话" v-model="message.tel" state="success" disabled></mt-field>
    <p class="tips"><span>以下为信息记录</span></p>
    <div class="message-list">
      <div v-for="(item,index) in messageList" :key="index" :class="item.type">{{item.content}}
      </div>
    </div>
    <div class="bottom-box">
      <input class="input-r" type="text" placeholder="发点什么吧" v-focus v-model="message.contant"/>
      <mt-button @click.native="sendMessage()" type="primary" size="small"><span style="white-space: nowrap;">发送</span></mt-button>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  name: "msgModel",
  data() {
    return {
      message: {
        name: this.$route.params.parentMsg.name,
        tel: this.$route.params.parentMsg.tel,
        contant: ""
      },
      messageList: []
    };
  },
  methods: {
    sendMessage() {
      if (this.message.contant != "") {
        let ap = {
          type: "send",
          content: this.message.contant
        };
        this.messageList.push(ap);
        if (this.messageList.length > 2) {
          let ap2 = {
            type: "collect",
            content: "你再烦我试试看!!"
          };
          this.messageList.push(ap2);
        }else{
          
        }
        this.message.contant = "";
      } else {
        Toast({
          message: "不能发送空内容",
          position: "bottom"
        });
      }
    }
  },
  created(){
    if(!this.message){
      this.$router.push({name:'mainList'});
    }
  },
  mounted(){
    
    document.querySelector('.message-list').style.height = window.outerHeight -document.querySelector('.message-list').offsetTop - document.querySelector('.bottom-box').offsetHeight +'px';
  },
  directives: {
    focus: {
      // 指令的定义
      inserted: function (el) {
        el.focus()
      }
    }
  }
};
</script>

<style scoped>
.msg-page {
  padding: 0 15px;
}
.tips {
  position: relative;

  margin: 10px auto;
  text-align: center;
}
.tips span {
  font-size: 14px;
  color: #ccc;
  background: #fff;
  padding: 0 20px;
}
.tips::after {
  position: absolute;
  content: "";
  height: 1px;
  width: 100%;
  border-bottom: 1px dashed #ccc;
  left: 0px;
  top: 50%;
  z-index: -1;
}
.send {
  position: relative;
  max-width: 200px;
  padding: 10px;
  margin-bottom: 10px;
  background: rgb(152, 225, 101);
  border-radius: 5px; /* 圆角 */
}

.send::after {
  content: "";
  position: absolute;
  top: 5px;
  right: -16px; /* 圆角的位置需要细心调试哦 */
  width: 0;
  height: 0;
  font-size: 0;
  border: solid 8px;
  border-color: transparent transparent transparent rgb(152, 225, 101);
}
.message-list {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: flex-end;
  background: rgb(245, 245, 245);
  margin: 0 -15px;
  padding: 15px 20px;
}
.collect {
  position: relative;
  align-self: flex-start;
  max-width: 200px;
  padding: 10px;
  margin-bottom: 10px;
  background: rgb(255, 255, 255);
  border-radius: 5px; /* 圆角 */
}
.collect::after {
  content: "";
  position: absolute;
  top: 5px;
  left: -16px; /* 圆角的位置需要细心调试哦 */
  width: 0;
  height: 0;
  font-size: 0;
  border: solid 8px;
  border-color: transparent rgb(255, 255, 255) transparent transparent;
}
.bottom-box{
  position: fixed;
  display:flex;
  width:100%;
  align-items: initial;
  bottom: 0;
  box-sizing: border-box;
  left: 0;
  padding: 15px;
  justify-content: space-between;
}
.bottom-box input{
  width: calc(100% - 80px);
  border-top:none;
  border-left:none;
  border-right:none;
  outline:none;
}
</style>
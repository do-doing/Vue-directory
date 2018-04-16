<template>
  <div>
    <mt-index-list>
      <mt-index-section  v-for="(item,key) in userData" :key="key" :index="item.index">
        <mt-cell  @click.native="showMes(users.name,users.tel)" v-for="(users,key) in item.users" :key="key" :title="users.name"><span>{{users.tel}}</span></mt-cell>
      </mt-index-section>
    </mt-index-list>
    <mt-popup v-model="popupVisible" position="bottom">
      <call-model :message="parentMsg" v-show='showFlag' v-on:listen="hideChild"/>
    </mt-popup>
  </div>
</template>

<script>
import { MessageBox } from "mint-ui";
import { Toast } from "mint-ui";
import callModel from "@/components/call-model";

export default {
  data() {
    return {
      showFlag: true,
      popupVisible: false,
      parentMsg: "",
      userData: [],
    };
  },
  components: {
    callModel
  },
  created(){
    // 随机生成英文名和电话
    let userData = new Array();
    let letter = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
    for(let j = 0;j<letter.length;j++){
      var json = { index: "", users: [] };
      var length = Math.floor(Math.random() * 4 + 3);
      for (var i = 0; i < length; i++) {
        var user = new Object();
        user.name = letter[j] + getName(letter);
        user.tel = getMoble();
        json.index = letter[j];
        json.users.push(user);
      }
      var jsonString = JSON.stringify(json);
      userData.push(json)
    }
    function getName(arr){
      var name = '';
      var length = Math.floor(Math.random() * 4+3);
      var fname = '';
      for(let i = 0;i<length;i++){
        var ran = parseInt(arr.length * Math.random());
        fname = fname + arr[ran].toLowerCase();
      }
      return fname;
    }

    function getMoble() {
      var prefixArray = new Array("130", "131", "132", "133", "135", "137", "138", "170", "187", "189");
      var i = parseInt(10 * Math.random());
      var prefix = prefixArray[i];

      for (var j = 0; j < 8; j++) {
        prefix = prefix + Math.floor(Math.random() * 10);
      }
      return prefix
    }
    this.userData = userData;
  },
  methods: {
    showMes(name, tel) {
      this.parentMsg = { name, tel };
      MessageBox.confirm("", {
        title: "为他打电话",
        message: name + ":" + tel,
        confirmButtonText: "呼叫",
        cancelButtonText: "发短信吧"
      })
        .then(action => {
          if (action == "confirm") {
            // 确认
            (this.popupVisible = true), (this.showFlag = true);
          }
        })
        .catch(err => {
          if (err == "cancel") {
            Toast({
              message: "你错过了和他约会的机会,短信告诉他吧",
              position: "bottom",
            });
            this.$router.push({
              name: "msgModel",
              params: { parentMsg: this.parentMsg }
            });
          }
        });
    },
    hideChild: function(data) {
      // this.showFlag = data;
      this.popupVisible = data;
    }
    
  }
};
</script>

<style scoped>

</style>
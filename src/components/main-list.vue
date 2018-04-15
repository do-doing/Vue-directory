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
      aaa: "123123",
      userData: [
        {
          index: "A",
          users: [
            { name: "Apple", tel: "13570641731" },
            { name: "Apple", tel: "13570641732" },
            { name: "Apple", tel: "13570641733" },
            { name: "Apple", tel: "13570641734" },
            { name: "Apple", tel: "13570641735" },
            { name: "Apple", tel: "13570641736" },
            { name: "Apple", tel: "13570641730" },
            { name: "Apple", tel: "13570641730" },
            { name: "Apple", tel: "13570641730" }
          ]
        },
        {
          index: "B",
          users: [
            { name: "Apple", tel: "13570641730" },
            { name: "Apple", tel: "13570641730" },
            { name: "Apple", tel: "13570641730" },
            { name: "Apple", tel: "13570641730" },
            { name: "Apple", tel: "13570641730" },
            { name: "Apple", tel: "13570641730" },
            { name: "Apple", tel: "13570641730" },
            { name: "Apple", tel: "13570641730" },
            { name: "Apple", tel: "13570641730" }
          ]
        }
      ]
    };
  },
  components: {
    callModel
  },
  methods: {
    showMes(name, tel) {
      this.parentMsg = { name, tel };
      MessageBox.confirm("", {
        message: "为他打电话",
        title: name + ":" + tel,
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
              message: "你错过了和他约会的机会233,不过你可以短信告诉他啊",
              position: "bottom",
              duration: 5000
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
      console.log(this.showFlag);
    }
  }
};
</script>

<style scoped>

</style>
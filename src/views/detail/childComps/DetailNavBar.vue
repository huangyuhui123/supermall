<template>
  <div>
    <nav-bar>
        <div slot="left" @click="backClick" class="back">
            <img src="~assets/img/common/back.svg" alt="">
        </div>
      <div slot="center" class="title">
        <div v-for="(item, index) in titles" :key="index" class="title-item" 
            :class="{active:currentIndex===index}"
            @click="titleClick(index)"
            >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  components: {
    NavBar
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex:0
    };
  },
  methods:{
      titleClick(index){
        console.log("index===",index)
          this.currentIndex = index;
          console.log("this.currentIndex",this.currentIndex)
          this.$emit('titleClick',index)
      },
      backClick(){
          this.$router.back();
         // this.$router.go(-1);
      }
  }
};
</script>

<style scoped>
.title {
  display: flex;
  text-align: center;
  font-size: 13px;
}
.title-item {
  flex: 1;
}
.active{
    color:var(--color-high-text)
}
.back img{
    margin-top:12px;
}
</style>s

<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <div class="info-desc clear-fix">
      <div class="start">
      </div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="(item, index) in detailInfo.detailImage[0].list" :src="item" alt="" 
      :key="index"
      @load="imgLoad"
      >
    </div>
  </div>
</template>

<script>
	export default {
    name: "DetailGoodsInfo",
    props:{
        detailInfo:{
            type:Object,
            default(){
                return{}
            }
        }
    },
    data(){
        return{
            counter:0,
            imagesLength:0
        }
    },
    methods:{
        imgLoad(){
            //解决详情页，滚动时图片还未加载进来然后导致的高度不对，无法正常滚动的问题
            //判断所有的图片都加载完成，调用一次
            if(++this.counter === this.imagesLength){
                this.$emit('imageLoad')
            }

        }
    },
    watch:{
        detailInfo(){//监听detailInfo对象的变化
            //只计算一次，调用一次
            this.imagesLength = this.detailInfo.detailImage[0].list.length;
        }
    }

	}
</script>

<style scoped>
  .goods-info {
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
  }

  .info-desc {
    padding: 0 15px;
  }

  .info-desc .start, .info-desc .end {
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
  }

  .info-desc .start {
    float: left;
  }

  .info-desc .end {
    float: right;
  }

  .info-desc .start::before, .info-desc .end::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
  }

  .info-desc .end::after {
    right: 0;
  }

  .info-desc .desc {
    padding: 15px 0;
    font-size: 14px;
  }

  .info-key {
    margin: 10px 0 10px 15px;
    color: #333;
    font-size: 15px;
  }

  .info-list img {
    width: 100%;
  }
</style>

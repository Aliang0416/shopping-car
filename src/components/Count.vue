<template>
  <div class="number-container d-flex justify-content-center align-items-center">
    <!-- 减 1 的按钮 -->
    <button type="button" class="btn btn-light btn-sm" @click="sub">-</button>
    <!-- 购买的数量 -->
    <span class="number-box">{{ num }}</span>
    <!-- 加 1 的按钮 -->
    <button type="button" class="btn btn-light btn-sm" @click="add">+</button>
  </div>
</template>

<script>
export default {
    data(){
        return {
            num : this.count
        }
    },
    props:{
        count : {
            default:1,
            type:Number,
        },
        id:{
            required:true,
            type:Number
        }
    },
    methods:{
        sub(){
            if(this.num>1){
                this.$emit('changeNum',this.num-=1)
            }else{
                alert('宝贝数量不能再减少了')
            }
            
        },
        add(){
            this.$emit('changeNum',this.num+=1)
        }
    }
}
</script>

<style lang="less" scoped>
.number-box {
  min-width: 30px;
  text-align: center;
  margin: 0 5px;
  font-size: 12px;
}

.btn-sm {
  width: 30px;
}
</style>

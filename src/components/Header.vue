<template>
  <div>
          <div class="panel-heading">
                <h3 class="panel-title">{{title}}</h3>
          </div>  
  </div>
</template>
<script>
export default {
    props:{
        title:{
            default:'',
            type:String,
        }
    },
    data(){
        return {
            
        }
    }
}
</script>

<style lang="less">
.panel-heading{
    height: 45px;
    width: 100%;
    text-align: center;
    background-color: #f40;
    h3 {
        font-size: 16px;
        line-height: 45px;
        color:#fff;
    }
}
</style>
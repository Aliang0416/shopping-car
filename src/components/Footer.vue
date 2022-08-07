<template>
  <div class="footer-container">
    <!-- 左侧的全选 -->
    <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="cbFull" :checked="flag" @change="changFull" />
      <label class="custom-control-label" for="cbFull">全选</label>
    </div>

    <!-- 中间的合计 -->
    <div>
      <span>合计：</span>
      <span class="total-price">￥{{ total.toFixed(2) }}</span>
    </div>

    <!-- 结算按钮 -->
    <button style="background-color:#f40" type="button" class="btn btn-primary btn-settle">结算（{{ count }}）</button>
  </div>
</template>

<script>
export default {
    props:{
        total : {
            default:0,
            type:Number,
        },
        count:{
            default:0,
            type:Number,
        },
        flag : {
            default:false,
            type:Boolean
        },

    },
    methods:{
        changFull(e){
            const fullState = e.target.checked
            this.$emit('change-Full', fullState)
        }
    }
}
</script>

<style lang="less" scoped>
.footer-container {
  font-size: 12px;
  height: 50px;
  width: 100%;
  border-top: 1px solid #efefef;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}

.custom-checkbox {
  display: flex;
  align-items: center;
}

#cbFull {
  margin-right: 5px;
}

.btn-settle {
  height: 80%;
  min-width: 110px;
  border-radius: 25px;
  font-size: 12px;
}

.total-price {
  font-weight: bold;
  font-size: 14px;
  color: red;
}
input[type="checkbox"] {
            position: relative;
            border: 1px solid #f40;
            appearance: none;
            background: #fff;
            outline: 0;
            width: 20px;
            height: 20px;
            border-radius: 20px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
                0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
      input:checked[type="checkbox"]::before {
            content: "";
            position: absolute;
            width: 12px;
            height: 12px;
            top: 3px;
            left: 3px;
            background-color: #f40;
            /* transform: scale(1.1); */
            border-radius: 20px;
            transition: 750ms ease all;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
                0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        button {
          border: 0;
        }
</style>

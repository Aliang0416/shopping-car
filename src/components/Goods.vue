<template>
  <div class="goods-container">
    <!-- 左侧图片 -->
    <div class="thumb">
      <div class="custom-control custom-checkbox">
        <!-- 复选框 -->
        <input type="checkbox" class="custom-control-input" :id="'cb' + id" :checked="state" @change="changeState"/>
        <label class="custom-control-label" :for="'cb' + id">
          <!-- 商品的缩略图 -->
          <img :src='imgUrl' alt="" />
        </label>
      </div>
    </div>
    <!-- 右侧信息区域 -->
    <div class="goods-info">
      <!-- 商品标题 -->
      <h6 class="goods-title">{{ content }}</h6>
      <div class="goods-info-bottom">
        <!-- 商品价格 -->
        <span class="goods-price">￥{{ price }}</span>
        <!-- 商品的数量 -->
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        imgUrl: {
            default: "",
            type: String,
        },
        content: {
            default: "",
            type: String,
        },
        price: {
            default: 0,
            type: Number
        },
        state: {
            default: true,
            type: Boolean
        },
        id: {
            required: true,
            type: Number
        },
    },
    methods: {
        changeState(e) {
            const newState = e.target.checked;
            this.$emit("state-change", { id: this.id, state: newState });
        }
    },
}   
</script>

<style lang="less" scoped>
.goods-container {
  + .goods-container {
    border-top: 1px solid #efefef;
  }
  padding: 10px;
  display: flex;
  .thumb {
    display: flex;
    align-items: center;
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
    img {
      width: 100px;
      height: 100px;
      margin: 0 10px;
    }
  }

  .goods-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    .goods-title {
      font-weight: bold;
      font-size: 12px;
    }
    .goods-info-bottom {
      display: flex;
      justify-content: space-between;
      .goods-price {
        font-weight: bold;
        color: red;
        font-size: 13px;
      }
    }
  }
}
</style>

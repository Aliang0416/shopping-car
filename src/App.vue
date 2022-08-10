<template>
  <div id="app">
    <Header :title="title" />
    <Goods v-for="item in list" :key="item.id"
           :id="item.id"
           :imgUrl="item.goods_img" 
           :price="item.goods_price" 
           :state="item.goods_state"  
           :content="item.goods_name" 
           @state-change ="getNewState">
           <Count :id="item.id" :count="item.goods_count" @changeNum="getNewNum(item,$event)" />
           </Goods>
    <Footer :flag="fullState"
            :total="totalPrice"
           :count="totalCount"
            @change-Full="getNewFull"
              />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue'
import axios from 'axios'
import Goods from './components/Goods.vue';
import Count from './components/Count.vue';
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Goods,
    Count
},
  data(){
    return{
      title:'购物车',
      list:[],
    }
  },
  methods:{
    //封装请求列表数据的方法
    async initCartList(){
      //调用axios 的get方法，请求列表数据
      const {data:res} = await axios.get('https://www.escook.cn/api/cart')
      if(res.status == 200){
        this.list = res.list
      }
    },
    getNewState(val){
      this.list[val.id - 1].goods_state = val.state
    },
    getNewFull(val){
      this.list.forEach((item)=>{
        item.goods_state = val
      })
    },
    getNewNum(item,val){
      item.goods_count = val
    }
    
  },  
  created(){
    //调用请求数据的方法
    this.initCartList()
  },
  computed:{
    fullState(){
      return this.list.every(item=>item.goods_state)
    },
    totalPrice(){
      const result =  this.list.filter(item=>item.goods_state).reduce((total,item)=>total += item.goods_price * item.goods_count ,0)
      return result
    },
    totalCount(){ 
      return this.list.filter(item=>item.goods_state).reduce((total,item)=>total += item.goods_count ,0)
    }
  }
}
</script>

<style lang="less" scoped>
#app {
  padding-bottom: 50px;
  position: relative;
  
}
</style>

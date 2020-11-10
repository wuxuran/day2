<template>
  <div>
    <van-tabs v-model="active">
      <van-tab v-for='(item,index) in data' :key="index" :title='item.title'>
        <div class="list">
          <dl v-for='(ite,ind) in item.children' :key="ind" @click='changeTo(ite.id)'>
          <dt>
            <img :src="ite.img" alt="">
          </dt>
          <dd>
            <h3>{{ite.title}}</h3>
            <p>{{ite.desc}}</p>
            <p>{{ite.price}}</p>
          </dd>
        </dl>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
      return {
        active: 2,
        data:[]
      };
  },
  created() {
    axios.get('/api/list').then(res=>{
      this.data=res.data.list
    })
  },
  methods: {
    changeTo(id){//跳转详情页路由
      this.$router.push(`/car/${id}`)
    }
  },
}
</script>

<style lang='scss'>
.list{
  display: flex;
  flex-wrap: wrap;

}
  .list dl{
    width: 48%;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
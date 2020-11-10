<template>
  <div>
    <dl>
      <dt>
        <img :src="getList.img" alt="">
      </dt>
      <dd>
        <h3>{{getList.title}}</h3>
            <p>{{getList.desc}}</p>
            <p>{{getList.price}}</p>
      </dd>
    </dl>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      getList:{}
    }    
  },
  created() {
    axios.get('/api/getlist',{//重新写接口获取地址栏上的id 并传到后台
      params:{
        id:this.$route.params.id
      }
    }).then(res=>{//从后台接收数据
      this.getList=res.data
      console.log(this.getList)
    })
  },
}
</script>

<style>

</style>
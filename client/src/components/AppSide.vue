<template>
  <div id="AppSide">
      <!-- 个人信息 -->
        <Personal></Personal>
      
      <div 
      class="fixed"
      :class="{
        true:ifFixed
        }"
      >
        <!-- 热门文章 -->
        <HotArticle></HotArticle>

        <!-- 最近访客 -->
        <Visitor></Visitor>
      </div>
      


  </div>
</template>

<script>
import Personal from "@/components/AppSide/Personal";
import HotArticle from "@/components/AppSide/HotArticle";
import Visitor from "@/components/AppSide/Visitor";
export default {
  name: 'AppSide',
  components: {
      Personal,HotArticle,Visitor,
  },
  data () {
    return {
      ifFixed:""
    }
  },
  methods: {
    scrollEvenfn() {
      let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
      this.ifFixed = scrollTop >= 240? 'true' : ''
    }
  },
  mounted () {
    this.scrollEvenfn(),
    window.addEventListener("scroll" ,this.scrollEvenfn)
  }
}
</script>

<style lang="less" scoped>

#AppSide{
    width: 270px;
    margin-right: 15px;

   .fixed.true{
     width: 270px;
     position: fixed;
     top:65px;

   }
}

    
</style>

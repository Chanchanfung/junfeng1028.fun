<template>
  <div id="About">
    <article>
      <h2>ABOUT ME</h2>
      <p>生活不易,努力学艺😏</p>
      <p>一直在努力,坚持在学习✊</p>
      <p>谢谢你这么好看还这么关注我鸭！我还没有脱发！大概是写的代码还不够多</p>
    </article>

    <article>
      <h2>ABOUT SITE</h2>
      <p><code>前端：</code><span class="code">Vue + Element</span></p>
      <p><code>后  端：</code><span class="code">Node + Nuxt + Express + Mongodb</span></p>
      <p class="border"><code>服务器：</code><a target="_blank" href="https://www.aliyun.com/1111/new?userCode=xqfx5ty6">阿里云ECS</a></p>
      <p>记录每一项技术难点，挑战不可能💪</p>
      <p>个人博客只是起点，我的征途是星辰大海</p>
    </article>

    <article>
      <h2>ABOUT COPYRIGHT</h2>
      <p>源码开源：<a href="https://github.com/Chanchanfung/junfeng1028.fun" target="_blank">阿峰的github</a></p>
      <p>在注明出处的前提下，本站文章允许非商业用途的转载。</p>
    </article>  

    <article>
      <h2>OTHER</h2>
      <p>我是一名前端开发者，如果有需要的话，可以通过 <a href="/#contact">contact me</a> 联系我。或者可以在👈左侧边栏找到我的联系方式哦。</p>
    </article>
  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style lang='less' scoped>
#About{
  flex: 1;
  article{
    box-sizing: border-box;
    width: 100%;
    margin-bottom:15px;
    box-shadow: 0 0 4 #ddd;
    padding: 25px 20px;
    background-color: #fff;
    font-family: "Quicksand";

    h2{
      margin-bottom: 15px;
      font-size: 20px;
      letter-spacing: 3px;
      line-height: 24px;
      border-left: 5px solid #73b899;
      text-indent: 10px;
    }
    p{
      text-indent:2em;
      color: #444;
      font-size: 14px;
      letter-spacing: 4px;
      line-height: 30px;

      code{
        text-indent: 0;
        display: inline-block;
        font-family: 'Quicksand';
        font-size: 14px;
      }

      span.code{
        color: #bd4147;
        background-color: rgba(27,31,35,0.05);
        font-weight: 700;
      }
    }
    p.border{
      border-bottom: 1px dotted rgb(170,170,170);
      a{
      color: #409eff;
      &:hover{
        text-decoration: underline;
      }
    }
    } 
  }
}

</style>

<template>
  <div class="personal">
    <div class="top">
      <div class="img"></div>
      <div class="name">
        <p class="p1">AFENG</p>
        <p class="p2">WEB Developer</p>
      </div>
      <div class="clear"></div>
      <div class="contact">
        <a href="" target="_blank" class="iconfont icon-github"></a>
        <a href="" target="_blank" class="iconfont icon-twitter"></a>
        <a href="" target="_blank" class="iconfont icon-tubiaozhizuo-"></a>
        <!-- <a href="" target="_blank" class="iconfont icon-weixin"></a> -->
        <el-popover placement="bottom" :width="150" trigger="click">
          <template #reference>
            <a  class="iconfont icon-weixin"></a>
          </template>
          <img 
          class="weixin" 
          src="../../assets/img/personal/weixin.png" 
          width="150"
          height="150"
          alt="微信二维码"
          >
        </el-popover>
        <a href="" target="_blank" class="iconfont icon-QQ"></a>
      </div>
    </div>
    <div class="bottom">
      <a href="">DOWNLOAD CV</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Personal",
};
</script>

<style lang="less" scoped>
.personal {
  width: 100%;
  margin-bottom: 15px;
  box-shadow: 0 0 4px #ddd;

  .top {
    width: 100%;
    background-color: #bfe2e6;

    .img {
      overflow: hidden;
      float: left;
      width: 60px;
      height: 60px;
      margin-top: 20px;
      margin-left: 30px;
      border: 2px solid #fff;
      border-radius: 50%;
      background: url(../../assets/img/personal/afeng.jpg) no-repeat center
        center / cover;
    }

    .name {
      float: right;
      margin-top: 29px;
      margin-right: 30px;

      .p1 {
        font-size: 20px;
        font-weight: bolder;
        letter-spacing: 5px;
      }
      .p2 {
        font-family: "Quicksand";
        color: #555;
        font-weight: 700;
        letter-spacing: 3px;
        font-size: 12px;
        margin-top: 5px;
      }
    }

    .clear {
      width: 0;
      height: 0;
      clear: both;
    }

    .contact {
      margin-top: 15px;
      padding-bottom: 20px;
      display: flex;
      justify-content: space-around;

      a {
        display: block;
        font-size: 20px;
        color: #525252;
        transition: color 0.3s;
        cursor: pointer;
      }

    }
  }

  .bottom {
    width: 100%;
    padding: 20px 0;
    background-color: #fff;

    a {
      display: block;
      width: 65%;
      height: 40px;
      border-radius: 23px;
      margin: 0 auto;
      box-shadow: 0 0 0 #888;
      font-family: "Quicksand";
      font-size: 14px;
      text-align: center;
      line-height: 40px;
      font-weight: 700;
      color: #000;
      letter-spacing: 1px;
      background-color: #bfe2e6;
      transition: box-shadow 0.3s;

      &:hover {
        box-shadow: 0 2px 10px #888;
      }
    }
  }
}
</style>

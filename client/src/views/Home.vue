<template>
  <div id="home">
    <!-- hello -->
    <article class="hello">
      <h2>HELLO !</h2>
      <p class="des">
        你好！欢迎来到我的博客！我是一名有点肾虚的WEB前端攻城狮，热衷于研究JavaScript、NodeJs、Vue、React、WebGL、Flutter、Electron……这是我的主页！我会在这里发表一些不成熟的技术文章，记录一些沙雕的日常。博客目前使用的是Vue
        + Nuxt + Element + Node + Express + MongoDB搭建的，如果对源码感兴趣的话可以<a href="https://github.com/afeifeifei/afei.fun"
                                                                      target="_blank">点击这里</a>。欢迎提出宝贵的建议哦！</p>
      <div class="info">
        <div class="left">
          <h3>personal information</h3>
          <ul>
            <li>
              <p class="dt">NICKNAME</p>
              <p class="dd">阿峰</p>
            </li>
            <li>
              <p class="dt">ADDRESS</p>
              <p class="dd">广东省广州市番禺区</p>
            </li>
            <li>
              <p class="dt">EMAIL</p>
              <p class="dd">1024952886@qq.com</p>
            </li>
            <li>
              <p class="dt">GITHUB</p>
              <p class="dd"><a href="">https://github.com/Chanchanfung/junfeng1028.fun</a></p>
            </li>
          </ul>
        </div>
        <div class="right">
          <h3>skills</h3>
          <ul>
            <li>
              <p class="lang">
                <span class="s1">HTML5 & CSS3</span>
                <span class="s2">90%</span>
              </p>
              <p class="level">
                <span style="width:90%"></span>
              </p>
            </li>
            <li>
              <p class="lang">
                <span class="s1">Javascript</span>
                <span class="s2">85%</span>
              </p>
              <p class="level">
                <span style="width:85%"></span>
              </p>
            </li>
            <li>
              <p class="lang">
                <span class="s1">NodeJS</span>
                <span class="s2">80%</span>
              </p>
              <p class="level">
                <span style="width:80%"></span>
              </p>
            </li>
            <li>
              <p class="lang">
                <span class="s1">Vue</span>
                <span class="s2">70%</span>
              </p>
              <p class="level">
                <span style="width:70%"></span>
              </p>
            </li>
            <li>
              <p class="lang">
                <span class="s1">React & 小程序</span>
                <span class="s2">40%</span>
              </p>
              <p class="level">
                <span style="width:40%"></span>
              </p>
            </li>
            <li>
              <p class="lang">
                <span class="s1">Express</span>
                <span class="s2">30%</span>
              </p>
              <p class="level">
                <span style="width:30%"></span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </article>

    <!-- article -->
    <article class="article">
      <h2>ARTICLE</h2>
      <p class="des">热门文章推荐，<router-link to="/article">更多文章</router-link> 请访问文章页0.0</p>
      <div class="content"> 
        <div class="left">
          <div class="art">
            <img src="../assets/img/article/1.jpg" alt="">
            <p class="tittle">标题1</p>
            <div class="cover">
              <a href="" target="_blank">
                <p>Tag:HTML</p>
                <p>View More</p>
              </a>
            </div>
          </div>
          <div class="art art2">
            <img src="../assets/img/article/3.jpg" alt="">
            <p class="tittle">标题2</p>
            <div class="cover">
              <a href="" target="_blank">
                <p>Tag:HTML</p>
                <p>View More</p>
              </a>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="art">
            <img src="../assets/img/article/2.jpg" alt="">
            <p class="tittle">标题3</p>
            <div class="cover">
              <a href="" target="_blank">
                <p>Tag:HTML</p>
                <p>View More</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>

    <!-- 工作经历 -->
    <article class="work">
      <h2>WORK EXPERIENCE</h2>
      <ul>
        <li>
          <div class="left">
            <p class="time">2021-</p>
          </div>
          <div class="right">
            <h3>WEB DEVELOPER</h3>
            <p class="img">
              <img src="../assets/img/technology/vue.jpg" alt="">
            </p>
            <!-- <p class="company">Zzt EDU</p> -->
            <p class="content"> Vue is a progressive framework for building user interfaces. Vue's core library only focuses on view layers, which is not only easy to start, but also easy to integrate with third-party libraries or existing projects. </p>
          </div>
        </li>
        <li>
          <div class="left">
            <p>2021-</p>
          </div>
          <div class="right">
            <h3>WEB DEVELOPER</h3>
            <p class="img">
              <img src="../assets/img/technology/vue.jpg" alt="">
            </p>
            <!-- <p class="company">Zzt EDU</p> -->
            <p class="content"> Vue is a progressive framework for building user interfaces. Vue's core library only focuses on view layers, which is not only easy to start, but also easy to integrate with third-party libraries or existing projects. </p>
          </div>
        </li>
        <li>
          <div class="left">
            <p>2021-</p>
          </div>
          <div class="right">
            <h3>WEB DEVELOPER</h3>
            <p class="img">
              <img src="../assets/img/technology/vue.jpg" alt="">
            </p>
            <!-- <p class="company">Zzt EDU</p> -->
            <p class="content"> Vue is a progressive framework for building user interfaces. Vue's core library only focuses on view layers, which is not only easy to start, but also easy to integrate with third-party libraries or existing projects.  </p>
          </div>
        </li>
        <!-- <li>
          <div class="left">
            <p>2021-</p>
          </div>
          <div class="right">
            <h3>WEB DEVELOPER</h3>
            <p class="img">
              <img src="../assets/img/technology/vue.jpg" alt="">
            </p>
            <p class="company">Zzt EDU</p>
            <p class="content"> Responsible for the development of independent official website of some subjects of the
              company.And also as an online teacher of WEB.Technology consists of HTML5, CSS3, JavaScript, Nodejs, vue,
              Canvas, Design pattern & Algorithm。 </p>
          </div>
        </li> -->

      </ul>
    </article>

    <!-- contact -->
    <article class="contact" id="contact">
      <h2>CONTACT ME</h2>
      <p class="des">有任何问题请联系我吧，收到消息后会给您回复邮件的哦♪(^∇^*)</p>
      <el-form
        :model="contactForm"
        :rules="rules"
        ref="contactForm"
      >
        <el-form-item label="Your Name" prop="name">
          <el-input v-model="contactForm.name"></el-input>
        </el-form-item>
        <el-form-item label="Your Email" prop="email">
          <el-input v-model="contactForm.email"></el-input>
        </el-form-item>
        <el-form-item label="Subject" prop="subject">
          <el-input v-model="contactForm.subject"></el-input>
        </el-form-item>
        <el-form-item label="Your Message" prop="message">
          <el-input v-model="contactForm.message"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('contactForm')">Send</el-button>
        </el-form-item>
      </el-form>
    </article>
  </div>
</template>

<script>
import Article from './Article.vue'
export default {
  components: { Article },
  name: 'Home',
  data() {
      return {
        contactForm: {
          name: '',
          email:'',
          subject:'',
          message:''
        },
        rules: {
          name: [
            { required: true,  trigger: 'blur' },
          ],
          email: [
            { required: true, trigger: 'blur' },
          ],
          message: [
            { required: true,  trigger: 'blur' },
          ],  
        }
      };
    },
   methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
}
</script>

<style lang='less' scoped>
#home{
  flex: 1;

  article{
    background-color: #fff;
    padding: 15px 15px 30px;
    margin-bottom: 15px;

    h2{
      margin-bottom:15px;
      font-size: 30px;
      letter-spacing: 3px;
      padding-top:10px;
      font-family: 'Quicksand';
      }
      p.des{
        padding-bottom: 20px;
        border-bottom:1px solid #ddd;
        margin-bottom: 20px;
        text-indent: 2em;
        color: #444;
        font-size: 14px;
        letter-spacing: 4px;
        line-height: 30px;
        font-family: 'Quicksand,Microsoft YaHei';
        a{
          text-decoration: underline;
          color: #aaa;
        }
      }
    
  } 
  
  article.hello{
    .info{
      display: flex;
      font-family: 'Quicksand';
      div.left,div.right{
        flex: 1;
        display: flex;
        flex-direction: column;
      }
      h3{
        margin-top: 30px;
        font-weight: 400;
        font-size: 22px;
        color: #666;
        
      }
      ul{
        flex: 1;
      }
      div.left{
        ul{
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          li{
            display: flex;
            p.dt{
              width: 40%; 
              font-weight: bold;
            }
            p.dd{
              flex: 1;
            }

          }
        }
      }

      div.right{
        ul li{
          margin-bottom: 20px;

          &:last-child{
            margin-bottom: 0;
          }
          p.lang{
            display: flex;
            justify-content: space-between;
            letter-spacing: 2px;
            span.s1{
              font-weight: bold;
            }
            span.s2{
              font-size: 12px;
              font-weight:bold;
              color:#999;
            }
          }
          p.level{
            width: 100%;
            height: 5px;
            background-color: #ECECEC;

            span{
              display: block;
              height: 100%;
              background-color: #BFE2F6;
            }
          }
        }
      }
    }
  }

  article.article{
    div.content{
      display: flex;
      div.left{
        margin-right: 1px;
        flex: 1;
      }
      div.right{
        margin-right: 1px;
        flex: 1;
      }
      div.art{
        overflow: hidden;
        position: relative;
        img{
          display: block;
          width: 100%; 
        }
        &.art2{
          margin-top: 2px;
        }
        p.tittle{
          position:absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 30px;
          background-color: rgba(0,0,0,.1);
          font-weight: 700;
          line-height: 30px;
          color: #ffff;
          text-align: center;
          transition: bottom 0.3s;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-family: 'Quicksand';

        }
        div.cover{
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          a{
            display: block;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.5);
            opacity: 0;
            transition: opacity 0.3s;
            p{
              position:absolute;
              font-family: 'Quicksand';
              font-weight: bold;
              transition: .3s;
            }

            p:nth-child(1){
              top: 20%;
              width: 100%;
              text-align: center;
              color: #fff;
              font-size: 22px;
              text-transform:uppercase
            }

            p:nth-child(2){
              left: 50%;
              bottom:20%;
              width: 30%;
              height: 32px;
              border-radius: 16px;
              text-align: center;
              line-height: 32px;
              transform: translateX(-50%);
              color:#000;
              background-color: #bfe2e6;
            }
          }
        }

        &:hover{
          p.tittle{
            bottom: -30px;
          }
          div.cover a{
            opacity: 1 ;
            p:nth-child(1){
              top: 32%;
            }
            p:nth-child(2){
              bottom: 32%;
            }
          }
        }
      }
    }
  } 

  article.work {
    font-family: Quicksand;

    ul {
      margin-top: 40px;

      li {
        display: flex;

        div.left {
          width: 200px;

          p {
            position: relative;
            top: -12px;
            width: 160px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            font-weight: 700;
            background-color: #bfe2e6;

            &::after {
              position: absolute;
              top: 0;
              right: -30px;
              content: "";
              width: 0;
              height: 0;
              border: 15px solid transparent;
              border-left-color: #bfe2e6;
            }
          }
        }

        div.right {
          box-sizing: border-box;
          flex: 1;
          padding-left: 20px;
          padding-right: 40px;
          padding-bottom: 40px;
          border-left: 2px solid #bfe2e6;

          h3 {
            position: relative;
            margin-bottom: 20px;
            margin-top: -10px;
            line-height: 25px;
            font-size: 20px;

            &::before {
              position: absolute;
              content: "";
              top: 10px;
              left: -23px;
              width: 4px;
              height: 4px;
              background-color: #000;
            }
          }

          p.img {
            margin-bottom: 20px;
          }

          p.company {
            color: #000;
            margin-bottom: 20px;
          }

          p.content {
            color: #777;
            letter-spacing: 1px;
            font-size: 16px;
          }
        }

        &:last-child div.right {
          border-color: transparent;
        }
      }
    }
  }

  article.contact{
    .el-form{
      padding: 0 40px;
      font-family: Quicksand;
      .el-button{
        display: block;
        width: 100px;
        height: 40px;
        margin-top: 35px;
        border: 0;
        border-radius: 20px;
        box-shadow: 0 0 0 #bbb;
        background-color: #bfe2e6;
        font-weight: 700;
        font-size: 16px;
        letter-spacing: 2px;
        font-family: "Quicksand", "sans-serif";
        color: #000;
        outline: 0;
        cursor: pointer;
        transition: box-shadow 0.3s;

        &:hover{
          box-shadow: 0 3px 5px #bbb;
        }
      }
    }
  }
}

</style>

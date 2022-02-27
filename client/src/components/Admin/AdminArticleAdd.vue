<template>
  <div id="AdminArticleAdd">
    <el-tag style="margin-top: 20px;">请上传.md文件</el-tag>
    <el-upload
      class="upload-demo"
      ref="upload"  
      :action="baseURL+'/admin/upload'"
      :file-list="fileList"
      :on-success="handleMDSuccess"  
      :with-credentials="true"
      :auto-upload="false">
      <el-button size="small" type="primary">选取文件</el-button>
    </el-upload>
    <el-input v-model="title" placeholder="请输入文章标题"></el-input>
    <el-input v-model="des" placeholder="请输入文章描述"></el-input>
    <el-button 
        size="small" 
        style="margin-top:20px;"
        type="success" 
        @click="submitUpload" 
      >上传到服务器</el-button>
  </div>
</template>

<script>
export default {
  name: 'AdminArticleAdd',
  data () {
    return {
      title: "",
      des: "", 
      fileList: []
    }
  },
  methods: {
    submitUpload() {
        if(!this.title.trim() || !this.des.trim()) {
          return this.$message.error("请输入文章标题和描述")
        }
        this.$refs.upload.submit(); 
      },
    async handleMDSuccess(res) {
      if(res.code) {
        return this.$message.error(res.msg)
      }

      // 继续将文章内容上传到服务器
      let {data} = await this.$axios({
        method: "post" ,
        url: "/admin/articleAdd",
        data: {
          title: this.title.trim(),
          des: this.des.trim(),
          md: res.data.fileName
        }
      })

    }
  }
}
</script>

<style  scoped>

</style>

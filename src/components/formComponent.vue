<template>
  <div class="bg">
<Fcform :model="ruleForm" :rules = 'rules' ref="loginForm">
  <formItem label='用户名' prop='name'>
    <Fcinput v-model = 'ruleForm.name'></Fcinput>
  </formItem>
  <formItem label='密码' prop='pwd'>
    <Fcinput v-model = 'ruleForm.pwd' type='password'></Fcinput>
  </formItem>
  <formItem>
    <el-button type='primary' @click='submitForm()'>登录</el-button>
  </formItem>
</Fcform>
  {{ruleForm}}
  </div>
</template>

<script>
import Fcinput from './Input'
import formItem from './formItem'
import Fcform from './Form'
export default {
  components:{
    Fcinput,
    formItem,
    Fcform
  },
  data () {
    return {
      contentVal:'hahaha',
      ruleForm:{
        name:'',
        pwd:'',
      },
      rules:{
        name:[
          {required:true,message:'请输入用户名'},
          {min:6,max:10,message:'请输入6~10位的用户名'}
        ],
        pwd:[
          {required:true,message:'请输入密码'}
        ]
      }
    }
  },
  methods: {
    submitForm(){
      this.$refs.loginForm.validate(valid =>{
        if(valid){
          alert('success')
        }else{
          console.log('failed')
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
.bg{
  position: fixed;
  top:0;
  bottom:0;
  left:0;
  right: 0;
  background: #fff;
  padding:50px;
}
</style>

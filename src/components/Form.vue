<template>
  <div>
    <form>
      <slot></slot>
    </form>
  </div>
</template>

<script>
export default {
  provide(){
    return {
      // 将表单实例传递给后代
      form:this
    }
  },
  props:{
    model:{
      type:Object,
      required:true,
    },
    rules:{
      type:Object
    }
  },
  created() {
    // 缓存需要校验的表单项
    this.fields = []
    this.$on('formItemAdd',item=>this.fields.push(item))
  },
  methods: {
    // 将FormItem数组转换为validate()返回的promise数组
   async validate(callback){
      const tasks = this.fields.map(item => item.validate())
      console.log(tasks)
      // 获取所有结果统一处理
      const results = await Promise.all(tasks)
      let result = true
      results.forEach(valid => {
        if(!valid){
          result = false  // 只要一个失败就失败
        }
      })
      callback(result)
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
</style>

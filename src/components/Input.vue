<template>
  <div>
    <input :type="type" :value="inputValue" @input="inputHandler">
  </div>
</template>

<script>
export default {
  inject:['someVal'],
  props:{
    value:{
      type:String,
      default:''
    },
    type:{
      type:String,
      default:'text'
    }
  },
  data () {
    return {
      inputValue:this.value
    }
  },
  methods: {
    inputHandler(e){
      this.inputValue = e.target.value 
      // 通知父组件值更新
      this.$emit('input',this.inputValue)
      // 通知FormItem做校验
      this.$parent.$emit('validate',this.inputValue)
    }
  },
}
</script>

<style scoped>
input{
  border:1px solid #ddd;
  height: 40px;
  width: 100%;
  padding:10px;
}
</style>

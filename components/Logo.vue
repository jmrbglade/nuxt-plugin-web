<template>
  <div>    
     <Button label="back" @click="$router.push('/')" />   
    <slot></slot>
  </div>
</template>

<script>
import Button from 'primevue/button'
  export default {
    components:{
      'Button':Button
    },
    props:{
     
      checked: false
    },
    data() {
      return {
        
      }
    },
  }
</script>

<style scoped>

</style>
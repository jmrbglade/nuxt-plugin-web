<template>  
    <div class="container">      
      <h1>{{title}}</h1>
    
     <h2 style="margin:50px 0 50px 0;">Hello world</h2>
      <Button label="firts" @click="test()"/>
      
     
    </div>
  
</template>

<script>

export default {  
  layout: 'default',
  components:{    
  },
  data() {
    return {
      title:'Project Vue',    
    }
  },

  methods: {
    test(){ 
      this.$router.push('/firts')
  },
}

}
</script>

<style scoped>
.container{
  background: rgb(128, 185, 238);
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

}

.p-button{
  width: 100px;
  height: 50px;
  background: rgb(112, 228, 150);
  cursor: pointer;
  
}


</style>

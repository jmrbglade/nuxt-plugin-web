<template>
<div>
    <div class="container">  
        <div class="title" style="width:90%;"> CV </div>   
        <div  style="width:10%;">  <MegaMenu :model="items" /> </div>          
    </div>
      <nuxt />
</div>

</template>


<script>

export default { 
components:{
  
} ,
    data() {
        return {
            items: [{
                    label: '', icon: 'pi pi-android',
                    items: [
                        [
                            {
                                label: 'Video 1',                                
                            },
                            {
                                label: 'Video 2',                               
                            }
                        ], 
                    ]                
                },
                
             ]
        }
    }
}

</script>

<style scoped>

.container{
  display:flex;
  flex-direction: row;
  width:100%; 
  background:rgba(48, 46, 46);  
  align-items: center;
  color:white;
  height: 7vh;

}

.p-megamenu{
   background: transparent;
   border: transparent;
}
.title{
   text-align: center; 
}

</style>
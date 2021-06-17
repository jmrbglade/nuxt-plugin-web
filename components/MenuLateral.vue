<template>
<div>
   <div class="conten">

   <div  :style="container">
      <div class="menuIcon"  >
          <div style="height: 10px; widht:100%; background:  rgb(99, 98, 98);"></div>  
         <div style="widht:100%; display:flex; flex-direction:column; align-items: center; padding:5px; margin:6px 0 6px 0" @click="$emit('action','personal')">
            <i class="pi pi-user" style="fontSize: 1.2rem; color:rgb(184, 181, 181);"></i>
            <p>Personal</p>                
         </div>
         <div style="height: 10px; widht:100%; background:  rgb(99, 98, 98);"></div>          
      </div>

      <div class="menuIcon" >
         <div style="widht:100%; display:flex; flex-direction:column; align-items: center; padding:5px; margin:6px 0 6px 0"  @click="$emit('action','contacto')">
            <i class="pi pi-mobile" style="fontSize: 1.2rem; color:rgb(184, 181, 181);"></i>
            <p>Contacto</p>                
         </div>
         <div style="height: 10px; widht:100%; background: rgb(99, 98, 98);"></div>          
      </div>

       <div class="menuIcon" >
         <div style="widht:100%; display:flex; flex-direction:column; align-items: center; padding:5px; margin:6px 0 6px 0"  @click="$emit('action','conocimientos')">
            <i class="pi pi-mobile" style="fontSize: 1.2rem; color:rgb(184, 181, 181);"></i>
            <p>Conocimientos</p>                
         </div>
         <div style="height: 10px; widht:100%; background: rgb(99, 98, 98);"></div>          
      </div>

        <div class="menuIcon" >
         <div style="widht:100%; display:flex; flex-direction:column; align-items: center; padding:5px; margin:6px 0 6px 0" @click="$emit('action','perfil')">
            <i class="pi pi-align-center" style="fontSize: 1.2rem; color:rgb(184, 181, 181);"></i>
            <p>Pefil</p>                
         </div>
         <div style="height: 10px; widht:100%; background: rgb(99, 98, 98);"></div>          
      </div>

        <div class="menuIcon" >
         <div style="widht:100%; display:flex; flex-direction:column; align-items: center; padding:5px; margin:6px 0 6px 0" @click="$emit('action','experiencia')">
            <i class="pi pi-briefcase" style="fontSize: 1.2rem; color:rgb(184, 181, 181);"></i>
            <p>Experiencia</p>                
         </div>
         <div style="height: 10px; widht:100%; background: rgb(99, 98, 98);"></div>          
      </div>

        <div class="menuIcon" >
         <div style="widht:100%; display:flex; flex-direction:column; align-items: center; padding:5px; margin:6px 0 6px 0" @click="$emit('action','estudios')">
            <i class="pi pi-check-square" style="fontSize: 1.2rem; color:rgb(184, 181, 181);"></i>
            <p>Estudios</p>                
         </div>
         <div style="height: 10px; widht:100%; background: rgb(99, 98, 98);"></div>          
      </div>

      <div class="menuIcon" >
         <div style="widht:100%; display:flex; flex-direction:column; align-items: center; padding:5px; margin:6px 0 6px 0" @click="$emit('action','cursos')">
            <i class="pi pi-clone" style="fontSize: 1.2rem; color:rgb(184, 181, 181);"></i>
            <p>Cursos</p>                
         </div>
         <div style="height: 10px; widht:100%; background: rgb(99, 98, 98);"></div>          
      </div>

       <div class="menuIcon" >
         <div style="widht:100%; display:flex; flex-direction:column; align-items: center; padding:5px; margin:6px 0 6px 0" @click="$emit('action','referencias')">
            <i class="pi pi-share-alt" style="fontSize: 1.2rem; color:rgb(184, 181, 181);"></i>
            <p>Referencias</p>                
         </div>
         <div style="height: 10px; widht:100%; background: rgb(99, 98, 98);"></div>          
      </div>
      


   </div>   
</div>  
</div>
</template>

<script>


export default {   
components:{
  
} ,
layout:'header',
  data() {
        return {
           container:{
              width:'100%',
              background: 'rgb(48, 46, 46)',
              fontSize: '1rem'
           }
     }
    },
   mounted(){
      this.container.fontSize = '0.5rem'

   }

       
}
</script>

<style scoped>

.conten{
   width: 100%;
   display: flex;
   flex-direction: row;
   height: 93vh;
}

.menuIcon{
   cursor: pointer;
   color:white  
}

.menuIcon div:hover{
    background:rgb(99, 98, 98);
   transition: 0.4s;   
}




</style>
<template>
<div>
   <div class="conten">

   <div  style="width:5%; height: 100% background: rgb(99, 98, 98);">
       <MenuLateral @action="barraLateral($event)"/> 
   </div>  

   <div class="box2">
      <div v-if="action=='personal'">
      <Personal @personal="personal($event)" />
      </div>
      <div v-if="action=='contacto'">
      <Contacto @contacto="contacto($event)" />
      </div>
   </div> 

   <div class="box3">
   <ScrollPanel style="width: 100%; height: 100%">  
      <div :style='sizePaper' >
         <Cv :data='data'/>
      </div>
    </ScrollPanel>

   </div> 
   
   </div> 

    

</div>  
</template>

<script>
import MenuLateral from '~/components/MenuLateral';
import Cv from '~/components/template1';
import Personal from '~/components/Formularios/personal'
import Contacto from '~/components/Formularios/contacto'

export default {      
components:{
   'MenuLateral':MenuLateral,
   'Cv':Cv,
   'Personal':Personal,
   'Contacto':Contacto
} ,
layout:'header',
  data() {
        return {
              checked: false,
              sizePaper:{
                 width:'100%',
                 height:'',                   
                 border: '1px solid black'           
             },
             action:'',
               items: [
                {
                   label:'File',
                   icon:'pi pi-fw pi-file',
                   items:[                  
                      {
                         label:'Delete',
                         icon:'pi pi-fw pi-trash'
                      },
                      {
                         separator:true
                      },
                      {
                         label:'Export',
                         icon:'pi pi-fw pi-external-link'
                      }
                   ]
                }
               
             ] ,
         data:{
            nombre:'Full Name',
            profesion:'profession',
            telefono:'111 111 1111',
            correo:'example@example.com',
            cedula:'00000000'

         }         
         
        }
    },
    methods: {
            personal($event){              
               this.data.nombre = $event.nombre,
               this.data.profesion = $event.profesion           
            },
            barraLateral($event){
               this.action = $event
               console.log(this.action)
            },
            contacto($event){
               this.data.telefono = $event.telefono
               this.data.correo = $event.correo
               this.data.cedula = $event.cedula
               console.log($event)
            }
   },
    mounted(){     
      let z = screen.availWidth*(0.54)
      this.sizePaper.height = `${z*1.294}px`
      this.sizePaper.width = `${z}px` 
    }

       
}
</script>

<style scoped>

.conten{
   width: 100%;
   display: flex;
   flex-direction: row;
   height: 93vh;
   background: rgb(228, 228, 228);
}
.box2{
   width: 40%;
   background: rgb(199,205,210);
}
.box3{
   width: 55%;  
   margin:5px 35px 0 35px;
   
}





</style>
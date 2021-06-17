<template>
    <div>
        <div style="display: flex; width:100%; height:100%; margin:0;">
            <!-- Columna izquierda -->
            <div style="width:30%;">
                <!-- Primer Hoja -->
                <div style="background:#253847; width:100%; color:white; height:100%;">
                    <div style="width:100%; display:flex; flex-direction:column; justify-content: center; align-items: center;">
                        <!-- Foto -->
                         <div class="img" :style="sizePicture"></div>
                          <!-- Contactos -->
                  <div style="width:92%; border:1px dotted white; margin-top:30px; font-size:0.8em">
                   <div style="width:100%; margin: 4px 0 0 10px">
                     <h2 style="margin:10px 0 0 0; text-transform: uppercase;">Contacto</h2>
                      <hr align="left" color="white" size=1 width="140">
                       <p style="margin:5px 0 0 0;">Tel: {{data.telefono}}</p>
                      <p style="margin:0 0 0 0;">c.e: {{data.correo}}</p>
                      <p style="margin:0 0 10px 0;">c.c {{data.cedula}}</p>   
                   </div>        
                  </div>




                    </div>
                   

                </div>


            </div>

         <!-- Columna derecha -->
                <div style="width:70%;">
                    <!-- Primera hoja -->
                    <div style="width:100%; height:100%;">
                        <!-- Encabezado datos -->   
            <div style="background: #f5f5f5; margin:3px; width:99%; padding:10px; display:flex; align-items: center; flex-direction:column;">
            <h1 style="text-transform: uppercase ; margin-top:10px;"> {{data.nombre}}</h1>
            <hr color="black" size="2" width="300" align="left">
            <h3 style="margin-bottom: 10px; " class="h3">{{data.profesion}}</h3>        
            </div>

                    </div>

                
            </div>



        </div>

    </div>
</template>

<script>
    export default {
        props:{data:''},
        data() {
            return {
                sizePicture:{
                 'width':'100px',
                 'height':'100px',
                 'margin-top':'15px',
                 'border-radius': '50%',
                 'border': '1px solid black',

                }
               
            }
        },
        mounted(){
            let size = ((screen.availWidth*0.55)*0.3)*0.45
            this.sizePicture.width = `${size}px`
            this.sizePicture.height = `${size}px`
        }
        
    }
</script>

<style  scoped>

.img{
    background-image: url('https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914_960_720.png');
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;  
      
}

</style>
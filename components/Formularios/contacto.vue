<template>
    <div>
        <div class="container">
        <h2 style="text-align: center; margin:0 0 20px 0;">Contactos</h2>
        
        <div class='input'>
            <span class="p-float-label">
                <InputText id="inputtext" type="text" v-model="telefono" />
               <label style="color:black" for="inputtext">Telefono</label>
            </span>
        </div>
        <div class='input' >
            <span class="p-float-label">
                <InputText id="inputtext" type="text" v-model="correo" />
               <label style="color:black" for="inputtext">Correo</label>
            </span>
        </div>

         <div class='input' >
             <span class="p-float-label">
                <InputText id="inputtext" type="text" v-model="cedula" />
               <label style="color:black" for="inputtext">Numero cedula</label>
            </span>
        </div>

        <div style="text-align: end;">
        <Button label="Aceptar" @click="$emit('contacto', {telefono:telefono, correo:correo, cedula:cedula})" />
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                telefono:'',
                correo:'',
                cedula:''
            }
        },
        methods:{
         /*    onUpload() {
			this.$toast.add({severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000});
		} */
        }
    }
</script>

<style scoped>
.container{
    width: 100%;
    margin:0;
    padding: 20px;
    height: 100%;
}
.input{
    padding:20px;
    
}
.p-inputtext{
    width: 100%;
    background: white;
    color: black;
    border: 1.5px solid black;
}

.p-inputtext:enabled:focus {   
    box-shadow: 0 0 0 1px #253847;
    border-color: #253847;
}

.p-inputtext:enabled:hover {
    border-color: #253847; 
}



</style>
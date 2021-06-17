<template>
    <div>
        <div class="container">
        <h2 style="text-align: center; margin:0 0 20px 0;">Personal</h2>
        
        <div class='input'>
            <span class="p-float-label">
                <InputText id="inputtext" type="text" v-model="nombre" />
               <label style="color:black" for="inputtext">Nombre Completo</label>
            </span>
        </div>
        <div class='input' >
            <span class="p-float-label">
                <InputText id="inputtext" type="text" v-model="profesion" />
               <label style="color:black" for="inputtext">Profesion</label>
            </span>
        </div>

         <div class='input' >
             <span class="p-float-label">
                <InputText id="inputtext" type="text" />
               <label style="color:black" for="inputtext">Foto</label>
            </span>
         <!-- <FileUpload name="basic" url="~/upload" @upload="onUpload" :multiple="true" accept="image/*" :maxFileSize="1000000"/> -->
        </div>

        <div style="text-align: end;">
        <Button label="Aceptar" @click="$emit('personal', {nombre:nombre, profesion:profesion})" />
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                nombre:'',
                profesion:''
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
import Vue from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Menubar from 'primevue/menubar';
import MegaMenu from 'primevue/megamenu';
import ScrollPanel from 'primevue/scrollpanel';
import FileUpload from 'primevue/fileupload';


Vue.use(ToastService);

Vue.component('InputText', InputText);
Vue.component('Button', Button);
Vue.component('Toast', Toast);
Vue.component('Menubar', Menubar);
Vue.component('MegaMenu', MegaMenu);
Vue.component('ScrollPanel', ScrollPanel)
Vue.component('FileUplad', FileUpload)

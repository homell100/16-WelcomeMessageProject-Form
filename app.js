const myApp = Vue.createApp({
    data(){
        return{
            name: undefined
        }
    },
    methods:{
        setName: function(e){
            //FormData crea un objeto que nos permite acceder a los inputs del form de una forma muy comoda, utilizando la propiedad name de cada input. De esta forma se pueden coger los valores y actualizar nuestro estado con cualquiera de los dos valores de forma senzilla
            const formData = new FormData(e.target);
            //Imprimimos los valores de los dos inputs al pulsar el botón para monstrar la facilidad con la que podemos conseguir estos valores sin tener que utlizar v-models en los inputs o mas de una variable en data()
            console.log(formData.get("inputName"))
            console.log(formData.get("inputName2"))
            this.name = formData.get("inputName")
        }
    }
})

myApp.mount("main")
var app = new Vue ({
    el: `#app`,

    data: {

        mail: ``,
        array: [],

        
    },


    mounted() {
       

              

        
           
    },

    methods: {
        esegui: function(){
            for(i=0; i < 10; i++){
                axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`)
                .then( (response) => {
                    let email = response.data.response
                    this.mail = email
                    console.log(response)
                    
                    this.array.push(this.mail)


                })
            
            }
            console.log(this.array)
            
        }
        
    }

})
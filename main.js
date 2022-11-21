var app = new Vue ({
    el: `#app`,

    data: {

        mail: ``,
        array= ``,
        
    },


    mounted() {
    
        axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`)
            .then( (response) => {
                let email = response.data.response
                this.mail = email
                console.log(response)

            })

    
    }

})
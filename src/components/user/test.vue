<template>
    <div>
       <button v-on:click="write">click</button>
    <input type="text" v-model="users.userName">
    </div>   

</template>

<script>
export default {
    name : 'Entry',
    data(){
        return{
            users:{
                userName:''
            }
        }
    },
    methods:{
        write:function(){
            // this.$http.post(this.$serverUrl + '/users', this.users)
            // .then(function(response){
            //     alert('등록');
            // })
            // .catch(function(err){
            //     console.error(err);
            // })
        this.$http.post(this.$serverUrl + '/users',this.users)
        .then(function(response){
            console.log(response);
        })
        .catch(function (err) {
            console.error(err);
        })    
        },
        
    },
    created(){
       this.$http.get(this.$serverUrl + '/users')
        .then(function(response){
            console.log(response);
        })
        .catch(function (err) {
            console.error(err);
        })         
    }

}
</script>
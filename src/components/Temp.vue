<template>
    <div>
        <button v-on:click="event">클릭</button>


    </div>
</template>

<script>
export default {
    name:'Temp',
    methods: {
        event(){
            this.$http.get('http://localhost:3000/users').then(response => { 
                alert(response);
                console.log(response);
            }).catch((ex) => {
                console.log("에러발생"+ ex);
            });
        }
    }
}
</script>
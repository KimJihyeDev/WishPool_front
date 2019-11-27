<template>
    <div>
        <button @click="request">클릭</button>
    </div>
</template>
<script>
export default {
    methods:{
        request(){
            this.$http.get('http://localhost:3000/temp')
            .then(res=>{
                console.log(res.data);
            })
        }
    }
}
</script>
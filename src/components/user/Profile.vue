<template>
    <div>
    </div>    
</template>
<script>
export default {
    name:'Profile',
    data:function(){
        return {
            userId:'',
            userName:'',
            email:'',
            phone:'',
            nickName:'',
            }
    },
    created:function(){
            const token = localStorage.getItem('wishToken');
            this.$http.post(this.$serverURL + '/users/pro',{ headers:{ authorization:token }})
            .then((response)=>{
                console.log(response);
                localStorage.setItem('wishToken');

            })
            .catch((err)=>{
                console.error(err);
            })
    }

}
</script>
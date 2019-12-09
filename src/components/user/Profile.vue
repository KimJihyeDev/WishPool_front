<template>
    <div>
       <h3> {{user.userId}}님 환영합니다. </h3>
         </div>
</template>
<script>
export default {
    name:'Profile',
    data:function(){
        return {
                user:{
                    userId:'',
                    userName:'',
                    email:'',
                    phone:'',
                    nickName:'',
                }
            }
    },
    created:function(){
            const token = localStorage.getItem('wishToken');
            this.$http.get(this.$serverUrl + '/users/profile',{ headers:{ authorization:token }})
            .then((response)=>{
                console.log(response);
                this.user = response.data.result;

            })
            .catch((err)=>{
                console.log('에러발생');
                console.error(err);
            })
    }

}
</script>
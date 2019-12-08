<template>
    <div>
        {{user.userId}}님 환영합니다.
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
            // 여기서 반드시 get 방식으로 요청을 보내야 오류가 나지 않음. 왜??
            // 마찬가지로 server에서도 get으로 처리해야 한다.
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
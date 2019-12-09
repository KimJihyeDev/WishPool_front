<template>
   <div>
       <!-- 회원탈퇴 -->
       <!-- 이메일로 비빌번호 재설정 -->
    이메일: <input type="email" v-model="user.email">
   <button v-on:click="send">전송</button>
   <button v-on:click="deleteAccount">회원탈퇴</button>
   </div>
</template>

<script>
export default {
    name:'Test',
    data:function(){
        return {
            user:{
                userId:''
            }
        }
    },
    methods:{
        send:function(){
            this.$http.post(this.$serverUrl +'/mail',this.user)
            .then((response)=>{
                console.log(response);
            })
            .catch((err)=>{
                console.error(err);
            })
        },
         deleteAccount:function(){
            const token = localStorage.getItem('wishToken');
            this.$http.patch(this.$serverUrl + '/users/deleteAccount',this.user,{ headers:{ authorization:token }})
            .then((response)=>{
                console.log(response);
                localStorage.removeItem('wishToken');

            })
            .catch((err)=>{
                console.error(err);
            })
        }
    }
}
</script>
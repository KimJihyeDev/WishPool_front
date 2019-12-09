<template>
    <div>    
        <p>비밀번호</p>
        <input type="password" v-model="user.password">
        <!-- <p>비밀번호 재입력</p> -->
        <button v-on:click="resetPwd">비밀번호 재설정</button>
    </div>    
</template>
<script>
export default {
    name:'Auth',
    data:function(){
        return {
            user:{
                email:'',
                password:'',
                token:''
            }
        }
    },
    created:function(){
        console.log(this);
        console.log(this.$route.path);
        const token = (this.$route.path).replace('/user/auth/',"");
        this.user.token = token;
        console.log(token);
    },
    methods:{
        resetPwd:function(){
            this.$http.patch(this.$serverUrl+ '/users/resetPwd',this.user,{headers:{authorization:this.user.token}})
            .then((response)=>{
                console.log(response);
            })
            .catch((err)=>{
                console.error(err);
            })
        }
    }

}
</script>
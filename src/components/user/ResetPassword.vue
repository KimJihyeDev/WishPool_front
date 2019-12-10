<template>
    <div>
        <!-- 로그아웃 처리 -->
		<p>아이디:</p> <input v-model="user.userId">
		<p>이메일:</p> <input v-model="user.email">
        <button v-on:click="resetPwd">비밀번호 재설정</button>
        <button v-on:click="logout">로그아웃</button>
        
    </div>    
</template>
<script>
    export default {
        name:'ResetPassword',
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
    methods:{
        logout:function(){
            // 로그아웃
			const token = localStorage.getItem('wishToken');
            this.$http.get(this.$serverUrl+ '/users/logout',{headers:{authorization:token}})
            .then((response)=>{
                console.log(response);
                localStorage.removeItem('wishToken');
                this.$router.push('/user/login');
            })
            .catch((err)=>{
                console.error(err);
            })
        },
        resetPwd:function(){
            this.$http.post(this.$serverUrl + '/mail',this.user)
            .then((response)=>{
                console.log(response);
            })
            .catch((err)=>{
                console.error(err);
            })
        }        
    },
    
}
</script>
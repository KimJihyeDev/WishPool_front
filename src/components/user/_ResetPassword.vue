<template>
    <div>
        <!-- 로그아웃 처리 -->
		<p>이메일:</p> <input v-model="user.email">
        <p ref="isValied" v-show="isMessageShow">가입되지 않은 이메일입니다.</p>
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
                },
                isMessageShow:false
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
            this.$http.post(this.$serverUrl + '/users/mail',this.user)
            .then((response)=>{
                console.log(response);
                // if(response.)
                if(response.data.code === 500){
                    // alert('존재하지 않는 회원');
                    this.isMessageShow = true;
                }else{
                    this.isMessageShow = false;
                    alert('메일이 전송되었습니다.');
                }
                

            })
            .catch((err)=>{
                console.error(err);
            })
        }        
    },
    
}
</script>
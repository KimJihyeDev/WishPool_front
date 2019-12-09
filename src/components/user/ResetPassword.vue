<template>
    <div>
<<<<<<< HEAD
        <!-- 로그아웃 처리 -->
		<p>아이디:</p> <input v-model="user.userId">
		<p>이메일:</p> <input v-model="user.email">
        <button v-on:click="resetPwd">비밀번호 재설정</button>
        <button v-on:click="logout">로그아웃</button>
        
    </div>    
=======
        <p>아이디:	{{user.userId}}</p>
        <p>이메일:	{{user.email}}</p>
        <p>nickName:{{user.nickName}}</p>
    </div>
>>>>>>> 71ddeb507c573076f31e809388001060dc13b5a0
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
<<<<<<< HEAD
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
=======
        },
        created:function(){
            const token = localStorage.getItem('wishToken');
            console.log(token);
            this.$http.post(this.$serverUrl+ '/users/logout',{headers:{authorization:token}})
                .then((response)=>{
                    console.log(response);
                    localStorage.removeItem('wishToken');
                })
                .catch((err)=>{
                    console.error(err);
                })
        }

    }
>>>>>>> 71ddeb507c573076f31e809388001060dc13b5a0
</script>
<template>
    <div>
		<p>아이디:	{{user.userId}}</p>
		<p>이메일:	{{user.email}}</p>
		<p>nickName:{{user.nickName}}</p>
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
    created:function(){
			const token = localStorage.getItem('wishToken');
			console.log(token);
            this.$http.get(this.$serverUrl+ '/users/profile',{headers:{authorization:token}})
            .then((response)=>{
				console.log(response);
				this.user = response.data.result;


            })
            .catch((err)=>{
                console.error(err);
            })
    }

}
</script>
<template>
    <div id="restore-password" tabindex="-1" role="dialog" aria-labelledby="restore-password" aria-hidden="true">
        <div class="modal-dialog window-popup restore-password-popup" role="document">
        	<div class="modal-content">
        		<div class="modal-header">
        			<h6 class="title" style="font-size:1.2rem;">비밀번호 재설정하기</h6>
        			<span style="float:right;" data-dismiss="modal" aria-label="Close"><i class="fal fa-times fa-2x"></i></span>
        		</div>
        		<div class="modal-body">
    			<form method="post"  v-on:submit.prevent>
    				<!-- <div class="form-group label-floating">
    					<label class="control-label">이메일 입력</label>
    					<input class="form-control" placeholder="" type="email" v-model="user.email" required>
    				<span class="material-input"></span></div>
    				  <p ref="isValied" v-show="isMessageShow">가입되지 않은 이메일입니다.</p>
    				<button class="btn btn-purple btn-lg full-width" >확인</button> -->
    				<!-- <button  v-on:click="resetPwd">확인</button> -->
    				<p>새로운 비밀번호를 설정해 주세요.</p>
    				<!-- <div class="form-group label-floating is-empty">
    					<label class="control-label">인증번호 입력</label>
    					<input class="form-control" placeholder="" type="text" value="">
    				<span class="material-input"></span></div> -->
    				<div class="form-group label-floating">
    					<label class="control-label">새로운 비밀번호</label>
    					<input class="form-control" placeholder="" type="password" v-model="user.password">
    				<span class="material-input"></span></div>
    				<!-- <div class="form-group label-floating">
    					<label class="control-label">비밀번호 확인</label>
    					<input class="form-control" placeholder="" type="password" value="">
    				<span class="material-input"></span></div> -->
    				<button class="btn btn-primary btn-lg full-width" v-on:click="resetPwd">비밀번호 변경하기</button>
    			</form>
			</div>
		</div>
	</div>
</div>
   
</template>
<script>
export default {
    name:'Auth',
    data:function(){
        return {
            user:{
                password:'',
                token:''
            }
        }
    },
    created:function(){
        // const token = (this.$route.path).replace('/user/auth/',"");
        // this.user.token = token;
        // console.log(token);
    },
    methods:{
        resetPwd:function(){
            this.$http.patch(this.$serverUrl+ '/users/resetPwd',this.user,{headers:{authorization:this.user.token}})
            .then((response)=>{
				console.log(response);
				this.$router.push('/user/login');
            })
            .catch((err)=>{
                console.error(err);
            })
        }
    }
}
</script>
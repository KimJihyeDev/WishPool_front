<template>

		<!-- Window-popup Restore Password -->

		<!-- 테스트를 위해서 클래스 삭제(나중에 처리 바람) -->
		<!-- <div class="modal fade" id="restore-password" tabindex="-1" role="dialog" aria-labelledby="restore-password" aria-hidden="true"> -->
		<div id="restore-password" tabindex="-1" role="dialog" aria-labelledby="restore-password" aria-hidden="true">
		<div class="modal-dialog window-popup restore-password-popup" role="document">
			<div class="modal-content">


				<div class="modal-header">
					<h6 class="title" style="font-size:1.2rem;">비밀번호 찾기</h6>
					<span style="float:right;" data-dismiss="modal" aria-label="Close"><i class="fal fa-times fa-2x"></i></span>
				</div>

				<div class="modal-body">
					<form method="post" form v-on:submit.prevent>
						<p>이메일 주소를 넣고, 확인 버튼을 누르세요. 해당 이메일로 비밀번호 재설정 링크가 전송됩니다.</p>
						<div class="form-group label-floating">
							<label class="control-label">이메일 입력</label>
							<input class="form-control" placeholder="" type="email" v-model="user.email" required>
						<span class="material-input"></span></div>
						  <p v-show="isValiedShow">가입되지 않은 이메일입니다.</p>
						  <p v-show="isSubmit">이메일을 전송하였습니다</p>
						<button class="btn btn-purple btn-lg full-width" v-on:click="resetPwd">확인</button>
						<!-- <button  v-on:click="resetPwd">확인</button> -->
						<!-- <p>인증코드를 아래에 입력하시면 새로운 비밀번호를 설정하실 수 있습니다.</p>
						<div class="form-group label-floating is-empty">
							<label class="control-label">인증번호 입력</label>
							<input class="form-control" placeholder="" type="text" value="">
						<span class="material-input"></span></div>
						<div class="form-group label-floating">
							<label class="control-label">새로운 비밀번호</label>
							<input class="form-control" placeholder="" type="password" value="">
						<span class="material-input"></span></div>
						<div class="form-group label-floating">
							<label class="control-label">비밀번호 확인</label>
							<input class="form-control" placeholder="" type="password" value="">
						<span class="material-input"></span></div>
						<button class="btn btn-primary btn-lg full-width">비밀번호 변경하기</button> -->
					</form>

				</div>
			</div>
		</div>
	</div>
	<!-- ... end Window-popup Restore Password -->
</template>
<script>
export default {
	name:'ResetPassword',
	data:function(){
		return{
			user:{
				email:''
			},
			isValiedShow:false,
			isSubmit:false
		}
	},
	methods:{
		resetPwd:function(){
            this.$http.post(this.$serverUrl + '/users/mail',this.user)
            .then((response)=>{
			   console.log(response);
			//  가입 되지 않은 회원 처리
                if(response.data.code === 500){
					this.isValiedShow = true;
					return false;
                }else{
                    this.isValiedShow = false;
					this.isSubmit = true;
					
                }
            })
            .catch((err)=>{
                console.error(err);
            })
        }   
	}

    
}
</script>
<style scoped>

</style>
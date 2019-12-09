<template>

		<!-- Window-popup Restore Password -->

		<div class="modal fade" id="restore-password" tabindex="-1" role="dialog" aria-labelledby="restore-password" aria-hidden="true">
		<div class="modal-dialog window-popup restore-password-popup" role="document">
			<div class="modal-content">


				<div class="modal-header">
					<h6 class="title" style="font-size:1.2rem;">비밀번호 재설정하기</h6>
					<span style="float:right;" data-dismiss="modal" aria-label="Close"><i class="fal fa-times fa-2x"></i></span>
				</div>

				<div class="modal-body">
					<form method="get">
						<p>이메일 주소를 넣고, 인증코드 받기를 누르세요. 이메일로 인증코드를 받으실 수 있습니다.</p>
						<div class="form-group label-floating">
							<label class="control-label">이메일 입력</label>
							<input class="form-control" placeholder="" type="email" value="">
						<span class="material-input"></span></div>
						<button class="btn btn-purple btn-lg full-width">인증번호 받기</button>
						<p>인증코드를 아래에 입력하시면 새로운 비밀번호를 설정하실 수 있습니다.</p>
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
						<button class="btn btn-primary btn-lg full-width">비밀번호 변경하기</button>
					</form>

				</div>
			</div>
		</div>
	</div>

		<!-- ... end Window-popup Restore Password -->
</template>
<script>
export default {
	name:'ResetPassword'
    
}
</script>
<style scoped>

</style>
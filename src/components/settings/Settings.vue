<template>
<div class="container">
	<div class="row">
		<div class="col col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12">
			<div class="ui-block">
				<div class="ui-block-title">
					<h4 class="title">설정</h4>
				</div>
				<div class="ui-block-content">

					
					<!-- Personal Account Settings Form -->
					
					<form>
						<div class="row">
					
							<div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
								<div class="description-toggle" @click="handleClick">
									<div class="description-toggle-content">
										<div class="h6">프로필 관리</div>
										<p>내 프로필을 관리합니다</p>
									</div>
					
									<div class="togglebutton">
										<label>
											<i class="fas fa-chevron-right"></i>
										</label>
									</div>
								</div>
								
								<div class="description-toggle">
									<div class="description-toggle-content">
										<div class="h6">알림설정</div>
										<p>알림을 켜고 끕니다</p>
									</div>
					
									<div class="togglebutton">
										<label>
											<input type="checkbox" checked=""><span class="toggle"></span>
										</label>
									</div>
								</div>
								<div class="description-toggle">
									<div class="description-toggle-content">
										<div class="h6">비밀번호 재설정</div>
										<p>이메일을 통해 비밀번호를 재설정 합니다.</p>
									</div>
					
									<div class="togglebutton">
										<label class="right-arrow">
											<i class="fas fa-chevron-right"></i>
										</label>
									</div>
								</div>
								<!-- <div class="description-toggle">
									<div class="description-toggle-content">
										<div class="h6">1:1 문의</div>
										<p>궁금하신 것이 있으면 물어보세요</p>
									</div>
					
									<div class="togglebutton">
										<label class="right-arrow">
											<i class="fas fa-chevron-right"></i>
										</label>
									</div>
								</div> -->
							</div>
					
							<div class="col col-lg-6 col-md-6 col-sm-12 col-12">
								<button class="btn btn-primary btn-lg full-width">로그아웃 하기</button>
							</div>

							<div class="col col-lg-6 col-md-6 col-sm-12 col-12" style="position: absolute; bottom:0.3rem; width:90%; right:unset; ">
								<button class="btn btn-lg full-width" style="background:#bbb">회원 탈퇴 하기</button>
							</div>
						</div>
					</form>
					
					<!-- ... end Personal Account Settings Form  -->

				</div>
			</div>
		</div>
	</div>
    <div style="margin-top:2.5rem;"></div>
</div>    
</template>
<script>
export default {
	name:'Setting',
	methods:{
		handleClick(){
           this.$router.push({name:'profileModify', params: {userId:this.$userId}}); //유저 객체 전달
        }
	}
}
</script>
<style scoped>
.togglebutton label {
	font-size: small;
}

</style>
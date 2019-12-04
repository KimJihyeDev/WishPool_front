<template>
	<div class="landing-page" style="cursor: url(&quot;undefined&quot;), default;">
	<!-- Preloader --><!-- ... end Preloader -->
	<div class="content-bg-wrap"></div>
	<!-- Header Standard Landing  -->
	<!-- ... end Header Standard Landing  -->


	<div class="container">
		<div class="row display-flex">
			<div class="col col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">
				
				<!-- Login-Registration Form  -->
				
				<div class="registration-login-form">
					<!-- Nav tabs -->
					<!-- Tab panes -->
					<div class="tab-content">
						<div class="tab-pane active" id="profile" role="tabpanel" data-mh="log-tab" style="">
							<div class="title h6">로그인</div>
							<form class="content">
								<div class="row">
									<div class="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
										<div class="form-group label-floating is-empty">
											<label class="control-label">아이디</label>
											<input class="form-control" placeholder="" type="text" v-model="user.userId">
										<span class="material-input"></span></div>
										<div class="form-group label-floating is-empty">
											<label class="control-label">비밀번호</label>
											<input class="form-control" placeholder="" type="password" v-model="user.password">
										<span class="material-input"></span></div>
				
										<div class="remember">
				
											<div class="checkbox">
												<label style="font-size:0.9rem">
													<!-- <input name="optionsCheckboxes" type="checkbox"> -->
													<span class="checkbox-material">
														<span class="check"></span>
													</span>
													아이디/비밀번호 저장
												</label>
											</div>
											<div style="display:inline-flex; float:right; align-items:center;">
												<div style="display:inline; margin-right:2px;"><i class="fas fa-question-circle"></i></div>
											<a href="#" id="pwd" class="forgot" data-toggle="modal" data-target="#restore-password">
												 비밀번호 찾기</a>
											</div>
											
										</div>
				
										<a href="#" style="font-size:1rem" class="btn btn-lg btn-primary full-width" v-on:click="login">로그인</a>
				
										<div class="or"></div>
				
										<a href="#" class="btn btn-lg bg-facebook full-width btn-icon-left">
											<svg class="svg-inline--fa fa-facebook-f fa-w-10" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg><!-- <i class="fab fa-facebook-f" aria-hidden="true"></i> -->
											페이스북으로 로그인하기</a>
				
										<div class="or"></div>
										<a href="#" id="join" class="btn btn-lg btn-primary full-width">회원가입하기</a>
				
										<!-- <p>Don’t you have an account? <a href="#">Register Now!</a> it’s really simple and you can start enjoing all the benefits!</p> -->
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
				
				<!-- ... end Login-Registration Form  -->		</div>
		</div>
	</div>

	<!-- Window-popup Restore Password -->

	
	<resetPassword />
	<!-- ... end Window-popup Restore Password -->


	<!-- Window Popup Main Search -->

	<div class="modal fade" id="main-popup-search" tabindex="-1" role="dialog" aria-labelledby="main-popup-search" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered window-popup main-popup-search" role="document">
			<div class="modal-content">
				<a href="#" class="close icon-close" data-dismiss="modal" aria-label="Close">
					<svg class="olymp-close-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-close-icon"></use></svg>
				</a>
				<div class="modal-body">
					<form class="form-inline search-form" method="post">
						<div class="form-group label-floating is-empty">
							<label class="control-label">What are you looking for?</label>
							<input class="form-control bg-white" placeholder="" type="text" value="">
						<span class="material-input"></span></div>

						<button class="btn btn-purple btn-lg">Search</button>
					</form>
				</div>
			</div>
		</div>
	</div>

	</div>
</template>
<script>
import ResetPassword from './ResetPassword.vue'
export default {
    name: 'Login',
    data(){
        return{
            user:{
				userId:'',
				password:''
			}
        }
	},
	components:{
		'resetPassword': ResetPassword,
	},
	methods:{
		// dismiss(){
		// 	var el = document.getElementById('restore-password');
		// 	console.log(el.classList);
		// 	el.classList.remove('show');
		// }
		login:function(){
			this.$http.post(this.$serverUrl + '/users/login',this.user)
				.then((response)=>{
					
					console.log(response);
					
					if(response.data.code === 200){
						localStorage.setItem('wishToken',response.data.result);
						// 이후에 메인 페이지로 이동하게끔 추가
						// 메인이 안 정해졌으므로 주석처리 
						// this.$router.push('');

					}


				})
				.catch((err)=>{
					console.log(err);
				})
// 
  


// 

		}
	}
}
</script>                  
<style scoped>
	@media (max-width: 1023px){
	.registration-login-form{
			padding-top:0;
		}
	}
	.registration-login-form .title {
		padding: 15px;
		font-size: medium;
	}
	#join{
		font-size:0.9rem; 
		background: #08ddc1; 
		border:none;
	}
	#join:active:focus{
		box-shadow: none;
	}
	#pwd{
		font-size:0.9rem;
		text-decoration: underline;
	}
	.window-popup .form-group {
    	margin-bottom: 15px;
	}
</style>
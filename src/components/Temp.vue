<template>
    <div class="landing-page">
		<!-- Preloader --><!-- ... end Preloader -->
		<div class="content-bg-wrap"></div>
		<!-- Header Standard Landing  --><!-- ... end Header Standard Landing  -->
		<div class="container">
			<div class="row display-flex">

				<div class="col col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">
					
					<!-- Login-Registration Form  -->
					
					<div class="registration-login-form">
						<!-- Nav tabs -->
						<!-- Tab panes -->
						<div class="tab-content">
							<div class="tab-pane active" id="home" role="tabpanel" data-mh="log-tab" style="">
								<div class="title h6">회원가입</div>
								<form class="content">
									<div class="row">
										<div class="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
											<div class="form-group label-floating is-empty" >
												<label class="control-label">아이디</label>
												<input class="form-control" placeholder="" type="text" :class="validateUser" v-model="user.userId">
                                                <span v-if="hasTypedUserId && !isValidUserId" class="invalid-feedback">
                                                    <span class="error-box">
                                                        아이디는 3자~20자 이내의 영문,숫자만 가능합니다.
                                                    </span>
                                                </span>
											<span class="material-input"></span></div>
										</div>
									</div>
								</form>
                                <a href="#" class="btn btn-purple btn-lg full-width" style="font-size:1.1rem" v-on:click="entry">회원가입 완료</a>
							</div>
							<!-- login-tab 삭제 -->
						</div>
					</div>
					
					<!-- ... end Login-Registration Form  -->		
				</div>
			</div>
		</div>
		<div style="margin-top:2.5rem;"></div>
	</div>
</template>
<script>
export default {
	
	name: 'Register_ResetPassword',
    data(){
		return{
			user:{
				userId:'',
				userName:'테스트임미당',
				email:'test@test.com',
				password:'1234',
				phone:'010-111-2222',
				nickName:'tempNick',
				birth:'20180327',
				entryType:'w',
			},
			// 비번 재입력
			passwordConfirm:'',
			// 생일 확인용
			birthConfirm:'',
			// 입력값 널값 체크
            hasTypedUserId:false,
            hasTypedUserName:false,
            hasTypedEmail:false,
            hasTypedPassword:false,
            hasTypedPasswordConfirm:false,
            hasTypedPhone:false,
            hasTypedNickName:false,
			hasTypedBirth:false,
			// 입력값 유효성 체크
			isValidUserId:false,
			isValidUserName:false,
			isValidEmail:false,
			isValidtPassword:false,
			isValidPasswordConfirm:false,
			isValidPhone:false,
			isValidNickName:false,
			isValidBirth:false,
		}
	},
	methods:{
		entry(){
			this.$http.post(this.$serverUrl +'/users/temp', this.user)
			.then((result)=>{
				console.log(result);
			})
			.catch((err)=>{
				console.error(err);
			})
		}
	},
	watch:{
		
	},
	components:{
	},
    computed:{
        validateUser(){
            return {
                'was-validated' : this.user.userId && this.isValidUserId,
                'not-validated' : this.user.userId && !this.isValidUserId
            }
        },
        validateUserName(){
            return {
                'was-validated' : this.user.userName && this.isValidUserName,
                'not-validated' : this.user.userName && !this.isValidUserName
            }
        },
        validateEmail(){
            return {
                'was-validated' : this.user.email && this.isValidEmail,
                'not-validated' : this.user.email && !this.isValidEmail
            }
        },
        validatePassword(){
            return {
                'was-validated' : this.user.password && this.isValidPassword,
                'not-validated' : this.user.password && !this.isValidPassword
            }
        },
        validatePasswordConfirm(){
            return {
                'was-validated' : this.passwordConfirm && this.isValidPasswordConfirm,
                'not-validated' : this.passwordConfirm && !this.isValidPasswordConfirm
            }
        },
        validatePhone(){
            return {
                'was-validated' : this.user.phone && this.isValidPhone,
                'not-validated' : this.user.phone && !this.isValidPhone
            }
        },
        validateNickName(){
            return {
                'was-validated' : this.user.nickName && this.isValidNickName,
                'not-validated' : this.user.nickName && !this.isValidNickName
            }
        },
        validateBirth(){
            return {
                // 'was-validated' : this.user.birth && this.isValidBirth,
                // 'not-validated' : this.user.birth && !this.isValidBirth
                'was-validated' : this.birthConfirm && this.isValidBirth,
                'not-validated' : this.birthConfirm && !this.isValidBirth
            }
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
    @media (max-width: 480px){
        .remember a {
            display: inline;
        }
    }
    .form-control{
        font-size: 1.14rem;
    }
    @media (max-width: 360px){
        .form-group.label-floating label.control-label, .form-group.label-placeholder label.control-label {
            font-size:1rem;
        }
    }
    .checkbox label{
        font-size: 1rem;
    }
    
    .registration-login-form .remember{
        margin: 25px 0 10px;
    }

    .not-validated {
        border-color: #dc3545;
        padding-right: calc(1.5em + .75rem);
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23dc3545' viewBox='-2 -2 7 7'%3e%3cpath stroke='%23dc3545' d='M0 0l3 3m0-3L0 3'/%3e%3ccircle r='.5'/%3e%3ccircle cx='3' r='.5'/%3e%3ccircle cy='3' r='.5'/%3e%3ccircle cx='3' cy='3' r='.5'/%3e%3c/svg%3E");
        background-repeat: no-repeat;
        background-position: center right calc(.375em + .1875rem);
        background-size: calc(.75em + .375rem) calc(.75em + .375rem);
    }
    .was-validated{
        border-color: #28a745;
        padding-right: calc(1.5em + .75rem);
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-position: center right calc(.375em + .1875rem);
        background-size: calc(.75em + .375rem) calc(.75em + .375rem);
    }
    .invalid-feedback{
        display: block;
    }
    .linkA{
       text-decoration: underline; 
    }
</style>
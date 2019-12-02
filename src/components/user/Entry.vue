<template>

   <div class="container">
	<div class="row" >
			<div class="col col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12" >
				<div class="ui-block" >
					<div class="ui-block-title">
						<h6 class="title" style="text-align:center">회원가입 화면</h6>
					</div>
					<div class="ui-block-content"  >
						<!-- 아이템 정보 입력 폼 시작  -->
						<form >
							<div class="row">
								<div class="col col-lg-6 col-md-6 col-sm-12 col-12">
								
									<div class="form-group label-floating">
										<label>아이디</label>
										<input class="form-control input-center" ref="inputId" v-model="user.userId">
										<p ref="isNameNull" style="display:none">아이디를 입력해주세요</p>
										<p ref="isIdOk" style="display:none">아이디는 3자~20자 이내의 영문,숫자만 가능합니다.</p>
									</div>
						
									<div class="form-group label-floating">
										<label>비밀번호</label>
										<input class="form-control input-center"  type="password" ref="inputPwd" v-model="user.password">
										<p style="display:none">비밀번호를 입력해주세요</p>
										<p ref="isPwdOk" style="display:none">비밀번호는 8자~50자, 특수문자와 숫자를 반드시 포함시켜야 합니다.</p>
									</div>
									<div class="form-group label-floating">
										<label>비밀번호 재입력</label>
										<input class="form-control input-center" type="password" ref="inputConfirmPwd" v-model="confirm">
										<p ref="isConfirmOk" style="display:none">위의 비밀번호를 다시 입력해주세요</p>
									</div>
									<div class="form-group label-floating">
										<label>이름</label>
										<input class="form-control input-center" ref="inputName" v-model="user.userName">
										<p style="display:none">이름을 입력해주세요</p>
										<p ref="isNameOk" style="display:none">이름은 20자 이내의 한글, 영문만 가능합니다.</p>
									</div>
									<div class="form-group label-floating">
										<label>닉네임</label>
										<input class="form-control input-center" ref="inputNickName" v-model="user.nickName" />
										<p style="display:none">닉네임을 입력해주세요</p>
										<p ref="isNickNameOk" style="display:none">닉네임은 1자~20자 이내의 한글, 영문, 숫자만 가능합니다.</p>
									</div>
									<div class="form-group label-floating">
										<label>이메일</label>
										<input class="form-control input-center" placeholder="" type="text" ref="inputEmail" v-model="user.email">
										<p style="display:none">이메일을 입력해주세요</p>
										<p ref="isEmailOk" style="display:none">이메일 형식이 맞지 않습니다.</p>
									</div>
						
									<div class="form-group label-floating">
										<label>전화번호</label>
										<input class="form-control input-center" ref="inputPhone" v-model="user.phone" />
										<p style="display:none">전화번호를 입력해주세요</p>
										<p ref="isPhoneOk" style="display:none">전화번호의 형식이 맞지 않습니다.</p>
									</div>
									<!-- 나중에 달력추가 필요 -->
								</div>
							</div>
							<div class="col col-lg-6 col-md-6 col-sm-12 col-12">
								<button class="btn btn-secondary btn-lg full-width" v-on:click="entry">등록</button>
							</div>
							<div class="col col-lg-6 col-md-6 col-sm-12 col-12">
								<button class="btn btn-primary btn-lg full-width">취소</button>
							</div>
						</form>
						<!-- 아이템 입력 폼 끝 -->
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script scr="/assets/js/star.js"></script>
<script>
 $(".star").on('click',function(){
   var idx = $(this).index();
   $(".star").removeClass("on");s
     for(var i=0; i<=idx; i++){
        $(".star").eq(i).addClass("on");
   }
 });
</script>
<script>
// 나중에 추가할 것들
// 웹소켓을 이용해 아이디, 이메일, 전화번호 중복체크
// 달력 추가
export default {
	name: 'ItemAdd',
	data(){
        return{
		    user:{
				userId:'',
				userName:'',
				email:'',
				password:'',
				phone:'',
				nickName:'',
				birth:'2019-01-01', // 달력 추가 후 변경
				entryType:'wish',
			},
			confirm:'',
			validated:{
				uId: false,
				uName: false,
				uEmail:false,
				uPwd:false,
				uPhone:false,
				uNickName:false,
				// 생일은 나중에 체크
			}
		}
	},
	methods:{
		entry:function(){
			// 값을 넘기기 전에 아이디 체크
			if(this.user.userId === '' ){
				alert('아이디입력');this.$refs.inputId.focus();
				this.$refs.inputId.focus();
				return false;
			} else {
				if(!(this.validated.uId)){
					alert('아이디 형식에 맞게 입력해주세요');
					return false;
				} 
			}
			// 값을 넘기기 전에 이름 체크
			if(this.user.userName === '' ){
				alert('이름');
				this.$refs.inputName.focus();
				return false;
			} else {
				if(!(this.validated.uName)){
					alert('이름 형식에 맞게 입력해주세요');
					return false;
				} 
			}
			// 값을 넘기기 전에 이메일 체크
			if(this.user.email === '' ){
				alert('email입력');
				this.$refs.inputEmail.focus();
				return false;
			} else {
				if(!(this.validated.uEmail)){
					alert('email 형식에 맞게 입력해주세요');
					return false;
				} 
			}
			
			// 값을 넘기기 전에 패스워드 체크
			if(this.user.password === '' ){
				alert('pwd입력');
				this.$refs.inputPwd.focus();
				return false;
			} else {
				if(!(this.validated.uPwd)){
					alert('pwd 형식에 맞게 입력해주세요');
					return false;
				} 
			}
			// 값을 넘기기 전에 패스워드 확인을 입력했는지 체크
			if(this.confirm === '' ){
				alert('pwd 확인 입력');
				this.$refs.inputConfirmPwd.focus();
				return false;
			} else {
				if(this.user.password !== this.confirm){
					alert('pwd가 일치하지 않음');
					return false;
				} 
			}
			
			// 값을 넘기기 전에 전화번호 체크
			if(this.user.phone === '' ){
				alert('phone 입력');
				this.$refs.inputPhone.focus();
				return false;
			} else {
				if(!(this.validated.uPhone)){
					alert('phone 형식에 맞게 입력해주세요');
					return false;
				} 
			}
			
			// 값을 넘기기 전에 닉네임 체크
			if(this.user.nickName === '' ){
				alert('nickname 입력');
				this.$refs.inputNickName.focus();
				return false;
			} else {
				if(!(this.validated.uNickName)){
					alert('nickname 형식에 맞게 입력해주세요');
					return false;
				} 
			}
			
			// 회원 가입 처리
			this.$http.post(this.$serverUrl + '/users',this.user)
			.then(function(response){
				console.log(response);
			})
			.catch(function (err) {
				console.error(err);
			})    
		},
	},
	watch:{
		'user.userId':{
			handler:function(newVal,oldVal){
				// 3~20자까지의 영문,숫자만 입력 가능
				const regId =  /^[0-9A-za-z]{3,20}/g;
				this.validated.uId = regId.test(this.user.userId.replace(/(\s*)/g, ""));
				// 아이디를 입력한 상태에서만 공백체크
				if(this.user.userId !== ''){
					if(this.validated.uId){
						this.$refs.isIdOk.style.display = "none";
					}else{
						this.$refs.isIdOk.style.display = "block";
						return false;
					}
				} else {
					this.$refs.isIdOk.style.display = "none";
				}
			}
		},
		deep:true,
		immediate:true,
		'user.userName':{
			handler:function(newVal,oldVal){
				// 2~20자까지의 한글, 영문 이름만 입력 가능
				const regName = /^[가-힣a-zA-Z]{2,20}$/; 
				this.validated.uName = regName.test(this.user.userName.replace(/(\s*)/g, ""));
				// 이름을 입력한 상태에서만 유효성 체크
				if(this.user.userName !== ''){
					// 공백을 제거한 후에 유효성 체크
					if(this.validated.uName){
						this.$refs.isNameOk.style.display = "none";
					}else{
						this.$refs.isNameOk.style.display = "block";
						return false;
					}
				} else {
					this.$refs.isNameOk.style.display = "none";
				}
			}
		},
		deep:true,
		immediate:true,
		'user.email':{
			handler:function(newVal,oldVal){
				// 이메일 유효성 체크
				const regEmail =  /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
				this.validated.uEmail = regEmail.test(this.user.email.replace(/(\s*)/g, ""));

				if(this.user.email !== ''){
					if(this.validated.uEmail){
						this.$refs.isEmailOk.style.display = "none";
					} else {
						this.$refs.isEmailOk.style.display = "block";
						return false;
					}
				} else {
					this.$refs.isEmailOk.style.display = "none";
				}
			}
		},
		deep:true,
		immediate:true,
		'user.phone':{
			handler:function(newVal,oldVal){
				// 핸드폰 전화번호만 입력 받는다.
				const regPhone = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/;
				this.validated.uPhone = regPhone.test(this.user.phone.replace(/(\s*)/g, ""));

				// 010,016,018,019 로 시작하는 핸드폰 번호만 유효
				if(this.user.phone !== ''){
					if(this.validated.uPhone){
						this.$refs.isPhoneOk.style.display = "none";
					} else {
						this.$refs.isPhoneOk.style.display = "block";
						return false;
					}
				} else {
					this.$refs.isPhoneOk.style.display = "none";
				}
			}
		},
		deep:true,
		immediate:true,
		'user.nickName':{
			handler:function(newVal,oldVal){
				// 1자 ~ 20 자인 한글, 영문, 숫자만 유효
				const regNickName = /^([가-힣a-zA-Z0-9]{1,20})$/;
				this.validated.uNickName = regNickName.test(this.user.nickName.replace(/(\s*)/g, ""));

				if(this.user.nickName !== ''){
					if(this.validated.uNickName){
						this.$refs.isNickNameOk.style.display = "none";
					} else {
						this.$refs.isNickNameOk.style.display = "block";
						return false;
					}
				} else {
						this.$refs.isNickNameOk.style.display = "none";
				}
			}
		},
		deep:true,
		immediate:true,
		
		// 비밀번호 재입력의 변화를 감시
		'confirm':{
			handler:function(newVal,oldVal){
	
				if((this.user.password !== '') && (this.confirm !== '' )){
					if(this.user.password !== this.confirm){
						this.$refs.isConfirmOk.style.display = "block";
						return false;
					} else {
						this.$refs.isConfirmOk.style.display = "none";
					}
				} else {
					this.$refs.isConfirmOk.style.display = "none";
				}
			}
		},
		deep:true,
       	immediate:true,
		// 비밀번호를 입력값을 수정하였을 경우 감시
		'user.password':{
			handler:function(newVal,oldVal){
				// 비밀번호에 특수문자 숫자가 들어가도록 체크(8자~50자까지 허용)
				const regPwd = /^(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])(?=.*[0-9]).{8,50}$/;
				this.validated.uPwd = regPwd.test(this.user.password.replace(/(\s*)/g, ""));
				
				// 비밀번호를 입력한 상태에서만 유효성 체크
				if(this.user.password !== ''){
					if(this.validated.uPwd){
						this.$refs.isPwdOk.style.display = "none";
					} else {
						this.$refs.isPwdOk.style.display = "block";
						return false;
					}
				} else {
						this.$refs.isPwdOk.style.display = "none";
				}



				if((this.user.password !== '') && (this.confirm !== '' )){
					if(this.user.password !== this.confirm){
						this.$refs.isConfirmOk.style.display = "block";
						return false;
					} else {
						this.$refs.isConfirmOk.style.display = "none";
					}
				} else {
					this.$refs.isConfirmOk.style.display = "none";
				}
			}
		},
		deep:true,
       	immediate:true,
		},
		
		
		
	}
</script>

<style scoped>
.star-input>.input,
.star-input>.input>label:hover,
.star-input>.input>input:focus+label,
.star-input>.input>input:checked+label{display: inline-block;vertical-align:middle;background:url('/assets/img/grade_img.png')no-repeat;}
.star-input{display:inline-block; white-space:nowrap;width:225px;height:40px;padding:25px;line-height:30px;}
.star-input>.input{display:inline-block;width:150px;background-size:150px;height:28px;white-space:nowrap;overflow:hidden;position: relative;}
.star-input>.input>input{position:absolute;width:1px;height:1px;opacity:0;}
star-input>.input.focus{outline:1px dotted #ddd;}
.star-input>.input>label{width:30px;height:0;padding:28px 0 0 0;overflow: hidden;float:left;cursor: pointer;position: absolute;top: 0;left: 0;}
.star-input>.input>label:hover,
.star-input>.input>input:focus+label,
.star-input>.input>input:checked+label{background-size: 150px;background-position: 0 bottom;}
.star-input>.input>label:hover~label{background-image: none;}
.star-input>.input>label[for="p1"]{width:30px;z-index:5;}
.star-input>.input>label[for="p2"]{width:60px;z-index:4;}
.star-input>.input>label[for="p3"]{width:90px;z-index:3;}
.star-input>.input>label[for="p4"]{width:120px;z-index:2;}
.star-input>.input>label[for="p5"]{width:150px;z-index:1;}
.star-input>output{display:inline-block;width:60px; font-size:18px;text-align:right; vertical-align:middle;}
/* 입력폼 패딩 제거 처리 */
.input-center{padding: 1.0rem}
</style>
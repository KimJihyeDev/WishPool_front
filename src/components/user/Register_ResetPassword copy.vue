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
                                                        Phone Number is required
                                                    </span>
                                                </span>
											<span class="material-input"></span></div>
										</div>
										<div class="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
											<div class="form-group label-floating is-empty">
												<label class="control-label">비밀번호</label>
												<input class="form-control" placeholder="" type="password" :class="validatePassword" v-model="user.password">
                                                <span v-if="hasTypedPassword && !isValidPassword" class="invalid-feedback">
                                                    <span class="error-box">
                                                        Phone Number is required
                                                    </span>
                                                </span>
											<span class="material-input"></span></div>
										</div>
										<div class="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
											<div class="form-group label-floating is-empty" >
												<label class="control-label">비밀번호 확인</label>
												<input class="form-control" placeholder="" type="password" :class="validatePasswordConfirm" v-model="user.passwordConfirm">
                                                <span v-if="hasTypedPasswordConfirm && !isValidPasswordConfirm" class="invalid-feedback">
                                                    <span class="error-box">
                                                        Phone Number is required
                                                    </span>
                                                </span>
											<span class="material-input"></span></div>
										</div>
										<div class="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
											<div class="form-group label-floating is-empty">
												<label class="control-label">이름</label>
												<input class="form-control" placeholder="" type="text" :class="validateUserName" v-model="user.userName">
                                                <span v-if="hasTypedUserName && !isValidUserName" class="invalid-feedback">
                                                    <span class="error-box">
                                                        Phone Number is required
                                                    </span>
                                                </span>
											<span class="material-input"></span></div>
										</div>
										<div class="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
											<div class="form-group label-floating is-empty" >
												<label class="control-label">닉네임</label>
												<input class="form-control" placeholder="" type="text" :class="validateNickName" v-model="user.nickName">
                                                <span v-if="hasTypedNickName && !isValidNickName" class="invalid-feedback">
                                                    <span class="error-box">
                                                        Phone Number is required
                                                    </span>
                                                </span>
											<span class="material-input"></span></div>
										</div>
										<div class="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
											<div class="form-group label-floating is-empty" >
												<label class="control-label">전화번호</label>
												<input class="form-control" placeholder="" type="text" :class="validatePhone" v-model="user.phone">
                                                <span v-if="hasTypedPhone && !isValidPhone" class="invalid-feedback">
                                                    <span class="error-box">
                                                        Phone Number is required
                                                    </span>
                                                </span>
											<span class="material-input"></span></div>
										</div>
										<div class="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
											<div class="form-group label-floating is-empty" >
												<label class="control-label">이메일</label>
												<input class="form-control" placeholder="" type="text" :class="validateEmail" v-model="user.email">
                                                <span v-if="hasTypedEmail && !isValidEmail" class="invalid-feedback">
                                                    <span class="error-box">
                                                        Phone Number is required
                                                    </span>
                                                </span>
											<span class="material-input"></span>
											</div>
											<div class="form-group date-time-picker label-floating" >
												<label class="control-label">생년월일</label>
												<input name="datetimepicker" style="padding-top:30px" value="YYYY/MM/DD" :class="validateBirth" v-model="user.birth">
                                                <span v-if="hasTypedBirth && !isValidBirth" class="invalid-feedback">
                                                    <span class="error-box">
                                                        Phone Number is required
                                                    </span>
                                                </span>
												<span class="input-group-addon">
													<svg class="olymp-calendar-icon">
                                                        <use xlink:href="svg-icons/sprites/icons.svg#olymp-calendar-icon"></use></svg>
												</span>
											</div>
					
											<div class="remember">
												<div class="checkbox">
													<label>
														<input name="optionsCheckboxes" type="checkbox">
                                                        <span class="check"></span>
                                                        <a href="#" class="linkA">개인정보 처리방침</a>에 동의합니다.
                                                    </label>
												</div>
											</div>
					
											<a href="#" class="btn btn-purple btn-lg full-width" style="font-size:1.1rem">회원가입 완료</a>
										</div>
									</div>
								</form>
							</div>
							<!-- login-tab 삭제 -->
						</div>
					</div>
					
					<!-- ... end Login-Registration Form  -->		
				</div>
			</div>
		</div>

		<!-- Window-popup Restore Password -->

		<div class="modal fade" id="restore-password" tabindex="-1" role="dialog" aria-labelledby="restore-password" aria-hidden="true">
			<div class="modal-dialog window-popup restore-password-popup" role="document">
				<div class="modal-content">
					<a href="#" class="close icon-close" data-dismiss="modal" aria-label="Close">
						<svg class="olymp-close-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-close-icon"></use></svg>
					</a>

					<div class="modal-header">
						<h6 class="title">Restore your Password</h6>
					</div>

					<div class="modal-body">
						<form method="get">
							<p>Enter your email and click the send code button. You’ll receive a code in your email. Please use that
								code below to change the old password for a new one.
							</p>
							<div class="form-group label-floating">
								<label class="control-label">Your Email</label>
								<input class="form-control" placeholder="" type="email" value="james-spiegel@yourmail.com">
							<span class="material-input"></span></div>
							<button class="btn btn-purple btn-lg full-width">Send me the Code</button>
							<div class="form-group label-floating is-empty">
								<label class="control-label">Enter the Code</label>
								<input class="form-control" placeholder="" type="text" value="">
							<span class="material-input"></span></div>
							<div class="form-group label-floating">
								<label class="control-label">Your New Password</label>
								<input class="form-control" placeholder="" type="password" value="olympus">
							<span class="material-input"></span></div>
							<button class="btn btn-primary btn-lg full-width">Change your Password!</button>
						</form>

					</div>
				</div>
			</div>
		</div>

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

		<!-- ... end Window Popup Main Search -->

		<div class="daterangepicker dropdown-menu ltr single opensright">
			<div class="calendar left single" style="display: block;">
				<div class="daterangepicker_input">
					<div class="form-group is-empty">
						<input class="input-mini form-control" type="text" name="daterangepicker_start" value="" style="display: none;">
						<span class="material-input"></span>
					</div>
					<svg class="svg-inline--fa fa-calendar fa-w-14 glyphicon glyphicon-calendar" style="display: none;" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="calendar" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
						<path fill="currentColor" d="M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"></path>
					</svg><!-- <i class="fa fa-calendar glyphicon glyphicon-calendar" style="display: none;"></i> -->
					<div class="calendar-time" style="display: none;">
						<div></div>
						<svg class="svg-inline--fa fa-clock-o fa-w-16 glyphicon glyphicon-time" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="clock-o" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
							<g>
								<path fill="currentColor" d="M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z">
								</path>
								<circle fill="currentColor" cx="256" cy="364" r="23.2832">
									<animate attributeType="XML" repeatCount="indefinite" dur="2s" attributeName="r" values="28;14;28;28;14;28;"></animate>
									<animate attributeType="XML" repeatCount="indefinite" dur="2s" attributeName="opacity" values="1;0;1;1;0;1;"></animate>
								</circle>
								<path fill="currentColor" opacity="1" d="M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z">
									<animate attributeType="XML" repeatCount="indefinite" dur="2s" attributeName="opacity" values="1;0;0;0;0;1;"></animate>
								</path>
								<path fill="currentColor" opacity="0" d="M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z">
									<animate attributeType="XML" repeatCount="indefinite" dur="2s" attributeName="opacity" values="0;0;1;1;0;0;"></animate>
								</path>
							</g>
						</svg>
					<!-- <i class="fa fa-clock-o glyphicon glyphicon-time"></i> -->
					</div>
				</div>
				<div class="calendar-table"></div>
			</div>
			<div class="calendar right" style="display: none;">
				<div class="daterangepicker_input">
					<div class="form-group is-empty">
						<input class="input-mini form-control" type="text" name="daterangepicker_end" value="" style="display: none;">
						<span class="material-input"></span>
					</div>
					<svg class="svg-inline--fa fa-calendar fa-w-14 glyphicon glyphicon-calendar" style="display: none;" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="calendar" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
						<path fill="currentColor" d="M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"></path>
					</svg><!-- <i class="fa fa-calendar glyphicon glyphicon-calendar" style="display: none;"></i> -->
					<div class="calendar-time" style="display: none;">
						<div></div>
						<svg class="svg-inline--fa fa-clock-o fa-w-16 glyphicon glyphicon-time" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="clock-o" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
						<g>
							<path fill="currentColor" d="M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"></path>
							<circle fill="currentColor" cx="256" cy="364" r="23.2832">
								<animate attributeType="XML" repeatCount="indefinite" dur="2s" attributeName="r" values="28;14;28;28;14;28;"></animate>
								<animate attributeType="XML" repeatCount="indefinite" dur="2s" attributeName="opacity" values="1;0;1;1;0;1;"></animate>
							</circle>
							<path fill="currentColor" opacity="1" d="M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z">
								<animate attributeType="XML" repeatCount="indefinite" dur="2s" attributeName="opacity" values="1;0;0;0;0;1;"></animate>
							</path>
							<path fill="currentColor" opacity="0" d="M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z">
								<animate attributeType="XML" repeatCount="indefinite" dur="2s" attributeName="opacity" values="0;0;1;1;0;0;"></animate>
							</path>
						</g>
						</svg>
						<!-- <i class="fa fa-clock-o glyphicon glyphicon-time"></i> -->
					</div>
				</div>
				<div class="calendar-table"></div>
			</div>
			<div class="ranges" style="display: none;">
				<div class="range_inputs">
					<button class="applyBtn btn btn-sm btn-success" disabled="disabled" type="button">Apply</button>
					<button class="cancelBtn btn btn-sm btn-default" type="button">Cancel</button>
				</div>      
			</div>
    	</div>
	</div>
</template>
<script>
export default {
	name: 'Register_ResetPassword',
    data(){
		return{
			user:{
				userId:'',
				userName:'',
				email:'',
				password:'',
				passwordConfirm:'',
				phone:'',
				nickName:'',
				birth:'',
				entryType:'w',
            },
            hasTypedUserId:false,
            hasTypedUserName:false,
            hasTypedEmail:false,
            hasTypedPassword:false,
            hasTypedPasswordConfirm:false,
            hasTypedPhone:false,
            hasTypedNickName:false,
            hasTypedBirth:false,

		}
    },
    watch:{
        'user.userId':function(){
            return this.hasTypedUserId = true;
        },
        'user.userName'(){
            return this.hasTypedUserName = true;
        },
        'user.email'(){
            return this.hasTypedEmail = true;
        },
        'user.password'(){
            return this.hasTypedPassword = true;
        },
        'user.passwordConfirm'(){
            return this.hasTypedPasswordConfirm = true;
        },
        'user.phone'(){
            return this.hasTypedPhone = true;
        },
        'user.nickName'(){
            return this.hasTypedNickName = true;
        },
        'user.birth'(){
            return this.hasTypedBirth = true;
        },
    },
    computed:{
        isValidUserId(){
            //userId 유효성검증
            return false;
        },
        isValidUserName(){
            return true;
        },
        isValidEmail(){
            return true;
        },
        isValidPassword(){
            return true;
        },
        isValidPasswordConfirm(){
            return true;
        },
        isValidPhone(){
            return true;
        },
        isValidNickName(){
            return true;
        },
        isValidBirth(){
            return true;
        },
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
                'was-validated' : this.user.passwordConfirm && this.isValidPasswordConfirm,
                'not-validated' : this.user.passwordConfirm && !this.isValidPasswordConfirm
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
                'was-validated' : this.user.birth && this.isValidBirth,
                'not-validated' : this.user.birth && !this.isValidBirth
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
<template>
   <!-- Tab panes -->
					<div class="tab-content">
						<div class="tab-pane active" id="home" role="tabpanel" data-mh="log-tab">
							<div class="title h6">Register to Olympus</div>
							<form class="content">
								<div class="row" style="text-align:center">
									<div class="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                            <!--  -->
                                            <!-- 클래스 수정 ui-block -->
                                     <div class="ui-block" style="border:0px;">
                                        <article class="hentry has-post-thumbnail shared-photo">
                                            <div class="post-thumb">
                                                <img src="/assets/img/post-photo6.jpg" alt="photo">
                                            </div>
                                        </article>
                                    </div>
                                    <!--  -->
                                        <div class="form-group label-floating is-select">
											<!-- <label class="control-label">카테고리</label> -->
											<select class=" form-control">
												<option value="#" class="control-label">카테고리를 선택하세요</option>
												<option value="MA">Male</option>
												<option value="FE">Female</option>
											</select>
										</div>

										<div class="form-group label-floating">
											<label class="control-label">이름</label>
											<input class="form-control" placeholder="" type="text">
										</div>

                                        <div class="form-group label-floating">
											<label class="control-label">가격</label>
											<input class="form-control" placeholder="" type="text">
										</div>
                                        <div class="form-group label-floating">
											<label class="control-label">링크</label>
											<input class="form-control" placeholder="" type="text">
										</div>
                                        <div class="form-group label-floating">
											<label class="control-label">메모</label>
											<input class="form-control" placeholder="" type="text">
										</div>
									</div>
                                
										
									
                                    <div class="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
										<div class="form-group label-floating">
											<label class="control-label">Your Email</label>
											<input class="form-control" placeholder="" type="email">
										</div>
										<div class="form-group label-floating">
											<label class="control-label">Your Password</label>
											<input class="form-control" placeholder="" type="password">
										</div>
																		
										<div class="form-group label-floating is-select">
											<label class="control-label">Your Gender</label>
											<select class="selectpicker form-control">
												<option value="MA">Male</option>
												<option value="FE">Female</option>
											</select>
										</div>
				
										<div class="remember">
											<div class="checkbox">
												<label>
													<input name="optionsCheckboxes" type="checkbox">
													I accept the <a href="#">Terms and Conditions</a> of the website
												</label>
											</div>
										</div>
				
										<a href="#" class="btn btn-purple btn-lg full-width">Complete Registration!</a>
									</div>
								</div>
							</form>
						</div>
				
						<div class="tab-pane" id="profile" role="tabpanel" data-mh="log-tab">
							<div class="title h6">Login to your Account</div>
							<form class="content">
								<div class="row">
									<div class="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
										<div class="form-group label-floating">
											<label class="control-label">Your Email</label>
											<input class="form-control" placeholder="" type="email">
										</div>
										<div class="form-group label-floating">
											<label class="control-label">Your Password</label>
											<input class="form-control" placeholder="" type="password">
										</div>
				
										<div class="remember">
				
											<div class="checkbox">
												<label>
													<input name="optionsCheckboxes" type="checkbox">
													Remember Me
												</label>
											</div>
											<a href="#" class="forgot" data-toggle="modal" data-target="#restore-password">Forgot my Password</a>
										</div>
				
										<a href="#" class="btn btn-lg btn-primary full-width">Login</a>
				
										<div class="or"></div>
				
										<a href="#" class="btn btn-lg bg-facebook full-width btn-icon-left"><i class="fab fa-facebook-f" aria-hidden="true"></i>Login with Facebook</a>
				
										<a href="#" class="btn btn-lg bg-twitter full-width btn-icon-left"><i class="fab fa-twitter" aria-hidden="true"></i>Login with Twitter</a>
				
				
										<p>Don’t you have an account? <a href="#">Register Now!</a> it’s really simple and you can start enjoing all the benefits!</p>
									</div>
								</div>
							</form>
						</div>
					</div>
</template>

<script>
export default {
    name: 'ItemAdd'
}
</script>
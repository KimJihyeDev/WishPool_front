<template>
   <div class="col col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12">
			<div class="ui-block">
				<div class="ui-block-title">
					<h5 class="title">프로필 편집</h5>
				</div>
				<div class="ui-block-content">
					<!-- Personal Information Form  -->
					<form>
						<div class="row">
                            <div class="friend-item">
                                <div class="friend-header-thumb">
                                    <img :src="user.profileImgPath" style="height:100px; width:100px; margin-bottom: 2rem;object-fit:cover; border:1px solid #aaa; border-radius:100%" alt="friend">
                                </div>
                            </div>
                            <div class="col col-lg-6 col-md-6 col-sm-12 col-12">
								<div id="photo-box">
                                    <svg class="olymp-camera-icon" style="margin-right: .7rem;">
                                        <use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-camera-icon"></use></svg>
                                    프로필 사진 수정하기
                                </div>
								<span class="material-input"></span></div>
							<div class="col col-lg-6 col-md-6 col-sm-12 col-12">
								<div class="form-group label-floating">
									<label class="control-label">사용자 닉네임</label>
									<input class="form-control" placeholder="" type="text" v-model="user.nickName">
								<span class="material-input"></span></div>
					
								<div class="form-group label-floating">
									<label class="control-label">이메일주소</label>
									<input class="form-control" placeholder="" type="email"  v-model="user.email">
                                    <span class="material-input"></span></div>
							</div>
					
							<div class="col col-lg-6 col-md-6 col-sm-12 col-12">
								<div class="form-group label-floating">
									<label class="control-label">전화번호</label>
									<input class="form-control" placeholder="" type="text"  v-model="user.phone">
								<span class="material-input"></span></div>
										
								<div class="form-group label-floating is-empty">
									<label class="control-label">생일</label>
									<input class="form-control" placeholder="" type="text"  v-model="user.birth">
								<span class="material-input"></span></div>
							</div>
							<div class="col col-lg-6 col-md-6 col-sm-12 col-12">
								<div class="form-group">
									<textarea  v-model="user.profileMsg" class="form-control" placeholder="프로필 메시지(n자 이내)"></textarea>
								<span class="material-input"></span></div>
                            </div>
							<div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
								<div class="form-group with-icon label-floating">
									<label class="control-label">페이스북 계정t</label>
									<input class="form-control" type="text" value="www.facebook.com/james-spiegel95321">
									<svg class="svg-inline--fa fa-facebook-f fa-w-10 c-facebook" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
								<span class="material-input"></span></div>
								 <!-- <div class="form-group with-icon label-floating">
									<label class="control-label">Your Twitter Account</label>
									<input class="form-control" type="text" value="www.twitter.com/james_spiegelOK">
									<svg class="svg-inline--fa fa-twitter fa-w-16 c-twitter" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
								<span class="material-input"></span></div>
								<div class="form-group with-icon label-floating is-empty">
									<label class="control-label">Your RSS Feed Account</label>
									<input class="form-control" type="text">
									<svg class="svg-inline--fa fa-rss fa-w-14 c-rss" aria-hidden="true" focusable="false" data-prefix="fa" data-icon="rss" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M128.081 415.959c0 35.369-28.672 64.041-64.041 64.041S0 451.328 0 415.959s28.672-64.041 64.041-64.041 64.04 28.673 64.04 64.041zm175.66 47.25c-8.354-154.6-132.185-278.587-286.95-286.95C7.656 175.765 0 183.105 0 192.253v48.069c0 8.415 6.49 15.472 14.887 16.018 111.832 7.284 201.473 96.702 208.772 208.772.547 8.397 7.604 14.887 16.018 14.887h48.069c9.149.001 16.489-7.655 15.995-16.79zm144.249.288C439.596 229.677 251.465 40.445 16.503 32.01 7.473 31.686 0 38.981 0 48.016v48.068c0 8.625 6.835 15.645 15.453 15.999 191.179 7.839 344.627 161.316 352.465 352.465.353 8.618 7.373 15.453 15.999 15.453h48.068c9.034-.001 16.329-7.474 16.005-16.504z"></path></svg>
								<span class="material-input"></span></div>
								<div class="form-group with-icon label-floating">
									<label class="control-label">Your Dribbble Account</label>
									<input class="form-control" type="text" value="www.dribbble.com/thecowboydesigner">
									<svg class="svg-inline--fa fa-dribbble fa-w-16 c-dribbble" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="dribbble" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z"></path></svg>
								<span class="material-input"></span></div>
								<div class="form-group with-icon label-floating is-empty">
									<label class="control-label">Your Spotify Account</label>
									<input class="form-control" type="text">
									<svg class="svg-inline--fa fa-spotify fa-w-16 c-spotify" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="spotify" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" data-fa-i2svg=""><path fill="currentColor" d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"></path></svg>
								<span class="material-input"></span></div> -->
							</div> 
							<div class="col col-lg-6 col-md-6 col-sm-12 col-12">
								<a class="btn btn-primary btn-lg full-width" style="color: #fff; font-size:1rem;" @click="saveModify">저장</a>
								<a class="btn btn-secondary btn-lg full-width" style="color: #fff; font-size:1rem;" @click="goBack">취소</a>
							</div>
					
						</div>
					</form>
					<!-- ... end Personal Information Form  -->
				</div>
            <div style="margin-top:3rem;"></div>
			</div>
		</div>
</template>
<script>
// import store from '../../store';
// const { state } = store;

export default {
	name: 'ProfileModify',
	created(){
		(async()=>{
			try{
			const res = await this.$http.get(this.$serverUrl+'/users/profile/'+this.$route.params.userId);
			const { code, msg, user } = res.data;
			if(code=="200"){
				this.user = user;
			}else{
				console.log(msg);
				//사용자에게 잘못된 접근이라고 알릴방법?
				// this.$router.back();
			}
			}catch(e){
				console.error(e);
			}
		})();
	},
    data(){
        return {
            user:{}
        }
	},
	methods:{	
		saveModify(){
			(async()=>{
				try{
					const res = await this.$http.patch(this.$serverUrl+'/users/profile/modify/'+this.user._id, this.user);
					const { code, msg, newUser } = res.data;
					if(code=="200"){
						console.log(msg);
						this.user = newUser;
					}else{
						console.log(msg);
					}
				}catch(e){
					console.error(e);
				}
			})();
		},
		goBack(){
			//누르면 한단계 전으로 이동
			this.$router.back();
		}
	}
}
</script>
<style scoped>
#photo-box{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-top: 0;
    margin-bottom: 1.8rem;
    background: #aaa;
    border:1px solid #c2c5d0;
    color: #fff;
    fill: #c2c5d0;
    width: 100%;
    padding: 0.5rem;
    border-radius: 5px;
    font-size: 0.9rem;
}
#photo-box:active{
    background: transparent;
    color: #9a9a9a;

}
#photo-link{
    width: 100%;
}
</style>
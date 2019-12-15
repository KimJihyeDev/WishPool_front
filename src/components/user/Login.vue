<template>
    <div class="landing-page" style="cursor: url(&quot;undefined&quot;), default;">
        <!-- Preloader -->

        <div v-if="this.$store.isLoggedIn" id="hellopreloader">
            <div class="preloader">
                <svg width="45" height="45" stroke="#fff">
                    <g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)">
                        <circle cx="22" cy="22" r="6" stroke="none">
                            <animate attributeName="r" begin="1.5s" calcMode="linear" dur="3s" repeatCount="indefinite" values="6;22"/>
                            <animate attributeName="stroke-opacity" begin="1.5s" calcMode="linear" dur="3s" repeatCount="indefinite" values="1;0"/>
                            <animate attributeName="stroke-width" begin="1.5s" calcMode="linear" dur="3s" repeatCount="indefinite" values="2;0"/>
                        </circle>
                        <circle cx="22" cy="22" r="6" stroke="none">
                            <animate attributeName="r" begin="3s" calcMode="linear" dur="3s" repeatCount="indefinite" values="6;22"/>
                            <animate attributeName="stroke-opacity" begin="3s" calcMode="linear" dur="3s" repeatCount="indefinite" values="1;0"/>
                            <animate attributeName="stroke-width" begin="3s" calcMode="linear" dur="3s" repeatCount="indefinite" values="2;0"/>
                        </circle>
                        <circle cx="22" cy="22" r="8">
                            <animate attributeName="r" begin="0s" calcMode="linear" dur="1.5s" repeatCount="indefinite" values="6;1;2;3;4;5;6"/>
                        </circle>
                    </g>
                </svg>

                <div class="text">Loading ...</div>
            </div>
        </div>

        <!-- ... end Preloader -->

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
                                                    <div style="display:inline; color: #ff5e3a; margin-right:2px;"><i class="fas fa-question-circle"></i></div>
                                                    <a href="javascript:void(0)" id="pwd" class="forgot" data-toggle="modal" data-target="#restore-password">
                                                        비밀번호 찾기</a>
                                                </div>

                                            </div>

                                            <a href="#" style="font-size:1rem" class="btn btn-lg btn-primary full-width" v-on:click="login">로그인</a>

                                            <div class="or"></div>

                                            <a href="#" class="btn btn-lg bg-facebook full-width btn-icon-left" v-on:click="fbLogin">
                                                <svg class="svg-inline--fa fa-facebook-f fa-w-10" aria-hidden="true" data-dismiss="modal" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg><!-- <i class="fab fa-facebook-f" aria-hidden="true"></i> -->
                                                페이스북으로 로그인하기</a>

                                            <div class="or"></div>
                                            <a href="javascript:void(0)" id="join" class="btn btn-lg btn-primary full-width" @click="entry">회원가입하기</a>

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


        <!-- <resetPassword /> -->
        <!-- ... end Window-popup Restore Password -->


    </div>
</template>
<script>
    // import ResetPassword from './ResetPassword.vue';
    import store from '../../store';
    const { state, dispatch } = store;
    export default {

        name: 'Login',
        data(){
            return{
                user:{
                    userId:'',
                    password:'',
                },
            }
        },
        components:{
            // 'resetPassword': ResetPassword,
        },
        watch:{
            'state.userId':function(newVal){
                if(newVal){
                    this.$router.push({name: 'itemList', params: {userId:state.userId}});
                }
            }
        },
        methods:{
            login:function(){
                this.$http.post(this.$serverUrl + '/users/login',this.user)
                    .then((response)=>{
                        if(response.data.code === 200){
                            localStorage.setItem('wishToken',response.data.result);
                            //(혜은) 로그인하면,  store.state에 _id값 넣는다
                            (async()=>{
                                const res = await this.$http.get(this.$serverUrl+'/users/loginInfo/'+this.user.userId);
                                const { code, _id } = res.data;
                                if(code=="200"){
                                    const payload = {
                                        token: response.data.result, 
                                        userId: _id
                                    }
                                    dispatch('success', payload);
                                    console.log('asdf', state.userId);
                                    this.$router.push({name: 'itemList', params: {userId:state.userId}});
                                }
                            })();
                            
                            // end
                            // this.$router.push('/item/list/');
                        }
                    })
                    .catch((err)=>{
                        dispatch('auth_error');
                        localStorage.removeItem('wishToken');
                        console.error(err);
                    })
            },
            fbLogin:function(){
            
            },
            entry(){
                this.$router.push('/user/entry');
            }
        },
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
        color:#ff5e3a;
        text-decoration: underline;
    }
    .window-popup .form-group {
        margin-bottom: 15px;
    }
</style>
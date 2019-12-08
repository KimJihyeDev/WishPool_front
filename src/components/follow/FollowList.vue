<template>
<div class="">
    <div class="page-has-left-panels page-has-right-panels" style="cursor: url(&quot;undefined&quot;), default;">
        <div class="container">
            <div class="row">
                <div class="col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12">
                   
                    <div class="ui-block" style="margin-bottom:0px;">  
                        <div class="top-header top-header-favorit">
					
                            <div class="profile-section with-social-menu-tabs">
                                <div class="row">
                                    <div class="col col-xl-8 m-auto col-lg-8 col-md-12">
                                        <ul class="nav nav-tabs social-menu-tabs" role="tablist">

                                            <li class="nav-item">
                                                <a class="nav-link active" data-toggle="tab" href="#home" role="tab">
                                                    <span class="nav-content"><h4>Followings</h4></span>
                                                </a>
                                            </li>

                                            <li class="nav-item">
                                                <a class="nav-link" data-toggle="tab" href="#about" role="tab">
                                                    <span class="nav-content"><h4>Followers</h4></span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
				        </div>
                    <div class="search">
                        <form class="w-search" style="margin-bottom: 1rem;">
                            <h4 style="margin-top:1rem;">새로운 follow 찾기</h4>
                           <div class="form-group with-button is-empty">
                               <div style="inline-flex">
                               <select style="display: inline; width:20%; padding:15px 2px" v-model="searchOption">
                                   <option value="id">ID</option>
                                   <option value="phone">핸드폰</option>
                                </select>
                               <input type="text" style="display: inline; width:80%;" placeholder="ID/핸드폰 번호 검색" class="form-control" v-model="searchQuery">
                               </div>
                               <button data-toggle="modal" data-target="#create-event">
                                   <svg class="olymp-magnifying-glass-icon">
                                   <use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-plus-icon"></use></svg>
                                </button>
                                <span class="material-input"></span>
                            </div>
                        </form>
                    </div>
                       
                    </div>

                </div>
            </div>
        </div>
        <!-- Tab panes -->
        
        <div class="tab-content">
            
            <div class="tab-pane active" id="home" role="tabpanel">
                <div class="container">
                    <div class="ui-block">
            
				
				<!-- Notification List Frien Requests -->
				
				<ul class="notification-list friend-requests">
                    <a data-toggle="modal" data-target="#profile">
                        <follow-user v-for="user in users" 
                        :key="user._id" 
                        :user="user"
                        @onClick="handleClick"
                        isPlus="false" />
                    </a>
				</ul>
				
				<!-- ... end Notification List Frien Requests -->
			</div>
                </div>
            </div>
            <div class="tab-pane" id="about" role="tabpanel">
                <div class="container">
                    <div class="ui-block">
                
				<!-- Notification List Frien Requests -->
				
				<ul class="notification-list friend-requests">
					<a data-toggle="modal" data-target="#profile">
                        <follow-user v-for="user in users" 
                        :key="user._id" 
                        :user="user"
                        @onClick="handleClick"
                        isPlus="true" />
                    </a>
				</ul>
				
				<!-- ... end Notification List Frien Requests -->
			</div>
                </div>
            </div>
        </div>

    </div>
            <!-- Window-popup Create Event -->

<div class="modal fade" id="create-event" tabindex="-1" role="dialog" aria-labelledby="create-event" style="display: none;" aria-hidden="true">
	<div class="modal-dialog window-popup create-event" role="document">
        <div class="container">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="title" style="display:inline;">새로운 Follow 찾기</h3>
                <!-- modal close button(절대 삭제하지 말것) -->
                    <a href="javascript:void(0)" class="close icon-close" data-dismiss="modal" aria-label="Close">
                        <svg class="olymp-close-icon" style="fill:black;"><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-close-icon"></use></svg>
                    </a>
                    <!-- end modal close button -->
                </div>
                <div class="modal-body">
                    <h4>검색결과: "{{searchQuery}}"</h4>
                    <div class="inline-items" v-for="user in searchResults" :key="user._id">
                        <div class="author-thumb">
                            <img :src="user.profileImgPath" alt="author">
                        </div>
                        <div class="h6 author-title">{{user.userName}}</div></div>
                        <span class="material-input"></span><span class="material-input"></span>
        			<a href="#" class="btn btn-blue btn-lg full-width" data-dismiss="modal" >확인</a>
                </div>
			
		</div>
			<!-- <div class="modal-body"> -->
                <!-- 검색 백업 -->
                <!-- <h4 class="control-label" id="first-h4">ID 검색</h4>
                <form class="w-search" style="margin-bottom:1rem; margin-right:0; width:100%;">
                <div class="form-group with-button is-empty">
                    <input class="form-control" type="text" placeholder="ID로 검색해보세요" v-model="searchQuery">
                    <button>
                        <svg class="olymp-magnifying-glass-icon"><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-magnifying-glass-icon"></use></svg> -->
                        <!-- <svg><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-plus-icon"></use></svg> -->
                    <!-- </button>
                    <span class="material-input"></span>
                </div>
                </form>
                <h4 class="control-label">전화번호 검색</h4>
                <form class="w-search" style="margin-bottom:1rem; margin-right:0; width:100%;">
                <div class="form-group with-button is-empty">
                    <input class="form-control" type="text" placeholder="전화번호로 검색해보세요" v-model="searchQuery">
                    <button  style="font-size:x-small"> -->
                        <!-- <svg class="olymp-magnifying-glass-icon"><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-magnifying-glass-icon"></use></svg> -->
                        <!-- <svg><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-plus-icon"></use></svg>
                    </button>
                    <span class="material-input"></span>
                </div>
                </form> -->
                    <!-- <div>
                        <h4>검색결과: {{searchQuery}}</h4>
                        <ul>
                            <follow-user isPlus="true" />
                        </ul>
                    </div>        
			</div> -->
		</div>
        </div>
	</div>
<!-- ... end Window-popup Create Event -->
    <div class="modal fade" id="profile" tabindex="-1" role="dialog" aria-labelledby="profile" style="display: none;" aria-hidden="true">
        <div class="modal-dialog window-popup" role="document">
   <profile-detail :user="this.clickedUserInfo" />
       </div>
    </div>
   
<div style="margin-top:2.5rem;"></div>

</div>

</template>
<script>
import FollowUser from './FollowUser.vue';
import ProfileDetail from '../profile/ProfileDetail.vue';

export default {
    name: 'FollowList',
    data(){
        return{
            users:[
                {
                    _id: '5deca9efe8936b4a06963deb',
                    userName: '김하루',
                    nickName: '귀여운 고양이',
                    followingId: 1,
                    followerId: 1,
                },
                {
                    _id: '5decaa26e8936b4a06963dee',
                    userName: '명혜은',
                    nickName: 'haru_lover',
                    followingId: 0,
                    followerId: 0,
                }
            ],
            clickedUserInfo:'',
            searchOption: '',
            searchQuery: '',
            searchResults: [
                {   
                    _id: 0,
                    userName: 'Mathilda Brinker',
                    profileImgPath: '/assets/img/avatar52-sm.jpg'
                },
                {
                    _id: 1,
                    userName: 'Rachel Howlett',
                    profileImgPath: '/assets/img/avatar76-sm.jpg'
                },
                {
                    _id: 2,
                    userName: 'Marina Valentine',
                    profileImgPath: '/assets/img/avatar75-sm.jpg'
                }
            ],
        }
    },
    components:{
        'follow-user':FollowUser,
        'profile-detail': ProfileDetail
    },
    methods:{
        handleClick(payload){
            this.clickedUserInfo = {
                payload
            }
        }
    }
}
</script>
<style scoped>

.nav, .navbar{
    flex-wrap: nowrap;
}
.nav-link{
    height:100%;
}
.social-menu-tabs.nav-tabs .nav-link {
    border-bottom:1px solid #e6ecf5;
}
.social-menu-tabs.nav-tabs .nav-link.active {
    border-bottom-color: #ff5e3a;
}
.nav-content{
    width: 100%;
    text-align: center;
    font-size: 1.1rem;
}
.nav-item{
    padding:0;
}
.form-group.with-button button{
    width: 45px;
    background: #ff5e3a;
}
.ui-block{
    width:100%;
}
.w-search {
    width: 90%;
    margin-top: 0.5rem;
}
.search{
    width: 100%;
    height: 120px;
    display:flex;
    justify-content: center;
    align-items: center;
}
.icon-close{
    padding:0;
    right:unset;
    margin-right:unset;
    position: relative;
    top:unset;
}
.inline-items{
    margin: 2.7rem auto;
}
.modal-body{
    padding: 24px 23px 8px;
}
</style>
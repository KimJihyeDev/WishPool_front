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
                               <button data-toggle="modal" data-target="#create-event" @click="searchUser">
                                   <svg class="olymp-magnifying-glass-icon">
                                   <use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-plus-icon"></use></svg>
                                </button>
                                <span class="material-input"></span>
                            </div>
                        </form>
                    </div>
                    <ul class="notification-list friend-requests">
                        <h6 style="margin:0; padding: 0.5rem 1rem; border-top:1px solid lightgrey; border-bottom:1px solid lightgrey; background: whitesmoke">내 프로필 </h6>
                        <a data-toggle="modal" data-target="#profileA">
                            <li @click="handleClick(user)">
                                <div class="author-thumb">
                                    <img :src="user.profileImgPath" alt="author">
                                </div>
                                <div class="notification-event" >
                                    <a href="#" class="h6 notification-friend">{{user.userName}}</a>
                                    <span class="chat-message-item">{{user.profileMsg}}</span>
                                </div>
                            </li>
                    </a>
                    </ul>
                    </div> <!-- end of ui-block-->

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
                    <a data-toggle="modal" data-target="#profileA">
                        <follow-user v-for="user in followings" 
                        :key="user._id" 
                        :user="user"
                        @onClick="handleClick(user)"
                        @onFollowClick="removeFollow(user)"
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
					<a data-toggle="modal" data-target="#profileA">
                        <follow-user v-for="user in followers"
                        :key="user._id" 
                        :user="user"
                        @onClick="handleClick(user)"
                        @onFollowClick="addFollow(user)"
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

<div class="modal fade" id="create-event" ref="create" tabindex="-1" role="dialog" aria-labelledby="create-event" style="display: none;" aria-hidden="true">
	<div class="modal-dialog window-popup create-event" role="document">
        <div class="container">
            <div class="modal-content" id="create-event-body">
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
                    <h5 v-if="!existMatch">검색 결과가 없습니다.</h5>
                    <!-- 검색결과 : 유저리스트 -->
                    <div class="inline-items" v-for="user in searchResults" :key="user._id">
                        <a data-toggle="modal" data-target="#profileB" style="display:flex; align-items: center">
                            <div class="author-thumb">
                                <img :src="user.profileImgPath" alt="author">
                            </div>
                            <div class="h6 author-title" style="display:inline">{{user.userName}}</div>
                            <span v-if="!user.doIFollow" class="notification-icon-list">
                                <a href="javascript:void(0)" class="accept-request request" @click.stop="addFollow(user)">
                                    <span class="icon-add without-texts" style="margin-right:0px;">
                                        <svg><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                                    </span>
                                </a>
                            </span>
                            <span v-if="user.doIFollow" class="notification-icon-list">
                                <a href="javascript:void(0)" class="accept-request request-del" @click.stop="removeFollow(user)">
                                    <span class="icon-minus without-texts">
                                        <svg><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                                    </span>
                                </a>
                            </span>
                        </a>
                    </div>
                    <!-- end 검색결과 : 유저리스트 -->
                    <span class="material-input"></span><span class="material-input"></span>
        			<a href="#" class="btn btn-blue btn-lg full-width" data-dismiss="modal" >확인</a>
                </div>
			
		</div>
		</div>
        </div>
	</div>
<!-- ... end Window-popup Create Event -->
    <div class="modal fade" id="profileA" tabindex="-1" role="dialog" aria-labelledby="profileA" style="display: none;" aria-hidden="true" >
        <div class="modal-dialog window-popup" role="document">
            <profile-detail :user="this.clickedUserInfo" />
       </div>
    </div>
    <div class="modal fade" id="profileB" tabindex="-1" role="dialog" aria-labelledby="profileB" style="display: none; background:whitesmoke" aria-hidden="true" >
        <div class="modal-dialog window-popup" role="document">
            <profile-detail :user="this.clickedUserInfo" />
       </div>
    </div>
      
<div style="margin-top:2.5rem;"></div>

</div>

</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/core.js"></script>
<script>
import FollowUser from './FollowUser.vue';
import ProfileDetail from '../profile/ProfileDetail.vue';

export default {
    name: 'FollowList',
    created(){
        //나와 내 followings, followers다 불러온다.
        console.log(this.$serverUrl+'/follow/list/'+this.$userId);
        (async()=>{
            try {
                const res = await this.$http.get(this.$serverUrl+'/follow/list/'+this.$userId);
                console.log(res.data.code);
                if(res.data.code == "200"){
                    console.log(res.data.msg);
                    const { user } = res.data;
                    this.user = user; //나 = user
                    console.log(this.user);
                }else{
                    console.log(res.data.msg);
                }
            } catch (e) {
                console.error(e);
            }
        })();
        //나는 user 객체에 담고,
        //내 follows들은 users에 합쳐서 넣는다.(가다나순?)

        //팔로우 리스트 리프레시용
        this.$on('bus-refresh-fl', async()=>{

        });
    },
    mounted(){
        console.log('mounted');
    },
    data(){
        return{
            users:[ ],
            user: {},
            clickedUserInfo:'',
            searchOption: 'id',
            searchQuery: '',
            existMatch: false,
            searchResults: [],
        }
    },
    computed:{
        followings(){
            console.log('렌더링', this.user.followingId);
            return this.user.followingId; //populate해왔기때문에, id모음->id에 해당하는 객체모음으로 바뀜
        },
        followers(){
            return this.user.followerId;
        },
        //내가 이 사람을 팔로우한다면 true, 아니면 false리턴하는 값.
        //내가 이 사람을 팔로우할지 안 할지에 따라서 아이콘이 플러스/마이너스로 나뉜다.
        //내 팔로잉목록에 상대방의 아이디가 있다면,
       
    },
    components:{
        'follow-user':FollowUser,
        'profile-detail': ProfileDetail
    },
    methods:{
        handleClick(payload){
            
            this.clickedUserInfo = payload;
            console.log(this.clickedUserInfo);
        },
        //follow검색
        searchUser(){
            
            (async()=>{
                try {
                    let str = '';
                    if(this.searchOption == "id"){
                        str = 'searchId';
                    }else if(this.searchOption == "phone"){
                        str = 'searchPhone'
                    }
                    const res = await this.$http.get(this.$serverUrl+'/follow/'+str+'/'+this.searchQuery);
                    if(res.data.code == "200"){
                        console.log(res.data.msg);
                        this.existMatch = true;
                    }else if(res.data.code == "503"){
                        console.log(res.data.msg);
                        this.existMatch = false;
                    }
                    
                    //아이디를 가져옴
                    this.searchResults = res.data.matchUsers;
                    let idx = -1;
                    
                    //각각의 유저에 대하여
                    this.searchResults.forEach(user=>{
                        //그 유저가 보유하고있는 followerId에 내가 있는지 확인한다.
                        console.log(user.followerId);
                        idx = user.followerId.findIndex(followerObj=>{
                            //내가 있다면 리턴
                            return followerObj._id==this.user._id;
                        })
                        //만약 리턴값이 있다면 = 내가 이 사람의 팔로워라면,
                        if(idx>=0){
                            //user의 doIFollow속성에 true를 추가한다.
                            user.doIFollow = true;
                        }else{
                            user.doIFollow = false;
                        }

                    });
                } catch (e) {
                    console.error(e);
                }
            })();
        },
        //follow맺기
        addFollow(followUser){
            //followUser : 내가 팔로우하려는 유저
            //내 유저객체의 followingId목록에 followUser의 아이디를 추가한다.
            const selfUser = this.user;

            selfUser.followingId = [
                ...selfUser.followingId,
                followUser._id
            ];
            //내가 follow하는 유저의 follwerId목록에 내아이디를 추가한다.
            followUser.followerId = [
                ...followUser.followerId,
                this.user._id
            ];

            let payload = {
                selfUser, //나
                followUser //내가 팔로우하는 유저
            };

            (async()=>{
                try {
                    const res = await this.$http.patch(this.$serverUrl+'/follow/add/'+this.user._id, payload);
                    const { code, msg, user } = res.data;
                    if(code == "200"){
                        console.log(msg);
                        //팔로우 아이콘 minus로 변경

                        //새로온 user값을 대입해서 리액티브 반영.
                        this.user = user;
                        console.log('추가완료', this.user);
                    }else{
                        console.log(msg);
                    }
                    this.user = user;
                } catch (e) {
                    console.error(e);
                    next(e);
                }
            })();
            let num = this.searchResults.findIndex(user=> user._id == followUser._id);
            this.searchResults[num].doIFollow = true;
        },
        removeFollow(followUser){
            //followUser : 내가 팔로우끊으려는 유저
            //내 유저객체의 followingId목록에 followUser의 아이디를 삭제한다.
            const selfUser = this.user;

            let idx = selfUser.followingId.findIndex((fid)=>fid == followUser._id);
            selfUser.followingId.splice(idx, 1);
            console.log('끊으려는 사람의 인덱스', idx);
            console.log('내 팔로잉 리스트', selfUser.followingId);

            //내가 follow하는 유저의 follwerId목록에 내아이디를 추가한다.
            let index = followUser.followerId.findIndex((fid)=>fid == selfUser._id);
            followUser.followerId.splice(index, 1);
            console.log('끊으려는 사람의 팔로워 인덱스', index);
            console.log('그사람의 팔로워 리스트', followUser.followerId);

            let payload = {
                selfUser, //나
                followUser //내가 팔로우하는 유저
            };

            (async()=>{
                try {
                    //follow맺기와 삭제하기의 API는 같다(수정) - 둘다 add/:id
                    const res = await this.$http.patch(this.$serverUrl+'/follow/add/'+this.user._id, payload);
                    const { code, msg, user } = res.data;
                    if(code == "200"){
                        console.log(msg);
                        //팔로우 아이콘 minus로 변경

                        //새로온 user값을 대입해서 리액티브 반영.
                        this.user = user;
                        console.log('추가완료', this.user);
                    }else{
                        console.log(msg);
                    }
                    this.user = user;
                } catch (e) {
                    console.error(e);
                    next(e);
                }
            })();
            let num = this.searchResults.findIndex(user=> user._id == followUser._id);
            this.searchResults[num].doIFollow = false;

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
.notification-event, .notification-list li{
    display:inline-block;
    width: 100%;
}
.notification-icon{
    position: absolute;
    display: inline;
    right:15px;
    top:20%;
}
.notification-icon-list{
    position: absolute;
    display: inline;
    right:19px;
}
.notification-list.friend-requests .notification-icon {
    display: inline;
}
@media (max-width: 360px) {
  .notification-list .notification-event {
    max-width: 75%;
  }
}
li{
    padding: 25px 15px;
    display:inline-block
}
.dismiss-modalA{
    background: black;
    z-index: 10;
    opacity: 0.5;
}
.author-thumb img{
    object-fit: contain;
    width: 100%;
    height: 100%;
}
</style>
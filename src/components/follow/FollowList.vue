<template>
<div class="container">
    <div class="row">
        <div class="col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12">
            
            <div class="ui-block" style="margin-bottom:0px;">  
                
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
                    <li @click="handleClick(user)" style="display:inline-flex; align-items:center">
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
            <!-- Followings / Followers 탭 헤더 -->
             <ul class="nav nav-tabs social-menu-tabs" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" data-toggle="tab" href="#home" role="tab" v-on:click="toggleFollowing('a')">
                        <span class="nav-content"><h5>Followings</h5></span>
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#about" role="tab" v-on:click="toggleFollowing('b')">
                        <span class="nav-content"><h5>Followers</h5></span>
                    </a>
                </li>
            </ul>
            <!-- end of Followings / Followers 탭 헤더 -->
            <!-- Tab panes -->
            <!-- Followings 친구 목록 -->
                <div v-if="isFollowing" class="tab-pane active" id="home" role="tabpanel"> 
                    <!-- if-empty -->
                    <div v-if="isFollowingEmpty&&isFollowing" style="width:100%; height:100%; display:flex; justify-content:center; align-items:center; flex-direction:column">
                    <a href="javascript:void(0)" class="btn btn-control bg-blue" data-toggle="modal" data-target="#create-friend-group-1" style="">
                        <svg class="olymp-happy-face-icon"><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                    <div class="ripple-container"></div></a>
                
                    <div class="author-content">
                        <a href="#" class="h5 author-name">비었어요!</a>
                        <div class="country">새로운 follow을 추가해 보세요!</div>
                    </div>
                </div>
                    <!-- end of empty -->
                    <div v-if="!isFollowingEmpty&&isFollowing" class="ui-block">
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
                        <!-- ... end Followings 친구 목록 -->
                
                    </div>
                </div>
            
                <!-- Followers 친구 목록 -->
                <div v-if="!isFollowing" class="tab-pane" id="about" role="tabpanel">
                    <div v-if="isFollowerEmpty&&(!isFollowing)" style="width:100%; height:100%; display:flex; justify-content:center; align-items:center; flex-direction:column">
                  <a href="javascript:void(0)" class="btn btn-control bg-blue" data-toggle="modal" data-target="#create-friend-group-1" style="">
                     <svg class="olymp-happy-face-icon"><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                  <div class="ripple-container"></div></a>
            
                  <div class="author-content">
                     <a href="#" class="h5 author-name">비었어요!</a>
                     <div class="country">새로운 follow을 추가해 보세요!</div>
                  </div>
                    <div v-if="!isFollowerEmpty&&(!isFollowing)" class="ui-block">
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
                        <!-- ... end Followers 친구 목록 -->

                    </div>
                </div>
            </div>   
            </div> <!-- end of ui-block-->
        </div>
            
    </div>
    

        <!-- Window-popup Create Event -->

    <div class="modal fade" id="create-event" ref="create" tabindex="-1" role="dialog" aria-labelledby="create-event" style="display: none;" aria-hidden="true">
        <div class="modal-dialog window-popup create-event" role="document">
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
                        <a data-toggle="modal" @click="handleClick(user)" data-target="#profileB" style="display:flex; align-items: center">
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
<!-- ... end Window-popup Create Event -->
    <div class="modal fade" id="profileA" tabindex="-1" role="dialog" aria-labelledby="profileA" style="display: none;" aria-hidden="true" >
        <div class="modal-dialog window-popup" role="document">
            <profile-detail :user="clickedUserInfo"/>
    </div>
    </div>
    <div class="modal fade" id="profileB" tabindex="-1" role="dialog" aria-labelledby="profileB" style="display: none; background:whitesmoke" aria-hidden="true" >
        <div class="modal-dialog window-popup" role="document">
            <profile-detail :user="clickedUserInfo"/>
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
            isFollowing: true
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
        isFollowingEmpty(){
            if(this.user.followingId){
                if(this.user.followingId.length==0){
                    return true;
                }
            }
            return false;
        },
        isFollowerEmpty(){
            if(this.user.followingId){
                if(this.user.followerId.length==0){
                return true;
                }
            }
            return false;
        },
       
    },
    components:{
        'follow-user':FollowUser,
        'profile-detail': ProfileDetail
    },
    methods:{
        handleClick(payload){
            console.log('handleclick', payload);
            this.clickedUserInfo = payload;
             (async()=>{
                 try {
                      const res = await this.$http.get(this.$serverUrl+'/item/count/'+this.clickedUserInfo._id);
                if(res.data.code=="200"){
                    console.log(res.data.msg);
                    this.clickedUserInfo={
                        ...this.clickedUserInfo,
                        itemCount : res.data.count
                    };
                }else{
                    console.log(res.data.msg);
                }
                 } catch (e) {
                     consolle.error(e);
                 }
               
            })();
            console.log(this.clickedUserInfo);
        },
        toggleFollowing(val){
            if(val == 'a'){
                this.isFollowing = true;
            }else if(val =='b'){
                this.isFollowing = false;
            }
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
        },
    }
}
</script>
<style scoped>

.nav, .navbar{
    flex-wrap: nowrap;
}
.nav-link{
    height:100%;
    background:#fff;
    padding:0.5rem;
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
    width: 100%;
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
    display:inline-flex;
    width: 100%;
}
.notification-icon{
    position: relative;
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
    padding: 17px 15px;
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
@media (min-width: 540px){
    .col-sm-6{
        flex: 0 0 100%;
        max-width: 100%;
    }
    .col-md-6{
        flex: 0 0 100%;
        max-width: 100%;
    }
}
@media (min-width: 800px){
    .col-md-12{
        flex: 0 0 100%;
        max-width: 100%;
    }
    .col-md-6{
        flex: 0 0 100%;
        max-width: 100%;
    }
    
}
.tab-content{
    width: 100%;
    height: 50%;
}
.author-content{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.tab-pane{
    height: 50%;
}
</style>
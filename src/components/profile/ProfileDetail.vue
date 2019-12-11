<template>

    <div class="container">
        <div class="modal-content">
            <div class="modal-body">
                <!-- modal close button(절대 삭제하지 말것) -->
            <a href="javascript:void(0)" class="close icon-close" data-dismiss="modal" aria-label="Close">
                <svg class="olymp-close-icon" style="fill:#333333; width: 13px;"><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-close-icon"></use></svg>
            </a>
            <!-- end modal close button -->
                <div class="row">
                    <div class="col col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="ui-block">
                            <!-- Friend Item -->
                            <div class="friend-item">
                                <div class="friend-header-thumb">
                                    <img :src="user.profileImgPath" style="height:122px; object-fit:cover;" alt="friend">
                                </div>
                            
                                <div class="friend-item-content">
                            
                                    <div v-if="isMe" class="more">
                                        <svg class="olymp-three-dots-icon"><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                                        <ul class="more-dropdown">
                                            <li>
                                                <a href="javascript:void(0)" data-dismiss="modal" @click="handleClick">프로필 수정하기</a>
                                            </li>
                                            <!-- <li>
                                                <a href="#">Block Profile</a>
                                            </li> -->
                                        </ul>
                                    </div>
                                    <div class="friend-avatar">
                                        <div class="author-thumb">
                                            <img :src="user.profileImgPath" style="width:92px; height:92px" alt="author">
                                        </div>
                                        <div class="author-content">
                                            <a href="#" class="h5 author-name">{{user.nickName}}</a>
                                            <div class="country"></div>
                                        </div>
                                    </div>
                                    <div class="friend-count">
                                        <a href="#" class="friend-count-item">
                                            <div class="h6">{{followCount}}</div>
                                            <div class="title">Follows</div>
                                        </a>
                                        <a href="#" class="friend-count-item">
                                            <div class="h6">{{followerCount}}</div>
                                            <div class="title">Followers</div>
                                        </a>
                                        <a href="#" class="friend-count-item">
                                            <div class="h6">{{this.user.itemCount}}</div>
                                            <div class="title">Items</div>
                                        </a>
                                    </div>
                                    <div class="control-block-button">
                                        <a v-if="isMe" href="javascript:void(0)" class="btn btn-control bg-secondary">
                                            <span class="icon-minus without-texts" style="margin-right:0px; color:transparent">
                                                <svg class="olymp-happy-face-icon"><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                                            </span>
                                        </a>
                                        <a v-else-if="!doIFollow" href="javascript:void(0)" class="btn btn-control bg-blue">
                                            <span  class="icon-add without-texts" style="margin-right:0px;">
                                                <svg class="olymp-happy-face-icon"><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                                            </span>
                                        </a>
                                        <a v-else href="javascript:void(0)" class="btn btn-control bg-primary">
                                            <span class="icon-minus without-texts" style="margin-right:0px;">
                                                <svg class="olymp-happy-face-icon"><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                                            </span>
                                        </a>
                                        <a href="javascript:void(0)" class="btn btn-control bg-purple" @click="listItems" data-dismiss="modal" aria-label="Close">
                                            <svg class="olymp-newsfeed-icon"><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-newsfeed-icon"></use></svg>
                                        </a>
                
                                    </div>
                                </div>
                            </div>
                            
                            <!-- ... end Friend Item -->			</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
export default {
    name: 'ProfileDetail',
    props: ['user'],
    computed:{
        doIFollow(){
            if(this.user.isPlus){
                return false;
            }
            return true;
        },
        isMe(){
            if(this.user._id == this.$userId){
                return true;
            }
            return false;
        },
        followCount(){
            if(this.user.followingId){
                return this.user.followingId.length;
            }
            return 0;
        },
        followerCount(){
            if(this.user.followerId){
                return this.user.followerId.length;
            }
            return 0;
        }
    },
    methods:{
        listItems(){
            //현재 클릭한 유저(props로 넘어온 this._id)의 아이템 리스트로 이동한다.
            this.$router.push({name: 'itemList', params: {userId:this.user._id}});
            //파라미터를 달고 이동하는 경우, path가 아닌 라우터에 해당 컴포넌트 이름(name)을 지정해야한다고 한다.
        },
        handleClick(){
           this.$router.push({name:'profileModify', params: {userId:this.user._id}}); //유저 객체 전달
        }
    }
}
</script>
<style scoped>
.icon-add:after{
    right: -5px;
    top: -15px;
}
.icon-minus:after{
    right: -5px;
    top: -15px;
}
.icon-close{
    padding:0;
    right:9px;
    margin-right:unset;
    position: absolute;
    top: 7px;
    z-index: 2;
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
.more-dropdown{
    width: 140px;
}
</style>
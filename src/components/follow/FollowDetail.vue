<template>

    <div class="container">
        <div class="modal-content">
        <!-- end modal close button -->
            <div class="modal-body">
                <!-- modal close button(절대 삭제하지 말것) -->
            <a href="javascript:void(0)" class="close icon-close" data-dismiss="modal" aria-label="Close">
                <svg class="olymp-close-icon" style="fill:#333333; width: 13px;"><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-close-icon"></use></svg>
            </a>
                <div class="row">
                    <div class="col col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div class="ui-block">
                            <!-- Friend Item -->
                            <div class="friend-item">
                                <div class="friend-header-thumb">
                                    <img src="/assets/img/friend1.jpg" alt="friend">
                                </div>
                            
                                <div class="friend-item-content">
                            
                                    <div class="more">
                                        <svg class="olymp-three-dots-icon"><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                                        <ul class="more-dropdown">
                                            <li>
                                                <a href="#">Report Profile</a>
                                            </li>
                                            <li>
                                                <a href="#">Block Profile</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="friend-avatar">
                                        <div class="author-thumb">
                                            <img src="/assets/img/avatar1.jpg" alt="author">
                                        </div>
                                        <div class="author-content">
                                            <a href="#" class="h5 author-name">nickName</a>
                                            <div class="country">profileMsg</div>
                                        </div>
                                    </div>
                                    <div class="friend-count">
                                        <a href="#" class="friend-count-item">
                                            <div class="h6">52</div>
                                            <div class="title">Follows</div>
                                        </a>
                                        <a href="#" class="friend-count-item">
                                            <div class="h6">240</div>
                                            <div class="title">Followers</div>
                                        </a>
                                        <a href="#" class="friend-count-item">
                                            <div class="h6">16</div>
                                            <div class="title">Items</div>
                                        </a>
                                    </div>
                                    <div class="control-block-button">
                                        <a v-if="!doIFollow" href="javascript:void(0)" class="btn btn-control bg-blue">
                                            <span  class="icon-add without-texts" style="margin-right:0px;">
                                                <svg class="olymp-happy-face-icon"><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                                            </span>
                                        </a>
                                        <a v-if="doIFollow" href="javascript:void(0)" class="btn btn-control bg-primary">
                                            <span class="icon-minus without-texts" style="margin-right:0px;">
                                                <svg class="olymp-happy-face-icon"><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                                            </span>
                                        </a>
                                        <a href="javascript:void(0)" class="btn btn-control bg-purple" @click="listItems">
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
    data(){
        return{
            doIFollow: true,
        }
    },
    methods:{
        listItems(){
            
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
</style>
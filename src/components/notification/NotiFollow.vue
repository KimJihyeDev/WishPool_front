<template>
    <li v-on:click="emitClick" :class="{'un-read':haveRead}">
        <div class="author-thumb">
            <img :src="profileImgPath" alt="author">
        </div>
        <div class="notification-event">
            <a href="#" class="h6 notification-friend">{{by}}</a>
            님이 당신을 <a href="javascript:void(0)" style="color:#ff5e3a" class="notification-link">팔로우</a>합니다..
            <span class="notification-date"><time class="entry-date updated" datetime="2004-07-24T18:18">9 hours ago</time></span>
        </div>

        <div class="more">
            <a href="javascript:void(0)" v-on:click.stop="deleteThis">
            <svg class="olymp-little-delete"><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-little-delete"></use></svg>
            </a>
        </div>
    </li>
</template>
<script>
export default {
   name: 'NotiFollow',
    props: ['by', 'date', 'itemName', 'haveRead', 'profileImgPath'],
    
    methods:{
        deleteThis(){
            this.$emit('deleteNoti');
        },
        emitClick(){
            this.$emit('clicked');
        }
    }
}
</script>
<style scoped>
@media (max-width: 360px){
    .notification-list .notification-event {
        max-width: 75%;
    }
}
.un-read{
        background-color: #f7f9fc;
}
</style>
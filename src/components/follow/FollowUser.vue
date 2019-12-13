<template>
    <li @click="sendUserId">
        <div class="author-thumb">
            <img :src="user.profileImgPath" alt="author">
        </div>
        <div class="notification-event" style="display:flex; flex-direction:column;">
            <a href="#" class="h6 notification-friend">{{user.userName}}</a>
            <span class="chat-message-item">{{user.profileMsg}}</span>
        </div>
        <span v-if="isShow" class="notification-icon">
            <a href="javascript:void(0)" class="accept-request request" @click.stop="iconClicked">
                <span class="icon-add without-texts" style="margin-right:0px;">
                    <svg class="olymp-happy-face-icon"><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                </span>
            </a>
        </span>
        <span v-if="!isShow" class="notification-icon">
            <a href="javascript:void(0)" class="accept-request request-del" @click.stop="iconClicked">
                <span class="icon-minus without-texts">
                    <svg class="olymp-happy-face-icon"><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                </span>
            </a>
        </span>
    </li>
</template>
<script>
export default {
    name:'FollowUser',
    props: ['isPlus', 'user'],
    computed:{
        isShow(){
            if(this.isPlus === 'true'){
                return true;
            }
            return false;
        }
    },
    methods:{
        sendUserId(){
            const payload={
                _id: this._id,
                isPlus : this._isPlus
            }
            this.$emit('onClick', payload);
        },
        iconClicked(){
            this.$emit('onFollowClick');
        }
    },
}
</script>
<style scoped>
.notification-event, .notification-list li{
    display:inline-flex;
    width: 100%;
}
.notification-list.friend-requests .notification-icon {
    display: inline;
    margin-top:0px;
}
@media (max-width: 360px) {
  .notification-list .notification-event {
    max-width: 75%;
  }
}
li{
    padding: 20px 15px;
    display:inline-flex;
    justify-content: center;
    align-items: center;
}

</style>
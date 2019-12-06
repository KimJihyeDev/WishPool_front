<template>
<div class="container">
	<div class="row">
		<div class="col col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12">
			<div class="ui-block">
                
				<div class="ui-block-title">
					<h4 class="title">내 Follower 목록</h4>
					<!-- <a href="#" class="more"><svg class="olymp-three-dots-icon"><use xlink:href="#olymp-three-dots-icon"></use></svg></a> -->
				</div>
				
				<!-- Notification List Frien Requests -->
				
				<ul class="notification-list friend-requests">
					<li>
						<div class="author-thumb">
							<img src="/assets/img/avatar15-sm.jpg" alt="author">
						</div>
						<div class="notification-event" >
							<a href="#" class="h6 notification-friend">Tamara Romanoff</a>
							<span class="chat-message-item">Mutual Friend: Sarah Hetfield</span>
						</div>
						<span class="notification-icon">
                            <a href="#" class="accept-request request">
                                <span class="icon-add without-texts" style="margin-right:0px;">
                                    <svg class="olymp-happy-face-icon"><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                                </span>
                            </a>

                        </span>
                    </li>
				</ul>
				
				<!-- ... end Notification List Frien Requests -->
			</div>

		</div>

		
	</div>
</div>    
</template>
<script>
export default {
    name: 'FollowerList'
}
</script>
<style scoped>
.notification-event{
    display:inline-block;
}
.notification-icon{
    position: absolute;
    display: inline-block;
    right:15px;
    top:20%;
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
}
</style>
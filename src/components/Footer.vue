<template>
<div class="navbar fixed-bottom">
    <div class="footer-list">
        <ul class="nav nav-tabs mobile-app-tabs" role="tablist">
	<li class="nav-item">
		<a class="nav-link" href="javascript:void(0)" v-on:click="gotoFollowList" data-toggle="tab" role="tab">
            <div class="control-icon has-items">
                <svg class="olymp-happy-face-icon"><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                <span id="new-friend-badge" class="icon-status online"></span>
            </div>
		</a>
	</li>

	<li class="nav-item">
		<a class="nav-link" href="javascript:void(0)" v-on:click="gotoItemList" data-toggle="tab" role="tab" aria-selected="false">
            <div class="control-icon has-items">
			    <svg id="item-list" class="olymp-newsfeed-icon"><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-newsfeed-icon"></use></svg>
                <!-- <svg id="item-list2" data-icon="list-ul" class="svg-inline--fa fa-list-ul fa-w-16" role="tab" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 48a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm448 16H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"></path></svg> -->
                <!-- <svg id="item-list2" data-icon="bars" class="svg-inline--fa fa-bars fa-w-14" role="tab" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg> -->
            </div>
		<div class="ripple-container"></div></a>
	</li>

	<li class="nav-item">
		<a class="nav-link" href="javascript:void(0)" v-on:click="gotoItemAdd" data-toggle="tab" role="tab" aria-selected="false">
			<div class="control-icon has-items">
				<svg class="olymp-happy-face-icon"><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-register-icon"></use></svg>
                <!-- <svg id="item-list3" data-prefix="fas" data-icon="plus-square" class="svg-inline--fa fa-plus-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-32 252c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92H92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path></svg> -->
			</div>
		<div class="ripple-container"></div></a>
	</li>

	<li class="nav-item">
		<a class="nav-link" href="javascript:void(0)" v-on:click="gotoNotification" data-toggle="tab" role="tab" aria-selected="false">
			<div class="control-icon has-items">
                <!-- <svg class="svg-inline--fa fa-bell fa-w-14" id="bell" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M439.39 362.29c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71zM67.53 368c21.22-27.97 44.42-74.33 44.53-159.42 0-.2-.06-.38-.06-.58 0-61.86 50.14-112 112-112s112 50.14 112 112c0 .2-.06.38-.06.58.11 85.1 23.31 131.46 44.53 159.42H67.53zM224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64z"></path></svg> -->
                <!-- <svg class="olymp-heart-icon"><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-heart-icon"></use></svg> -->
                <svg id="bell" class="svg-inline--fa fa-heart fa-w-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path></svg>
				<div id="bell-badge" class="label-avatar bg-primary">2</div>
			</div>
		<div class="ripple-container"></div></a>
	</li>

	<li class="nav-item">
		<a class="nav-link" href="javascript:void(0)" v-on:click="gotoSettings" data-toggle="tab" role="tab" aria-selected="true">
			<div class="control-icon has-items">
				<svg id="three-dots" class="olymp-three-dots-icon"><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
			</div>
		<div class="ripple-container"></div></a>
	</li>

</ul>
    </div>
    </div>
</template>

<script>
export default {
    name:'Footer',
    methods:{
        gotoFollowList(){ this.$router.push({path:'/follow/list'}) },
        gotoItemList(){ this.$router.push({path:'/item/list'}) },
        gotoItemAdd(){ this.$router.push({path:'/item/add'}) },
        gotoNotification(){ this.$router.push({path:'/noti'}) },
        gotoSettings(){ this.$router.push({path:'/settings'}) },
    }
}
</script>
<style scoped>
    #bell, #item-list2{
        width: 28px;
        height: 21px;
        color: #9a9fbf;
    }
    #item-list3{
        width: 28px;
        height: 26px;
        color: #9a9fbf;
    }
    #bell-badge{
        top: 4px;
        right:-6px;
    }
    #three-dots{
        width: 20px;
    }
    .mobile-app-tabs{
        height: 55px;
        margin-bottom: 0px;
    }
    .nav-item{
        height: 100%;
        flex: 1;
        display: flex;
        justify-content:center;
    }

    .nav-link{
        width:100%;
        flex-direction: row;
    }
    .nav-link, .navbar {
    padding: 0;
    }
    .control-icon, .has-items{
        display:flex;
        align-items: center;
    }
    .footer-list{
        position: absolute;
        width: 100%;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .mobile-app-tabs .control-icon{
        margin:0;
    }
    #new-friend-badge{
        position: absolute;
        top: 14px;
        right:-12px;
    }
</style>
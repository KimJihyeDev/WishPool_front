<template>
<div>
    <li class="inline-items" v-on:click="goDetail">
		<div class="item-detail">
			<div class="author-thumb control-con">
				<img src="/assets/img/avatar41-sm.jpg" alt="author">
					
				<div v-if=isPublic class="label-avatar bg-blue-light public">공개</div>
				<div v-if=isPrivate class="label-avatar post-category bg-primary private">비공개</div>
				<div v-if=isGroup class="label-avatar post-category bg-purple group">그룹공개</div>
			</div>
			<div class="notification-event">
				<a href="#" class="h6 notification-friend">{{name}}</a>
				<span class="chat-message-item">{{price}}</span>
			</div>
		</div>
		<div class="more-btn">
			<a href="javascript:void(0)" v-on:click.stop="copyLink" class="accept-request" style="border:1px solid #6cb6f5;">
				<span class="without-text" style="color:#6cb6f5; font-size:x-small;">링크</span>
			</a>
			<a href="javascript:void(0)" v-on:click.stop="makePurchase" class="accept-request" style="border:1px solid #7c5ac2;">
				<span class="without-text" style="color:#7c5ac2; font-size:x-small;">{{isCompleted}}</span>
			</a>
		</div>
	</li>
    <!-- 삭제 -->
    <!-- <div class="col col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
		<div class="ui-block">
			<div class="half-block">
				<a href="javascript:void(0)" v-on:click="goDetail">
			<div class="birthday-item inline-items">
				<div class="author-thumb">
					<img src="/assets/img/avatar7-sm.jpg" alt="author">
				</div>
				<div class="birthday-author-name">
					<a href="javascript:void(0)" class="h6 author-name">{{name}} </a>
					<div class="birthday-date">{{price}}</div>
				</div>
				
			</div>
			</a>
			</div>
			<div class="half-block2">
				<div class="btn-list">
					<a v-on:click.stop="voidClick" href="javascript:void(0)" class="btn btn-sm bg-blue">공개</a>
					<a v-on:click.stop="copyLink" href="javascript:void(0)" class="btn btn-sm bg-blue">링크</a>
					<a v-on:click.stop="goModify" href="javascript:void(0)" class="btn btn-sm bg-blue">수정</a>
					<a v-on:click.stop="makePurchase" href="javascript:void(0)" class="btn btn-sm bg-blue">{{isCompleted}}</a>
				</div>
			</div>
			
		</div>
	</div> -->
</div>
</template>
<script>
export default {
	name: 'Item',
	props: [
		'name', //아이템 이름
		'price', //아이템 가격
		'isCompleted',
		'visibleTo',
		'id'
	],
	created(){
		const self = this;
		this.$socket.on('news', function(data){
            console.log(self.show);
            self.show=data;
        });
	},
	computed:{
		isPublic(){
			return this.visibleTo === "t" ? true :false;
		},
		isPrivate(){
			return this.visibleTo === "f" ? true :false;
		},
		isGroup(){
			if(this.isPublic || this.isPrivate){
				return false;
			}else{
				return true;
			}
		}
	},
	methods:{
		copyLink(){
			console.log(this.$url+'/detail/'+this.id); //this.$route.params.detail....id?
			// Android : this.$url+'/detail/'+this.id 을 안드로이드 폰에 복사해야함.
		},
		goDetail(){
			console.log(this.id);
			this.$router.push({path:'/item/detail/'+this.id})
		},
		goModify(){
			this.$router.push({path:'/item/modify/'+this.id})
		},
		voidClick(){
			//공개 버튼 누를때는 아무 작동 하지 않도록 클릭 무효화
			return false;
		},
		makePurchase(){
			if(this.isCompleted =='완료'){
				this.$emit('makePurchase', this.id);
				this.$socket.emit('purchasedBy', 'me');
				
			}else if(this.isCompleted =='취소'){
				this.$emit('cancelPurchase', this.id);
				this.$socket.emit('purchasedBy', 'cancel');
			}
		}
	}
}
</script>
<style scoped>
	.btn-group-sm>.btn, .btn-sm{
		padding: 0.3rem 0.5rem;
		/* background: transparent;
		border: 1px solid #38a9ff; */
	}
	.btn-list{
		/*float:right;
		width: 50%; 미디어 쿼리로 수정필요*/
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 100%;
	}
	.ui-block{
		display: flex;
	}
	.half-block{
		flex:1;
	}
	.half-block2{
		flex:1;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.btn{
		margin:0;
		height: 2rem;
		align-content: center;
		text-align: center;
	}
	.btn-sm{
		padding: 0.4rem 0.5rem;
	}
	@media (min-width: 1024px){
		.col-lg-6 {
			flex: 100%;
			max-width: 100%;
		}
	}
	@media (max-width: 450px){
		.btn-list{
			/* float:none;
			display: inline-flexbox;
			width: 70%; */
			width: 100%;
			margin-top: 10px;
		}
	}
	.label-avatar{
		border-radius: 3px;
		top:-6px;
	}
	.public{
		width: 30px;
		right: 16px;
	}
	.private{
		width: 35px;
		right: 12px;
		padding: 0 0.5px;
	}
	.group{
		width: 40px;
		padding: 0 0.5px;
		right: 9px;
	}
	.inline-items{
		padding-right:1.2rem;
	}
	.item-detail{
		display:inline-flex;
		flex-direction: row;
		width: 70%;
	}
	.more-btn{
		display: inline;

	}
	.accept-request{
		padding-right:8px; padding-left:8px;
		background:transparent;
	}
</style>

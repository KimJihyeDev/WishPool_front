<template>
<div>
    <li v-if="(isMe)||(isPublic)" class="inline-items" v-on:click="goDetail">
		<div class="item-detail">
			<div class="author-thumb control-con">
				<img src="/assets/img/avatar41-sm.jpg" alt="author">
					
				<div v-if=isPublic class="label-avatar bg-blue-light public">공개</div>
				<div v-if=isPrivate class="label-avatar post-category bg-primary private">비공개</div>
				<div v-if=isGroup class="label-avatar post-category bg-purple group">그룹공개</div>
			</div>
			<div class="notification-event">
				<a href="#" class="h6 notification-friend">{{item.itemName}}</a>
				<span class="chat-message-item">{{item.itemPrice}}</span>
			</div>
		</div>
		<div class="more-btn">
			<a href="javascript:void(0)" v-on:click.stop="copyLink" class="accept-request" style="border:1px solid #6cb6f5;">
				<span class="without-text" style="color:#6cb6f5; font-size:x-small;">링크</span>
			</a>
			<a v-if="isMe" href="javascript:void(0)" v-on:click.stop="makePurchase" class="accept-request" style="border:1px solid #7c5ac2;">
				<span class="without-text" style="color:#7c5ac2; font-size:x-small;">{{isCompleted}}</span>
			</a>
		</div>
	</li>
</div>
</template>
<script>
export default {
	name: 'Item',
	props: [ 'item', 'isCompleted' ],
	created(){
		
			this.$bus.$on('userId', data=>{
				this.$userId = data;
			})
	},
	computed:{
		isPublic(){
			return this.item.visibleTo == "true" ? true: false;
		},
		isPrivate(){
			return this.item.visibleTo == "false" ? true: false;
		},
		isGroup(){
			if(this.isPublic || this.isPrivate){
				return false;
			}else{
				return true;
			}
		},
		isMe(){
			if(this.$userId == this.item.userId){
				return true;
			}
			return false;
		}
	},
	methods:{
		copyLink(){
			console.log(this.$url+'/detail/'+this.item._id); //this.$route.params.detail...._id?
			// Android : this.$url+'/detail/'+this._id 을 안드로이드 폰에 복사해야함.
		},
		goDetail(){
			console.log('userId', this.item.userId);
			console.log('$userId', this.$userId);
			console.log('아이템아이디',this.item._id);
			this.$router.push({path:'/item/detail/'+this.item._id})
		},
		goModify(){
			this.$router.push({path:'/item/modify/'+this.item._id})
		},
		voidClick(){
			//공개 버튼 누를때는 아무 작동 하지 않도록 클릭 무효화
			return false;
		},
		makePurchase(){
			//만약 완료인 상태에서 눌렀다면
			if(this.isCompleted =='완료'){
				//item의 구매자를 'me'로 설정하고,
				this.item.purchasedBy = 'me';
				//완료 이벤트를 itemList로 전달 - view단에서 먼저 처리해서 UX상 바로 처리되었다는 느낌 들게 한다.
			}else if(this.isCompleted =='취소'){
				this.item.purchasedBy =''
			}
			this.$emit('onPurchase', this.item);
			
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
		display: flex;
	}
	.item-detail{
		display:inline-flex;
		flex-direction: row;
		width: 100%;
	}
	.more-btn{
		display: inline-flex;
	}
	.accept-request{
		padding: 4px 8px;
		background:transparent;
		height: 30px;
		display: flex;
		align-items: center;
	}
	.notification-list .selectize-dropdown-content > *, .notification-list li {
		display: flex;
	}
</style>

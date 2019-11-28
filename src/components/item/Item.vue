<template>
<div class="row">
    <div class="col col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
		<div class="ui-block">
			<a href="javascript:void(0)" v-on:click="goDetail">
			<div class="birthday-item inline-items">
				<div class="author-thumb">
					<img src="/assets/img/avatar7-sm.jpg" alt="author">
				</div>
				<div class="birthday-author-name">
					<a href="#" class="h6 author-name">{{name}} </a>
					<div class="birthday-date">{{price}}</div>
				</div>
				<div class="btn-list">
					<a href="javascript:void(0)" class="btn btn-sm bg-blue">공개</a>
					<a v-on:click.stop="copyLink" href="javascript:void(0)" class="btn btn-sm bg-blue">링크</a>
					<a v-on:click.stop="goModify" href="javascript:void(0)" class="btn btn-sm bg-blue">수정</a>
					<a v-on:click.stop="makePurchase" href="javascript:void(0)" class="btn btn-sm bg-blue">{{isCompleted}}</a>
				</div>
			</div>
			</a>
		</div>
	</div>
</div>
</template>
<script>
import ItemDetail from './ItemDetail.vue'
import ItemModify from './ItemModify.vue'

export default {
	name: 'Item',
	props: [
		'name', //아이템 이름
		'price', //아이템 가격
		'isCompleted',
		'id'
	],
	created(){
		const self = this;
		this.$socket.on('news', function(data){
            console.log(self.show);
            self.show=data;
        });
	},
	methods:{
		copyLink(){
			console.log(this.$route.params); //this.$route.params.detail....id?
		},
		goDetail(){
			//console.log(this.id);
			this.$router.push({path:'/item/detail/'+this.id, component:ItemDetail.vue})
		},
		goModify(){
			this.$router.push({path:'/item/modify/'+this.id, component:ItemModify.vue})
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
		float:right;
		width: 50%; /*미디어 쿼리로 수정필요*/
		display: flex;
		justify-content: space-between
	}
	@media (min-width: 1024px){
		.col-lg-6 {
			flex: 100%;
			max-width: 100%;
		}
	}
	@media (max-width: 450px){
		.btn-list{
			float:none;
			display: inline-flexbox;
			width: 70%;
			margin-top: 10px;
		}
	}
</style>

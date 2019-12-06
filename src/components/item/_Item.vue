<template>
<div class="row">
    <div class="col col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
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
	</div>
</div>
</template>
<script>
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
			console.log(this.$url+'/detail/'+this.id); //this.$route.params.detail....id?
			// Android : this.$url+'/detail/'+this.id 을 안드로이드 폰에 복사해야함.
		},
		goDetail(){
			//console.log(this.id);
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
</style>

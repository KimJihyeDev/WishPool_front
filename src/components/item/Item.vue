<template>
<div class="row">
    <div class="col col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
		<div class="ui-block">
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
					<a href="javascript:void(0)" class="btn btn-sm bg-blue">링크</a>
					<a href="javascript:void(0)" class="btn btn-sm bg-blue">수정</a>
					<a href="javascript:void(0)" class="btn btn-sm bg-blue">완료</a>
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
		'price' //아이템 가격
	],
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

<template>
    <div>
		<section class="medium-padding100">
			<div class="container">
				<div class="row mb60">
					<div class="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 m-auto">
						<div class="crumina-module crumina-heading align-center">
							<!-- 나중에 카테고리 이름을 적을 영역 -->
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12 m-auto">

						
						<ul class="table-careers">
							
							<category></category>
						
						</ul>

					</div>
				</div>
			</div>
		</section>
    </div>    
</template>

<script>
import Category from './Category.vue'


export default {
	name: 'CategoryList',
	components: {
		'category':Category,
	}
	
}
</script>
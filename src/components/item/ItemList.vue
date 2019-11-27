<template>

    <div class="page-has-left-panels page-has-right-panels">

        <!-- Main Header Birthday -->

        <!-- <div class="main-header">
            <div class="content-bg-wrap bg-birthday"></div>

        </div> -->

        <!-- ... end Main Header Birthday -->

       

        <!-- Main Content Birthday -->

        <div class="container">
			 <!-- 아이템 추가 버튼 -->
			<div class="col col-lg-3 col-md-6 col-sm-12 col-12">
				<router-link to="/item/add" ><a href="javascript:void(0)" class="btn btn-primary btn-lg full-width">아이템 추가</a></router-link>
			</div>
			<!-- ... end 아이템 추가 버튼 -->
			<!-- collapse -->
			<div class="col">
				<button class="btn form-group" type="button" data-toggle="collapse" data-target="#multiCollapseExample1" aria-expanded="true" aria-controls="multiCollapseExample1">
					<span class="crumina-module crumina-heading with-title-decoration">
						<h5 class="heading-title">Wishes&nbsp;&nbsp;<i class="fas fa-sort-down"></i></h5> <!--화살표방향 펼치고닫히고 바뀌어야-->
					</span>
				</button>
				
				<div class="col">
					<div class="collapse multi-collapse show" id="multiCollapseExample1">
						<div class="card card-body">
							<item v-for="item in unPurchasedList"
							:key="item.itemId"
							:name="item.itemName"
							:price="item.itemPrice" 
							:id="item.itemId"
							isCompleted="완료"
							/>
						</div>
					</div>
				</div>
			</div>
			<div class="col">
				<button class="btn form-group" style="margin-top:1.5rem" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="true" aria-controls="multiCollapseExample2">
					<span class="crumina-module crumina-heading with-title-decoration">
						<h5 class="heading-title">Completed&nbsp;&nbsp;<i class="fas fa-sort-down"></i></h5>
					</span>
				</button>
				<div class="col">
					<div class="collapse multi-collapse show" id="multiCollapseExample2">
						<div class="card card-body">
							<item v-for="item in purchasedList"
							:key="item.itemId"
							:name="item.itemName"
							:price="item.itemPrice"
							:id="item.itemId"
							isCompleted="취소" 
							/>
						</div>
					</div>
				</div>
			</div>
			<!-- <div id="accordion">
                <div class="card">
                    <div class="card-header" id="headingOne">
					<h5 class="mb-0">
						<button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
						Collapsible Group Item #1
						</button>
					</h5>
					</div>

					<div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
						<div class="card-body">
							
						</div>
					</div>
            	</div> 
				<div class="card">
					<div class="card-header" id="headingTwo">
						<h5 class="mb-0">
							<button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
							Collapsible Group Item #2
							</button>
						</h5>
					</div>
					<div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
					<div class="card-body">
						<div class="row">
							<item v-for="item in purchasedList"
								:key="item.id"
								:name="item.itemName"
								:price="item.itemPrice" 
							/>
							</div>
     					</div>
					</div>
				</div>
			
            </div> -->
				<!-- end of collapse -->
            
        </div>

        <!-- ... end Main Content Birthday -->
        <a class="back-to-top" href="#">
            <img src="/assets/svg-icons/back-to-top.svg" alt="arrow" class="back-icon"></a>

        </div>
    </template>
    <script>
        import Item from './Item.vue';
		
        export default {
            name: 'ItemList',
            data() {
                return {
					items: [
						{	
							itemId: 0,
							itemName: '고양이 마우스 장난감',
							itemPrice: '10000원',
							purchasedBy: 'me'
						},
						{	
							itemId: 1,
							itemName: 'vue.js 책',
							itemPrice: '230000원',
							purchasedBy: 'you'
						},
						{	
							itemId: 2,
							itemName: 'starbuck 기프티콘',
							itemPrice: '1234원',
							purchasedBy: 'he'
						},
												{	
							itemId: 3,
							itemName: '텀블러',
							itemPrice: '10000원',
							purchasedBy: ''
						},
						{	
							itemId: 4,
							itemName: '정수기',
							itemPrice: '230000원',
							purchasedBy: ''
						},
						{	
							itemId: 5,
							itemName: '루이비통',
							itemPrice: '1234원',
							purchasedBy: ''
						}
					]
				}
            },
            components: {
                'item': Item
			},
			computed:{
				unPurchasedList(){
					return this.items.filter(item => item.purchasedBy === '');
				},
				purchasedList(){
					return this.items.filter(item => item.purchasedBy !== '')
				}
			},
        }
    </script>
    <style scoped>
		.btn-group-lg>.btn, .btn-lg {
			padding-top: 1rem;
			padding-bottom: 1rem;
			width: 100%;
			font-size: 1.2rem;
		}

		.show > .btn-secondary.dropdown-toggle {
			background-color: #e6ecf5;
			border-color: #e6ecf5;
		}

		.bootstrap-select > .dropdown-toggle{
			padding: 0;
			font-size: 1rem;
			font-weight: bold;
		}
		.heading-title{
			text-align: left;
			padding-bottom: 5px;
		}
		@media (max-width: 1080px){
			.btn-lg {
				padding: 1rem;
			}
		}
		
	</style>
<template>

    <div class="page-has-left-panels page-has-right-panels">

        <!-- Main Header Birthday -->

        <!-- <div class="main-header">
            <div class="content-bg-wrap bg-birthday"></div>

        </div> -->

        <!-- ... end Main Header Birthday -->

        <!-- 아이템 추가 버튼 -->
        <div class="col col-lg-3 col-md-6 col-sm-12 col-12">
            <a href="#" class="btn btn-primary btn-lg">아이템 추가<div class="ripple-container"></div>
            </a>
        </div>
        <!-- ... end 아이템 추가 버튼 -->

        <!-- Main Content Birthday -->

        <div class="container">
            <div class="row">
                <item/>

            </div>
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
					items: []
				}
            },
            components: {
                'item': Item
            }
        }
    </script>
    <style scoped>
		.btn-group-lg>.btn, .btn-lg {
			padding-top: 1rem;
			padding-bottom: 1rem;
			width: 100%;
			font-size: 1.2rem;
		}
	</style>
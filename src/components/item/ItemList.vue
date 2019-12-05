<template>
<div class="">
    <div class="page-has-left-panels page-has-right-panels" style="cursor: url(&quot;undefined&quot;), default;">


        <div class="container">
            <div class="row">
                <div class="col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12">
                   
                    <item-input v-on:getInputItem="addItem" />
                    <div class="ui-block" style="margin-bottom:0px;">  
                        <!-- <div class="ui-block-title">
                            <h4 class="title">위시 아이템 리스트</h4>
                        </div> -->
                        <div class="top-header top-header-favorit">
					
                            <div class="profile-section with-social-menu-tabs">
                                <div class="row">
                                    <div class="col col-xl-8 m-auto col-lg-8 col-md-12">
                                        <ul class="nav nav-tabs social-menu-tabs" role="tablist">

                                            <li class="nav-item">
                                                <a class="nav-link active" data-toggle="tab" href="#home" role="tab">
                                                    <span class="nav-content">Wishes</span>
                                                </a>
                                            </li>

                                            <li class="nav-item">
                                                <a class="nav-link" data-toggle="tab" href="#about" role="tab">
                                                    <span class="nav-content">Completed</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
				        </div>
                       
                    </div>

                </div>
            </div>
        </div>
        <!-- Tab panes -->
        
        <div class="tab-content">
            <!-- Wishes(미완료 리스트) -->
            
            <div class="tab-pane active" id="home" role="tabpanel">
                <div class="container">
                    <div class="ui-block">
                        <!-- 상세 아이템 추가 버튼(절대 삭제 금지) -->
                        <!-- <div class="ui-block-title">
                            <div class="col col-lg-3 col-md-6 col-sm-12 col-12">
                                <a href="#" class="btn btn-primary btn-lg full-width" data-toggle="modal" data-target="#create-event">상세 아이템 추가</a>
			                </div>
                        </div> -->
                        
                        <!-- 위시아이템 -->
                        
                        <ul v-if="!isWishEmpty" class="widget w-friend-pages-added notification-list friend-requests">
                            <item v-for="item in unPurchasedList"
							:key="item._id"
							:name="item.itemName"
							:price="item.itemPrice" 
							:id="item._id"
                            :visibleTo="item.visibleTo"
							isCompleted="완료"
							v-on:makePurchase="makePurchase"
							v-on:cancelPurchase="cancelPurchase"
							/>                 
                        </ul>
                        <item-empty v-if="isWishEmpty" />
                            <!-- .. end 위시아이템 -->
                        </div>
                </div>
            </div>
            <!-- Completed(완료 리스트) -->
            <div class="tab-pane" id="about" role="tabpanel">
                <div class="container">
                    <div class="ui-block">
                        <!-- 상세 아이템 추가버튼 -->
                        <!-- <div class="ui-block-title">
                            <div class="col col-lg-3 col-md-6 col-sm-12 col-12">
				                <router-link to="/item/add" ><a href="javascript:void(0)" class="btn btn-primary btn-lg full-width"> 상세 아이템 추가</a></router-link>
			                </div>
                        </div> -->
                        <!-- <div class="ui-block-title">
                            <h6 class="title">완료 아이템 리스트</h6>
                        </div> -->
                
                        <!-- 위시아이템 -->
                            
                        <ul v-if="!isCompletedEmpty" class="widget w-friend-pages-added notification-list friend-requests">
                            <item v-for="item in purchasedList"
							:key="item._id"
							:name="item.itemName"
							:price="item.itemPrice"
                            :visibleTo="item.visibleTo"
							:id="item._id"
							isCompleted="취소" 
							v-on:makePurchase="makePurchase"
							v-on:cancelPurchase="cancelPurchase"
							/>                  
                        </ul>
                        <item-empty v-if="isCompletedEmpty" />
                            <!-- .. end 위시아이템 -->
                        </div>
                    
                            <!-- .. end 위시아이템 -->
                    </div>
                </div>
            </div>

            

            
        </div>
  <!-- Window-popup Create Event -->

<div class="modal fade" id="create-event" tabindex="-1" role="dialog" aria-labelledby="create-event" style="display: none;" aria-hidden="true">
	<div class="modal-dialog window-popup create-event" role="document">
        <item-add />
	</div>
</div>

<!-- ... end Window-popup Create Event -->
<div style="margin-top:2.5rem;"></div>
    </div>
</template>
<script>
    import Item from './Item.vue';
    import ItemAdd from './ItemAdd.vue';
    import ItemInput from './ItemInput.vue';
    import ItemEmpty from './ItemEmpty.vue'
        // Vuex
		// import { mapActions, mapState } from 'vuex';

        export default {
			name: 'ItemList',
			created(){
				// this.$http.get(this.$serverUrl+this.$route.path)
				// .then(res=>{
				// 	console.log(res.data);
				// 	this.items = res.data;
				// })

				/*웹소켓으로 데이터 가져오기*/
				const self = this;
				this.$socket.emit('reqList');
				this.$socket.on('resList', function(data){
                    self.items = data;
                    self.wishList = self.items.find(item=> item.purchasedBy !== '');
                    console.log(self.wishList);
				});

				//Vuex
                // this.fetchItemList();
                
			},
            data() {
                return {
					//Vuex로 할경우 items는 주석처리해야함
					items: [
						// {	
						// 	_id: 0,
						// 	itemName: '고양이 마우스 장난감',
						// 	itemPrice: '10000원',
						// 	purchasedBy: 'me'
						// },
						// {	
						// 	_id: 1,
						// 	itemName: 'vue.js 책',
						// 	itemPrice: '230000원',
						// 	purchasedBy: 'you'
						// },
						// {	
						// 	_id: 2,
						// 	itemName: 'starbuck 기프티콘',
						// 	itemPrice: '1234원',
						// 	purchasedBy: 'he'
						// },
						// 						{	
						// 	_id: 3,
						// 	itemName: '텀블러',
						// 	itemPrice: '10000원',
						// 	purchasedBy: ''
						// },
						// {	
						// 	_id: 4,
						// 	itemName: '정수기',
						// 	itemPrice: '230000원',
						// 	purchasedBy: ''
						// },
						// {	
						// 	_id: 5,
						// 	itemName: '루이비통',
						// 	itemPrice: '1234원',
						// 	purchasedBy: ''
						// }
                    ],
                    item:{
                        itemName: '',
                        itemPrice: '',
                        itemLink: '',
                        itemRank: '',
                        visibleTo: 'f',
                        itemMemo: ''
                    },
                    wishList: []
				}
            },
            components: {
                'item': Item,
                'item-add': ItemAdd,
                'item-input': ItemInput,
                'item-empty': ItemEmpty
			},
			computed:{
				unPurchasedList(){
					return this.items.filter(item => item.purchasedBy === '');
				},
				purchasedList(){
					return this.items.filter(item => item.purchasedBy !== '')
				},
				// Vuex
                // ...mapState(['items'])
                isWishEmpty(){
                    if(this.unPurchasedList.length != 0){
                        return true;
                    }
                    return false;

                },
                isCompletedEmpty(){
                    if(this.purchasedList.length != 0){
                        return false;
                    }
                    return true;
                }
			},
			methods:{
				makePurchase(id){
					console.log('purchase made.'+id);
					const index = this.items.findIndex(item=> item._id === id);
					this.items[index].purchasedBy = "me";
				},
				cancelPurchase(id){
					console.log('purchase canceled.'+id);
					const index = this.items.findIndex(item=> item._id === id);
					this.items[index].purchasedBy = "";
                },
                moveToAdd(){
                    this.$router.push({path:'/item/add'});
                },
                addItem(val){
                    if(val){
                        this.item.itemName = val.itemName;
                        this.item.itemPrice = val.itemPrice;
                    }
                    this.$http.post(this.$serverUrl+'/item/add', this.item)
                    .then(res=>{
                        if(res.data.code == 200){
                            console.log('정상 : '+res.data.msg);
                            this.$socket.emit('reqList');
                        }else if(res.data.code == 500){
                            console.log('서버오류 : '+res.data.msg);
                        }
                    }).catch(e=>{
                        console.error(e);
                    });
                    this.$router.push({path:'/item/list'});
                    // location.href=this.$url+'item/list';
                },
                setInputItem(val){
                    this.item.itemName = val.itemName;
                    this.item.itemPrice = val.itemPrice;
                    console.log(val);
                    this.$http.post(this.$serverUrl+'/item/add', this.item)
                    .then(res=>{
                        if(res.data.code == 200){
                            console.log('정상 : '+res.data.msg);
                            this.$socket.emit('reqList');
                        }else if(res.data.code == 500){
                            console.log('서버오류 : '+res.data.msg);
                        }
                    }).catch(e=>{
                        console.error(e);
                    });
                }
				// Vuex
				// ...mapActions(['fetchItemList'])
			},
        }
</script>
<style scoped>
    .ui-block-title{
        padding: 13px 13px 5px;
    }
    h6{
        font-size:1rem;
    }
    .nav, .navbar{
        flex-wrap: nowrap;
    }
    .w-search {
        width: 100%;
        margin-bottom: 1rem;
    }
    .nav-link{
        height:100%;
    }
    .nav-content{
        width: 100%;
        text-align: center;
        font-size: 1.1rem;
    }
    .form-group.with-button button{
        width: 45px;
        background: #ff5e3a;
    }
    .ui-block-title .btn {
        margin-bottom: 10px;
    }
    .ui-block{
        width:100%;
    }
</style>
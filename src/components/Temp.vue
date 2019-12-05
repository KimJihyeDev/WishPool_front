<template>
<div class="">
    <div class="page-has-left-panels page-has-right-panels" style="cursor: url(&quot;undefined&quot;), default;">


        <div class="container">
            <div class="row">
                <div class="col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12">
                   
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
                
				<div class="ui-block-title">
					<h4 class="title">내 Follow 목록</h4>
					<!-- <a href="#" class="more"><svg class="olymp-three-dots-icon"><use xlink:href="#olymp-three-dots-icon"></use></svg></a> -->
				</div>
				
				<!-- Notification List Frien Requests -->
				
				<ul class="notification-list friend-requests">
					<li>
						<div class="author-thumb">
							<img src="/assets/img/avatar15-sm.jpg" alt="author">
						</div>
						<div class="notification-event" >
							<a href="#" class="h6 notification-friend">Tamara Romanoff</a>
							<span class="chat-message-item">Mutual Friend: Sarah Hetfield</span>
						</div>
						<span class="notification-icon">
                            <a href="#" class="accept-request request-del">
                                <span class="icon-minu without-texts">
                                    <svg class="olymp-happy-face-icon"><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                                </span>
                            </a>

                        </span>
                    </li>
				</ul>
				
				<!-- ... end Notification List Frien Requests -->
			</div>
                </div>
            </div>
            <!-- Completed(완료 리스트) -->
            <div class="tab-pane" id="about" role="tabpanel">
                <div class="container">
                    <div class="ui-block">
                
				<div class="ui-block-title">
					<h4 class="title">내 Follower 목록</h4>
					<!-- <a href="#" class="more"><svg class="olymp-three-dots-icon"><use xlink:href="#olymp-three-dots-icon"></use></svg></a> -->
				</div>
				
				<!-- Notification List Frien Requests -->
				
				<ul class="notification-list friend-requests">
					<li>
						<div class="author-thumb">
							<img src="/assets/img/avatar15-sm.jpg" alt="author">
						</div>
						<div class="notification-event" >
							<a href="#" class="h6 notification-friend">Tamara Romanoff</a>
							<span class="chat-message-item">Mutual Friend: Sarah Hetfield</span>
						</div>
						<span class="notification-icon">
                            <a href="#" class="accept-request request">
                                <span class="icon-add without-texts" style="margin-right:0px;">
                                    <svg class="olymp-happy-face-icon"><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                                </span>
                            </a>

                        </span>
                    </li>
				</ul>
				
				<!-- ... end Notification List Frien Requests -->
			</div>
                </div>
            </div>

            

            
        </div>

    </div>
            <!-- Window-popup Create Event -->

<div class="modal fade" id="create-event" tabindex="-1" role="dialog" aria-labelledby="create-event" style="display: none;" aria-hidden="true">
	<div class="modal-dialog window-popup create-event" role="document">
	</div>
</div>

<!-- ... end Window-popup Create Event -->
    </div>
</template>
<script>
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
                    }
				}
            },
            components: {
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
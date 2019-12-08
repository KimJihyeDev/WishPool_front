<template>
<div class="">
    <div class="page-has-left-panels page-has-right-panels" style="cursor: url(&quot;undefined&quot;), default;">


        <div class="container">
            <div class="row">
                <div class="col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12">
                   
                    <item-input v-on:onInsert="handleInsert" />
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
							:item="item"
							isCompleted="완료"
							v-on:onPurchase="handlePurchase"
							/>                 
                        </ul>
                            <item-empty v-if="isWishEmpty" type="w" @btnPressed="handleInsert"/>
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
							:item="item"
							isCompleted="취소" 
							v-on:onPurchase="handlePurchase"
							/>                  
                        </ul>
                        <item-empty v-if="isCompletedEmpty" type="c" />  
                            <!-- .. end 위시아이템 -->
                    </div>
                </div>
            </div>
        </div>

    </div>
            <!-- Window-popup Create Event -->
<div style="margin-top:8rem;"></div>
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
    import ItemEmpty from './ItemEmpty.vue';

    export default {
        name: 'ItemList',
        created(){
            (async()=>{
                try{
                    let res = await this.$http.get(this.$serverUrl+this.$route.path);
                    this.items = res.data.items;
                }catch(e){
                    console.error(e);
                }
            })();
        },
        data() {
            return {
                items: [ ],
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
            isWishEmpty(){
                if(this.unPurchasedList.length == 0){
                    return true;
                }
                return false;
            },
            isCompletedEmpty(){
                if(this.purchasedList.length ==0 ){
                    return true;
                }
                return false;
            }
        },
        methods:{
            //하위컴포넌트에서 완료버튼 클릭시 실행하는 함수, view단만 담당, 
            //payload : 하위 컴포넌트에서 보낸 수정된 item객체
            handlePurchase(payload){
                console.log('purchase made.'+payload._id);
                //먼저 서버로 해당 아이템이 완료되었다는 수정 API를 호출한다.
                (async()=>{
                    try{
                        const res = await this.$http.patch(this.$serverUrl+'item/modify/'+payload._id, payload);
                        if(res.data.code === "200"){
                            console.log('완료 처리');
                            //this.items배열의 수정될 객체의 인덱스를 찾아
                            const index = this.items.findIndex(item=> item._id ===  res.data.item._id);
                            //수정된 아이템을 끼어넣어준 배열을 다시 만든다.
                            this.items = [
                                ...this.items.slice(0,index),
                                payload,
                                ...this.items.slice(index+1, this.items.length)
                            ]; //VM의 data()가 바뀌었으므로 이때 화면은 리액티브하게 반영된다.
                        }else{
                            console.log(res.data.msg);
                        }
                    }catch(e){
                        console.error(e);
                    }
                })();
            },
            moveToAdd(){
                this.$router.push({path:'/item/add'});
            },
            //아이템 추가함수
            handleInsert(payload){
                this.item.itemName = payload.itemName;
                this.item.itemPrice = payload.itemPrice;
                //아이템 추가 API호출
                (async () =>{
                    try{
                        let res = await this.$http.post(this.$serverUrl+'/item/add', this.item);
                        if(res.data.code == 200){
                            console.log('정상 : '+res.data.msg);
                            console.log(this.items);
                            const response = await this.$http.get(this.$serverUrl+'/item/list');
                            this.items = response.data.items;
                        }else if(res.data.code == 500){
                            console.log('서버오류 : '+res.data.msg);
                        }
                    }catch (error){
                        console.error(error)
                    }
                })();
            },
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
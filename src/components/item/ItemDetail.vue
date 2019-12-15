<template>
    <div class="page-has-left-panels page-has-right-panels" style="cursor: url(&quot;undefined&quot;), default;">
    <!-- Tab panes -->
    <div class="tab-content">
        <div class="tab-pane active" id="events" role="tabpanel">

            <div class="container">
                <div class="row">
                    <div class="col col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                        <div class="ui-block">

                            
                            <!-- Today Events -->
                            
                            <div class="today-events calendar">
                                <div class="today-events-thumb" style="height:220px;">
                                </div>
                            
                                <div class="list">
                                    
                            
                                    <div class="day-event" id="accordion-1" data-month="12" data-day="2">
                            
                                        <div class="card">
                                            <div class="card-header" id="headingTwo-1">
                            
                                                <div class="event-time">
                                                    <time datetime="2004-07-24T18:18">
                                                        아이템명
                                                    </time>
                                                </div>
                                            </div>
                            
                                                <div class="card-body">
                                                    <h5 class="mb-0 title" style="margin-bottom:5px;">
                                                        {{item.itemName}}
                                                    </h5>
                                                </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-header" id="headingTwo-1">
                            
                                                <div class="event-time">
                                                    <time datetime="2004-07-24T18:18">
                                                        가격
                                                    </time>
                                                </div>
                                            </div>
                            
                                                <div class="card-body">
                                                    <h5 class="mb-0 title" style="margin-bottom:5px;">
                                                        {{item.itemPrice}}
                                                    </h5>
                                                </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-header" id="headingTwo-1">
                            
                                                <div class="event-time">
                                                    <time datetime="2004-07-24T18:18">
                                                        링크 주소
                                                    </time>
                                                </div>
                                            </div>
                            
                                                <div class="card-body">
                                                    <h5 class="mb-0 title" style="margin-bottom:5px;">
                                                        <a :href="item.itemLink" id="go-link">{{item.itemLink}}</a>
                                                    </h5>
                                                </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-header" id="headingTwo-1">
                            
                                                <div class="event-time">
                                                    <time datetime="2004-07-24T18:18">
                                                        위시 메모
                                                    </time>
                                                </div>
                                            </div>
                            
                                                <div class="card-body">
                                                    <div class="card-body" style="padding-left:5px; padding-bottom:5px; font-size:0.9rem">
                                                        {{item.itemMemo}}
                                                    </div>
                                                </div>
                                        </div>
                                       <div class="card">
                                            <div class="card-header" id="headingTwo-1">
                            
                                                <div class="event-time">
                                                    <time datetime="2004-07-24T18:18">
                                                        공개 범위
                                                    </time>
                                                </div>
                                            </div>
                            
                                                <div class="card-body">
                                                    <h5 class="mb-0 title" style="margin-bottom:5px;">
                                                        {{item.visibleTo | visible}}
                                                    </h5>
                                                </div>
                                        </div>
                                        
                                    </div>
                            
                                </div>
                                
                            </div>
                            
                            <!-- ... end Today Events -->
                            <div v-if="isMe" class="btn-list">
                                <div class="list1">
                                    <a class="btn btn-breez btn-lg" style="color: #fff; font-size:1rem; width: 45%" v-on:click="modify">수정</a>
                                    <a class="btn btn-primary btn-lg" style="color: #fff; font-size:1rem; width: 45%" v-on:click="doDelete">삭제</a>
                                </div>
                                <a class="btn btn-secondary btn-lg full-width" style="width:90%;color: #fff;" v-on:click="goToList">목록으로</a>
                            </div>
                            <div v-else class="btn-list">
                                <a v-if="!isPurchased" class="btn btn-primary btn-lg full-width" style="width:90%; height:3.7rem;color: #fff; font-size:1rem;" v-on:click="purchase">내가 사주기</a>
                                <a v-if="isPurchased" class="btn btn-breez btn-lg full-width" style="width:90%; height:3.7rem;color: #fff; font-size:1rem;" @click="purchase">사주기 취소</a>
                                <a class="btn btn-secondary btn-lg full-width" style="width:90%; height:3.7rem;color: #fff; font-size:1rem;" v-on:click="goback">뒤로가기</a>
                            </div>
                        </div>
    <div style="margin-top:5rem;"></div>
                    </div>
                    
                </div>
            </div>
        </div>

    </div>

    </div>
</template>
<script>
import store from '../../store';
const { state } = store;

export default {
    name: 'ItemDetail',
    created(){
        (async()=>{
            try{
                const res = await this.$http.get(this.$serverUrl+this.$route.path);
                this.item = res.data;
            }catch(e){
                console.error(e);
            }
        })();
    },
    components:{
    },
    data(){
        return {
            item: {
            }
        }
    },
    filters:{
        visible(to){
            if(to == 'false'){
                return '비공개'
            }else if(to == 'true'){
                return '공개'
            }else{
                return '그룹공개'
            }
        }
    },
    computed:{
        isMe(){
            if(state.userId == this.item.userId){
                return true;
            }
            return false;
        },
        isPurchased(){
            if(this.item.purchasedBy ==''){
                return false;
            }
            return true;
        }
    },
	methods:{
		modify(){
			this.$router.push({path:'/item/modify/'+this.item._id})
		},
		doDelete(){
            (async()=>{
                try {
                    const res = await this.$http.delete(this.$serverUrl+this.$route.path);
                    console.log(res.data.code);
                    if(res.data.code == "200"){
                        console.log(res.data.msg);
			            this.$router.push({name:'itemList', params: {userId: state.userId}});
                    }
                } catch (e) {
                    console.error(e);
                }
            })();
        },
        goToList(){
            this.$router.push({name:'itemList', params: {userId: state.userId}});
        },
        goback(){
            this.$router.back();
        },
        purchase(){
            console.log(state.userId);
            if(this.isPurchased){
                this.item.purchasedBy = '';
            }else{
                this.item.purchasedBy = state.userId;
            }
            (async()=>{
                try {
                    const res = await this.$http.patch(this.$serverUrl+'/item/modify/'+this.item._id, this.item);
                    const { code, msg } = res.data;
                    if(code == "200"){
                        console.log(msg);
                    }
                } catch (e) {
                    console.error(e);
                }
                
            })();
        },
    }
}
</script>
<style scoped>
.today-events.calendar .card-header {
    padding: 0px 25px;
}
.today-events.calendar .card:last-child .card-header {
    padding-bottom: 0px;
}
#go-link{
    color: #38a9ff;
    text-decoration: underline;
}
.btn-list{
    display: flex;
    justify-content: center;
    margin-top: 1.5rem;
    align-items: center;
    flex-direction:column;
}
.btn-list button{
    margin-left : 1rem;
    margin-right: 1rem;
    font-size: 0.9rem;
    padding:0.7rem 0.2rem;
    width: 100%;
    flex-direction:row;
}
.btn-list .list1{
    display:flex;
    flex-direction: row;
    width:100%;
    padding: 3px 1.3rem;
    justify-content: space-between
}
</style>
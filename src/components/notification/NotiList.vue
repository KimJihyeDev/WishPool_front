<template>
    <div class="page-has-left-panels page-has-right-panels" style="cursor: url(&quot;undefined&quot;), default;">
      <div class="container">
         <div class="row">
            <div class="col col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12">
               <div class="ui-block">
                  <div class="ui-block-title">
                     <h4 class="title">알림</h4>
                     
                  </div>
                  
                  <!-- Notification List -->
                  <ul class="notification-list">
                     <component v-for="noti in notis" 
                     :key="noti._id"
                     :is="noti.type"
                     :by="noti.by"
                     :itemName="noti.itemName"
                     :date="noti.date"
                     :haveRead="!noti.haveRead"
                     @clicked="relatedPage(noti.type, noti._id)"
                     @deleteNoti="removeNoti(noti._id)"
                   />
                  </ul>
                  
                  <!-- ... end Notification List -->

               </div>
               <!-- Pagination -->
               <!-- ... end Pagination -->
            </div>
         </div>
      </div>
   <div style="margin-top:2.5rem;"></div>
</div>
</template>
<script>
import NotiPurchase from './NotiPurchase.vue'
import NotiFollow from './NotiFollow.vue';
export default {
   name: 'NotiList',
   components:{
      'noti-purchase': NotiPurchase, //type 값과 일치시켜줘야한다.
      'noti-follow': NotiFollow
   },
   data(){
      return{
         notis:[
            {
               _id: 0,
               type: 'noti-purchase', //컴포넌트 이름이랑 일치시켜줘야한다.
               by: 'Mathilda Brinker',
               itemName: '스타벅스 텀블러',
               date: '',
               haveRead: false
            },
            {
               _id:1,
               type: 'noti-follow',
               by: 'Nicholas Grissom',
               itemName: '고양이 장난감',
               date: '',
               haveRead: false
            },
            {
               _id:2,
               type: 'noti-follow',
               by: 'Nicholas Grissom',
               itemName: '고양이 장난감',
               date: '',
               haveRead: false
            }
         ],
         
      }
   },
   methods:{
      relatedPage(type, id){
         //읽음처리 클래스 on
         console.log('realte')
         const idx = this.notis.findIndex(noti=>noti._id === id);
         this.notis[idx].haveRead = true;
         console.log(this.notis[idx].haveRead)
         if(type === 'noti-purchase'){
            this.$router.push({path:'/item/detail/'+id});
         }else if(type === 'noti-follow'){
            this.$router.push({path:'/user/profile/'+id});
         }
      },
      removeNoti(id){
         const idx = this.notis.findIndex(noti=>noti._id === id);
         this.notis = [
            this.notis.slice(0, idx),
            ...this.notis.slice(idx+1, this.notis.length)
         ]
         //socket에 다시는 이 알림 불러오지 않도록 삭제 처리
         //haveRead값 바뀐거 반영, Footer.vue에서 haveRead의 갯수 읽을때도 반영되도록
      }
   }
}
</script>
<style>
    .olymp-little-delete{
      margin-right: 8px;
      margin-top: 8px;
   }
</style>
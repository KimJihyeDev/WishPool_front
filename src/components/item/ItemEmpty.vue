<template>
<div class="page-has-left-panels page-has-right-panels" style="cursor: url(&quot;undefined&quot;), default; ">


<div class="container" >
   <div class="row">
      <div class="col col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
         
         <!-- Friend Item -->
         
         <div class="friend-item friend-groups create-group" data-mh="friend-groups-item" style="height:250px; margin: 20px 0px;">
         
            <a href="#" class="  full-block" data-toggle="modal" data-target="#create-friend-group-1"></a>
            <div class="content" id="empty-area">
               <div v-if="isWish">
                  <a href="javascript:void(0)" v-on:click="emitPlus" class="btn btn-control bg-blue" data-toggle="modal" data-target="#create-friend-group-1" style="display: inline-flex; align-items: center; justify-content: center;">
                     <svg class="olymp-plus-icon"><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-plus-icon"></use></svg>
                  <div class="ripple-container"></div></a>
            
                  <div class="author-content">
                     <a href="#" class="h5 author-name">비었어요!</a>
                     <div class="country" style="width:max-content">버튼을 눌러 새로운 아이템을 <br/>추가해 보세요!</div>
                  </div>
               </div>
               <div v-if="!isWish">
                  <a href="javascript:void(0)" v-on:click="emitPlus" class="btn btn-control bg-purple" data-toggle="modal" data-target="#create-friend-group-1" style="display: inline-flex; align-items: center; justify-content: center;">
                     <svg class="olymp-happy-face-icon"><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                  <div class="ripple-container"></div></a>
                  
                  <div class="author-content">
                     <a href="#" class="h5 author-name">비었어요!</a>
                     <div class="country" style="width:max-content">아직 완료된 아이템이 없네요!</div>
                  </div>
               </div>
            </div>
         
         </div>
         
         <!-- ... end Friend Item -->
   </div>
</div>
</div>
<!-- ... end Main Content Groups -->
</div>
</template>
<script>
export default {
    name: 'ItemEmpty',
    props: ['type'],
    computed:{
       isWish(){
          if(this.type==='w'){
             return true;
          }
          return false;
       }
    },
    methods:{
       emitPlus(){
          this.$emit('btnPressed')
       }
    }
}
</script>
<style scoped>
   #empty-area{
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0;
      padding: 25%;
   }
</style>
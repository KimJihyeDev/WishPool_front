<template>
<div class="page-has-left-panels page-has-right-panels" style="cursor: url(&quot;undefined&quot;), default; ">


<div class="container" >
   <div class="row">
      <div class="col col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
         
         <!-- Friend Item -->
         
         <div id="empty-area" class="friend-item friend-groups create-group" data-mh="friend-groups-item" style="height:250px; margin: 20px 0px;">
         
            <div class="content">
                  <a href="javascript:void(0)" v-on:click="emitPlus" class="btn btn-control bg-purple" data-toggle="modal" data-target="#create-friend-group-1" style="">
                     <svg class="olymp-happy-face-icon"><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-happy-face-icon"></use></svg>
                  <div class="ripple-container"></div></a>
                  
                  <div class="author-content">
                     <a href="#" class="h5 author-name">비었어요!</a>
                     <div class="country">알림을 모두 읽으셨네요!</div>
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
    name: 'NotiEmpty',
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
      padding: 75% 0px;
   }
</style>
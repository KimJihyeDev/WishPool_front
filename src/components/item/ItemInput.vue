<template>
    <div class="ui-block">
        <div class="ui-block-title">
            <h4 class="title">간편 아이템 입력</h4>
        </div>
        <div class="ui-block-content">
            <form class="w-search">
                <div class="form-group with-button is-empty">
                    <input class="form-control" type="text" placeholder="아이템을 간단하게 입력하세요" v-model="itemName">
                    <button @click="sendItem">
                        <!-- <svg class="olymp-magnifying-glass-icon"><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-magnifying-glass-icon"></use></svg> -->
                        <svg><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-plus-icon"></use></svg>
                    </button>
                <span class="material-input"></span></div>
            </form>
            
        </div>
    </div>
</template>
<script>
export default {
    name: 'ItemInput',
    data(){
        return{
            itemName:''
        }
    },
    methods:{
        sendItem(){
            //this.$emit('getItemName', this.itemName);
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
    }
}
</script>
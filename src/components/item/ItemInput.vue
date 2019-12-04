<template>
    <div class="ui-block">
        <div class="ui-block-title">
            <h4 class="title">간편 아이템 입력</h4>
        </div>
        <div class="ui-block-content">
            <form class="w-search">
                <div class="form-group with-button is-empty">
                    <input id="addInput" class="form-control" type="text" placeholder="아이템을 간단하게 입력하세요" v-model="itemName">
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
            this.$emit('getItemName', this.itemName);
            
        }
    }
}
</script>
<style scoped>
    .w-search {
        width: auto;
    }
    .form-group.with-button button{
        width: 45px;
        background: #ff5e3a;
    }
</style>
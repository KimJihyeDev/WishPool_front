<template>
    <div class="ui-block">
        <div class="ui-block-title">
            <h4 class="title">간편 아이템 입력</h4>
        </div>
        <div class="ui-block-content">
            <form class="w-search">
                <div class="form-group with-button is-empty">
                    <input class="form-control" type="text" placeholder="아이템을 간단하게 입력하세요" v-model="inputItem.itemName">
                    <button @click="sendItem">
                        <!-- <svg class="olymp-magnifying-glass-icon"><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-magnifying-glass-icon"></use></svg> -->
                        <svg><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-plus-icon"></use></svg>
                    </button>
                <span class="material-input"></span></div>
            </form>
            <form class="w-search">
                <div class="form-group with-button is-empty">
                    <input class="form-control" type="text" placeholder="가격을 입력하세요(숫자만 가능)" v-model="inputItem.itemPrice">
                    <button id="addInput">
                        <!-- <svg class="olymp-magnifying-glass-icon"><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-magnifying-glass-icon"></use></svg> -->
                        <!-- <svg><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-plus-icon"></use></svg> -->
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
            inputItem :{
                itemName:'',
                itemPrice: ''
            }
        }
    },
    methods:{
        sendItem(){
            this.$emit('getInputItem', this.inputItem);
        }
    }
}
</script>
<style scoped>
    .w-search {
        width: 100%;
    }
    .form-group.with-button button{
        width: 45px;
        background: #ff5e3a;
    }
    #addInput{
        background: white;
        border: none;
        border-left: 1px solid #e6ecf5;
    }
</style>
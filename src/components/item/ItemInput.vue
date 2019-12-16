<template>
    <div class="ui-block">
        <div class="ui-block-title">
            <h4 class="title">간편 아이템 입력</h4>
        </div>
        <div class="ui-block-content">
            <form class="w-search">
                <div class="form-group with-button is-empty">
                    <input class="form-control" type="text" placeholder="아이템을 간단하게 입력하세요" v-model="inputItem.itemName">
                    <a class="btn-insert" @click="insertClicked">
                        <!-- <svg class="olymp-magnifying-glass-icon"><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-magnifying-glass-icon"></use></svg> -->
                        <svg><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-plus-icon"></use></svg>
                    </a>
                <span class="material-input"></span></div>
            </form>
            <form class="w-search">
                <div class="form-group with-button is-empty">
                    <input class="form-control" type="text" placeholder="가격을 입력하세요(숫자만 가능)" v-model.number="inputItem.itemPrice">
                    <a id="addInput">
                        <!-- <svg class="olymp-magnifying-glass-icon"><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-magnifying-glass-icon"></use></svg> -->
                        <!-- <svg><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-plus-icon"></use></svg> -->
                    </a>
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
            },
        }
    },
    methods:{
        insertClicked(){
            if(this.inputItem.itemName !== ''){
                const item = {
                    ...this.inputItem
                }
                this.inputItem.itemName = '';
                this.inputItem.itemPrice = '';
                console.log(item);
                this.$emit('onInsert', item);
            }
        }
    }
}
</script>
<style scoped>
    .w-search {
        width: 100%;
    }
    .w-search .form-group{
        display: flex;
    }
    .form-group.with-button button{
        width: 45px;
        background: #ff5e3a;
    }
    #addInput{
        background: white;
        border: none;
        border-left: 1px solid #e6ecf5;
        width: 45px;
    }
    .btn-insert{
        width: 45px;
        height: 45px;
        background: #ff5e3a;
        fill: white;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
</style>
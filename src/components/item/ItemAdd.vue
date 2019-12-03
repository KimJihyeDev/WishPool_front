<template>
   <div class="modal-content">
			
			<div class="modal-header">
				<h3 class="title" style="display:inline;">아이템 추가하기</h3>
                <!-- modal close button -->
                <a href="#" class="close icon-close" data-dismiss="modal" aria-label="Close">
				    <svg class="olymp-close-icon" style="fill:black;"><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-close-icon"></use></svg>
			    </a>
                <!-- end modal close button -->
			</div>

			<div class="modal-body">
                <label class="control-label">카테고리 선택</label>
				<div class="form-group label-floating is-select">
					<div class="btn-group bootstrap-select form-control">
                        <select class="selectpicker form-control" tabindex="-98">
                            <option value="MA">카테고리 1</option>
                            <option class="font-larger" value="FE">카테고리 2</option>
                        </select>
                     </div>
				<span class="material-input" ></span></div>

                <label class="control-label">아이템명</label>
				<div class="form-group label-floating">
					<input class="form-control" v-model="item.itemName" style="padding-top:1rem; padding-bottom:1rem;font-size:medium;" placeholder="" value="" type="text">
				<span class="material-input"></span></div>
                <label>가격</label>
				<div class="form-group label-floating is-empty" style="display:flex; align-items:center">
                    <div class="btn-group bootstrap-select form-control" style="height: 100%; width: 20%; margin-right:10px;">
                    <select class="selectpicker form-control"  style="width: 20%; height:100%;">
                        <option class="option-item" value="" selected>w</option>
                        <option class="option-item">$</option>
                    </select>
                    </div>
					<label id="price-label" class="control-label">숫자만 입력하세요</label>
					<input v-model="item.itemPrice" style="display:inline; width:80%; font-size:medium;padding: 1.9rem 1.1rem 0.5rem; margin-top:-1px;" class="form-control" placeholder="" value="" type="text">
				    <span class="material-input"></span>
                </div>
                <label class="control-label">링크</label>
				<div class="form-group label-floating">
					<input class="form-control" v-model="item.itemLink" style="padding-top:1rem; padding-bottom:1rem;font-size:medium;" placeholder="" value="" type="text">
				<span class="material-input"></span></div>
                <label class="control-label">공개범위</label>
                <div class="form-group label-floating is-select">
					
					<div class="btn-group bootstrap-select form-control">
                        <select class="selectpicker form-control" v-model="item.visibleTo">
                            <option value="t">공개</option>
                            <option value="f">비공개</option>
                        </select>
                     </div>
				<span class="material-input"></span></div>
                <label class="control-label">위시메모</label>
				<div class="form-group">
					<textarea v-model="item.itemMemo" class="form-control" style="font-size:small" placeholder=""></textarea>
				<span class="material-input"></span></div>

				<button class="btn btn-breez btn-lg full-width" style="font-size:small" v-on:click="addItem">등록</button>

			</div>
		</div>
</template>
<script>
export default {
    name: 'ItemAdd',
	data(){
		return {
			item:{
				itemName: '',
				itemPrice: '',
				itemLink: '',
				itemRank: '',
				visibleTo: 0,
				itemMemo: ''
			}
		}
	},
	methods:{
		addItem(){
			console.log(this.$serverUrl+this.$route.path);
			this.$http.post(this.$serverUrl+this.$route.path, this.item)
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
		}
	}
}
</script>
<style scoped>
.icon-close{
    padding:0;
    right:unset;
    margin-right:unset;
    position: relative;
    top:unset;
}
@media (max-width: 768ox){
    .icon-close{
        right:unset;
        margin-right:unset;
    }
}
#price-label{
    margin-left: 5rem;
}
#price-select{
    display:inline;
    width:20%;
    margin-right:10px;
}
.dropdown-toggle::after{
    right:5px;
}
.modal-content{
    font-size: 1.1rem;
}
.label-floating .form-control, .label-floating input, .label-floating select{
    line-height: 1;
}
#input-num{
    padding:0.5rem;
}
.btn-group, .bootstrap-select, .form-control{
    margin-top:4px
}
</style>
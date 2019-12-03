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
					<input class="form-control" style="font-size:medium;" placeholder="" value="" type="text">
				<span class="material-input"></span></div>
                <label>가격</label>
				<div class="form-group label-floating is-empty" style="display:flex;">
                    <div class="btn-group bootstrap-select form-control" style="height: 100%; width: 20%; margin-right:10px;">
                    <select class="selectpicker form-control"  style="width: 20%; height:100%;">
                        <option class="option-item" value="" selected>w</option>
                        <option class="option-item">$</option>
                    </select>
                    </div>
					<label id="price-label" class="control-label">숫자만 입력하세요</label>
					<input style="display:inline; width:80%; font-size:medium; " class="form-control" placeholder="" value="" type="text">
				    <span class="material-input"></span>
                </div>
                <label class="control-label">공개범위</label>
                <div class="form-group label-floating is-select">
					
					<div class="btn-group bootstrap-select form-control">
                        <select class="selectpicker form-control">
                            <option value="t">공개</option>
                            <option value="f">비공개</option>
                        </select>
                     </div>
				<span class="material-input"></span></div>
                <label class="control-label">위시메모</label>
				<div class="form-group">
					<textarea class="form-control" placeholder=""></textarea>
				<span class="material-input"></span></div>

				<button class="btn btn-breez btn-lg full-width">Create Event</button>

			</div>
		</div>
</template>
<script>
export default {
    name: 'ItemAdd',
    data(){
        return{

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
    font-size: 1.2rem;
}
.label-floating .form-control, .label-floating input, .label-floating select{
    padding-top: 1rem;
    padding-bottom: 1rem;
}
#input-num{
    padding:0.5rem;
}
</style>
<template>
<div>
    <div class="modal-content">
			<div class="modal-header">
				<h3 class="title" style="display:inline;">아이템 수정</h3>
                <!-- modal close button -->
                <a href="#" class="close icon-close" data-dismiss="modal" aria-label="Close">
				    <svg class="olymp-close-icon" style="fill:black;"><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-close-icon"></use></svg>
			    </a>
                <!-- end modal close button -->
			</div>
            <div class="ui-block-content">
                <div class="today-events-thumb" style="height:220px;"></div>
                <a href="javascript:void(0)" id="photo-link" class="options-message" data-toggle="modal" data-target="#update-header-photo">
                    <div class="form-control" id="photo-box">
                        <svg class="olymp-camera-icon" style="margin-right: .7rem;"><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-camera-icon"></use></svg>
                        사진 수정하기
                    </div>
                </a>
            <form class="w-search">
                <h4 class="control-label" id="first-h4">아이템 이름</h4>
                <div class="form-group with-button is-empty">
                    <input class="form-control" type="text" placeholder="아이템을 간단하게 입력하세요" v-model="item.itemName">
                <span class="material-input"></span></div>
            </form>
            <form class="w-search">
                <h4 class="control-label" id="first-h4" style="margin-top: 2rem;">아이템 가격</h4>
                <div class="form-group with-button is-empty">
                    <input class="form-control" type="text" placeholder="가격을 입력하세요(숫자만 가능)" v-model="item.itemPrice">
                <span class="material-input"></span></div>
            </form>
        </div>
			<div class="modal-body">
                <!-- <label class="control-label">카테고리 선택</label>
				<div class="form-group label-floating is-select">
					<div class="btn-group bootstrap-select form-control">
                        <select class="selectpicker form-control" tabindex="-98">
                            <option value="MA">카테고리 1</option>
                            <option class="font-larger" value="FE">카테고리 2</option>
                        </select>
                     </div>
				<span class="material-input" ></span></div> -->

                <!-- <label class="control-label">아이템명</label>
				<div class="form-group label-floating">
					<input class="form-control" v-model="item.itemName" style="padding-top:1rem; padding-bottom:1rem;font-size:medium;" placeholder="" value="" type="text">
				<span class="material-input"></span></div> -->
                <!-- <label>가격</label>
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
                </div> -->
                <!-- <h4 class="control-label" id="first-h4">링크검색</h4>
                <form class="w-search" style="margin-bottom:1rem">
                <div class="form-group with-button is-empty">
                    <input class="form-control" type="text" placeholder="원하는 아이템의 링크를 검색해보세요" v-model="linkQuery">
                    <button v-on:click="findItem">
                        <svg class="olymp-magnifying-glass-icon"><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-magnifying-glass-icon"></use></svg> -->
                        <!-- <svg><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-plus-icon"></use></svg> -->
                    <!-- </button>
                    <span class="material-input"></span>
                </div>
                </form> -->
                <h4 class="control-label" style="margin-top:0">링크입력</h4>
                <form class="w-search" style="margin-bottom:1rem">
                <div class="form-group with-button is-empty">
                    <input class="form-control" type="text" placeholder="" v-model="item.itemLink">
                    <!-- <button v-on:click="pasteLink" style="font-size:x-small"> -->
                        <!-- paste -->
                        <!-- <svg class="olymp-magnifying-glass-icon"><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-magnifying-glass-icon"></use></svg> -->
                        <!-- <svg><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-plus-icon"></use></svg> -->
                    <!-- </button> -->
                    <span class="material-input"></span>
                </div>
                </form>
                <!-- <div class="form-group label-floating">
                    <input class="form-control" v-model="item.itemLink" style="padding-top:1rem; padding-bottom:1rem;font-size:medium;" placeholder="" value="" type="text">
                <span class="material-input"></span></div> -->
                <h4 class="control-label" style="margin-top:1.5rem;">공개범위</h4>
                <div class="form-group is-select mb30">
                    <!-- <div class="radio" style="margin-top:1.2rem;">
                        <label>
                            <input type="radio" name="optionsRadios" value="true" v-model="item.visibleTo"/>
                            공개
                        </label>
                    </div>
                    <div class="radio">
                        <label>
                            <input type="radio" name="optionsRadios" value="false" v-model="item.visibleTo" />
                            비공개
                        </label>
                    </div> -->
                    <select v-model="item.visibleTo" style="padding-top:1rem;">
                        <option value="true">공개</option>
                        <option value="false">비공개</option>
                    </select>
                    <span class="material-input"></span>
                </div>
                <label class="control-label">위시메모</label>
                <div class="form-group">
                    <textarea v-model="item.itemMemo" class="form-control" style="font-size:small" placeholder=""></textarea>
                    <span class="material-input"></span>
                </div>
                <div class="col col-lg-6 col-md-6 col-sm-12 col-12" style="padding:0; margin-top:2.6rem;">
                    <a class="btn btn-primary btn-lg full-width" style="width: 100%; color: #fff; font-size:1rem;" v-on:click="doModify">수정완료</a>
                </div>
                <div class="col col-lg-6 col-md-6 col-sm-12 col-12" style="padding:0">
                    <a class="btn btn-secondary btn-lg full-width" style="width: 100%; color: #fff; font-size:1rem;" v-on:click="goToList">취소</a>
                </div>
                            
			</div>
            <div style="margin-top:2.5rem;"></div>
		</div>
                    <div class="modal fade" id="update-header-photo" tabindex="-1" role="dialog" aria-labelledby="update-header-photo" aria-hidden="true">
	<div class="modal-dialog window-popup update-header-photo" role="document">
		<div class="modal-content">
			<a href="#" class="close icon-close" data-dismiss="modal" aria-label="Close">
				<svg class="olymp-close-icon"><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-close-icon"></use></svg>
			</a>

			<div class="modal-header">
				<h5 class="title">아이템 사진 수정</h5>
			</div>

			<div class="modal-body">
                <!-- 사진 가져오기 -->
				<a href="#" class="upload-photo-item" data-dismiss="modal">
                    <svg class="olymp-photos-icon"><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-photos-icon"></use></svg>

                    <h6>라이브러리</h6>
                    <span>내 사진 불러오기</span>
                </a>
                <!-- 사진찍기 -->
				<a href="#" class="upload-photo-item" data-dismiss="modal" >
                    <svg class="olymp-camera-icon"><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-camera-icon"></use></svg>
                    <h6>카메라</h6>
                    <span>사진 촬영 후 업로드</span>
		        </a>
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
    name: 'ItemModify',
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
	data(){
		return {
			message:'',
			item: {},
			linkQuery:'',
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
        isPublic(){
			return this.item.visibleTo == "true" ? true: false;
		},
		isPrivate(){
			return this.item.visibleTo == "false" ? true: false;
		},
		isGroup(){
			if(this.isPublic || this.isPrivate){
				return false;
			}else{
				return true;
			}
		}
    },
	methods:{
		doModify(){
            (async()=>{
                try {
                    const res = await this.$http.patch(this.$serverUrl+this.$route.path, this.item);
                    if(res.data.code == "200"){
                        console.log(res.data.msg);
                        this.$router.push({name:'itemList', params: {userId: state.userId}});
                    }
                } catch (e) {
                    console.error(e);
                }
            })();
		},
        findItem(){
            //this.linkQuery로 새창 띄우기
        },
        pasteLink(){
            //안드로이드 클립보드의 link값을 붙여넣기
        },
        toggleCollapse(){
            this.collapseOption = !this.collapseOption;
        },
        goToList(){
            this.$router.back();
        }
	},
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
.w-search{
    width:100%;
}
.form-group.with-button button{
    width: 45px;
    background: #ff5e3a;
}
h4{
    margin-top:2rem;
}
#first-h4{
    margin-top:0;
}
.modal-body{
    padding-top:4px;
}
.card-header .collapsed i, .card-header .collapsed svg {
-webkit-transform: rotate(-180deg);
        transform: rotate(-180deg); 
}
.card-header{
    border:unset;
}
#photo-box{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 0.7rem;
    margin-top: 0;
    margin-bottom: 1.8rem;
    background: #c2c5d0;
    border:unset;
}
#photo-link{
    width: 100%;
}
.options-message {
    font-size: 1rem;
    font-weight: bold;
    color: #333333;
    fill: #555;
    position: relative;
    display: inline-flex;
    cursor: pointer;
    vertical-align: middle;
    align-items: center;
    justify-content: center;
    flex-direction: row;
}
.options-message svg {
    width: 20px;
    height: 20px;
}
</style>
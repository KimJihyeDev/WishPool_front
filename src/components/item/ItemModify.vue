<template>
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
            <form class="w-search">
                <h4 class="control-label" id="first-h4">아이템 이름</h4>
                <div class="form-group with-button is-empty">
                    <input class="form-control" type="text" placeholder="아이템을 간단하게 입력하세요" v-model="item.itemName">
                <span class="material-input"></span></div>
            </form>
            <form class="w-search">
                <h4 class="control-label" id="first-h4">아이템 가격</h4>
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
                <h4 class="control-label" id="first-h4">링크검색</h4>
                <form class="w-search" style="margin-bottom:1rem">
                <div class="form-group with-button is-empty">
                    <input class="form-control" type="text" placeholder="원하는 아이템의 링크를 검색해보세요" v-model="linkQuery">
                    <button v-on:click="findItem">
                        <svg class="olymp-magnifying-glass-icon"><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-magnifying-glass-icon"></use></svg>
                        <!-- <svg><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-plus-icon"></use></svg> -->
                    </button>
                    <span class="material-input"></span>
                </div>
                </form>
                <h4 class="control-label">링크입력</h4>
                <form class="w-search" style="margin-bottom:1rem">
                <div class="form-group with-button is-empty">
                    <input class="form-control" type="text" placeholder="" v-model="item.itemLink">
                    <button v-on:click="pasteLink" style="font-size:x-small">
                        paste
                        <!-- <svg class="olymp-magnifying-glass-icon"><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-magnifying-glass-icon"></use></svg> -->
                        <!-- <svg><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-plus-icon"></use></svg> -->
                    </button>
                    <span class="material-input"></span>
                </div>
                </form>
                <!-- <div class="form-group label-floating">
                    <input class="form-control" v-model="item.itemLink" style="padding-top:1rem; padding-bottom:1rem;font-size:medium;" placeholder="" value="" type="text">
                <span class="material-input"></span></div> -->
                <h4 class="control-label" style="margin-top:1.5rem;">공개범위</h4>
                <div class="form-group label-floating is-select mb30">
                    <div class="radio" style="margin-top:1.2rem;">
                        <label>
                            <input type="radio" name="optionsRadios" value="t" v-model="item.visibleTo"/>
                            공개
                        </label>
                    </div>
                    <div class="radio">
                        <label>
                            <input type="radio" name="optionsRadios" value="f" v-model="item.visibleTo" />
                            비공개
                        </label>
                    </div>
                    <span class="material-input"></span>
                </div>
                <label class="control-label">위시메모</label>
                <div class="form-group">
                    <textarea v-model="item.itemMemo" class="form-control" style="font-size:small" placeholder=""></textarea>
                    <span class="material-input"></span>
                </div>
                <div class="col col-lg-6 col-md-6 col-sm-12 col-12">
                    <button class="btn btn-primary btn-lg full-width" v-on:click="doModify">수정완료</button>
                </div>
                <div class="col col-lg-6 col-md-6 col-sm-12 col-12">
                    <button class="btn btn-secondary btn-lg full-width" v-on:click="goToList">취소</button>
                </div>            
			</div>
            <blank-space />
		</div>
</template>
<script>
import BlankSpace from '../BlankSpace.vue';
export default {
    name: 'ItemModify',
	created(){
        this.$http.get(this.$serverUrl+this.$route.path)
        .then(res=>{
			console.log(res.data);
			this.item = res.data;
        }).catch(e=>{
            console.error(e);
		})
		
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
            if(to === 'f'){
                return '비공개'
            }else if(to === 't'){
                return '공개'
            }else{
                return '그룹공개'
            }
        }
    },
    computed:{
        isPublic(){
            if(this.item.visibleTo === 't'){
                return true;
            }else if(this.item.visibleTo === 'f'){
                return false;
            }
            return false;
        },
        isPrivate(){
            if(this.item.visibleTo === 'f'){
                return true;
            }
            return false;
        }
    },
	methods:{
		doModify(){
			this.$http.patch(this.$serverUrl+this.$route.path, this.item)
			.then(()=>{
				// console.log(res.data);
				//목록으로 이동하는 코드
				this.$socket.emit('reqList', 'delete');
			}).catch(e=>{
				console.error(e);
			})
			this.$router.push({path:'/item/list'})
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
            this.$router.push({path:'/item/list'});
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
</style>
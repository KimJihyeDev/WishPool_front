<template>
<div>
    <div class="content-bg-wrap"></div>
    <div class="container">
        <div class="row">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="title" style="display:inline;">아이템 추가하기</h3>
                    <!-- modal close button(절대 삭제하지 말것) -->
                    <!-- <a href="#" class="close icon-close" data-dismiss="modal" aria-label="Close">
                        <svg class="olymp-close-icon" style="fill:black;"><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-close-icon"></use></svg>
                    </a> -->
                    <!-- end modal close button -->
                </div>
                <item-input 
                    v-on:onInsert="handleInsert"
                    inputMode="a"
                />
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
                    <div id="accordion">
                        <div class="card">
                            <div class="card-header" id="headingOne">
                            <h5 class="mb-0">
                                <button style="color:black; font-size:1.1rem; width:100%; text-decoration:underline;" class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    
                                <span v-if="collapseOption" v-on:click="toggleCollapse" style="margin-right:5px;">상세추가 펼치기</span>
                                <span v-if="!collapseOption" v-on:click="toggleCollapse" style="margin-right:5px;">상세추가 접기 </span>
                                <i class="fas fa-angle-up rotate-icon"></i>
                                </button>
                                <!-- <i class="fas fa-angle-down rotate-icon"></i> -->
                            </h5>
                            </div>

                            <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                <div class="card-body" style="margin-bottom:3rem;">
                                
                                    <a href="javascript:void(0)" id="photo-link" class="options-message" data-toggle="modal" data-target="#update-header-photo">
                                        <div class="form-control" id="photo-box">
                                            <svg class="olymp-camera-icon" style="margin-right: .7rem;"><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-camera-icon"></use></svg>
                                            사진 추가하기
                                        </div>
                                    </a>
                                <span class="material-input"></span>
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
                                            <input type="radio" name="optionsRadios" >
                                            공개
                                        </label>
                                    </div>
                                    <div class="radio">
                                        <label>
                                            <input type="radio" name="optionsRadios" checked>
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

                                <button class="btn btn-breez btn-lg full-width" style="font-size:small" v-on:click="handleInsert">등록</button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                        
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
                                <a href="javascript:void(0)" @click="showAndroidPhotoLib" class="upload-photo-item" data-dismiss="modal">
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
                <div class="modal fade" id="choose-from-my-photo" tabindex="-1" role="dialog" aria-labelledby="choose-from-my-photo" aria-hidden="true" style="">
                    <div class="modal-dialog window-popup choose-from-my-photo" role="document" style="">

                        <div class="modal-content" style="">
                            <a href="#" class="close icon-close" data-dismiss="modal" aria-label="Close">
                                <svg class="olymp-close-icon"><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-close-icon"></use></svg>
                            </a>
                            <div class="modal-header">
                                <h6 class="title">Choose from My Photos</h6>

                                <!-- Nav tabs -->
                                <ul class="nav nav-tabs" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" data-toggle="tab" href="#home" role="tab" aria-expanded="true">
                                            <svg class="olymp-photos-icon"><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-photos-icon"></use></svg>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" data-toggle="tab" href="#profile" role="tab" aria-expanded="false">
                                            <svg class="olymp-albums-icon"><use xlink:href="/assets/svg-icons/sprites/icons.svg#olymp-albums-icon"></use></svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div class="modal-body" style="">
                                <!-- Tab panes -->
                                <div class="tab-content" style="">
                                    <div class="tab-pane active" id="home" role="tabpanel" aria-expanded="true" style="">

                                        <div class="choose-photo-item" data-mh="choose-item" style="">
                                            <div class="radio">
                                                <label class="custom-radio">
                                                    <img src="/assets/img/choose-photo1.jpg" alt="photo">
                                                    <input type="radio" name="optionsRadios"><span class="circle"></span><span class="check"></span>
                                                </label>
                                            </div>
                                        </div>

                                        <a href="#" class="btn btn-secondary btn-lg btn--half-width">Cancel</a>
                                        <a href="#" class="btn btn-primary btn-lg btn--half-width">Confirm Photo</a>

                                    </div>
                                    <div class="tab-pane" id="profile" role="tabpanel" aria-expanded="false" style="">

                                        <div class="choose-photo-item" data-mh="choose-item" style="">
                                            <figure>
                                                <img src="/assets/img/choose-photo10.jpg" alt="photo">
                                                <figcaption>
                                                    <a href="#">South America Vacations</a>
                                                    <span>Last Added: 2 hours ago</span>
                                                </figcaption>
                                            </figure>
                                        </div>

                                        <a href="#" class="btn btn-secondary btn-lg btn--half-width">Cancel</a>
                                        <a href="#" class="btn btn-primary btn-lg disabled btn--half-width">Confirm Photo</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
import store from '../../store';
const { state } = store;
import ItemInput from './ItemInput.vue';
export default {
    name: 'ItemAdd',
	data(){
		return {
			item:{
				itemName: '',
				itemPrice: '',
				itemLink: '',
				itemRank: '',
				visibleTo: 'f',
                itemMemo: '',
                userId: state.userId,
            },
            linkQuery:'',
            collapseOption: true
		}
    },
    components:{
        'item-input': ItemInput,
    },
	methods:{
		handleInsert(val){
            this.item.itemName = val.itemName;
            this.item.itemPrice = val.itemPrice;
            (async()=>{
                try{
                    const res = await this.$http.post(this.$serverUrl+this.$route.path, this.item);
                    if(res.data.code == 200){
                        console.log('정상 : '+res.data.msg);
                        try{
                            this.$emit('bus-refresh');
                            //'내' 목록만 보여줘야하므로, 내 유저아이디를 파라미터로 갖는 url로 이동
                            this.$router.push({name: 'itemList', params: {userId: state.userId}})
                        }catch(e){
                            console.error(e);
                        }
                    }else if(res.data.code == 500){
                        console.log('서버오류 : '+res.data.msg);
                    }
                }catch(e){
                    console.error(e);
                }
                
            })();
			
			
			// location.href=this.$url+'item/list';
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
        showAndroidPhotoLib(){
            Android.loadPhotoLibrary();
        },
        showAndroidCamera() {
            Android.loadCamera();
        }
	}
}
</script>
<style scoped>
.modal-content{
    width:90%;
}
.ui-block{
    height: unset;
}
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
.card-body{
    padding:0;
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
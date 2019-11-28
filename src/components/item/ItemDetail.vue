<template>

   <div class="container">
	<div class="row" >
			<div class="col col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12" >
				<div class="ui-block" >
					<div class="ui-block-title">
						<h6 class="title" style="text-align:center; font-size:1.5rem;">{{item.itemName}}</h6>
					</div>
					<div class="ui-block-content"  >
						<!-- 아이템 정보 입력 폼 시작  -->
						<form >
							<div class="row">
						
								<div class="col col-lg-6 col-md-6 col-sm-12 col-12">
									<div class="ui-block" style="border:0px;">
										<article class="hentry has-post-thumbnail shared-photo">
											<div class="post-thumb">
												<button><img src="/assets/img/post-photo6.jpg" alt="photo"></button>
											</div>
										</article>
									</div>
                                    <div class="form-group label-floating">
										<label>카테고리</label>
										<div class="item-value">item.categoryId=>category=>categoryName</div>
									</div>
									<div class="form-group label-floating">
										<label>아이템 이름</label>
										<div class="item-value">{{item.itemName}}</div>
									</div>
						
									<div class="form-group label-floating">
										<label>가격</label>
										<div class="item-value">{{item.itemPrice}}</div>
									</div>
						
									<div class="form-group label-floating">
										<label >링크</label>
										<div class="item-value"><a href=#>{{item.itemLink}}</a></div>
									</div>
									<div class="form-group label-floating">
										<label>메모</label>
										<div class="item-value">{{item.itemMemo}}</div>
									</div>

									<div class="form-group label-floating">
										<label>중요도</label>
											<div>
												<span class="star-input" style="margin-top: 0;margin-bottom:3%">
													<span class="input">
														<input type="radio" name="star-input" value="1" id="p1" v-model="item.itemRank">
														<label for="p1">1</label>
														<input type="radio" name="star-input" value="2" id="p2" v-model="item.itemRank">
														<label for="p2">2</label>
														<input type="radio" name="star-input" value="3" id="p3" v-model="item.itemRank">
														<label for="p3">3</label>
														<input type="radio" name="star-input" value="4" id="p4" v-model="item.itemRank">
														<label for="p4">4</label>
														<input type="radio" name="star-input" value="5" id="p5" v-model="item.itemRank">
														<label for="p5">5</label>
													</span>
												<!-- <output for="star-input"><b>0</b>점</output>						 -->
												</span>
											</div>
                                    <div class="form-group label-floating">
										<label>공개 범위</label>
										<div class="item-value">{{item.visibleTo}}</div>
									</div>
									</div>
								</div>
							</div>
							<div class="col col-lg-6 col-md-6 col-sm-12 col-12">
                                <div class="btn-list">
                                    <button class="btn btn-secondary btn-lg full-width" v-on:click="modify">수정</button>
                                    <button class="btn btn-primary btn-lg full-width">확인</button>
                                </div>
							</div>
						</form>
						<!-- 아이템 입력 폼 끝 -->
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ItemModify from './ItemModify.vue';

export default {
    name: 'ItemDetail',
    mounted(){
        this.$http.get(this.$serverUrl+this.$route.path)
        .then(res=>{
			this.item = res.data;
        }).catch(e=>{
            console.error(e);
		})
		
    },
    data(){
        return {
            item: {}
        }
	},
	methods:{
		modify(){
			this.$router.push({path:'/item/modify/'+this.item._id, component:ItemModify.vue})
		}
	}
}
</script>

<style scoped>
.star-input>.input,
/* .star-input>.input>label:hover, */
/* .star-input>.input>input:focus+label, */
.star-input>.input>input:checked+label{display: inline-block;vertical-align:middle;background:url('/assets/img/grade_img.png')no-repeat;}
.star-input{display:inline-block; white-space:nowrap;width:225px;height:40px;line-height:30px;}
.star-input>.input{display:inline-block;width:150px;background-size:150px;height:28px;white-space:nowrap;overflow:hidden;position: relative;}
.star-input>.input>input{position:absolute;width:1px;height:1px;opacity:0;}
.star-input>.input.focus{outline:1px dotted #ddd;}
.star-input>.input>label{width:30px;height:0;padding:28px 0 0 0;overflow: hidden;float:left;cursor: pointer;position: absolute;top: 0;left: 0;}
/* .star-input>.input>label:hover, */
/* .star-input>.input>input:focus+label, */
.star-input>.input>input:checked+label{background-size: 150px;background-position: 0 bottom;}
/* .star-input>.input>label:hover~label{background-image: none;} */
.star-input>.input>label[for="p1"]{width:30px;z-index:5;}
.star-input>.input>label[for="p2"]{width:60px;z-index:4;}
.star-input>.input>label[for="p3"]{width:90px;z-index:3;}
.star-input>.input>label[for="p4"]{width:120px;z-index:2;}
.star-input>.input>label[for="p5"]{width:150px;z-index:1;}
.star-input>output{display:inline-block;width:60px; font-size:18px;text-align:right; vertical-align:middle;}
.label-floating .form-control, .label-floating input, .label-floating select{padding:1.1rem .5rem}
.item-value{
    font-weight: 700;
    color: #515365;
}
.btn-list{
    display: flex;
    justify-content: space-between;
    margin-top: 1.5rem;
}
.btn-list button{
    flex: 1;
    margin-left : 1rem;
    margin-right: 1rem;
    font-size: 1.1rem;
}
button.btn-lg{
    padding : 0.8rem 3rem;
}
.container{
    font-size: 1.1rem;
}
</style>
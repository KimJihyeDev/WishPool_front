<template>

   <div class="container">
	   {{message}}
	<div class="row" >
			<div class="col col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12" >
				<div class="ui-block" >
					<div class="ui-block-title">
						<h6 class="title" style="text-align:center">아이템 추가</h6>
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
									<div class="form-group label-floating is-select">
										<!-- <label class="control-label">카테고리</label> -->
											<select class=" form-control">
												<option value="#" class="control-label">카테고리를 선택하세요</option>
												<option value="MA">Male</option>
												<option value="FE">Female</option>
											</select>
									</div>
									<div class="form-group label-floating">
										<label>아이템 이름</label>
										<input class="form-control" placeholder="" type="text" value="James">
									</div>
						
									<div class="form-group label-floating">
										<label>가격(숫자만 입력하세요)</label>
										<input class="form-control" placeholder="" type="text" value="">
									</div>
						
									<div class="form-group label-floating">
										<label >링크</label>
										<input name="form-control" value="" />
									</div>
									<div class="form-group label-floating">
										<label>메모</label>
										<input name="form-control" value="" />
									</div>

									<div class="form-group label-floating">
										<label>중요도</label>
											<div>
												<span class="star-input" style="margin-top: 0;margin-bottom:3%">
													<span class="input">
														<input type="radio" name="star-input" value="1" id="p1">
														<label for="p1">1</label>
														<input type="radio" name="star-input" value="2" id="p2">
														<label for="p2">2</label>
														<input type="radio" name="star-input" value="3" id="p3">
														<label for="p3">3</label>
														<input type="radio" name="star-input" value="4" id="p4">
														<label for="p4">4</label>
														<input type="radio" name="star-input" value="5" id="p5">
														<label for="p5">5</label>
													</span>
												<!-- <output for="star-input"><b>0</b>점</output>						 -->
												</span>
											</div>

										<select class=" form-control">
											<option value="#" class="control-label">공개 범위를 선택하세요</option>
											<option value="public">공개</option>
											<option value="private">비공개</option>
											<option value="group">그룹공개</option>
										</select>
									</div>
								</div>
							</div>
							<div class="col col-lg-6 col-md-6 col-sm-12 col-12">
								<button class="btn btn-secondary btn-lg full-width">등록</button>
							</div>
							<div class="col col-lg-6 col-md-6 col-sm-12 col-12">
								<button class="btn btn-primary btn-lg full-width">취소</button>
							</div>
						</form>
						<!-- 아이템 입력 폼 끝 -->
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script scr="/assets/js/star.js"></script>
<script>
 $(".star").on('click',function(){
   var idx = $(this).index();
   $(".star").removeClass("on");s
     for(var i=0; i<=idx; i++){
        $(".star").eq(i).addClass("on");
   }
 });
</script>
<script>
export default {
	name: 'ItemAdd',
	data(){
		return {
			message:''
		
		}
	}
}
</script>

<style scoped>
.star-input>.input,
.star-input>.input>label:hover,
.star-input>.input>input:focus+label,
.star-input>.input>input:checked+label{display: inline-block;vertical-align:middle;background:url('/assets/img/grade_img.png')no-repeat;}
.star-input{display:inline-block; white-space:nowrap;width:225px;height:40px;padding:25px;line-height:30px;}
.star-input>.input{display:inline-block;width:150px;background-size:150px;height:28px;white-space:nowrap;overflow:hidden;position: relative;}
.star-input>.input>input{position:absolute;width:1px;height:1px;opacity:0;}
star-input>.input.focus{outline:1px dotted #ddd;}
.star-input>.input>label{width:30px;height:0;padding:28px 0 0 0;overflow: hidden;float:left;cursor: pointer;position: absolute;top: 0;left: 0;}
.star-input>.input>label:hover,
.star-input>.input>input:focus+label,
.star-input>.input>input:checked+label{background-size: 150px;background-position: 0 bottom;}
.star-input>.input>label:hover~label{background-image: none;}
.star-input>.input>label[for="p1"]{width:30px;z-index:5;}
.star-input>.input>label[for="p2"]{width:60px;z-index:4;}
.star-input>.input>label[for="p3"]{width:90px;z-index:3;}
.star-input>.input>label[for="p4"]{width:120px;z-index:2;}
.star-input>.input>label[for="p5"]{width:150px;z-index:1;}
.star-input>output{display:inline-block;width:60px; font-size:18px;text-align:right; vertical-align:middle;}

</style>
<template>

   <div class="container">
	<div class="row" >
			<div class="col col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12" >
				<div class="ui-block" >
					<div class="ui-block-title">
						<h6 class="title" style="text-align:center">회원가입 화면</h6>
					</div>
					<div class="ui-block-content"  >
						<!-- 아이템 정보 입력 폼 시작  -->
						<form >
							<div class="row">
								<button v-on:click="write">click</button>
								<div class="col col-lg-6 col-md-6 col-sm-12 col-12">
									<div class="form-group label-floating">
										<label>이름</label>
										<input class="form-control" placeholder="" type="text" value="James">
									</div>
						
									<div class="form-group label-floating">
										<label>이름</label>
										<input class="form-control" placeholder="" type="text" value="">
									</div>
									<div class="form-group label-floating">
										<label>아이디</label>
										<input class="form-control" placeholder="" type="text" value="">
									</div>
						
									<div class="form-group label-floating">
										<label >비밀번호</label>
										<input name="form-control" value="" />
									</div>
									<div class="form-group label-floating">
										<label>전화번호</label>
										<input name="form-control" value="" />
									</div>
									<div class="form-group label-floating">
										<label>닉네임</label>
										<input name="form-control" value="" />
									</div>
									<!-- 나중에 달력추가 -->
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
        return{
            users:{
				userId:'dd',
			

            }
		}
		
	},
	methods:{
        write:function(){
            // this.$http.post(this.$serverUrl + '/users', this.users)
            // .then(function(response){
            //     alert('등록');
            // })
            // .catch(function(err){
            //     console.error(err);
            // })
        this.$http.post(this.$serverUrl + '/users',this.users)
        .then(function(response){
            console.log(response);
        })
        .catch(function (err) {
            console.error(err);
        })    
        },
        
    },
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
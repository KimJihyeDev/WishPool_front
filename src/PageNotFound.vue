<template>
    <div class="body-bg-white" style="cursor: url(&quot;undefined&quot;), default;">
        <div class="stunning-header bg-primary-opacity">
            <div class="content-bg-wrap stunning-header-bg1"></div>
        </div>
        <section class="medium-padding120">
            <div class="container">
                <div class="row">
                    <div class="col col-xl-6 m-auto col-lg-6 col-md-12 col-sm-12 col-12">
                        <div class="page-404-content">
                            <img src="img/404.png" alt="photo">
                            <div class="crumina-module crumina-heading align-center">
                                <h2 class="h1 heading-title"> <span class="c-primary">유령</span>이 떴습니다!
                                안타깝게도 찾고계신 페이지가 없는 것 같네요...
                                </h2>
                                <p class="heading-text">죄송합니다! 찾고 계신 페이지는 이동하였거나, 존재하지 않습니다.
                                    처음으로 돌아가 주시거나, 이 문제가 계속된다면 <a href="#">{}</a>로 메일을 보내주세요
                                </p>
                            </div>

                            <a @click="goto" class="btn btn-primary btn-lg">처음으로</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    name: 'PageNotFound',
    methods:{
        goto(){
            this.$router.push('/');
        }
    }
}
</script>
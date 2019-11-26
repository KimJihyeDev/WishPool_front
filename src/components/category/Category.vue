<template>
    <div class="col col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
		<div class="ui-block">
            <div class="birthday-item inline-items">
                <div class="author-thumb">
                    <img src="/assets/img/avatar20-sm.jpg" alt="author">
                </div>
                <div class="birthday-author-name">
                    <a href="#" class="h6 author-name">Michael Maximoff</a>
                    <div class="birthday-date">January 24th, 1972</div>
                </div>
                <a href="#" class="btn btn-sm bg-blue">Create Event</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Category',
}
</script>

<style scoped>
.btn-group-sm>.btn, .btn-sm{
	padding: 0.3rem 0.5rem;
}
.btn-list{
	float:right;
	width: 45%;
	display: flex;
	justify-content: space-between
}

</style>
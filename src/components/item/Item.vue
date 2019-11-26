<template>
    <div class="col col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
			<div class="ui-block">
				<div class="birthday-item inline-items">
					<div class="author-thumb">
						<img src="/assets/img/avatar7-sm.jpg" alt="author">
					</div>
					<div class="birthday-author-name">
						<a href="#" class="h6 author-name">{{itemName}} </a>
						<div class="birthday-date">{{itemPrice}}</div>
					</div>
					<a href="20-CalendarAndEvents-MonthlyCalendar.html" class="btn btn-sm bg-blue">Create Event</a>
				</div>
			</div>
		</div>
</template>
<script>
export default {
	name: 'Item',
	props:{
		itemName:'', //아이템 이름
		itemPrice:'' //아이템 가격
	}
}
</script>

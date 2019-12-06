<template>

	<!-- Window-popup Restore Password -->
	<div>

	{{user.userId}}님 환영합니다.
	</div>

	<!-- ... end Window-popup Restore Password -->
</template>
<script>
	export default {
		name:'ResetPassword',
		data(){
			return {
				user:{
					userId:'',

				}
			}
		},
		created(){
			const token = localStorage.getItem('wishToken');
			this.$http.get(this.$serverUrl + '/users/register',{ headers:{ authorization:token }})
					.then((response)=>{
						console.log(response);
						this.user.userId = response.data.result.userId;
					})
					.catch((err)=>{
						console.error(err);
					})
		}
	}
</script>
<style scoped>

</style>
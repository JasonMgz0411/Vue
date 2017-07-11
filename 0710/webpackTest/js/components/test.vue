<template>
	<div>
		<div v-for="n in 10">{{ msg }}</div>
	</div>
</template>
<script>
	module.exports = {
		data:function(){
			return {
				msg:'Hello World'
			};
		}
	};
</script>
<style>
	body {
		color: red;
	}
</style>
<template>
	<div id="App">
		<el-row class="height100">
		  	<el-col :span="18" class="height100"><div id="Table" class="height100 grid-content bg-purple"></div></el-col>
			<el-col :span="6" class="height100"><div id="DropMenu" class="height100 grid-content bg-purple-light"></div></el-col>
		</el-row>
	</div>
</template>


<style>
	html,body,#App {
		padding: 0;
		margin: 0;
		width: 100%;
		height: 100%;
	}
	.height100 {
		height: 100%;
	}
	.bg-purple {
	background: #d3dce6;
	}
	.bg-purple-light {
	background: #e5e9f2;
	}
</style>
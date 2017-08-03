<template>
	<el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[20]"
      :page-size="20"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
</template>
<script>
  export default {
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    data() {
      return {
        currentPage: 5
      };
    }
  }
</script>
<style type="text/css">
	.el-pager {
		display: inline;
	}

	.el-select .el-input .el-input__icon {
		margin-top: \-14px;
		-ms-transform:rotate(180deg);
	}
</style>
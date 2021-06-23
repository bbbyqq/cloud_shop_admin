<template>
	<div>
		<div style="margin-bottom:10px;float: right;">
			<el-input placeholder="请输入内容" v-model="input" clearable style="width: 12.5rem;" @change="handleSearch(input)"></el-input>
			<el-button @click="handleSearch(input)" type="primary">搜索</el-button>
		</div>
		<el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" border style="width: 100%"
			:header-cell-style="{background:'#eef1f6'}">
			<el-table-column prop="id" label="序号" width="100">
			</el-table-column>
			<el-table-column prop="date" label="日期" width="180">
			</el-table-column>
			<el-table-column prop="name" label="姓名" width="180">
			</el-table-column>
			<el-table-column prop="sex" label="性别" width="180">
			</el-table-column>
			<el-table-column prop="address" label="地址">
			</el-table-column>
		</el-table>
		<el-pagination style="margin-top: 1.25rem;" background @size-change="handleSizeChange"
			@current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20,30]"
			:page-size="pagesize" :total="tableData.length" layout="total, sizes, prev, pager, next, jumper">
		</el-pagination>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				input:'',
				tableData: [],
				currentPage: 1,
				pagesize: 10
			}
		},
		mounted() {
			this.getData()
		},
		methods: {
			getData() {
				this.$axios.get('/user/list').then((response) => {
					this.tableData = response.data.data.list
				}).catch((response) => {
					this.$message.error('获取数据失败！');
				})
			},
			handleSizeChange: function(val) {
				this.pagesize = val;
			},
			handleCurrentChange: function(currentPage) {
				this.currentPage = currentPage;
			},
			handleSearch(val) {
				this.$axios.post('/user/search',val).then((response)=>{
					this.tableData = response.data.data.list
				}).catch((response)=>{
					console.log('错误')
				})
			}
		}
	}
</script>

<style>
</style>

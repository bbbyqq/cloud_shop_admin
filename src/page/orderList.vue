<template>
	<div>
		<el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" border style="width: 100%"
			:header-cell-style="{background:'#eef1f6'}">
			<el-table-column prop="orderId" label="订单ID">
			</el-table-column>
			<el-table-column prop="date" label="日期">
			</el-table-column>
			<el-table-column prop="orderName" label="订单名称">
			</el-table-column>
			<el-table-column prop="orderPrice" label="订单价格">
			</el-table-column>
			<el-table-column prop="orderState" label="订单状态">
			</el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<Dialog :dialogFormVisible="dialogFormVisible" @changeShow="showDialogForm" :form="form" />
		<el-pagination style="margin-top: 1.25rem;" background @size-change="handleSizeChange"
			@current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20,30]"
			:page-size="pagesize" :total="tableData.length" layout="total, sizes, prev, pager, next, jumper">
		</el-pagination>
	</div>
</template>

<script>
	import Dialog from '../components/dialog.vue'
	export default {
		data() {
			return {
				tableData: [],
				currentPage: 1,
				pagesize: 10,
				dialogFormVisible: false,
				form: {}
			}
		},
		components: {
			Dialog
		},
		mounted() {
			this.getData()
		},
		methods: {
			getData() {
				this.$axios.get('/order/list').then((response) => {
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
			handleEdit(index, row) {
				this.dialogFormVisible = true
				this.form = row
			},
			handleDelete(index, row) {
				this.$confirm('是否删除该订单？', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$notify({
						title: '提示',
						type: 'success',
						message: '删除成功'
					});
				}).catch(() => {
					console.log('已取消')
				});

			},
			// 监听 子组件弹窗关闭后触发，有子组件调用
			showDialogForm(data) {
				if (data === 'false') {
					this.dialogFormVisible = false
				} else {
					this.dialogFormVisible = true
				}
			}
		}
	}
</script>

<style>
</style>

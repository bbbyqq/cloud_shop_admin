<template>
	<div>
		<el-dialog :visible.sync="showDialog" @close="handleClose" width="600px" :close-on-click-modal="false">
			<el-form :model="form">
				<el-form-item label="订单ID:" :label-width="formLabelWidth">
					<el-input v-model="form.orderId" disabled></el-input>
				</el-form-item>
				<el-form-item label="日期:" :label-width="formLabelWidth">
					<el-input v-model="form.date" disabled></el-input>
				</el-form-item>
				<el-form-item label="订单名称:" :label-width="formLabelWidth">
					<el-input v-model="form.orderName"></el-input>
				</el-form-item>
				<el-form-item label="订单价格:" :label-width="formLabelWidth">
					<el-input v-model="form.orderPrice"></el-input>
				</el-form-item>
				<el-form-item label="订单状态:" :label-width="formLabelWidth">
					<el-select v-model="form.orderState" placeholder="请选择订单状态">
						<el-option label="等待支付" value="等待支付"></el-option>
						<el-option label="支付超时" value="支付超时"></el-option>
						<el-option label="支付成功" value="支付成功"></el-option>
					</el-select>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="showDialog = false">取 消</el-button>
				<el-button type="primary" @click="confirm">确 定</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				formLabelWidth: '80px',
				showDialog: false
			}
		},
		props: {
			dialogFormVisible: {
				type: Boolean,
				default: false
			},
			form: {
				orderId: '',
				date: '',
				orderName: '',
				orderPrice: '',
				orderState: ''
			},
		},
		methods: {
			// 弹出框关闭后触发
			handleClose() {
				// 子组件调用父组件方法，并传递参数
				this.$emit('changeShow', 'false')
			},
			confirm() {
				this.showDialog = false
				this.$notify({
					title: '提示',
					type: 'success',
					message: '编辑成功'
				});
			}
		},
		watch: {
			// 监听 dialogFormVisible 改变
			dialogFormVisible() {
				this.showDialog = this.dialogFormVisible
			}
		}
	}
</script>

<style scoped>
	.el-select {
		width: 100%;
	}
</style>

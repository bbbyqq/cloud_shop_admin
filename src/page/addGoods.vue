<template>
	<div>
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<el-form-item label="商品名称" prop="name">
				<el-input v-model="ruleForm.name"></el-input>
			</el-form-item>
			<el-form-item label="商品图片" prop="img">
				<el-upload action="goods/upload" list-type="picture-card" ref="upload"
					:on-success="handleSuccess" :on-preview="handlePreview" :on-remove="handleRemove">
					<i class="el-icon-plus"></i>
				</el-upload>
				<el-dialog :visible.sync="dialogVisible">
					<img width="100%" :src="ruleForm.img" alt="">
				</el-dialog>
			</el-form-item>
			<el-form-item label="商品描述" prop="describe">
				<el-input v-model="ruleForm.describe"></el-input>
			</el-form-item>
			<el-form-item label="商品价格" prop="price">
				<el-input v-model="ruleForm.price"></el-input>
			</el-form-item>
			<el-form-item label="商品服务" prop="service">
				<el-checkbox-group v-model="ruleForm.service">
					<el-checkbox label="七天无理由退货" name="type"></el-checkbox>
					<el-checkbox label="闪电退款" name="type"></el-checkbox>
					<el-checkbox label="退货包运费" name="type"></el-checkbox>
					<el-checkbox label="极速审核" name="type"></el-checkbox>
				</el-checkbox-group>
			</el-form-item>
			<el-form-item label="优惠券" prop="coupon">
				<el-switch v-model="ruleForm.coupon" @change="isCoupon = !isCoupon"></el-switch>
			</el-form-item>
			<div v-if="isCoupon">
				<el-form-item label="优惠价格" class="coupon-item" required>
					满
					<el-form-item prop="coupon1">
						<el-input v-model="ruleForm.coupon1" style="width: auto;margin:0 10px 0 10px;"></el-input>
					</el-form-item>
					减
					<el-form-item prop="coupon2">
						<el-input v-model="ruleForm.coupon2" style="width: auto;margin-left: 10px;"></el-input>
					</el-form-item>
				</el-form-item>
				<el-form-item label="优惠时间" required>
					<el-col :span="11">
						<el-form-item prop="date1">
							<el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"
								style="width: 100%;">
							</el-date-picker>
						</el-form-item>
					</el-col>
					<el-col class="line" :span="1">-</el-col>
					<el-col :span="11">
						<el-form-item prop="date2">
							<el-date-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;">
							</el-date-picker>
						</el-form-item>
					</el-col>
				</el-form-item>
			</div>
			<el-form-item>
				<el-button type="primary" @click="submitForm('ruleForm')">立即添加</el-button>
				<el-button @click="resetForm('ruleForm')">重置</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		data() {
			var imgValidator = (rule, value, callback) => { // 图片验证
				if (!this.ruleForm.img) {
					callback(new Error('请上传图片'));
				} else {
					callback();
				}
			};
			return {
				isCoupon: false,
				dialogVisible: false, // 上传图片后的缩略图显示开关
				ruleForm: {
					name: '',
					img: '',
					describe: '',
					price: '',
					coupon: false,
					coupon1: '',
					coupon2: '',
					date1: '',
					date2: '',
					service: [],
				},
				rules: {
					name: [{
						required: true,
						message: '请输入商品名称',
						trigger: 'blur'
					}],
					img: [{
						required: true,
						message: '请上传图片',
						trigger: 'change'
					}],
					describe: [{
						required: true,
						message: '请输入商品描述',
						trigger: 'blur'
					}],
					price: [{
						required: true,
						pattern: /^-?\d+\.?\d*$/, // 正则表达式，验证是否为数字
						message: '请输入正确的商品价格',
						trigger: 'blur'
					}],
					coupon1: [{
						required: true,
						pattern: /^-?\d+\.?\d*$/, // 正则表达式，验证是否为数字
						message: '请输入正确的价格',
						trigger: 'blur'
					}],
					coupon2: [{
						required: true,
						pattern: /^-?\d+\.?\d*$/, // 正则表达式，验证是否为数字
						message: '请输入正确的价格',
						trigger: 'blur'
					}],
					date1: [{
						type: 'date',
						required: true,
						message: '请选择优惠券开始日期',
						trigger: 'change'
					}],
					date2: [{
						type: 'date',
						required: true,
						message: '请选择优惠券结束日期',
						trigger: 'change'
					}],
					service: [{
						type: 'array',
						required: false,
						trigger: 'change'
					}],
				}
			};
		},
		methods: {
			handlePreview(file) {
				this.ruleForm.img = file.url;
				this.dialogVisible = true;
			},
			handleSuccess(res, file, fileList) {
				this.ruleForm.img = file.url
				// 文件上传后不会触发form表单的验证,要手动添加验证
				this.$refs.ruleForm.validateField('img')
			},
			handleRemove(file, fileList) {
				this.ruleForm.img = ''
				// 文件删除后也要触发验证,validateField是触发部分验证的方法
				this.$refs.ruleForm.validateField('img')
			},
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						this.$message.success('添加成功，请等待管理员审核！');
					} else {
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs.upload.clearFiles();  // 清空图片
				if (this.ruleForm.coupon = true) {
					this.isCoupon = false
				}
				this.$refs[formName].resetFields();
			}
		}
	}
</script>

<style>
	.coupon-item>.el-form-item__content {
		display: flex;
	}

	.line {
		text-align: center;
	}
</style>

<template>
	<div class="content">
		<img src="../assets/basicprofile.png">
		<div class="title">云商城后台管理系统</div>
		<div class="content-form">
			<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="auto"
				class="demo-ruleForm">
				<el-form-item label="账户" prop="userName">
					<el-input v-model.number="ruleForm.userName"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="pass">
					<el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="确认密码" prop="checkPass">
					<el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item style="margin-top: 4.25rem;">
					<el-button style="width: 27.1875rem;" type="primary" @click="submitForm('ruleForm',ruleForm)">注册
					</el-button>
					<br />
					<el-button style="width: 27.1875rem;margin-top: 1.125rem;" type="primary" @click="backLogin">返回登录
					</el-button>
					<br />
					<el-button style="width: 27.1875rem;margin-top: 1.125rem;" @click="resetForm('ruleForm')">重置
					</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			var checkUserName = (rule, value, callback) => {
				if (!value) {
					return callback(new Error('账户不能为空'));
				} else {
					callback();
				}
			};
			var validatePass = (rule, value, callback) => {
				if (!value) {
					return callback(new Error('请输入密码'));
				} else {
					if (this.ruleForm.checkPass !== '') {
						this.$refs.ruleForm.validateField('checkPass');
					}
					callback();
				}
			};
			var validatePass2 = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请再次输入密码'));
				} else if (value !== this.ruleForm.pass) {
					callback(new Error('两次输入密码不一致!'));
				} else {
					callback();
				}
			};
			return {
				ruleForm: {
					userName: '',
					pass: '',
					checkPass: ''
				},
				rules: {
					userName: [{
						validator: checkUserName,
						trigger: 'blur'
					}],
					pass: [{
						validator: validatePass,
						trigger: 'blur'
					}],
					checkPass: [{
						validator: validatePass2,
						trigger: 'blur'
					}]
				}
			};
		},
		methods: {
			submitForm(formName, row) {
				var that = this
				this.$refs[formName].validate((valid) => {
					if (valid) {
						this.$message.error('暂未开放注册！');
					} else {
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			},
			backLogin() {
				this.$router.push('/')
			}
		}
	}
</script>

<style scoped>
	.content {
		text-align: center;
	}

	.title {
		font-size: 1.5rem;
		margin-bottom: 2.8125rem;
	}

	.content-form {
		width: 31.25rem;
		margin: auto;
	}
</style>

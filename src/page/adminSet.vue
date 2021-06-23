<template>
	<div>
		<div class="admin_title">管理员信息</div>
		<ul class="admin_set">
			<li>
				<span>姓名：</span><span>{{admin.name}}</span>
			</li>
			<li>
				<span>注册时间：</span><span>{{admin.register_time}}</span>
			</li>
			<li>
				<span>管理员权限：</span><span>{{admin.admin_power}}</span>
			</li>
			<li>
				<span>管理员ID：</span><span>{{admin.admin_id}}</span>
			</li>
			<li>
				<span>更换头像：</span>
				<div style="position: relative;">
					<img class="admin_img" :src="this.$store.state.avatarUrl" @click="uploadHeadImg">
					<!-- accept="image/*" 表示不限制图片格式 -->
					<input class="admin_upload" type="file" accept="image/*" @change="handleFile"/>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				admin: {
					name: '',
					register_time: '',
					admin_power: '',
					admin_id: ''
				}
			}
		},
		created() {
			// 获取管理员数据
			this.$axios.get('/admin/list').then((response) => {
				this.admin = response.data.data.list
			}).catch((response) => {
				this.$message.error('获取数据失败！');
			})
		},
		methods: {
			// 打开图片上传
			uploadHeadImg: function() {
				// this.$el获取Vue实例关联的DOM元素；
				this.$el.querySelector('.admin_upload').click()
			},
			// 更换头像并显示
			handleFile: function(e) {
				let $target = e.target || e.srcElement
				let file = $target.files[0]
				var reader = new FileReader()
				reader.onload = (data) => {
					let res = data.target || data.srcElement
					this.$store.state.avatarUrl = res.result
				}
				reader.readAsDataURL(file)
			}
		}
	}
</script>

<style scoped>
	.admin_title {
		margin-top: 20px;
		font-size: 24px;
		color: #666;
		text-align: center;
	}

	.admin_set {
		margin-left: 200px;
	}

	.admin_set>li {
		padding: 20px;
		list-style: none;
		color: #666;
	}

	.admin_img {
		width: 134px;
		height: 134px;
		border: 1px dashed #d9d9d9;
		margin-top: 10px;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}

	.admin_upload {
		display: none;
		height: 134px;
		width: 134px;
		position: absolute;
		top: 10px;
		left: 0;
	}
</style>

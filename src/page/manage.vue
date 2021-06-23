<template>
	<el-container>
		<el-aside :width="isCollapse?'65px':'200px'">
			<el-menu :default-active="defaultActive" style="min-height: 100%;" router :collapse="isCollapse"
				:collapse-transition="false">
				<el-menu-item index="manage">
					<i class="el-icon-menu"></i>
					<span slot="title">首页</span>
				</el-menu-item>
				<el-submenu index="2">
					<template slot="title">
						<i class="el-icon-document"></i>
						<span slot="title">数据管理</span>
					</template>
					<el-menu-item index="userList">用户列表</el-menu-item>
					<el-menu-item index="orderList">订单列表</el-menu-item>
				</el-submenu>
				<el-submenu index="3">
					<template slot="title">
						<i class="el-icon-plus"></i>
						<span slot="title">添加数据</span>
					</template>
					<el-menu-item index="addGoods">添加商品</el-menu-item>
				</el-submenu>
				<el-submenu index="4">
					<template slot="title">
						<i class="el-icon-edit"></i>
						<span slot="title">编辑</span>
					</template>
					<el-menu-item index="textEdit">文本编辑</el-menu-item>
				</el-submenu>
				<el-submenu index="5">
					<template slot="title">
						<i class="el-icon-setting"></i>
						<span slot="title">设置</span>
					</template>
					<el-menu-item index="adminSet">管理员设置</el-menu-item>
				</el-submenu>
				<el-submenu index="6">
					<template slot="title">
						<i class="el-icon-warning"></i>
						<span slot="title">说明</span>
					</template>
					<el-menu-item index="explain">说明</el-menu-item>
				</el-submenu>
			</el-menu>
		</el-aside>
		<el-container>
			<el-header>
				<!-- el-aside折叠与展开 -->
				<i v-if="isToggle" class="el-icon-s-fold" style="line-height: 3.5rem;font-size: 1.25rem;margin-right: 0.625rem;" @click="toggleCollapse"></i>
				<i v-else class="el-icon-s-unfold" style="line-height: 3.5rem;font-size: 1.25rem;margin-right: 0.625rem;" @click="toggleCollapse"></i>
				<!-- 面包屑 -->
				<el-breadcrumb separator="/">
					<el-breadcrumb-item :to="{ path: '/manage' }">首页</el-breadcrumb-item>
					<el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
				</el-breadcrumb>
				<el-dropdown trigger="click">
					<span style="cursor: pointer;">
						<img class="logo-img" :src="this.$store.state.avatarUrl">
						bbbyqq
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item @click.native="goToMessage">首页</el-dropdown-item>
						<el-dropdown-item @click.native="goToLogin">退出</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</el-header>
			<el-main>
				<!-- keep-alive用来缓存组件,避免多次加载相应的组件,减少性能消耗，简单一点来说就是从页面1链接到其他页面后回退到页面1不用在重新执行页面1的代码，只会从缓存中加载之前已经缓存的页面1，这样可以减少加载时间及性能消耗，提高用户体验性。 -->
				<keep-alive>
					<router-view></router-view>
				</keep-alive>
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
	export default {
		data() {
			return {
				isCollapse: false,
				isToggle:true
			}
		},
		computed: {
			defaultActive: function() {
				return this.$route.path.replace('/', '');
			}
		},
		methods: {
			goToMessage() {
				this.$router.push('manage');
			},
			goToLogin() {
				this.$router.push('/');
			},
			toggleCollapse() {
				this.isCollapse = !this.isCollapse
				this.isToggle = !this.isToggle
			}
		}
	}
</script>


<style scoped>
	.el-submenu .el-menu-item {
		min-width: auto;
	}

	.el-header {
		height: 3.5rem !important;
		background-color: #eff2f6;
		color: #333;
		line-height: 3.5rem;
		display: flex;
	}
	
	.collapse {
		background-color: transparent;
	}
	
	.collapse:hover {
	  background-color: transparent;
	}

	.el-breadcrumb {
		flex: 1;
		line-height: 4;
	}

	.logo-img {
		width: 1.875rem;
		height: 1.875rem;
		position: absolute;
		right: 3.125rem;
		top: 0.75rem;
		border-radius: 50%;
	}
</style>

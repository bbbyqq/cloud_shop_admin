import login from './page/login.vue'
import register from './page/register.vue'
import manage from './page/manage.vue'
import home from './page/home.vue'
import userList from './page/userList.vue'
import orderList from './page/orderList.vue'
import addGoods from './page/addGoods.vue'
import textEdit from './page/textEdit.vue'
import adminSet from './page/adminSet.vue'
import explain from './page/explain.vue'

const routers = [{
		path: '/',
		component: login
	},{
		path: '/register',
		component: register
	}, {
		path: '/manage',
		name: 'manage',
		component: manage,
		children: [{
			path: '/',
			component: home,
			meta: [],
		}, {
			path: '/userList',
			component: userList,
			meta: ['数据管理', '用户列表'],
		},{
			path: '/orderList',
			component: orderList,
			meta: ['数据管理', '订单列表'],
		},{
			path: '/addGoods',
			component: addGoods,
			meta: ['添加数据', '添加商品'],
		},{
			path: '/textEdit',
			component: textEdit,
			meta: ['编辑', '文本编辑'],
		},{
			path: '/adminSet',
			component: adminSet,
			meta: ['设置', '管理员设置'],
		},{
			path: '/explain',
			component: explain,
			meta: ['说明', '说明'],
		}]
	}

]
export default routers

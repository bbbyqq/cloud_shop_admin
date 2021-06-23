//引入mockjs
import Mock from 'mockjs'
//使用mockjs模拟数据
const Random = Mock.Random;

// 登录接口
Mock.mock('/user/login', 'post', function(option) {
	let data = JSON.parse(option.body) // 此处得将option.body的值进行解构，不然获取不到对象里面的值
	if (data.userName === 'admin' && data.pass === 'admin') {
		return Mock.mock({
			status: 200,
			message: 'success'
		})
	} else {
		return Mock.mock({
			status: 0,
			message: 'error'
		})
	}
})

//用户列表搜索接口
Mock.mock('/user/search', 'post', function(option) {
	if (option.body) {
		return Mock.mock({
			status: 200,
			data: {
				"list": [{
					"id": Random.increment(),
					"date": Random.now('yyyy-MM-dd HH:mm:ss'), // 获取当前时间
					"name": "@cname", //名字为随机中文名字
					"sex|1": ["男", "女", "保密"], //性别是数组中的一个，随机的
					'address': "@county(true)", // 随机省市区
				}]
			}
		})
	} else {
		return Mock.mock({
			status: 0,
			message: "error"
		})
	}
})

// 用户列表渲染接口
Mock.mock('/user/list', 'get', {
	data: {
		"list|34": [ //生成|34个如下格式名字的数据
			{
				"id|+1": 1, //数字从当前数开始后续依次加一
				"date": Random.now('yyyy-MM-dd HH:mm:ss'), // 获取当前时间
				"name": "@cname", //名字为随机中文名字
				"sex|1": ["男", "女", "保密"], //性别是数组中的一个，随机的
				'address': "@county(true)", // 随机省市区
			}
		]
	}
})

// 订单列表渲染接口
Mock.mock('/order/list', 'get', {
	data: {
		"list": [{
				"orderId": '430000202103187376',
				"date": Random.now('yyyy-MM-dd HH:mm:ss'),
				"orderName": "HUAWEI Mate 40",
				"orderPrice": "4999.00",
				'orderState': "等待支付",
			},
			{
				"orderId": '430000202103187300',
				"date": Random.now('yyyy-MM-dd HH:mm:ss'),
				"orderName": "HUAWEI Mate 40 RS 保时捷",
				"orderPrice": "9999.00",
				'orderState': "支付超时",
			},
			{
				"orderId": '640000198504067918',
				"date": Random.now('yyyy-MM-dd HH:mm:ss'),
				"orderName": "HUAWEI MateBook 14 2020款",
				"orderPrice": "5999.00",
				'orderState': "支付超时",
			},
			{
				"orderId": '370000199109288787',
				"date": Random.now('yyyy-MM-dd HH:mm:ss'),
				"orderName": "HUAWEI MateBook D 14 锐龙版",
				"orderPrice": "5499.00",
				'orderState': "支付超时",
			},
			{
				"orderId": '410000198101273319',
				"date": Random.now('yyyy-MM-dd HH:mm:ss'),
				"orderName": "HUAWEI MateBook 13 2020 锐龙版",
				"orderPrice": "4899.00",
				'orderState': "支付成功",
			},
			{
				"orderId": '140000201901177412',
				"date": Random.now('yyyy-MM-dd HH:mm:ss'),
				"orderName": "HUAWEI MateBook D 15 锐龙版",
				"orderPrice": "5699.00",
				'orderState': "等待支付",
			},
			{
				"orderId": '440000197907238847',
				"date": Random.now('yyyy-MM-dd HH:mm:ss'),
				"orderName": "HUAWEI FreeBuds 3 无线耳机",
				"orderPrice": "799.00",
				'orderState': "支付超时",
			},
			{
				"orderId": '540000200103066443',
				"date": Random.now('yyyy-MM-dd HH:mm:ss'),
				"orderName": "HUAWEI FreeBuds Studio 无线头戴耳机",
				"orderPrice": "1299.00",
				'orderState': "支付成功",
			}
		]
	}
})

// 商品上传接口
Mock.mock('/goods/upload', 'post', function(option) {})

// 管理员设置接口
Mock.mock('/admin/list', 'get', {
	data: {
		"list": {
			"name": 'bbbyqq',
			"register_time": '2021-06-15 14:40',
			"admin_power": '管理员',
			"admin_id": '101999'
		}
	}
})

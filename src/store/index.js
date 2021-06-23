import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		// 不用 require 会被解析为字符串，使用require定义之后，就可以动态使用了
		avatarUrl: require('../assets/basicprofile.png')
	}
})

export default store

import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import routers from './routers'
import App from './App.vue'
import './api/mock.js' //引入mock.js
import axios from 'axios'
import store from './store/index.js'
import './assets/global.css'

Vue.prototype.$axios = axios
Vue.prototype.$store = store

Vue.use(ElementUI)
Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	routes: routers
})

new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
})

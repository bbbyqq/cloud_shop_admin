<template>
	<div>
		<div class="edit_container">
			<quill-editor ref="text" v-model="content" class="myQuillEditor" :options="editorOption"
				style="height: 500px;" />
		</div>
		<div class="edit_button">
			<el-button type="primary" @click="submit">提交</el-button>
		</div>
	</div>
</template>

<script>
	import {
		quillEditor
	} from 'vue-quill-editor'
	import 'quill/dist/quill.core.css'
	import 'quill/dist/quill.snow.css'
	import 'quill/dist/quill.bubble.css'
	export default {
		data() {
			return {
				content: '',
				editorOption: {
					placeholder: '编辑文章内容'
				},
			}
		},
		components: {
			quillEditor
		},
		methods: {
			submit() {
				console.log(this.$refs.text.value)
			}
		}
	}
</script>

<style scoped>
	.edit_container {
	    margin-bottom: 50px;
	}
	.edit_button {
		text-align: center;
	}
</style>

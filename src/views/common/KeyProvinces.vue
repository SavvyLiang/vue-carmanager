<template>
	<div class="keybord" v-show="keyProShow">
		<div>
			<span class="iconfont icon-display-l key-display" v-on:click="keyProvincesDisplay"></span>
		</div>
		<ul class="clearfix proKeyBord pro-key-w clearFloat">
			<li v-for="keyValue in provinces">
				<span @click="chooseKey(keyValue)">{{keyValue}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "keyProvinces",
		props: {
			keyProShow: {
				type: Boolean
			}
		},
		data: function() {
			return {
				provinces: ['京', '津', '冀', '鲁', '晋', '蒙', '辽', '吉', '黑', '沪', '苏', '浙', '皖', '闽', '赣', '豫', '鄂', '湘', '粤', '桂', '渝', '川', '贵', '云', '藏', '陕', '甘', '青', '琼', '新', '台', '宁', '使']
			}
		},
		methods: {
			keyProvincesDisplay : function() {
				this.$emit('update:keyProShow', false)
			},
			chooseKey(key) {
				this.$emit('chooseProvinces', key)
			}
		}
	}
</script>

<style>
</style>

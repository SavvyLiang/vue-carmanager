<template>
	<div class="keybord" v-show="keybordShow">
		<div>
			<span class="iconfont icon-display-l key-display" v-on:click="keyBordDisplay"></span>
		</div>
		<ul class="clearfix proKeyBord clearFloat">
			<li v-for="(keyValue, index) in keyBordDatas">
				<span @click="chooseKey(keyValue, index)" :class="unableSelect(index)">{{keyValue}}</span>
			</li>
			<li class="li-del" v-on:click="chooseKey('Del', keyBordDatas.length + 1)">
				<span class="iconfont icon-del"></span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "keyBord",
		props: {
			keybordShow: {
				type: Boolean
			},
			activeIndex: {
				type: Number
			}
		},
		data: function() {
			return {
				keyBordDatas: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'O', 'P', '学',
					'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', '领', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '港', '澳'
				],
			}
		},
		methods: {
			keyBordDisplay: function() {
				this.$emit('update:keybordShow', false)
			},
			chooseKey(key, index) {
				if (this.unableSelect(index) == '') {
					this.$emit('chooseKeyBord', key)
				}
			},
			unableSelect(index) {
				if (this.activeIndex == 1 && index < 10) {
					return "ikey-display";
				} else if (this.activeIndex > 1 && index == 17) {
					return "ikey-display";
				} else {
					return "";
				}
			}

		}
	}
</script>

<style>
</style>

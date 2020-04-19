<template>
	<div class="pageClass">
		<div class="header">停车缴费</div>
		<div class="main">
			<div class="carLicenseTitle">请输入车牌</div>
			<p class="newEnergy">新能源</p>
			<div class="carWap">
				<ul class="plateNumber" v-on:click="showKey">
					<li v-for="(plateNum, index) in plateDatas" :key="index" :class="{'pNum' : true, 'new' : index == 7, 'active' : plateNum.activeClass}">
						<span>{{plateNum.val}}</span>
					</li>
				</ul>
				<div class="btn" v-on:click="queryCarStayInfo">下一步</div>
				<!--<div class="h5"></div>-->
				<!--历史记录-->
				<div class="historyWap">
					<p class="title">输入的车牌历史记录</p>
					<ul class="history">
						<li v-for="(hisPlate) in hisItem" class="hisWord">
							{{hisPlate}}
						</li>
					</ul>
				</div>
				<!--历史记录-->
			</div>
			<input type="hidden" id="vehPlate" name="vehPlate">
		</div>
		<KeyProvinces @chooseProvinces="chooseProvinces" :keyProShow.sync="keyProShow" />
		<KeyBord @chooseKeyBord="chooseKeyBord" :keybordShow.sync="keybordShow" :activeIndex.sync="activeClassIndex" />
	</div>
</template>

<script>
	import KeyProvinces from '@/views/common/KeyProvinces.vue'
	import KeyBord from '@/views/common/KeyBord.vue'

	export default {
		name: "payIndex",
		data: function() {
			return {
				keyProShow: true,
				keybordShow: false,
				activeClassIndex: 0,
				hisItem: [],
				plateDatas: [{
						activeClass: true,
						val: ''
					},
					{
						activeClass: false,
						val: ''
					},
					{
						activeClass: false,
						val: ''
					},
					{
						activeClass: false,
						val: ''
					},
					{
						activeClass: false,
						val: ''
					},
					{
						activeClass: false,
						val: ''
					},
					{
						activeClass: false,
						val: ''
					},
					{
						activeClass: false,
						val: ''
					}
				]
			}
		},
		//用于数据初始化
		created: function() {
			if (localStorage.getItem("hisItem") != null) {
				this.hisItem = JSON.parse(localStorage.getItem("hisItem"));
			}

			this.hisItem.forEach(item => {
				console.log(item);
			});
		},
		methods: {
			queryCarStayInfo: function() {
				var carNumber = "";
				this.plateDatas.forEach(item => {
					carNumber = carNumber + item.val;
				});

				var carNumberSize = carNumber.length;
				if (!carNumber || carNumberSize < 6) {
					return;
				} else {
					sessionStorage.setItem('vehplate', carNumber);
					//查询车牌对应的停车记录
				}

				var carNumberArrs = new Array();
				if (localStorage.getItem("hisItem") != null) {
					carNumberArrs = JSON.parse(localStorage.getItem("hisItem"));
				}

				var carNumberIndex = this.inArray(carNumber, carNumberArrs);

				if (carNumberIndex > 0) { //查询记录已经存在了车牌 而且不在第一位 ，把车牌放到第一位
					carNumberArrs.splice(carNumberIndex, 1); //删除车牌
					carNumberArrs.unshift(carNumber); //在第一位添加车牌
				} else if (carNumberIndex < 0) { //车牌记录不存在
					if (carNumberArrs.length > 5) { //只显示6条记录
						carNumberArrs.pop(); //删除车牌
						carNumberArrs.unshift(carNumber); //在首位位添加车牌
					} else {
						carNumberArrs.unshift(carNumber); //在第一位添加车牌
					}
				}

				localStorage.setItem("hisItem", JSON.stringify(carNumberArrs));
				this.$router.push({
					path: '/payInfo'
				})
			},
			inArray(str, arrays) {
				for (let i = 0; i < arrays.length; i++) {
					if (arrays[i] == str) {
						return i;
					}
				}
				return -1;
			},
			showKey() {
				if (this.activeClassIndex > 0) {
					this.keybordShow = true;
				} else {
					this.keyProShow = true;
				}
			},
			chooseProvinces(val) {
				this.plateDatas[0].val = val;
				this.plateDatas[0].activeClass = false;
				this.plateDatas[1].activeClass = true;
				this.activeClassIndex = 1;
				this.keyProShow = false;
				this.keybordShow = true;
			},
			chooseKeyBord(val) {
				if (val == 'Del') {
					if (this.activeClassIndex < 7 || this.plateDatas[this.activeClassIndex].val === '') {
						this.plateDatas[this.activeClassIndex].activeClass = false;
						this.activeClassIndex = this.activeClassIndex - 1;
						this.plateDatas[this.activeClassIndex].val = "";
						this.plateDatas[this.activeClassIndex].activeClass = true;
					} else {
						this.plateDatas[this.activeClassIndex].val = "";
					}

					if (this.activeClassIndex == 0) {
						this.keyProShow = true;
						this.keybordShow = false;
					}

				} else {
					this.plateDatas[this.activeClassIndex].val = val;
					if (this.activeClassIndex < 7) {
						this.plateDatas[this.activeClassIndex].activeClass = false;
						this.activeClassIndex = this.activeClassIndex + 1;
						this.plateDatas[this.activeClassIndex].activeClass = true;
					}
				}
			}
		},
		components: {
			KeyProvinces,
			KeyBord
		}
	}
</script>

<style>
	* {
		background-color: #FFFFFF !important;
		font-size: 12px;
	}
</style>

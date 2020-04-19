<template>
	<div class="foot-tab">
		<ul class="foot-ul">
			<router-link to="/carIn">
				<li id="li_carIn">
					<span class="iconfont icon-carIn"></span>
					<span class="iconfont-span">进场</span>
				</li>
			</router-link>
			<router-link to="/payIndex">
				<li id="li_payment" class="foot-li-select">
					<span class="iconfont icon-payment"></span>
					<span class="iconfont-span">缴费</span>
				</li>
			</router-link>
			<router-link to="/record">
				<li id="li_record">
					<span class="iconfont icon-record"></span>
					<span class="iconfont-span">记录</span>
				</li>
			</router-link>
		</ul>
	</div>
</template>

<script>
</script>

<style>
</style>

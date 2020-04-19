<template>
  <div id="app">
    <router-view/>
	<MenuFooter/>
  </div>
</template>

<script>
	import MenuFooter from '@/views/common/MenuFooter.vue'
	
	export default {
	  name: 'App',
	  components: {
	    MenuFooter
	  }
	}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

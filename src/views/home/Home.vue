<template>
  <div>
		<div class="ho-hade">
			<ho-hade></ho-hade>
		</div>
		<div class="nei-r">
			<nei-r></nei-r>
		</div>
  </div>
</template>

<script>
	import hoHade from './hoHade.vue'
	import neiR from './neiR.vue'
	
export default {
  name: "Home",
	components:{
		hoHade,
		neiR,
	}
}
</script>

<style scoped>
	.ho-hade{ background-color: #1890FF; height: 6vh; }
	.nei-r{ background-color: #F2F2F2; height: 94vh; }
</style>
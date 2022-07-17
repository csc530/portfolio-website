<template>
	<section class="card">
		<header v-if="contains($slots,'header')" class="card-header-title">
			<slot id="header" name="header"/>
		</header>
		<div class="card-content">
			<slot/>
		</div>
		<footer v-if="footer" class="card-footer">
			<slot name="footer" />
		</footer>
	</section>
</template>

<style scoped>

</style>

<script lang="ts" setup>
	
	
	import {Slots} from "vue";
	
	const names = ['header', 'footer'];
	
	const {header, footer} = defineProps(['header', 'footer']);
	const contains = (obj:Slots,name: string) =>{
		console.log(obj[name]);
	return obj[name] !== undefined;
	}
</script>


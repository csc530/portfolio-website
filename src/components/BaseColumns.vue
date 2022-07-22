<template>
	<section class="columns">
		<div v-for="item in data">
			<component :is>
		</div>
	</section>
</template>

<script setup lang="ts">
	import {defineProps, } from "vue";
	
	const {dataType, data, components} = defineProps({
		dataType: Object,
		data: Array,
		components: String,
	});
	
	

</script>

<style scoped>
</style>
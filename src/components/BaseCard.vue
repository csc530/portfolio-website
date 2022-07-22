<template>
	<section class="card" :id="id">
		<header v-if="$slots.header" class="card-header-title">
			<slot id="header" name="header"/>
		</header>
		<div class="card-content">
			<slot/>
		</div>
		<footer v-if="$slots.footer" class="card-footer">
			<slot name="footer" />
		</footer>
	</section>
</template>

<style scoped>

</style>

<script lang="ts" setup>
	
	
	import {Slots} from "vue";
	
	const {id} = defineProps(['id']);
	
</script>


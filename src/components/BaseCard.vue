<template>
	<section class="card">
		<header v-if="$slots.header" class="card-header-title">
			<slot id="header" name="header" />
		</header>
		<div class="card-content">
			<slot />
		</div>
		
			<ul v-if="footerItems &&$slots.footer" class="card-footer">
				<li v-for="item in footerItems" class="card-footer-item">
				<slot id="footer" name="footer" :data="item" />
				</li>
			</ul>
			<footer v-else-if="$slots.footer" class="card-footer">
			<slot name="footer" />
		</footer>
	</section>
</template>

<style>
.card-content {
	padding-top: 0rem;
}
</style>

<script lang="ts" setup>


import { Slots } from "vue";

const props = defineProps<{
	footerItems?: any[];
}>();
console.dir(props.footerItems);

</script>


<template>
	<section class="columns">
		<div v-for="item in data">
			<component :is="component" v-if="component" v-bind="item">
				{{ item.display() }}
			</component>
			<slot v-bind="item" v-else />
		</div>
	</section>
</template>

<script lang="ts">
	import {defineComponent, defineProps, PropType,} from "vue";
	import Columnable from "@/models/columnContent";
	interface Props{
		data: Columnable[];
		component?: string;
	}
	const props = defineProps<Props>();
	export default defineComponent({
		props: {
			data: {
				type: Array as PropType<Columnable[]>,
				required: true,
			},
			component: {
				type: String,
			},
		},
	});
</script>

<style scoped>
</style>
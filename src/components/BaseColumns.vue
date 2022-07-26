<template>
	<h1>{{props.header.text}}</h1>
	<section class="columns" :class="bulma">
		<div v-for="item in data" class="column">
			<slot v-bind="item" v-if="$slots.default" />
			<component :is="component" v-else v-bind="item">
				{{ item.display() }}
			</component>
		</div>
	</section>
</template>

<script lang="ts" setup>
	import {defineComponent, defineProps, PropType,} from "vue";
	import {Columnable, ColumnHeader} from "@/models/columnContent";
	
	const props = defineProps({
		data: {
			type: Array as PropType<Array<Columnable>>,
			required: true,
		},
		component: {
			type: String,
		},
		bulma: {
			type: Array as PropType<string[]>,
			default: ['is-centered', 'is-multiline'],
		},
		header: {
			type: Object as PropType<ColumnHeader>,
		}
	});
	console.log(props.header);
	// export default defineComponent({
	// 	props: {
	// 		data: {
	// 			type: Array as PropType<Columnable[]>,
	// 			required: true,
	// 		},
	// 		component: {
	// 			type: String,
	// 		},
	// 		bulma: {
	// 			type: Array as PropType<string[]>,
	// 			default: ['is-centered', 'is-multiline'],
	// 		},
	// 	},
	// });
</script>

<style scoped>
</style>
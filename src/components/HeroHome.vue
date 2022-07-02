<template>
	
	
	<!-- Hero content: will be in the middle -->
	<main class="hero-body container has-text-centered is-flex-wrap-wrap is-flex-direction-column">
		<h1 class="title">{{ getTopicTitle(topics[currentTopic]) }}</h1>
		<p class="is-flex-grow-2 is-wrapped">
			<slot>{{ getTopicTxt(topics[currentTopic]) }}</slot>
		</p>
		
		<nav class="tabs is-boxed is-dark is-inverted has-text-centered is-fullwidth is-medium">
			<ul>
				<li v-for="(topic, index) in topics" :class="activeTopic(index)" @click="display(index)">
					<!--					todo: createApp functionality topics have TheNavbar active TODO something isHome esModuleInterop routing-->
					<a>{{ getTopicTitle(topic) }}</a>
				</li>
			</ul>
		</nav>
	</main>

</template>

<style scoped>
	
	.hero-foot li:hover {
		cursor          : pointer;
		backdrop-filter : invert(100%);
	}
</style>

<script lang="ts" setup>
	import {ref} from "vue";
	
	const props = defineProps({
		topics: {
			type: Array,
			required: true
		}
	});
	const currentTopic = ref(0);
	
	const display = (index: number) => {
		currentTopic.value = index;
	};
	function activeTopic(index: number) {
		return index === currentTopic.value ? 'has-text-weight-bold is-active' : '';
	}
	function getTopicTitle(topic: any) {
		if(typeof (topic) !== 'object')
			return;
		const {title, name} = topic;
		if(title)
			return title;
		else if(name)
			return name;
		else
			return Object.values(topic)[0];
	}
	function getTopicTxt(topic: any) {
		if(typeof (topic) !== 'object')
			return;
		const {txt} = topic;
		if(txt)
			return txt;
		else
			return Object.values(topic)[1];
	}

</script>

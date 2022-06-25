<template>
	<section class="hero is-success is-fullheight">
		<!-- Hero head: will stick at the top -->
		<header class="navbar hero-head ml-1 mr-1">
			<div class=" navbar-brand is-align-content-center is-flex">
				<p class="title m-auto"><strong >Christofer Cousins</strong></p>
				
				<div class="navbar-burger" data-target="navbarMenuHeroC">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
			
			<nav id="navbarMenuHeroC" class="navbar-menu navbar-end">
				<router-link v-for="router in $router.getRoutes()" :to="router.path" active-class="has-text-weight-bold"
				             class="navbar-item">
					{{ router.name }}
				</router-link>
			</nav>
		</header>
		
		<!-- Hero content: will be in the middle -->
		<main class="hero-body container has-text-centered is-flex-wrap-wrap is-flex-direction-column">
			<h1 class="title">{{ getTopicTitle(topics[currentTopic]) }}</h1>
			<p>
				<slot>{{ getTopicTxt(topics[currentTopic]) }}</slot>
			</p>
		</main>
		
		<!-- Hero footer: will stick at the bottom -->
		<footer class="hero-foot">
			<ul class="tabs is-boxed is-fullwidth container m-auto has-text-centered">
				<li v-for="(topic, index) in topics" :class="activeTopic(index)" @click="display(index)">{{
						getTopicTitle(topic)
					}}
				</li>
			</ul>
		</footer>
	</section>
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
		//TODO: Add dim to background and border of active tab
		return index === currentTopic.value ? 'has-text-weight-bold' : '';
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

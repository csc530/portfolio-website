<template>
	<section class="hero is-success is-fullheight">
		<!-- Hero head: will stick at the top -->
		<header class="navbar hero-head">
			<div class="navbar-brand">
				<a class="navbar-item">
					<img alt="Logo" src="https://bulma.io/images/bulma-type-white.png">
				</a>
				
				<div class="navbar-burger" data-target="navbarMenuHeroC">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
			
			<nav id="navbarMenuHeroC" class="navbar-menu navbar-end">
				<router-link v-for="router in $router.getRoutes()" :to="router.path" active-class="is-active"
				             class="navbar-item">
					{{ router.name }}
				</router-link>
				
				<span class="navbar-item">
					<a class="button is-success is-inverted">
						<span class="icon">
							<i class="fab fa-github"></i>
						</span>
							<span>Download</span>
					</a>
				</span>
			</nav>
		</header>
		
		<!-- Hero content: will be in the middle -->
		<main class="hero-body container has-text-centered is-flex-wrap-wrap is-flex-direction-column">
			<h1 class="title">{{ topics[currentTopic].name }}</h1>
			<!--			<h2 class="subtitle">{{ main.subtitle }}</h2>-->
			<p>
				<slot>{{ topics[currentTopic].value }}</slot>
			</p>
		</main>
		
		<!-- Hero footer: will stick at the bottom -->
		<footer class="hero-foot">
			<ul class="tabs is-boxed is-fullwidth container m-auto has-text-centered">
				<li v-for="(topic, index) in topics" @click="display(index)">{{ topic.name }}</li>
			</ul>
		</footer>
	</section>
</template>

<script lang="ts" setup>
import {defineProps, ref} from "vue";

const props = defineProps({
	topics: {
		type: Array,
		required: true,
		default: () => []
	}
});
const currentTopic = ref(0);
const display = (index: number) => {
	console.log(index);
	currentTopic.value = index;
};

</script>

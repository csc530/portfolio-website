<template>
	<!-- Hero head: will stick at the top -->
	<header class="navbar hero-head ml-1 mr-1">
		<div class=" navbar-brand is-align-content-center is-flex">
			<p class="title m-auto"><strong>Christofer Cousins</strong></p>
			
			<div class="navbar-burger" data-target="navbarMenuHeroC">
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
		
		<nav id="navbarMenuHeroC" class="navbar-menu navbar-end">
			<router-link v-for="router in $router.getRoutes().filter(route => route.name !== '⓸⓪⓸')" :to="router.path"
			             class="navbar-item">
				{{ router.name }}
			</router-link>
		</nav>
	</header>
</template>

<script setup>
	import {useRouter} from 'vue-router';
	
	const router = useRouter();
</script>

<style scoped></style>
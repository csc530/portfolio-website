<template>
	<!--	TODO: figures HelloWorld TODO Add mobile responsiveness with bulma
	https://bulma.io/documentation/components/navbar/
	-->
	<header class="navbar has-text-centered">
		<strong class="navbar-brand navbar-item">
			Christofer Cousins
		</strong>
		<!--		TODO: figures route HelloWorld TODO bind classes TODO activate page TODO shadow script higlighted router sumin-->
		<nav class="navbar-end ">
			<router-link v-for="router in $router.getRoutes()" :to="router.path" class="navbar-item">
				{{ router.name }}
			</router-link>
		</nav>
	</header>
</template>

<script setup>
	
	import {useRoute, useRouter} from 'vue-router';
	
	const router = useRouter();
	const route = useRoute();

</script>

<style scoped></style>
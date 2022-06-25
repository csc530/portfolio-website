<template>
	<!--	TODO: figures HelloWorld TODO Add mobile responsiveness with bulma
	https://bulma.io/documentation/components/navbar/
	-->
	<nav class="navbar">
		<!--		TODO: figures route HelloWorld TODO bind classes TODO activate page TODO shadow script higlighted router sumin-->
		<router-link v-for="router in $router.getRoutes()" :to="router.path" class="navbar-item">
			{{ router.name }}
		</router-link>
	</nav>
</template>

<script setup>

import {useRoute, useRouter} from 'vue-router';

const router = useRouter()
const route = useRoute()

</script>

<style scoped></style>
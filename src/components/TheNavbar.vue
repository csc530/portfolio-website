<template>
	<!--	TODO: figures HelloWorld TODO Add mobile responsiveness with bulma
	https://bulma.io/documentation/components/navbar/
	-->
	<nav class="navbar">
		<!--		TODO: figures route HelloWorld TODO bind classes TODO activate page TODO shadow script higlighted router sumin-->
		<router-link class="navbar-item " to="/">Home</router-link>
		<router-link class="navbar-item" to="/about">About</router-link>
		<router-link class="navbar-item" to="projects">Projects</router-link>
		<router-link to="contact">Contact Me</router-link>
	</nav>
</template>

<script setup>

name = 'navbar';
import {useRoute, useRouter} from 'vue-router';

const router = useRouter()
const route = useRoute()

</script>

<style scoped></style>
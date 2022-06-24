<template>
	<!--	TODO: figures HelloWorld TODO Add mobile responsiveness with bulma
	https://bulma.io/documentation/components/navbar/
	-->
	<nav class="navbar">
		<router-link to="/" class="navbar-item">Home</router-link>
		<router-link to="/about" class="navbar-item">About</router-link>
		<router-link to="projects" class="navbar-item">Projects</router-link>
		<router-link to="contact">Contact Me</router-link>
	</nav>
</template>

<script setup>
import {ref} from 'vue';

const Hi = ref('Hello World!');
</script>

<style scoped></style>
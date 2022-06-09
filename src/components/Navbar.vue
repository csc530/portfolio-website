<template>
	<nav>
		<router-link to="/" class="nav-link">Home</router-link>
		<router-link to="/about" class="nav-link">About</router-link>
	</nav>
</template>

<script setup>
	import {ref} from 'vue';
	
	const Hi = ref('Hello World!');
</script>

<style scoped></style>
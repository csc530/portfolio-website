<template>
	<the-navbar />
	<router-view />
	<the-footer />
</template>


<style>
</style>

<script lang="ts" setup>
	import TheNavbar from "@/components/TheNavbar.vue";
	import {useRoute, useRouter} from 'vue-router';
	import {computed} from "vue";
	import TheFooter from "@/components/TheFooter.vue";
	
	const router = useRouter();
	const route = useRoute();
	
	const isHome = computed(() => {
		return route.path === '/';
	});
</script>
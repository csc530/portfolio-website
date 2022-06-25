<template>
	<the-navbar v-if="!isHome" />
	<router-view class="content" />
	<footer v-if="!isHome" />
</template>



<style>
</style>

<script lang="ts" setup>
import TheNavbar from "@/components/TheNavbar.vue";
import {useRoute, useRouter} from 'vue-router';
import {computed} from "vue";

const router = useRouter();
const route = useRoute();

const isHome = computed(() => {
	return route.path === '/';
});
</script>
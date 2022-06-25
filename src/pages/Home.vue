<template>
	<hero-home :topics="topics"></hero-home>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import HeroHome from '@/components/HeroHome.vue';

@Options({components: {HeroHome}})
export default class Home extends Vue {
	///todo: maybe add firebase access to load txt for all the topics of me
	topics = [
		{
			name: 'Overview',
			path: '/'
		},
		{
			name: 'About',
			path: '/about'
		},
		{
			name: 'Contact',
			path: '/contact'
		}
	];
}
</script>

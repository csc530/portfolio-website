<template>
	<hero-home :topics="topics"></hero-home>
</template>

<style lang="sass"></style>

<script lang="ts">
	import {Options, Vue} from "vue-class-component";
	import HeroHome from '@/components/HeroHome.vue';
	import Topic from "@/models/topic";
	
	const christofer: Topic = {
		title: 'Christofer Cousins',
		content: `Hey I'm Christofer Cousins, I am a software developer and I love to code. I am currently working at the OPS as a web developer assistant.I enjoy problem solving (probably the reason why I love programming), playing games, learning, and volunteering with a local food bank, Umbrella of Hope.`,
	};
	const student: Topic = {
		title: 'Student',
		content: 'I\'m currently studying at Lakehead Georgian in the Honours Bachelor of Science (Computer Science) program',
		img: 'lakehead-georgian.png',
	};
	const developer = {
		title: 'Aspiring Full-Stack Developer',
		content: 'I am an excellent programmer and developer if I do say so myself😎. With experience of various languages and core programming concepts. Right now, I am looking for a job as a full-stack developer.',
		img: 'programmer-typing.gif',
	};
	const projects = {
		title: 'Projects',
		content: 'more project work available upon request',
		img: 'project.jpg',
	};
	
	@Options({components: {HeroHome}})
	export default class Home extends Vue {
		///todo: maybe add firebase access to load txt for all the topics of me
		topics: Topic[] = [
			christofer,
			student,
			developer,
		];
	}
</script>

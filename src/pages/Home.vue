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
			title: 'Christofer Cousins',
			txt: `Hey I'm Christofer Cousins, I am a software developer and I love to code. I am currently working on a project called "The-Maze".`
		},
		{
			title: 'Student',
			txt: 'Lakehead Georgian Honours Bachelor of Science (Computer Science)',
			img: 'lakehead-georgian.png',
			link: '/about'
		},
		{
			title: 'Aspiring Full-Stack Developer',
			txt: 'I currently have skills in web and desktop application development. I am working on my android applications and data structures.',
			img: 'programmer-typing.gif',
			link: '/about'
		},
		{
			title: 'Projects',
			txt: 'more project work available upon request',
			items: [
				{name: 'Crypto.com Exchange API - JavaScript', link: 'https://github.com/csc530/crypto.com-exhcange-API'},
				{
					name: "Nasa's Astronmy picture of the Day application - Java",
					link: 'https://github.com/csc530/advOOP-assignment2'
				},
				{name: 'Content managment website - PHP', link: 'https://github.com/csc530/website-maker'},
				{name: 'Family tree app - Kotlin', link: 'https://csc530.github.io/Family-Tree/'},
			],
			img: 'project.jpg',
		},
		{
			title: 'A picture of me😃',
			alt: 'A photo of me',
			src: 'portrait.jpg',
			link: '/about'
		},
	];
}
</script>

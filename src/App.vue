<template>
	<the-navbar />
	<main class="hero-body container is-flex-wrap-wrap is-flex-direction-column content">
		<router-view />
	</main>
	<the-footer />
	✝️🧠🍁👽
</template>


<style lang="sass">
	// Import a Google Font
	@import url('https://fonts.googleapis.com/css?family=Nunito:400,700')
	
	// Set your brand colors
	/* SCSS HEX */
	$persian-red: #C53230FF
	$snow: #FCF7F8FF
	$light-gray: #CED3DCFF
	$teal-blue: #4E8098FF
	$dark-purple: #241623FF
	$ultra-red: #FF6978FF
	$baby-powder: #FFFCF9FF
	$celeste: #B1EDE8FF
	$eggplant: #6D435AFF
	$black-coffee: #352D39FF
	
	/* SCSS Gradient */
	$gradient-top: linear-gradient(0deg, #C53230FF, #FCF7F8FF, #CED3DCFF, #4E8098FF, #241623FF)
	$gradient-right: linear-gradient(90deg, #C53230FF, #FCF7F8FF, #CED3DCFF, #4E8098FF, #241623FF)
	$gradient-bottom: linear-gradient(180deg, #C53230FF, #FCF7F8FF, #CED3DCFF, #4E8098FF, #241623FF)
	$gradient-left: linear-gradient(270deg, #C53230FF, #FCF7F8FF, #CED3DCFF, #4E8098FF, #241623FF)
	$gradient-top-right: linear-gradient(45deg, #C53230FF, #FCF7F8FF, #CED3DCFF, #4E8098FF, #241623FF)
	$gradient-bottom-right: linear-gradient(135deg, #C53230FF, #FCF7F8FF, #CED3DCFF, #4E8098FF, #241623FF)
	$gradient-top-left: linear-gradient(225deg, #C53230FF, #FCF7F8FF, #CED3DCFF, #4E8098FF, #241623FF)
	$gradient-bottom-left: linear-gradient(315deg, #C53230FF, #FCF7F8FF, #CED3DCFF, #4E8098FF, #241623FF)
	$gradient-radial: radial-gradient(#C53230FF, #FCF7F8FF, #CED3DCFF, #4E8098FF, #241623FF)
	
	// Update Bulma's global variables
	$family-sans-serif: "Nunito", sans-serif
	$primary: $persian-red
	$info: $teal-blue
	
	// Update some of Bulma's component variables
	$body-background-color: $celeste
	$control-border-width: 2px
	
	// Import only what you need from Bulma
	@import "bulma/sass/utilities/_all.sass"
	@import "bulma/sass/base/_all.sass"
	@import "bulma/sass/elements/button.sass"
	@import "bulma/sass/elements/container.sass"
	@import "bulma/sass/elements/title.sass"
	@import "bulma/sass/form/_all.sass"
	@import "bulma/sass/components/navbar.sass"
	@import "bulma/sass/layout/hero.sass"
	@import "bulma/sass/layout/section.sass"
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
	console.dir(import.meta);
</script>
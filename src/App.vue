<template>
	<the-navbar />
	<router-view />
	<the-footer />
</template>


<style lang="sass">
	// Import a Google Font
	@import url('https://fonts.googleapis.com/css?family=Nunito:400,700')
	
	// Set your brand colors
	/* SCSS HEX */
	$persian-red: #c53230ff
	$snow: #fcf7f8ff
	$light-gray: #ced3dcff
	$teal-blue: #4e8098ff
	$dark-purple: #241623ff
	
	/* SCSS Gradient */
	$gradient-top: linear-gradient(0deg, #c53230ff, #fcf7f8ff, #ced3dcff, #4e8098ff, #241623ff)
	$gradient-right: linear-gradient(90deg, #c53230ff, #fcf7f8ff, #ced3dcff, #4e8098ff, #241623ff)
	$gradient-bottom: linear-gradient(180deg, #c53230ff, #fcf7f8ff, #ced3dcff, #4e8098ff, #241623ff)
	$gradient-left: linear-gradient(270deg, #c53230ff, #fcf7f8ff, #ced3dcff, #4e8098ff, #241623ff)
	$gradient-top-right: linear-gradient(45deg, #c53230ff, #fcf7f8ff, #ced3dcff, #4e8098ff, #241623ff)
	$gradient-bottom-right: linear-gradient(135deg, #c53230ff, #fcf7f8ff, #ced3dcff, #4e8098ff, #241623ff)
	$gradient-top-left: linear-gradient(225deg, #c53230ff, #fcf7f8ff, #ced3dcff, #4e8098ff, #241623ff)
	$gradient-bottom-left: linear-gradient(315deg, #c53230ff, #fcf7f8ff, #ced3dcff, #4e8098ff, #241623ff)
	$gradient-radial: radial-gradient(#c53230ff, #fcf7f8ff, #ced3dcff, #4e8098ff, #241623ff)
	
	// Update Bulma's global variables
	$family-sans-serif: "Nunito", sans-serif
	$primary: $persian-red
	$info: $teal-blue
	$body-background-color: $primary
	
	// Update some of Bulma's component variables
	$body-background-color: $snow
	$control-border-width: 2px
	$input-border-color: transparent
	$input-shadow: none
	
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
</script>
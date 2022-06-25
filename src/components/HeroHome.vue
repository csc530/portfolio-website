<template>
	<section class="hero is-success is-fullheight">
		<!-- Hero head: will stick at the top -->
		<header class="navbar hero-head">
			<div class="navbar-brand">
				<a class="navbar-item">
					<img alt="Logo" src="https://bulma.io/images/bulma-type-white.png">
				</a>
				<div class="navbar-burger" data-target="navbarMenuHeroC">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
			<nav id="navbarMenuHeroC" class="navbar-menu navbar-end">
				<a class="navbar-item is-active">Home</a>
				<a class="navbar-item">Examples</a>
				<a class="navbar-item">Documentation</a>
				<span class="navbar-item">
					<a class="button is-success is-inverted">
						<span class="icon">
							<i class="fab fa-github"></i>
						</span>
							<span>Download</span>
					</a>
				</span>
			</nav>
		</header>
		
		<!-- Hero content: will be in the middle -->
		<main class="hero-body container has-text-centered is-flex-wrap-wrap is-flex-direction-column">
			<h1 class="title">{{ title }}</h1>
			<h2 class="subtitle">{{ subtitle }}</h2>
			<p>
				<slot>{{ txt }}</slot>
			</p>
		</main>
		
		<!-- Hero footer: will stick at the bottom -->
		<footer class="hero-foot">
			<ul class="tabs is-boxed is-fullwidth container m-auto">
				<li><a>Overview</a></li>
				<li><a>Modifiers</a></li>
				<li><a>Grid</a></li>
				<li><a>Elements</a></li>
				<li><a>Components</a></li>
				<li><a>Layout</a></li>
			</ul>
		</footer>
	</section>
</template>

<script lang="ts" setup>
import {defineProps} from "vue";

const props = defineProps({
	title: String,
	subtitle: String,
	txt: String
});

</script>

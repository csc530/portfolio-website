<template>
	<!-- Hero footer: will stick at the bottom -->
	<footer class="hero-foot columns is-dark">
		<ul class="columns is-multiline">
			<li v-for="link in links">
				<a :href="link.href">
					<i v-if="link.icon" :class="link.icon"></i>
				</a>
			</li>
		</ul>
	</footer>
</template>

<script setup>
	const links = [
		{
			href: '#',
			icon: 'fas fa-home'
		},
		{
			href: '#',
			icon: 'fas fa-user'
		},
		{
			href: '#',
			icon: 'fas fa-envelope'
		},
		{
			href: '#',
			icon: 'fas fa-phone'
		},
		{
			href: '#',
			icon: 'fas fa-map-marker-alt'
		}
	];
	
</script>

<style scoped>

</style>
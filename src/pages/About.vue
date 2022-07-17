<template>
	<main class="container m-auto content">
		<section class="content">
			<h1 class="title">About</h1>
			<p>Learn a little more about me and such yadda yadda.</p>
		</section>
		<section class="columns">
			<article class="column">
			<base-card>
				<template #header>
					<h2 class="title card-header-title">Education</h2>
				</template>
				<p>
					<strong>Honours Bachelor of Science (Computer Science)</strong>
					<br>
					<a href="https://www.lakehead.ca/">Lakehead University</a>
					&
					<a href="https://www.georgiancollege.ca/">Georgian College</a>
					<br>
					<small>GPA: 86.57%</small>
				</p>
			</base-card>
			</article>
			<section class="column card">
				<h2 class="title card-header-title">Hobbies &amp; Interests</h2>
				<ul>
					<li>Programming</li>
					<li>Film Critique</li>
					<li>Gaming</li>
					<li>Cooking</li>
				</ul>
			</section>
		</section>
		<section>
			<h2 class="title">Experience</h2>
			<ul class="list">
				<li class="column">
					<strong>Software Developer</strong>
					<br>
					<a href="https://www.lakehead.ca/">Lakehead University</a>
					<br>
					<small>
						<strong>Position:</strong> Software Developer
						<br>
						<strong>Duration:</strong> 2019 - Present
					</small>
				</li>
			</ul>
		</section>
	</main>
</template>
<style scoped>

</style>
<script setup>
	import BaseCard from '@/components/BaseCard';
	
	name = 'About';
</script>


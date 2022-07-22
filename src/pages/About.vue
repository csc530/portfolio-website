<template>
	<section class="content">
		<h1 class="title">About</h1>
		<p>Learn a little more about me and such yadda yadda.</p>
	</section>

	
		<base-card>
			<template #header >
				<h2>{{ header }}</h2>
			</template>
			<p>{{ content }}</p>
			<template #footer >
				<p>{{ footer }}</p>
			</template>
		</base-card>
	<!--		<section class="columns">-->
	<!--			<article class="column">-->
	<!--			<base-card>-->
	<!--				<template #header>-->
	<!--					<h2 class="title card-header-title">Education</h2>-->
	<!--				</template>-->
	<!--				<p>-->
	<!--					<strong>Honours Bachelor of Science (Computer Science)</strong>-->
	<!--					<br>-->
	<!--					<a href="https://www.lakehead.ca/">Lakehead University</a>-->
	<!--					&-->
	<!--					<a href="https://www.georgiancollege.ca/">Georgian College</a>-->
	<!--					<br>-->
	<!--					<small>GPA: 86.57%</small>-->
	<!--				</p>-->
	<!--			</base-card>-->
	<!--			</article>-->
	<!--			<article class="column">-->
	<!--			<base-card>-->
	<!--			<template #header>-->
	<!--				<h2 class="title card-header-title">Hobbies &amp; Interests</h2>-->
	<!--				</template>-->
	<!--				<ul>-->
	<!--					<li>Programming</li>-->
	<!--					<li>Film Critique</li>-->
	<!--					<li>Gaming</li>-->
	<!--					<li>Cooking</li>-->
	<!--				</ul>-->
	<!--			</base-card>-->
	<!--			</article>-->
	<!--		</section>-->
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
</template>
<style scoped>

</style>
<script setup>
	import BaseCard from "../components/BaseCard.vue";
	import BaseColumns from '../components/BaseColumns';
	
	const b = Object.create(BaseCard);
	const props = [b, 'base-card', '<input type="text">'];
</script>


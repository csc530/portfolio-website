<template>
	<Navbar />
	<router-view />
</template>

<!-- 
  Old portfolio site useful txt information
  var express = require('express');
// eslint-disable-next-line new-cap
var router = express.Router();

/* GET home page. */
router.get('/', async function (req, res) {
	const options = {
		title: 'Christofer Cousins',
		student: {
			title: 'Student',
			txt: 'Lakehead Georgian Honours Bachelor of Science (Computer Science)',
			img: 'lakehead-georgian.png',
			link: '/about'
		},
		developer: {
			title: 'Aspiring Full-Stack Developer',
			txt: 'I currently have skills in web and desktop application development. I am working on my android applications and data structures.',
			img: 'programmer-typing.gif',
			link: '/about'
		},
		project: {
			title: 'Projects',
			txt: 'more project work available upon request',
			items: [
				{name: 'Crypto.com Exchange API - JavaScript', link: 'https://github.com/csc530/crypto.com-exhcange-API'},
				{name: "Nasa's Astronmy picture of the Day application - Java", link: 'https://github.com/csc530/advOOP-assignment2'},
				{name: 'Content managment website - PHP', link: 'https://github.com/csc530/website-maker'},
				{name: 'Family tree app - Kotlin', link: 'https://csc530.github.io/Family-Tree/'},
			],
			img: 'project.jpg',
		},
		photo: {
			title: 'A picture of me😃',
			alt: 'A photo of me',
			src: 'portrait.jpg',
			link: '/about'
		},
	};
	res.render('index', options);
});

module.exports = router;

 -->

<style>
#app {
	font-family             : Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing  : antialiased;
	-moz-osx-font-smoothing : grayscale;
	text-align              : center;
	color                   : #2C3E50;
}

nav {
	padding : 30px;
}

nav a {
	font-weight : bold;
	color       : #2C3E50;
}

nav a.router-link-exact-active {
	color : #42B983;
}
</style>
<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import HelloWorld from './components/HelloWorld.vue';
</script>
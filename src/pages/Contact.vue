<template>
	<h1>Hit me up!</h1>
	<form v-if="!loading" accept-charset="UTF-8" action="" autocomplete="on" enctype="text/plain" method="post"
	      name="contactForm"
	      @submit="submit">
		<label class="label" for="from">From:
			<input id="from" v-model="name" class="input" name="from" placeholder="Koryn Kowalski" required
			       title="Your name" @change="onChange"
			       type="text" /></label>
		<label class="label" for="email">Email:
			<input id="email" v-model="email" class="input" name="email" placeholder="koolPenguin@gmail.com" required
			       title="Your email"
			       type="email" /></label>
		<label class="label" for="subject">Subject:
			<input id="subject" v-model="subject" class="input" name="subject" placeholder="Hey, How are you?" required
			       type="text" /></label>
		<label class="label" for="message">Message:
			<textarea id="message" v-model="msg" class="textarea" name="message"
			          placeholder="I love your website and wanted to know how you built it..."
			          required></textarea></label>
		<input class="input button" type="submit" value="Send" />
	</form>
	<loading v-else></loading>
</template>
<style scoped>
</style>
<script setup lang="ts">
	import Email from '../models/Email';
	import {ref} from 'vue';
	import router from '@/router';
	import {EmailJSResponseStatus} from '@emailjs/browser';
	import {$ref} from 'vue/macros';

	const name = $ref<string>('');
	const email = $ref<string>('');
	const msg = $ref<string>('');
	const subject = $ref<string>('');
	
	let loading = ref(false);
	const sentSuccess = (response: EmailJSResponseStatus) => {
		loading.value = false;
		console.log(response);
		router.push(router.resolve('success'));
	};
	const sendFailure = (error: any) => {
		loading.value = false;
		console.log(error);
	};
	const submit = () => {
		loading.value = true;
		const response = Email.sendEmail(email, name, subject, msg);
		response.then(sentSuccess, sendFailure);
	};
	
	const onChange = (newValue: string) => console.log(newValue);
</script>
<template>
	<h1>Hit me up!</h1>
	<form accept-charset="UTF-8" method="post" action="" @submit="submit" enctype="text/plain" name="contactForm"
		autocomplete="on">
		<label class="label" for="from">From:
			<input v-model="name" type="text" name="from" id="from" required class="input"
			placeholder="Koryn Kowalski"
				title="Your name" /></label>
		<label class="label" for="email">Email:
			<input type="email" v-model="email" name="email" id="email" required class="input" placeholder="koolPenguin@gmail.com"
				title="Your email" /></label>
		<label for="subject" class="label">Subject:
			<input type="text" name="subject" class="input" id="subject" required v-model="subject"
				placeholder="Hey, How are you?" /></label>
		<label for="message" class="label">Message:
			<textarea name="message" v-model="msg" id="message" required class="textarea"
				placeholder="I love your website and wanted to know how you built it..."></textarea></label>
		<input type="submit" value="Send" class="input button" />
	</form>
</template>

<script setup lang="ts">
import Email from '../models/Email';
import { reactive, ref } from 'vue';
import { $ref } from 'vue/macros';

const name = ref<string>('');
const email = ref<string>('');
const msg = ref<string>('');
const subject = ref<string>('');

const submit = () => Email.sendEmail(email.value, name.value, subject.value, msg.value);
</script>

<style scoped>
</style>
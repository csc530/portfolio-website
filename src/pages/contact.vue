<template>
	<h1>Hit me up!</h1>
	<form accept-charset="UTF-8" method="post" action="" enctype="text/plain" name="contactForm">
		<label class="label" for="from">From:
			<input type="text" name="from" id="from" required class="input" /></label>
		<label for="subject" class="label">Subject:
			<input type="text" name="subject" class="input" id="subject" required /></label>
		<label for="message" class="label">Message:
			<textarea name="message" id="message" required class="textarea"></textarea></label>
		<input type="submit" value="Send" class="input button" />
	</form>
</template>

<script setup>
// TODO: look up how to use forms in Vue (https://vuejs.org/guide/essentials/forms.html)
</script>

<style scoped>

</style>
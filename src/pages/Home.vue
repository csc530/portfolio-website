<template>
	<hero-home></hero-home>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import HeroHome from '@/components/HeroHome.vue';

@Options({components: {HeroHome}})
export default class Home extends Vue {
}
</script>

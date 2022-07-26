<template>
	<section class="content">
		<h1 class="title">About</h1>
		<p>Learn a little more about me and such yadda yadda.</p>
	</section>
	<base-columns v-bind:data="aboutMe">
		<template #default="{title,content,list}">
			<base-card>
				<template v-slot:header>
					<h2>{{ title }}</h2>
				</template>
				<p v-if="content" v-html="content" />
				<ul v-if="list">
					<li v-for="item in list">
						<p>{{ item }}</p>
					</li>
				</ul>
			</base-card>
		</template>
	</base-columns>
	<base-columns :data="employment" :header="Employment">
		<template #default="{title,tasks,address}">
			<base-card>
				<template v-slot:header>
					<h2>{{ title }}</h2>
				</template>
				
			</base-card>
		</template>
	</base-columns>
</template>

<style scoped>

</style>
<script setup lang="ts">

	import BaseCard from "../components/BaseCard.vue";
	import BaseColumns from '@/components/BaseColumns.vue';
	import Columnable, { ColumnHeader} from '../models/columnContent';
	const Employment:ColumnHeader={
		text:"employment",
		level: 3
	};
	interface AboutColumn extends Columnable {
		title: string;
		link?: string[] | Record<string, string>;
		linkText?: string[];
		content?: string;
		list?: string[];
		footer?: string;
	}
	
	interface EmploymentColumn extends Columnable {
		title: string;
		link?: string[] | Record<string, string>;
		tasks: string[];
		address: string,
		term: [string, string?]
	}
	
	const getDate = (date: string): string => Date.parse(date).toLocaleString();
	
	const tommyHilfiger: EmploymentColumn = {
		title: "Stock Associate",
		address: 'Tommy Hilfiger, Mississauga, ON',
		tasks: ['Educated and trained new hires on company policies and procedures', 'Inspected incoming and outgoing shipments to verify accuracy and prevent errors.', 'Collaborated with team members to ensure correct products were delivered on time'],
		display: function(): string {
			return `${this.tasks.join()}`;
		},
		term: ['']
	};
	const ops: EmploymentColumn = {
		title: "Ontario Public Service: Land and Resource Cluster",
		display: function(): string {
			throw new Error("Function not implemented.");
		},
		tasks: [],
		address: "",
		term: [getDate('2019-10-25')]
	};
	const education: AboutColumn = {
		title: 'Education',
		content: 'Honours Bachelor of Science (Computer Science)<br/>GPA: 86.57%',
		link: {
			program: 'https://www.lakeheadgeorgian.ca/programs/computer-science/',
			university: 'https://www.lakeheadgeorgian.ca'
		},
		display: function() {
			return this.toString();
		}
	};
	const hobbies: AboutColumn = {
		title: 'Hobbies & Interests',
		list: ['Programming', 'Film Critique', 'Gaming', 'Cooking'],
		display: function(): string {
			throw new Error("Function not implemented.");
		}
	};
	const aboutMe: Columnable[] = [education, hobbies,];
	const employment: Columnable[] = [tommyHilfiger, ops]
</script>


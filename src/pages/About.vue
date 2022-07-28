<template>
	<section class="content">
		<h1 class="title">All about me</h1>
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
	<base-columns :data="employment" :header="employmentHeader" >
		<template #default="{title,tasks,address, term}">
			<base-card :footer-items="[term.join(' - '),address,]">
				<template v-slot:header>
					<h2>{{ title }}</h2>
				</template>
				<ul v-if="tasks">
					<li v-for="task in tasks">
						{{ task }}
					</li>
				</ul>
				<template #footer="{data}">
					<time v-if="data.includes(' - ')">{{ data}}</time>
					<address v-else>{{ data }}</address>
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
	const employmentHeader:ColumnHeader={
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
	
	
	const tommyHilfiger: EmploymentColumn = {
		title: "Stock Associate",
		address: 'Tommy Hilfiger, Mississauga, ON',
		tasks: ['Educated and trained new hires on company policies and procedures', 'Inspected incoming and outgoing shipments to verify accuracy and prevent errors.', 'Collaborated with team members to ensure correct products were delivered on time'],
		display: function(): string {
			return `${this.tasks.join()}`;
		},
		term: ['2019-10-25','present']
	};
	const ops: EmploymentColumn = {
		title: "Ontario Public Service: Land and Resource Cluster",
		display: function(): string {
			throw new Error("Function not implemented.");
		},
		tasks: [],
		address: "",
		term: ['2022-05-16', '2022-09-02']
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
	const aboutMe: AboutColumn[] = [education, hobbies,];
	const employment: EmploymentColumn[] = [tommyHilfiger, ops]
</script>


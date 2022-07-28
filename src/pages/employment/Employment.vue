<template>
	<h1>My employment History</h1>
	<base-columns :data="employment">
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
					<time v-if="data.includes(' - ')">{{ data }}</time>
					<address v-else>{{ data }}</address>
				</template>
			</base-card>
		</template>
	</base-columns>
</template>

<style scoped>

</style>
<script lang="ts" setup>
	import BaseCard from '@/components/BaseCard.vue';
	import Columnable from "@/models/columnContent";
	import BaseColumns from "@/components/BaseColumns.vue";
	
	
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
		term: ['2019-10-25', 'present']
	};
	const ops: EmploymentColumn = {
		title: "Ontario Public Service: Land and Resource Cluster",
		display: function(): string {
			throw new Error("Function not implemented.");
		},
		tasks: [
			'Managed and created multiple sites with Microsoft SharePoint and WordPress',
			'Reviewed intranet web analytics and provided insights into the site’s performance',
			'Lead a project to \'revamp\' the intranet to improve user experience and accessibility',
			'Created and presented reports of web analytics and project progress',
		],
		address: "99 Wellesley St, Toronto, ON",
		term: ['2022-05-16', '2022-09-02']
	};
	
	const employment: EmploymentColumn[] = [tommyHilfiger, ops]
</script>

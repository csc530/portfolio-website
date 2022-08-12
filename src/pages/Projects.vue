<template>
	<base-columns :data="publicRepos" :header="{ text: 'Github Projects', level: 2 }"
		:bulma="['is-centered', 'is-multiline']">
		<template v-slot="item">
			<base-card>
				<template #header>
					<a :href="item.url" target="_blank">
						<h2>{{ item.name }}</h2>
					</a>
				</template>
				<p>{{ item.description }}</p>
				<template #footer="item">
					<p>{{ item.stars }}</p>
				</template>
			</base-card>
		</template>
	</base-columns>
	<!--	Columns of the private repos-->
	<base-columns :data="privateRepos" :header="{ text: 'Private Projects & school work', level: 2 }"
		:bulma="['is-centered', 'is-multiline']">
		<template v-slot="item">
			<base-card>
				<template #header>
					<a :href="item.url" target="_blank">
						<h2>{{ item.name }}</h2>
					</a>
				</template>
				<p>{{ item.description }}</p>
			</base-card>
		</template>
	</base-columns>
</template>
<style scoped>
</style>
<script lang="ts" setup>
/// Octokit.js	// https://github.com/octokit/core.js#readme
import { Octokit } from "@octokit/core";
import BaseColumns from "@/components/BaseColumns.vue";
import { ref } from "vue";
import Columnable from "@/models/columnContent";
import BaseCard from "@/components/BaseCard.vue";
import usersRepos = namespace.UsersRepos;
import { firestore } from "../models/db";
//todo: get repos doesn't work in build
const octokit = new Octokit({ auth: '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' });
const publicRepos = ref<Columnable[]>([]);
const privateRepos = ref<Columnable[]>([]);
/*get public and private repos from GitHub; pre-mount*/

const toColumns = (repos: any[]): Columnable[] => {
	const arr = repos as usersRepos[];
	return arr.map(repo => {
		const col = <Columnable>{
			name: repo.name.replaceAll('-', ' '),
			description: repo.description,
			url: repo.html_url,
			language: repo.language,
			stars: repo.stargazers_count,
			forks: repo.forks_count,
			updated: repo.updated_at,
			display() {
				return `${repo.name} - ${repo.description}`;
			}
		};
		return col;
	});
};
const getRepos = async (visibility: "all" | "public" | "private"): Promise<Columnable[]> => {
	let response = (await octokit.request('GET /user/repos', {
		username: 'csc530',
		visibility: visibility,
	})).data;
	if (visibility === 'public')
		publicRepos.value = toColumns(response);
	else if (visibility === 'private')
		privateRepos.value = toColumns(response);
	else
		return toColumns(response);
	return [];
};


getRepos("public");
getRepos("private");


</script>
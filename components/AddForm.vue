<template>
	<div class="mx-auto w-[300px]">
		<h1 class="heading">{{ title }}</h1>
		<form @submit.prevent="$emit('submitData')" class="w-full flex flex-col gap-y-3">
			<slot/>
			<button class="btn">Tambah</button>
		</form>
	</div>
</template>

<script setup>
	const { title } = defineProps(["title"])
</script>

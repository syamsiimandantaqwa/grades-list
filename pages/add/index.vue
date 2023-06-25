<template>
	<div>
		<Head>
			<Title>Tambah data baru</Title>
		</Head>
		<AddForm title="Tambah siswa baru" @submit-data="addStudent">
			<p class="text-red-400 font-bold italic" v-show="error">{{ error }}</p>
			<input required v-model="data.nisn" class="border p-3 rounded-lg" type="text" placeholder="masukan nisn" name="nisn">
			<input required v-model="data.nama" class="border p-3 rounded-lg" type="text" placeholder="masukan nama" name="nama">
		</AddForm>
	</div>
</template>

<script setup>
	import { save, getGrades, checkNisn } from '@/utils/index.js'

	const data = ref({
		nama: "",
		nisn: "",
		grades: [],
	})
	const error = ref("")

	const addStudent = async () => {
		// ambil nilai nya
		const allGrades = getGrades();
		// check nisn
		if(checkNisn(data.value.nisn)) {
			error.value = "maaf, nisn sudah ada";
			return;
		}
		// masukan data nya jika lolos pengecekan
		allGrades.push(data.value);
		save(allGrades);

		await navigateTo("/")
	}
</script>

<style scoped>
	
</style>
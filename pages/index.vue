<template>
 <div>
 	<AddForm title="Tambah nilai" @submit-data="addGrade">
 		<p class="text-red-400 font-bold italic" v-show="error">{{ error }}</p>
 		<input required v-model="nisn" class="border p-3 rounded-lg" type="text" placeholder="masukan nisn" name="nisn">
		<input required v-model="nilai" class="border p-3 rounded-lg" type="number" placeholder="masukan nilai" name="nilai">
 	</AddForm>
 	<h1 class="heading">Daftar nilai</h1>
 	<Table :dataTable="allGrades"/>
 </div>
</template>

<script setup>

	import { getGrades, checkNisn } from '@/utils/index.js'


	const allGrades = ref([]);
	const nisn = ref("")
	const nilai = ref("")
	const error = ref("")

	const addGrade = () => {
		// check nisn
		if(checkNisn(nisn.value)) {
			const student = getGrades().filter(grade => grade.nisn === nisn.value);
			const dataIndex = getGrades().findIndex(grade => grade.nisn === nisn.value);
			
			const result = {
				nama: student[0].nama,
				nisn: nisn.value,
				grades: [...student[0].grades, nilai.value]
			};

			allGrades.value[dataIndex] = result;
			nilai.value = "";

			save(allGrades.value);
			return;
		}
		// jika error
		return error.value = "maaf, nisn tidak di temukan";
	}

	onMounted(() => {
		allGrades.value = getGrades();
	})
	
</script>

<style scoped>
	
</style>
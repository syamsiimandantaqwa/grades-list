<template>
<div class="flex flex-col">
  <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full">
          <thead class="bg-gray-200 border-b">
            <tr>
              <th scope="col" class="th">
                No
              </th>
              <th scope="col" class="th">
                No induk
              </th>
              <th scope="col" class="th">
                Nama
              </th>
              <th scope="col" class="th">
                Rata-Rata
              </th>
              <th scope="col" class="th">
                Min
              </th>
              <th scope="col" class="th">
                Max
              </th>
              <th scope="col" class="th text-center" :colspan="cols(dataTable)">
                Nilai
              </th>
            </tr>
          </thead>
          <tbody>
          	<tr class="tr-grades" v-for="({nama, grades, nisn }, index) in dataTable" :key="nisn">
          		<td class="td-number">{{ index + 1 }}</td>
          		<td class="td">{{ nisn }}</td>
          		<td class="td">{{ nama }}</td>
          		<td class="td">{{ average(grades) }}</td>
              <td class="td">{{ minGrade(grades) }}</td>
              <td class="td">{{ maxGrade(grades) }}</td>
          		<td class="td" v-for="(grade, index) in grades" :key="index">{{ grade }}</td>
              <td class="td" v-if="!grades.length">0</td>
          	</tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <h1 class="text-center">Rata-Rata seluruh siswa : {{ averageAllStudents(dataTable) }}</h1>
</div>
</template>

<script setup>
  const { dataTable } = defineProps(["dataTable"]);

  const cols = (data) => {
    const cols = data.map(d => d.grades.length);
    console.log(cols)
    return Math.max(...cols);
  }

  const average = (grades) => {
     return grades.length ? Math.round(grades.reduce((a, b) => a + b) / grades.length) : "-";
  }

  const minGrade = (grades) => {
    return grades.length ? Math.min(...grades) : "-";
  }

  const maxGrade = (grades) => {
    return grades.length ? Math.max(...grades) : "-";
  }

  const averageAllStudents = (data) => {
    const grades = [];
    data.map(d => {
      d.grades.map(grade => grades.push(grade))
    });
    return average(grades);
  }

</script>
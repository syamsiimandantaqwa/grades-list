<template>
	<div class="2xl:container min-h-screen mx-auto">
		<nav class="w-full px-[2rem] py-[15px] shadow-md bg-slate-100 flex justify-between fixed">
			<h1 class="text-2xl text-green-500 font-bold">GRADES</h1>
			<div class="flex gap-x-4 text-base">
				<NuxtLink to="/">Home</NuxtLink>
				<NuxtLink to="/add">Add</NuxtLink>
			</div>
		</nav>
		<div class="px-[2rem] py-[5rem]">
			<slot />
		</div>
		<footer class="text-center text-slate-400">
			&copy; syamsi iman permana || 2023
		</footer>
	</div>
</template>

<script>
	
</script>

<style scoped>
	.router-link-exact-active {
		color: green;
		font-weight: bold;
	}
</style>
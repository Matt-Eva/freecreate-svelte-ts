<script lang="ts">
	import '../globals.css';
	import Header from '../components/+header.svelte';
	let { children } = $props();
</script>

<div class="layout">
	<Header />
	{@render children()}
</div>

<style>
	.layout {
		height: 100%;
		width: 100%;
		max-width: 1200px;
		justify-self: center;
		display: grid;
		grid-template-rows: 40px calc(100% - 80px) 40px;
		grid-template-columns: 100%;
	}
</style>

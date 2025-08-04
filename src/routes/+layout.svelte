<script lang="ts">
	import '../globals.css';
	import Header from '../components/+header.svelte';
	import Sidebar from '../components/+sidebar.svelte';
	let { children } = $props();
</script>

<div class="layout">
	<Header />
	<div class="main">
		<Sidebar />
		<div>
			{@render children()}
		</div>
	</div>
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

	@media (min-width: 480px) {
		.layout {
			grid-template-rows: 40px calc(100% - 40px);
		}

		.main {
			width: 100%;
			height: 100%;
			display: grid;
			grid-template-columns: 200px calc(100% - 200px);
			grid-template-rows: 100%;
		}
	}
</style>

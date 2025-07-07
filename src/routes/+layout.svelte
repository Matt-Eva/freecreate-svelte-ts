<script lang="ts">
	import Header from '../components/+header.svelte';
	let { children } = $props();
</script>

<Header />

{@render children()}

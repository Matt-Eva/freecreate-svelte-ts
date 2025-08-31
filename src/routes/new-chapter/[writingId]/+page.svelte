<script lang="ts">
	import type { PageProps } from '../../$types';
	import { onMount } from 'svelte';

	let { data }: PageProps = $props();

	onMount(async () => {
		const { default: Quill } = await import('quill');

		await import('quill/dist/quill.snow.css');

		const quill = new Quill('#editor', {
			theme: 'snow',
			modules: {
				toolbar: true
			}
		});
	});
</script>

<div id="editor"></div>

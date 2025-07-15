<script lang="ts">
	import { json } from '@sveltejs/kit';

	const { data } = $props();
	async function sendEmail() {
		const apiBase = data.apiBase;
		try {
			const res = await fetch(apiBase + '/email', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					email: 'matteweva@gmail.com'
				})
			});
		} catch (e) {
			console.error(e);
		}
	}
</script>

<button onclick={sendEmail}>send email</button>

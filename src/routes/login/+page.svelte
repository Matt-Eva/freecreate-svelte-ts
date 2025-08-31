<script lang="ts">
	const { data } = $props();
	const apiBase = data.apiBase;
	let displaySending = $state(false);
	let sent = $state(false);
	let emailInput = $state('');

	async function handleEmailSubmit(e: SubmitEvent) {
		e.preventDefault();
		console.log(emailInput);
		displaySending = true;
		try {
			const res = await fetch(apiBase + '/createOTP', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ email: emailInput })
			});
			displaySending = false;
			const data = await res.json();
			if (!res.ok) {
				console.error(data.message);
			} else {
				sent = true;
			}
		} catch (error) {
			console.error(error);
		}
	}
</script>

<div>
	<h2>Login with Email One-Time Password</h2>
	{#if !sent}
		<form onsubmit={handleEmailSubmit}>
			<label for="email">email</label>
			<input type="text" name="email" bind:value={emailInput} />
			<input type="submit" />
		</form>
	{/if}
	{#if displaySending}
		<p>sending...</p>
	{/if}
	{#if sent}
		<p>
			Check your email for your one-time password! It will last for the next 5 minutes. Don't forget
			to check your spam folder.
		</p>
		<p>Do not share your one-time password with anyone! We will never ask for it.</p>
		<form>
			<label for="otp">Enter One-Time Password</label>
			<input type="text" name="otp" />
			<input type="submit" />
		</form>

		<p>Not going through? Try sending again.</p>
		<button>resend</button>
	{/if}
</div>

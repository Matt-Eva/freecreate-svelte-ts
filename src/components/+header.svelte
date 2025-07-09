<script lang="ts">
	const renderFullscreen = () => {
		if (window) {
			if (document.fullscreenElement) return document.exitFullscreen();
			document.body.requestFullscreen();
		}
	};
</script>

<header>
	<nav>
		<h1><a href="/">FreeCreate</a></h1>
		<a href="/donate" class="link">Donate</a>
		<a href="/about" class="link">About</a>
		<a href="/app" class="link">App</a>
		<button class="fullscreen" on:click={renderFullscreen}>Fullscreen</button>
		<a href="/profile" class="profile">profile</a>
	</nav>
</header>

<style>
	header {
		width: 100%;
		padding: 0 5px;
	}

	nav {
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
	}

	h1 {
		cursor: pointer;
	}

	.link {
		margin-top: 5px;
		margin-left: 10px;
	}

	.fullscreen {
		display: none;
	}

	.profile {
		margin-top: 5px;
		margin-left: auto;
	}

	@media (min-width: 480px) {
		.fullscreen {
			display: block;
			text-decoration: none;
			background-color: var(--global-background);
			border: none;
			padding: 0px;
			margin-top: 5px;
			margin-left: 10px;
		}
	}
</style>

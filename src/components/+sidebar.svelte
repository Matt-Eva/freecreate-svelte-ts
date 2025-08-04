<aside>
	<ul>
		<li>
			<a href="/">Browse</a>
			<ul>
				<li class="nested-li"><a href="/browse/fiction">Fiction</a></li>
			</ul>
		</li>
		<li>
			<a href="/write">Write</a>
			<ul>
				<li class="nested-li"><a href="/my-creators">Creator Profiles</a></li>
				<li class="nested-li"><a href="/my-writing">My Writing</a></li>
			</ul>
		</li>
		<li>
			<a href="/library">My Library</a>
			<ul>
				<li class="nested-li"><a href="/libary/subscriptions">Subscriptions</a></li>
				<li class="nested-li"><a href="/library/following">Following</a></li>
				<li class="nested-li"><a href="/library/reading-list">Reading List</a></li>
				<li class="nested-li"><a href="/library/bookshelves">Bookshelves</a></li>
				<li class="nested-li"><a href="/library/likes">Likes</a></li>
			</ul>
		</li>
		<li>
			<a href="/donations">My Donations</a>
			<ul>
				<li class="nested-li"><a href="/donations/sent">Sent Donations</a></li>
				<li class="nested-li"><a href="/donations/received">Received Donations</a></li>
			</ul>
		</li>
	</ul>
</aside>

<style>
	aside {
		display: none;
	}

	li {
		list-style: none;
	}

	.nested-li {
		margin-left: 15px;
	}

	@media (min-width: 480px) {
		aside {
			display: block;
			width: 200px;
			height: 100%;
			border: solid black 1px;
			border-radius: 5px;
			padding: 5px;
		}
	}
</style>

<svelte:head>
	<title>APC 아주대학교 프로그래밍 경시대회</title>

	<link
		rel="apple-touch-icon-precomposed"
		sizes="57x57"
		href="/images/favicons/apc/apple-touch-icon-57x57.png"
	/>
	<link
		rel="apple-touch-icon-precomposed"
		sizes="114x114"
		href="/images/favicons/apc/apple-touch-icon-114x114.png"
	/>
	<link
		rel="apple-touch-icon-precomposed"
		sizes="72x72"
		href="/images/favicons/apc/apple-touch-icon-72x72.png"
	/>
	<link
		rel="apple-touch-icon-precomposed"
		sizes="144x144"
		href="/images/favicons/apc/apple-touch-icon-144x144.png"
	/>
	<link
		rel="apple-touch-icon-precomposed"
		sizes="60x60"
		href="/images/favicons/apc/apple-touch-icon-60x60.png"
	/>
	<link
		rel="apple-touch-icon-precomposed"
		sizes="120x120"
		href="/images/favicons/apc/apple-touch-icon-120x120.png"
	/>
	<link
		rel="apple-touch-icon-precomposed"
		sizes="76x76"
		href="/images/favicons/apc/apple-touch-icon-76x76.png"
	/>
	<link
		rel="apple-touch-icon-precomposed"
		sizes="152x152"
		href="/images/favicons/apc/apple-touch-icon-152x152.png"
	/>
	<link
		rel="icon"
		type="image/png"
		href="/images/favicons/apc/favicon-196x196.png"
		sizes="196x196"
	/>
	<link rel="icon" type="image/png" href="/images/favicons/apc/favicon-96x96.png" sizes="96x96" />
	<link rel="icon" type="image/png" href="/images/favicons/apc/favicon-32x32.png" sizes="32x32" />
	<link rel="icon" type="image/png" href="/images/favicons/apc/favicon-16x16.png" sizes="16x16" />
	<link rel="icon" type="image/png" href="/images/favicons/apc/favicon-128.png" sizes="128x128" />
	<meta name="application-name" content="2022 APC" />
	<meta name="msapplication-TileColor" content="#FFFFFF" />
	<meta name="msapplication-TileImage" content="/images/favicons/apc/mstile-144x144.png" />
	<meta name="msapplication-square70x70logo" content="/images/favicons/apc/mstile-70x70.png" />
	<meta name="msapplication-square150x150logo" content="/images/favicons/apc/mstile-150x150.png" />
	<meta name="msapplication-wide310x150logo" content="/images/favicons/apc/mstile-310x150.png" />
	<meta name="msapplication-square310x310logo" content="/images/favicons/apc/mstile-310x310.png" />

	<meta property="og:image" content="/images/og/apc-2022.png" />
	<meta property="og:title" content="제12회 아주대학교 프로그래밍 경시대회가 열립니다!" />
	<meta property="og:url" content="/apc" />
	<meta property="og:site_name" content="2022 APC" />
	<meta property="og:type" content="website" />
	<meta
		property="og:description"
		content="2022년 11월 13일, 제12회 Ajou Programming Contest가 개최됩니다."
	/>
</svelte:head>

<div class="shadow-sm bg-white sticky-top">
	<div class="container">
		<div class="row">
			<div class="col-md-10 offset-md-1">
				<nav class="navbar navbar-expand-lg">
					<a class="navbar-brand" href="/apc">
						<img src="/logo-apc.png" alt="APC" height="30px" />
					</a>
					<button
						class="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon" />
					</button>
					<div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
						<ul class="navbar-nav">
							<li class="nav-item">
								<a
									href="https://www.acmicpc.net/contest/board/900"
									class="text-dark text-decoration-none nav-link">2022 Div1 결과 보기</a
								>
							</li>
							<li class="nav-item">
								<a
									href="https://www.acmicpc.net/contest/board/901"
									class="text-dark text-decoration-none nav-link">2022 Div2 결과 보기</a
								>
							</li>
							<li class="nav-item">
								<a
									href="https://drive.google.com/file/d/15QyNVeBW4hy7bv6xXqEhKBUymWAm8gWn/view?usp=sharing"
									class="text-dark text-decoration-none nav-link">풀이 슬라이드</a
								>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</div>
	</div>
</div>

<slot />

<script>
	import shakeData from '../../shake-data.csv';
	import apcData from '../../apc-data.csv';
</script>

<div class="bg-secondary vh-100 overflow-hidden position-relative">
	<video
		class="position-absolute start-0 top-0 min-vh-100 min-vw-100"
		playsinline
		autoplay
		muted
		loop
	>
		<source src="/bg-main.mp4" type="video/mp4" />
	</video>

	<div
		class="position-absolute start-0 top-0 w-100 h-100"
		style="background-color: rgba(255, 255, 255, 0.5);"
	/>
	<div
		class="position-absolute start-0 top-0 w-100 h-100"
		style="background-color: rgba(35, 230, 190, 0.4);"
	/>
	<div
		class="position-absolute start-0 top-0 w-100 h-100"
		style="background-color: rgba(0, 0, 0, 0.5);"
	/>

	<div class="container vh-100 position-relative">
		<div class="row text-white d-none d-sm-flex align-items-center h-100">
			<div class="col-10 offset-1">
				<h1 class="display-4">
					<div class="fw-lighter">조금 더 넓은 곳에서</div>
					<div><strong>당신의 능력을 보여주세요</strong></div>
				</h1>
				<div class="mt-5">
					<a href="#about" class="btn btn-punch shadow-sm btn-light me-3">대회 정보</a>
					<a href="/results/2022" class="btn btn-punch shadow-sm btn-shake-primary text-light"
						>2022 결과</a
					>
				</div>
			</div>
		</div>
		<div class="row text-white d-flex d-sm-none align-items-center h-100">
			<div class="col-10 offset-1 text-center">
				<h2>
					<div>조금 더 넓은 곳에서</div>
					<div><strong>당신의 능력을 보여주세요</strong></div>
				</h2>
				<div class="mt-5">
					<a href="#about" class="btn btn-punch shadow-sm btn-light me-3">대회 정보</a>
					<a href="/results/2022" class="btn btn-punch shadow-sm btn-shake-red text-light"
						>2022 결과</a
					>
				</div>
			</div>
		</div>
		<a
			href="#about"
			title=""
			class="position-absolute bottom-0 start-50 translate-middle text-shake-primary shadow bg-white rounded-circle text-center"
		>
			<svg class="bi m-2" width="24" height="24" fill="currentColor"
				><use xlink:href="bootstrap-icons.svg#arrow-down" /></svg
			>
		</a>
	</div>
</div>

<section id="about" class="">
	<div class="container py-4">
		<div class="row py-5">
			<div class="col-md-3 offset-md-1">
				<div style="height: 2px; width: 30px; background: #EF544D;" class="mb-4" />
				<h2 class="">대회 소개</h2>
			</div>
			<div class="col-md-7">
				<div style="height: 2px; width: 30px; background: #2196f3;" class="mb-4" />
				<p>
					<strong>shake!</strong>는 경인지역 6개 대학의 학생들이 함께하는 프로그래밍 대회입니다.
					<br />
					<strong>아주대학교</strong>, <strong>경희대학교</strong>, <strong>성균관대학교</strong>,
					<strong>인하대학교</strong>, <strong>한국항공대학교</strong>,
					<strong>한양대학교 ERICA</strong>의 학교 대표들이 모여 함께하는 본 대회는 6개 대학
					학생들을 위한 교류의 장을 지향합니다. 다른 학교 학생들과 함께하는 과정에서 보다 넓은
					세계를 대상으로 시야를 넓히고, 다양한 문제를 고민하고 해결하는 과정을 통해 자신의 역량을
					뽐내고 피드백을 통해 발전할 수 있는 기회가 될 것입니다.
				</p>
			</div>
		</div>
	</div>
</section>

<hr class="m-0" />

<section id="purpose" class="">
	<div class="container">
		<div class="row my-5 gy-3">
			<div class="col-md-3 offset-md-1">
				<h2>대회 목적</h2>
				<p>
					<strong>shake!</strong>는 참가 대학교가 서로 교류를 통해 발전하고, 경쟁을 통해 새로운
					인재를 발견하는 데에 목적을 두고 있습니다.
				</p>
			</div>
			<div class="col-md-1 d-none d-md-block" />
			<div class="col-md-2 text-center">
				<div class="row justify-content-center">
					<div class="col-5 col-md-9">
						<img src="/icon-goal-growth.png" class="w-100 mb-4" alt="growth" />
					</div>
				</div>
				<h5>실력향상</h5>
				<p>Growth</p>
			</div>
			<div class="col-md-2 text-center">
				<div class="row justify-content-center">
					<div class="col-5 col-md-9">
						<img src="/icon-goal-sharing.png" class="w-100 mb-4" alt="sharing" />
					</div>
				</div>
				<h5>상호교류</h5>
				<p>Sharing</p>
			</div>
			<div class="col-md-2 text-center">
				<div class="row justify-content-center">
					<div class="col-5 col-md-9">
						<img src="/icon-goal-talent.png" class="w-100 mb-4" alt="talent" />
					</div>
				</div>
				<h5>인재발굴</h5>
				<p>Talent</p>
			</div>
		</div>
	</div>
</section>

<hr class="m-0" />

<section id="areas" class="">
	<div class="container">
		<div class="row my-5 gy-3">
			<div class="col-md-1 d-none d-md-block" />
			<div class="col-md-3">
				<h2>시험 분야</h2>
				<p>
					<strong>shake!</strong>는 프로그래머에게 필수적인 다양한 능력들을 고루 평가합니다.
				</p>
			</div>
			<div class="col-md-1 d-none d-md-block" />
			<div class="col-md-3">
				<img src="/icon-category-basic.png" class="w-25 mb-4" alt="growth" />
				<h5>기초 프로그래밍</h5>
				<p>
					추상적인 상황과 자신의 생각을 논리적으로 전개하고 이를 코드로 표현할 수 있는 프로그래밍
					능력을 평가합니다.
				</p>
			</div>
			<div class="col-md-3">
				<img src="/icon-category-math.png" class="w-25 mb-4" alt="growth" />
				<h5>수학</h5>
				<p>
					문제에 대한 분석을 바탕으로 풀이를 도출하고 이를 수학적으로 증명할 수 있는 사고력을
					평가합니다.
				</p>
			</div>
			<div class="col-md-1 d-none d-md-block" />
			<!-- -->
			<div class="col-md-1 d-none d-md-block" />
			<div class="col-md-1 d-none d-md-block" />
			<div class="col-md-3">
				<img src="/icon-category-datastructure.png" class="w-25 mb-4" alt="growth" />
				<h5>자료구조</h5>
				<p>
					다양한 데이터들의 특징을 파악하여 상황과 필요에 맞게 구조화 할 수 있는 자료구조에 대한
					이해도를 평가합니다.
				</p>
			</div>
			<div class="col-md-3">
				<img src="/icon-category-dynamic.png" class="w-25 mb-4" alt="growth" />
				<h5>동적 계획법</h5>
				<p>
					복잡한 문제를 간소화하거나, 그 안에서 규칙성을 찾아 정확한 해답을 찾을 수 있는 청의력과
					분석 능력을 평가합니다.
				</p>
			</div>
			<div class="col-md-3">
				<img src="/icon-category-graph.png" class="w-25 mb-4" alt="growth" />
				<h5>그래프</h5>
				<p>
					추상적인 상황 속에 숨겨진 논리적인 관계를 파악하고, 이러한 관계의 특징을 이용해 원하는
					답을 찾아낼 수 있는 능력을 평가합니다.
				</p>
			</div>
			<div class="col-md-1 d-none d-md-block" />
		</div>
	</div>
</section>

<hr class="m-0" />

<section id="apply" class="">
	<div class="container">
		<div class="row my-5 gy-5">
			<div class="col-md-4 offset-md-1">
				<h2><strong>대회 참가</strong> 안내</h2>
				<p>
					<strong>shake!</strong>는 각 학교 선발전을 통해 선발된 학교 대표 학생들만 참가할 수
					있습니다. 2022 경인지역 6개대학 연합 프로그래밍 경시대회 <strong>shake!</strong>의
					<strong>학교 대표 선발전</strong> 일정은 아래와 같습니다.
					<br />
					<strong>문의사항</strong>은 각 학교별 주관처를 통해주시기 바랍니다.
				</p>
				<div class="">
					<ul class="nav nav-tabs nav-tabs-apply" role="tablist">
						<li class="nav-item" role="presentation">
							<button
								id="pre-ajou-tab"
								aria-current="page"
								role="tab"
								type="button"
								data-bs-toggle="tab"
								data-bs-target="#pre-ajou"
								class="nav-link active">아주대</button
							>
						</li>
						<li class="nav-item" role="presentation">
							<button
								id="pre-khee-tab"
								role="tab"
								type="button"
								data-bs-toggle="tab"
								data-bs-target="#pre-khee"
								class="nav-link">경희대</button
							>
						</li>
						<li class="nav-item" role="presentation">
							<button
								id="pre-skku-tab"
								role="tab"
								type="button"
								data-bs-toggle="tab"
								data-bs-target="#pre-skku"
								class="nav-link">성균관대</button
							>
						</li>
						<li class="nav-item" role="presentation">
							<button
								id="pre-inha-tab"
								role="tab"
								type="button"
								data-bs-toggle="tab"
								data-bs-target="#pre-inha"
								class="nav-link">인하대</button
							>
						</li>
						<li class="nav-item" role="presentation">
							<button
								id="pre-krar-tab"
								role="tab"
								type="button"
								data-bs-toggle="tab"
								data-bs-target="#pre-krar"
								class="nav-link">항공대</button
							>
						</li>
						<li class="nav-item" role="presentation">
							<button
								id="pre-hyer-tab"
								role="tab"
								type="button"
								data-bs-toggle="tab"
								data-bs-target="#pre-hyer"
								class="nav-link">한양ERICA</button
							>
						</li>
					</ul>
					<div class="tab-content small mt-3">
						<div id="pre-ajou" role="tabpanel" class="tab-pane show active" tabindex="0">
							<p>
								<strong>아주대학교</strong>는
								<strong>2022 아주대학교 프로그래밍 경시대회 (APC)</strong>를 자체 선발전으로 진행,
								최대 10명의 학교 대표를 선발합니다.
							</p>

							<p>
								<a href="/apc">
									<button class="btn btn-danger btn-danger">아주대학교 선발전 바로가기</button>
								</a>
							</p>

							<div class="row">
								<div class="col-4"><strong>선발전 일정</strong></div>
								<div class="col-8">2022. 11. 13.</div>
							</div>
							<div class="row">
								<div class="col-4"><strong>선발전 주관처</strong></div>
								<div class="col-8">알고리즘 소학회 A.N.S.I.</div>
							</div>
							<div class="row">
								<div class="col-4"><strong>주관 대표</strong></div>
								<div class="col-8">심지수 010-3029-1203</div>
							</div>
						</div>
						<div id="pre-khee" role="tabpanel" class="tab-pane" tabindex="0">
							<p>
								<strong>경희대학교</strong>는
								<strong>2022 경희대학교 봄 프로그래밍 경시대회</strong>를 자체 선발전으로 진행, 최대
								10명의 학교대표를 선발합니다.
							</p>
							<div class="row">
								<div class="col-4"><strong>선발전 일정</strong></div>
								<div class="col-8">2022. 05. 14.</div>
							</div>
							<div class="row">
								<div class="col-4"><strong>선발전 주관처</strong></div>
								<div class="col-8">경희대학교 컴퓨터공학부 학생회</div>
							</div>
							<div class="row">
								<div class="col-4"><strong>주관 대표</strong></div>
								<div class="col-8">박민재 010-2351-7847</div>
							</div>
						</div>
						<div id="pre-skku" role="tabpanel" class="tab-pane" tabindex="0">
							<p>
								<strong>성균관대학교</strong>는 <strong>2022 shake! 성균관대학교 선발전</strong>을
								통해 10명의 학교대표를 선발합니다.
							</p>
							<div class="row">
								<div class="col-4"><strong>선발전 일정</strong></div>
								<div class="col-8">2022. 11. 13.</div>
							</div>
							<div class="row">
								<div class="col-4"><strong>선발전 주관처</strong></div>
								<div class="col-8">알고리즘 동아리 NPC</div>
							</div>
							<div class="row">
								<div class="col-4"><strong>주관 대표</strong></div>
								<div class="col-8">안우솔 010-4261-0125</div>
							</div>
						</div>
						<div id="pre-inha" role="tabpanel" class="tab-pane" tabindex="0">
							<p>
								<strong>인하대학교</strong>는
								<strong>2022 인하대학교 프로그래밍 경시대회 (IUPC)</strong>를 자체 선발전으로 진행,
								9명의 학교대표를 선발합니다. 2명의 선발전 출제진이 추가 학교대표로 선발됩니다.
							</p>
							<div class="row">
								<div class="col-4"><strong>선발전 일정</strong></div>
								<div class="col-8">2022. 05. 21.</div>
							</div>
							<div class="row">
								<div class="col-4"><strong>선발전 주관처</strong></div>
								<div class="col-8">인하대학교 컴퓨터공학 학술소모임 C.T.P.</div>
							</div>
							<div class="row">
								<div class="col-4"><strong>주관 대표</strong></div>
								<div class="col-8">주도현 010-5092-3475</div>
							</div>
						</div>
						<div id="pre-krar" role="tabpanel" class="tab-pane" tabindex="0">
							<p>
								<strong>한국항공대학교</strong>는
								<strong>2022 제 2회 한국항공대학교 프로그래밍 경시대회 (KAUPC)</strong>을 통해
								10명의 학교대표를 선발합니다.
							</p>
							<div class="row">
								<div class="col-4"><strong>선발전 일정</strong></div>
								<div class="col-8">2022. 09. 17.</div>
							</div>
							<div class="row">
								<div class="col-4"><strong>선발전 주관처</strong></div>
								<div class="col-8">항공대학교 소프트웨어학과 알고리즘 학회 Koala</div>
							</div>
							<div class="row">
								<div class="col-4"><strong>주관 대표</strong></div>
								<div class="col-8">천수환 010-7237-7616</div>
							</div>
						</div>
						<div id="pre-hyer" role="tabpanel" class="tab-pane" tabindex="0">
							<p>
								<strong>한양대학교 ERICA</strong>는
								<strong>ZOAC(Zero One Algorithm Contest 2022) 대회</strong>를 자체 선발전으로 진행,
								최대 10명의 학교대표를 선발합니다.
							</p>
							<div class="row">
								<div class="col-4"><strong>선발전 일정</strong></div>
								<div class="col-8">2022. 12. 22.</div>
							</div>
							<div class="row">
								<div class="col-4"><strong>선발전 주관처</strong></div>
								<div class="col-8">알고리즘 학회 0&1</div>
							</div>
							<div class="row">
								<div class="col-4"><strong>주관 대표</strong></div>
								<div class="col-8">윤병서 010-4532-2751</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="small bg-ansi-red text-light p-5 shadow">
					<h5>shake! 본선 정보</h5>
					<hr />
					<div>
						<h6><strong>일시</strong></h6>
						<p>2023년 3월 11일 토요일</p>
						<h6><strong>장소</strong></h6>
						<p>온라인 (Zoom)</p>
						<h6><strong>시상</strong></h6>
						<div class="row">
							<div class="col-3">대상(1명)</div>
							<div class="col-9">아주대학교 총장상 및 <strong>상금 100만원</strong></div>
						</div>
						<div class="row">
							<div class="col-3">최우수상(2명)</div>
							<div class="col-9">
								LINC 3.0 사업단장/SW융합교육원장상 및 <strong>상금 70만원</strong>
							</div>
						</div>
						<div class="row">
							<div class="col-3">우수상(4명)</div>
							<div class="col-9">
								창의산학교육원장/SW융합교육원장상 및 <strong>상금 50만원</strong>
							</div>
						</div>
						<div class="row">
							<div class="col-3">장려상(6명)</div>
							<div class="col-9">
								창의산학교육원장/SW교육센터장상 및 <strong>갤럭시워치 5 44mm</strong>
							</div>
						</div>
						<div class="row">
							<div class="col-3">특별상(2명)</div>
							<div class="col-9">
								후원사 특별상 (몰로코, 현대모비스) <strong>100,000원권 상품권</strong>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<sction id="example" class="bg-black bg-opacity-10 d-flex">
	<div class="container">
		<div class="row my-5">
			<div class="col-md-10 offset-md-1">
				<h2>문제 예시</h2>
				<p>
					아래는 역대 <strong>shake!</strong> 기출문제 및 풀이입니다.
					<br />
					<strong>shake!</strong>는 단순한 알고리즘 지식 경쟁 보다는 일반 소프트웨어 학부 과정에서
					배울 수 있는 알고리즘과 자료구조의 이해와 확장을 목표로 합니다.
				</p>
				<div class="row gy-3">
					<div class="col-md-6">
						<h3>shake! 본선 기출</h3>
						<div class="row g-1 mb-1">
							{#each shakeData as { year, problemUrl }}
								<a href={problemUrl} class="col-3 col-md-6 col-lg-4 col-xl-3"
									><button type="button" class="btn btn-contest-problem w-100"
										><strong>{year} 본선 문제</strong></button
									></a
								>
							{/each}
						</div>
						<div class="row g-1">
							{#each shakeData as { year, solutionUrl }}
								<a href={solutionUrl} class="col-3 col-md-6 col-lg-4 col-xl-3"
									><button type="button" class="btn btn-contest-solution w-100"
										><strong>{year} 본선 풀이</strong></button
									></a
								>
							{/each}
						</div>
					</div>
					<div class="col-md-6">
						<h3>shake! 예선 기출</h3>
						<div class="row g-1 mb-1">
							{#each apcData as { year, problemUrl }}
								<a href={problemUrl} class="col-3 col-md-6 col-lg-4 col-xl-3"
									><button type="button" class="btn btn-precontest-problem w-100"
										><strong>{year} 예선 문제</strong></button
									></a
								>
							{/each}
						</div>
						<div class="row g-1">
							{#each apcData as { year, solutionUrl }}
								<a href={solutionUrl} class="col-3 col-md-6 col-lg-4 col-xl-3"
									><button type="button" class="btn btn-precontest-solution w-100"
										><strong>{year} 예선 풀이</strong></button
									></a
								>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</sction>

<section id="rule" class="bg-white">
	<div class="container">
		<div class="row py-5">
			<div class="col-md-10 offset-md-1">
				<h1 class="mb-5">대회 규정</h1>
				<div class="row">
					<div class="col-md-10 offset-md-1">
						<h3>참가 자격</h3>
						<p>
							6개대학 학부생 중 아래 조건을 모두 만족하도록 주관처에 의해 선정된 <strong
								>각 학교대표 10인</strong
							>
						</p>
						<ul>
							<li>각 학교 선발전을 통해 정당하게 선출된 자</li>
							<li>2022년 1, 2학기 기준 해당 학교 1학기 이상 재학한 자</li>
							<li>
								역대 <strong><a href="https://ucpc.me/">한국 프로그래밍 경시대회</a></strong> 수상자가
								아닌 자
							</li>
							<li>역대 <strong>shake!</strong> 3위 이내 수상자가 아닌 자</li>
							<li>
								+ 자체 선발전을 진행하는 학교에 한하여 자체 선발전 출제진 중 최대 1명의 추가대표
							</li>
						</ul>
						<h3>대회 진행 방식</h3>
						<ul>
							<li><string>shake!</string>는 1인 1팀의 개인전 형태로 치러진다.</li>
							<li>대회에 사용할 컴퓨터는 개인 지참해야 하며, 1인당 1대의 컴퓨터만 허용된다.</li>
							<li>
								대회는 10명 단위로 <strong>ZOOM</strong>에 접속하여 <strong>웹캠</strong>을 공유한
								채로 진행된다.
							</li>
							<li>
								하드카피, 소프트카피의 사용이 가능하며, 사용 시 참조한 자료 정보의 출처를 주석으로
								처리하여 코드에 작성한다.
							</li>
							<li>참가자는 각 문제에 대한 해답을 작성하는 소스코드를 제출한다.</li>
							<li>
								사용가능한 프로그래밍 언어는 <strong>C/C++, Java, Python2,3로 제한한다.</strong>
							</li>
							<li>제출된 소스코드는 시스템에 의해 실시간으로 채점된다.</li>
							<li>채점이 완료되면 참가자는 채점 결과를 확인할 수 있다.</li>
							<li>
								대회 중 문제 및 채점에 관한 질문은 대회 진행 페이지의 문의하기 기능 을 통한다.
							</li>
							<li>문제와 채점에 관련되지 않은 사항은 대회장에 있는 감독관에게 직접 문의한다.</li>
							<li>
								대회 중 심각한 오류가 발견된 경우 문제의 수정 및 재채점이 가능하며, 이는 모든
								참가자에게 공지된다.
							</li>
						</ul>
						<h3>답안 채점 방식</h3>
						<ul>
							<li>제출된 소스코드는 시스템을 통하여 자동으로 채점된다.</li>
							<li>모든 테스트케이스에 대해 올바른 정답을 출력하는 코드만을 정답으로 인정한다.</li>
							<li>
								참가자는 자신이 제출한 소스코드에 대한 채점 결과를 실시간으로 확인 할 수 있다.
							</li>
							<li>모든 소스코드는 시스템과 채점관을 통해 부정행위 여부가 검사된다.</li>
							<li>컴파일 과정이나 실행 도중에 에러가 발생하는 경우 오답처리한다.</li>
							<li>제출한 소스코드가 고의적인 공격성을 띄는 경우 부정행위로 판단한다.</li>
							<li>
								제출한 소스코드는 표준 입출력만을 사용해야하며, 파일을 생성하거나 읽을 시 오답으로
								간주한다.
							</li>
						</ul>
						<h3>순위 결정 방식</h3>
						<ul>
							<li>각 참가자는 정답 판정을 받은 문제 개수와 패널티를 가집니다.</li>
							<li>
								참가자가 각 문제에 대해 최초 정답 판정을 받을 때 패널티에 <strong
									>((정답 제 출 시각 – 대회 시작 시각) + (해당 문제 제출 횟수 – 1) * 20)</strong
								>의 시간이 가산됩니다.
							</li>
							<li>
								순위는 아래 조건을 순차적으로 적용했을 때, 상위에 있는 조건을 먼저 만족한 참가자가
								더 높은 순위를 가집니다.
							</li>
						</ul>
						<div class="row">
							<div class="col-md-10 offset-md-1">
								<ol>
									<li>해결한 문제의 수가 더 많은 참가자</li>
									<li>패널티의 총합이 더 작은 참가자</li>
									<li>마지막으로 점수를 얻은 시각이 더 빠른 참가자</li>
								</ol>
							</div>
						</div>
						<h3>채점 환경</h3>
						<p>
							모든 채점은 <a href="https://startlink.io/">Startlink</a>의
							<a href="https://www.acmicpc.net">백준 온라인 저지</a>
							플랫폼에서 이루어지며, 참가자들은 미리 플랫폼을 이용해볼 수 있습니다.<br />
							언어마다 다른 채점기준이 적용되며, 각 언어별 컴파일 및 실행 옵션, 버전, 채점기준은 아래와
							같습니다.<br />
							C, C++ 에서의 제한은 각 문제에 명시된 제한(기본값) 를 따릅니다.
						</p>
						<ul class="list-group mb-3">
							<li class="list-group-item">
								<strong>C</strong>
								<ul>
									<li>
										컴파일: gcc Main.c -o Main -O2 -Wall -lm -static -std=c99 -DONLINE_JUDGE -DBOJ
									</li>
									<li>실행: ./Main</li>
									<li>버전: g++ (GCC) 10.2.0</li>
									<li>시간 제한: 기본값</li>
									<li>메모리 제한: 기본값</li>
								</ul>
							</li>
							<li class="list-group-item">
								<strong>C++11</strong>
								<ul>
									<li>
										컴파일: g++ Main.cc -o Main -O2 -Wall -lm -static -std=gnu++11 -DONLINE_JUDGE
										-DBOJ
									</li>
									<li>실행: ./Main</li>
									<li>버전: g++ (GCC) 10.2.0</li>
									<li>시간 제한: 기본값</li>
									<li>메모리 제한: 기본값</li>
								</ul>
							</li>
							<li class="list-group-item">
								<strong>C++17</strong>
								<ul>
									<li>
										컴파일: g++ Main.cc -o Main -O2 -Wall -lm -static -std=gnu++17 -DONLINE_JUDGE
										-DBOJ
									</li>
									<li>실행: ./Main</li>
									<li>버전: g++ (GCC) 10.2.0</li>
									<li>시간 제한: 기본값</li>
									<li>메모리 제한: 기본값</li>
								</ul>
							</li>
							<li class="list-group-item">
								<strong>Java</strong>
								<ul>
									<li>
										컴파일: javac -J-Xms1024m -J-Xmx1024m -J-Xss512m -encoding UTF-8 Main.java
									</li>
									<li>실행: java -Xms1024m -Xmx1024m -Xss512m -Dfile.encoding=UTF-8 Main</li>
									<li>버전: Java(TM) SE Runtime Environment (build 1.8.0_191-b12)</li>
									<li>시간 제한: 기본값×2+1초</li>
									<li>메모리 제한: 기본값×2+16MB</li>
								</ul>
							</li>
							<li class="list-group-item">
								<strong>Python2</strong>
								<ul>
									<li>컴파일: python -c "import py_compile; py_compile.compile(r'Main.py')"</li>
									<li>실행: python Main.py</li>
									<li>버전: Python 2.7.18</li>
									<li>시간 제한: 기본값×3+2초</li>
									<li>메모리 제한: 기본값×2+32MB</li>
								</ul>
							</li>
							<li class="list-group-item">
								<strong>Python3</strong>
								<ul>
									<li>컴파일: python3 -c "import py_compile; py_compile.compile(r'Main.py')"</li>
									<li>실행: python3 Main.py</li>
									<li>버전: Python 3.8.2</li>
									<li>시간 제한: 기본값×3+2초</li>
									<li>메모리 제한: 기본값×2+32MB</li>
								</ul>
							</li>
						</ul>
						<p>
							언어별 예제 등의 자세한 사항은 <a href="https://www.acmicpc.net/help/language">여기</a
							>에서 확인 바랍니다.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="position-relative">
	<img class="position-absolute w-100 h-100 object-fit-cover" src="/bg-parallax.png" alt="" />
	<div class="container position-relative">
		<div class="row py-5">
			<div class="col-10 offset-md-1">
				<div class="row justify-content-between align-items-center">
					<div class="col-auto">
						<h1 class="text-white display-6 my-0">
							각 학교별 <strong>shake!</strong> 일정을 확인하세요!
						</h1>
					</div>
					<div class="col-auto">
						<a href="#apply" class="btn btn-danger btn-lg">지금 확인하기</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

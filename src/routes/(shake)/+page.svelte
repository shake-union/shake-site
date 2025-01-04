<script>
	import { base } from '$app/paths';

	import shakeData from '../../shake-data.csv';
	import apcData from '../../apc-data.csv';
	import { universities } from '../../lib/univs';
</script>

<div class="bg-secondary vh-100 overflow-hidden position-relative">
	<!-- <img class="position-absolute start-0 top-0 w-100 object-fit-cover" src="{base}/shakenew.png" alt="apc_background"/> -->
	<style>
		.image-container {
		  position: absolute;
		  inset: 0; /* top: 0; right: 0; bottom: 0; left: 0; 와 동일 */
		  width: 100%;
		  height: 100%;
		  overflow: hidden; /* 부모 요소의 경계를 넘는 이미지를 숨김 */
		}
	  
		.image-container img {
		  width: 100%;
		  height: 100%;
		  object-fit: cover; /* 비율을 유지하며 요소를 채움 */
		  object-position: center; /* 이미지 중심을 기준으로 배치 */
		}
	  </style>
	  
	  <div class="image-container">
		<img src="{base}/shakenew.png" alt="apc_background" />
	  </div>
	<!-- position-absolute start-0 top-0 min-vh-100 min-vw-100 -->

	<!-- <div
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
	/> -->

	<div class="container vh-100 position-relative">
		<!-- <div class="row text-white d-none d-sm-flex align-items-center h-100">
			<div class="col-10 offset-1">
				<h1 class="display-4">
					<div class="fw-lighter">조금 더 넓은 곳에서</div>
					<div><strong>당신의 능력을 보여주세요</strong></div>
				</h1>
				<div class="mt-5">
					<a href="#about" class="btn btn-punch shadow-sm btn-light me-3">대회 정보</a>
					<a href="{base}/results/2023" class="btn btn-punch shadow-sm btn-shake-primary text-light"
						>2023 결과</a
					>
				</div>
			</div>
		</div> -->
		<!-- <div class="row text-white d-flex d-sm-none align-items-center h-100">
			<div class="col-10 offset-1 text-center">
				<h2>
					<div>조금 더 넓은 곳에서</div>
					<div><strong>당신의 능력을 보여주세요</strong></div>
				</h2>
				<div class="mt-5">
					<a href="#about" class="btn btn-punch shadow-sm btn-light me-3">대회 정보</a>
					<a href="{base}/results/2023" class="btn btn-punch shadow-sm btn-shake-primary text-light"
						>2023 결과</a
					>
				</div>
			</div>
		</div> -->
		<a
			href="#about"
			title=""
			class="fs-5 position-absolute bottom-0 start-50 translate-middle text-shake-primary shadow bg-white rounded-circle text-center"
		>
			<svg
				class="bi m-2 animate__animated animate__bounce animate__infinite"
				width="1em"
				height="1em"
				fill="currentColor"><use xlink:href="bootstrap-icons.svg#arrow-down" /></svg
			>
		</a>
	</div>
</div>

<section id="about" class="">
	<div class="container py-4">
		<div class="row py-5 gy-5">
			<div class="col-md-3 offset-md-1">
				<div style="height: 2px; width: 30px; background: #EF544D;" class="mb-4" />
				<h2 class="">대회 소개</h2>
			</div>
			<div class="col-md-7">
				<div style="height: 2px; width: 30px; background: #2196f3;" class="mb-4" />
				<p>
					<strong>shake!</strong>는 경인지역 7개 대학의 학생들이 함께하는 프로그래밍 대회입니다.
					<br />
					<strong>아주대학교</strong>, <strong>경희대학교</strong>, <strong>성균관대학교</strong>,
					<strong>인하대학교</strong>, <strong>한국항공대학교</strong>,
					<strong>한양대학교 ERICA</strong>, <strong>단국대학교</strong>의 학교 대표들이 모여 함께하는 본 대회는 7개 대학
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
						<img src="{base}/icon-goal-growth.png" class="w-100 mb-4" alt="growth" />
					</div>
				</div>
				<h5>실력향상</h5>
				<p>Growth</p>
			</div>
			<div class="col-md-2 text-center">
				<div class="row justify-content-center">
					<div class="col-5 col-md-9">
						<img src="{base}/icon-goal-sharing.png" class="w-100 mb-4" alt="sharing" />
					</div>
				</div>
				<h5>상호교류</h5>
				<p>Sharing</p>
			</div>
			<div class="col-md-2 text-center">
				<div class="row justify-content-center">
					<div class="col-5 col-md-9">
						<img src="{base}/icon-goal-talent.png" class="w-100 mb-4" alt="talent" />
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
				<img src="{base}/icon-category-basic.png" class="w-25 mb-4" alt="growth" />
				<h5>기초 프로그래밍</h5>
				<p>
					추상적인 상황과 자신의 생각을 논리적으로 전개하고 이를 코드로 표현할 수 있는 프로그래밍
					능력을 평가합니다.
				</p>
			</div>
			<div class="col-md-3">
				<img src="{base}/icon-category-math.png" class="w-25 mb-4" alt="growth" />
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
				<img src="{base}/icon-category-datastructure.png" class="w-25 mb-4" alt="growth" />
				<h5>자료구조</h5>
				<p>
					다양한 데이터들의 특징을 파악하여 상황과 필요에 맞게 구조화 할 수 있는 자료구조에 대한
					이해도를 평가합니다.
				</p>
			</div>
			<div class="col-md-3">
				<img src="{base}/icon-category-dynamic.png" class="w-25 mb-4" alt="growth" />
				<h5>동적 계획법</h5>
				<p>
					복잡한 문제를 간소화하거나, 그 안에서 규칙성을 찾아 정확한 해답을 찾을 수 있는 청의력과
					분석 능력을 평가합니다.
				</p>
			</div>
			<div class="col-md-3">
				<img src="{base}/icon-category-graph.png" class="w-25 mb-4" alt="growth" />
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
					있습니다. 2024 경인지역 대학 연합 프로그래밍 경시대회 <strong>shake!</strong>의
					<strong>학교 대표 선발전</strong> 일정은 아래와 같습니다.
					<br />
					<strong>문의사항</strong>은 각 학교별 주관처를 통해주시기 바랍니다.
				</p>
				<div class="">
					<ul class="nav nav-tabs nav-tabs-apply" role="tablist">
						{#each universities as univ, i}
							<li class="nav-item" role="presentation">
								<button
									id="pre-{univ.id}-tab"
									role="tab"
									type="button"
									data-bs-toggle="tab"
									data-bs-target="#pre-{univ.id}"
									class="nav-link"
									class:active={i === 0}>{univ.shortname}</button
								>
							</li>
						{/each}
					</ul>
					<div class="tab-content small mt-3">
						{#each universities as univ, i}
							<div
								id="pre-{univ.id}"
								role="tabpanel"
								class="tab-pane"
								class:show={i === 0}
								class:active={i === 0}
								tabindex="0"
							>
								<svelte:component this={univ.component} {univ} />

								<div class="row">
									<div class="col-4"><strong>선발전 일정</strong></div>
									<div class="col-8">{univ.precontestDate}</div>
								</div>
								<div class="row">
									<div class="col-4"><strong>선발전 주최</strong></div>
									<div class="col-8">{univ.host}</div>
								</div>
								<div class="row">
									<div class="col-4"><strong>선발전 주관</strong></div>
									<div class="col-8">{univ.organizerAffiliation} {univ.organizerName}</div>
								</div>
								<div class="row">
									<div class="col-4"><strong>주관 대표</strong></div>
									<div class="col-8">{univ.organizerRepresentative}</div>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="small bg-ansi-red text-light p-5 shadow">
					<h5>shake! 본선 정보</h5>
					<hr />
					<div>
						<h6><strong>일시</strong></h6>
						<p>2025년 1월 11일 토요일 12시 ~ 19시</p>
						<h6><strong>장소</strong></h6>
						<p>경희대학교 국제캠퍼스 멀티미디어 교육관 112호</p>
						<h6><strong>시상</strong></h6>
						<div class="row">
							<div class="col-3">대상(1명)</div>
							<div class="col-9">아주대학교 총장상 및 상금 100만원</div>
						</div>
						<div class="row">
							<div class="col-3">최우수상(2명)</div>
							<div class="col-9">
								아주대학교 LINC3.0 사업단장상 | 아주대/경희대 공동 SW중심대학사업단장상 및 상금 50만원
							</div>
						</div>
						<div class="row">
							<div class="col-3">우수상(2명)</div>
							<div class="col-9">
								아주대학교 SW중심대학사업단장상 | 경희대학교 SW중심대학사업단장상 및 상금 30만원
							</div>
						</div>
						<div class="row">
							<div class="col-3">장려상(4명)</div>
							<div class="col-9">
								아주대학교 창의산학교육원장상 | 경희대학교 AI.SW교육단장상 | 아주대학교 SW융합교육원장상 및 상금 10만원 + Marshall 블루투스 스피커
							</div>
						</div>
						<div class="row">
							<div class="col-3">특별상(6명)</div>
							<div class="col-9">
								소니 XM5 헤드폰 1대, 갤럭시워치7 2대, 네스프레소 커피머신 3대
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
				<div class="row gy-3 mb-3">
					<div class="col-md-6">
						<h3>shake! 본선 기출</h3>
						<div class="row g-1 mb-1">
							{#each shakeData as { year, problemUrl }}
								<a
									href={problemUrl}
									target="_blank"
									rel="noreferrer"
									class="col-4 col-md-6 col-lg-4 col-xl-3"
									><button type="button" class="btn btn-contest-problem w-100"
										><strong>{year.slice(2)} 본선 문제</strong></button
									></a
								>
							{/each}
						</div>
						<div class="row g-1">
							{#each shakeData as { year, solutionUrl }}
								<a
									href={solutionUrl}
									target="_blank"
									rel="noreferrer"
									class="col-4 col-md-6 col-lg-4 col-xl-3"
									><button type="button" class="btn btn-contest-solution w-100"
										><strong>{year.slice(2)} 본선 풀이</strong></button
									></a
								>
							{/each}
						</div>
					</div>
					<div class="col-md-6">
						<h3>shake! 예선 기출</h3>
						<div class="row g-1 mb-1">
							{#each apcData as { year, problemUrl }}
								<a
									href={problemUrl}
									target="_blank"
									rel="noreferrer"
									class="col-4 col-md-6 col-lg-4 col-xl-3"
									><button type="button" class="btn btn-precontest-problem w-100"
										><strong>{year.slice(2)} 예선 문제</strong></button
									></a
								>
							{/each}
						</div>
						<div class="row g-1">
							{#each apcData as { year, solutionUrl }}
								<a
									href={solutionUrl}
									target="_blank"
									rel="noreferrer"
									class="col-4 col-md-6 col-lg-4 col-xl-3"
									><button type="button" class="btn btn-precontest-solution w-100"
										><strong>{year.slice(2)} 예선 풀이</strong></button
									></a
								>
							{/each}
						</div>
					</div>
				</div>
				<div class="">
					<h3>이전 결과</h3>
					<div class="row g-1">
						{#each shakeData as { year }}
							<a href="{base}/results/{year}" class="col-auto"
								><button type="button" class="btn btn-contest-result"
									><strong>{year} 결과</strong></button
								></a
							>
						{/each}
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
							7개대학 학부생 중 아래 조건을 모두 만족하도록 주관처에 의해 선정된 <strong
								>각 학교대표 10인</strong
							>
						</p>
						<ul>
							<li>각 학교 선발전을 통해 정당하게 선출된 자</li>
							<li>2024년 2학기 기준 해당 학교 재학 상태인 자</li>
							<li>
								역대 <strong
									><a href="https://icpckorea.org/" target="_blank" rel="noreferrer"
										>한국 대학생 프로그래밍 경시대회</a
									></strong
								> 수상자가 아닌 자
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
								레퍼런스 사이트 이외의 모든 소프트카피를 금지한다.
							</li>
							<li>
								A4크기, 25장의 단면 인쇄된 하드카피를 허용한다.
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
							<li>각 참가자는 정답 판정을 받은 문제 개수와 패널티를 가진다.</li>
							<li>
								참가자가 각 문제에 대해 최초 정답 판정을 받을 때 패널티에 <strong
									>((정답 제 출 시각 – 대회 시작 시각) + (해당 문제 제출 횟수 – 1) * 20)</strong
								>의 시간이 가산된다.
							</li>
							<li>
								순위는 아래 조건을 순차적으로 적용했을 때, 상위에 있는 조건을 먼저 만족한 참가자가
								더 높은 순위를 가진다.
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
							모든 채점은 <a href="https://startlink.io/" target="_blank" rel="noreferrer"
								>Startlink</a
							>의
							<a href="https://www.acmicpc.net" target="_blank" rel="noreferrer">백준 온라인 저지</a
							>
							플랫폼에서 이루어지며, 참가자들은 미리 플랫폼을 이용해볼 수 있다. <a href="https://help.acmicpc.net/judge/info" target="_blank" rel="noreferrer">여기</a
							>에서 상세한 정보를 확인할 수 있다.
							
							<!--
							<br />
							언어마다 다른 채점기준이 적용되며, 각 언어별 컴파일 및 실행 옵션, 버전, 채점기준은 아래와
							같습니다.<br />
							C, C++ 에서의 제한은 각 문제에 명시된 제한(기본값) 를 따릅니다.
							-->

						</p>
						<!--
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
							언어별 예제 등의 자세한 사항은 <a
								href="https://www.acmicpc.net/help/language"
								target="_blank"
								rel="noreferrer">여기</a
							>에서 확인 바랍니다.
						</p>

						-->
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="position-relative">
	<img class="position-absolute w-100 h-100 object-fit-cover" src="{base}/bg-parallax.png" alt="" />
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

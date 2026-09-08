const projects = [
  {
    number: '01', title: 'SSACURITY', subtitle: 'AprilTag 자율주행 보안 로봇',
    summary: 'Jetson 기반 AprilTag 내비게이션과 관제 연동을 구현해 순찰부터 상황 대응까지 하나의 흐름으로 연결했습니다.',
    tags: ['ROS 2', 'Jetson', 'AprilTag', 'UART'], note: 'Closed-loop E2E 5/5 · 243 tests passed',
    href: 'https://github.com/eunbin-hyun/AprilTag_Nav_Security_Robot', accent: 'blue',
  },
  {
    number: '02', title: 'AQIS', subtitle: 'AI 품질 검사 스마트팩토리',
    summary: 'AI 검사 결과가 컨베이어와 로봇 동작으로 이어지는 자동화 공정을 설계하고 3D 시뮬레이션으로 검증했습니다.',
    tags: ['RoboDK', 'YOLOv5', 'Onshape', 'React'], note: 'Simulation · AI · 3D design',
    href: 'https://github.com/SSAFY-15th-HK/AQIS-for-SmartFactory', accent: 'lime',
  },
  {
    number: '03', title: 'Tangerine Pests AI', subtitle: '감귤 병해충 엣지 AI',
    summary: '학습 모델을 Hailo-8L에 배포할 수 있도록 ONNX, HAR, PTQ, HEF 파이프라인을 구성했습니다.',
    tags: ['YOLOv8', 'Hailo-8L', 'Raspberry Pi', 'ONNX'], note: 'Patent application · 10-2025-0016861',
    href: 'https://github.com/eunbin-hyun/tangerine_pests_AI', accent: 'orange',
  },
  {
    number: '04', title: 'Night & Rain Lane', subtitle: '악천후 차선 인식',
    summary: '편광 필름과 영상 전처리, 경량 세그멘테이션 모델을 결합해 야간·우천 환경의 차선 인식 성능을 개선했습니다.',
    tags: ['YOLO11n-seg', 'OpenCV', 'CLAHE', 'Raspberry Pi'], note: 'Recall +28.7% · mAP50 +11.2%',
    href: 'https://github.com/eunbin-hyun/Night_Rain_Lane_Segmentation', accent: 'purple',
  },
];

const focus = [
  { icon: '01', label: 'PERCEIVE', title: 'Computer Vision', text: '카메라가 읽은 장면을 객체 탐지와 세그멘테이션으로 의미 있는 정보로 바꿉니다.' },
  { icon: '02', label: 'COMPUTE', title: 'Edge AI', text: '학습한 모델을 Jetson, Raspberry Pi, Hailo 같은 실제 장치에서 빠르게 동작시킵니다.' },
  { icon: '03', label: 'ACT', title: 'Robot Systems', text: 'ROS 2와 임베디드 통신을 연결해 인식 결과가 로봇의 판단과 움직임이 되게 합니다.' },
];

const skills = [
  { title: 'Robotics · Embedded', description: '로봇 제어와 장치 간 통신', items: ['C++', 'ROS 2', 'Jetson', 'Raspberry Pi', 'UART'] },
  { title: 'AI · Computer Vision', description: '모델 학습부터 엣지 배포까지', items: ['Python', 'PyTorch', 'YOLO', 'OpenCV', 'MediaPipe', 'ONNX', 'Hailo-8L'] },
  { title: 'Simulation · 3D', description: '공정 시뮬레이션과 기구 설계', items: ['RoboDK', 'Onshape'] },
  { title: 'Development · Analysis', description: '협업, 개발 환경과 데이터 분석', items: ['Git', 'Linux', 'Jira', 'MATLAB'] },
];

const achievements = [
  { year: '2025', type: '논문', title: '한국전기전자학회 하계학술대회 제1저자 발표', detail: '야간 및 악천후 환경에서의 딥러닝 기반 실시간 차선 인식 시스템' },
  { year: '2025', type: '수상', title: '2025-1학기 캡스톤디자인 결과발표회 우수상' },
  { year: '2025', type: '특허', title: '감귤 병충해 실시간 진단 및 예방 장치', detail: '특허 출원 10-2025-0016861' },
  { year: '2024', type: '수상', title: '제32회 설계 및 팀프로젝트 작품전시회 최우수상' },
  { year: '2024', type: '수상', title: 'IP 창의발명 경진대회 동상' },
  { year: '2024', type: '수상', title: '캡스톤디자인 결과발표회 장려상' },
];

export const dynamic = 'force-static';

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="현은빈 포트폴리오 홈">HYE<span>.</span></a>
        <nav aria-label="주요 메뉴"><a href="#work">Work</a><a href="#about">About</a><a href="#outcomes">Outcomes</a></nav>
        <a className="header-github" href="https://github.com/eunbin-hyun" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> ROBOTICS · PHYSICAL AI</p>
          <h1>시각과 지능을<br /><em>움직임으로</em><br />연결합니다.</h1>
          <p className="hero-description">전자공학을 바탕으로 로봇과 AI를 공부하는 현은빈입니다.<br className="desktop-break" /> 카메라가 본 장면이 실제 동작으로 이어지는 시스템을 만들고 있습니다.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">프로젝트 보기 <span aria-hidden="true">↘</span></a>
            <a className="button button-ghost" href="https://github.com/eunbin-hyun" target="_blank" rel="noreferrer"><span aria-hidden="true">●</span> GitHub</a>
          </div>
        </div>

        <div className="pipeline-visual" aria-label="카메라 입력이 비전 인식과 엣지 연산을 거쳐 로봇 동작으로 이어지는 파이프라인">
          <svg className="pipeline-map" viewBox="0 0 720 500" aria-labelledby="pipeline-title pipeline-description">
            <title id="pipeline-title">Sense to action pipeline</title>
            <desc id="pipeline-description">카메라가 장면을 감지하고, 비전 모델과 엣지 컴퓨터가 정보를 처리해 로봇의 동작으로 연결하는 과정</desc>
            <defs>
              <linearGradient id="flow-gradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#9eacff" />
                <stop offset="0.48" stopColor="#4264ff" />
                <stop offset="1" stopColor="#172b8f" />
              </linearGradient>
              <filter id="signal-glow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="7" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
              <path id="signal-path" d="M72 286 C145 176 212 177 280 254 S412 355 489 260 S604 155 668 222" />
            </defs>

            <path className="pipeline-halo" d="M72 286 C145 176 212 177 280 254 S412 355 489 260 S604 155 668 222" />
            <path className="pipeline-route" d="M72 286 C145 176 212 177 280 254 S412 355 489 260 S604 155 668 222" />
            <path className="pipeline-signal" d="M72 286 C145 176 212 177 280 254 S412 355 489 260 S604 155 668 222" />

            <g className="pipeline-node node-sense" transform="translate(70 286)">
              <circle r="36" />
              <circle className="node-core" r="11" />
              <path d="M-51-16l-30-22M-57 2h-35M-47 22l-26 28" />
              <text x="-2" y="-67" textAnchor="middle">01 · SENSE</text>
              <text className="node-detail" x="-2" y="70" textAnchor="middle">CAMERA INPUT</text>
            </g>

            <g className="vision-plane" transform="translate(230 150)">
              <path d="M0 0l105 49-28 118-112-52z" />
              <path className="vision-lane" d="M-6 103l35-42 25 51M39 124l24-38 21 47" />
              <rect className="vision-target" x="34" y="45" width="30" height="35" rx="2" transform="rotate(25 49 62)" />
              <text x="46" y="-18" textAnchor="middle">02 · PERCEIVE</text>
              <text className="node-detail" x="46" y="185" textAnchor="middle">VISION MODEL</text>
            </g>

            <g className="compute-core" transform="translate(432 300)">
              <rect x="-47" y="-47" width="94" height="94" rx="18" />
              <path d="M-26-61v14M0-61v14M26-61v14M-26 47v14M0 47v14M26 47v14M-61-26h14M-61 0h14M-61 26h14M47-26h14M47 0h14M47 26h14" />
              <path className="compute-wave" d="M-25 8l14-23L2 19l12-24 16 13" />
              <text x="0" y="-78" textAnchor="middle">03 · COMPUTE</text>
              <text className="node-detail" x="0" y="88" textAnchor="middle">EDGE AI</text>
            </g>

            <g className="robot-motion" transform="translate(636 216)">
              <path className="robot-body" d="M-59 20l14-54h75l24 54z" />
              <path d="M-26-34l9-27h28l12 27M-17-48h39" />
              <circle cx="-31" cy="25" r="18" />
              <circle cx="29" cy="25" r="18" />
              <path className="motion-line" d="M-77 52h144M-88 68h114" />
              <text x="-3" y="-94" textAnchor="middle">04 · ACT</text>
              <text className="node-detail" x="-3" y="93" textAnchor="middle">ROBOT MOTION</text>
            </g>

            <circle className="flow-pulse pulse-one" r="7" filter="url(#signal-glow)"><animateMotion dur="5.2s" repeatCount="indefinite"><mpath href="#signal-path" /></animateMotion></circle>
            <circle className="flow-pulse pulse-two" r="5" filter="url(#signal-glow)"><animateMotion dur="5.2s" begin="-2.6s" repeatCount="indefinite"><mpath href="#signal-path" /></animateMotion></circle>
          </svg>
          <div className="pipeline-status"><span><i /> LIVE SYSTEM FLOW</span><b>VISION → DECISION → MOTION</b></div>
        </div>
        <a className="scroll-cue" href="#work" aria-label="프로젝트로 이동"><span>SCROLL TO EXPLORE</span><b aria-hidden="true">↘</b></a>
      </section>

      <section className="work section-shell" id="work">
        <div className="section-heading">
          <div><p className="eyebrow"><span /> SELECTED WORK</p><h2>생각에서 멈추지 않고,<br />동작까지 연결한 프로젝트</h2></div>
          <p>인식, 엣지 배포, 로봇 제어를 하나의 시스템으로 묶어 해결한 작업을 소개합니다.</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <a className={`project-card accent-${project.accent}`} href={project.href} target="_blank" rel="noreferrer" key={project.title}>
              <div className="project-number">{project.number}</div>
              <div className="project-main"><p>{project.subtitle}</p><h3>{project.title}</h3><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
              <div className="project-detail"><p>{project.summary}</p><strong>{project.note}</strong></div>
              <span className="project-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="focus-section" aria-labelledby="focus-title">
        <div className="section-shell">
          <div className="section-heading light-heading">
            <div><p className="eyebrow"><span /> HOW I WORK</p><h2 id="focus-title">보고, 계산하고,<br />움직이게 만듭니다.</h2></div>
            <p>모델 정확도뿐 아니라 실제 장치 위에서 끝까지 동작하는 전체 흐름을 봅니다.</p>
          </div>
          <div className="focus-grid">
            {focus.map(({ icon, label, title, text }) => <article className="focus-card" key={title}><div className="focus-icon" aria-hidden="true">{icon}</div><p>{label}</p><h3>{title}</h3><span>{text}</span></article>)}
          </div>
        </div>
      </section>

      <section className="about section-shell" id="about">
        <div className="about-intro"><p className="eyebrow"><span /> ABOUT ME</p><h2>기술 사이의 빈틈을 메우는<br />로봇 개발자 <em>현은빈</em>입니다.</h2></div>
        <div className="about-grid">
          <div className="about-copy"><p>전자공학 기반에서 출발해 Computer Vision, ROS 2, 임베디드 장치와 AI 모델을 실제 시스템으로 연결하고 있습니다.</p><p>센서 입력부터 추론, 통신, 제어까지 전체 흐름을 이해하고 문제의 원인을 단계별로 좁혀가는 개발을 좋아합니다.</p></div>
          <div className="education-list" aria-label="학력 및 교육">
            <div><span>2026</span><strong>삼성청년SW·AI아카데미</strong><small>SSAFY · Robotics Track</small></div>
            <div><span>2024</span><strong>Google Cloud 기반 AI 개발자 양성 과정</strong><small>352 hours · Team Project</small></div>
            <div><span>2022–2026</span><strong>제주대학교 · 전자공학</strong><small>Electronics Engineering</small></div>
          </div>
        </div>
        <div className="stack-heading"><span>TECH STACK</span><p>프로젝트에서 직접 사용한 기술을 역할에 따라 구분했습니다.</p></div>
        <div className="skills-grid">{skills.map((group) => <div className="skill-group" key={group.title}><p>{group.title}</p><small>{group.description}</small><div>{group.items.map((item) => <span key={item}>{item}</span>)}</div></div>)}</div>
      </section>

      <section className="recognition section-shell" id="outcomes">
        <p className="eyebrow"><span /> OUTCOMES</p>
        <div className="recognition-grid">
          <h2>프로젝트를<br />기록과 성과로.</h2>
          <div className="recognition-list">
            {achievements.map((item) => <div key={`${item.year}-${item.title}`}><span>{item.year}</span><b>{item.type}</b><p><strong>{item.title}</strong>{item.detail && <small>{item.detail}</small>}</p></div>)}
          </div>
        </div>
      </section>

      <footer className="footer" id="contact"><div className="section-shell">
        <p className="eyebrow"><span /> LET&apos;S CONNECT</p>
        <div className="footer-title"><h2>함께 움직이는<br />기술을 만들어요.</h2><a href="https://github.com/eunbin-hyun" target="_blank" rel="noreferrer">GitHub에서 더 보기 <b aria-hidden="true">→</b></a></div>
        <div className="footer-bottom"><strong>HYUN EUNBIN</strong><span>Physical AI · Autonomous Robot · Edge Computer Vision</span><small>© 2026 Hyun Eunbin</small></div>
      </div></footer>
    </main>
  );
}

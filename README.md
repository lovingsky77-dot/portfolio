# 김민우 개인 브랜드 포트폴리오 웹사이트 (AI & HRD Transformation)

본 프로젝트는 단순 AI 도구 사용자를 넘어, 현업 프로세스를 구조화하고 AI를 활용해 실제 조직의 일하는 방식을 바꾸는 **‘AI 기반 업무혁신 전문가’ 김민우 님의 개인 브랜드 포트폴리오 웹사이트**입니다.

---

## 1. 프로젝트 주요 특징

* **브랜드 메시지**: *“AI를 배우는 데서 멈추지 않고, 일하는 방식을 바꿉니다.”*
* **핵심 포지셔닝 축**:
  1. **AI Application**: 인사/복리후생 AI Chatbot 제작 및 업무 자동화 (문의 30% 감축)
  2. **Work Innovation**: 채용/만족도 수치 구조화 및 경영진 의사결정 지표 산출
  3. **HRD Transformation**: GenZ 소통 매뉴얼 및 결합형 교육 프로세스 기획
* **디자인 콘셉트**: Pantone Classic Blue(`#1E3A8A`) 및 Greenery(`#15803D`) 기반의 프리미엄 HR/전략 컨설팅 어조, 다크모드 및 반응형 웹 완벽 지원.
* **기술 스택**: Vite + React + TypeScript + Vanilla CSS + GitHub Actions (GitHub Pages 자동 배포).

---

## 2. 프로젝트 폴더 구조

```text
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages 자동 배포 워크플로
├── public/
│   ├── favicon.svg             # 파비콘
│   ├── robots.txt              # 검색엔진 로봇 수집 가이드
│   ├── sitemap.xml             # 사이트맵
│   └── 404.html                # GitHub Pages SPA 리디렉트
├── src/
│   ├── components/             # Header, Footer, ProjectModal, ThemeToggle 등 UI
│   ├── data/                   # [중요] 비개발자도 수정 가능한 데이터 파일
│   │   ├── profileData.ts      # 프로필 & 브랜드 카피
│   │   ├── projectsData.ts     # 4대 대표 업무혁신 사례
│   │   ├── capabilitiesData.ts # 4단계 역량 카드
│   │   ├── experienceData.ts   # Career Journey (경력 여정)
│   │   ├── skillsData.ts       # 기술 & 도구 스킬셋
│   │   ├── beforeAfterData.ts  # Before & After 비교표
│   │   └── insightsData.ts     # 인사이트 아카이브
│   ├── sections/               # Hero, BrandStatement 등 각 페이지 섹션
│   ├── styles/                 # global.css, variables.css (Pantone 디자인 토큰)
│   ├── types/                  # TypeScript 타입 정의
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 3. 로컬 개발 및 실행 방법

### 컴퓨터 환경 요구사항
* Node.js v18 이상 설치 필요

### 실행 명령어
```bash
# 1. 의존성 패키지 설치
npm install

# 2. 로컬 개발 서버 실행 (브라우저에서 http://localhost:5173 접속)
npm run dev

# 3. 빌드 테스트 (TypeScript 오류 검사 및 빌드)
npm run build
```

---

## 4. GitHub 저장소 연결 및 GitHub Pages 배포 절차

### 1단계: GitHub에 새로운 저장소(Repository) 생성
1. [GitHub](https://github.com)에 로그인 후 `New repository` 버튼 클릭.
2. Repository name 입력 (예: `portfolio` 또는 `minwoo-kim.github.io`).
3. `Public` 선택 후 **Create repository** 클릭.

### 2단계: 소스코드 업로드 (터미널 명령)
프로젝트 폴더(`c:\portfolio`) 터미널에서 다음 명령어를 순서대로 실행합니다:

```bash
git init
git add .
git commit -m "feat: Initial commit of Minwoo Kim AI-HRD Portfolio"
git branch -M main
git remote add origin https://github.com/사용자이름/저장소이름.git
git push -u origin main
```

### 3단계: GitHub Pages 배포 설정
1. GitHub 저장소의 **Settings** 탭으로 이동.
2. 좌측 메뉴에서 **Pages** 클릭.
3. **Build and deployment** 항목의 **Source**를 `GitHub Actions`로 변경.
4. 소스코드가 `main` 브랜치에 push될 때마다 `.github/workflows/deploy.yml`이 자동 실행되어 몇 분 내에 포트폴리오 웹사이트가 배포됩니다!

---

## 5. 콘텐츠 수정 가이드 (비개발자용)

웹사이트 내 텍스트나 프로젝트 경력을 수정하고 싶으실 경우, `src/data/` 폴더 내의 파일만 수정하시면 됩니다.

1. **대표 프로젝트 추가/수정**: `src/data/projectsData.ts`
   * `PROJECTS` 배열에 항목을 추가하거나 문구를 수정하면 웹사이트의 대표 사례 및 모달 팝업에 즉시 반영됩니다.
2. **경력 사항 수정**: `src/data/experienceData.ts`
   * `CAREER_JOURNEY` 배열의 담당 업무, 해결한 문제, 만든 변화 문구를 수정합니다.
3. **이메일 및 자기소개 카피 수정**: `src/data/profileData.ts`
   * 이메일 주소, 헤드라인 카피, 성과 목록을 손쉽게 변경할 수 있습니다.

---

## 6. 라이선스 및 유의사항
* 본 프로젝트 코드는 MIT License를 따릅니다.
* 개인정보 보호를 위해 지원서류 내 민감한 인적사항(주민번호, 개인 전화번호, 상세 주소 등)은 제외되어 있습니다.
